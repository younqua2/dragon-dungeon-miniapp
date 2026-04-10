import { eggListData, pokemonData } from '../game/data/pokemonData.js';
import { achievementData } from '../game/data/achievementData.js';

const STORAGE_KEY = 'data';

/** 초기 지급 권속 생성 */
function _createStarterMonsters() {
    const starterKeys = ['charmander', 'bulbasaur', 'squirtle'];
    return starterKeys
        .filter(key => pokemonData[key])
        .map(key => {
            const p = pokemonData[key];
            return {
                key,
                name: p.name[7] || p.name[0],
                spritePath: p.sprite.image,
                frames: p.sprite.frames || 1,
                hold: p.sprite.hold || 15,
                level: 3,
                exp: 0
            };
        });
}

function createDefaultData() {
    return {
        config: {
            scale: 1,
            language: 0,
            audio: { master: 10, music: 4, ui: 10, effects: 10 },
            mute: { 0: false, 1: false, 2: false },
            showDamage: true,
            autoReset: 0,
            autoStop: 0,
            autoStopBoss: 0,
            displayHealth: 0,
            mapEffects: 0
        },
        save: {
            new: true,
            dragon: {
                stage: 0,
                gold: 5000,
                gems: 10,
                adTickets: 3,
                manaStones: 0,
                stats: { attack: 10, health: 100 }
            },
            dungeon: {
                gridSize: 8,
                rooms: [],
                entrance: { col: 0, row: 0 },
                dragonNest: { col: 7, row: 7 }
            },
            monsters: _createStarterMonsters(),
            capturedHeroes: [],
            fragments: {},  // 카드조각: { pokemonKey: count }
            waveNum: 1,
            stats: {
                heroesDefeated: 0,
                totalGoldEarned: 0,
                timePlayed: 0,
                wavesCompleted: 0
            }
        }
    };
}

export function loadData(userId = 'guest') {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
        const newData = createDefaultData();
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
        return newData;
    }

    const data = JSON.parse(raw);

    // 마이그레이션: 기존 세이브에 dungeon.gridSize가 없으면 추가
    if (data.save && !data.save.dungeon) {
        data.save.dungeon = createDefaultData().save.dungeon;
    }
    if (data.save && data.save.dungeon && !data.save.dungeon.gridSize) {
        data.save.dungeon.gridSize = 8;
        data.save.dungeon.entrance = { col: 0, row: 0 };
        data.save.dungeon.dragonNest = { col: 7, row: 7 };
        if (!data.save.dungeon.rooms) data.save.dungeon.rooms = [];
    }
    if (data.save && !data.save.stats) {
        data.save.stats = createDefaultData().save.stats;
    }
    if (data.save && !data.save.capturedHeroes) {
        data.save.capturedHeroes = [];
    }
    if (data.save && !data.save.fragments) {
        data.save.fragments = {};
    }

    return data;
}

let saveTimeout = null;

export function saveData(data) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    if (saveTimeout) clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        // 향후 토스 백엔드 싱크 포인트
    }, 2000);
}

export function savePartial(updates) {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);

    if (updates.dragon) data.save.dragon = updates.dragon;
    if (updates.dungeon) data.save.dungeon = updates.dungeon;
    if (updates.monsters) data.save.monsters = updates.monsters;
    if (updates.capturedHeroes) data.save.capturedHeroes = updates.capturedHeroes;
    if (updates.stats) data.save.stats = updates.stats;
    if (updates.fragments) data.save.fragments = updates.fragments;
    if (updates.waveNum !== undefined) data.save.waveNum = updates.waveNum;
    if (updates.config) data.config = updates.config;

    saveData(data);
}

export function resetData() {
    window.localStorage.removeItem(STORAGE_KEY);
    return createDefaultData();
}
