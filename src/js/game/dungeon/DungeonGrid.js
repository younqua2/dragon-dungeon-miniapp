/**
 * DungeonGrid — 8x8 셀 기반 던전 그리드 자료구조
 * 비스포크 스타일 멀티타일 방 배치, 충돌 감지, 연결성 검증, A* 경로 탐색
 */
export class DungeonGrid {
    constructor(size = 8) {
        this.size = size;
        // cells[row][col] = roomId | null
        this.cells = Array.from({ length: size }, () => Array(size).fill(null));
        this.rooms = new Map(); // roomId -> Room object
        this.nextRoomId = 1;

        // 고정 포인트
        this.entrance = { col: 0, row: 0 };
        this.dragonNest = { col: size - 1, row: size - 1 };
    }

    /** 방 배치 가능 여부 확인 */
    canPlace(cellOffsets, anchorCol, anchorRow, excludeRoomId = null) {
        for (const offset of cellOffsets) {
            const col = anchorCol + offset.col;
            const row = anchorRow + offset.row;

            if (col < 0 || col >= this.size || row < 0 || row >= this.size) return false;

            const occupant = this.cells[row][col];
            if (occupant !== null && occupant !== excludeRoomId) return false;

            // 고정 포인트 보호 (입구, 둥지는 별도 방으로 예약)
            if (col === this.entrance.col && row === this.entrance.row) return false;
            if (col === this.dragonNest.col && row === this.dragonNest.row) return false;
        }
        return true;
    }

    /** 방 배치 */
    placeRoom(template, type, anchorCol, anchorRow, rotation = 0) {
        const offsets = template.getRotatedOffsets(rotation);

        if (!this.canPlace(offsets, anchorCol, anchorRow)) return null;

        const id = this.nextRoomId++;
        const cells = offsets.map(o => ({ col: anchorCol + o.col, row: anchorRow + o.row }));

        const room = {
            id,
            templateKey: template.key,
            type,
            anchorCol,
            anchorRow,
            rotation,
            cells,
            deployedPokemon: [],
            level: 1
        };

        // 셀 점유 표시
        for (const cell of cells) {
            this.cells[cell.row][cell.col] = id;
        }

        this.rooms.set(id, room);
        return room;
    }

    /** 방 제거 */
    removeRoom(roomId) {
        const room = this.rooms.get(roomId);
        if (!room) return false;

        for (const cell of room.cells) {
            this.cells[cell.row][cell.col] = null;
        }
        this.rooms.delete(roomId);
        return true;
    }

    /** 특정 셀의 방 조회 */
    getRoomAt(col, row) {
        const roomId = this.cells[row]?.[col];
        if (roomId === null || roomId === undefined) return null;
        return this.rooms.get(roomId) || null;
    }

    /** 인접 방 목록 (방 간 연결성 그래프용) */
    getAdjacentRooms(roomId) {
        const room = this.rooms.get(roomId);
        if (!room) return [];

        const adjacentIds = new Set();
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        for (const cell of room.cells) {
            for (const [dc, dr] of dirs) {
                const nc = cell.col + dc;
                const nr = cell.row + dr;
                if (nc < 0 || nc >= this.size || nr < 0 || nr >= this.size) continue;
                const neighborId = this.cells[nr][nc];
                if (neighborId !== null && neighborId !== roomId) {
                    adjacentIds.add(neighborId);
                }
            }
        }

        // 입구/둥지도 인접 체크
        for (const cell of room.cells) {
            for (const [dc, dr] of dirs) {
                const nc = cell.col + dc;
                const nr = cell.row + dr;
                if (nc === this.entrance.col && nr === this.entrance.row) adjacentIds.add('entrance');
                if (nc === this.dragonNest.col && nr === this.dragonNest.row) adjacentIds.add('dragonNest');
            }
        }

        return [...adjacentIds];
    }

