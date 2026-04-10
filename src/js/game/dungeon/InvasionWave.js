import { createHero } from './Hero.js';

/**
 * InvasionWave — 웨이브 기반 영웅 침입 스케줄러
 * 주기적으로 영웅 그룹을 스폰하여 던전에 침입
 */
export class InvasionWave {
    constructor(dungeonCanvas, startWave = 1) {
        this.canvas = dungeonCanvas;
        this.waveNum = startWave;
        this.heroesPerWave = 3;
        this.spawnInterval = 1500;   // 영웅 간 스폰 간격 (ms)
        this.waveInterval = 15000;   // 웨이브 간 대기 (ms)
        this.isActive = false;
        this._spawnTimer = null;
        this._waveTimer = null;
        this._heroesSpawned = 0;
    }

    /** 자동 웨이브 시작 */
    start() {
        if (this.isActive) return;
        this.isActive = true;
        this._startWave();
    }

    /** 자동 웨이브 중지 */
    stop() {
        this.isActive = false;
        if (this._spawnTimer) { clearInterval(this._spawnTimer); this._spawnTimer = null; }
        if (this._waveTimer) { clearTimeout(this._waveTimer); this._waveTimer = null; }
    }

    /** 수동 웨이브 트리거 */
    triggerWave() {
        this._startWave();
    }

    /** 보스 웨이브 여부 */
    isBossWave() {
        return this.waveNum % 10 === 0;
    }

    _startWave() {
        this._heroesSpawned = 0;
        const heroCount = this.heroesPerWave + Math.floor(this.waveNum / 5);
        const isBoss = this.isBossWave();

        // 경로 존재 확인
        if (!this.canvas.grid.hasValidPath()) return;

        // 보스 웨이브 경고
        if (isBoss) {
            this.canvas.addFloatingText(
                this.canvas.PADDING + this.canvas.CELL_SIZE * 4,
                this.canvas.PADDING + this.canvas.CELL_SIZE * 4,
                `⚠ BOSS WAVE ${this.waveNum} ⚠`, '#ff0000'
            );
        }

        this._spawnTimer = setInterval(() => {
            if (this._heroesSpawned >= heroCount) {
                clearInterval(this._spawnTimer);
                this._spawnTimer = null;

                // 웨이브 종료 → 다음 웨이브 예약
                this.waveNum++;
                if (this.canvas.main.data.stats) {
                    this.canvas.main.data.stats.wavesCompleted = (this.canvas.main.data.stats.wavesCompleted || 0) + 1;
                }

                if (this.isActive) {
                    this._waveTimer = setTimeout(() => this._startWave(), this.waveInterval);
                }
                return;
            }

            const heroData = createHero(this.waveNum);
            this.canvas.spawnHero(heroData);
            this._heroesSpawned++;
        }, this.spawnInterval);
    }
}
