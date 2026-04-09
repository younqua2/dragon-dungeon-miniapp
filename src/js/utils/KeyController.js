/**
 * KeyController — 던전 모드용 키보드 단축키
 * TD 모드 키바인딩은 Phase 3에서 BattleController를 통해 복원
 */
export class KeyController {
    constructor(main) {
        this.main = main;
        this.keyHandler = this.keyHandler.bind(this);
        this.mouseDown = false;

        window.addEventListener('mousedown', () => this.mouseDown = true);
        window.addEventListener('mouseup', () => this.mouseDown = false);

        this.listen();
    }

    listen() {
        window.addEventListener('keydown', this.keyHandler);
    }

    keyHandler(e) {
        const isTypingTarget = (el) => {
            if (!el) return false;
            const tag = el.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA') return true;
            if (el.isContentEditable) return true;
            return false;
        };

        if (isTypingTarget(e.target)) return;

        switch (e.key) {
            case 'Escape':
                // 배치 모드 취소
                if (this.main.game?.ghostRoom) {
                    this.main.game.cancelPlacement();
                }
                break;

            case 'r':
            case 'R':
                // 고스트 방 회전
                if (this.main.game?.ghostRoom) {
                    this.main.game.rotateGhost();
                }
                break;

            case ' ':
                // 수동 웨이브 트리거
                e.preventDefault();
                if (this.main.invasionWave && !this.main.invasionWave.isActive) {
                    this.main.invasionWave.triggerWave();
                }
                break;

            case '1': case '2': case '3': case '4': case '5':
                // 탭 전환 (1~5)
                const tabIdx = parseInt(e.key) - 1;
                const tabBtns = document.querySelectorAll('.tab-btn');
                if (tabBtns[tabIdx]) tabBtns[tabIdx].click();
                break;
        }
    }

    remove() {
        window.removeEventListener('keydown', this.keyHandler);
    }
}
