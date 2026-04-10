import { pokemonData } from './data/pokemonData.js';
import { ROOM_TEMPLATES, TEMPLATE_LIST } from './dungeon/RoomTemplate.js';
import { ROOM_TYPES, ROOM_TYPE_LIST, getRoomCost } from './data/roomData.js';

/**
 * DungeonUI — 비스포크 방 배치 UI + 유닛/포획/드래곤/마켓 탭
 */
export class DungeonUI {
    constructor(main) {
        this.main = main;
        this.screen = document.getElementById('screen');
        this.currentTab = 'dungeon';

        // 방 배치 모드 상태
        this.selectedTemplate = null; // 선택된 템플릿 key
        this.selectedType = null;     // 선택된 방 유형 key

        this.initBasicUI();
    }

    initBasicUI() {
        // ── 1. 상태바 ──
        this.statusBar = document.createElement('div');
        this.statusBar.className = 'status-bar';
        this.statusBar.innerHTML = `
            <div class="status-item"><span class="status-label">침입자</span><span class="status-value" id="ui-invaders" style="color:var(--orange)">0명</span></div>
            <div class="status-item"><span class="status-label">🐉 HP</span><span class="status-value" id="ui-dragon-hp" style="color:#f44">100</span></div>
            <div class="status-item"><span class="status-label">드래곤</span><span class="status-value" id="ui-dragon-stage" style="color:var(--red)">해츨링</span></div>
            <div class="status-item"><span class="status-label">방</span><span class="status-value" id="ui-room-count" style="color:var(--blue, #3af)">0개</span></div>
            <div class="status-item"><span class="status-label">골드</span><span class="status-value" id="ui-gold">0 G</span></div>
        `;

        // ── 2. 던전 캔버스 영역 ──
        this.dungeonArea = document.createElement('div');
        this.dungeonArea.className = 'dungeon-area';
        this.dungeonArea.id = 'dungeon-wrapper';

        // 웨이브 정보 오버레이
        this.waveInfoBar = document.createElement('div');
        this.waveInfoBar.className = 'wave-info-bar';
        this.waveInfoBar.innerHTML = `
            <span>웨이브 <span class="wave-num" id="ui-wave-num">1</span></span>
            <span>처치 <span id="ui-heroes-defeated">0</span></span>
            <span class="wave-heroes" id="ui-wave-status">대기 중</span>
            <button id="btn-wave-toggle" style="background:#444; color:#fff; border:1px solid #666; padding:4px 12px; font-size:12px; cursor:pointer; font-family:PressStart2P,monospace; border-radius:4px;">⏸</button>
        `;
        this.dungeonArea.appendChild(this.waveInfoBar);

        // 속도 조절 버튼
        this.speedControls = document.createElement('div');
        this.speedControls.className = 'speed-controls';
        this.speedControls.innerHTML = `
            <div class="speed-btn" data-speed="1" title="1x">1x</div>
            <div class="speed-btn" data-speed="2" title="2x">2x</div>
            <div class="speed-btn" data-speed="3" title="3x">3x</div>
        `;
        this.dungeonArea.appendChild(this.speedControls);
        this._bindSpeedControls();
        this._bindWaveToggle();

        // 토스트 컨테이너
        this.toastContainer = document.createElement('div');
        this.toastContainer.className = 'toast-container';
        this.dungeonArea.appendChild(this.toastContainer);

        // ── 3. 하단 탭 패널 ──
        this.bottomPanel = document.createElement('div');
        this.bottomPanel.className = 'bottom-panel';

        this.tabHeader = document.createElement('div');
        this.tabHeader.className = 'tab-header';

        const tabs = [
            { id: 'dungeon', name: '🏗️ 던전' },
            { id: 'unit', name: '⚔️ 유닛' },
            { id: 'capture', name: '⛓️ 포획' },
            { id: 'dragon', name: '🐉 드래곤' },
            { id: 'market', name: '💰 마켓' },
        ];

        this.tabContent = document.createElement('div');
        this.tabContent.className = 'tab-content';
        this.tabContent.id = 'tab-content-wrapper';

        tabs.forEach(tab => {
            const btn = document.createElement('button');
            btn.className = `tab-btn ${this.currentTab === tab.id ? 'active' : ''}`;
            btn.innerText = tab.name;
            btn.dataset.tabId = tab.id;
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentTab = tab.id;
                this.renderTabContent();
            });
            this.tabHeader.appendChild(btn);
        });

        this.bottomPanel.appendChild(this.tabHeader);
        this.bottomPanel.appendChild(this.tabContent);

        this.screen.appendChild(this.statusBar);
        this.screen.appendChild(this.dungeonArea);
        this.screen.appendChild(this.bottomPanel);

        this.renderTabContent();
        this.update();
    }

    renderTabContent() {
        const content = this.tabContent;
        content.innerHTML = '';

        switch (this.currentTab) {
            case 'dungeon': this._renderDungeonTab(content); break;
            case 'unit': this._renderUnitTab(content); break;
            case 'capture': this._renderCaptureTab(content); break;
            case 'dragon': this._renderDragonTab(content); break;
            case 'market': this._renderMarketTab(content); break;
        }
        this.update();
    }

    // ═══════════════════════════════════
    // 던전 탭 — 비스포크 방 배치
    // ═══════════════════════════════════
    _renderDungeonTab(content) {
        const game = this.main.game;
        const selectedRoom = game?.selectedCell ? game.grid.getRoomAt(game.selectedCell.col, game.selectedCell.row) : null;

        // 선택된 방 정보
        let selectedInfo = '<span style="color:#888">그리드에서 셀을 터치하세요</span>';
        if (selectedRoom) {
            const type = ROOM_TYPES[selectedRoom.type];
            selectedInfo = `<span style="color:${type?.color || '#fff'}">${type?.emoji || ''} ${type?.name || selectedRoom.type} (Lv.${selectedRoom.level})</span>`;
        } else if (game?.selectedCell) {
            selectedInfo = `<span style="color:#888">빈 셀 [${game.selectedCell.col}, ${game.selectedCell.row}]</span>`;
        }

        content.innerHTML = `
            <div class="ui-title">
                🏗️ 던전 건축
                <span id="ui-selected-info" style="font-size:14px; display:block; margin-top:4px;">${selectedInfo}</span>
            </div>

            <div style="margin-bottom:12px;">
                <div style="color:#aaa; font-size:12px; margin-bottom:8px;">① 방 모양 선택 (비스포크)</div>
                <div class="ui-grid" id="template-grid" style="grid-template-columns: repeat(4, 1fr);">
                    ${TEMPLATE_LIST.map(t => `
                        <div class="ui-btn template-btn ${this.selectedTemplate === t.key ? 'selected' : ''}"
                             data-template="${t.key}"
                             style="padding:8px; font-size:12px; ${this.selectedTemplate === t.key ? 'border:2px solid #0f0;' : ''}">
                            <span style="font-size:18px;">${t.emoji}</span><br>
                            ${t.name}<br>
                            <span style="color:#888; font-size:10px;">${t.tileCount}칸</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div style="margin-bottom:12px;">
                <div style="color:#aaa; font-size:12px; margin-bottom:8px;">② 방 유형 선택</div>
                <div class="ui-grid" id="type-grid" style="grid-template-columns: repeat(4, 1fr);">
                    ${ROOM_TYPE_LIST.map(t => {
                        const existingCount = game ? [...game.grid.rooms.values()].filter(r => r.type === t.key).length : 0;
                        const cost = getRoomCost(t.key, existingCount);
                        return `
                        <div class="ui-btn type-btn ${this.selectedType === t.key ? 'selected' : ''}"
                             data-type="${t.key}"
                             style="padding:8px; font-size:11px; ${this.selectedType === t.key ? 'border:2px solid #ff0;' : ''}">
                            <span style="font-size:16px;">${t.emoji}</span><br>
                            ${t.name}<br>
                            <span style="color:gold; font-size:10px;">-${cost}G</span>
                        </div>`;
                    }).join('')}
                </div>
            </div>

            <div class="ui-grid" style="grid-template-columns: repeat(4, 1fr); margin-top:8px;">
                <div class="ui-btn" id="btn-corridor" style="background:#3a3a3a; border:1px solid #666;">
                    🧱 통로<br><span style="font-size:10px; color:#aaa;">30G · 길 배치</span>
                </div>
                <div class="ui-btn" id="btn-place" style="background:#1a5c1a;">
                    ✅ 배치<br><span style="font-size:10px; color:#aaa;">셀 터치로 배치</span>
                </div>
                <div class="ui-btn" id="btn-rotate" style="background:#1a3c5c;">
                    🔄 회전<br><span style="font-size:10px; color:#aaa;">90° 회전</span>
                </div>
                <div class="ui-btn" id="btn-destroy" style="background:#5c1a1a;">
                    🗑️ 철거<br><span style="font-size:10px; color:#aaa;">50% 환불</span>
                </div>
            </div>

            ${selectedRoom && selectedRoom.type !== 'corridor' ? `
            <div class="ui-grid" style="grid-template-columns: repeat(2, 1fr); margin-top:8px; border-top:1px solid #444; padding-top:8px;">
                <div class="ui-btn" id="btn-upgrade" style="background:#1a4c3a;">
                    ⬆ 업그레이드<br><span style="font-size:10px; color:gold;">-${(selectedRoom.level || 1) * 100}G</span>
                </div>
                <div class="ui-btn" id="btn-retrieve" style="background:#3a3a1a;">
                    📦 권속 회수<br><span style="font-size:10px; color:#aaa;">배치 해제</span>
                </div>
            </div>` : ''}
        `;

        this._bindDungeonEvents();
    }

    _bindDungeonEvents() {
        // 템플릿 선택
        document.querySelectorAll('.template-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectedTemplate = e.currentTarget.dataset.template;
                this.renderTabContent();
            });
        });

        // 유형 선택
        document.querySelectorAll('.type-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectedType = e.currentTarget.dataset.type;
                this.renderTabContent();
            });
        });

        // 통로 빠른 배치
        const btnCorridor = document.getElementById('btn-corridor');
        if (btnCorridor) btnCorridor.addEventListener('click', () => {
            this.selectedTemplate = 'single';
            this.selectedType = 'corridor';
            this.main.game.startPlacement('single', 'corridor');
            this._showMsg('그리드에서 통로를 배치하세요 (연속 터치 가능)', '#95a5a6');
        });

        // 배치 시작
        const btnPlace = document.getElementById('btn-place');
        if (btnPlace) btnPlace.addEventListener('click', () => {
            if (!this.selectedTemplate || !this.selectedType) {
                this._showMsg('방 모양과 유형을 먼저 선택하세요!', '#f44');
                return;
            }
            this.main.game.startPlacement(this.selectedTemplate, this.selectedType);
            this._showMsg('그리드에서 배치할 위치를 터치하세요', '#0f0');
        });

        // 회전
        const btnRotate = document.getElementById('btn-rotate');
        if (btnRotate) btnRotate.addEventListener('click', () => {
            this.main.game.rotateGhost();
        });

        // 철거
        const btnDestroy = document.getElementById('btn-destroy');
        if (btnDestroy) btnDestroy.addEventListener('click', () => {
            this.main.game.removeSelectedRoom();
        });

        // 방 업그레이드
        const btnUpgrade = document.getElementById('btn-upgrade');
        if (btnUpgrade) btnUpgrade.addEventListener('click', () => {
            const game = this.main.game;
            if (!game.selectedCell) return;
            const room = game.grid.getRoomAt(game.selectedCell.col, game.selectedCell.row);
            if (!room) return;
            const cost = (room.level || 1) * 100;
            if (this.main.data.dragon.gold >= cost) {
                this.main.data.dragon.gold -= cost;
                room.level = (room.level || 1) + 1;
                this.main.data.dungeon = game.grid.serialize();
                this.main.saveOnEvent('upgrade_room');
                this._showMsg(`${ROOM_TYPES[room.type]?.name || room.type} Lv.${room.level}로 업그레이드!`, '#0f0');
                this.renderTabContent();
            } else {
                this._showMsg(`골드 부족! (필요: ${cost}G)`, '#f44');
            }
        });

        // 권속 회수
        const btnRetrieve = document.getElementById('btn-retrieve');
        if (btnRetrieve) btnRetrieve.addEventListener('click', () => {
            const game = this.main.game;
            if (!game.selectedCell) return;
            const room = game.grid.getRoomAt(game.selectedCell.col, game.selectedCell.row);
            if (!room || !room.deployedPokemon || room.deployedPokemon.length === 0) {
                this._showMsg('회수할 권속이 없습니다', '#888');
                return;
            }
            if (!this.main.data.monsters) this.main.data.monsters = [];
            for (const p of room.deployedPokemon) {
                this.main.data.monsters.push({ ...p });
            }
            const count = room.deployedPokemon.length;
            room.deployedPokemon = [];
            this.main.data.dungeon = game.grid.serialize();
            this.main.saveOnEvent('retrieve');
            this._showMsg(`권속 ${count}마리 회수 완료!`, '#00e5ff');
            this.renderTabContent();
        });
    }

    // ═══════════════════════════════════
    // 유닛 탭
    // ═══════════════════════════════════
    _renderUnitTab(content) {
        const monsters = this.main.data.monsters || [];
        const emptyGuide = monsters.length === 0
            ? '<div style="color:#aaa; font-size:14px; text-align:center; padding:20px; grid-column:span 3;">보유 중인 유닛이 없습니다.<br><br><span style="color:#eae174; font-weight:bold;">[마켓]</span>에서 새로운 유닛을 영입하세요!</div>'
            : '';

        const monstersHTML = monsters.map((mon, idx) => `
            <div class="ui-btn btn-deploy-mon" data-mon-idx="${idx}" style="padding:10px;">
                <div style="width:40px; height:40px; display:inline-block; background: url('${mon.spritePath}') no-repeat left top; background-size: ${(mon.frames || 4) * 100}% auto; image-rendering:pixelated;"></div>
                <br><span style="font-size:14px; color:#fff">${mon.name}</span>
                <br><span style="font-size:12px; color:#aaa">Lv.${mon.level}</span>
            </div>
        `).join('');

        // 카드조각 목록
        const fragments = this.main.data.fragments || {};
        const fragmentEntries = Object.entries(fragments).filter(([, cnt]) => cnt > 0);
        const fragmentHTML = fragmentEntries.length === 0
            ? '<div style="color:#888; font-size:12px; text-align:center; grid-column:span 4;">전투에서 카드조각을 획득하세요</div>'
            : fragmentEntries.map(([key, cnt]) => {
                const pData = pokemonData[key];
                if (!pData) return '';
                const name = pData.name[7] || pData.name[0];
                const canSummon = cnt >= 10;
                return `
                    <div class="ui-btn btn-fragment" data-key="${key}" style="padding:6px; font-size:10px; ${canSummon ? 'border:1px solid #00e5ff;' : 'opacity:0.7;'}">
                        🃏 ${name}<br>
                        <span style="color:${canSummon ? '#00e5ff' : '#aaa'};">${cnt}/10</span>
                        ${canSummon ? '<br><span style="color:#00e5ff; font-size:9px;">소환 가능!</span>' : ''}
                    </div>`;
            }).join('');

        content.innerHTML = `
            <div class="ui-title" style="color:#60bec7; margin-bottom:10px;">
                내 권속 목록
                <br><span style="font-size:12px; color:#aaa">(전투방 선택 → 권속 터치로 배치)</span>
            </div>
            <div class="ui-grid">${emptyGuide || monstersHTML}</div>

            <div style="margin-top:16px; border-top:1px solid #444; padding-top:12px;">
                <div class="ui-title" style="color:#00e5ff; font-size:14px; margin-bottom:8px;">🃏 카드조각 (10개 모으면 소환)</div>
                <div class="ui-grid" style="grid-template-columns: repeat(4, 1fr);">${fragmentHTML}</div>
            </div>
        `;

        this._bindUnitEvents();
    }

    _bindUnitEvents() {
        // 카드조각 소환
        document.querySelectorAll('.btn-fragment').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const key = e.currentTarget.dataset.key;
                const fragments = this.main.data.fragments || {};
                if ((fragments[key] || 0) < 10) {
                    this._showMsg('조각이 부족합니다 (10개 필요)', '#f44');
                    return;
                }
                fragments[key] -= 10;
                const pData = pokemonData[key];
                if (!this.main.data.monsters) this.main.data.monsters = [];
                this.main.data.monsters.push({
                    key,
                    name: pData.name[7] || pData.name[0],
                    spritePath: pData.sprite.image,
                    frames: pData.sprite.frames || 1,
                    hold: pData.sprite.hold || 15,
                    level: 1,
                    exp: 0
                });
                this.main.saveOnEvent('fragment_summon');
                this._showMsg(`🃏 ${pData.name[7] || pData.name[0]} 소환 성공!`, '#00e5ff');
                this.renderTabContent();
            });
        });

        document.querySelectorAll('.btn-deploy-mon').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.currentTarget.dataset.monIdx);
                const game = this.main.game;
                if (!game.selectedCell) {
                    this._showMsg('상단에서 전투방을 먼저 선택하세요', '#f44');
                    return;
                }

                const room = game.grid.getRoomAt(game.selectedCell.col, game.selectedCell.row);
                if (!room || (room.type !== 'combat' && room.type !== 'barracks')) {
                    this._showMsg('전투방 또는 훈련소에만 배치 가능', '#f44');
                    return;
                }

                const roomType = ROOM_TYPES[room.type];
                const maxPokemon = roomType?.maxPokemon || 3;
                if (room.deployedPokemon.length >= maxPokemon) {
                    this._showMsg(`이 방에는 최대 ${maxPokemon}마리까지 배치 가능`, '#f44');
                    return;
                }

                const monData = this.main.data.monsters[idx];
                room.deployedPokemon.push({ ...monData });
                this.main.data.monsters.splice(idx, 1);
                this.main.data.dungeon = game.grid.serialize();

                this._showMsg(`[${monData.name}] 배치 완료!`, '#0f0');
                this.renderTabContent();
            });
        });
    }

    // ═══════════════════════════════════
    // 포획 탭
    // ═══════════════════════════════════
    _renderCaptureTab(content) {
        const captured = this.main.data.capturedHeroes || [];
        const listHTML = captured.length === 0
            ? '<div style="color:gray; font-size:14px; text-align:center; grid-column:span 3; margin-top:20px;">수용된 용사가 없습니다.<br>던전에서 생포하세요.</div>'
            : captured.map((h, idx) => `
                <div class="ui-btn" style="padding:10px; font-size:14px;">
                    <span style="font-size:24px;">👷</span><br>
                    ${h.name}<br>
                    <span style="color:#aaa; font-size:10px;">노역: ${h.maxGold}G / 마나: ${h.mana}석</span><br>
                    <div style="display:flex; gap:5px; margin-top:8px;">
                        <button class="btn-labor" data-idx="${idx}" style="flex:1; background:#444; border:1px solid #777; color:#fff; font-size:11px; cursor:pointer; padding:5px;">⛏️ 노역</button>
                        <button class="btn-extract" data-idx="${idx}" style="flex:1; background:#444; border:1px solid #777; color:#fff; font-size:11px; cursor:pointer; padding:5px;">🔮 추출</button>
                    </div>
                </div>
            `).join('');

        content.innerHTML = `
            <div class="ui-title" style="color:#a33635;">⛓️ 용사 교화소</div>
            <div style="color:#aaa; text-align:center; font-size:12px; margin-bottom:10px;">포획한 용사를 광산으로 보내거나 마력석을 추출합니다.</div>
            <div id="ui-msg-box" style="text-align:center; min-height:20px; font-size:14px; margin-bottom:10px;"></div>
            <div class="ui-grid">${listHTML}</div>
        `;

        this._bindCaptureEvents();
    }

    _bindCaptureEvents() {
        const showMsg = (msg) => { const mb = document.getElementById('ui-msg-box'); if (mb) mb.innerHTML = msg; };

        document.querySelectorAll('.btn-labor').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.currentTarget.dataset.idx);
                const hero = this.main.data.capturedHeroes[idx];
                this.main.data.dragon.gold += hero.maxGold;
                this.main.data.capturedHeroes.splice(idx, 1);
                this.renderTabContent();
                setTimeout(() => showMsg(`<span style="color:var(--yellow)">노역으로 ${hero.maxGold}G 획득!</span>`), 0);
            });
        });

        document.querySelectorAll('.btn-extract').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.currentTarget.dataset.idx);
                const hero = this.main.data.capturedHeroes[idx];
                this.main.data.dragon.manaStones = (this.main.data.dragon.manaStones || 0) + hero.mana;
                this.main.data.capturedHeroes.splice(idx, 1);
                this.renderTabContent();
                setTimeout(() => showMsg(`<span style="color:#9e32a8">마력석 ${hero.mana}개 추출!</span>`), 0);
            });
        });
    }

    // ═══════════════════════════════════
    // 드래곤 탭
    // ═══════════════════════════════════
    _renderDragonTab(content) {
        const dragon = this.main.data.dragon;
        const stages = ['해츨링', '청소년기', '장년기', '고룡', '재앙'];
        const currentStage = stages[dragon.stage] || '초월개체';
        const reqMana = (dragon.stage + 1) * 5;

        content.innerHTML = `
            <div class="ui-title" style="color:#c96937;">🐉 드래곤 진화</div>
            <div style="text-align:center; margin:10px 0;">
                <span style="font-size:40px;">🐲</span><br>
                <span style="color:var(--yellow); font-size:18px;">[${currentStage}] 단계</span><br>
                <span style="color:#aaa; font-size:12px;">ATK: ${dragon.stats.attack} / HP: ${dragon.stats.health}</span>
            </div>
            <div id="ui-msg-box" style="text-align:center; min-height:20px; font-size:14px; margin-bottom:10px;"></div>
            <div class="ui-grid">
                <div class="ui-btn" id="btn-up-atk">공격력 강화<br><span style="color:gold; font-size:12px;">-200G</span><br><span style="color:#aaa; font-size:10px;">ATK+5</span></div>
                <div class="ui-btn" id="btn-up-hp">체력 강화<br><span style="color:gold; font-size:12px;">-100G</span><br><span style="color:#aaa; font-size:10px;">HP+20</span></div>
                <div class="ui-btn" id="btn-evolve">진화<br><span style="color:#9e32a8; font-size:12px;">-${reqMana} 마력석</span><br><span style="color:#aaa; font-size:10px;">스탯 2배</span></div>
            </div>
        `;

        this._bindDragonEvents();
    }

    _bindDragonEvents() {
        const showMsg = (msg) => { const mb = document.getElementById('ui-msg-box'); if (mb) mb.innerHTML = msg; };
        const dragon = this.main.data.dragon;

        document.getElementById('btn-up-atk')?.addEventListener('click', () => {
            if (dragon.gold >= 200) { dragon.gold -= 200; dragon.stats.attack += 5; this.main.saveOnEvent('upgrade'); this.renderTabContent(); setTimeout(() => showMsg(`<span style="color:var(--yellow)">공격력 +5!</span>`), 0); }
            else showMsg(`<span style="color:red">골드 부족!</span>`);
        });

        document.getElementById('btn-up-hp')?.addEventListener('click', () => {
            if (dragon.gold >= 100) { dragon.gold -= 100; dragon.stats.health += 20; this.main.saveOnEvent('upgrade'); this.renderTabContent(); setTimeout(() => showMsg(`<span style="color:var(--yellow)">체력 +20!</span>`), 0); }
            else showMsg(`<span style="color:red">골드 부족!</span>`);
        });

        document.getElementById('btn-evolve')?.addEventListener('click', () => {
            const reqMana = (dragon.stage + 1) * 5;
            if ((dragon.manaStones || 0) >= reqMana) {
                dragon.manaStones -= reqMana; dragon.stage++; dragon.stats.attack *= 2; dragon.stats.health *= 2;
                this.main.saveOnEvent('evolve'); this.showToast('드래곤 진화 성공!', 'success');
                this.renderTabContent(); setTimeout(() => showMsg(`<span style="color:#9e32a8; font-weight:bold;">진화 성공!</span>`), 0);
            } else showMsg(`<span style="color:red">마력석 부족! (필요: ${reqMana})</span>`);
        });
    }

    // ═══════════════════════════════════
    // 블랙마켓 탭
    // ═══════════════════════════════════
    _renderMarketTab(content) {
        content.innerHTML = `
            <div class="ui-title" style="color:#eae174;">💰 블랙마켓</div>
            <div style="color:#aaa; text-align:center; font-size:12px; margin-bottom:10px;">유닛 영입 및 재화 교환</div>
            <div id="ui-msg-box" style="text-align:center; min-height:20px; font-size:14px; margin-bottom:10px;"></div>
            <div class="ui-grid">
                <div class="ui-btn" id="btn-gacha-gold">일반 밀수업자<br><span style="color:gold; font-size:12px;">-1000G</span><br><span style="color:#fff; font-size:10px;">+무작위 유닛</span></div>
                <div class="ui-btn" id="btn-gacha-gem">고급 노예상인<br><span style="color:#60bec7; font-size:12px;">-10 젬</span><br><span style="color:#fff; font-size:10px;">+고급 유닛</span></div>
                <div class="ui-btn" id="btn-gacha-ad">특별 용병<br><span style="color:#b7d667; font-size:12px;">-1 티켓</span><br><span style="color:#fff; font-size:10px;">+유닛</span></div>
            </div>
            <div class="ui-grid" style="margin-top:12px; border-top:1px solid #444; padding-top:12px;">
                <div class="ui-btn" id="btn-buy-gem">젬 팩<br><span style="color:gold; font-size:12px;">-5000G</span><br><span style="color:#60bec7; font-size:10px;">+5 젬</span></div>
                <div class="ui-btn" id="btn-buy-ad">광고 티켓<br><span style="color:gold; font-size:12px;">-2000G</span><br><span style="color:#b7d667; font-size:10px;">+1 티켓</span></div>
                <div class="ui-btn" id="btn-buy-mana">마력석<br><span style="color:gold; font-size:12px;">-10000G</span><br><span style="color:#9e32a8; font-size:10px;">+1 마력석</span></div>
            </div>
        `;

        this._bindMarketEvents();
    }

    _bindMarketEvents() {
        const showMsg = (msg) => { const mb = document.getElementById('ui-msg-box'); if (mb) mb.innerHTML = msg; };
        const dragon = this.main.data.dragon;

        const drawPokemon = () => {
            const keys = Object.keys(pokemonData);
            const baseKeys = keys.filter(k => !pokemonData[k].base);
            const randomKey = baseKeys[Math.floor(Math.random() * baseKeys.length)];
            const pData = pokemonData[randomKey];

            if (!this.main.data.monsters) this.main.data.monsters = [];
            this.main.data.monsters.push({
                key: randomKey,
                name: pData.name[7] || pData.name[0],
                spritePath: pData.sprite.image,
                frames: pData.sprite.frames || 1,
                hold: pData.sprite.hold || 15,
                level: 1,
                exp: 0
            });

            this.main.saveOnEvent('gacha');
            this.renderTabContent();
            setTimeout(() => showMsg(`<span style="color:var(--yellow); font-weight:bold;">[${pData.name[7] || pData.name[0]}] 영입!</span>`), 0);
        };

        document.getElementById('btn-gacha-gold')?.addEventListener('click', () => {
            if (dragon.gold >= 1000) { dragon.gold -= 1000; drawPokemon(); }
            else showMsg(`<span style="color:red">골드 부족!</span>`);
        });

        document.getElementById('btn-gacha-gem')?.addEventListener('click', () => {
            if (dragon.gems >= 10) { dragon.gems -= 10; drawPokemon(); }
            else showMsg(`<span style="color:red">젬 부족!</span>`);
        });

        document.getElementById('btn-gacha-ad')?.addEventListener('click', () => {
            if (dragon.adTickets >= 1) { dragon.adTickets -= 1; drawPokemon(); }
            else showMsg(`<span style="color:red">티켓 부족!</span>`);
        });

        document.getElementById('btn-buy-gem')?.addEventListener('click', () => {
            if (dragon.gold >= 5000) { dragon.gold -= 5000; dragon.gems += 5; this.renderTabContent(); setTimeout(() => showMsg(`<span style="color:#60bec7">젬 5개 구매!</span>`), 0); }
            else showMsg(`<span style="color:red">골드 부족!</span>`);
        });

        document.getElementById('btn-buy-ad')?.addEventListener('click', () => {
            if (dragon.gold >= 2000) { dragon.gold -= 2000; dragon.adTickets += 1; this.renderTabContent(); setTimeout(() => showMsg(`<span style="color:#b7d667">티켓 1장 구매!</span>`), 0); }
            else showMsg(`<span style="color:red">골드 부족!</span>`);
        });

        document.getElementById('btn-buy-mana')?.addEventListener('click', () => {
            if (dragon.gold >= 10000) { dragon.gold -= 10000; dragon.manaStones = (dragon.manaStones || 0) + 1; this.renderTabContent(); setTimeout(() => showMsg(`<span style="color:#9e32a8">마력석 1개 확보!</span>`), 0); }
            else showMsg(`<span style="color:red">골드 부족!</span>`);
        });
    }

    // ═══════════════════════════════════
    // 공통
    // ═══════════════════════════════════

    _bindSpeedControls() {
        this.speedControls.querySelectorAll('.speed-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const speed = parseInt(btn.dataset.speed);
                if (this.main.game) this.main.game.speedFactor = speed;
                this.speedControls.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        // 기본 1x 활성화
        this.speedControls.querySelector('[data-speed="1"]')?.classList.add('active');
    }

    _bindWaveToggle() {
        const btn = document.getElementById('btn-wave-toggle');
        if (!btn) return;
        btn.addEventListener('click', () => {
            const wave = this.main.invasionWave;
            if (!wave) return;
            if (wave.isActive) {
                wave.stop();
                btn.textContent = '▶';
                btn.style.background = '#1a5c1a';
            } else {
                if (this.main.game?.grid.hasValidPath()) {
                    wave.start();
                    btn.textContent = '⏸';
                    btn.style.background = '#444';
                } else {
                    this._showMsg('유효한 경로가 없습니다!', '#f44');
                }
            }
        });
    }

    /** 토스트 알림 표시 */
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        this.toastContainer.appendChild(toast);
        setTimeout(() => toast.remove(), 2200);
    }

    /** 게임오버 오버레이 */
    showGameOver({ waves, defeated, gold }) {
        const overlay = document.createElement('div');
        overlay.id = 'gameover-overlay';
        overlay.style.cssText = 'position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:9999; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#fff; font-family:PressStart2P,monospace;';
        overlay.innerHTML = `
            <div style="font-size:32px; color:#f44; margin-bottom:20px;">GAME OVER</div>
            <div style="font-size:16px; color:#ff8800; margin-bottom:30px;">드래곤이 쓰러졌습니다!</div>
            <div style="font-size:14px; line-height:2.2; text-align:center;">
                <span style="color:#aaa;">도달 웨이브:</span> <span style="color:#0af;">${waves}</span><br>
                <span style="color:#aaa;">처치한 영웅:</span> <span style="color:#0f0;">${defeated}</span><br>
                <span style="color:#aaa;">최종 골드:</span> <span style="color:gold;">${gold.toLocaleString()}G</span>
            </div>
            <button id="btn-restart" style="margin-top:40px; padding:16px 40px; font-size:16px; font-family:PressStart2P,monospace; background:#c0392b; color:#fff; border:none; cursor:pointer; border-radius:8px;">
                처음부터 다시
            </button>
        `;
        document.body.appendChild(overlay);

        document.getElementById('btn-restart')?.addEventListener('click', () => {
            window.localStorage.removeItem('data');
            window.location.reload();
        });
    }

    _showMsg(text, color = '#fff') {
        const box = document.getElementById('ui-msg-box') || document.getElementById('ui-selected-info');
        if (box) box.innerHTML = `<span style="color:${color}">${text}</span>`;
    }

    update() {
        const dragon = this.main.data?.dragon;
        if (!dragon) return;

        this._updateValue('ui-gold', (dragon.gold || 0).toLocaleString() + ' G');

        if (this.main.game) {
            this._updateValue('ui-invaders', this.main.game.heroes.length + '명');
            this._updateValue('ui-room-count', this.main.game.grid.rooms.size + '개');

            const battleCount = this.main.game.activeBattles.length;
            const uiBattles = document.getElementById('ui-battles');
            if (uiBattles) {
                uiBattles.innerText = battleCount > 0 ? battleCount + '진행' : '-';
                uiBattles.style.color = battleCount > 0 ? '#f44' : '#666';
            }
        }

        // 드래곤 HP
        const currentHp = dragon.stats.currentHp ?? dragon.stats.health;
        const maxHp = dragon.stats.health;
        const uiHp = document.getElementById('ui-dragon-hp');
        if (uiHp) {
            uiHp.innerText = `${currentHp}/${maxHp}`;
            uiHp.style.color = currentHp > maxHp * 0.5 ? '#0f0' : currentHp > maxHp * 0.25 ? '#ff0' : '#f00';
        }

        const stages = ['해츨링', '청소년기', '장년기', '고룡', '재앙'];
        const uiStage = document.getElementById('ui-dragon-stage');
        if (uiStage) uiStage.innerText = stages[dragon.stage] || '초월개체';

        // 웨이브 정보
        const wave = this.main.invasionWave;
        if (wave) {
            const waveNum = document.getElementById('ui-wave-num');
            if (waveNum) waveNum.innerText = wave.waveNum;
            const waveStatus = document.getElementById('ui-wave-status');
            if (waveStatus) {
                if (wave.isBossWave?.()) {
                    waveStatus.innerText = '⚠ BOSS';
                    waveStatus.style.color = '#ff0000';
                } else {
                    waveStatus.innerText = wave.isActive ? '진행 중' : '대기 중';
                    waveStatus.style.color = '';
                }
            }
        }
        const defeated = document.getElementById('ui-heroes-defeated');
        if (defeated && this.main.data.stats) defeated.innerText = this.main.data.stats.heroesDefeated || 0;
    }

    /** 값이 변하면 펄스 애니메이션 */
    _updateValue(id, newVal) {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.innerText !== newVal) {
            el.innerText = newVal;
            el.classList.remove('pulse');
            void el.offsetWidth; // reflow 트리거
            el.classList.add('pulse');
        }
    }
}
