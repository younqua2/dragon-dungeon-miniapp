import { eggListData } from '../game/data/pokemonData.js';
import { achievementData } from '../game/data/achievementData.js';
import { generatePlayerSecret } from '../utils/Redeem.js';

export const loadData = async (userId = "guest") => {
    // 세이브 와이프 버그 수정 완료 — 기존 테스트 코드 제거됨
    
    const data = window.localStorage.getItem(`data`);
    if (!data) {
        let newData = {
            config: {
                scale: 1, language: 0,
                audio: { master: 10, music: 4, ui: 10, effects: 10 },
                mute: { 0: false, 1: false, 2: false },
                showDamage: true, autoReset: 0, autoStop: 0, autoStopBoss: 0, displayHealth: 0, mapEffects: 0
            },
            save: {
                new: true,
                dragon: {
                    stage: 0, // 0 = Hatchling
                    gold: 50000, // 테스트용 자금
                    gems: 100, // 유료재화
                    adTickets: 5, // 광고
                    manaStones: 0, // 특수재화 (마력석)
                    stats: { attack: 10, health: 100 }
                },
                dungeon: {
                    rooms遭遇: [],
                    facilities: [] // saved rooms
                },
                monsters: [], // 획득한 유닛(권속) 목록
                capturedHeroes: [], // 포획된 용사 목록
                stats: {
                    heroesDefeated: 0,
                    totalGoldEarned: 0,
                    timePlayed: 0
                }
            }
        };
        window.localStorage.setItem(`data`, JSON.stringify(newData));
        return newData;
    }
    return JSON.parse(data);
};

let saveTimeout = null;
export const saveData = (dragon, dungeon, stats) => {
    let rawData = window.localStorage.getItem(`data`);
    const data = rawData ? JSON.parse(rawData) : {};
    
    // Safety check just in case it's called with partially built parts
    if(dragon) data.save.dragon = dragon;
    if(dungeon) data.save.dungeon = dungeon;
    if(stats) data.save.stats = stats;

    window.localStorage.setItem(`data`, JSON.stringify(data));
    
    if(saveTimeout) clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        // console.log("Syncing to Toss Backend...");
    }, 2000);
};
