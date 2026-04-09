import { playSound } from '../../file/audio.js';
import { Tower } from '../component/Tower.js';
import { saveData } from '../../file/data.js';

export class TeamManager {
	constructor(main, data) {
		this.main = main;

		this.teamA = Array.isArray(data['teamA']) ? data['teamA'] : [[], [], [], [], [], [], [], [], [], [], [], []];
		this.teamB = Array.isArray(data['teamB']) ? data['teamB'] : [[], [], [], [], [], [], [], [], [], [], [], []];
		this.teamC = Array.isArray(data['teamC']) ? data['teamC'] : [[], [], [], [], [], [], [], [], [], [], [], []];
		this.teamD = Array.isArray(data['teamD']) ? data['teamD'] : [[], [], [], [], [], [], [], [], [], [], [], []];
		this.teamE = Array.isArray(data['teamE']) ? data['teamE'] : [[], [], [], [], [], [], [], [], [], [], [], []];

		this.teams = [this.teamA, this.teamB, this.teamC, this.teamD, this.teamE];
		this.teamChallenge = [[], [], [], [], []];

		this.teams = ['A','B','C','D','E'].map(letter => {
		    let arr = data[`team${letter}`] || [];
		    while (arr.length < 12) arr.push([]);
		    return arr;
		});
	}

	getSaveData() {
		return {
			teamA: this.teamA,
			teamB: this.teamB,
			teamC: this.teamC,
			teamD: this.teamD,
			teamE: this.teamE,
		}
	}

