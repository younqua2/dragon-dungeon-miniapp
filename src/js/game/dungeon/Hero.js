/**
 * Hero — 던전 침입 영웅 데이터 정의
 */

const HERO_TYPES = [
    { name: '견습 용사', health: 150, gold: 50, speed: 0.10, isBoss: false, emoji: '🧑', color: '#aaddff' },
    { name: '떠돌이 검사', health: 200, gold: 80, speed: 0.12, isBoss: false, emoji: '⚔️', color: '#cccccc' },
    { name: '현상금 사냥꾼', health: 250, gold: 120, speed: 0.14, isBoss: false, emoji: '🏹', color: '#88cc66' },
    { name: '마법사', health: 180, gold: 100, speed: 0.11, isBoss: false, emoji: '🧙', color: '#aa88ff' },
    { name: '도적', health: 160, gold: 150, speed: 0.18, isBoss: false, emoji: '🗡️', color: '#888888' },
    { name: '기사', health: 400, gold: 100, speed: 0.08, isBoss: false, emoji: '🛡️', color: '#4488cc' },
    { name: '왕실 기사단장', health: 600, gold: 200, speed: 0.09, isBoss: true, emoji: '👑', color: '#ffcc44' },
    { name: '레오하르트 3세', health: 1000, gold: 500, speed: 0.07, isBoss: true, emoji: '👑', color: '#ff4444' },
];

/**
 * 웨이브 번호에 맞는 영웅 생성
 * @param {number} waveNum - 현재 웨이브 번호
 * @returns {object} 영웅 데이터 (DungeonCanvas.spawnHero에 전달)
 */
export function createHero(waveNum) {
    const scaleFactor = 1 + (waveNum - 1) * 0.15;
    const isBossWave = waveNum % 10 === 0;

    let type;
    if (isBossWave) {
        type = waveNum >= 20 ? HERO_TYPES[7] : HERO_TYPES[6];
    } else {
        // 웨이브가 높을수록 강한 영웅 출현 확률 증가
        const maxIdx = Math.min(Math.floor(waveNum / 3) + 1, 5);
        const idx = Math.floor(Math.random() * (maxIdx + 1));
        type = HERO_TYPES[Math.min(idx, HERO_TYPES.length - 1)];
    }

    return {
        name: type.name,
        health: Math.floor(type.health * scaleFactor),
        gold: Math.floor(type.gold * scaleFactor),
        speed: type.speed + Math.random() * 0.03,
        isBoss: type.isBoss,
        emoji: type.emoji,
        color: type.color
    };
}

export { HERO_TYPES };
