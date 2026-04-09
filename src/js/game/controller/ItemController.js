export class ItemController {
    constructor(main) {
        this.main = main;
    }

    getItems() {
        return this.main.player.items;
    }

    getAllPokemon() {
        return [...this.main.team.pokemon, ...this.main.box.pokemon];
    }

    getAvailablePokemon(item) {
        if (!item) return [];
        return this.getAllPokemon().filter(pokemon =>
            this.canEquip(item, pokemon)
        );
    }

    equip(item, pokemon) {
        if (!this.canEquip(item, pokemon)) return false;
        pokemon.equipItem(item);
        return true;
    }

    isEquipped(item) {
        return typeof item?.equipedBy === 'number';
    }

    canEquip(item, pokemon) {
        if (!item?.restriction || !pokemon) return false;

        const handlers = {
            key: (value) =>
                value === pokemon.specie.key,

            id: (value) =>
                value.includes(pokemon.id),

            ricochet: (value) =>
                pokemon.ricochet == 0,

            idForbidden: (value) =>
                !value.includes(pokemon.id),

            tile: (value) =>
                ![70, 404, 101].includes(pokemon.id) &&
                value.some(t => pokemon.tiles.includes(t)),

            tileForbidden: (value) =>
                ![70, 404].includes(pokemon.id) &&
                !value.some(t => pokemon.tiles.includes(t)),

            attackType: (value) =>
                ![70, 404].includes(pokemon.id) &&
                value === pokemon.attackType,

            rangeType: (value) =>
                ![70, 404].includes(pokemon.id) &&
                value === pokemon.rangeType,
        };

        return Object.entries(item.restriction).every(([key, value]) => {
            const handler = handlers[key];
            if (!handler) return false; 
            return handler(value);
        });
    }
}