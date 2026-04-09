import { DungeonGrid } from './dungeon/DungeonGrid.js';
import { ROOM_TEMPLATES } from './dungeon/RoomTemplate.js';
import { ROOM_TYPES } from './data/roomData.js';
import { RoomBattle } from './dungeon/RoomBattle.js';

/**
 * DungeonCanvas — 8x8 비스포크 던전 그리드 캔버스 렌더링 + 영웅 이동
 */
export class DungeonCanvas {
    constructor(main) {
        this.main = main;
        this.canvas = document.createElement('canvas');
        this.canvas.width = 1080;
        this.canvas.height = 1080;
        this.ctx = this.canvas.getContext('2d');
        document.getElementById('dungeon-wrapper').appendChild(this.canvas);

        this.stopped = false;
        this.FPS = 60;
        this.frameDuration = 1000 / this.FPS;
        this.lastTime = 0;
        this.animate = this.animate.bind(this);
        this.speedFactor = 1.0;

        // 던전 그리드
        this.grid = this._loadOrCreateGrid();

        // 영웅 / 이펙트 / 전투
        this.heroes = [];
        this.floatingTexts = [];
        this.activeBattles = []; // RoomBattle 인스턴스들

        // 패시브 효과 틱 (마력방, 훈련소)
        this._passiveTickTimer = 0;
        this._PASSIVE_TICK_INTERVAL = 60000; // 60초

        // 인터랙션 상태
        this.selectedCell = null;       // {col, row} - 선택된 셀
        this.ghostRoom = null;          // 배치 프리뷰: {template, type, anchorCol, anchorRow, rotation}
        this.hoveredCell = null;         // 마우스 호버 셀

        // 그리드 렌더링 상수
        this.PADDING = 40;
        this.GRID_SIZE = 8;
        this.CELL_SIZE = (1080 - this.PADDING * 2) / this.GRID_SIZE; // 125px

        this._bindInput();
    }

    _loadOrCreateGrid() {
        const dungeonData = this.main.data.dungeon;
        if (dungeonData && dungeonData.rooms && dungeonData.rooms.length > 0) {
            return DungeonGrid.deserialize(dungeonData);
        }
        return new DungeonGrid(8);
    }

