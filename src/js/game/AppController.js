import { Element } from '../utils/Element.js';
import { Utility } from '../utils/Utility.js';
import { KeyController } from '../utils/KeyController.js';
import { DungeonUI } from './DungeonUI.js';
import { DungeonCanvas } from './DungeonCanvas.js';
import { savePartial } from '../file/DataManager.js';
import { InvasionWave } from './dungeon/InvasionWave.js';

/**
 * AppController - 최상위 오케스트레이터
 * 던전 메타 게임과 TD 전투를 통합 관리
 */
export class AppController {
    constructor(data) {
        this.data = data.save;
        this.config = data.config;
        this.lang = data.config.language;
        this.mode = 'dungeon'; // 'dungeon' | 'battle'

        // DOM
        this.scene = new Element(document.getElementById('screen'), { id: 'game-scene' }).element;

        // 던전 시스템
        this.UI = new DungeonUI(this);
        this.game = new DungeonCanvas(this);

        // 유틸리티
        this.utility = new Utility();
        this.keys = new KeyController(this);

        // 자동 저장 (30초마다)
        this._autoSaveInterval = setInterval(() => this.save(), 30000);

        // 플레이 시간 추적 (1분마다)
        this._timeInterval = setInterval(() => {
            if (this.data.stats) this.data.stats.timePlayed++;
        }, 60000);

        this.load();
    }

    load() {
        if (typeof this.UI.update === 'function') this.UI.update();
        if (typeof this.game.load === 'function') this.game.load();

        // 웨이브 시스템 시작 (저장된 웨이브 번호 복원)
        this.invasionWave = new InvasionWave(this.game, this.data.waveNum || 1);
        if (this.game.grid.hasValidPath()) {
            this.invasionWave.start();
        }
    }

    save(reason) {
        // 웨이브 번호 동기화
        if (this.invasionWave) {
            this.data.waveNum = this.invasionWave.waveNum;
        }
        savePartial({
            dragon: this.data.dragon,
            dungeon: this.data.dungeon,
            monsters: this.data.monsters,
            capturedHeroes: this.data.capturedHeroes,
            fragments: this.data.fragments,
            stats: this.data.stats,
            waveNum: this.data.waveNum
        });
    }

    /** 이벤트 기반 저장 (방 배치, 전투 종료, 구매 등에서 호출) */
    saveOnEvent(reason) {
        this.save(reason);
    }

    switchMode(mode) {
        this.mode = mode;
        if (mode === 'dungeon') {
            this.game.resume();
        } else if (mode === 'battle') {
            this.game.pause();
        }
    }

    destroy() {
        clearInterval(this._autoSaveInterval);
        clearInterval(this._timeInterval);
        this.save();
    }
}
