import { pokemonData } from '../data/pokemonData.js';

/**
 * RoomBattle - 전투방 진입 시 실시간 TD 전투 시뮬레이션
 * 배치된 권속이 영웅에게 투사체를 발사하고, 영웅은 반격
 */
export class RoomBattle {
    constructor(hero, room, dungeonCanvas) {
        this.hero = hero;
        this.room = room;
        this.canvas = dungeonCanvas;
        this.active = true;
        this.elapsed = 0;

        // 전투 설정
        const cellCount = room.cells.length;
        this.maxDuration = 3000 + cellCount * 1000; // 방 크기에 비례 (3~7초)

        // 영웅 상태이상
        this.heroStatusEffects = [];

        // 어태커 (배치된 권속) — pokemonData 기반 스탯
        this.attackers = (room.deployedPokemon || []).map((p, i) => {
            const cell = room.cells[i % room.cells.length];
            const P = dungeonCanvas.PADDING;
            const CS = dungeonCanvas.CELL_SIZE;
            const level = p.level || 1;
            const specieData = pokemonData[p.key];

            // 스탯 계산 (pokemonData 있으면 실제 스탯, 없으면 폴백)
            const damage = specieData
                ? Math.floor(specieData.power.base + specieData.power.scale * level)
                : 15 + level * 8;
            const attackSpeed = specieData
                ? Math.max(300, specieData.speed.base - specieData.speed.scale * level)
                : Math.max(400, 1200 - level * 40);
            const critChance = specieData
                ? (specieData.critical.base + specieData.critical.scale * level) / 100
                : 0;

            // 어빌리티 정보
            const ability = specieData?.ability || null;
            const attackType = specieData?.attackType || 'single';

            return {
                name: p.name,
                key: p.key,
                level,
                damage,
                baseDamage: damage,
                attackSpeed,
                critChance,
                ability,
                attackType,
                cooldown: 200 + i * 300,
                x: P + (cell.col + 0.25 + Math.random() * 0.5) * CS,
                y: P + (cell.row + 0.25 + Math.random() * 0.5) * CS,
                hp: 50 + level * 20,
                maxHp: 50 + level * 20,
                flash: 0,
                sturdyUsed: false,
                moxieStacks: 0
            };
        });

        // intimidate 어빌리티: 전투 시작 시 영웅 공격력 감소
        const hasIntimidate = this.attackers.some(a => a.ability?.id === 'intimidate');
        if (hasIntimidate) {
            hero.attackMod = (hero.attackMod || 1) * 0.8;
            this.canvas.addFloatingText(hero.x, hero.y - 25, '위협! ATK↓', '#9b59b6');
        }

        // 투사체
        this.projectiles = [];

        // 영웅 반격
        this.heroAttackCooldown = 0;
        this.heroAttackSpeed = 800; // ms
        this.heroDamage = Math.floor(10 + (hero.isBoss ? 25 : 8) * (hero.attackMod || 1));

        // 전투 시작 알림
        this.canvas.addFloatingText(hero.x, hero.y - 40, 'BATTLE!', '#ff4');

        // 드래곤 참전 여부 (드래곤 둥지 인접 방이면 드래곤 지원)
        this.dragonSupport = this._checkDragonSupport();
        this.dragonCooldown = 0;
        this.dragonAttackSpeed = 2000;
    }

    _checkDragonSupport() {
        const nest = this.canvas.grid.dragonNest;
        for (const cell of this.room.cells) {
            const dist = Math.abs(cell.col - nest.col) + Math.abs(cell.row - nest.row);
            if (dist <= 2) return true;
        }
        return false;
    }