	importTeam(slot, challenge = false) {
	    this.main.area.placementTiles.forEach(tile => {
	        if (tile.passenger) {
	            const p = tile.passenger;
	            p.isDeployed = false;
	            p.isPassenger = false;
	            p.carriedBy = null;
	            p.tilePosition = -1;
	            tile.passenger = false;
	        }
	        if (tile.tower) {
	            const b = tile.tower;
	            b.isDeployed = false;
	            b.isPassenger = false;
	            b.carriedBy = null;
	            b.tilePosition = -1;
	            tile.tower = false;
	        }
	    });

	    this.main.area.towers.length = 0;

	    while (this.main.team.pokemon.length > 0) {
	        const poke = this.main.team.pokemon[0];
	        poke.isDeployed = false;
	        poke.isPassenger = false;
	        poke.carriedBy = null;
	        poke.tilePosition = -1;
	        this.main.box.addPokemon(poke);
	        this.main.team.removePokemon(poke);
	    }

	    this.main.UI.tilesCountNum = [0, 0, 0, 0];

	    const savedList = (!challenge)
	        ? (this.teams[slot] && this.teams[slot][this.main.area.routeNumber]) ? this.teams[slot][this.main.area.routeNumber] : []
	        : (this.teamChallenge[slot] || []);

	    if (!savedList || savedList.length === 0) {
	        this.main.area.checkWeather();
	        this.main.UI.update();
	        playSound('option', 'ui');
	        if (this.main.game.deployingUnit != undefined) this.main.game.cancelDeployUnit();
	        if (this.main.UI.fastScene.isOpen) this.main.UI.fastScene.close();
	        return;
	    }

	    for (const entry of savedList) {
	        const boxIndex = this.main.box.pokemon.findIndex(p => p.id === entry.id);
	        if (boxIndex === -1) continue; // no está en la caja: skip
	        this.main.team.addPokemon(this.main.box.pokemon[boxIndex]);
	        const newPoke = this.main.team.pokemon[this.main.team.pokemon.length - 1];
	        this.main.box.removePokemon(this.main.box.pokemon[boxIndex]);
	        newPoke.isPassenger = entry.isPassenger || false;

	        // restaurar / retirar items
	        newPoke.retireItem();
	        if (!challenge) {
	            if (entry.item != null) {
	                const itemIdx = this.main.player.items.findIndex(it => it.id === entry.item.id);
	                if (itemIdx !== -1) newPoke.equipItem(this.main.player.items[itemIdx]);
	            }
	        } else {
	            if (entry.item != null) newPoke.equipItem(entry.item);
	        }

	        if (entry.form) newPoke.updateSpecie(entry.form);
	    }

	    for (let i = 0; i < savedList.length; i++) {
	        const entry = savedList[i];
	        if (entry.tilePosition == -1) continue;
	        if (entry.isPassenger) continue;

	        const tile = this.main.area.placementTiles[entry.tilePosition];
	        if (!tile) continue;

	        const teamIndex = this.main.team.pokemon.findIndex(p => p.id === entry.id);
	        if (teamIndex === -1) continue;
	        const poke = this.main.team.pokemon[teamIndex];

	        if (tile.tower) continue;

	        const towerObj = new Tower(this.main, tile.position.x, tile.position.y, this.main.game.ctx, poke, tile);
	        this.main.area.towers.push(towerObj);
	        tile.tower = poke;
	        poke.isDeployed = true;
	        poke.isPassenger = false;
	        poke.carriedBy = null;
	        poke.tilePosition = entry.tilePosition;

	        this.main.UI.tilesCountNum[tile.land - 1] = (this.main.UI.tilesCountNum[tile.land - 1] || 0) + 1;
	    }

	    for (let i = 0; i < savedList.length; i++) {
	        const entry = savedList[i];
	        if (!entry.isPassenger) continue;
	        if (entry.tilePosition == -1) continue;

	        const tile = this.main.area.placementTiles[entry.tilePosition];
	        if (!tile) continue;

	        const teamIndex = this.main.team.pokemon.findIndex(p => p.id === entry.id);
	        if (teamIndex === -1) continue;
	        const poke = this.main.team.pokemon[teamIndex];

	        const base = tile.tower;
	        if (!base || base.ability?.id !== 'grassyTerrain') {
	            poke.isDeployed = false;
	            poke.isPassenger = false;
	            poke.carriedBy = null;
	            poke.tilePosition = -1;
	            continue;
	        }

	        if (tile.passenger) continue;

	        const passengerTower = new Tower(this.main, tile.position.x, tile.position.y, this.main.game.ctx, poke, tile);
	        passengerTower.isPassenger = true;
	        passengerTower.castformTransform();
	        this.main.area.towers.push(passengerTower);
	        tile.passenger = poke;

	        poke.isDeployed = true;
	        poke.isPassenger = true;
	        poke.carriedBy = base;
	        poke.tilePosition = entry.tilePosition;

	        this.main.UI.tilesCountNum[tile.land - 1] = (this.main.UI.tilesCountNum[tile.land - 1] || 0) + 1;
	    }

	    this.main.area.recalculateAuras();
	    this.main.area.checkWeather();
	    this.main.UI.update();
	    playSound('option', 'ui');

	    if (this.main.game.deployingUnit != undefined) this.main.game.cancelDeployUnit();
	    if (this.main.UI.fastScene.isOpen) this.main.UI.fastScene.close();
	}

	saveTeam(slot, challenge = false) {	
		playSound('option', 'ui');

		if (!challenge) {
			this.teams[slot][this.main.area.routeNumber] = [];

			this.main.team.pokemon.forEach(pokemon => {
				this.teams[slot][this.main.area.routeNumber].push({
					id: pokemon.id,
					tilePosition: pokemon.tilePosition,
					item: pokemon.item,
    				isPassenger: pokemon.isPassenger || false,
    				form: pokemon.form || undefined  
				})
			})
		} else {
			this.teamChallenge[slot] = [];

			this.main.team.pokemon.forEach(pokemon => {
				this.teamChallenge[slot].push({
					id: pokemon.id,
					tilePosition: pokemon.tilePosition,
					item: pokemon.item,
    				isPassenger: pokemon.isPassenger || false,
    				form: pokemon.form || undefined  
				})
			})
		}

		this.main.UI.update();
		if (!this.main.area.waveActive) saveData(this.main.player, this.main.team, this.main.box, this.main.area, this.main.shop, this.main.teamManager);
	}
}