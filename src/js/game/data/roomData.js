/**
 * roomData — 방 유형 정의
 * 각 방 유형의 비용, 효과, 색상, 수용 인원, 체류 시간
 */

export const ROOM_TYPES = {
    corridor: {
        key: 'corridor',
        name: '통로',
        emoji: '🧱',
        description: '적이 이동하는 길. 방을 연결하는 전선 역할',
        color: '#95a5a6',
        baseCost: 30,
        effect: 'none',
        isCorridor: true,
        capacity: 99,       // 통로는 제한 없음
        dwellTime: 0         // 체류 없음 (바로 통과)
    },
    combat: {
        key: 'combat',
        name: '전투방',
        emoji: '⚔️',
        description: '권속을 배치하여 침입자와 전투',
        color: '#e74c3c',
        baseCost: 200,
        effect: 'td_battle',
        maxPokemon: 3,
        capacity: 2,         // 동시 2명까지 전투
        dwellTime: 0,        // RoomBattle이 체류 시간 관리
        tdConfig: {
            tilesPerCell: 5
        }
    },
    trap: {
        key: 'trap',
        name: '함정방',
        emoji: '🪤',
        description: '침입자에게 자동 데미지 (헤매는 동안 지속 피해)',
        color: '#e67e22',
        baseCost: 100,
        effect: 'damage',
        baseDamage: 50,
        damageScale: 15,
        capacity: 3,         // 동시 3명 수용
        dwellTime: 2000      // 2초간 헤맴
    },
    debuff: {
        key: 'debuff',
        name: '디버프방',
        emoji: '😵',
        description: '침입자의 능력치를 약화',
        color: '#9b59b6',
        baseCost: 150,
        effect: 'debuff',
        debuffs: {
            speedDown: 0.3,
            attackDown: 0.2
        },
        capacity: 3,
        dwellTime: 1500      // 1.5초 체류
    },
    shop: {
        key: 'shop',
        name: '기념품점',
        emoji: '🏪',
        description: '침입자의 골드를 강탈',
        color: '#f1c40f',
        baseCost: 120,
        effect: 'gold_drain',
        goldDrain: 30,
        capacity: 2,
        dwellTime: 1500      // 1.5초 (물건 구경)
    },
    prison: {
        key: 'prison',
        name: '감옥',
        emoji: '🔒',
        description: '침입자를 가두어 탈출할 때까지 체류',
        color: '#7f8c8d',
        baseCost: 250,
        effect: 'capture',
        captureBonus: 0.2,
        capacity: 2,
        dwellTime: 0         // capture 로직이 별도 관리
    },
    dark: {
        key: 'dark',
        name: '암흑방',
        emoji: '🌑',
        description: '침입자끼리 동족상잔',
        color: '#2c3e50',
        baseCost: 300,
        effect: 'friendly_fire',
        friendlyFireChance: 0.4,
        capacity: 4,
        dwellTime: 2000      // 2초 (어둠 속에서 헤맴)
    },
    mana: {
        key: 'mana',
        name: '마력방',
        emoji: '🔮',
        description: '마력 자동 회복',
        color: '#8e44ad',
        baseCost: 180,
        effect: 'mana_regen',
        manaPerMinute: 1,
        capacity: 99,
        dwellTime: 0
    },
    barracks: {
        key: 'barracks',
        name: '훈련소',
        emoji: '🏋️',
        description: '배치된 권속 경험치 자동 획득',
        color: '#27ae60',
        baseCost: 200,
        effect: 'exp_regen',
        expPerMinute: 5,
        maxPokemon: 2,
        capacity: 99,
        dwellTime: 0
    }
};

export const ROOM_TYPE_LIST = Object.values(ROOM_TYPES);

/** 방 건설 비용 계산 (기본 비용 x 던전 내 같은 유형 방 수에 따른 인플레이션) */
export function getRoomCost(typeKey, existingCount) {
    const type = ROOM_TYPES[typeKey];
    if (!type) return Infinity;
    return Math.floor(type.baseCost * (1 + existingCount * 0.25));
}