    update(delta) {
        if (!this.active) return;
        this.elapsed += delta;

        // 영웅 상태이상 처리
        this._updateStatusEffects(delta);

        // 어태커 → 영웅 공격
        for (const atk of this.attackers) {
            if (atk.hp <= 0) continue;
            atk.cooldown -= delta;
            atk.flash = Math.max(0, atk.flash - delta);

            if (atk.cooldown <= 0) {
                atk.cooldown = atk.attackSpeed;

                // 크리티컬 판정
                const isCrit = Math.random() < atk.critChance;
                const finalDmg = isCrit ? Math.floor(atk.damage * 1.5) : atk.damage;

                // 상태이상 부여 (어빌리티 기반)
                const statusEffect = this._getAbilityStatusEffect(atk.ability);

                const proj = {
                    x: atk.x, y: atk.y,
                    tx: this.hero.x, ty: this.hero.y,
                    speed: 0.35,
                    damage: finalDmg,
                    fromHero: false,
                    color: isCrit ? '#ffaa00' : '#ff4444',
                    isCrit,
                    statusEffect,
                    attackType: atk.attackType,
                    sourceAtk: atk
                };

                this.projectiles.push(proj);
            }
        }

        // 영웅 반격
        this.heroAttackCooldown -= delta;
        if (this.heroAttackCooldown <= 0) {
            const aliveAttackers = this.attackers.filter(a => a.hp > 0);
            if (aliveAttackers.length > 0) {
                const target = aliveAttackers[Math.floor(Math.random() * aliveAttackers.length)];
                this.heroAttackCooldown = this.heroAttackSpeed;
                this.projectiles.push({
                    x: this.hero.x, y: this.hero.y,
                    tx: target.x, ty: target.y,
                    targetAtk: target,
                    speed: 0.3,
                    damage: this.heroDamage,
                    fromHero: true,
                    color: '#44aaff'
                });
            }
        }

        // 드래곤 지원 공격
        if (this.dragonSupport) {
            this.dragonCooldown -= delta;
            if (this.dragonCooldown <= 0) {
                this.dragonCooldown = this.dragonAttackSpeed;
                const dragon = this.canvas.main.data.dragon;
                const dragonAtk = (dragon && dragon.stats && dragon.stats.attack) || 10;
                this.projectiles.push({
                    x: this.hero.x + (Math.random() - 0.5) * 30,
                    y: this.hero.y - 60,
                    tx: this.hero.x, ty: this.hero.y,
                    speed: 0.2,
                    damage: dragonAtk,
                    fromHero: false,
                    color: '#ff8800',
                    size: 7
                });
            }
        }

        // 투사체 업데이트
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const p = this.projectiles[i];
            const dx = p.tx - p.x;
            const dy = p.ty - p.y;
            const dist = Math.hypot(dx, dy);

            if (dist < 12) {
                // 명중
                if (p.fromHero && p.targetAtk) {
                    this._applyHeroHit(p);
                } else if (!p.fromHero) {
                    this._applyAttackerHit(p);
                }
                this.projectiles.splice(i, 1);
                continue;
            }

            const moveSpeed = p.speed * delta;
            p.x += (dx / dist) * moveSpeed;
            p.y += (dy / dist) * moveSpeed;
        }

