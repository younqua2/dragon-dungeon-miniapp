import { DungeonGrid } from './dungeon/DungeonGrid.js';
import { ROOM_TEMPLATES } from './dungeon/RoomTemplate.js';
import { ROOM_TYPES } from './data/roomData.js';
import { pokemonData } from './data/pokemonData.js';
import { RoomBattle } from './dungeon/RoomBattle.js';
import { playSound } from '../file/audio.js';

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

        // 새 게임: 초기 세팅 던전 생성
        const grid = new DungeonGrid(8);
        this._buildStarterDungeon(grid);
        return grid;
    }

    /** 초기 세팅 던전: 입구 → 둥지까지 기본 통로 + 방 배치 */
    _buildStarterDungeon(grid) {
        const single = ROOM_TEMPLATES.single;

        // 통로 배치: 입구(0,0) → (0,1) → (1,1) → (2,1) → (3,1) → (3,2) → (3,3) →
        //           (4,3) → (5,3) → (5,4) → (5,5) → (6,5) → (6,6) → (7,6) → 둥지 인접
        const corridorCells = [
            [1, 0], [2, 0], [3, 0],           // 입구에서 우측으로
            [3, 1], [3, 2], [3, 3],           // 아래로 꺾기
            [4, 3], [5, 3],                    // 우측으로
            [5, 4], [5, 5],                    // 아래로
            [6, 5], [6, 6],                    // 우측 + 아래
            [7, 6],                            // 둥지 인접
        ];

        for (const [col, row] of corridorCells) {
            grid.placeRoom(single, 'corridor', col, row);
        }

        // 전투방 (통로 인접)
        grid.placeRoom(single, 'combat', 2, 1);  // 통로 (2,0) 아래
        grid.placeRoom(single, 'combat', 4, 4);  // 통로 (5,4) 좌측

        // 함정방
        grid.placeRoom(single, 'trap', 4, 2);    // 통로 (3,2) 우측

        // 기념품점
        grid.placeRoom(single, 'shop', 6, 4);    // 통로 (6,5) 위

        // 초기 데이터 저장
        this.main.data.dungeon = grid.serialize();
        this.main.saveOnEvent('starter_dungeon');
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
            const cell = this._touchToCell(e);
            if (cell) this._handleCellClick(cell.col, cell.row);
        }, { passive: false });

        // 터치 드래그로 통로 연속 배치
        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if (!this.ghostRoom || this.ghostRoom.typeKey !== 'corridor') return;
            const cell = this._touchToCell(e);
            if (cell && (!this._lastDragCell || cell.col !== this._lastDragCell.col || cell.row !== this._lastDragCell.row)) {
                this._lastDragCell = cell;
                this.tryPlaceGhostRoom(cell.col, cell.row);
                // 통로는 연속 배치: ghostRoom 유지
                if (!this.ghostRoom) {
                    this.ghostRoom = { template: ROOM_TEMPLATES.single, typeKey: 'corridor', rotation: 0 };
                }
            }
        }, { passive: false });

        this.canvas.addEventListener('touchend', () => {
            this._lastDragCell = null;
        });
    }

    _touchToCell(e) {
        const rect = e.target.getBoundingClientRect();
        const touch = e.targetTouches[0];
        if (!touch) return null;
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        const x = (touch.clientX - rect.left) * scaleX;
        const y = (touch.clientY - rect.top) * scaleY;
        return this._eventToCell(x, y);
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
        playSound('button1', 'ui');
        if (this.main.UI) this.main.UI.showToast(`${ROOM_TYPES[typeKey]?.name || '방'} 건설!`, 'success');

        // 경로 완성 알림 (자동 시작 안 함 — 수동 ▶ 버튼)
        if (this.grid.hasValidPath() && !(this.main.invasionWave?.isActive)) {
            if (this.main.UI) this.main.UI.showToast('경로 완성! ▶ 버튼으로 웨이브 시작', 'info');
        }

        // 통로는 연속 배치 유지
        if (typeKey === 'corridor') {
            this.ghostRoom = { template: ROOM_TEMPLATES.single, typeKey: 'corridor', rotation: 0 };
        } else {
            this.ghostRoom = null;
        }
        this.selectedCell = { col: anchorCol, row: anchorRow };
        if (this.main.UI) this.main.UI.update();
        return true;
    }

    /** 선택된 방 삭제 */
    removeSelectedRoom() {
        if (!this.selectedCell) return false;
        const room = this.grid.getRoomAt(this.selectedCell.col, this.selectedCell.row);
        if (!room) return false;

        // 배치된 권속 자동 회수
        if (room.deployedPokemon && room.deployedPokemon.length > 0) {
            if (!this.main.data.monsters) this.main.data.monsters = [];
            for (const p of room.deployedPokemon) {
                this.main.data.monsters.push({ ...p });
            }
            const cx = this.PADDING + this.selectedCell.col * this.CELL_SIZE + this.CELL_SIZE / 2;
            const cy = this.PADDING + this.selectedCell.row * this.CELL_SIZE + this.CELL_SIZE / 2;
            this.addFloatingText(cx, cy + 20, `권속 ${room.deployedPokemon.length}마리 회수`, '#00e5ff');
        }

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
        // 드래곤 HP 바 (둥지 위에)
        const dragon = this.main.data.dragon;
        if (dragon) {
            const nx = P + this.grid.dragonNest.col * CS;
            const ny = P + this.grid.dragonNest.row * CS;
            const currentHp = dragon.stats.currentHp ?? dragon.stats.health;
            const maxHp = dragon.stats.health;
            const hpRatio = Math.max(0, currentHp / maxHp);
            const barW = CS - 8;
            // HP 바 배경
            ctx.fillStyle = '#300';
            ctx.fillRect(nx + 4, ny - 8, barW, 7);
            // HP 바
            ctx.fillStyle = hpRatio > 0.5 ? '#0f0' : hpRatio > 0.25 ? '#ff0' : '#f00';
            ctx.fillRect(nx + 4, ny - 8, barW * hpRatio, 7);
            // HP 텍스트
            ctx.font = '9px PressStart2P, monospace';
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.fillText(`${currentHp}/${maxHp}`, nx + CS / 2, ny - 12);
        }

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
        const isCorridor = type?.isCorridor;
        const isConnected = this.grid.isRoomConnectedToEntrance(room.id);

        // 방의 셀들을 채우기
        for (const cell of room.cells) {
            const x = P + cell.col * CS;
            const y = P + cell.row * CS;

            if (isCorridor) {
                // 통로: 돌바닥 스타일
                ctx.fillStyle = '#3a3a3a';
                ctx.fillRect(x + 2, y + 2, CS - 4, CS - 4);
                // 중앙 밝은 줄 (길 느낌)
                ctx.fillStyle = '#555';
                ctx.fillRect(x + CS * 0.2, y + CS * 0.2, CS * 0.6, CS * 0.6);
                // 점선 테두리
                ctx.strokeStyle = '#666';
                ctx.lineWidth = 1;
                ctx.setLineDash([4, 4]);
                ctx.strokeRect(x + 2, y + 2, CS - 4, CS - 4);
                ctx.setLineDash([]);
            } else {
                // 일반 방 배경
                ctx.globalAlpha = isConnected ? 1.0 : 0.4;
                ctx.fillStyle = color + '40';
                ctx.fillRect(x + 2, y + 2, CS - 4, CS - 4);

                // 방 테두리
                ctx.strokeStyle = color;
                ctx.lineWidth = 3;

                const isInRoom = (c, r) => room.cells.some(cc => cc.col === c && cc.row === r);

                if (!isInRoom(cell.col, cell.row - 1)) {
                    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + CS, y); ctx.stroke();
                }
                if (!isInRoom(cell.col, cell.row + 1)) {
                    ctx.beginPath(); ctx.moveTo(x, y + CS); ctx.lineTo(x + CS, y + CS); ctx.stroke();
                }
                if (!isInRoom(cell.col - 1, cell.row)) {
                    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + CS); ctx.stroke();
                }
                if (!isInRoom(cell.col + 1, cell.row)) {
                    ctx.beginPath(); ctx.moveTo(x + CS, y); ctx.lineTo(x + CS, y + CS); ctx.stroke();
                }
                ctx.globalAlpha = 1.0;
            }
        }

        // 방 중심에 이모지/이름
        const centerX = room.cells.reduce((s, c) => s + c.col, 0) / room.cells.length;
        const centerY = room.cells.reduce((s, c) => s + c.row, 0) / room.cells.length;
        const cx = P + (centerX + 0.5) * CS;
        const cy = P + (centerY + 0.5) * CS;

        if (type && !isCorridor) {
            ctx.globalAlpha = isConnected ? 1.0 : 0.4;
            ctx.font = '28px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(type.emoji, cx, cy + 4);

            ctx.font = 'bold 13px PressStart2P, monospace';
            ctx.fillStyle = '#fff';
            ctx.fillText(type.name, cx, cy + 28);

            // 미연결 표시
            if (!isConnected) {
                ctx.font = 'bold 11px PressStart2P, monospace';
                ctx.fillStyle = '#f44';
                ctx.fillText('⚡미연결', cx, cy - 25);
            }
            ctx.globalAlpha = 1.0;
        }

        // 배치된 권속 스프라이트 표시
        if (room.deployedPokemon && room.deployedPokemon.length > 0) {
            for (let pi = 0; pi < room.deployedPokemon.length; pi++) {
                const p = room.deployedPokemon[pi];
                const cellIdx = pi % room.cells.length;
                const pCell = room.cells[cellIdx];
                const px = P + (pCell.col + 0.3 + pi * 0.2) * CS;
                const py = P + (pCell.row + 0.7) * CS;

                // 스프라이트 이미지 로드 및 표시
                if (!p._spriteImg) {
                    p._spriteImg = new Image();
                    p._spriteImg.src = p.spritePath || '';
                }
                const img = p._spriteImg;
                if (img.complete && img.naturalWidth > 0) {
                    const frameW = img.naturalWidth / (p.frames || 1);
                    const frameH = img.naturalHeight;
                    const frame = Math.floor(Date.now() / 300) % (p.frames || 1);
                    ctx.imageSmoothingEnabled = false;
                    ctx.drawImage(img, frame * frameW, 0, frameW, frameH, px - 12, py - 12, 24, 24);
                    ctx.imageSmoothingEnabled = true;
                } else {
                    // 폴백: 이름 표시
                    ctx.font = '9px PressStart2P, monospace';
                    ctx.fillStyle = '#ff0';
                    ctx.textAlign = 'center';
                    ctx.fillText(p.name.substring(0, 3), px, py);
                }
            }
            // 개수 뱃지
            ctx.font = '11px PressStart2P, monospace';
            ctx.fillStyle = '#ff0';
            ctx.textAlign = 'center';
            ctx.fillText(`x${room.deployedPokemon.length}`, cx + 35, cy - 25);
        }

        // 수용 현황 표시 (통로/패시브 제외)
        if (type && !isCorridor && type.capacity < 99) {
            const heroCount = this._countHeroesInRoom(room.id);
            if (heroCount > 0) {
                ctx.font = '10px PressStart2P, monospace';
                ctx.fillStyle = heroCount >= type.capacity ? '#f44' : '#0f0';
                ctx.textAlign = 'center';
                ctx.fillText(`👤${heroCount}/${type.capacity}`, cx, cy + 42);
            }
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

    /** 특정 방에 현재 체류 중인 영웅 수 */
    _countHeroesInRoom(roomId) {
        let count = 0;
        for (const h of this.heroes) {
            if (h.dwellingRoomId === roomId || (h.inBattle && h.inBattle.room?.id === roomId)) {
                count++;
            }
        }
        return count;
    }

    _updateHeroes(ctx, scaledDelta, time, P, CS) {
        for (let i = this.heroes.length - 1; i >= 0; i--) {
            const hero = this.heroes[i];

            // 수감 중이면 탈옥 확률 체크
            if (hero.imprisoned) {
                hero.imprisonTimer += scaledDelta;
                if (hero.imprisonTimer >= 1000) {
                    hero.imprisonTimer -= 1000;
                    const room = hero.imprisonRoom;
                    const escapeChance = Math.max(0.05, 0.2 - (room && room.level ? (room.level - 1) * 0.03 : 0));
                    if (Math.random() < escapeChance) {
                        hero.imprisoned = false;
                        hero.imprisonRoom = null;
                        hero.dwellingRoomId = null;
                        this.addFloatingText(hero.x, hero.y - 20, '탈옥!', '#e74c3c');
                    }
                }
                this._drawHero(ctx, hero);
                continue;
            }

            // 전투 중이면 이동 정지 (방 안에 체류)
            if (hero.inBattle) {
                if (!hero.inBattle.active) {
                    hero.inBattle = null;
                    hero.dwellingRoomId = null;
                } else {
                    this._drawHero(ctx, hero);
                    continue;
                }
            }

            // 방 체류 중 (함정 헤매기, 디버프 효과 등)
            if (hero.dwelling) {
                hero.dwellTimer -= scaledDelta;
                if (hero.dwellTimer <= 0) {
                    hero.dwelling = false;
                    hero.dwellingRoomId = null;
                } else {
                    // 체류 중 약간 흔들리는 모션
                    hero.x += (Math.random() - 0.5) * 0.5;
                    hero.y += (Math.random() - 0.5) * 0.5;
                    this._drawHero(ctx, hero);
                    continue;
                }
            }

            // 대기 중 (방 정원 초과로 입장 불가)
            if (hero.waiting) {
                const waitRoom = hero.waitingForRoom;
                if (waitRoom) {
                    const type = ROOM_TYPES[waitRoom.type];
                    const cap = type?.capacity || 99;
                    if (this._countHeroesInRoom(waitRoom.id) < cap) {
                        hero.waiting = false;
                        hero.waitingForRoom = null;
                    } else {
                        // 대기 중 제자리 대기 모션
                        hero.x += (Math.random() - 0.5) * 0.3;
                        hero.y += (Math.random() - 0.5) * 0.3;
                        this._drawHero(ctx, hero);
                        continue;
                    }
                } else {
                    hero.waiting = false;
                }
            }

            // 목표가 없으면 다음 방 결정
            if (!hero.targetPos) {
                if (hero.health <= 0) {
                    this._heroDefeated(hero);
                    this.heroes.splice(i, 1);
                    continue;
                }

                // 현재 위치가 둥지면 처리 — 드래곤에게 피해
                if (hero.currentCell.col === this.grid.dragonNest.col &&
                    hero.currentCell.row === this.grid.dragonNest.row) {
                    const dragon = this.main.data.dragon;
                    const dmg = Math.max(10, hero.health);
                    dragon.stats.currentHp = (dragon.stats.currentHp ?? dragon.stats.health) - dmg;
                    this.addFloatingText(hero.x, hero.y, `드래곤 -${dmg}HP!`, '#ff0000');
                    playSound('hit3', 'effect');
                    dragon.gold += hero.gold;
                    this.addFloatingText(hero.x, hero.y - 20, `+${hero.gold}G`, '#8a2be2');
                    this.heroes.splice(i, 1);
                    if (dragon.stats.currentHp <= 0) {
                        dragon.stats.currentHp = 0;
                        this._triggerGameOver();
                    }
                    if (this.main.UI) this.main.UI.update();
                    continue;
                }

                // 방 효과 적용 + 체류/수용 체크
                const room = this.grid.getRoomAt(hero.currentCell.col, hero.currentCell.row);
                if (room && !hero.visitedRooms.has(room.id)) {
                    const type = ROOM_TYPES[room.type];

                    // 수용 인원 체크
                    const cap = type?.capacity || 99;
                    if (this._countHeroesInRoom(room.id) >= cap) {
                        hero.waiting = true;
                        hero.waitingForRoom = room;
                        this._drawHero(ctx, hero);
                        continue;
                    }

                    hero.visitedRooms.add(room.id);
                    this._applyRoomEffect(hero, room);

                    // 체류 시간 설정 (전투방/감옥은 별도 관리)
                    const dwell = type?.dwellTime || 0;
                    if (dwell > 0 && type.effect !== 'td_battle' && type.effect !== 'capture') {
                        hero.dwelling = true;
                        hero.dwellTimer = dwell + (room.level - 1) * 300; // 레벨당 +0.3초
                        hero.dwellingRoomId = room.id;
                        this._drawHero(ctx, hero);
                        continue;
                    }
                }

                // 다음 이동 결정
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
        const inCombat = hero.inBattle && hero.inBattle.active;
        const isDwelling = hero.dwelling;
        const isWaiting = hero.waiting;
        const isImprisoned = hero.imprisoned;
        const radius = hero.isBoss ? 18 : 14;

        // 상태별 색상
        let color = hero.isBoss ? '#ff6b6b' : '#fff';
        if (inCombat) {
            color = `hsl(0, 80%, ${55 + Math.sin(Date.now() * 0.01) * 15}%)`;
        } else if (isImprisoned) {
            color = '#7f8c8d';
        } else if (isDwelling) {
            color = `hsl(30, 70%, ${50 + Math.sin(Date.now() * 0.005) * 10}%)`; // 주황 펄스
        } else if (isWaiting) {
            color = '#888';
        }

        // 몸체 (배경 원)
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(hero.x, hero.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = hero.heroColor || '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // 영웅 이모지 표시
        ctx.font = `${radius + 4}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        if (isWaiting) {
            ctx.fillText('⏳', hero.x, hero.y);
        } else if (isImprisoned) {
            ctx.fillText('🔒', hero.x, hero.y);
        } else if (isDwelling && !inCombat) {
            ctx.fillText('💫', hero.x, hero.y);
        } else {
            ctx.fillText(hero.emoji || '🧑', hero.x, hero.y);
        }
        ctx.textBaseline = 'alphabetic';

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

        // 입구에 연결되지 않은 방은 효과 발동하지 않음 (전선 역할)
        if (!type.isCorridor && !this.grid.isRoomConnectedToEntrance(room.id)) {
            return;
        }

        switch (type.effect) {
            case 'none':
                // 통로: 효과 없음 (적 이동만)
                break;
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
                hero.dwellingRoomId = room.id;
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
                    hero.inBattle = battle;
                    hero.dwellingRoomId = room.id; // 전투 중 방에 체류
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

                        // 진화 체크
                        const specieData = pokemonData[p.key];
                        if (specieData?.evolution && p.level >= specieData.evolution.level) {
                            const evoKey = specieData.evolution.pokemon;
                            const evoData = pokemonData[evoKey];
                            if (evoData) {
                                const oldName = p.name;
                                p.key = evoKey;
                                p.name = evoData.name[7] || evoData.name[0];
                                p.spritePath = evoData.sprite.image;
                                p.frames = evoData.sprite.frames;
                                p.hold = evoData.sprite.hold;
                                this.addFloatingText(cx, cy - 20, `${oldName} → ${p.name} 진화!`, '#ff00ff');
                                playSound('shiny', 'effect');
                            }
                        }
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
            playSound('obtain', 'ui');
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

    /** 게임오버 처리 */
    _triggerGameOver() {
        this.stopped = true;
        this.heroes = [];
        this.activeBattles = [];

        // 웨이브 중지
        if (this.main.invasionWave) {
            this.main.invasionWave.stop();
        }

        // 게임오버 UI 표시
        if (this.main.UI) {
            this.main.UI.showGameOver({
                waves: this.main.invasionWave?.waveNum || 1,
                defeated: this.main.data.stats?.heroesDefeated || 0,
                gold: this.main.data.dragon?.gold || 0
            });
        }
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
            emoji: heroData.emoji || '🧑',
            heroColor: heroData.color || '#fff',
            currentCell: { ...this.grid.entrance },
            previousCell: null,
            nextCell: null,
            targetPos: null,
            vx: 0,
            vy: 0,
            visitedRooms: new Set(),
            inBattle: null,
            dwelling: false,
            dwellTimer: 0,
            dwellingRoomId: null,
            waiting: false,
            waitingForRoom: null
        });
    }
}
