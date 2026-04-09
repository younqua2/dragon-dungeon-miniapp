/**
 * RoomTemplate — 비스포크 스타일 방 모양 정의
 * 각 템플릿은 셀 오프셋 배열과 회전 지원
 */

// 90도 회전 변환: (col, row) → (-row, col) 기준, 양수 보정
function rotateOffsets(offsets, rotation) {
    const steps = ((rotation % 360) + 360) % 360 / 90;
    let result = offsets.map(o => ({ col: o.col, row: o.row }));

    for (let i = 0; i < steps; i++) {
        result = result.map(o => ({ col: -o.row, row: o.col }));
    }

    // 음수 좌표를 0 기준으로 보정
    const minCol = Math.min(...result.map(o => o.col));
    const minRow = Math.min(...result.map(o => o.row));
    return result.map(o => ({ col: o.col - minCol, row: o.row - minRow }));
}

export class RoomTemplate {
    constructor(key, name, emoji, offsets, validRotations = [0, 90, 180, 270]) {
        this.key = key;
        this.name = name;
        this.emoji = emoji;
        this.offsets = offsets; // [{col, row}, ...]
        this.validRotations = validRotations;
        this.tileCount = offsets.length;
    }

    getRotatedOffsets(rotation = 0) {
        if (rotation === 0) return [...this.offsets];
        return rotateOffsets(this.offsets, rotation);
    }

    getBounds(rotation = 0) {
        const offsets = this.getRotatedOffsets(rotation);
        const maxCol = Math.max(...offsets.map(o => o.col));
        const maxRow = Math.max(...offsets.map(o => o.row));
        return { width: maxCol + 1, height: maxRow + 1 };
    }
}

// ═══════════════════════════════════════
// 비스포크 방 템플릿 정의
// ═══════════════════════════════════════

export const ROOM_TEMPLATES = {
    // 1x1 기본방
    single: new RoomTemplate('single', '기본방', '■',
        [{ col: 0, row: 0 }],
        [0]
    ),

    // 1x2 가로 복도
    corridor_h: new RoomTemplate('corridor_h', '가로 복도', '▬',
        [{ col: 0, row: 0 }, { col: 1, row: 0 }],
        [0, 90]
    ),

    // 2x2 대형방
    large: new RoomTemplate('large', '대형방', '▣',
        [{ col: 0, row: 0 }, { col: 1, row: 0 }, { col: 0, row: 1 }, { col: 1, row: 1 }],
        [0]
    ),

    // L자 (ㄴ 모양)
    l_shape: new RoomTemplate('l_shape', 'ㄴ자 방', '⌐',
        [{ col: 0, row: 0 }, { col: 0, row: 1 }, { col: 1, row: 1 }],
        [0, 90, 180, 270]
    ),

    // 역L자 (ㄱ 모양)
    reverse_l: new RoomTemplate('reverse_l', 'ㄱ자 방', '¬',
        [{ col: 0, row: 0 }, { col: 1, row: 0 }, { col: 1, row: 1 }],
        [0, 90, 180, 270]
    ),

    // T자 모양
    t_shape: new RoomTemplate('t_shape', 'T자 방', '⊤',
        [{ col: 0, row: 0 }, { col: 1, row: 0 }, { col: 2, row: 0 }, { col: 1, row: 1 }],
        [0, 90, 180, 270]
    ),

    // Z자 모양
    z_shape: new RoomTemplate('z_shape', 'Z자 방', '⌁',
        [{ col: 0, row: 0 }, { col: 1, row: 0 }, { col: 1, row: 1 }, { col: 2, row: 1 }],
        [0, 90]
    ),
};

export const TEMPLATE_LIST = Object.values(ROOM_TEMPLATES);
