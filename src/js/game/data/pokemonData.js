import { projectileData } from './projectileData.js';
import { abilityData } from './abilityData.js';

export const pokemonData = {
	charmander: {
		id: 0,
		key: 'charmander',
		name: ['charmander', 'charmander', 'Salamèche', 'charmander', 'charmander', 'glumanda', 'ヒトカゲ', '파이리', '小火龍', 'charmander'],
		color: '#ff8463',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/charmander.png',
			image: './src/assets/images/pokemon/normal/charmander-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: 0
		},
		power: {
			base: 13,
			scale: 2,
		},
		critical: {
			base: 0.5,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'charmeleon',
			level: 16
		},	
	},
	charmeleon: {
		id: 0,
		key: 'charmeleon',
		name: ['charmeleon', 'charmeleon', 'Reptincel', 'charmeleon', 'charmeleon', 'glutexo', 'リザード', '리자드', '火恐龍', 'charmeleon'],
		color: '#d63900',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/charmeleon.png',
			image: './src/assets/images/pokemon/normal/charmeleon-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 950,
			scale: -2
		},
		power: {
			base: 25,
			scale: 2.4,
		},
		critical: {
			base: 2,
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'charizard',
			level: 36
		},	
	},
	charizard: {
		id: 0,
		key: 'charizard',
		name: ['charizard', 'charizard', 'Dracaufeu', 'charizard', 'charizard', 'glurak', 'リザードン', '리자몽', '噴火龍', 'charizard'],
		color: '#d63801',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/charizard.png',
			image: './src/assets/images/pokemon/normal/charizard-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 940,
			scale: -2
		},
		power: {
			base: 55,
			scale: 4.3,
		},
		critical: {
			base: 2,
			scale: 0.1
		},
		range: {
			base: 165,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],	
		mega: 'megaCharizardX'
	},
	megaCharizardX: {
		id: 0,
		key: 'megaCharizardX',
		name: ['M-chard X', 'M-chard X', 'M-Drac X', 'M-chard X', 'M-chard X', 'M-glurak X', 'メガリザードンX', '메가리자몽 X', '超进化喷火龙X', 'M-chard X'],
		color: '#37aee7',
		ability: abilityData['burnSplash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaCharizardX.png',
			image: './src/assets/images/pokemon/normal/megaCharizardX-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 940,
			scale: -2
		},
		power: {
			base: 90,
			scale: 4.3,
		},
		critical: {
			base: 2,
			scale: 0.1
		},
		range: {
			base: 165,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],	
		base: 'charizard'
	},
	treecko: {
		id: 1,
		key: 'treecko',
		name: ['treecko', 'treecko', 'Arcko', 'treecko', 'treecko', 'geckarbor', 'キモリ', '나무지기', '木守宮', 'treecko'],
		color: '#b7d667',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/treecko.png',
			image: './src/assets/images/pokemon/normal/treecko-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 95,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'grovyle',
			level: 16,
		},	
	},
	grovyle: {
		id: 1,
		key: 'grovyle',
		name: ['grovyle', 'grovyle', 'Massko', 'grovyle', 'grovyle', 'reptain', 'ジュプトル', '나무돌이', '森林蜥蜴', 'grovyle'],
		color: '#368f0e',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/grovyle.png',
			image: './src/assets/images/pokemon/normal/grovyle-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -3
		},
		power: {
			base: 27,
			scale: 2.2,
		},
		critical: {
			base: 0,
			scale: 0.25
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'sceptile',
			level: 36,
		},	
	},
	sceptile: {
		id: 1,
		key: 'sceptile',
		name: ['sceptile', 'sceptile', 'Jungko', 'sceptile', 'sceptile', 'gewaldro', 'ジュカイン', '나무킹', '蜥蜴王', 'sceptile'],
		color: '#9fcf6f',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sceptile.png',
			image: './src/assets/images/pokemon/normal/sceptile-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1150,
			scale: -3
		},
		power: {
			base: 50,
			scale: 5, //Changelog: 4.9->5
		},
		critical: {
			base: 0,
			scale: 0.45 //Changelog: 0.3->0.45
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		mega: 'megaSceptile'
	},
	megaSceptile: {
		id: 1,
		key: 'megaSceptile',
		name: ['M-sceptile', 'M-sceptile', 'M-Jungko', 'M-sceptile', 'M-sceptile', 'M-gewaldro', "メガジュカイン", "메가쟈카인", "超进化蜥蜴王", 'M-sceptile'],
		color: '#62b52f',
		ability: abilityData['toughClawsNight'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaSceptile.png',
			image: './src/assets/images/pokemon/normal/megaSceptile-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1050,
			scale: -3
		},
		power: {
			base: 300,
			scale: 5, 
		},
		critical: {
			base: 0,
			scale: 0.45 
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		base: 'sceptile'
	},
	froaki: {
		id: 2,
		key: 'froaki',
		name: ['froakie', 'froakie', 'Grenousse', 'froakie', 'froakie', 'froxy', 'ケロマツ', '개구마르', '呱呱泡蛙', 'froakie'],
		color: '#20adbc',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 3,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/froaki.png',
			image: './src/assets/images/pokemon/normal/froaki-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -1
		},
		power: {
			base: 5,
			scale: 1,
		},
		critical: {
			base: 0.5,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'frogadier',
			level: 16,
		},	
	},
	frogadier: {
		id: 2,
		key: 'frogadier',
		name: ['frogadier', 'frogadier', 'Croâporal', 'frogadier', 'frogadier', 'amphizel', 'ゲコガシラ', '개굴반장', '呱頭蛙', 'frogadier'],
		color: '#4366b7',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 4,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/frogadier.png',
			image: './src/assets/images/pokemon/normal/frogadier-idle.png',
			frames: 15,
			hold: 5
		},
		speed: {
			base: 900,
			scale: -2
		},
		power: {
			base: 8,
			scale: 1.2,
		},
		critical: {
			base: 1.5,
			scale: 0.2
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'greninja',
			level: 36,
		},	
	},
	greninja: {
		id: 2,
		key: 'greninja',
		name: ['greninja', 'greninja', 'Amphinobi', 'greninja', 'greninja', 'quajutsu', 'ゲッコウガ', '개굴닌자', '甲賀忍蛙', 'greninja'],
		color: '#2657ba',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 5,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/greninja.png',
			image: './src/assets/images/pokemon/normal/greninja-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 850,
			scale: -5
		},
		power: {
			base: 10,
			scale: 1.55,
		},
		critical: {
			base: 5,
			scale: 0.45 //Changelog: 0.4->0.45
		},
		range: {
			base: 145, //Changelog: 130->145
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	spoink: {
		id: 3,
		key: 'spoink',
		name: ['spoink', 'spoink', 'Spoink', 'spoink', 'spoink', 'spoink', 'バネブー', '피그점프', '跳跳猪', 'spoink'],
		color: '#aeb6bf',
		ability: abilityData['frisk'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/spoink.png',
			image: './src/assets/images/pokemon/normal/spoink-idle.png',
			frames: 8,
			hold: 10
		},
		speed: {
			base: 1800,
			scale: -2
		},
		power: {
			base: 30,
			scale: 3,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'grumpig',
			level: 32
		},	
	},
	grumpig: {
		id: 3,
		key: 'grumpig',
		name: ['grumpig', 'grumpig', 'Groret', 'grumpig', 'grumpig', 'groink', 'ブーピッグ', '피그킹', '胖彈豬', 'grumpig'],
		color: '#c797de',
		ability: abilityData['frisk'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/grumpig.png',
			image: './src/assets/images/pokemon/normal/grumpig-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -6
		},
		power: {
			base: 70,
			scale: 6.2,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 145,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 4],	
	},
	natu: {
		id: 4,
		key: 'natu',
		name: ['natu', 'natu', 'Natu', 'natu', 'natu', 'natu', 'ネイティ', '네이티', '小果然鳥', 'natu'],
		color: '#9fcf6f',
		ability: abilityData['frisk'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/natu.png',
			image: './src/assets/images/pokemon/normal/natu-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1400,
			scale: -3
		},
		power: {
			base: 20,
			scale: 2.7,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'xatu',
			level: 25
		},	
	},
	xatu: {
		id: 4,
		key: 'xatu',
		name: ['xatu', 'xatu', 'Xatu', 'xatu', 'xatu', 'xatu', 'ネイティオ', '네이티오', '奇異鳥', 'xatu'],
		color: '#5fb727',
		ability: abilityData['vigilantFrisk'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/xatu.png',
			image: './src/assets/images/pokemon/normal/xatu-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1350,
			scale: -5.5
		},
		power: {
			base: 35,
			scale: 4,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],	
	},
	voltorb: {
		id: 5,
		key: 'voltorb',
		name: ['voltorb', 'voltorb', 'Voltorbe', 'voltorb', 'voltorb', 'voltobal', 'ビリリダマ', '찌리리공', '電球', 'voltorb'],
		color: '#d63901',
		ability: abilityData['stunMonoNerf'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/voltorb.png',
			image: './src/assets/images/pokemon/normal/voltorb-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 650,
			scale: -2
		},
		power: {
			base: 4,
			scale: 1,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'electrode',
			level: 30
		},	
	},
	electrode: {
		id: 5,
		key: 'electrode',
		name: ['electrode', 'electrode', 'Électrode', 'electrode', 'electrode', 'lektrobal', 'マルマイン', '붐볼', '電擊球', 'electrode'],
		color: '#adb4bc',
		ability: abilityData['stunMonoNerf'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/electrode.png',
			image: './src/assets/images/pokemon/normal/electrode-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 650,
			scale: -3
		},
		power: {
			base: 20,
			scale: 1.2,
		},
		critical: {
			base: 15,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],	
	},
	ekans: {
		id: 6,
		key: 'ekans',
		name: ['ekans', 'ekans', 'Abo', 'ekans', 'ekans', 'rettan', 'アーボ', '아보', '阿柏蛇', 'ekans'],
		color: '#b594df',
		ability: abilityData['poison'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ekans.png',
			image: './src/assets/images/pokemon/normal/ekans-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1800,
			scale: -2
		},
		power: {
			base: 12,
			scale: 2.2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2], //Changelog: gained grass tiles, just make sense for snake and it needs a little buff
		evolution: {
			pokemon: 'arbok',
			level: 22
		},	
	},
	arbok: {
		id: 6,
		key: 'arbok',
		name: ['arbok', 'arbok', 'Arbok', 'arbok', 'arbok', 'arbok', 'アーボック', '아보크', '阿柏怪', 'arbok'],
		color: '#8c62bc',
		ability: abilityData['poison'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/arbok.png',
			image: './src/assets/images/pokemon/normal/arbok-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1800,
			scale: -3
		},
		power: {
			base: 70,
			scale: 6.7, //Changelog: 6->6.7
		},
		critical: {
			base: 10, //Changelog: 0->10
			scale: 0.2 //Changelog: 0.1->0.2
		},
		range: {
			base: 130, //Changelog: 120->130
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2], //Changelog: gained grass tiles, just make sense for snake and it needs a little buff
	},
	machop: {
		id: 7,
		key: 'machop',
		name: ['machop', 'machop', 'Machoc', 'machop', 'machop', 'machollo', 'ワンリキー', '알통몬', '腕力', 'machop'],
		color: '#8cacb5',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/machop.png',
			image: './src/assets/images/pokemon/normal/machop-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1650,
			scale: -1
		},
		power: {
			base: 9,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'machoke',
			level: 28
		},	
	},
	machoke: {
		id: 7,
		key: 'machoke',
		name: ['machoke', 'machoke', 'Machopeur', 'machoke', 'machoke', 'maschock', 'ゴーリキー', '근육몬', '豪力', 'machoke'],
		color: '#b595de',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/machoke.png',
			image: './src/assets/images/pokemon/normal/machoke-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -1
		},
		power: {
			base: 30,
			scale: 6.5,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'machamp',
			level: 42
		},	
	},
	machamp: {
		id: 7,
		key: 'machamp',
		name: ['machamp', 'machamp', 'Mackogneur', 'machamp', 'machamp', 'machomei', 'カイリキー', '괴력몬', '怪力', 'machamp'],
		color: '#d7e6df',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/machamp.png',
			image: './src/assets/images/pokemon/normal/machamp-idle.png',
			frames: 10,
			hold: 7
		},
		speed: {
			base: 1600,
			scale: -1
		},
		power: {
			base: 70,
			scale: 17.5,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 125,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],	
	},
	mankey: {
		id: 8,
		key: 'mankey',
		name: ['mankey', 'mankey', 'Férosinge', 'mankey', 'mankey', 'menki', 'マンキー', '망키', '猴怪', 'mankey'],
		color: '#fff79c',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/mankey.png',
			image: './src/assets/images/pokemon/normal/mankey-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1300,
			scale: -2
		},
		power: {
			base: 12,
			scale: 3.8,
		},
		critical: {
			base: 0,
			scale: 0.5 //Changelog: 0.3->0.5
		},
		range: {
			base: 100,
			scale: 0.1, //Changelog: 0->0.1
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'primeape',
			level: 28
		},	
	},
	primeape: {
		id: 8,
		key: 'primeape',
		name: ['primeape', 'primeape', 'Colossinge', 'primeape', 'primeape', 'rasaff', 'オコリザル', '성원숭', '火爆猴', 'primeape'],
		color: '#fe845a',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/primeape.png',
			image: './src/assets/images/pokemon/normal/primeape-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 1150,
			scale: -3
		},
		power: {
			base: 55,
			scale: 6.5,
		},
		critical: {
			base: 0,
			scale: 0.5 //Changelog: 0.3->0.5
		},
		range: {
			base: 100,
			scale: 0.2, //Changelog: 0->0.2
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
	},
	chimchar: {
		id: 9,
		key: 'chimchar',
		name: ['chimchar', 'chimchar', 'Ouisticram', 'chimchar', 'chimchar', 'panflam', 'ヒコザル', '불꽃숭이', '小火焰猴', 'chimchar'],
		color: '#df771e',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/chimchar.png',
			image: './src/assets/images/pokemon/normal/chimchar-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1150,
			scale: -2
		},
		power: {
			base: 15,
			scale: 2,
		},
		critical: {
			base: 1.4,
			scale: 0.2
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'monferno',
			level: 16,
		},	
	},
	monferno: {
		id: 9,
		key: 'monferno',
		name: ['monferno', 'monferno', 'Chimpenfeu', 'monferno', 'monferno', 'panpyro', 'モウカザル', '파이숭이', '猛火猴', 'monferno'],
		color: '#ff962f',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/monferno.png',
			image: './src/assets/images/pokemon/normal/monferno-idle.png',
			frames: 11,
			hold: 7
		},
		speed: {
			base: 1050,
			scale: -3
		},
		power: {
			base: 25,
			scale: 2.2,
		},
		critical: {
			base: 2,
			scale: 0.3
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'infernape',
			level: 36,
		},	
	},
	infernape: {
		id: 9,
		key: 'infernape',
		name: ['infernape', 'infernape', 'Simiabraz', 'infernape', 'infernape', 'panferno', 'ゴウカザル', '초염몽', '烈焰猴', 'infernape'],
		color: '#df8626',
		ability: abilityData['burn'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/infernape.png',
			image: './src/assets/images/pokemon/normal/infernape-idle.png',
			frames: 15,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -5
		},
		power: {
			base: 60,
			scale: 3,
		},
		critical: {
			base: 2.5,
			scale: 0.4
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	yamask: {
		id: 10,
		key: 'yamask',
		name: ['yamask', 'yamask', 'Tutafeh', 'yamask', 'yamask', 'makabaja', 'デスマス', '데스마스', '哭哭面具', 'yamask'],
		color: '#708088',
		ability: abilityData['curse'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/yamask.png',
			image: './src/assets/images/pokemon/normal/yamask-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 2770,
			scale: -1
		},
		power: {
			base: 20,
			scale: 2.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 220,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'cofagrigus',
			level: 34
		},	
	},
	cofagrigus: {
		id: 10,
		key: 'cofagrigus',
		name: ['cofagrigus', 'cofagrigus', 'Tutankafer', 'cofagrigus', 'cofagrigus', 'echnatoll', 'デスカーン', '데스니칸', '魂胸棺', 'cofagrigus'],
		color: '#ffef47',
		ability: abilityData['curse'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cofagrigus.png',
			image: './src/assets/images/pokemon/normal/cofagrigus-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2550,
			scale: -9
		},
		power: {
			base: 40,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 280,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	riolu: {
		id: 11,
		key: 'riolu',
		name: ['riolu', 'riolu', 'Riolu', 'riolu', 'riolu', 'riolu', 'リオル', '리오르', '利歐路', 'riolu'],
		color: '#1e9ee6',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/riolu.png',
			image: './src/assets/images/pokemon/normal/riolu-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1300,
			scale: -2
		},
		power: {
			base: 7,
			scale: 2.2,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'lucario',
			level: 20
		},	
	},
	lucario: {
		id: 11,
		key: 'lucario',
		name: ['lucario', 'lucario', 'Lucario', 'lucario', 'lucario', 'lucario', 'ルカリオ', '루카리오', '路卡利歐', 'lucario'],
		color: '#1fa7e7',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lucario.png',
			image: './src/assets/images/pokemon/normal/lucario-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 900,
			scale: -2
		},
		power: {
			base: 40,
			scale: 4.1,
		},
		critical: {
			base: 20,
			scale: 0.2
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	bidoof: {
		id: 12, 
		key: 'bidoof',
		name: [
		  	"Bidoof",
		  	"Bidoof",
		  	"Keunotor",
		  	"Bidoof",
		  	"Bidoof",
		  	"Bidiza",
		  	"ビッパ",
		  	"비버니",
		  	"大牙狸",
		  	"Bidoof"
		],
		color: '#a75e1f',
		ability: abilityData['simple'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/bidoof.png',
			image: './src/assets/images/pokemon/normal/bidoof-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3000, 
			scale: -5
		},
		power: {
			base: 5, 
			scale: 2,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 115, 
			scale: 0, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 3],
		evolution: {
			pokemon: 'bibarel',
			level: 15
		},	
	},
	bibarel: {
		id: 12,
		key: 'bibarel',
		name: [
		  	"Bibarel",
		  	"Bibarel",
		  	"Castorno",
		  	"Bibarel",
		  	"Bibarel",
		  	"Bidifas",
		  	"ビーダル",
		  	"비버통",
		  	"大尾狸",
		  	"Bibarel"
		],
		color: '#bf772e',
		ability: abilityData['simple'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/bibarel.png',
			image: './src/assets/images/pokemon/normal/bibarel-idle.png',
			frames: 6,
			hold: 10
		},
		speed: {
			base: 2800, 
			scale: -14
		},
		power: {
			base: 34, 
			scale: 12,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 130, 
			scale: 0, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 3],
	},
	mareep: {
		id: 13,
		key: 'mareep',
		name: ['mareep', 'mareep', 'Wattouat', 'mareep', 'mareep', 'voltilamm', 'メリープ', '메리프', '咩利羊', 'mareep'],
		color: '#ffe69e',
		ability: abilityData['stunArea'],
		projectileSound: 'area3',
		projectileSpeed: 7,
		projectile: projectileData['yellow4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/mareep.png',
			image: './src/assets/images/pokemon/normal/mareep-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3945, //Changelog: 3945->3445
			scale: -1
		},
		power: {
			base: 5, 
			scale: 2,
		},
		critical: {
			base: 0, //Changelog: 1->0
			scale: 0
		},
		range: {
			base: 120, //Changelog: 130->120
			scale: 0.2, //Changelog: 0->0.2
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'flaaffy',
			level: 15
		},	
	},
	flaaffy: {
		id: 13,
		key: 'flaaffy',
		name: ['flaaffy', 'flaaffy', 'Lainergie', 'flaaffy', 'flaaffy', 'waaty', 'モココ', '보송송', '麦蛙', 'flaaffy'],
		color: '#fe8faf',
		ability: abilityData['stunArea'],
		projectileSound: 'area3',
		projectileSpeed: 7,
		projectile: projectileData['yellow4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/flaaffy.png',
			image: './src/assets/images/pokemon/normal/flaaffy-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3000, //Changelog: 3700->3200
			scale: -1
		},
		power: {
			base: 8,
			scale: 2.2,
		},
		critical: {
			base: 3, //Changelog: 3->0
			scale: 0
		},
		range: {
			base: 130, //Changelog: 150->130
			scale: 0.3, //Changelog: 0->0.3
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'ampharos',
			level: 30
		},	
	},
	ampharos: {
		id: 13,
		key: 'ampharos',
		name: ['ampharos', 'ampharos', 'Pharamp', 'ampharos', 'ampharos', 'ampharos', 'デンリュウ', '전룡', '電龍', 'ampharos'],
		color: '#fff600',
		ability: abilityData['stunArea'],
		projectileSound: 'area3',
		projectileSpeed: 7,
		projectile: projectileData['yellow4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ampharos.png',
			image: './src/assets/images/pokemon/normal/ampharos-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 3000, //Changelog: 3500->3000
			scale: -2 //Changelog: -1->-2
		},
		power: {
			base: 15, 
			scale: 3.1, //Changelog: 3.8->3.1
		},
		critical: {
			base: 0, //Changelog: 5->0 (universal AoE removal of crit)
			scale: 0
		},
		range: {
			base: 140, //Changelog: 185->140
			scale: 0.4, //Changelog: 0->0.4
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],	
	},
	gulpin: {
		id: 14,
		key: 'gulpin',
		name: ['gulpin', 'gulpin', 'Gloupti', 'gulpin', 'gulpin', 'schluppuck', 'ゴクリン', '꼴깍몬', '嘟嘟利', 'gulpin'],
		color: '#8fff67',
		ability: abilityData['poison'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gulpin.png',
			image: './src/assets/images/pokemon/normal/gulpin-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 3500,
			scale: -10 
		},
		power: {
			base: 0, //Changelog: 13->0
			scale: 0, //Changelog: 0.5->0
		},
		critical: {
			base: 0, //Changelog: 0.5->0
			scale: 0
		},
		range: {
			base: 100, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'swalot',
			level: 26
		},	
	},
	swalot: {
		id: 14,
		key: 'swalot',
		name: ['swalot', 'swalot', 'Avaltout', 'swalot', 'swalot', 'schlukwech', 'マルノーム', '꿀꺽몬', '吞食獸', 'swalot'],
		color: '#b796df',
		ability: abilityData['poison'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/swalot.png',
			image: './src/assets/images/pokemon/normal/swalot-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 3000, 
			scale: -18 
		},
		power: {
			base: 25, //Changelog: 20->25
			scale: 0, //Changelog: 1->0
		},
		critical: {
			base: 0, //Changelog: 1->0 (universal AoE removal of crit)
			scale: 0
		},
		range: {
			base: 140, 
			scale: 0, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1],	
	},
	cryogonal: {
		id: 15,
		key: 'cryogonal',
		name: ['cryogonal', 'cryogonal', 'Hexagel', 'cryogonal', 'cryogonal', 'frigometri', 'フリージオ', '프리지오', '冰雪巨龍', 'cryogonal'],
		color: '#607dcb',
		ability: abilityData['stunMono'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cryogonal.png',
			image: './src/assets/images/pokemon/normal/cryogonal-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2400,
			scale: -5
		},
		power: {
			base: 28,
			scale: 11.8,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 148,
			scale: 2,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4], //Changelog: Added Mountain tile, it makes sense and it need to diff itself with others stun.	
	},
	sableye: {
		id: 16,
		key: 'sableye',
		name: ['sableye', 'sableye', 'Ténéfix', 'sableye', 'sableye', 'zobiris', 'ヤミラミ', '깜까미', '勾魂眼', 'sableye'],
		color: '#8e67bf',
		ability: abilityData['curse'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sableye.png',
			image: './src/assets/images/pokemon/normal/sableye-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1800,
			scale: -10 
		},
		power: {
			base: 15,
			scale: 1.25, 
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],	
	},
	drudiggon: {
		id: 17,
		key: 'drudiggon',
		name: ['Druddigon', 'Druddigon', 'Drakkarmin', 'Druddigon', 'Druddigon', 'shardrago', 'クリムガン', '크리만', '龍頭地鼠', 'Druddigon'],
		color: '#a42530',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/drudiggon.png',
			image: './src/assets/images/pokemon/normal/drudiggon-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -10
		},
		power: {
			base: 2,
			scale: 9,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 1.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	meowth: {
		id: 18,
		key: 'meowth',
		name: ['meowth', 'meowth', 'Miaouss', 'meowth', 'meowth', 'mauzi', 'ニャース', '나옹', '喵喵', 'meowth'],
		color: '#d6bd62',
		ability: abilityData['greed'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/meowth.png',
			image: './src/assets/images/pokemon/normal/meowth-idle.png',
			frames: 4,
			hold: 10
		},
		speed: {
			base: 1700,
			scale: -5
		},
		power: {
			base: 18,
			scale: 1.4,
		},
		critical: {
			base: 10,
			scale: 0.3
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'persian',
			level: 28
		},	
	},
	persian: {
		id: 18,
		key: 'persian',
		name: ['persian', 'persian', 'Persian', 'persian', 'persian', 'snobilikat', 'ペルシアン', '페르시온', '貓老大', 'persian'],
		color: '#fff79d',
		ability: abilityData['greed'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/persian.png',
			image: './src/assets/images/pokemon/normal/persian-idle.png',
			frames: 1,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -10
		},
		power: {
			base: 35,
			scale: 2.7,
		},
		critical: {
			base: 25,
			scale: 0.5
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],	
	},
	sunkern: {
		id: 19,
		key: 'sunkern',
		name: ['sunkern', 'sunkern', 'Tournegrin', 'sunkern', 'sunkern', 'sonnkern', 'ヒマナッツ', '해너츠', '向日種子', 'sunkern'],
		color: '#fff700',
		ability: abilityData['powerAura'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sunkern.png',
			image: './src/assets/images/pokemon/normal/sunkern-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'sunflora',
			level: 25,
		},	
	},
	sunflora: {
		id: 19,
		key: 'sunflora',
		name: ['sunflora', 'sunflora', 'Héliatronc', 'sunflora', 'sunflora', 'sonnflora', 'キマワリ', '해루미', '向日花怪', 'sunflora'],
		color: '#dfb700',
		ability: abilityData['powerAura'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sunflora.png',
			image: './src/assets/images/pokemon/normal/sunflora-idle.png',
			frames: 16,
			hold: 4
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.7,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'mid',
		tiles: [1, 2],
	},
	tangela: {
		id: 20,
		key: 'tangela',
		name: ['tangela', 'tangela', 'Saquedeneu', 'tangela', 'tangela', 'tangela', 'モンジャラ', '덩쿠리', '猜藤', 'tangela'],
		color: '#6285ac',
		ability: abilityData['slow'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/tangela.png',
			image: './src/assets/images/pokemon/normal/tangela-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1850,
			scale: -2
		},
		power: {
			base: 16,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'tangrowth',
			level: 36,
		},	
	},
	tangrowth: {
		id: 20,
		key: 'tangrowth',
		name: ['tangrowth', 'tangrowth', 'Bouldeneu', 'tangrowth', 'tangrowth', 'tangoloss', 'モジャンボ', '덩쿠림보', '叢林藤王', 'tangrowth'],
		color: '#679fef',
		ability: abilityData['slow'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/tangrowth.png',
			image: './src/assets/images/pokemon/normal/tangrowth-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1750,
			scale: -2
		},
		power: {
			base: 100,
			scale: 9.1,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	chikorita: {
		id: 21,
		key: 'chikorita',
		name: ['chikorita', 'chikorita', 'Germignon', 'chikorita', 'chikorita', 'endivie', 'チコリータ', '치코리타', '菊草葉', 'chikorita'],
		color: '#d7efa6',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/chikorita.png',
			image: './src/assets/images/pokemon/normal/chikorita-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -2
		},
		power: {
			base: 14,
			scale: 2.1,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'bayleef',
			level: 16,
		},	
	},
	bayleef: {
		id: 21,
		key: 'bayleef',
		name: ['bayleef', 'bayleef', 'Macronium', 'bayleef', 'bayleef', 'lorblatt', 'ベイリーフ', '베이리프', '月桂葉', 'bayleef'],
		color: '#fff700',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/bayleef.png',
			image: './src/assets/images/pokemon/normal/bayleef-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2300,
			scale: -3
		},
		power: {
			base: 40,
			scale: 5,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'meganium',
			level: 32,
		},	
	},
	meganium: {
		id: 21,
		key: 'meganium',
		name: ['meganium', 'meganium', 'Méganium', 'meganium', 'meganium', 'meganie', 'メガニウム', '메가니움', '大菊花', 'meganium'],
		color: '#d7efa7',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/meganium.png',
			image: './src/assets/images/pokemon/normal/meganium-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -3
		},
		power: {
			base: 90,
			scale: 8.4,
		},
		critical: {
			base: 4,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	hoppip: {
		id: 22,
		key: 'hoppip',
		name: ['hoppip', 'hoppip', 'Granivol', 'hoppip', 'hoppip', 'hoppspross', 'ハネッコ', '두코', '風鈴鈴', 'hoppip'],
		color: '#e73f67',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/hoppip.png',
			image: './src/assets/images/pokemon/normal/hoppip-idle.png',
			frames: 15,
			hold: 5
		},
		speed: {
			base: 900,
			scale: -1
		},
		power: {
			base: 15,
			scale: 1.3,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'skiploom',
			level: 18,
		},	
	},
	skiploom: {
		id: 22,
		key: 'skiploom',
		name: ['skiploom', 'skiploom', 'Floravol', 'skiploom', 'skiploom', 'hubelupf', 'ポポッコ', '두코리', '風鈴奈', 'skiploom'],
		color: '#5fb627',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/skiploom.png',
			image: './src/assets/images/pokemon/normal/skiploom-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 800,
			scale: -1
		},
		power: {
			base: 20,
			scale: 1.5,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'jumpluff',
			level: 27,
		},	
	},
	jumpluff: {
		id: 22,
		key: 'jumpluff',
		name: ['jumpluff', 'jumpluff', 'Cotovol', 'jumpluff', 'jumpluff', 'papungha', 'ワタッコ', '솜솜코', '風鈴花', 'jumpluff'],
		color: '#4f9ed6',
		ability: abilityData['ambusher'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/jumpluff.png',
			image: './src/assets/images/pokemon/normal/jumpluff-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 600,
			scale: -1
		},
		power: {
			base: 60,
			scale: 2.2,
		},
		critical: {
			base: 8,
			scale: 0.1
		},
		range: {
			base: 170,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	cottonee: {
		id: 23,
		key: 'cottonee',
		name: ['cottonee', 'cottonee', 'Doudouvet', 'cottonee', 'cottonee', 'waumboll', 'モンメン', '소미안', '棉花怪', 'cottonee'],
		color: '#bee293',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cottonee.png',
			image: './src/assets/images/pokemon/normal/cottonee-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1270,
			scale: -5
		},
		power: {
			base: 11,
			scale: 1,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 125,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'whimsicott',
			level: 28,
		},	
	},
	whimsicott: {
		id: 23,
		key: 'whimsicott',
		name: ['whimsicott', 'whimsicott', 'Farfaduvet', 'whimsicott', 'whimsicott', 'elfun', 'エルフーン', '엘풍', '風妖精', 'whimsicott'],
		color: '#b7d667',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/whimsicott.png',
			image: './src/assets/images/pokemon/normal/whimsicott-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 1200, //Changelog: 1190->1200
			scale: -4.5 //Changelog: -6->-4.5
		},
		power: {
			base: 25,
			scale: 2,
		},
		critical: {
			base: 0, //Changelog: 2->0
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 4], //Changelog: Make it able to go on Mountain tiles to make it a good terrain availability mon
	},
	petilil: {
		id: 24,
		key: 'petilil',
		name: ['petilil', 'petilil', 'Chlorobule', 'petilil', 'petilil', 'lilminip', 'チュリネ', '치릴리', '小肥花', 'petilil'],
		color: '#aed162',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/petilil.png',
			image: './src/assets/images/pokemon/normal/petilil-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -2
		},
		power: {
			base: 12,
			scale: 2,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.5,
			inner: 100,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'lilligant',
			level: 28,
		},	
	},
	lilligant: {
		id: 24,
		key: 'lilligant',
		name: ['lilligant', 'lilligant', 'Fragilady', 'lilligant', 'lilligant', 'dressella', 'ドレディア', '드레디어', '美麗花', 'lilligant'],
		color: '#fe6b39',
		ability: abilityData['tripleShot'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lilligant.png',
			image: './src/assets/images/pokemon/normal/lilligant-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -3
		},
		power: {
			base: 55,
			scale: 6,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 150,
			scale: 1,
			inner: 100,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	spinarak: {
		id: 25,
		key: 'spinarak',
		name: ['spinarak', 'spinarak', 'Mimigal', 'spinarak', 'spinarak', 'webarak', 'イトマル', '페이검', '小蜘蛛', 'spinarak'],
		color: '#9fce6f',
		ability: abilityData['poison'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/spinarak.png',
			image: './src/assets/images/pokemon/normal/spinarak-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1900,
			scale: -1
		},
		power: {
			base: 9,
			scale: 1.5,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'ariados',
			level: 22,
		},	
	},
	ariados: {
		id: 25,
		key: 'ariados',
		name: ['ariados', 'ariados', 'Migalos', 'ariados', 'ariados', 'ariados', 'アリアドス', '아리아도스', '阿利多斯', 'ariados'],
		color: '#d73f01',
		ability: abilityData['poison'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ariados.png',
			image: './src/assets/images/pokemon/normal/ariados-idle.png',
			frames: 10,
			hold: 7
		},
		speed: {
			base: 1150,
			scale: -4
		},
		power: {
			base: 13,
			scale: 3, //Changelog: 2.7->3
		},
		critical: {
			base: 10,
			scale: 0 //Changelog: 0.2->0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	maractus: {
		id: 26,
		key: 'maractus',
		name: ['maractus', 'maractus', 'Maracachi', 'maractus', 'maractus', 'maracamba', 'マラカッチ', '마라카치', '鬥蓮草', 'maractus'],
		color: '#5ff051',
		ability: abilityData['ambusher'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/maractus.png',
			image: './src/assets/images/pokemon/normal/maractus-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 3450,
			scale: -19.5 //Changelog:-21->-19.5
		},
		power: {
			base: 6,  
			scale: 2.64, //Changelog: 2.9->2.64 
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0.3, //Changelog : 0.5->0.3
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2],
	},
	shroomish: {
		id: 27,
		key: 'shroomish',
		name: ['shroomish', 'shroomish', 'Balignon', 'shroomish', 'shroomish', 'knilz', 'キノココ', '버섯꼬', '小菇菇', 'shroomish'],
		color: '#fee79f',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/shroomish.png',
			image: './src/assets/images/pokemon/normal/shroomish-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1930,
			scale: -2
		},
		power: {
			base: 12,
			scale: 5,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'breloom',
			level: 23
		},	
	},
	breloom: {
		id: 27,
		key: 'breloom',
		name: ['breloom', 'breloom', 'Chapignon', 'breloom', 'breloom', 'kapilz', 'キノガッサ', '버섯모', '蘑菇拳師', 'breloom'],
		color: '#8fff67',
		ability: abilityData['heal'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/breloom.png',
			image: './src/assets/images/pokemon/normal/breloom-idle.png',
			frames: 12,
			hold: 15
		},
		speed: {
			base: 1850,
			scale: -3
		},
		power: {
			base: 55,
			scale: 8,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	barboach: {
		id: 28,
		key: 'barboach',
		name: ['barboach', 'barboach', 'Barloche', 'barboach', 'barboach', 'schmerbe', 'ドジョッチ', '미꾸리', '泥魚子', 'barboach'],
		color: '#1f9ee7',
		ability: abilityData['slow'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/barboach.png',
			image: './src/assets/images/pokemon/normal/barboach-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -2
		},
		power: {
			base: 27,
			scale: 3.1,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		evolution: {
			pokemon: 'whiscash',
			level: 30
		},	
	},
	whiscash: {
		id: 28,
		key: 'whiscash',
		name: ['whiscash', 'whiscash', 'Barbicha', 'whiscash', 'whiscash', 'welsar', 'ナマズン', '메깅', '泥巴魚', 'whiscash'],
		color: '#4f5f97',
		ability: abilityData['slowSplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/whiscash.png',
			image: './src/assets/images/pokemon/normal/whiscash-idle.png',
			frames: 10,
			hold: 5
		},
		speed: {
			base: 2800,
			scale: -4
		},
		power: {
			base: 53,
			scale: 5,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 280,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
	},
	clauncher: {
		id: 29,
		key: 'clauncher',
		name: ['clauncher', 'clauncher', 'Flingouste', 'clauncher', 'clauncher', 'scampisto', 'ウデッポウ', '완철포', '砲嘴巴', 'clauncher'],
		color: '#81e1ff',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/clauncher.png',
			image: './src/assets/images/pokemon/normal/clauncher-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 6000,
			scale: 0
		},
		power: {
			base: 50,
			scale: 25,
		},
		critical: {
			base: 50, //Changelog: 25->50
			scale: 0
		},
		range: {
			base: 265,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3],
		evolution: {
			pokemon: 'clawitzer',
			level: 37
		},	
	},
	clawitzer: {
		id: 29,
		key: 'clawitzer',
		name: ['clawitzer', 'clawitzer', 'Gamblast', 'clawitzer', 'clawitzer', 'wummer', 'ブロスター', '블로스터', '砲爪龍蝦', 'clawitzer'],
		color: '#4090f9',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/clawitzer.png',
			image: './src/assets/images/pokemon/normal/clawitzer-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 6000,
			scale: 0
		},
		power: {
			base: 100,
			scale: 50,
		},
		critical: {
			base: 85, //Changelog: 50->85
			scale: 0
		},
		range: {
			base: 300,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3],
	},
	remoraid: {
		id: 30,
		key: 'remoraid',
		name: ['remoraid', 'remoraid', 'Rémoraid', 'remoraid', 'remoraid', 'remoraid', 'テッポウオ', '총어', '小小海', 'remoraid'],
		color: '#afb7bf',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/remoraid.png',
			image: './src/assets/images/pokemon/normal/remoraid-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 3600,
			scale: -1
		},
		power: {
			base: 23,
			scale: 2.6,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 280,
			scale: 1,
			inner: 200,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		evolution: {
			pokemon: 'octillery',
			level: 25
		},	
	},
	octillery: {
		id: 30,
		key: 'octillery',
		name: ['octillery', 'octillery', 'Octillery', 'octillery', 'octillery', 'octillery', 'オクタン', '대포무노', '大力海獅', 'octillery'],
		color: '#fe875e',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 10,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/octillery.png',
			image: './src/assets/images/pokemon/normal/octillery-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 3100,
			scale: -6
		},
		power: {
			base: 150,
			scale: 7.1
		},
		critical: {
			base: 5,
			scale: 0.3
		},
		range: {
			base: 280,
			scale: 2,
			inner: 200,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
	},
	oshawott: {
		id: 31,
		key: 'oshawott',
		name: ['oshawott', 'oshawott', 'Moustillon', 'oshawott', 'oshawott', 'ottaro', 'ミジュマル', '수댕이', '水水獺', 'oshawott'],
		color: '#70d8f0',
		ability: abilityData['focus'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/oshawott.png',
			image: './src/assets/images/pokemon/normal/oshawott-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -1
		},
		power: {
			base: 12,
			scale: 2.5,
		},
		critical: {
			base: 1.5,
			scale: 0.1
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'dewott',
			level: 17,
		},	
	},
	dewott: {
		id: 31,
		key: 'dewott',
		name: ['dewott', 'dewott', 'Mateloutre', 'dewott', 'dewott', 'zwottronin', 'フタチマル', '쌍검자비', '洗澡獺', 'dewott'],
		color: '#84d6ee',
		ability: abilityData['focus'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dewott.png',
			image: './src/assets/images/pokemon/normal/dewott-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: -1
		},
		power: {
			base: 20,
			scale: 2.7,
		},
		critical: {
			base: 2,
			scale: 0.2
		},
		range: {
			base: 130,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'samurott',
			level: 36,
		},	
	},
	samurott: {
		id: 31,
		key: 'samurott',
		name: ['samurott', 'samurott', 'Clamiral', 'samurott', 'samurott', 'admurai', 'ダイケンキ', '대검귀', '武裝獺', 'samurott'],
		color: '#20adbc',
		ability: abilityData['focus'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/samurott.png',
			image: './src/assets/images/pokemon/normal/samurott-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 840,
			scale: -3
		},
		power: {
			base: 80,
			scale: 4.5,
		},
		critical: {
			base: 3,
			scale: 0.3
		},
		range: {
			base: 140,
			scale: 0.15,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	staryu: {
		id: 32,
		key: 'staryu',
		name: ['staryu', 'staryu', 'Stari', 'staryu', 'staryu', 'sterndu', 'ヒトデマン', '별가사리', '海星星', 'staryu'],
		color: '#de7318',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/staryu.png',
			image: './src/assets/images/pokemon/normal/staryu-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 800,
			scale: -2
		},
		power: {
			base: 13,
			scale: 1,
		},
		critical: {
			base: 55, //Changelog: 5->55
			scale: 0
		},
		range: {
			base: 185, //Changelog: 165->185
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'starmie',
			level: 33,
		},	
	},
	starmie: {
		id: 32,
		key: 'starmie',
		name: ['starmie', 'starmie', 'Staross', 'starmie', 'starmie', 'starmie', 'スターミー', '아쿠스타', '宝石海星', 'starmie'],
		color: '#8d62bd',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/starmie.png',
			image: './src/assets/images/pokemon/normal/starmie-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 700,
			scale: -2
		},
		power: {
			base: 55,
			scale: 3,
		},
		critical: {
			base: 55, //Changelog: 10->55
			scale: 0
		},
		range: {
			base: 220, //Changelog: 200->220
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	lapras: {
		id: 33,
		key: 'lapras',
		name: ['lapras', 'lapras', 'Lokhlass', 'lapras', 'lapras', 'lapras', 'ラプラス', '라프라스', '拉普拉斯', 'lapras'],
		color: '#7acfff',
		ability: abilityData['stunArea'],
		projectileSound: 'area3',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lapras.png',
			image: './src/assets/images/pokemon/normal/lapras-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3450, //Changelog: 6300->3450
			scale: -6.5 
		},
		power: {
			base: 10,
			scale: 3.4, //Changelog: 6.6->3.4 
		},
		critical: {
			base: 0, //Changelog: 3->0 (universal AoE removal of crit)
			scale: 0
		},
		range: {
			base: 130, //Changelog: 150->130
			scale: 0.5,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [3], //Changelog: removed field tile from his possibility
	},
	seel: {
		id: 34,
		key: 'seel',
		name: ['seel', 'seel', 'Otaria', 'seel', 'seel', 'jurob', 'パウワウ', '쥬쥬', '小海獅', 'seel'],
		color: '#d7dfde',
		ability: abilityData['stunMono'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/seel.png',
			image: './src/assets/images/pokemon/normal/seel-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1550,
			scale: -1
		},
		power: {
			base: 15,
			scale: 5,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 260,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 3],
		evolution: {
			pokemon: 'dewgong',
			level: 34,
		},	
	},
	dewgong: {
		id: 34,
		key: 'dewgong',
		name: ['dewgong', 'dewgong', 'Lamantine', 'dewgong', 'dewgong', 'jugong', 'ジュゴン', '쥬레곤', '白海獅', 'dewgong'],
		color: '#adb4bd',
		ability: abilityData['stunMono'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dewgong.png',
			image: './src/assets/images/pokemon/normal/dewgong-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1350,
			scale: -2
		},
		power: {
			base: 60,
			scale: 7.5,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 400,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 3],
	},
	psyduck: {
		id: 35,
		key: 'psyduck',
		name: ['psyduck', 'psyduck', 'Psykokwak', 'psyduck', 'psyduck', 'enton', 'コダック', '고라파덕', '可達鴨', 'psyduck'],
		color: '#dfb501',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/psyduck.png',
			image: './src/assets/images/pokemon/normal/psyduck-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1850,
			scale: -2
		},
		power: {
			base: 14,
			scale: 2,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'golduck',
			level: 33,
		},	
	},
	golduck: {
		id: 35,
		key: 'golduck',
		name: ['golduck', 'golduck', 'Akwakwak', 'golduck', 'golduck', 'entoron', 'ゴルダック', '골덕', '哥達鴨', 'golduck'],
		color: '#199de7',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/golduck.png',
			image: './src/assets/images/pokemon/normal/golduck-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1350,
			scale: -5
		},
		power: {
			base: 42,
			scale: 3.6,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 155,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	murkrow: {
		id: 36,
		key: 'murkrow',
		name: ['murkrow', 'murkrow', 'Cornèbre', 'murkrow', 'murkrow', 'kramurx', 'ヤミカラス', '니로우', '長翅鴉', 'murkrow'],
		color: '#deb600',
		ability: abilityData['frisk'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/murkrow.png',
			image: './src/assets/images/pokemon/normal/murkrow-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 950,
			scale: -1
		},
		power: {
			base: 10,
			scale: 2.5,
		},
		critical: {
			base: 5,
			scale: 0.2
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'honchkrow',
			level: 40,
		},	
	},
	honchkrow: {
		id: 36,
		key: 'honchkrow',
		name: ['honchkrow', 'honchkrow', 'Corboss', 'honchkrow', 'honchkrow', 'kramshef', 'ドンカラス', '돈크로우', '烏鴉頭領', 'honchkrow'],
		color: '#d7d7de',
		ability: abilityData['frisk'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/honchkrow.png',
			image: './src/assets/images/pokemon/normal/honchkrow-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 890,
			scale: -2
		},
		power: {
			base: 35,
			scale: 3.3,
		},
		critical: {
			base: 10,
			scale: 0.2
		},
		range: {
			base: 190,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	sandshrew: {
		id: 37,
		key: 'sandshrew',
		name: ['sandshrew', 'sandshrew', 'Sabelette', 'sandshrew', 'sandshrew', 'sandan', 'サンド', '모래두지', '穿山鼠', 'sandshrew'],
		color: '#dfb500',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sandshrew.png',
			image: './src/assets/images/pokemon/normal/sandshrew-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1550,
			scale: -1
		},
		power: {
			base: 8,
			scale: 4,
		},
		critical: {
			base: 15,
			scale: 0.1
		},
		range: {
			base: 105,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'sandslash',
			level: 22,
		},	
	},
	sandslash: {
		id: 37,
		key: 'sandslash',
		name: ['sandslash', 'sandslash', 'Sablaireau', 'sandslash', 'sandslash', 'sandamer', 'サンドパン', '고지', '穿山王', 'sandslash'],
		color: '#de7318',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sandslash.png',
			image: './src/assets/images/pokemon/normal/sandslash-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1000, //Changelog: 1050->1000
			scale: -1.5 //Changelog: -1->-1.5
		},
		power: {
			base: 25, //Changelog: 30->25
			scale: 6, //Changelog: 5.7->6
		},
		critical: {
			base: 20, //Changelog: 15->20
			scale: 0.3 
		},
		range: {
			base: 120, //Changelog: 115->120
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
	},
	trapinch: {
		id: 38,
		key: 'trapinch',
		name: ['trapinch', 'trapinch', 'Kraknoix', 'trapinch', 'trapinch', 'knacklion', 'ナックラー', '톱치', '圈圈蟲', 'trapinch'],
		color: '#ff9746',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/trapinch.png',
			image: './src/assets/images/pokemon/normal/trapinch-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -1
		},
		power: {
			base: 12,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 90,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'vibrava',
			level: 35,
		},	
	},
	vibrava: {
		id: 38,
		key: 'vibrava',
		name: ['vibrava', 'vibrava', 'Vibraninf', 'vibrava', 'vibrava', 'vibrava', 'ビブラーバ', '비브라바', '沙漠蜻蜓', 'vibrava'],
		color: '#deb700',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/vibrava.png',
			image: './src/assets/images/pokemon/normal/vibrava-idle.png',
			frames: 9,
			hold: 11
		},
		speed: {
			base: 1700,
			scale: -1
		},
		power: {
			base: 50,
			scale: 3.6,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'flygon',
			level: 45,
		},	
	},
	flygon: {
		id: 38,
		key: 'flygon',
		name: ['flygon', 'flygon', 'Libégon', 'flygon', 'flygon', 'libelldra', 'フライゴン', '플라이곤', '翔龍', 'flygon'],
		color: '#5fb726',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/flygon.png',
			image: './src/assets/images/pokemon/normal/flygon-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 1320,
			scale: -3.2
		},
		power: {
			base: 55,
			scale: 7,
		},
		critical: {
			base: 0,
			scale: 0.3
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	noibat: {
		id: 39,
		key: 'noibat',
		name: ['noibat', 'noibat', 'Sonistrelle', 'noibat', 'noibat', 'em', 'オンバット', '음뱃', '吼吶蝠', 'noibat'],
		color: '#863f86',
		ability: abilityData['focus'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/noibat.png',
			image: './src/assets/images/pokemon/normal/noibat-idle.png',
			frames: 10,
			hold: 7
		},
		speed: {
			base: 1850,
			scale: 0
		},
		power: {
			base: 14,
			scale: 3,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 300,
			scale: 0.5,
			inner: 200,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'noivern',
			level: 48
		},	
	},
	noivern: {
		id: 39,
		key: 'noivern',
		name: ['noivern', 'noivern', 'Bruyverne', 'noivern', 'noivern', 'uhafnir', 'オンバーン', '음번', '吼吶王', 'noivern'],
		color: '#6cc5bb',
		ability: abilityData['focus'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['purple5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/noivern.png',
			image: './src/assets/images/pokemon/normal/noivern-idle.png',
			frames: 8,
			hold: 12
		},
		speed: {
			base: 1600,
			scale: -1.8
		},
		power: {
			base: 60,
			scale: 11.5,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 300,
			scale: 1,
			inner: 200,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	sneasel: {
		id: 40,
		key: 'sneasel',
		name: ['sneasel', 'sneasel', 'Farfuret', 'sneasel', 'sneasel', 'sniebel', 'ニューラ', '포푸니', '黑眼貂', 'sneasel'],
		color: '#4f5f96',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sneasel.png',
			image: './src/assets/images/pokemon/normal/sneasel-idle.png',
			frames: 7,
			hold: 13
		},
		speed: {
			base: 900,
			scale: -3
		},
		power: {
			base: 7,
			scale: 1.8,
		},
		critical: {
			base: 5,
			scale: 0.5
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'weavile',
			level: 25
		},	
	},
	weavile: {
		id: 40,
		key: 'weavile',
		name: ['weavile', 'weavile', 'Dimoret', 'weavile', 'weavile', 'snibunna', 'マニューラ', '포푸니라', '瑪狃拉', 'weavile'],
		color: '#d73f01',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/weavile.png',
			image: './src/assets/images/pokemon/normal/weavile-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 700,
			scale: -3
		},
		power: {
			base: 25,
			scale: 4,
		},
		critical: {
			base: 5,
			scale: 0.8
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	drilbur: {
		id: 41,
		key: 'drilbur',
		name: ['drilbur', 'drilbur', 'Rototaupe', 'drilbur', 'drilbur', 'rotomurf', 'モグリュー', '두더류', '掘地鼠', 'drilbur'],
		color: '#8d7b6d',
		ability: abilityData['armorBreak'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/drilbur.png',
			image: './src/assets/images/pokemon/normal/drilbur-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 2600,
			scale: -2
		},
		power: {
			base: 8,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'excadrill',
			level: 31
		},	
	},
	excadrill: {
		id: 41,
		key: 'excadrill',
		name: ['excadrill', 'excadrill', 'Minotaupe', 'excadrill', 'excadrill', 'stalobor', 'ドリュウズ', '몰드류', '長鼻鐵', 'excadrill'],
		color: '#bc4342',
		ability: abilityData['armorBreak'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/excadrill.png',
			image: './src/assets/images/pokemon/normal/excadrill-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: -4 //Changelog: -6->-4
		},
		power: {
			base: 20,
			scale: 0.95, //Changelog: 1.6->0.95
		},
		critical: {
			base: 5, 
			scale: 0.15 //Changelog: 0.1->0.15
		},
		range: {
			base: 120, //Changelog: 130->120
			scale: 0.2, //Changelog: 0->0.2
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
	},
	shuckle: {
		id: 42,
		key: 'shuckle',
		name: ['shuckle', 'shuckle', 'Caratroc', 'shuckle', 'shuckle', 'pottrott', 'ツボツボ', '단단지', '盾甲蛹', 'shuckle'],
		color: '#d73f00',
		ability: abilityData['slow'],
		projectileSound: 'area2',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/shuckle.png',
			image: './src/assets/images/pokemon/normal/shuckle-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 7000,
			scale: -50
		},
		power: {
			base: 40, //Changelog: 50->40 (A nerf of his damage overall, was the best slow of the game and still did 2/3 of the damage of a AoE DPS, was just too insane)
			scale: 0.1, //Changelog: 1->0.1 ( ~ ~ ~ )
		},
		critical: {
			base: 0, //Changelog: 1->0 (universal AoE removal of crit)
			scale: 0
		},
		range: {
			base: 120, //Changelog: 140->120 (Making that leveling shuckle as a purpose, before that change a level 1 shuckle and a level 100 was basically the same)
			scale: 0.2, //Changelog: 0->0.2 ( ~ ~ ~ )
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
	},
	hawlucha: {
		id: 43,
		key: 'hawlucha',
		name: ['hawlucha', 'hawlucha', 'Brutalibré', 'hawlucha', 'hawlucha', 'resladero', 'ルチャブル', '루차불', '鬥雞鷹', 'hawlucha'],
		color: '#01bd93',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/hawlucha.png',
			image: './src/assets/images/pokemon/normal/hawlucha-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1600, //Changelog: 1630->1600
			scale: -8.5 //Changelog: -8->-8.5
		},
		power: {
			base: 25, //Changelog: 12->25
			scale: 6, //Changelog: 6.3->6
		},
		critical: {
			base: 30, //Changelog: 5->30
			scale: 0
		},
		range: {
			base: 135,
			scale: 1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	aron: {
		id: 44,
		key: 'aron',
		name: ['aron', 'aron', 'Galekid', 'aron', 'aron', 'stollunior', 'ココドラ', '가보리', '可撓鋼', 'aron'],
		color: '#afb6bf',
		ability: abilityData['vigilant'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/aron.png',
			image: './src/assets/images/pokemon/normal/aron-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1500, //Changelog: 2500-> 1500
			scale: 0.1 //Changelog: 0->0.1
		},
		power: {
			base: 14,
			scale: 0.5, //Changelog: 0.7->0.5
		},
		critical: {
			base: 0, //Changelog: 3->0 (universal AoE removal crit)
			scale: 0
		},
		range: {
			base: 110, //Changelog: 90->110
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'lairon',
			level: 32,
		},	
	},
	lairon: {
		id: 44,
		key: 'lairon',
		name: ['lairon', 'lairon', 'Galegon', 'lairon', 'lairon', 'stollrak', 'コドラ', '갱도라', '可拉鋼', 'lairon'],
		color: '#7f8e97',
		ability: abilityData['vigilant'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lairon.png',
			image: './src/assets/images/pokemon/normal/lairon-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1400, //Changelog: 2400->1400
			scale: 0.1 //Changelog: 0->0.1
		},
		power: {
			base: 18,
			scale: 1.2, //Changelog: 1.7->1.2
		},
		critical: {
			base: 0, //Changelog: 4->0 (universal AoE removal crit)
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.1, //Changelog: 0->0.1
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'aggron',
			level: 42,
		},	
	},
	aggron: {
		id: 44,
		key: 'aggron',
		name: ['aggron', 'aggron', 'Galeking', 'aggron', 'aggron', 'stolloss', 'ボスゴドラ', '보스로라', '銀甲怪', 'aggron'],
		color: '#c7cfd2',
		ability: abilityData['vigilant'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/aggron.png',
			image: './src/assets/images/pokemon/normal/aggron-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1200, //Changelog: 2250->1200
			scale: 2  //Changelog: 0->2
		},
		power: {
			base: 35,
			scale: 2.17, //Changelog: 3.3->2.17
		},
		critical: {
			base: 0, //Changelog: 5->0 (universal AoE removal crit)
			scale: 0
		},
		range: {
			base: 120, //Changelog: 145->120
			scale: 0.2, //Changelog: 0->0.2
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
	},
	cubone: {
		id: 45,
		key: 'cubone',
		name: ['cubone', 'cubone', 'Osselait', 'cubone', 'cubone', 'tragosso', 'カラカラ', '탕구리', '卡拉卡拉', 'cubone'],
		color: '#ac6218',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 2,
		projectile: projectileData['yellow5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cubone.png',
			image: './src/assets/images/pokemon/normal/cubone-idle.png',
			frames: 6,
			hold: 13
		},
		speed: {
			base: 2700,
			scale: -1
		},
		power: {
			base: 18,
			scale: 4,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 270,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'marowak',
			level: 28,
		},	
	},
	marowak: {
		id: 45,
		key: 'marowak',
		name: ['marowak', 'marowak', 'Ossatueur', 'marowak', 'marowak', 'knogga', 'ガラガラ', '텅구리', '嘎拉嘎拉', 'marowak'],
		color: '#de7319',
		ability: abilityData['ninja'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		ricochet: 4,
		projectile: projectileData['yellow5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/marowak.png',
			image: './src/assets/images/pokemon/normal/marowak-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2700,
			scale: -11
		},
		power: {
			base: 60,
			scale: 6.7,
		},
		critical: {
			base: 15,
			scale: 0.6
		},
		range: {
			base: 350,
			scale: 0,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	pidgey: {
		id: 46,
		key: 'pidgey',
		name: ['pidgey', 'pidgey', 'Roucool', 'pidgey', 'pidgey', 'taubsi', 'ポッポ', '구구', '波波', 'pidgey'],
		color: '#e63963',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pidgey.png',
			image: './src/assets/images/pokemon/normal/pidgey-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1250,
			scale: -1
		},
		power: {
			base: 9,
			scale: 2,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 125,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'pidgeotto',
			level: 18,
		},	
	},
	pidgeotto: {
		id: 46,
		key: 'pidgeotto',
		name: ['pidgeotto', 'pidgeotto', 'Roucoups', 'pidgeotto', 'pidgeotto', 'tauboga', 'ピジョン', '피죤', '比比鳥', 'pidgeotto'],
		color: '#fe8dad',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pidgeotto.png',
			image: './src/assets/images/pokemon/normal/pidgeotto-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: -1
		},
		power: {
			base: 28,
			scale: 2.1,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'pidgeot',
			level: 36,
		},	
	},
	pidgeot: {
		id: 46,
		key: 'pidgeot',
		name: ['pidgeot', 'pidgeot', 'Roucarnage', 'pidgeot', 'pidgeot', 'tauboss', 'ピジョット', '피죤투', '大比鳥', 'pidgeot'],
		color: '#fe9542',
		ability: abilityData['vigilant'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pidgeot.png',
			image: './src/assets/images/pokemon/normal/pidgeot-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -4 //Changelog: -3->-4
		},
		power: {
			base: 60,
			scale: 4, //Changelog: 3.8->4
		},
		critical: {
			base: 5,
			scale: 0.15 //Changelog: 0.2->0.15
		},
		range: {
			base: 180,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
	},
	binacle: {
		id: 47,
		key: 'binacle',
		name: ['binacle', 'binacle', 'Opermine', 'binacle', 'binacle', 'bithora', 'カメテテ', '거북손손', '雙殼盔', 'binacle'],
		color: '#9b7547',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/binacle.png',
			image: './src/assets/images/pokemon/normal/binacle-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 2400,
			scale: -4
		},
		power: {
			base: 13,
			scale: 3, //Changelog: 2.8->3
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120, //Changelog: 110->120
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
		evolution: {
			pokemon: 'barbaracle',
			level: 39,
		},	
	},
	barbaracle: {
		id: 47,
		key: 'barbaracle',
		name: ['barbaracle', 'barbaracle', 'Golgopathe', 'barbaracle', 'barbaracle', 'thanathora', 'ガメノデス', '거북손데스', '獨島殼王', 'barbaracle'],
		color: '#c8cbda',
		ability: abilityData['quadraShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/barbaracle.png',
			image: './src/assets/images/pokemon/normal/barbaracle-idle.png',
			frames: 10,
			hold: 7
		},
		speed: {
			base: 2300,
			scale: -5.7 
		},
		power: {
			base: 20,
			scale: 4.4, 
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
	},
	surskit: {
		id: 48,
		key: 'surskit',
		name: ['surskit', 'surskit', 'Arakdo', 'surskit', 'surskit', 'gehweiher', 'アメタマ', '비구술', '水蛛', 'surskit'],
		color: '#1e9ee7',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/surskit.png',
			image: './src/assets/images/pokemon/normal/surskit-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -5
		},
		power: {
			base: 12,
			scale: 1,
		},
		critical: {
			base: 4, //Changelog: 3->4
			scale: 0.1 //Changelog: 0->0.1
		},
		range: {
			base: 135, //Changelog: 115->135
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 3], //Changelog: Same as Masquerain
		evolution: {
			pokemon: 'masquerain',
			level: 22,
		},	
	},
	masquerain: {
		id: 48,
		key: 'masquerain',
		name: ['masquerain', 'masquerain', 'Maskadra', 'masquerain', 'masquerain', 'maskeregen', 'アメモース', '비나방', '虛擬蝶', 'masquerain'],
		color: '#ff875f',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/masquerain.png',
			image: './src/assets/images/pokemon/normal/masquerain-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -5 
		},
		power: {
			base: 35,
			scale: 2.4, 
		},
		critical: {
			base: 8,
			scale: 0.1 
		},
		range: {
			base: 170,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 3], 
	},
	ferroseed: {
		id: 49,
		key: 'ferroseed',
		name: ['ferroseed', 'ferroseed', 'Grindur', 'ferroseed', 'ferroseed', 'kastadur', 'テッシード', '철시드', '鐵炮子', 'ferroseed'],
		color: '#5eb727',
		ability: abilityData['slow'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ferroseed.png',
			image: './src/assets/images/pokemon/normal/ferroseed-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 2800,
			scale: -2
		},
		power: {
			base: 9,
			scale: 2.2, //Changelog:
		},
		critical: {
			base: 0, //Changelog: 1->0
			scale: 0
		},
		range: {
			base: 110, //Changelog: 100->110
			scale: 0, //Changelog: 0->0.1
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'ferrothorn',
			level: 40,
		},	
	},
	ferrothorn: {
		id: 49,
		key: 'ferrothorn',
		name: ['ferrothorn', 'ferrothorn', 'Noacier', 'ferrothorn', 'ferrothorn', 'tentantel', 'ナットレイ', '너트령', '鐵刺球', 'ferrothorn'],
		color: '#208c52',
		ability: abilityData['slow'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ferrothorn.png',
			image: './src/assets/images/pokemon/normal/ferrothorn-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 2450,
			scale: -2.46 //Changelog: -2.30->-2.46 (Fix to let him perma slow with light clay)
		},
		power: {
			base: 12,
			scale: 1.63, //Changelog: 3->1.63 (nerfing his damage as an AoE)
		},
		critical: {
			base: 0, //Changelog: 2->0 (universal AoE removal of crit)
			scale: 0
		},
		range: {
			base: 140, //Changelog: 130->140 (buffing his slowness potential)
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2], //Changelog: perma slowing is a really powerfull buff and we already have a perma slow on mountain, ferrothorn diff itself by being able to go on grass anyway, so Iam nerfing his versatility a bit)
	},
	absol: {
		id: 50,
		key: 'absol',
		name: ['absol', 'absol', 'Absol', 'absol', 'absol', 'absol', 'アブソル', '앱솔', '阿勃梭魯', 'absol'],
		color: '#d7dedf',
		ability: abilityData['focus'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/absol.png',
			image: './src/assets/images/pokemon/normal/absol-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 820, //Changelog: 1270->820
			scale: -4.5 //Changelog: -9->-4.5
		},
		power: {
			base: 5,
			scale: 3.3,
		},
		critical: {
			base: 50, //Changelog: 0->50
			scale: 0.5 //Changelog: 1->0.5
		},
		range: {
			base: 130, //Changelog: 100->130
			scale: 0, //Changelog: 0.3->0
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		mega: 'megaAbsol'
	},
	megaAbsol: {
		id: 50,
		key: 'megaAbsol',
		name: ['M-absol', 'M-absol', 'M-Absol', 'M-absol', 'M-absol', 'M-absol', 'メガアブソル', '메가앱솔', '超进化阿勃梭鲁', 'M-absol'],
		color: '#d7dedf',
		ability: abilityData['focus'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaAbsol.png',
			image: './src/assets/images/pokemon/normal/megaAbsol-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 700, 
			scale: -4.5 
		},
		power: {
			base: 5,
			scale: 3.3,
		},
		critical: {
			base: 50, 
			scale: 0.5 
		},
		range: {
			base: 145, 
			scale: 0, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		base: 'absol'
	},
	// NEW
	girafarig: {
		id: 51,
		key: 'girafarig',
		name: ['girafarig', 'girafarig', 'Girafarig', 'girafarig', 'girafarig', 'girafarig', 'キリンリキ', '키링키', '長頸鹿背反', 'girafarig'],
		color: '#dfb700',
		ability: abilityData['curseDoubleShot'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/girafarig.png',
			image: './src/assets/images/pokemon/normal/girafarig-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2050,
			scale: -2
		},
		power: {
			base: 3,
			scale: 1.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0.35,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	torkoal: {
		id: 52,
		key: 'torkoal',
		name: ['torkoal', 'torkoal', 'Chartor', 'torkoal', 'torkoal', 'qurtel', 'コータス', '코터스', '煤炭龜', 'torkoal'],
		color: '#df761e',
		ability: abilityData['burnNerf'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/torkoal.png',
			image: './src/assets/images/pokemon/normal/torkoal-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 5000,
			scale: -22
		},
		power: {
			base: 7, 
			scale: 4.93, //changelog: 6.5->4.93 (nerfing his raw damage like all others AoE DPS tower but to compensate he will gain a synergie with Volcarona and also have his burn chance upgraded)
		},
		critical: {
			base: 0, //Changelog: 5->0 (universal AoE removal of crit)
			scale: 0
		},
		range: {
			base: 140, //Changelog: 160->140
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
	},
	spinda: {
		id: 53,
		key: 'spinda',
		name: ['spinda', 'spinda', 'Spinda', 'spinda', 'spinda', 'pandir', 'パッチール', '스핀다', '圓圓斑', 'spinda'],
		color: '#ff875f',
		ability: abilityData['spinda'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/spinda.png',
			image: './src/assets/images/pokemon/normal/spinda-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 200,
			scale: 0
		},
		power: {
			base: 1,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 300,
			scale: 1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
	},
	dunsparce: {
		id: 54,
		key: 'dunsparce',
		name: ['dunsparce', 'dunsparce', 'Insolourdo', 'dunsparce', 'dunsparce', 'dummisel', 'ノコッチ', '노고치', '土龍弟弟', 'dunsparce'],
		color: '#1f9fe7',
		ability: abilityData['slowSplash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dunsparce.png',
			image: './src/assets/images/pokemon/normal/dunsparce-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 2900,
			scale: -12
		},
		power: {
			base: 15,
			scale: 7,
		},
		critical: {
			base: 5,
			scale: 0.2
		},
		range: {
			base: 200,
			scale: 3,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	ralts: {
		id: 55,
		key: 'ralts',
		name: ['ralts', 'ralts', 'Tarsal', 'ralts', 'ralts', 'trasla', 'ラルトス', '랄토스', '拉魯拉絲', 'ralts'],
		color: '#5ec636',
		ability: abilityData['synchronySplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ralts.png',
			image: './src/assets/images/pokemon/normal/ralts-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -1
		},
		power: {
			base: 1,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 90,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'kirlia',
			level: 20,
		},
	},
	kirlia: {
		id: 55,
		key: 'kirlia',
		name: ['kirlia', 'kirlia', 'Kirlia', 'kirlia', 'kirlia', 'kirlia', 'キルリア', '킬리아', '奇魯莉安', 'kirlia'],
		color: '#e63f67',
		ability: abilityData['synchronySplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/kirlia.png',
			image: './src/assets/images/pokemon/normal/kirlia-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -2
		},
		power: {
			base: 10,
			scale: 3,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'gardevoir',
			level: 30,
		},
	},
	gardevoir: {
		id: 55,
		key: 'gardevoir',
		name: ['gardevoir', 'gardevoir', 'Gardevoir', 'gardevoir', 'gardevoir', 'gardevoir', 'サーナイト', '가디안', '沙奈朵', 'gardevoir'],
		color: '#8fff66',
		ability: abilityData['synchronySplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['green4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gardevoir.png',
			image: './src/assets/images/pokemon/normal/gardevoir-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -6
		},
		power: {
			base: 40,
			scale: 6.35, //Changelog: 8.6->6.35
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	koffing: {
		id: 56,
		key: 'koffing',
		name: ['koffing', 'koffing', 'Smogo', 'koffing', 'koffing', 'smogon', 'ドガース', '또가스', '臭臭泥', 'koffing'],
		color: '#b595df',
		ability: abilityData['poison'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/koffing.png',
			image: './src/assets/images/pokemon/normal/koffing-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2700,
			scale: -2
		},
		power: {
			base: 16,
			scale: 4,
		},
		critical: {
			base: 2,
			scale: 0
		},
		range: {
			base: 125,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'weezing',
			level: 35,
		},
	},
	weezing: {
		id: 56,
		key: 'weezing',
		name: ['weezing', 'weezing', 'Smogogo', 'weezing', 'weezing', 'smogmog', 'マタドガス', '또도가스', '瓦斯彈王', 'weezing'],
		color: '#ad6bb4',
		ability: abilityData['poisonDoubleShot'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/weezing.png',
			image: './src/assets/images/pokemon/normal/weezing-idle.png',
			frames: 11,
			hold: 15
		},
		speed: {
			base: 2320,
			scale: -5
		},
		power: {
			base: 50,
			scale: 8.1,
		},
		critical: {
			base: 4,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	farfetchd: {
		id: 57,
		key: 'farfetchd',
		name: ['farfetch’d', 'farfetch’d', 'Canarticho', 'farfetch’d', 'farfetch’d', 'porenta', 'カモネギ', '파오리', '大蔥鴨', 'farfetch’d'],
		color: '#ad621b',
		ability: abilityData['criticalDamageAura'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/farfetchd.png',
			image: './src/assets/images/pokemon/normal/farfetchd-idle.png',
			frames: 4,
			hold: 14
		},
		speed: {
			base: 2000,
			scale: -10
		},
		power: {
			base: 7,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0.5
		},
		range: {
			base: 110,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2, 4],
	},
	omanyte: {
		id: 58,
		key: 'omanyte',
		name: ['omanyte', 'omanyte', 'Amonita', 'omanyte', 'omanyte', 'amonitas', 'オムナイト', '암나이트', '化石盔', 'omanyte'],
		color: '#8cdffe',
		ability: abilityData['swimmer'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/omanyte.png',
			image: './src/assets/images/pokemon/normal/omanyte-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 5700,
			scale: -12 //Changelog: -10->-12
		},
		power: {
			base: 26,
			scale: 3, //Changelog: 4->3
		},
		critical: {
			base: 0, //Changelog: 5->0 (universal AoE removal of crit)
			scale: 0
		},
		range: {
			base: 130, 
			scale: 0, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 3, 4],
		evolution: {
			pokemon: 'omastar',
			level: 40,
		},
	},
	omastar: {
		id: 58,
		key: 'omastar',
		name: ['omastar', 'omastar', 'Amonistar', 'omastar', 'omastar', 'amoroso', 'オムスター', '암스타', '菊石獸', 'omastar'],
		color: '#189ce6',
		ability: abilityData['swimmer'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/omastar.png',
			image: './src/assets/images/pokemon/normal/omastar-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 4000,
			scale: -12 //Changelog : -10->-12
		},
		power: {
			base: 40, 
			scale: 4.65, //Changelog : 8.5->4.65
		},
		critical: {
			base: 0, //Changelog : 5->0 (universal AoE removal of crit)
			scale: 0
		},
		range: {
			base: 130, //Changelog : 155->130
			scale: 0.1, //Changelog: 0->0.1
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 3], //Changelog : Cannot go into mountain anymore (no one used that anyway and another AoE DPS will take that spot)
	},
	kabuto: {
		id: 59,
		key: 'kabuto',
		name: ['kabuto', 'kabuto', 'Kabuto', 'kabuto', 'kabuto', 'kabuto', 'カブト', '투구', '化石盔', 'kabuto'],
		color: '#de7318',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/kabuto.png',
			image: './src/assets/images/pokemon/normal/kabuto-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 1500,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2.5,
		},
		critical: {
			base: 5,
			scale: 0.3
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],
		evolution: {
			pokemon: 'kabutops',
			level: 40,
		},
	},
	kabutops: {
		id: 59,
		key: 'kabutops',
		name: ['kabutops', 'kabutops', 'Kabutops', 'kabutops', 'kabutops', 'kabutops', 'カブトプス', '투구푸스', '盔甲刀龍', 'kabutops'],
		color: '#a55b19',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/kabutops.png',
			image: './src/assets/images/pokemon/normal/kabutops-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100, //Changelog: 1120->1100
			scale: -4
		},
		power: {
			base: 25,
			scale: 5, //Changelog: 4.3->5
		},
		critical: {
			base: 5,
			scale: 0.6
		},
		range: {
			base: 130, //Changelog: 115->130
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],
	},
	corsola: {
		id: 60,
		key: 'corsola',
		name: ['corsola', 'corsola', 'Corayon', 'corsola', 'corsola', 'corasonn', 'サニーゴ', '코산호', '珊瑚獸', 'corsola'],
		color: '#ff8faf',
		ability: abilityData['slowSplash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/corsola.png',
			image: './src/assets/images/pokemon/normal/corsola-idle.png',
			frames: 3,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -2
		},
		power: {
			base: 10,
			scale: 4.5,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 200,
			scale: 1,
			inner: 125,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
	},
	castform: {
		id: 61,
		key: 'castform',
		name: ['castform', 'castform', 'Morphéo', 'castform', 'castform', 'formeo', 'ポワルン', '캐스퐁', '變化怪', 'castform'],
		color: '#aeb7bf',
		ability: abilityData['castform'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		projectileGrass: projectileData['red1'],
		projectileWater: projectileData['blue5'],
		projectileMountain: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/castform.png',
			image: './src/assets/images/pokemon/normal/castform-idle.png',
			imageGrass: './src/assets/images/pokemon/normal/castform-grass-idle.png',
			imageWater: './src/assets/images/pokemon/normal/castform-water-idle.png',
			imageMountain: './src/assets/images/pokemon/normal/castform-mountain-idle.png',
			frames: 6,
			framesGrass: 9,
			framesWater: 8,
			framesMountain: 4,
			hold: 14
		},
		speed: {
			base: 2100,
			scale: -12 //Changelog: -12->-12.5
		},
		power: {
			base: 1,
			scale: 5,
		},
		critical: {
			base: 10, //Changelog: 3->10
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 3, 4],
	},
	clefairy: {
		id: 62,
		key: 'clefairy',
		name: ['clefairy', 'clefairy', 'Mélofée', 'clefairy', 'clefairy', 'Piepi', 'ピッピ', '삐삐', '皮皮', 'clefairy'],
		color: '#ffc7d7',
		ability: abilityData['star'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/clefairy.png',
			image: './src/assets/images/pokemon/normal/clefairy-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -2
		},
		power: {
			base: 5,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'clefable',
			level: 25,
		},
	},
	clefable: {
		id: 62,
		key: 'clefable',
		name: ['clefable', 'clefable', 'Mélodelfe', 'clefable', 'clefable', 'Pixi', 'ピクシー', '픽시', '皮可西', 'clefable'],
		color: '#fe8dad',
		ability: abilityData['star'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/clefable.png',
			image: './src/assets/images/pokemon/normal/clefable-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1200,
			scale: -3
		},
		power: {
			base: 25,
			scale: 4.3,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	anorith: {
		id: 63,
		key: 'anorith',
		name: ['anorith', 'anorith', 'Anorith', 'anorith', 'anorith', 'anorith', 'アノプス', '아노딥스', '始祖小獸', 'anorith'],
		color: '#47676f',
		ability: abilityData['armaldo'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/anorith.png',
			image: './src/assets/images/pokemon/normal/anorith-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -2
		},
		power: {
			base: 8,
			scale: 2,
		},
		critical: {
			base: 25,
			scale: 0.1
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 3, 4],
		evolution: {
			pokemon: 'armaldo',
			level: 40,
		},
	},
	armaldo: {
		id: 63,
		key: 'armaldo',
		name: ['armaldo', 'armaldo', 'Armaldo', 'armaldo', 'armaldo', 'armaldo', 'アーマルド', '아말도', '甲冑龍', 'armaldo'],
		color: '#1f9fe7',
		ability: abilityData['armaldo'],
		projectileSound: 'projectile4',
		projectileSpeed: 7,
		projectile: projectileData['blue1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/armaldo.png',
			image: './src/assets/images/pokemon/normal/armaldo-idle.png',
			frames: 14,
			hold: 15
		},
		speed: {
			base: 1600,
			scale: -7
		},
		power: {
			base: 20,
			scale: 4,
		},
		critical: {
			base: 55, //Changelog: 50->55
			scale: 0.2
		},
		range: {
			base: 130, //Changelog: 115->130
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 3, 4],
	},
	lileep: {
		id: 64,
		key: 'lileep',
		name: ['lileep', 'lileep', 'Lilia', 'lileep', 'lileep', 'liliep', 'リリーラ', '릴링', '始祖小草', 'lileep'],
		color: '#c697de',
		ability: abilityData['cradily'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lileep.png',
			image: './src/assets/images/pokemon/normal/lileep-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2.3,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'cradily',
			level: 40,
		},
	},
	cradily: {
		id: 64,
		key: 'cradily',
		name: ['cradily', 'cradily', 'Vacilys', 'cradily', 'cradily', 'wielie', 'ユレイドル', '릴리요', '始祖大草', 'cradily'],
		color: '#a75e67',
		ability: abilityData['cradily'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cradily.png',
			image: './src/assets/images/pokemon/normal/cradily-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2400, //changelog:2320->2400 (Make it perma slow, it could already do that but only at lvl 80)
			scale: -4
		},
		power: {
			base: 55,
			scale: 3.7,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
	},
	shieldon: {
		id: 65,
		key: 'shieldon',
		name: ['shieldon', 'shieldon', 'Dinoclier', 'shieldon', 'shieldon', 'schilterus', 'タテトプス', '방패톱스', '盾甲龍', 'shieldon'],
		color: '#efbe36',
		ability: abilityData['bastiodon'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/shieldon.png',
			image: './src/assets/images/pokemon/normal/shieldon-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 9800, //Changelog: 10000->9800
			scale: -10
		},
		power: {
			base: 50,
			scale: 3.2, //Changelog: 5->3.2 
		},
		critical: {
			base: 0, //Changelog: 1->0 (universal AoE removal crit)
			scale: 0
		},
		range: {
			base: 120, //Changelog: 110->120
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'bastiodon',
			level: 30,
		},
	},
	bastiodon: {
		id: 65,
		key: 'bastiodon',
		name: ['bastiodon', 'bastiodon', 'Bastiodon', 'bastiodon', 'bastiodon', 'bollterus', 'トリデプス', '바리톱스', '盔甲龍王', 'bastiodon'],
		color: '#c7971f',
		ability: abilityData['bastiodon'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/bastiodon.png',
			image: './src/assets/images/pokemon/normal/bastiodon-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 7800, //Changelog: 8000->7800
			scale: -15
		},
		power: {
			base: 300,
			scale: 9.6, //Changelog: 15->9.6
		},
		critical: {
			base: 0, //Changelog: 3->0 (universal AoE removal crit)
			scale: 0
		},
		range: {
			base: 140,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
	},
	cranidos: {
		id: 66,
		key: 'cranidos',
		name: ['cranidos', 'cranidos', 'Kranidos', 'cranidos', 'cranidos', 'koknodon', 'ズガイドス', '두개도스', '頭蓋獸', 'cranidos'],
		color: '#1f9fe7',
		ability: abilityData['rampardos'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cranidos.png',
			image: './src/assets/images/pokemon/normal/cranidos-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -5
		},
		power: {
			base: 30,
			scale: 9,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 95,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'rampardos',
			level: 30,
		},
	},
	rampardos: {
		id: 66,
		key: 'rampardos',
		name: ['rampardos', 'rampardos', 'Charkos', 'rampardos', 'rampardos', 'rameidon', 'ラムパルド', '램펄드', '頭蓋巨獸', 'rampardos'],
		color: '#d72701',
		ability: abilityData['rampardos'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/rampardos.png',
			image: './src/assets/images/pokemon/normal/rampardos-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2600,
			scale: -7
		},
		power: {
			base: 100,
			scale: 24,
		},
		critical: {
			base: 5,
			scale: 0.15
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	starly: {
		id: 67,
		key: 'starly',
		name: ['starly', 'starly', 'Étourmi', 'starly', 'starly', 'staralili', 'ムックル', '찌르꼬', '小星雀', 'starly'],
		color: '#7e6f6e',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/starly.png',
			image: './src/assets/images/pokemon/normal/starly-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 1250,
			scale: -1
		},
		power: {
			base: 4,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0.2
		},
		range: {
			base: 175,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'staravia',
			level: 14,
		},
	},
	staravia: {
		id: 67,
		key: 'staravia',
		name: ['staravia', 'staravia', 'Étourvol', 'staravia', 'staravia', 'staravia', 'ムクバード', '찌르버드', '星羽鳥', 'staravia'],
		color: '#b7bfc7',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/staravia.png',
			image: './src/assets/images/pokemon/normal/staravia-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1100,
			scale: -1
		},
		power: {
			base: 12,
			scale: 1.8,
		},
		critical: {
			base: 3,
			scale: 0.1
		},
		range: {
			base: 210,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
		evolution: {
			pokemon: 'staraptor',
			level: 31,
		},
	},
	staraptor: {
		id: 67,
		key: 'staraptor',
		name: ['staraptor', 'staraptor', 'Étouraptor', 'staraptor', 'staraptor', 'staraptor', 'ムクホーク', '찌르호크', '蓮蓬鳥', 'staraptor'],
		color: '#df6c56',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/staraptor.png',
			image: './src/assets/images/pokemon/normal/staraptor-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -3.5 //Changelog: -3->-3.5
		},
		power: {
			base: 45,
			scale: 2.3, //Changelog: 2.2->2.3
		},
		critical: {
			base: 5,
			scale: 0.2 //Changelog: 0.1->0.2
		},
		range: {
			base: 280,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 4],
	},
	abra: {
		id: 68,
		key: 'abra',
		name: ['abra', 'abra', 'Abra', 'abra', 'abra', 'abra', 'ケーシィ', '캐이시', '凱西', 'abra'],
		color: '#deb500',
		ability: abilityData['teleport'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/abra.png',
			image: './src/assets/images/pokemon/normal/abra-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 850,
			scale: 0
		},
		power: {
			base: 1,
			scale: 1,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 90,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'kadabra',
			level: 16,
		},
	},
	kadabra: {
		id: 68,
		key: 'kadabra',
		name: ['kadabra', 'kadabra', 'Kadabra', 'kadabra', 'kadabra', 'kadabra', 'ユンゲラー', '윤겔라', '勇基拉', 'kadabra'],
		color: '#a55a19',
		ability: abilityData['teleport'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/kadabra.png',
			image: './src/assets/images/pokemon/normal/kadabra-idle.png',
			frames: 9,
			hold: 15
		},
		speed: {
			base: 800,
			scale: 0
		},
		power: {
			base: 15,
			scale: 3,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'alakazam',
			level: 50,
		},
	},
	alakazam: {
		id: 68,
		key: 'alakazam',
		name: ['alakazam', 'alakazam', 'Alakazam', 'alakazam', 'alakazam', 'simsala', 'フーディン', '후딘', '胡地', 'alakazam'],
		color: '#dfb401',
		ability: abilityData['teleport'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/alakazam.png',
			image: './src/assets/images/pokemon/normal/alakazam-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 700,
			scale: 0
		},
		power: {
			base: 30,
			scale: 4,
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		mega: 'megaAlakazam'
	},
	megaAlakazam: {
		id: 68,
		key: 'megaAlakazam',
		name: [
			"M-Alakazam",
			"M-Alakazam",
			"M-Alakazam",
			"M-Alakazam",
			"M-Alakazam",
			"M-Simsala",
			"メガフーディン",
			"메가후디닌",
			"超进化胡地",
			"M-Alakazam"
		],
		color: '#d87118',
		ability: abilityData['synchronySplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/megaAlakazam.png',
			image: './src/assets/images/pokemon/normal/megaAlakazam-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 600,
			scale: 0
		},
		power: {
			base: 100,
			scale: 4,
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 4],
		base: 'alakazam'
	},
	gastly: {
		id: 69,
		key: 'gastly',
		name: ['gastly', 'gastly', 'Fantominus', 'gastly', 'gastly', 'nebulak', 'ゴース', '고오스', '鬼斯', 'gastly'],
		color: '#b595de',
		ability: abilityData['nightmare'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gastly.png',
			image: './src/assets/images/pokemon/normal/gastly-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -1
		},
		power: {
			base: 9,
			scale: 1,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1],
		evolution: {
			pokemon: 'haunter',
			level: 25,
		},
	},
	haunter: {
		id: 69,
		key: 'haunter',
		name: ['haunter', 'haunter', 'Spectrum', 'haunter', 'haunter', 'alpollo', 'ゴースト', '고우스트', '鬼斯通', 'haunter'],
		color: '#8c62bc',
		ability: abilityData['nightmare'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/haunter.png',
			image: './src/assets/images/pokemon/normal/haunter-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -4
		},
		power: {
			base: 30,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1],
		evolution: {
			pokemon: 'gengar',
			level: 50,
		},
	},
	gengar: {
		id: 69,
		key: 'gengar',
		name: ['gengar', 'gengar', 'Ectoplasma', 'gengar', 'gengar', 'gengar', 'ゲンガー', '팬텀', '耿鬼', 'gengar'],
		color: '#b494de',
		ability: abilityData['nightmare'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gengar.png',
			image: './src/assets/images/pokemon/normal/gengar-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -8
		},
		power: {
			base: 40,
			scale: 6.6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1],
	},
	ditto: {
		id: 70,
		key: 'ditto',
		name: ['ditto', 'ditto', 'Métamorph', 'ditto', 'ditto', 'ditto', 'メタモン', '메타몽', '變隻', 'ditto'],
		color: '#d794de',
		ability: abilityData['transform'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ditto.png',
			image: './src/assets/images/pokemon/normal/ditto-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'veryHigh',
		tiles: [1, 2],
	},
	magikarp: {
		id: 71,
		key: 'magikarp',
		name: ['Magikarp', 'Magikarp', 'Magicarpe', 'Magikarp', 'Magikarp', 'Karpador', 'コイキング', '잉어킹', '鲤鱼王', 'Magikarp'],
		color: '#d63801',
		ability: abilityData['armorBreakSplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/magikarp.png',
			image: './src/assets/images/pokemon/normal/magikarp-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4000,
			scale: -1
		},
		power: {
			base: 10,
			scale: 1,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 210,
			scale: 0,
			inner: 145,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'high',
		tiles: [3],
		evolution: {
			pokemon: 'gyarados',
			level: 20,
		},
	},
	gyarados: {
		id: 71,
		key: 'gyarados',
		name: ['Gyarados', 'Gyarados', 'Léviator', 'Gyarados', 'Gyarados', 'Garados', 'ギャラドス', '갸라도스', '暴鲤龙', 'Gyarados'],
		color: '#189ce7',
		ability: abilityData['armorBreakSplash'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gyarados.png',
			image: './src/assets/images/pokemon/normal/gyarados-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3900,
			scale: -2
		},
		power: {
			base: 50,
			scale: 13,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 230,
			scale: 0.4,
			inner: 145,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'high',
		tiles: [3],
	},
	pikachu: {
		id: 72,
		key: 'pikachu',
		name: ['Pikachu', 'Pikachu', 'Pikachu', 'Pikachu', 'Pikachu', 'Pikachu', 'ピカチュウ', '피카츄', '皮卡丘', 'Pikachu'],
		color: '#fef800',
		ability: abilityData['static'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		ricochet: 3,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pikachu.png',
			image: './src/assets/images/pokemon/normal/pikachu-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1450,
			scale: -2
		},
		power: {
			base: 8,
			scale: 3,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'raichu',
			level: 30,
		},
	},
	raichu: {
		id: 72,
		key: 'raichu',
		name: ['Raichu', 'Raichu', 'Raichu', 'Raichu', 'Raichu', 'Raichu', 'ライチュウ', '라이츄', '雷丘', 'Raichu'],
		color: '#ff9443',
		ability: abilityData['static'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		ricochet: 4,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/raichu.png',
			image: './src/assets/images/pokemon/normal/raichu-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1245,
			scale: -4.7
		},
		power: {
			base: 45,
			scale: 2.6,
		},
		critical: {
			base: 10,
			scale: 0 //Changelog: 0.1->0
		},
		range: {
			base: 130,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	fuecoco: {
		id: 73,
		key: 'fuecoco',
		name: ['Fuecoco', 'Fuecoco', 'Chochodile', 'Fuecoco', 'Fuecoco', 'Fuecoco', 'フエココ', '뜨아거', '呆火鳄', 'Fuecoco'],
		color: '#b81000',
		ability: abilityData['willOWisp'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/fuecoco.png',
			image: './src/assets/images/pokemon/normal/fuecoco-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3220,
			scale: -2
		},
		power: {
			base: 10,
			scale: 5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'crocalor',
			level: 16,
		},	
	},
	crocalor: {
		id: 73,
		key: 'crocalor',
		name: ['Crocalor', 'Crocalor', 'Crocogril', 'Crocalor', 'Crocalor', 'Crocalor', 'クロカロール', '악뜨거', '炙烫鳄', 'Crocalor'],
		color: '#de3b2e',
		ability: abilityData['willOWisp'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/crocalor.png',
			image: './src/assets/images/pokemon/normal/crocalor-idle.png',
			frames: 2,
			hold: 7
		},
		speed: {
			base: 3150,
			scale: -3
		},
		power: {
			base: 20,
			scale: 6,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 115,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'skeledirge',
			level: 36,
		},	
	},
	skeledirge: {
		id: 73,
		key: 'skeledirge',
		name: ['Skeledirge', 'Skeledirge', 'Flâmigator', 'Skeledirge', 'Skeledirge', 'Skeledirge', 'スケルディルガ', '라우드본', '骨纹巨声鳄', 'Skeledirge'],
		color: '#d74e40',
		ability: abilityData['willOWisp'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red2'],
		sprite: {
			base: './src/assets/images/pokemon/normal/skeledirge.png',
			image: './src/assets/images/pokemon/normal/skeledirge-idle.png',
			frames: 14,
			hold: 15
		},
		speed: {
			base: 2900,
			scale: -4
		},
		power: {
			base: 55,
			scale: 4.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	larvesta: {
		id: 74,
		key: 'larvesta',
		name: ['Larvesta', 'Larvesta', 'Pyronille', 'Larvesta', 'Larvesta', 'Ignivor', 'モノズ', '모노즈', '燃烧虫', 'Larvesta'],
		color: '#df9d00',
		ability: abilityData['fieryDance'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/larvesta.png',
			image: './src/assets/images/pokemon/normal/larvesta-idle.png',
			frames: 10,
			hold: 15
		},
		speed: {
			base: 4150,
			scale: -27
		},
		power: {
			base: 5,
			scale: 1.1,
		},
		critical: {
			base: 1,
			scale: 0.1
		},
		range: {
			base: 95,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2],
		evolution: {
			pokemon: 'volcarona',
			level: 59,
		}
	},
	volcarona: {
		id: 74,
		key: 'volcarona',
		name: ['Volcarona', 'Volcarona', 'Pyrax', 'Volcarona', 'Volcarona', 'Ramoth', 'ウルガモス', '불카모스', '火神蛾', 'Volcarona'],
		color: '#e32929',
		ability: abilityData['fieryDance'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/volcarona.png',
			image: './src/assets/images/pokemon/normal/volcarona-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 5550, //Changelog: 4150->5550
			scale: -27
		},
		power: {
			base: 25,
			scale: 5, //Changelog: 2.2->5
		},
		critical: {
			base: 15, //Changelog: 8->15
			scale: 0.1
		},
		range: {
			base: 140, //Changelog: 100->140
			scale: 0.2, //Changelog: 1->0.2
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 2],
	},
	cherubi: {
		id: 75,
		key: 'cherubi',
		name: ['Cherubi', 'Cherubi', 'Ceribou', 'Cherubi', 'Cherubi', 'Cherubi', 'チェリンボ', '체리버', '樱花宝', 'Cherubi'],
		color: '#fc5492',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cherubi.png',
			image: './src/assets/images/pokemon/normal/cherubi-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2800,
			scale: -2
		},
		power: {
			base: 8,
			scale: 2.5,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'cherrim',
			level: 25,
		},
	},
	cherrim: {
		id: 75,
		key: 'cherrim',
		name: ['Cherrim', 'Cherrim', 'Ceriflor', 'Cherrim', 'Cherrim', 'Cherrim', 'チェリム', '체리꼬', '樱花儿', 'Cherrim'],
		color: '#9e5fc6',
		ability: abilityData['doubleShot'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cherrim1.png',
			image: './src/assets/images/pokemon/normal/cherrim1-idle.png',
			transform: './src/assets/images/pokemon/normal/cherrim2-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2400, 
			scale: -8
		},
		power: {
			base: 40,
			scale: 6.6,
		},
		critical: {
			base: 0,
			scale: 0.3
		},
		range: {
			base: 130,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	rockruff: {
		id: 76,
		key: 'rockruff',
		name: ['Rockruff', 'Rockruff', 'Rocabot', 'Rockruff', 'Rockruff', 'Rockruff', 'イワンコ', '암멍이', '岩狗狗', 'Rockruff'],
		color: '#ab6a5a',
		ability: abilityData['toughClaws'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/rockruff.png',
			image: './src/assets/images/pokemon/normal/rockruff-idle.png',
			frames: 7,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -2
		},
		power: {
			base: 10,
			scale: 2,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 95,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'lycanrocDay',
			level: 25,
		},
	},
	lycanrocDay: {
		id: 76,
		key: 'lycanrocDay',
		name: ['Lycanroc', 'Lycanroc', 'Lougaroc', 'Lycanroc', 'Lycanroc', 'Wolwerock', 'ルガルガン', '루가루암', '鬃岩狼人', 'Lycanroc'],
		color: '#a17e6f',
		ability: abilityData['toughClawsDay'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lycanroc1.png',
			image: './src/assets/images/pokemon/normal/lycanroc1-idle.png',
			frames: 14,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -10
		},
		power: {
			base: 20,
			scale: 6.5,
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.15,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		form: true
	},
	lycanrocNight: {
		id: 76,
		key: 'lycanrocNight',
		name: ['Lycanroc', 'Lycanroc', 'Lougaroc', 'Lycanroc', 'Lycanroc', 'Wolwerock', 'ルガルガン', '루가루암', '鬃岩狼人', 'Lycanroc'],
		color: '#c42f00',
		ability: abilityData['toughClawsNight'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/lycanroc2.png',
			image: './src/assets/images/pokemon/normal/lycanroc2-idle.png',
			frames: 2,
			hold: 30
		},
		speed: {
			base: 2000,
			scale: -15
		},
		power: {
			base: 30,
			scale: 3.05,
		},
		critical: {
			base: 20,
			scale: 0
		},
		range: {
			base: 125,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		form: true
	},
	pawniard: {
		id: 77,
		key: 'pawniard',
		name: ['Pawniard', 'Pawniard', 'Scalpion', 'Pawniard', 'Pawniard', 'Gladiantri', 'コマタナ', '자망칼', '驹刀小兵', 'Pawniard'],
		color: '#ad4042',
		ability: abilityData['defiant'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pawniard.png',
			image: './src/assets/images/pokemon/normal/pawniard-idle.png',
			frames: 3,
			hold: 20
		},
		speed: {
			base: 3400,
			scale: -8
		},
		power: {
			base: 18,
			scale: 2,
		},
		critical: {
			base: 15,
			scale: 0
		},
		range: {
			base: 170,
			scale: 0,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'bisharp',
			level: 52,
		},
	},
	bisharp: {
		id: 77,
		key: 'bisharp',
		name: ['Bisharp', 'Bisharp', 'Scalproie', 'Bisharp', 'Bisharp', 'Caesurio', 'キリキザン', '절각참', '劈斩司令', 'Bisharp'],
		color: '#a13f2b',
		ability: abilityData['defiant'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/bisharp.png',
			image: './src/assets/images/pokemon/normal/bisharp-idle.png',
			frames: 5,
			hold: 15
		},
		speed: {
			base: 3150,
			scale: -13
		},
		power: {
			base: 70,
			scale: 8.4,
		},
		critical: {
			base: 23,
			scale: 0.17
		},
		range: {
			base: 195,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	sandile: {
		id: 78,
		key: 'sandile',
		name: ['Sandile', 'Sandile', 'Mascaïman', 'Sandile', 'Sandile', 'Ganovil', 'メグロコ', '깜눈크', '黑眼鳄', 'Sandile'],
		color: '#9c865b',
		ability: abilityData['moxie'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sandile.png',
			image: './src/assets/images/pokemon/normal/sandile-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -1
		},
		power: {
			base: 10,
			scale: 2,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'krokorok',
			level: 29,
		},
	},
	krokorok: {
		id: 78,
		key: 'krokorok',
		name: ['Krokorok', 'Krokorok', 'Escroco', 'Krokorok', 'Krokorok', 'Rokkaiman', 'ワルビル', '악비르', '混混鳄', 'Krokorok'],
		color: '#99673e',
		ability: abilityData['moxie'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/krokorok.png',
			image: './src/assets/images/pokemon/normal/krokorok-idle.png',
			frames: 14,
			hold: 15
		},
		speed: {
			base: 1900,
			scale: -1
		},
		power: {
			base: 20,
			scale: 4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'krookodile',
			level: 40,
		},
	},
	krookodile: {
		id: 78,
		key: 'krookodile',
		name: ['Krookodile', 'Krookodile', 'Crocorible', 'Krookodile', 'Krookodile', 'Rabigator', 'ワルビアル', '악비아르', '流氓鳄', 'Krookodile'],
		color: '#954350',
		ability: abilityData['moxie'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/krookodile.png',
			image: './src/assets/images/pokemon/normal/krookodile-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1920,
			scale: -10 
		},
		power: {
			base: 50,
			scale: 11.2, 
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 145, 
			scale: 0.2, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	wimpod: {
		id: 79,
		key: 'wimpod',
		name: ['Wimpod', 'Wimpod', 'Sovkipou', 'Wimpod', 'Wimpod', 'Reißlaus', 'コソクムシ', '꼬시레', '胆小虫', 'Wimpod'],
		color: '#a48ba7',
		ability: abilityData['firstImpression'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/wimpod.png',
			image: './src/assets/images/pokemon/normal/wimpod-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2600,
			scale: -5
		},
		power: {
			base: 20,
			scale: 6.3,
		},
		critical: {
			base: 0,
			scale: 0.1
		},
		range: {
			base: 95, 
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 3],
		evolution: {
			pokemon: 'golisopod',
			level: 30,
		},
	},
	golisopod: {
		id: 79,
		key: 'golisopod',
		name: ['Golisopod', 'Golisopod', 'Sarmuraï', 'Golisopod', 'Golisopod', 'Tectass', 'グソクムシャ', '갑주무사', '具甲武者', 'Golisopod'],
		color: '#8855ab',
		ability: abilityData['firstImpression'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/golisopod.png',
			image: './src/assets/images/pokemon/normal/golisopod-idle.png',
			frames: 10,
			hold: 15
		},
		speed: {
			base: 2500,
			scale: -7
		},
		power: {
			base: 50,
			scale: 16.5,
		},
		critical: {
			base: 0,
			scale: 0.12
		},
		range: {
			base: 95,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 3],
	},
	honedge: {
		id: 80,
		key: 'honedge',
		name: ['Honedge', 'Honedge', 'Monorpale', 'Honedge', 'Honedge', 'Gramokles', 'ヒトツキ', '단칼빙', '独剑鞘', 'Honedge'],
		color: '#2e7596',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/honedge.png',
			image: './src/assets/images/pokemon/normal/honedge-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 1000,
			scale: -1
		},
		power: {
			base: 5,
			scale: 2,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'doublade',
			level: 35,
		},
	},
	doublade: {
		id: 80,
		key: 'doublade',
		name: ['Doublade', 'Doublade', 'Dimoclès', 'Doublade', 'Doublade', 'Duokles', 'ニダンギル', '쌍검킬', '双剑鞘', 'Doublade'],
		color: '#af4a8d',
		ability: abilityData['armorBreakDoubleShot'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/doublade.png',
			image: './src/assets/images/pokemon/normal/doublade-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 950,
			scale: -1
		},
		power: {
			base: 15,
			scale: 2,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'aegislash',
			level: 60,
		},
	},
	aegislash: { // SHIELD
		id: 80,
		key: 'aegislash',
		name: ['Aegislash', 'Aegislash', 'Exagide', 'Aegislash', 'Aegislash', 'Durengard', 'ギルガルド', '킬가르도', '坚盾剑怪', 'Aegislash'],
		color: '#967bd2',
		ability: abilityData['slow'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/aegislashShield.png',
			image: './src/assets/images/pokemon/normal/aegislashShield-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 1800,
			scale: -0.5
		},
		power: {
			base: 25,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'high',
		tiles: [1, 4],
		form: true
	},
	aegislashSword: { // SWORD
		id: 80,
		key: 'aegislashSword',
		name: ['Aegislash', 'Aegislash', 'Exagide', 'Aegislash', 'Aegislash', 'Durengard', 'ギルガルド', '킬가르도', '坚盾剑怪', 'Aegislash'],
		color: '#967bd2',
		ability: abilityData['armorBreak'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['purple3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/aegislashSword.png',
			image: './src/assets/images/pokemon/normal/aegislashSword-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 900,
			scale: -1.5
		},
		power: {
			base: 50,
			scale: 4,
		},
		critical: {
			base: 25, 
			scale: 0.4
		},
		range: {
			base: 150,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		form: true,
	},
	sobble: {
		id: 81,
		key: 'sobble',
		name: ['Sobble', 'Sobble', 'Larméléon', 'Sobble', 'Sobble', 'Memmeon', 'メッソン', '울머기', '泪眼蜥', 'Sobble'],
		color: '#84d4fd',
		ability: abilityData['sniper'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sobble.png',
			image: './src/assets/images/pokemon/normal/sobble-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4500,
			scale: -3
		},
		power: {
			base: 20,
			scale: 3,
		},
		critical: {
			base: 1,
			scale: 0.2
		},
		range: {
			base: 150,
			scale: 1,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'drizzile',
			level: 16,
		},	
	},
	drizzile: {
		id: 81,
		key: 'drizzile',
		name: ['Drizzile', 'Drizzile', 'Arrozard', 'Drizzile', 'Drizzile', 'Phlegleon', 'ジメレオン', '누겔레온', '变涩蜥', 'Drizzile'],
		color: '#a2cdec',
		ability: abilityData['sniper'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/drizzile.png',
			image: './src/assets/images/pokemon/normal/drizzile-idle.png',
			frames: 5,
			hold: 7
		},
		speed: {
			base: 4500,
			scale: -4
		},
		power: {
			base: 50,
			scale: 4,
		},
		critical: {
			base: 5,
			scale: 0.2
		},
		range: {
			base: 150,
			scale: 2,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'inteleon',
			level: 36,
		},	
	},
	inteleon: {
		id: 81,
		key: 'inteleon',
		name: ['Inteleon', 'Inteleon', 'Lézargus', 'Inteleon', 'Inteleon', 'Intelleon', 'インテレオン', '인텔리레온', '千面避役', 'Inteleon'],
		color: '#216ea0',
		ability: abilityData['sniper'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/inteleon.png',
			image: './src/assets/images/pokemon/normal/inteleon-idle.png',
			frames: 11,
			hold: 15
		},
		speed: {
			base: 4500,
			scale: -5
		},
		power: {
			base: 100, // 20 -> 100
			scale: 11, //Changelog: 2.8 -> 8
		},
		critical: {
			base: 10, 
			scale: 0.2 
		},
		range: {
			base: 200,
			scale: 5,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3, 4],
	},
	rowlet: {
		id: 82,
		key: 'rowlet',
		name: ['Rowlet', 'Rowlet', 'Brindibou', 'Rowlet', 'Rowlet', 'Bauz', 'モクロー', '나몰빼미', '木木枭', 'Rowlet'],
		color: '#c9703b',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/rowlet.png',
			image: './src/assets/images/pokemon/normal/rowlet-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 1250,
			scale: -2
		},
		power: {
			base: 5,
			scale: 1,
		},
		critical: {
			base: 2,
			scale: 0.1
		},
		range: {
			base: 230,
			scale: 0.2,
			inner: 150,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'dartrix',
			level: 17,
		},	
	},
	dartrix: {
		id: 82,
		key: 'dartrix',
		name: ['Dartrix', 'Dartrix', 'Efflèche', 'Dartrix', 'Dartrix', 'Arboretoss', 'フクスロー', '빼미스로우', '投羽枭', 'Dartrix'],
		color: '#8be060',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/dartrix.png',
			image: './src/assets/images/pokemon/normal/dartrix-idle.png',
			frames: 4,
			hold: 7
		},
		speed: {
			base: 850,
			scale: -2
		},
		power: {
			base: 15,
			scale: 3,
		},
		critical: {
			base: 5,
			scale: 0.12
		},
		range: {
			base: 230,
			scale: 0.5,
			inner: 150,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'decidueye',
			level: 34,
		},	
	},
	decidueye: {
		id: 82,
		key: 'decidueye',
		name: ['Decidueye', 'Decidueye', 'Archéduc', 'Decidueye', 'Decidueye', 'Silvarro', 'ジュナイパー', '모크나이퍼', '狙射树枭', 'Decidueye'],
		color: '#0b7f52',
		ability: abilityData['superCritical'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/decidueye.png',
			image: './src/assets/images/pokemon/normal/decidueye-idle.png',
			frames: 10,
			hold: 15
		},
		speed: {
			base: 650,
			scale: -2
		},
		power: {
			base: 40,
			scale: 4,
		},
		critical: {
			base: 8,
			scale: 0.14
		},
		range: {
			base: 230,
			scale: 0.7,
			inner: 150,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
	},
	comfey: {
		id: 83,
		key: 'comfey',
		name: ['Comfey', 'Comfey', 'Guérilande', 'Comfey', 'Comfey', 'Curelei', 'キュワワー', '큐아링', '花疗环环', 'Comfey'],
		color: '#a7af4e',
		ability: abilityData['triage'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/comfey.png',
			image: './src/assets/images/pokemon/normal/comfey-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 80,
			scale: 0.7, //Changelog: 0.5 -> 0.7
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'low',
		tiles: [1, 2],
	},
	smeargle: {
		id: 84,
		key: 'smeargle',
		name: ['Smeargle', 'Smeargle', 'Queulorior', 'Smeargle', 'Smeargle', 'Farbeagle', 'ドーブル', '루브도', '图图犬', 'Smeargle'],
		color: '#c2c3b6',
		ability: abilityData['scheme'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/smeargle.png',
			image: './src/assets/images/pokemon/normal/smeargle-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 5000,
			scale: -30
		},
		power: {
			base: 5,
			scale: 3.45,
		},
		critical: {
			base: 1,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.15,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	cacnea: {
		id: 85,
		key: 'cacnea',
		name: ['Cacnea', 'Cacnea', 'Cacnea', 'Cacnea', 'Cacnea', 'Tuska', 'サボネア', '선인왕', '刺球仙人掌', 'Cacnea'],
		color: '#a4d276',
		ability: abilityData['doubleShotSand'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cacnea.png',
			image: './src/assets/images/pokemon/normal/cacnea-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 2200,
			scale: -3
		},
		power: {
			base: 8,
			scale: 3.1,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 150,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
		evolution: {
			pokemon: 'cacturne',
			level: 32,
		},
	},
	cacturne: {
		id: 85,
		key: 'cacturne',
		name: ['Cacturne', 'Cacturne', 'Cacturne', 'Cacturne', 'Cacturne', 'Noktuska', 'ノクタス', '다탱구', '梦歌仙人掌', 'Cacturne'],
		color: '#4ea51c',
		ability: abilityData['quadraShotSand'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/cacturne.png',
			image: './src/assets/images/pokemon/normal/cacturne-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 2000,
			scale: -6
		},
		power: {
			base: 25,
			scale: 3.9,
		},
		critical: {
			base: 15,
			scale: 0
		},
		range: {
			base: 200,
			scale: 0.6, 
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2, 4],
	},
	greavard: {
		id: 86,
		key: 'greavard',
		name: ['Greavard', 'Greavard', 'Toutombe', 'Greavard', 'Greavard', 'Gruff', 'ボチ', '망망이', '墓仔狗', 'Greavard'],
		color: '#aabacb',
		ability: abilityData['curse'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/greavard.png',
			image: './src/assets/images/pokemon/normal/greavard-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 4000,
			scale: -1
		},
		power: {
			base: 16,
			scale: 2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'houndstone',
			level: 30,
		},
	},
	houndstone: {
		id: 86,
		key: 'houndstone',
		name: ['Houndstone', 'Houndstone', 'Tomberro', 'Houndstone', 'Houndstone', 'Friedwuff', 'ハカドッグ', '묘두기', '墓扬犬', 'Houndstone'],
		color: '#7c759f',
		ability: abilityData['curse'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/houndstone.png',
			image: './src/assets/images/pokemon/normal/houndstone-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3200,
			scale: -8
		},
		power: {
			base: 60,
			scale: 5.65,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	stakataka: {
		id: 87,
		key: 'stakataka',
		name: ['Stakataka', 'Stakataka', 'Ama-Ama', 'Stakataka', 'Stakataka', 'Muramura', 'ストリンダー', '스트린더', '垒磊石', 'Stakataka'],
		color: '#5fa8b5',
		ability: abilityData['splash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/stakataka.png',
			image: './src/assets/images/pokemon/normal/stakataka-idle.png',
			frames: 12,
			hold: 15
		},
		speed: {
			base: 10000,
			scale: -15
		},
		power: {
			base: 200,
			scale: 53, //Changelog: 33->53
		},
		critical: {
			base: 50, //Changelog: 5->50
			scale: 0
		},
		range: {
			base: 200,
			scale: 1,
			inner: 180,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],	
	},
	luvdisc: {
		id: 88,
		key: 'luvdisc',
		name: ['Luvdisc', 'Luvdisc', 'Lovdisc', 'Luvdisc', 'Luvdisc', 'Liebiskus', 'ラブカス', '러브카스', '爱心鱼', 'Luvdisc'],
		color: '#fe8faf',
		ability: abilityData['heal'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['blue5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/luvdisc.png',
			image: './src/assets/images/pokemon/normal/luvdisc-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 700, //Changelog: 710->700
			scale: -1 //Changelog: -0.9->-1
		},
		power: {
			base: 5,
			scale: 2.95, //Changelog: 3.28->2.95
		},
		critical: {
			base: 0, //Changelog: 3.3->0
			scale: 0
		},
		range: {
			base: 120, //Changelog: 120->140
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3], //Changelog: Removed the field tile, doesn't make sense and will act as a little nerf. Will also diff him from the others healing option.
	},
	chatot: {
		id: 89,
		key: 'chatot',
		name: ['Chatot', 'Chatot', 'Pijako', 'Chatot', 'Chatot', 'Plaudagei', 'ペラップ', '페라페', '聒噪鸟', 'Chatot'],
		color: '#dfb701',
		ability: abilityData['chatter'],
		projectileSound: 'chatot',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/chatot.png',
			image: './src/assets/images/pokemon/normal/chatot-idle.png',
			frames: 8,
			hold: 15
		},
		speed: {
			base: 4710,
			scale: -3
		},
		power: {
			base: 21,
			scale: 4.2,
		},
		critical: {
			base: 4.4,
			scale: 0
		},
		range: {
			base: 101,
			scale: 3.4,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	carvanha: {
		id: 90,
		key: 'carvanha',
		name: ['Carvanha', 'Carvanha', 'Carvanha', 'Carvanha', 'Carvanha', 'Kanivanha', 'キバニア', '샤프니아', '利牙鱼', 'Carvanha'],
		color: '#fe865f',
		ability: abilityData['speedBoost'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/carvanha.png',
			image: './src/assets/images/pokemon/normal/carvanha-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 5000,
			scale: -2 //Changelog: -1->-2
		},
		power: {
			base: 7,
			scale: 3,
		},
		critical: {
			base: 0,
			scale: 0.2
		},
		range: {
			base: 125,
			scale: 0.15,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
		evolution: {
			pokemon: 'sharpedo',
			level: 30,
		},
	},
	sharpedo: {
		id: 90,
		key: 'sharpedo',
		name: ['Sharpedo', 'Sharpedo', 'Sharpedo', 'Sharpedo', 'Sharpedo', 'Tohaido', 'サメハダー', '샤크니아', '巨牙鲨', 'Sharpedo'],
		color: '#6687ae',
		ability: abilityData['speedBoost'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/sharpedo.png',
			image: './src/assets/images/pokemon/normal/sharpedo-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3700,
			scale: -2
		},
		power: {
			base: 50,
			scale: 11.5,
		},
		critical: {
			base: 0,
			scale: 0.4
		},
		range: {
			base: 170, 
			scale: 0.3,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [3],
	},
	munna: {
		id: 91,
		key: 'munna',
		name: [
		  	"Munna",
		  	"Munna",
		  	"Munna",
		  	"Munna",
		  	"Munna",
		  	"Somniam",
		  	"ムンナ",
		  	"몽나",
		  	"食梦梦",
		  	"Munna"
		],
		color: '#f9d0d2',
		ability: abilityData['dreamEater'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/munna.png',
			image: './src/assets/images/pokemon/normal/munna-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3800,
			scale: -8
		},
		power: {
			base: 16,
			scale: 1.2,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 105,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'musharna',
			level: 40
		},	
	},
	musharna: {
		id: 91,
		key: 'musharna',
		name: [
		  	"Musharna",
		  	"Musharna",
		  	"Mushana",
		  	"Musharna",
		  	"Musharna",
		  	"Somnivora",
		  	"ムシャーナ",
		  	"몽얌나",
		  	"梦梦蚀",
		  	"Musharna"
		],
		color: '#8761b8',
		ability: abilityData['dreamEater'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['yellow4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/musharna.png',
			image: './src/assets/images/pokemon/normal/musharna-idle.png',
			frames: 6,
			hold: 15
		},
		speed: {
			base: 3000, 
			scale: -11
		},
		power: {
			base: 37, 
			scale: 3.28,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 170, 
			scale: 0.2, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 4],
	},
	hoothoot: {
		id: 92,
		key: 'hoothoot',
		name: [
		  	"Hoothoot",
		  	"Hoothoot",
		  	"Hoothoot",
		  	"Hoothoot",
		  	"Hoothoot",
		  	"Hoothoot",
		  	"ホーホー",
		  	"부우부",
		  	"咕咕",
		  	"Hoothoot"
		],
		color: '#a75e1f',
		ability: abilityData['frisk'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/hoothoot.png',
			image: './src/assets/images/pokemon/normal/hoothoot-idle.png',
			frames: 4,
			hold: 12
		},
		speed: {
			base: 1870,
			scale: -4
		},
		power: {
			base: 10,
			scale: 2.5,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 180,
			scale: 0,
			inner: 100,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
		evolution: {
			pokemon: 'noctowl',
			level: 20
		},	
	},
	noctowl: {
		id: 92,
		key: 'noctowl',
		name: [
		  	"Noctowl",
		  	"Noctowl",
		  	"Noarfang",
		  	"Noctowl",
		  	"Noctowl",
		  	"Noctuh",
		  	"ヨルノズク",
		  	"야부엉",
		  	"猫头夜鹰",
		  	"Noctowl"
		],
		color: '#be8f5f',
		ability: abilityData['frisk'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/noctowl.png',
			image: './src/assets/images/pokemon/normal/noctowl-idle.png',
			frames: 16,
			hold: 5
		},
		speed: {
			base: 1550,
			scale: -6.2
		},
		power: {
			base: 32,
			scale: 4.1,
		},
		critical: {
			base: 10,
			scale: 0
		},
		range: {
			base: 360,
			scale: 0,
			inner: 150,
		},
		rangeType: 'donut',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 4],
	},
	wingull: {
		id: 93,
		key: 'wingull',
		name: [
		  	"Wingull",
		  	"Wingull",
		  	"Goélise",
		  	"Wingull",
		  	"Wingull",
		  	"Wingull",
		  	"キャモメ",
		  	"갈모매",
		  	"长翅鸥",
		  	"Wingull"
		],
		color: '#7fcfff',
		ability: abilityData['drizzle'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/wingull.png',
			image: './src/assets/images/pokemon/normal/wingull-idle.png',
			frames: 18,
			hold: 4
		},
		speed: {
			base: 2800,
			scale: -2
		},
		power: {
			base: 12,
			scale: 2,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'pelipper',
			level: 25
		},	
	},
	pelipper: {
		id: 93,
		key: 'pelipper',
		name:  [
			"Pelipper",
			"Pelipper",
			"Bekipan",
			"Pelipper",
			"Pelipper",
			"Pelipper",
			"ペリッパー",
			"패리퍼",
			"大嘴鹈鹕",
			"Pelipper"
		],
		color: '#1e9ee7',
		ability: abilityData['drizzle'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['blue6'],
		sprite: {
			base: './src/assets/images/pokemon/normal/pelipper.png',
			image: './src/assets/images/pokemon/normal/pelipper-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 2500, 
			scale: -8
		},
		power: {
			base: 25, 
			scale: 4.5,
		},
		critical: {
			base: 5, 
			scale: 0
		},
		range: {
			base: 170, 
			scale: 0.2, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	archen: {
		id: 94,
		key: 'archen',
		name: [
		  	"Archen",
		  	"Archen",
		  	"Arkéapti",
		  	"Archen",
		  	"Archen",
		  	"Flapteryx",
		  	"アーケン",
		  	"아켄",
		  	"始祖小鸟",
		  	"Archen"
		],
		color: '#df524b',
		ability: abilityData['defeatist'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/archen.png',
			image: './src/assets/images/pokemon/normal/archen-idle.png',
			frames: 6,
			hold: 10
		},
		speed: {
			base: 2800,
			scale: -1
		},
		power: {
			base: 40,
			scale: 3.5,
		},
		critical: {
			base: 0,
			scale: 0.4
		},
		range: {
			base: 130,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
		evolution: {
			pokemon: 'archeops',
			level: 37
		},	
	},
	archeops: {
		id: 94,
		key: 'archeops',
		name: [
		  	"Archeops",
		  	"Archeops",
		  	"Aéroptéryx",
		  	"Archeops",
		  	"Archeops",
		  	"Aeropteryx",
		  	"アーケオス",
		  	"아케오스",
		  	"始祖大鸟",
		  	"Archeops"
		],
		color: '#1bbebe',
		ability: abilityData['defeatist'],
		projectileSound: 'projectile6',
		projectileSpeed: 7,
		projectile: projectileData['green5'],
		sprite: {
			base: './src/assets/images/pokemon/normal/archeops.png',
			image: './src/assets/images/pokemon/normal/archeops-idle.png',
			frames: 8,
			hold: 10
		},
		speed: {
			base: 2450,
			scale: -12.5
		},
		power: {
			base: 150, 
			scale: 17.5,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 150, 
			scale: 0.2, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 4],
	},
	inkay: {
		id: 95,
		key: 'inkay',
		name: [
		  	"Inkay",
		  	"Inkay",
		  	"Sepiatop",
		  	"Inkay",
		  	"Inkay",
		  	"Iscalar",
		  	"マーイーカ",
		  	"오케이징",
		  	"好啦鱿",
		  	"Inkay"
		],
		color: '#e98286',
		ability: abilityData['defiant'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/inkay.png',
			image: './src/assets/images/pokemon/normal/inkay-idle.png',
			frames: 7,
			hold: 4
		},
		speed: {
			base: 4000,
			scale: -5
		},
		power: {
			base: 15,
			scale: 2.1,
		},
		critical: {
			base: 5,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3],
		evolution: {
			pokemon: 'malamar',
			level: 30
		},	
	},
	malamar: {
		id: 95,
		key: 'malamar',
		name: [
		  	"Malamar",
		  	"Malamar",
		  	"Sepiatroce",
		  	"Malamar",
		  	"Malamar",
		  	"Calamanero",
		  	"カラマネロ",
		  	"칼라마네로",
		  	"乌贼王",
		  	"Malamar"
		],
		color: '#746080',
		ability: abilityData['defiant'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		projectile: projectileData['purple1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/malamar.png',
			image: './src/assets/images/pokemon/normal/malamar-idle.png',
			frames: 5,
			hold: 15
		},	
		speed: {
			base: 3400,
			scale: -12
		},
		power: {
			base: 46,
			scale: 6.2,
		},
		critical: {
			base: 12,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3],
	},
	vulpix: {
		id: 96,
		key: 'vulpix',
		name: [
		  	"Vulpix",
		  	"Vulpix",
		  	"Goupix",
		  	"Vulpix",
		  	"Vulpix",
		  	"Vulpix",
		  	"ロコン",
		  	"식스테일",
		  	"六尾",
		  	"Vulpix"
		],
		color: '#ff9442',
		ability: abilityData['burnSplash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/vulpix.png',
			image: './src/assets/images/pokemon/normal/vulpix-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 1750,
			scale: 0
		},
		power: {
			base: 25,
			scale: 1.8,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130,
			scale: 1,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'ninetales',
			level: 30
		},	
	},
	ninetales: {
		id: 96,
		key: 'ninetales',
		name: [
		  	"Ninetales",
		  	"Ninetales",
		  	"Feunard",
		  	"Ninetales",
		  	"Ninetales",
		  	"Vulnona",
		  	"キュウコン",
		  	"나인테일",
		  	"九尾",
		  	"Ninetales"
		],
		color: '#efe797',
		ability: abilityData['burnSplash'],
		projectileSound: 'projectile2',
		projectileSpeed: 7,
		projectile: projectileData['red3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/ninetales.png',
			image: './src/assets/images/pokemon/normal/ninetales-idle.png',
			frames: 14,
			hold: 6
		},
		speed: {
			base: 1620,
			scale: -1
		},
		power: {
			base: 36,
			scale: 3.4,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 150,
			scale: 2,
			inner: 0,
		},
		rangeType: 'cross',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 2],
	},
	tarountula: {
		id: 97,
		key: 'tarountula',
		name: [
		  	"Tarountula",
		  	"Tarountula",
		  	"Tissenboule",
		  	"Tarountula",
		  	"Tarountula",
		  	"Tarundel",
		  	"タマンチュラ",
		  	"타랜툴라",
		  	"团珠蛛",
		  	"Tarountula"
		],
		color: '#bea706',
		ability: abilityData['slowRicochet'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		ricochet: 2,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/tarountula.png',
			image: './src/assets/images/pokemon/normal/tarountula-idle.png',
			frames: 7,
			hold: 4
		},
		speed: {
			base: 3200,
			scale: -3
		},
		power: {
			base: 11,
			scale: 3,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 140,
			scale: 0.4,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
		evolution: {
			pokemon: 'spidops',
			level: 15
		},	
	},
	spidops: {
		id: 97,
		key: 'spidops',
		name: [
		  	"Spidops",
		  	"Spidops",
		  	"Filentrappe",
		  	"Spidops",
		  	"Spidops",
		  	"Spinsidias",
		  	"ワナイダー",
		  	"트래피더",
		  	"操陷蛛",
		  	"Spidops"
		],
		color: '#90c04d',
		ability: abilityData['slowRicochet'],
		projectileSound: 'projectile3',
		projectileSpeed: 7,
		ricochet: 3,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/spidops.png',
			image: './src/assets/images/pokemon/normal/spidops-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3000,
			scale: -4
		},
		power: {
			base: 35,
			scale: 6.3,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 160,
			scale: 0.8,
			inner: 0,
		},
		rangeType: 'xShape',
		attackType: 'single',
		costScale: 'low',
		tiles: [1, 2],
	},
	totodile: {
		id: 98,
		key: 'totodile',
		name: [
		  	"Totodile",
		  	"Totodile",
		  	"Kaiminus",
		  	"Totodile",
		  	"Totodile",
		  	"Karnimani",
		  	"ワニノコ",
		  	"리아코",
		  	"小锯鳄",
		  	"Totodile"
		],
		color: '#1e9ee7',
		ability: abilityData['torrent'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/totodile.png',
			image: './src/assets/images/pokemon/normal/totodile-idle.png',
			frames: 7,
			hold: 10
		},
		speed: {
			base: 2500,
			scale: -4
		},
		power: {
			base: 12,
			scale: 6,
		},
		critical: {
			base: 3,
			scale: 0
		},
		range: {
			base: 110,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'croconaw',
			level: 18,
		},	
	},
	croconaw: {
		id: 98,
		key: 'croconaw',
		name: [
		  	"Croconaw",
		  	"Croconaw",
		  	"Crocrodil",
		  	"Croconaw",
		  	"Croconaw",
		  	"Feuerkroko",
		  	"アリゲイツ",
		  	"엘리게이",
		  	"蓝鳄",
		  	"Croconaw"
		],
		color: '#deb700',
		ability: abilityData['torrent'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/croconaw.png',
			image: './src/assets/images/pokemon/normal/croconaw-idle.png',
			frames: 2,
			hold: 15
		},
		speed: {
			base: 1900,
			scale: -4
		},
		power: {
			base: 25,
			scale: 9.3,
		},
		critical: {
			base: 6,
			scale: 0
		},
		range: {
			base: 120,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
		evolution: {
			pokemon: 'feraligatr',
			level: 30,
		},	
	},
	feraligatr: {
		id: 98,
		key: 'feraligatr',
		name: [
		  	"Feraligatr",
		  	"Feraligatr",
		  	"Aligatueur",
		  	"Feraligatr",
		  	"Feraligatr",
		  	"Impergator",
		  	"オーダイル",
		  	"장크로다일",
		  	"大力鳄",
		  	"Feraligatr"
		],
		color: '#1c7fc2',
		ability: abilityData['torrent'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/feraligatr.png',
			image: './src/assets/images/pokemon/normal/feraligatr-idle.png',
			frames: 6,
			hold: 10
		},
		speed: {
			base: 1500,
			scale: -4
		},
		power: {
			base: 100,
			scale: 14,
		},
		critical: {
			base: 15,
			scale: 0
		},
		range: {
			base: 130,
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1, 3],
	},
	fennekin: {
		id: 99,
		key: 'fennekin',
		name: [
		    "Fennekin",
		    "Fennekin",
		    "Feunnec",
		    "Fennekin",
		    "Fennekin",
		    "Fynx",
		    "フォッコ",
		    "푸호꼬",
		    "火狐狸",
		    "Fennekin"
		],
		color: '#ff764c',
		ability: abilityData['magician'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/fennekin.png',
			image: './src/assets/images/pokemon/normal/fennekin-idle.png',
			frames: 4,
			hold: 15
		},
		speed: {
			base: 3800,
			scale: -9
		},
		power: {
			base: 20,
			scale: 3.2,
		},
		critical: {
			base: 5,
			scale: 0.1
		},
		range: {
			base: 120,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'braixen',
			level: 16,
		},	
	},
	braixen: {
		id: 99,
		key: 'braixen',
		name: [
		    "Braixen",
		    "Braixen",
		    "Roussil",
		    "Braixen",
		    "Braixen",
		    "Fynx",
		    "フォッコ",
		    "폭시",
		    "火狐狸",
		    "Braixen"
		],
		color: '#dea73b',
		ability: abilityData['magician'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/braixen.png',
			image: './src/assets/images/pokemon/normal/braixen-idle.png',
			frames: 14,
			hold: 8
		},
		speed: {
			base: 3500,
			scale: -12
		},
		power: {
			base: 40,
			scale: 7.2,
		},
		critical: {
			base: 10,
			scale: 0.2
		},
		range: {
			base: 130,
			scale: 0.1,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
		evolution: {
			pokemon: 'delphox',
			level: 36,
		},	
	},
	delphox: {
		id: 99,
		key: 'delphox',
		name: [
		    "Delphox",
		    "Delphox",
		    "Goupelin",
		    "Delphox",
		    "Delphox",
		    "Fennexis",
		    "テールナー",
		    "테르나",
		    "炎兔儿",
		    "Delphox"
		],
		color: '#c73e40',
		ability: abilityData['magician'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['red1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/delphox.png',
			image: './src/assets/images/pokemon/normal/delphox-idle.png',
			frames: 4,
			hold: 10
		},
		speed: {
			base: 3000,
			scale: -20
		},
		power: {
			base: 80,
			scale: 14.2,
		},
		critical: {
			base: 15,
			scale: 0.35
		},
		range: {
			base: 140,
			scale: 0.2,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'mid',
		tiles: [1],
	},
	turtwig: {
		id: 100,
		key: 'turtwig',
		name: [
		    "Turtwig",
		    "Turtwig",
		    "Tortipouss",
		    "Turtwig",
		    "Turtwig",
		    "Chelast",
		    "ナエトル",
		    "모부기",
		    "草苗龟",
		    "Turtwig"
		],
		color: '#7fde56',
		ability: abilityData['overgrow'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/turtwig.png',
			image: './src/assets/images/pokemon/normal/turtwig-idle.png',
			frames: 4,
			hold: 10
		},
		speed: {
			base: 3400,
			scale: -2 
		},
		power: {
			base: 12,
			scale: 1.8,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 115, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'grotle',
			level: 18,
		},	
	},
	grotle: {
		id: 100,
		key: 'grotle',
		name: [
		    "Grotle",
		    "Grotle",
		    "Boskara",
		    "Grotle",
		    "Grotle",
		    "Chelcarain",
		    "ハヤシガメ",
		    "대짱이",
		    "树林龟",
		    "Grotle"
		],
		color: '#67ae37',
		ability: abilityData['overgrow'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/grotle.png',
			image: './src/assets/images/pokemon/normal/grotle-idle.png',
			frames: 8,
			hold: 9
		},
		speed: {
			base: 3200,
			scale: -2 
		},
		power: {
			base: 15,
			scale: 2.5,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 130, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 2],
		evolution: {
			pokemon: 'torterra',
			level: 32,
		},	
	},
	torterra: {
		id: 100,
		key: 'torterra',
		name: [
		    "Torterra",
		    "Torterra",
		    "Torterra",
		    "Torterra",
		    "Torterra",
		    "Chelterrar",
		    "ドダイトス",
		    "덩쿠리",
		    "土台龟",
		    "Torterra"
		],
		color: '#c69e5f',
		ability: abilityData['grassyTerrain'],
		projectileSound: 'area1',
		projectileSpeed: 7,
		projectile: projectileData['green1'],
		sprite: {
			base: './src/assets/images/pokemon/normal/torterra.png',
			image: './src/assets/images/pokemon/normal/torterra-idle.png',
			frames: 5,
			hold: 30
		},
		speed: {
			base: 2800,
			scale: -3
		},
		power: {
			base: 30,
			scale: 3.7,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 155, 
			scale: 0,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'area',
		costScale: 'mid',
		tiles: [1, 2],
	},
	carbink: {
		id: 101,
		key: 'carbink',
		name: [
		  	"Carbink",
		  	"Carbink",
		  	"Strassie",
		  	"Carbink",
		  	"Carbink",
		  	"Rocara",
		  	"メレシー",
		  	"멜리시",
		  	"小碎鑽",
		  	"Carbink"
		],
		color: '#84a7c5',
		ability: abilityData['criticalAura'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['blue4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/carbink.png',
			image: './src/assets/images/pokemon/normal/carbink-idle.png',
			frames: 6,
			hold: 10
		},
		speed: {
			base: 0,
			scale: 0
		},
		power: {
			base: 0,
			scale: 0,
		},
		critical: {
			base: 0,
			scale: 0
		},
		range: {
			base: 100,
			scale: 0.8,
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'aura',
		costScale: 'mid',
		tiles: [1, 4],
	},
	gholdengo: {
		id: 102,
		key: 'gholdengo',
		name: [
		  	"Gholdengo",
		  	"Gholdengo",
		  	"Gromago",
		  	"Gholdengo",
		  	"Gholdengo",
		  	"Monetigo",
		  	"サーフゴー",
		  	"타부자고",
		  	"赛富豪",
		  	"Gholdengo"
		],
		color: '#efcf00',
		ability: abilityData['makeItRain'],
		projectileSound: 'projectile1',
		projectileSpeed: 7,
		projectile: projectileData['yellow3'],
		sprite: {
			base: './src/assets/images/pokemon/normal/gholdengo.png',
			image: './src/assets/images/pokemon/normal/gholdengo-idle.png',
			imageWater: './src/assets/images/pokemon/normal/gholdengo-water-idle.png',
			frames: 7,
			framesWater: 4,
			hold: 10
		},
		speed: {
			base: 1500,
			scale: -5
		},
		power: {
			base: 50, 
			scale: 9.5,
		},
		critical: {
			base: 0, 
			scale: 0
		},
		range: {
			base: 140, 
			scale: 0, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 3, 4],
	},
	missingNo: {
		id: 404,
		key: 'missingNo',
		name: [
		  	"MissingNo.",
		  	"MissingNo.",
		  	"MissingNo.",
		  	"MissingNo.",
		  	"MissingNo.",
		  	"MissingNo.",
		  	"MissingNo.",
		  	"MissingNo.",
		  	"MissingNo.",
		  	"MissingNo."
		],
		color: '#9fcf6f',
		ability: abilityData['invalidState'],
		projectileSound: 'projectile5',
		projectileSpeed: 7,
		projectile: projectileData['purple4'],
		sprite: {
			base: './src/assets/images/pokemon/normal/missingNo.png',
			image: './src/assets/images/pokemon/normal/missingNo-idle.png',
			frames: 9,
			hold: 10
		},
		speed: {
			base: 1000,
			scale: -9,
		},
		power: {
			base: 1, 
			scale: 1,
		},
		critical: {
			base: 0.1,
			scale: 0.1,
		},
		range: {
			base: 110,
			scale: 0, 
			inner: 0,
		},
		rangeType: 'circle',
		attackType: 'single',
		costScale: 'high',
		tiles: [1, 2, 3, 4],
	},
	// phione: {
	// 	id: 103,
	// 	key: 'phione',
	// 	name: [
	// 		"Phione",
	// 		"Phione",
	// 		"Phione",
	// 		"Phione",
	// 		"Phione",
	// 		"Phione",
	// 		"フィオネ",
	// 		"피오네",
	// 		"霏歐納",
	// 		"Phione"
	// 	],
	// 	color: '#5cb0fa',
	// 	ability: abilityData['focus'],
	// 	projectileSound: 'projectile3',
	// 	projectileSpeed: 7,
	// 	projectile: projectileData['blue5'],
	// 	sprite: {
	// 		base: './src/assets/images/pokemon/normal/phione.png',
	// 		image: './src/assets/images/pokemon/normal/phione-idle.png',
	// 		frames: 16,
	// 		hold: 6
	// 	},
	// 	speed: {
	// 		base: 2000,
	// 		scale: 0
	// 	},
	// 	power: {
	// 		base: 1,
	// 		scale: 0,
	// 	},
	// 	critical: {
	// 		base: 0,
	// 		scale: 0
	// 	},
	// 	range: {
	// 		base: 120,
	// 		scale: 0,
	// 		inner: 0,
	// 	},
	// 	rangeType: 'circle',
	// 	attackType: 'single',
	// 	costScale: 'high',
	// 	tiles: [1, 2],
	// },
	// manaphy: {
	// 	id: 104,
	// 	key: 'manaphy',
	// 	name: [
	// 		"Manaphy",
	// 		"Manaphy",
	// 		"Manaphy",
	// 		"Manaphy",
	// 		"Manaphy",
	// 		"Manaphy",
	// 		"マナフィ",
	// 		"마나피",
	// 		"瑪納霏",
	// 		"Manaphy"
	// 	],
	// 	color: '#7fd7e7',
	// 	ability: abilityData['focus'],
	// 	projectileSound: 'projectile3',
	// 	projectileSpeed: 7,
	// 	projectile: projectileData['blue5'],
	// 	sprite: {
	// 		base: './src/assets/images/pokemon/normal/manaphy.png',
	// 		image: './src/assets/images/pokemon/normal/manaphy-idle.png',
	// 		frames: 10,
	// 		hold: 10
	// 	},
	// 	speed: {
	// 		base: 2000,
	// 		scale: 0
	// 	},
	// 	power: {
	// 		base: 1,
	// 		scale: 0,
	// 	},
	// 	critical: {
	// 		base: 0,
	// 		scale: 0
	// 	},
	// 	range: {
	// 		base: 120,
	// 		scale: 0,
	// 		inner: 0,
	// 	},
	// 	rangeType: 'circle',
	// 	attackType: 'single',
	// 	costScale: 'high',
	// 	tiles: [1, 2],	
	// },
	// nickit: {
	// 	id: 18,
	// 	key: 'nickit',
	// 	name: ['meowth', 'meowth', 'Miaouss', 'meowth', 'meowth', 'mauzi', 'ニャース', '나옹', '喵喵', 'meowth'],
	// 	color: '#d6bd62',
	// 	ability: abilityData['greed'],
	// 	projectileSound: 'projectile3',
	// 	projectileSpeed: 7,
	// 	projectile: projectileData['purple1'],
	// 	sprite: {
	// 		base: './src/assets/images/pokemon/normal/nickit.png',
	// 		image: './src/assets/images/pokemon/normal/nickit-idle.png',
	// 		frames: 4,
	// 		hold: 10
	// 	},
	// 	speed: {
	// 		base: 1700,
	// 		scale: -5
	// 	},
	// 	power: {
	// 		base: 18,
	// 		scale: 1.4,
	// 	},
	// 	critical: {
	// 		base: 10,
	// 		scale: 0.3
	// 	},
	// 	range: {
	// 		base: 110,
	// 		scale: 0,
	// 		inner: 0,
	// 	},
	// 	rangeType: 'circle',
	// 	attackType: 'single',
	// 	costScale: 'mid',
	// 	tiles: [1, 2],
	// 	evolution: {
	// 		pokemon: 'thievul',
	// 		level: 28
	// 	},	
	// },
	// thievul: {
	// 	id: 18,
	// 	key: 'thievul',
	// 	name: ['persian', 'persian', 'Persian', 'persian', 'persian', 'snobilikat', 'ペルシアン', '페르시온', '貓老大', 'persian'],
	// 	color: '#fff79d',
	// 	ability: abilityData['greed'],
	// 	projectileSound: 'projectile3',
	// 	projectileSpeed: 7,
	// 	projectile: projectileData['purple1'],
	// 	sprite: {
	// 		base: './src/assets/images/pokemon/normal/thievul.png',
	// 		image: './src/assets/images/pokemon/normal/thievul-idle.png',
	// 		frames: 8,
	// 		hold: 15
	// 	},
	// 	speed: {
	// 		base: 1600,
	// 		scale: -10
	// 	},
	// 	power: {
	// 		base: 35,
	// 		scale: 2.7,
	// 	},
	// 	critical: {
	// 		base: 25,
	// 		scale: 0.5
	// 	},
	// 	range: {
	// 		base: 130,
	// 		scale: 0,
	// 		inner: 0,
	// 	},
	// 	rangeType: 'circle',
	// 	attackType: 'single',
	// 	costScale: 'mid',
	// 	tiles: [1, 2],	
	// },
}

export const eggListData = [
	'charmander', 'treecko', 'froaki', 

	'natu', 'spoink', 'murkrow',
	'voltorb', 'machop', 'mankey', 'chimchar', 
	'yamask', 'cryogonal', 'sableye', 'meowth', 'tangela', 'chikorita', 
	'spinarak', 'shroomish', 'barboach', 'drudiggon', 'remoraid', 'clauncher', 
	'seel', 'staryu', 'psyduck', 'gulpin', 'lapras', 
	'ferroseed', 'shuckle', 'maractus', 'sunkern', 'aron', 'hawlucha', 
	'cubone', 'binacle', 'absol', 'oshawott', 'sandshrew', 'sneasel', 
	'trapinch', 'pidgey', 'noibat', 'riolu', 'mareep', 'surskit', 
	'cottonee', 'petilil', 'hoppip', 'drilbur', 'ekans',
	'girafarig', 'torkoal', 'spinda', 'dunsparce', 'ralts', 'koffing', 
	'farfetchd', 'omanyte', 'kabuto', 'corsola', 
	'castform', 'clefairy', 'anorith', 'lileep', 'shieldon', 'cranidos', 
	'starly', 'abra', 'gastly', 'ditto', 

	'magikarp', 'pikachu', 'fuecoco', 'larvesta', 'cherubi',
	'rockruff', 'pawniard', 'sandile', 'wimpod', 'honedge', 
	'sobble', 'rowlet', 'comfey', 'smeargle', 'carvanha', 
]

export const eggListDataUpdate = [
	'magikarp', 'pikachu', 'fuecoco', 'larvesta', 'cherubi',
	'rockruff', 'pawniard', 'sandile', 'wimpod', 'honedge', 
	'sobble', 'rowlet', 'comfey', 'smeargle', 'carvanha', 
]

const secretPokemon = [
	'chatot', 'luvdisc', 'cacturne', 'stakataka', 'greavard', 'gholdengo', 'missingNo', 
]

const challengePokemon = [
	'wingull', 'inkay', 'totodile', 'turtwig', 'hoothoot', 'tarountula', 'archen', 'carbink', 'vulpix', 'munna', 'bidoof', 'fennekin'
]

export const allPokemon = [
	...eggListData, ...secretPokemon, ...challengePokemon
]

export const pokemonDataById = {};
for (const key in pokemonData) {
    const specie = pokemonData[key];
    pokemonDataById[specie.id] = specie;
}