        // 전투 종료 조건
        const allDead = this.attackers.every(a => a.hp <= 0);
        if (this.hero.health <= 0 || allDead || this.elapsed >= this.maxDuration) {
            this._endBattle();
        }
    }

    _getAbilityStatusEffect(ability) {
        if (!ability) return null;
        switch (ability.id) {
            case 'burn':
            case 'blaze':
                return { type: 'burn', damage: 3, duration: 2000, timer: 0, tickInterval: 500 };
            case 'poison':
            case 'toxicBoost':
                return { type: 'poison', damage: 2, duration: 3000, timer: 0, tickInterval: 500 };
            case 'slow':
            case 'snowWarning':
            case 'snowCloak':
                return { type: 'slow', speedMod: 0.5, duration: 2000, timer: 0 };
            default:
                return null;
        }
    }

    _updateStatusEffects(delta) {
        for (let i = this.heroStatusEffects.length - 1; i >= 0; i--) {
            const eff = this.heroStatusEffects[i];
            eff.duration -= delta;

            if (eff.duration <= 0) {
                // 효과 종료
                if (eff.type === 'slow') {
                    this.hero.speed /= eff.speedMod;
                }
                this.heroStatusEffects.splice(i, 1);
                continue;
            }

            // DoT 효과 (burn, poison)
            if (eff.damage) {
                eff.timer += delta;
                if (eff.timer >= eff.tickInterval) {
                    eff.timer -= eff.tickInterval;
                    this.hero.health -= eff.damage;
                    const color = eff.type === 'burn' ? '#ff6600' : '#aa00ff';
                    const label = eff.type === 'burn' ? '화상' : '독';
                    this.canvas.addFloatingText(
                        this.hero.x + (Math.random() - 0.5) * 20,
                        this.hero.y - 10,
                        `${label} -${eff.damage}`, color
                    );
                }
            }
        }
    }

    _applyHeroHit(p) {
        const target = p.targetAtk;
        let dmg = p.damage;

        // sturdy 어빌리티: 첫 치명타 방어
        if (target.ability?.id === 'sturdy' && !target.sturdyUsed && target.hp - dmg <= 0 && target.hp > 1) {
            target.hp = 1;
            target.sturdyUsed = true;
            target.flash = 150;
            this.canvas.addFloatingText(target.x, target.y - 15, '근성!', '#27ae60');
            return;
        }

        target.hp -= dmg;
        target.flash = 150;
        this.canvas.addFloatingText(
            target.x, target.y - 15,
            `-${dmg}`, '#44aaff'
        );

        if (target.hp <= 0) {
            this.canvas.addFloatingText(
                target.x, target.y - 30,
                'K.O.', '#ff0'
            );
            // moxie: 아군 권속 처치 시 다른 권속 강화 (역방향이므로 적용 안 함)
        }
    }

    _applyAttackerHit(p) {
        let dmg = p.damage;

        // 크리티컬 표시
        if (p.isCrit) {
            this.canvas.addFloatingText(
                this.hero.x + (Math.random() - 0.5) * 30,
                this.hero.y - 30,
                'CRIT!', '#ffaa00'
            );
        }

        this.hero.health -= dmg;
        this.canvas.addFloatingText(
            this.hero.x + (Math.random() - 0.5) * 20,
            this.hero.y - 15,
            `-${dmg}`, p.color
        );

        // 상태이상 부여
        if (p.statusEffect) {
            const existing = this.heroStatusEffects.find(e => e.type === p.statusEffect.type);
            if (!existing) {
                const eff = { ...p.statusEffect };
                this.heroStatusEffects.push(eff);
                if (eff.type === 'slow') {
                    this.hero.speed *= eff.speedMod;
                }
                const labels = { burn: '화상!', poison: '중독!', slow: '둔화!' };
                const colors = { burn: '#ff6600', poison: '#aa00ff', slow: '#00ccff' };
                this.canvas.addFloatingText(
                    this.hero.x, this.hero.y - 40,
                    labels[eff.type] || eff.type, colors[eff.type] || '#fff'
                );
            } else {
                existing.duration = p.statusEffect.duration; // 갱신
            }
        }

        // AOE (splash): 같은 방에 있는 다른 영웅에게도 피해
        if (p.attackType === 'splash' && p.sourceAtk) {
            const splashDmg = Math.floor(dmg * 0.5);
            for (const otherHero of this.canvas.heroes) {
                if (otherHero === this.hero) continue;
                if (!otherHero.inBattle) continue;
                // 같은 방인지 체크
                const inRoom = this.room.cells.some(c =>
                    otherHero.currentCell.col === c.col && otherHero.currentCell.row === c.row
                );
                if (inRoom) {
                    otherHero.health -= splashDmg;
                    this.canvas.addFloatingText(
                        otherHero.x, otherHero.y - 15,
                        `-${splashDmg} AOE`, '#ff6644'
                    );
                }
            }
        }

        // moxie: 영웅 처치 시 공격력 +10%
        if (this.hero.health <= 0 && p.sourceAtk?.ability?.id === 'moxie') {
            p.sourceAtk.moxieStacks++;
            p.sourceAtk.damage = Math.floor(p.sourceAtk.baseDamage * (1 + p.sourceAtk.moxieStacks * 0.1));
            this.canvas.addFloatingText(
                p.sourceAtk.x, p.sourceAtk.y - 25,
                'MOXIE↑', '#ff4'
            );
        }
    }

    _endBattle() {
        this.active = false;
        this.projectiles = [];

        // slow 상태이상 정리
        for (const eff of this.heroStatusEffects) {
            if (eff.type === 'slow') {
                this.hero.speed /= eff.speedMod;
            }
        }
        this.heroStatusEffects = [];

        // 생존 어태커 → deployedPokemon HP 반영 (쓰러진 권속 제거)
        const surviving = [];
        for (let i = 0; i < this.attackers.length; i++) {
            if (this.attackers[i].hp > 0) {
                surviving.push(this.room.deployedPokemon[i]);
            }
        }
        this.room.deployedPokemon = surviving;
        this.canvas.main.data.dungeon = this.canvas.grid.serialize();

        // 전투 결과 표시
        if (this.hero.health <= 0) {
            this.canvas.addFloatingText(this.hero.x, this.hero.y - 40, 'DEFEATED!', '#0f0');
            this.canvas.main.data.stats.heroesDefeated++;
        } else {
            this.canvas.addFloatingText(this.hero.x, this.hero.y - 40, 'SURVIVED', '#f44');
        }

        // 경험치 부여
        if (this.room.deployedPokemon) {
            for (const p of this.room.deployedPokemon) {
                p.exp = (p.exp || 0) + 10;
                if (p.exp >= p.level * 20) {
                    p.exp = 0;
                    p.level++;
                    this.canvas.addFloatingText(
                        this.hero.x + Math.random() * 40 - 20,
                        this.hero.y - 50,
                        `${p.name} Lv.UP!`, '#ff0'
                    );
                }
            }
        }

        if (this.canvas.main.UI) this.canvas.main.UI.update();
        this.canvas.main.saveOnEvent('battle_end');
    }

    draw(ctx) {
        if (!this.active) return;

        const P = this.canvas.PADDING;
        const CS = this.canvas.CELL_SIZE;

        // 전투 영역 오버레이
        ctx.save();
        for (const cell of this.room.cells) {
            const x = P + cell.col * CS;
            const y = P + cell.row * CS;
            ctx.fillStyle = 'rgba(255, 50, 50, 0.08)';
            ctx.fillRect(x, y, CS, CS);
        }

        // 전투 타이머 바
        const progress = 1 - this.elapsed / this.maxDuration;
        const barX = P + this.room.cells[0].col * CS;
        const barY = P + this.room.cells[0].row * CS - 8;
        const barW = CS * Math.min(this.room.cells.length, 3);
        ctx.fillStyle = '#333';
        ctx.fillRect(barX, barY, barW, 5);
        ctx.fillStyle = progress > 0.3 ? '#0af' : '#f44';
        ctx.fillRect(barX, barY, barW * progress, 5);

        // 어태커 렌더링
        for (const atk of this.attackers) {
            if (atk.hp <= 0) continue;

            // 피격 플래시
            const isFlash = atk.flash > 0;
            ctx.fillStyle = isFlash ? '#fff' : '#e74c3c';
            ctx.beginPath();
            ctx.arc(atk.x, atk.y, 12, 0, Math.PI * 2);
            ctx.fill();

            // 외곽선
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // HP 바
            const hpRatio = Math.max(0, atk.hp / atk.maxHp);
            ctx.fillStyle = '#300';
            ctx.fillRect(atk.x - 14, atk.y - 20, 28, 4);
            ctx.fillStyle = hpRatio > 0.5 ? '#0f0' : hpRatio > 0.25 ? '#ff0' : '#f00';
            ctx.fillRect(atk.x - 14, atk.y - 20, 28 * hpRatio, 4);

            // 이름
            ctx.fillStyle = '#fff';
            ctx.font = '9px PressStart2P, monospace';
            ctx.textAlign = 'center';
            ctx.fillText(atk.name.substring(0, 4), atk.x, atk.y + 4);
        }

        // 투사체 렌더링
        for (const p of this.projectiles) {
            const size = p.size || (p.isCrit ? 6 : 4);
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
            ctx.fill();

            // 꼬리 효과
            ctx.globalAlpha = 0.4;
            ctx.beginPath();
            ctx.arc(p.x - (p.tx - p.x) * 0.05, p.y - (p.ty - p.y) * 0.05, size * 0.7, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1.0;
        }

        // 상태이상 아이콘 (영웅 위)
        if (this.heroStatusEffects.length > 0) {
            const icons = this.heroStatusEffects.map(e => {
                if (e.type === 'burn') return '🔥';
                if (e.type === 'poison') return '☠️';
                if (e.type === 'slow') return '❄️';
                return '⚡';
            }).join('');
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(icons, this.hero.x, this.hero.y - 45);
        }

        // 드래곤 지원 표시
        if (this.dragonSupport) {
            const cx = P + (this.room.cells[0].col + 0.5) * CS;
            const cy = P + this.room.cells[0].row * CS - 16;
            ctx.font = '14px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillStyle = '#ff8800';
            ctx.fillText('🐉 지원 중', cx, cy);
        }

        ctx.restore();
    }
}
