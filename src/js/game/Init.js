import { Element } from '../utils/Element.js';
import { AppController } from './AppController.js';

export class Init {
    constructor(data) {
        this.data = data;
        this.render();
    }

    render = () => {
        document.body.style.fontFamily = 'PixelMPlus';

        this.scene = new Element(document.getElementById("screen"), { className: 'init-scene' }).element;
        
        // Skip Heavy Preloading
        this.createLoadingBar();
        
        let percent = 0;
        let loadSim = setInterval(() => {
            percent += 10;
            this.loadingBar.style.width = `${percent}%`;
            if (percent >= 100) {
                clearInterval(loadSim);
                this.scene.remove();
                new AppController(this.data);
            }
        }, 30);
    }

    createLoadingBar() {
        this.loadingText = new Element(this.scene, { className: 'loading-text', text: 'ENTERING DUNGEON...' }).element;
        this.loadingBarBackground = new Element(this.scene, { className: 'loading-bar-bg' }).element;
        this.loadingBar = new Element(this.loadingBarBackground, { className: 'loading-bar' }).element;
    }
}