    /** 입구 → 둥지 경로 존재 여부 (BFS) */
    hasValidPath() {
        // 입구와 인접한 방 찾기
        const startRooms = this._getRoomsAdjacentToPoint(this.entrance);
        if (startRooms.length === 0) return false;

        const endRooms = this._getRoomsAdjacentToPoint(this.dragonNest);
        if (endRooms.length === 0) return false;

        const endSet = new Set(endRooms);
        const visited = new Set();
        const queue = [...startRooms];

        while (queue.length > 0) {
            const current = queue.shift();
            if (endSet.has(current)) return true;
            if (visited.has(current)) continue;
            visited.add(current);

            const adj = this.getAdjacentRooms(current);
            for (const neighbor of adj) {
                if (typeof neighbor === 'number' && !visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
        return false;
    }

    /** A* 경로 탐색 (방 단위): 입구 → 둥지 */
    findPath() {
        const startRooms = this._getRoomsAdjacentToPoint(this.entrance);
        const endRooms = new Set(this._getRoomsAdjacentToPoint(this.dragonNest));
        if (startRooms.length === 0 || endRooms.size === 0) return null;

        // 방의 중심 좌표 계산 (휴리스틱용)
        const center = (roomId) => {
            const room = this.rooms.get(roomId);
            if (!room) return { col: 0, row: 0 };
            const avgCol = room.cells.reduce((s, c) => s + c.col, 0) / room.cells.length;
            const avgRow = room.cells.reduce((s, c) => s + c.row, 0) / room.cells.length;
            return { col: avgCol, row: avgRow };
        };

        const heuristic = (roomId) => {
            const c = center(roomId);
            return Math.abs(c.col - this.dragonNest.col) + Math.abs(c.row - this.dragonNest.row);
        };

        // A* 구현
        const openSet = new Map(); // roomId -> { g, f, parent }
        for (const id of startRooms) {
            openSet.set(id, { g: 0, f: heuristic(id), parent: null });
        }
        const closedSet = new Set();

        while (openSet.size > 0) {
            // f값이 최소인 노드 선택
            let bestId = null;
            let bestF = Infinity;
            for (const [id, data] of openSet) {
                if (data.f < bestF) { bestF = data.f; bestId = id; }
            }

            if (endRooms.has(bestId)) {
                // 경로 역추적
                const path = [];
                let current = bestId;
                while (current !== null) {
                    path.unshift(current);
                    current = openSet.get(current)?.parent ?? closedSet[current] ?? null;
                }
                return path;
            }

            const bestData = openSet.get(bestId);
            openSet.delete(bestId);
            closedSet.add(bestId);

            const neighbors = this.getAdjacentRooms(bestId).filter(n => typeof n === 'number');
            for (const neighborId of neighbors) {
                if (closedSet.has(neighborId)) continue;

                const tentativeG = bestData.g + 1;
                const existing = openSet.get(neighborId);

                if (!existing || tentativeG < existing.g) {
                    openSet.set(neighborId, {
                        g: tentativeG,
                        f: tentativeG + heuristic(neighborId),
                        parent: bestId
                    });
                }
            }
        }

        return null; // 경로 없음
    }

    /** 포인트(입구/둥지)에 인접한 방 ID 목록 */
    _getRoomsAdjacentToPoint(point) {
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const roomIds = new Set();

        for (const [dc, dr] of dirs) {
            const nc = point.col + dc;
            const nr = point.row + dr;
            if (nc < 0 || nc >= this.size || nr < 0 || nr >= this.size) continue;
            const id = this.cells[nr][nc];
            if (id !== null) roomIds.add(id);
        }
        return [...roomIds];
    }

    /** 직렬화 (저장용) */
    serialize() {
        return {
            gridSize: this.size,
            rooms: [...this.rooms.values()],
            entrance: this.entrance,
            dragonNest: this.dragonNest,
            nextRoomId: this.nextRoomId
        };
    }

    /** 역직렬화 (로드용) */
    static deserialize(data, templates) {
        const grid = new DungeonGrid(data.gridSize || 8);
        grid.entrance = data.entrance || { col: 0, row: 0 };
        grid.dragonNest = data.dragonNest || { col: 7, row: 7 };
        grid.nextRoomId = data.nextRoomId || 1;

        if (data.rooms) {
            for (const roomData of data.rooms) {
                grid.rooms.set(roomData.id, roomData);
                for (const cell of roomData.cells) {
                    grid.cells[cell.row][cell.col] = roomData.id;
                }
            }
        }
        return grid;
    }
}
