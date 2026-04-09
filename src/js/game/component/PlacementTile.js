export class PlacementTile {
	constructor(main, x, y, ctx, land, id) {
		this.main = main;

		this.land = land;
		this.position = { x, y };
		this.size = 24;
		this.center = { x: this.position.x + 12, y: this.position.y + 12 };
		this.color = 'rgba(255, 255, 255, 0.5)';
		this.tower = false;
		this.passenger = false;

		this.ctx = ctx;
		this.id = id;
	}

	draw() {
		if (this.main.game.deployingUnit) {
			// usar helper
			if (!this.canPlacePokemonHere(this.main.game.deployingUnit)) {
				this.color = 'rgba(255, 50, 50, 0.5)';
			} else if (this.tower) {
				this.color = 'rgba(150, 150, 150, 0.5)';
			}
			this.ctx.fillStyle = this.color;
			this.ctx.fillRect(this.position.x, this.position.y, this.size, this.size);

			this.ctx.strokeStyle = '#333';
			this.ctx.lineWidth = 1;
			this.ctx.strokeRect(this.position.x, this.position.y, this.size, this.size);	
		} else if (this.main.UI.tileTerrainHover != null) {
			if (this.main.UI.tileTerrainHover === this.land) {
				this.ctx.fillStyle = this.color;
				this.ctx.fillRect(this.position.x, this.position.y, this.size, this.size);

				this.ctx.strokeStyle = '#333';
				this.ctx.lineWidth = 1;
				this.ctx.strokeRect(this.position.x, this.position.y, this.size, this.size);	
			}
		}
	}

	update(mouse) {
	    this.draw();

	    const isMouseOver =
	        mouse.x > this.position.x && 
	        mouse.x < this.position.x + this.size &&
	        mouse.y > this.position.y && 
	        mouse.y < this.position.y + this.size;

	    if (!isMouseOver) {
	        this.color = 'rgba(255, 255, 255, 0.5)';
	        return;
	    }

	    if (this.main.game.deployingUnit) {
	        if (!this.canPlacePokemonHere(this.main.game.deployingUnit) || (this.tower && !(this.tower?.ability?.id === "grassyTerrain" && !this.tower.passenger))) return;

	        this.color = 'white';
	        const pokemon = this.main.game.deployingUnit;
	        this.drawRange(pokemon.range, pokemon.rangeType, pokemon.innerRange, pokemon.ability, pokemon?.item);
	    } 
	    else if (this.tower) {
	        // Dibujar primero la base
	        this.drawRange(this.tower.range, this.tower.rangeType, this.tower.innerRange, this.tower.ability, this.tower?.item);

	        // Si hay passenger, dibujar su rango encima
	        if (this.passenger) {
	            this.drawRange(
	                this.passenger.range,
	                this.passenger.rangeType,
	                this.passenger.innerRange,
	                this.passenger.ability,
	                this.passenger?.item,
	                true // usar color para diferenciar si quieres
	            );
	        }
	    }
	}


	canPlacePokemonHere(pokemon) {
		if (!pokemon) return false;

		if (this.tower && this.tower.ability?.id === 'grassyTerrain') {
			if (pokemon.tiles && (pokemon.tiles.includes(1) || pokemon.tiles.includes(2))) return true;
			if (pokemon?.item?.id === 'heavyDutyBoots' || pokemon?.item?.id === 'assaultVest') return true;
			if (pokemon?.item?.id === 'dampMulch') return true;
			return false;
		}

		// Lógica normal: comprobar tile.real + items especiales
		if (pokemon.tiles && pokemon.tiles.includes(this.land)) return true;
		if (pokemon?.item?.id == 'airBalloon' && this.land == 4) return true;
		if (pokemon?.item?.id == 'heavyDutyBoots' && this.land == 2) return true;
		if (pokemon?.item?.id == 'assaultVest' && this.land == 2) return true;
		if (pokemon?.item?.id == 'dampMulch' && this.land == 1) return true;
		if (pokemon?.item?.id == 'subwoofer' && this.land == 3 && pokemon.id == 76) return true;

		return false;
	}

	drawRange(range, rangeType, innerRange, ability, item = null, color = false) {
		this.ctx.save();
		this.ctx.fillStyle = 'rgba(0, 0, 255, 0.2)';
		this.ctx.strokeStyle = 'rgba(0, 0, 255, 0.4)';

		if (color) {
			switch(ability.id) {
				case 'burn':
				case 'burnNerf':
				case 'willOWisp':
					this.ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
					this.ctx.strokeStyle = 'rgba(255, 0, 0, 0.4)';
				break;
				case 'poison':
				case 'poisonDoubleShot':
					this.ctx.fillStyle = 'rgba(0, 255, 0, 0.2)';
					this.ctx.strokeStyle = 'rgba(0, 255, 0, 0.4)';
				break;
				case 'nightmare':
					this.ctx.fillStyle = 'rgba(160, 60, 200, 0.2)';
					this.ctx.strokeStyle = 'rgba(160, 60, 200, 0.4)';
				break;
				case 'curse':
				case 'curseDoubleShot':
					this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
					this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
				break;
				case 'stun':
				case 'stunMono':
				case 'stunMonoNerf':
				case 'stunArea':
				case 'static':
					this.ctx.fillStyle = 'rgba(255, 215, 0, 0.2)';
					this.ctx.strokeStyle = 'rgba(255, 215, 0, 0.4)';
				break;
				case 'slow':
				case 'slowSplash':
				case 'cradily':
					this.ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
					this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
				break;
				case 'powerAura':
				case 'triage':
				case 'criticalAura':
					this.ctx.fillStyle = 'rgba(100, 180, 255, 0.2)';
					this.ctx.strokeStyle = 'rgba(100, 180, 255, 0.4)';
				break;
				default:
					this.ctx.fillStyle = 'rgba(0, 0, 200, 0.2)';
					this.ctx.strokeStyle = 'rgba(0, 0, 200, 0.4)';
	                break;
			} 
		}

		if ((this.land === 4 || this.land === 1 && item?.id == 'hikingKit') && (ability.id === 'vigilant' || ability.id === 'vigilantFrisk' ||  ability.id === 'castform')) range *= 2;
		if ([3,4,5,10].includes(this.main.area.routeNumber) && (ability.id === 'doubleShotSand' || ability.id === 'quadraShotSand')) range *= 2;
		if (item?.id == 'spindaCocktail') {
			if (ability.id === 'simple') range *= 1.38;
			else range *= 1.25;
		}
		if (item?.id == 'starCandy') range += (this.main.player.stars * 0.1);
		if (item?.id == 'oldRod') range += 75;
		if (item?.id == 'wrestlingMask') range -= 75;
		if (item?.id == 'silphScope' && (ability.id === 'frisk' || ability.id === 'vigilantFrisk')) range += 15;
		if (item?.id == 'ancientShield') range = range * 1.2;
		if (item?.id == 'nanabBerry') range = range * 1.3;
		if (item?.id == 'helixFossil') range += this.main.player.fossilInTeam * 10;
		if (item?.id == 'revelationAroma') range += 25;
		if (item?.id == 'sunflowerPetal') range -= 50;
		if (item?.id == 'condensedBlizzard') range /= 2;

		switch (rangeType) {
			case 'circle':
				this.ctx.beginPath();
				this.ctx.arc(this.center.x, this.center.y, range, 0, Math.PI * 2);
				this.ctx.fill();
				this.ctx.stroke();
				break;
			case 'donut':
				this.ctx.beginPath();
			    this.ctx.arc(this.center.x, this.center.y, range, 0, Math.PI * 2);
			    this.ctx.arc(this.center.x, this.center.y, innerRange, 0, Math.PI * 2, true);
			    this.ctx.fill('evenodd');

			    // Stroke solo del borde externo
			    this.ctx.beginPath();
			    this.ctx.arc(this.center.x, this.center.y, range, 0, Math.PI * 2);
			    this.ctx.stroke();

			    // Stroke solo del borde interno
			    this.ctx.beginPath();
			    this.ctx.arc(this.center.x, this.center.y, innerRange, 0, Math.PI * 2);
			    this.ctx.stroke();
				break;
			case 'cross':
				this.ctx.beginPath();
				if (item?.id == 'starPiece') {
					this.ctx.rect(this.center.x - 24, this.center.y - range, 48, range * 2);
					this.ctx.rect(this.center.x - range, this.center.y - 24, range * 2, 48);
					
					this.ctx.translate(this.center.x, this.center.y);
					this.ctx.rotate(Math.PI / 4);

					this.ctx.rect(-24, -range, 48, range * 2);
					this.ctx.rect(-range, -24, range * 2, 48);
				} else if (item?.id == 'wideLens') {
					this.ctx.rect(this.center.x - 48, this.center.y - range, 96, range * 2);
					this.ctx.rect(this.center.x - range, this.center.y - 48, range * 2, 96);
				} else {
					this.ctx.rect(this.center.x - 24, this.center.y - range, 48, range * 2);
					this.ctx.rect(this.center.x - range, this.center.y - 24, range * 2, 48);
				}
				this.ctx.fill();
				this.ctx.stroke();
				break;
			case 'horizontalLine':
				this.ctx.beginPath();
				this.ctx.rect(this.center.x - range, this.center.y - 24, range * 2, 48);
				this.ctx.fill();
				this.ctx.stroke();
				break;
			case 'verticalLine':
				this.ctx.beginPath();
				this.ctx.rect(this.center.x - 24, this.center.y - range, 48, range * 2);
				this.ctx.fill();
				this.ctx.stroke();
				break;
			case 'xShape':
				this.ctx.save();
				this.ctx.beginPath();
				if (item?.id == 'condensedBlizzard') {
					this.ctx.arc(this.center.x, this.center.y, range, 0, Math.PI * 2);
				} else if (item?.id == 'starPiece') {
					this.ctx.rect(this.center.x - 24, this.center.y - range, 48, range * 2);
					this.ctx.rect(this.center.x - range, this.center.y - 24, range * 2, 48);
					
					this.ctx.translate(this.center.x, this.center.y);
					this.ctx.rotate(Math.PI / 4);

					this.ctx.rect(-24, -range, 48, range * 2);
					this.ctx.rect(-range, -24, range * 2, 48);
				} else if (item?.id == 'wideLens') {
					this.ctx.translate(this.center.x, this.center.y);
					this.ctx.rotate(Math.PI / 4);
					this.ctx.rect(-48, -range, 96, range * 2);
					this.ctx.rect(-range, -48, range * 2, 96);
				} else {
					this.ctx.translate(this.center.x, this.center.y);
					this.ctx.rotate(Math.PI / 4);
					this.ctx.rect(-24, -range, 48, range * 2);
					this.ctx.rect(-range, -24, range * 2, 48);
				}			
				this.ctx.fill();
				this.ctx.stroke();
				break;
		}

		this.ctx.restore();
	}
}

