import { Element } from '../utils/Element.js';
import { Utility } from '../utils/Utility.js';
import { KeyController } from '../utils/KeyController.js';
import { DungeonUI } from './DungeonUI.js';
import { DungeonCanvas } from './DungeonCanvas.js';

// Core Dungeon Engine (To be implemented)
// import { Dragon } from './core/Dragon.js';
// import { DungeonArea } from './core/DungeonArea.js';

export class Main {
	constructor(data) {
		this.lang = JSON.parse(window.localStorage.getItem("data")).config.language;
		this.data = data; // { new: boolean, dragon: {}, dungeon: {}, stats: {} }

		// SCENES
		this.scene = new Element(document.getElementById("screen"), { id: 'game-scene' }).element;
		this.UI = new DungeonUI(this);
		this.game = new DungeonCanvas(this);

		// MISC
		this.utility = new Utility();
		this.keys = new KeyController(this);

		this.load();
	}

	load() {
		// Temporary check to prevent UI missing errors until UI class is fully restructured
		if(typeof this.UI.update === 'function') this.UI.update();
		if(typeof this.game.load === 'function') this.game.load();

		setInterval(() => {
		    if (this.data.stats && typeof this.data.stats.timePlayed === 'number') {
		        this.data.stats.timePlayed++;
		    }
		}, 60000);
	}
}

function resize() {
	const BASE_WIDTH  = 1080;
	const BASE_HEIGHT = 1920;

  	const scale = Math.min(
    	window.innerWidth / BASE_WIDTH,
    	window.innerHeight / BASE_HEIGHT
  	);

  	const root = document.getElementById("screen-root");
  	root.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", resize);
resize();