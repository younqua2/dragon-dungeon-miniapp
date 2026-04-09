import { GameScene } from '../../utils/GameScene.js';
import { Element } from '../../utils/Element.js';
import { text } from '../../file/text.js';
import { playSound } from '../../file/audio.js';

export class InventoryScene extends GameScene {
	constructor(main) {
		super(560, 500);
		this.main = main;

		this.slotTotal = 96;
		this.itemArray = [];
		this.itemSelected = null;

		this.pokemonArray = [];
		this.pokemonSelected = null;

		this.render();
	}

	render() {
		this.title.innerHTML = text.inventory.title[this.main.lang].toUpperCase();

		this.itemContainer = new Element(this.container, { className: 'inventory-scene-item-container' }).element;
		this.itemSlot = [];

		for (let i = 0; i < this.slotTotal; i++) {
			this.itemSlot[i] = new Element(this.itemContainer, { className: 'inventory-scene-item-slot' }).element;
			this.itemSlot[i].pokemon = new Element(this.itemSlot[i], { className: 'inventory-scene-item-slot-pokemon' }).element;
			this.itemSlot[i].addEventListener('mouseenter', () => { playSound('hover1', 'ui') })

			this.itemSlot[i].addEventListener('click', () => {
				this.selectItem(i);
				playSound('option', 'ui')
			})
		}

		this.itemSelectedContainer = new Element(this.container, { className: 'inventory-scene-item-selected-container' }).element;
		this.itemSelectedName = new Element(this.itemSelectedContainer, { className: 'pokemon-scene-item-name' }).element;
		this.itemSelectedDescription = new Element(this.itemSelectedContainer, { className: 'pokemon-scene-item-description' }).element;

		this.pokemonContainer = new Element(this.container, { className: 'inventory-scene-pokemon-container' }).element;

		this.background.addEventListener('click', (e) => { if (e.target == this.background) this.close() });
	}

	update() {
		this.title.innerHTML = text.inventory.title[this.main.lang].toUpperCase();

		this.displayItems();
		this.showItemData();
		this.displayPokemon();
	}

	displayItems() {
	  	const items = this.main.itemController.getItems();
	  	const pokemon = this.main.itemController.getAllPokemon();

	  	for (let i = 0; i < this.slotTotal; i++) {
	    	const slot = this.itemSlot[i];
	    	slot.style.pointerEvents = 'none';
	    	slot.style.opacity = '0.6';
	    	slot.style.backgroundImage = '';
	    	slot.pokemon.style.backgroundImage = '';
	  	}

	  	items.forEach((item, i) => {
	    	const slot = this.itemSlot[i];
	    	slot.style.pointerEvents = 'auto';
	    	slot.style.opacity = '1';
	    	slot.style.backgroundImage = `url(${item.sprite})`;

	    	if (typeof item.equipedBy === 'number') {
	      		const poke = pokemon.find(p => p.id === item.equipedBy);
	      		if (poke) {
	        	slot.pokemon.style.backgroundImage = `url("${poke.sprite.base}")`;
	      	}
	    }
	  });

	  	this.itemArray = items;
	}

	selectItem(slot) {
		this.itemSelected = this.itemArray[slot];
		this.showItemData();
		this.displayPokemon();
	}

	showItemData() {
		const lang = this.main.lang;

		if (this.itemSelected == null) {
			this.itemSelectedName.innerHTML = text.inventory.noItem[lang].toUpperCase();
			this.itemSelectedDescription.innerHTML = text.inventory.noItemDescription[lang];
			return;
		} 
       		
       	if (this.itemSelected.name.length <= lang) lang = 0; 

		this.itemSelectedName.innerHTML = this.itemSelected.name[lang].toUpperCase();
		this.itemSelectedDescription.innerHTML = this.itemSelected.description[lang];
	}

	displayPokemon() {
	  	if (!this.itemSelected) return;

	  	const available = this.main.itemController.getAvailablePokemon(this.itemSelected);

	  	this.pokemonContainer.innerHTML = '';
	  	this.pokemonArray = [];

	  	const blockedItems = [
			'silphScope',
			'airBalloon',
			'heavyDutyBoots',
			'dampMulch',
			'assaultVest',
			'twistedSpoon',
			'ejectButton',
			'subwoofer',
		];

	  	available.forEach((pokemon, i) => {
			const el = new Element(this.pokemonContainer, {
				className: 'inventory-scene-pokemon',
				image: pokemon.sprite.base
			}).element;

			const isBlocked =
				pokemon.isDeployed &&
				blockedItems.includes(pokemon?.item?.id);

			if (isBlocked) {
				el.style.pointerEvents = 'none';
				el.style.filter = 'grayscale(100%)'
				el.style.opacity = '0.7';
				el.style.cursor = 'not-allowed';
				el.classList.add('inventory-scene-pokemon-locked');
			} else {
				el.addEventListener('click', () => {
					this.main.itemController.equip(this.itemSelected, pokemon);
					this.update();
				});

				el.addEventListener('contextmenu', (e) => {
					e.preventDefault();
					this.main.pokemonScene.open(pokemon, i, available);
					this.update();
				});
			}

			el.addEventListener('mouseenter', () => playSound('hover1', 'ui'));
			this.pokemonArray.push(el);
		});
	}

	open() {
		if (this.main.area.inChallenge.noItems) return;
		if (this.main.game.stopped) return playSound('pop0', 'ui');
		super.open();
		this.update();
		this.main.game.cancelDeployUnit()
		if (this.main.player.items.length > 0 && this.itemSelected == null) this.selectItem(0);
		if (this.main.UI.fastScene.isOpen) this.main.UI.fastScene.close();
	}
}