    _bindInput() {
        this.canvas.addEventListener('mousedown', (e) => {
            const cell = this._eventToCell(e.offsetX, e.offsetY);
            if (cell) this._handleCellClick(cell.col, cell.row);
        });

        this.canvas.addEventListener('mousemove', (e) => {
            this.hoveredCell = this._eventToCell(e.offsetX, e.offsetY);
        });

        this.canvas.addEventListener('mouseleave', () => {
            this.hoveredCell = null;
        });

        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const rect = e.target.getBoundingClientRect();
            const touch = e.targetTouches[0];
            const scaleX = this.canvas.width / rect.width;
            const scaleY = this.canvas.height / rect.height;
            const x = (touch.clientX - rect.left) * scaleX;
            const y = (touch.clientY - rect.top) * scaleY;
            const cell = this._eventToCell(x, y);
            if (cell) this._handleCellClick(cell.col, cell.row);
        }, { passive: false });
    }

    _eventToCell(x, y) {
        const col = Math.floor((x - this.PADDING) / this.CELL_SIZE);
        const row = Math.floor((y - this.PADDING) / this.CELL_SIZE);
        if (col < 0 || col >= this.GRID_SIZE || row < 0 || row >= this.GRID_SIZE) return null;
        return { col, row };
    }

    _handleCellClick(col, row) {
        // 고스트 방이 있으면 배치 시도
        if (this.ghostRoom) {
            this.tryPlaceGhostRoom(col, row);
            return;
        }

        // 기존 방 선택 또는 빈 셀 선택
        this.selectedCell = { col, row };
        if (this.main.UI) this.main.UI.update();
    }

    /** 고스트 방 배치 모드 시작 */
    startPlacement(templateKey, typeKey) {
        const template = ROOM_TEMPLATES[templateKey];
        if (!template) return;
        this.ghostRoom = {
            template,
            typeKey,
            rotation: 0
        };
    }

    /** 고스트 방 회전 */
    rotateGhost() {
        if (!this.ghostRoom) return;
        const { template, rotation } = this.ghostRoom;
        const validRots = template.validRotations;
        const currentIdx = validRots.indexOf(rotation);
        this.ghostRoom.rotation = validRots[(currentIdx + 1) % validRots.length];
    }

    /** 고스트 방 배치 취소 */
    cancelPlacement() {
        this.ghostRoom = null;
    }

    /** 고스트 방 배치 시도 */
    tryPlaceGhostRoom(anchorCol, anchorRow) {
        if (!this.ghostRoom) return false;
        const { template, typeKey, rotation } = this.ghostRoom;

        const room = this.grid.placeRoom(template, typeKey, anchorCol, anchorRow, rotation);
        if (!room) {
            this.addFloatingText(
                this.PADDING + anchorCol * this.CELL_SIZE + this.CELL_SIZE / 2,
                this.PADDING + anchorRow * this.CELL_SIZE + this.CELL_SIZE / 2,
                '배치 불가!', '#f44'
            );
            return false;
        }

        // 비용 차감
        const type = ROOM_TYPES[typeKey];
        const existingCount = [...this.grid.rooms.values()].filter(r => r.type === typeKey).length - 1;
        const cost = Math.floor(type.baseCost * (1 + existingCount * 0.25));

        if (this.main.data.dragon.gold < cost) {
            this.grid.removeRoom(room.id);
            this.addFloatingText(
                this.PADDING + anchorCol * this.CELL_SIZE + this.CELL_SIZE / 2,
                this.PADDING + anchorRow * this.CELL_SIZE + this.CELL_SIZE / 2,
                '골드 부족!', '#f44'
            );
            return false;
        }

        this.main.data.dragon.gold -= cost;
        this.addFloatingText(
            this.PADDING + anchorCol * this.CELL_SIZE + this.CELL_SIZE / 2,
            this.PADDING + anchorRow * this.CELL_SIZE + this.CELL_SIZE / 2,
            `-${cost}G`, '#f44'
        );

        // 세이브에 반영 + 이벤트 저장
        this.main.data.dungeon = this.grid.serialize();
        this.main.saveOnEvent('room_placed');
        if (this.main.UI) this.main.UI.showToast(`${ROOM_TYPES[typeKey]?.name || '방'} 건설!`, 'success');
        this.ghostRoom = null;
        this.selectedCell = { col: anchorCol, row: anchorRow };
        if (this.main.UI) this.main.UI.update();
        return true;
    }

    /** 선택된 방 삭제 */
    removeSelectedRoom() {
        if (!this.selectedCell) return false;
        const room = this.grid.getRoomAt(this.selectedCell.col, this.selectedCell.row);
        if (!room) return false;

        // 환불 (50%)
        const type = ROOM_TYPES[room.type];
        const refund = type ? Math.floor(type.baseCost * 0.5) : 0;

        this.grid.removeRoom(room.id);
        this.main.data.dragon.gold += refund;
        this.main.data.dungeon = this.grid.serialize();
        this.main.saveOnEvent('room_removed');

        const cx = this.PADDING + this.selectedCell.col * this.CELL_SIZE + this.CELL_SIZE / 2;
        const cy = this.PADDING + this.selectedCell.row * this.CELL_SIZE + this.CELL_SIZE / 2;
        if (refund > 0) this.addFloatingText(cx, cy, `+${refund}G`, '#4f4');
        this.addFloatingText(cx, cy - 30, '철거 완료', '#aaa');

        this.selectedCell = null;
        if (this.main.UI) this.main.UI.update();
        return true;
    }

    addFloatingText(x, y, text, color) {
        this.floatingTexts.push({ x, y, text, color, life: 1.0 });
    }

    // ═══════════ 게임 루프 ═══════════

    load() {
        this.stopped = false;
        this.lastTime = performance.now();
        if (this.gameWorker) this.gameWorker.terminate();

        const workerCode = `
            let timerId;
            const interval = ${this.frameDuration};
            self.onmessage = function(e) {
                if (e.data === 'start') {
                    timerId = setInterval(() => { self.postMessage('tick'); }, interval);
                } else if (e.data === 'stop') clearInterval(timerId);
            };
        `;
        const blob = new Blob([workerCode], { type: 'application/javascript' });
        this.gameWorker = new Worker(URL.createObjectURL(blob));
        this.gameWorker.onmessage = () => { this.animate(performance.now()); };
        this.gameWorker.postMessage('start');
    }

    pause() {
        this.stopped = true;
        if (this.gameWorker) this.gameWorker.postMessage('stop');
    }

    resume() {
        if (this.stopped) {
            this.stopped = false;
            this.load();
        }
    }

    animate(time) {
        if (this.stopped) return;
        if (!this.lastTime) this.lastTime = time;

        let delta = time - this.lastTime;
        if (delta < this.frameDuration) return;
        if (delta > 60) delta = 60;
        this.lastTime = time - (delta % this.frameDuration);
        const scaledDelta = delta * this.speedFactor;

        const ctx = this.ctx;
        const P = this.PADDING;
        const CS = this.CELL_SIZE;

        // 배경
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, 1080, 1080);

        // ── 그리드 라인 ──
        ctx.strokeStyle = '#1a1a2e';
        ctx.lineWidth = 1;
        for (let i = 0; i <= this.GRID_SIZE; i++) {
            ctx.beginPath();
            ctx.moveTo(P + i * CS, P);
            ctx.lineTo(P + i * CS, P + this.GRID_SIZE * CS);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(P, P + i * CS);
            ctx.lineTo(P + this.GRID_SIZE * CS, P + i * CS);
            ctx.stroke();
        }

        // ── 배치된 방 렌더링 ──
        const drawnRooms = new Set();
        for (let row = 0; row < this.GRID_SIZE; row++) {
            for (let col = 0; col < this.GRID_SIZE; col++) {
                const roomId = this.grid.cells[row][col];
                if (roomId !== null && !drawnRooms.has(roomId)) {
                    drawnRooms.add(roomId);
                    this._drawRoom(ctx, this.grid.rooms.get(roomId), P, CS, time);
                }
            }
        }

        // ── 입구 / 둥지 ──
        this._drawFixedPoint(ctx, this.grid.entrance, '🚪', '#00CED1', P, CS);
        this._drawFixedPoint(ctx, this.grid.dragonNest, '🐉', '#8a2be2', P, CS);

        // ── 고스트 프리뷰 (배치 모드) ──
        if (this.ghostRoom && this.hoveredCell) {
            this._drawGhostPreview(ctx, P, CS);
        }

        // ── 셀 선택 하이라이트 ──
        if (this.selectedCell) {
            ctx.strokeStyle = '#0f0';
            ctx.lineWidth = 4;
            ctx.strokeRect(
                P + this.selectedCell.col * CS + 2,
                P + this.selectedCell.row * CS + 2,
                CS - 4, CS - 4
            );
        }

        // ── 영웅 이동 + 렌더링 ──
        this._updateHeroes(ctx, scaledDelta, time, P, CS);

        // ── 전투 업데이트 + 렌더링 ──
        for (let i = this.activeBattles.length - 1; i >= 0; i--) {
            const battle = this.activeBattles[i];
            battle.update(scaledDelta);
            battle.draw(ctx);
            if (!battle.active) {
                this.activeBattles.splice(i, 1);
            }
        }

        // ── 패시브 효과 틱 (마력방, 훈련소) ──
        this._passiveTickTimer += scaledDelta;
        if (this._passiveTickTimer >= this._PASSIVE_TICK_INTERVAL) {
            this._passiveTickTimer -= this._PASSIVE_TICK_INTERVAL;
            this._processPassiveTick();
        }

        // ── 플로팅 텍스트 ──
        for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
            const ft = this.floatingTexts[i];
            ft.y -= 0.8;
            ft.life -= 0.02;
            if (ft.life <= 0) { this.floatingTexts.splice(i, 1); continue; }
            ctx.globalAlpha = ft.life;
            ctx.fillStyle = ft.color;
            ctx.font = 'bold 22px PressStart2P, monospace';
            ctx.textAlign = 'center';
            ctx.fillText(ft.text, ft.x, ft.y);
            ctx.globalAlpha = 1.0;
        }
    }

    // ═══════════ 렌더링 헬퍼 ═══════════

    _drawRoom(ctx, room, P, CS, time) {
        if (!room) return;
        const type = ROOM_TYPES[room.type];
        const color = type ? type.color : '#444';

        // 방의 셀들을 채우기
        for (const cell of room.cells) {
            const x = P + cell.col * CS;
            const y = P + cell.row * CS;

            // 방 배경
            ctx.fillStyle = color + '40'; // 25% 투명도
            ctx.fillRect(x + 2, y + 2, CS - 4, CS - 4);

            // 방 테두리 (인접 셀이 같은 방이 아닌 면만)
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;

            const isInRoom = (c, r) => room.cells.some(cc => cc.col === c && cc.row === r);

            // 상
            if (!isInRoom(cell.col, cell.row - 1)) {
                ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + CS, y); ctx.stroke();
            }
            // 하
            if (!isInRoom(cell.col, cell.row + 1)) {
                ctx.beginPath(); ctx.moveTo(x, y + CS); ctx.lineTo(x + CS, y + CS); ctx.stroke();
            }
            // 좌
            if (!isInRoom(cell.col - 1, cell.row)) {
                ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + CS); ctx.stroke();
            }
            // 우
            if (!isInRoom(cell.col + 1, cell.row)) {
                ctx.beginPath(); ctx.moveTo(x + CS, y); ctx.lineTo(x + CS, y + CS); ctx.stroke();
            }
        }

        // 방 중심에 이모지/이름
        const centerX = room.cells.reduce((s, c) => s + c.col, 0) / room.cells.length;
        const centerY = room.cells.reduce((s, c) => s + c.row, 0) / room.cells.length;
        const cx = P + (centerX + 0.5) * CS;
        const cy = P + (centerY + 0.5) * CS;

        if (type) {
            ctx.font = '28px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(type.emoji, cx, cy + 4);

            ctx.font = 'bold 13px PressStart2P, monospace';
            ctx.fillStyle = '#fff';
            ctx.fillText(type.name, cx, cy + 28);
        }

        // 배치된 권속 수 표시
        if (room.deployedPokemon && room.deployedPokemon.length > 0) {
            ctx.font = '12px PressStart2P, monospace';
            ctx.fillStyle = '#ff0';
            ctx.fillText(`x${room.deployedPokemon.length}`, cx + 30, cy - 20);
        }
    }

    _drawFixedPoint(ctx, point, emoji, color, P, CS) {
        const x = P + point.col * CS;
        const y = P + point.row * CS;

        ctx.fillStyle = color + '60';
        ctx.fillRect(x + 2, y + 2, CS - 4, CS - 4);
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.strokeRect(x + 2, y + 2, CS - 4, CS - 4);

        ctx.font = '32px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(emoji, x + CS / 2, y + CS / 2 + 8);
    }

    _drawGhostPreview(ctx, P, CS) {
        const { template, typeKey, rotation } = this.ghostRoom;
        const { col: anchorCol, row: anchorRow } = this.hoveredCell;
        const offsets = template.getRotatedOffsets(rotation);
        const type = ROOM_TYPES[typeKey];

        const canPlace = this.grid.canPlace(offsets, anchorCol, anchorRow);
        const color = canPlace ? '#0f04' : '#f004';
        const borderColor = canPlace ? '#0f0' : '#f00';

        for (const offset of offsets) {
            const col = anchorCol + offset.col;
            const row = anchorRow + offset.row;
            if (col < 0 || col >= this.GRID_SIZE || row < 0 || row >= this.GRID_SIZE) continue;

            const x = P + col * CS;
            const y = P + row * CS;

            ctx.fillStyle = color;
            ctx.fillRect(x + 2, y + 2, CS - 4, CS - 4);
            ctx.strokeStyle = borderColor;
            ctx.lineWidth = 2;
            ctx.setLineDash([6, 4]);
            ctx.strokeRect(x + 2, y + 2, CS - 4, CS - 4);
            ctx.setLineDash([]);
        }

        // 중심에 이모지
        if (type) {
            const cx = P + (anchorCol + 0.5) * CS;
            const cy = P + (anchorRow + 0.5) * CS;
            ctx.globalAlpha = 0.7;
            ctx.font = '28px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(type.emoji, cx, cy + 4);
            ctx.globalAlpha = 1.0;
        }
    }

    // ═══════════ 영웅 시스템 ═══════════

    _updateHeroes(ctx, scaledDelta, time, P, CS) {
        for (let i = this.heroes.length - 1; i >= 0; i--) {
            const hero = this.heroes[i];

            // 수감 중이면 탈옥 확률 체크
            if (hero.imprisoned) {
                hero.imprisonTimer += scaledDelta;
                // 매 1초마다 탈옥 확률 체크
                if (hero.imprisonTimer >= 1000) {
                    hero.imprisonTimer -= 1000;
                    const room = hero.imprisonRoom;
                    const escapeChance = Math.max(0.05, 0.2 - (room && room.level ? (room.level - 1) * 0.03 : 0));
                    if (Math.random() < escapeChance) {
                        hero.imprisoned = false;
                        hero.imprisonRoom = null;
                        this.addFloatingText(hero.x, hero.y - 20, '탈옥!', '#e74c3c');
                    }
                }
                this._drawHero(ctx, hero);
                continue;
            }

            // 전투 중이면 이동 정지
            if (hero.inBattle) {
                if (!hero.inBattle.active) {
                    hero.inBattle = null; // 전투 종료 → 이동 재개
                } else {
                    this._drawHero(ctx, hero);
                    continue;
                }
            }

            // 목표가 없으면 다음 방 결정
            if (!hero.targetPos) {
                if (hero.health <= 0) {
                    this._heroDefeated(hero);
                    this.heroes.splice(i, 1);
                    continue;
                }

                // 현재 위치가 둥지면 처리
                if (hero.currentCell.col === this.grid.dragonNest.col &&
                    hero.currentCell.row === this.grid.dragonNest.row) {
                    this.main.data.dragon.gold += hero.gold;
                    this.addFloatingText(hero.x, hero.y, `+${hero.gold}G`, '#8a2be2');
                    if (this.main.UI) this.main.UI.update();
                    this.heroes.splice(i, 1);
                    continue;
                }

                // 방 효과 적용
                const room = this.grid.getRoomAt(hero.currentCell.col, hero.currentCell.row);
                if (room && !hero.visitedRooms.has(room.id)) {
                    hero.visitedRooms.add(room.id);
                    this._applyRoomEffect(hero, room);
                }

                // 다음 이동 결정 (둥지 방향으로 A* 기반)
                const nextCell = this._getNextCell(hero);
                if (!nextCell) {
                    this.heroes.splice(i, 1);
                    continue;
                }

                hero.targetPos = {
                    x: P + (nextCell.col + 0.5) * CS,
                    y: P + (nextCell.row + 0.5) * CS
                };
                hero.nextCell = nextCell;

                const dx = hero.targetPos.x - hero.x;
                const dy = hero.targetPos.y - hero.y;
                const dist = Math.hypot(dx, dy);
                hero.vx = (dx / dist) * hero.speed;
                hero.vy = (dy / dist) * hero.speed;
            }

            // 이동
            hero.x += hero.vx * scaledDelta;
            hero.y += hero.vy * scaledDelta;

            // 도착 체크
            if (hero.targetPos) {
                const dist = Math.hypot(hero.targetPos.x - hero.x, hero.targetPos.y - hero.y);
                const maxMove = hero.speed * scaledDelta;
                if (dist <= maxMove + 1) {
                    hero.x = hero.targetPos.x;
                    hero.y = hero.targetPos.y;
                    hero.previousCell = hero.currentCell;
                    hero.currentCell = hero.nextCell;
                    hero.targetPos = null;
                }
            }

            // 렌더링
            this._drawHero(ctx, hero);
        }
    }

    _drawHero(ctx, hero) {
        // 몸체 (전투 중이면 적색 펄스)
        const inCombat = hero.inBattle && hero.inBattle.active;
        ctx.fillStyle = inCombat ? `hsl(0, 80%, ${55 + Math.sin(Date.now() * 0.01) * 15}%)` : (hero.isBoss ? '#ff6b6b' : '#fff');
        ctx.beginPath();
        ctx.arc(hero.x, hero.y, hero.isBoss ? 18 : 14, 0, Math.PI * 2);
        ctx.fill();

        // HP 바
        const barW = 36;
        const hpRatio = Math.max(0, hero.health / hero.maxHealth);
        ctx.fillStyle = '#300';
        ctx.fillRect(hero.x - barW / 2, hero.y - 26, barW, 5);
        ctx.fillStyle = hpRatio > 0.5 ? '#0f0' : hpRatio > 0.25 ? '#ff0' : '#f00';
        ctx.fillRect(hero.x - barW / 2, hero.y - 26, barW * hpRatio, 5);

        // 골드
        ctx.fillStyle = '#ffd700';
        ctx.font = '11px PressStart2P, monospace';
        ctx.textAlign = 'center';
        ctx.fillText(hero.gold + 'g', hero.x, hero.y - 32);
    }

    _applyRoomEffect(hero, room) {
        const type = ROOM_TYPES[room.type];
        if (!type) return;

        switch (type.effect) {
            case 'damage': {
                const dmg = type.baseDamage + (room.level - 1) * type.damageScale;
                hero.health -= dmg;
                const cx = this.PADDING + (room.cells[0].col + 0.5) * this.CELL_SIZE;
                const cy = this.PADDING + (room.cells[0].row + 0.5) * this.CELL_SIZE;
                this.addFloatingText(cx, cy, `-${dmg} HP`, '#f44');
                break;
            }
            case 'gold_drain': {
                const drain = Math.min(hero.gold, type.goldDrain);
                hero.gold -= drain;
                this.main.data.dragon.gold += drain;
                if (drain > 0) {
                    const cx = this.PADDING + (room.cells[0].col + 0.5) * this.CELL_SIZE;
                    const cy = this.PADDING + (room.cells[0].row + 0.5) * this.CELL_SIZE;
                    this.addFloatingText(cx, cy, `+${drain}G`, '#ffd700');
                }
                if (this.main.UI) this.main.UI.update();
                break;
            }
            case 'debuff': {
                hero.speed *= (1 - type.debuffs.speedDown);
                hero.attackMod = (hero.attackMod || 1) * (1 - type.debuffs.attackDown);
                break;
            }
            case 'friendly_fire': {
                if (Math.random() < type.friendlyFireChance) {
                    const selfDmg = Math.floor(hero.maxHealth * 0.15);
                    hero.health -= selfDmg;
                    const cx = this.PADDING + (room.cells[0].col + 0.5) * this.CELL_SIZE;
                    const cy = this.PADDING + (room.cells[0].row + 0.5) * this.CELL_SIZE;
                    this.addFloatingText(cx, cy, `동족상잔 -${selfDmg}`, '#666');
                }
                break;
            }
            case 'capture': {
                hero.imprisoned = true;
                hero.imprisonTimer = 0;
                hero.imprisonRoom = room;
                const cx = this.PADDING + (room.cells[0].col + 0.5) * this.CELL_SIZE;
                const cy = this.PADDING + (room.cells[0].row + 0.5) * this.CELL_SIZE;
                this.addFloatingText(cx, cy, '수감!', '#7f8c8d');
                break;
            }
            case 'mana_regen':
            case 'exp_regen':
                // 패시브 효과 — 영웅 진입 시 효과 없음, _passiveTick에서 처리
                break;
            case 'td_battle': {
                // Phase 3: 실시간 TD 전투 시뮬레이션
                if (room.deployedPokemon && room.deployedPokemon.length > 0) {
                    const battle = new RoomBattle(hero, room, this);
                    this.activeBattles.push(battle);
                    hero.inBattle = battle; // 전투 중 이동 정지용
                } else {
                    // 배치된 권속 없으면 그냥 통과
                    this.addFloatingText(hero.x, hero.y - 20, '무방비!', '#888');
                }
                break;
            }
        }

        if (hero.health <= 0) {
            this.main.data.stats.heroesDefeated++;
        }
    }

    _processPassiveTick() {
        for (const room of this.grid.rooms.values()) {
            const type = ROOM_TYPES[room.type];
            if (!type) continue;

            if (type.effect === 'mana_regen') {
                // 마력방: manaStones 증가
                this.main.data.dragon.manaStones = (this.main.data.dragon.manaStones || 0) + type.manaPerMinute;
                const cx = this.PADDING + (room.cells[0].col + 0.5) * this.CELL_SIZE;
                const cy = this.PADDING + (room.cells[0].row + 0.5) * this.CELL_SIZE;
                this.addFloatingText(cx, cy, `+${type.manaPerMinute} 마나`, '#8e44ad');
            }

            if (type.effect === 'exp_regen' && room.deployedPokemon && room.deployedPokemon.length > 0) {
                // 훈련소: 배치된 권속 경험치 증가
                for (const p of room.deployedPokemon) {
                    p.exp = (p.exp || 0) + type.expPerMinute;
                    if (p.exp >= (p.level || 1) * 20) {
                        p.exp = 0;
                        p.level = (p.level || 1) + 1;
                        const cx = this.PADDING + (room.cells[0].col + 0.5) * this.CELL_SIZE;
                        const cy = this.PADDING + (room.cells[0].row + 0.5) * this.CELL_SIZE;
                        this.addFloatingText(cx, cy, `${p.name} Lv.UP!`, '#27ae60');
                    }
                }
            }
        }

        if (this.main.UI) this.main.UI.update();
        this.main.saveOnEvent('passive_tick');
    }

    _heroDefeated(hero) {
        // 포획 (50% + 감옥 보너스)
        let captureChance = 0.5;
        for (const room of this.grid.rooms.values()) {
            if (room.type === 'prison') {
                const type = ROOM_TYPES.prison;
                captureChance += type.captureBonus;
            }
        }

        if (Math.random() < Math.min(captureChance, 0.9)) {
            if (!this.main.data.capturedHeroes) this.main.data.capturedHeroes = [];
            this.main.data.capturedHeroes.push({
                name: hero.name || '지친 용사',
                maxGold: Math.floor(Math.random() * 50) + 10,
                mana: Math.floor(Math.random() * 3) + 1
            });
            this.addFloatingText(hero.x, hero.y, 'CAPTURED!', '#60bec7');
        } else {
            this.addFloatingText(hero.x, hero.y, 'DEAD', '#aaa');
        }

        if (this.main.UI) this.main.UI.update();
    }

    _getNextCell(hero) {
        const { col, row } = hero.currentCell;
        const target = this.grid.dragonNest;
        const dirs = [[0, -1], [0, 1], [-1, 0], [1, 0]];

        // 가능한 이동 셀 (방이 있거나 둥지)
        const candidates = [];
        for (const [dc, dr] of dirs) {
            const nc = col + dc;
            const nr = row + dr;
            if (nc < 0 || nc >= this.GRID_SIZE || nr < 0 || nr >= this.GRID_SIZE) continue;

            // 둥지 도달 가능
            if (nc === target.col && nr === target.row) {
                candidates.push({ col: nc, row: nr, dist: 0 });
                continue;
            }

            // 방이 있는 셀
            if (this.grid.cells[nr][nc] !== null) {
                // 되돌아가기 방지
                if (hero.previousCell && nc === hero.previousCell.col && nr === hero.previousCell.row) continue;
                const dist = Math.abs(nc - target.col) + Math.abs(nr - target.row);
                candidates.push({ col: nc, row: nr, dist });
            }
        }

        if (candidates.length === 0) {
            // 막힌 경우: 이전 셀도 허용
            for (const [dc, dr] of dirs) {
                const nc = col + dc;
                const nr = row + dr;
                if (nc < 0 || nc >= this.GRID_SIZE || nr < 0 || nr >= this.GRID_SIZE) continue;
                if (this.grid.cells[nr][nc] !== null || (nc === target.col && nr === target.row)) {
                    const dist = Math.abs(nc - target.col) + Math.abs(nr - target.row);
                    candidates.push({ col: nc, row: nr, dist });
                }
            }
        }

        if (candidates.length === 0) return null;

        // 둥지 방향으로 가장 가까운 셀 (약간의 랜덤성)
        candidates.sort((a, b) => a.dist - b.dist);
        // 상위 2개 중 랜덤 선택 (경로에 변화를 줌)
        const topN = Math.min(2, candidates.length);
        return candidates[Math.floor(Math.random() * topN)];
    }

    /** 영웅 스폰 (InvasionWave에서 호출) */
    spawnHero(heroData) {
        const P = this.PADDING;
        const CS = this.CELL_SIZE;

        this.heroes.push({
            name: heroData.name || '용사',
            x: P + (this.grid.entrance.col + 0.5) * CS,
            y: P + (this.grid.entrance.row + 0.5) * CS,
            speed: heroData.speed || (0.12 + Math.random() * 0.05),
            health: heroData.health || 200,
            maxHealth: heroData.health || 200,
            gold: heroData.gold || 80,
            attackMod: 1,
            isBoss: heroData.isBoss || false,
            currentCell: { ...this.grid.entrance },
            previousCell: null,
            nextCell: null,
            targetPos: null,
            vx: 0,
            vy: 0,
            visitedRooms: new Set(),
            inBattle: null
        });
    }
}
