import { enemyData as e } from './enemyData.js';

export const waveData = {
	// AREA 1
	0: {
		// VERSION 1
		// 1: {
		// 	preview: [e.rattata, e.ledyba],
		// 	dangerLevel: 1,
		// 	wave: {
		// 		0: {
		// 			enemy: e.rattata,
		// 			amount: 10,
		// 			pattern: linear,
		// 			startAt: 0,
		// 		},
		// 		1: {
		// 			enemy: e.ledyba,
		// 			amount: 10,
		// 			pattern: linear,
		// 			startAt: 6
		// 		},
		// 	},
		// },

		// // VERSION 2
		// 1: {
		// 	preview: [e.rattata, e.ledyba],
		// 	dangerLevel: 1,
		// 	wave: {
		// 		0: {
		// 			enemy: e.rattata,
		// 			amount: 10,
		// 			pattern: linear,
		// 			wait: 5,
		// 		},
		// 		1: {
		// 			enemy: e.ledyba,
		// 			amount: 10,
		// 			pattern: linear,
		// 			wait: null
		// 		},
		// 	},
		// },
		1: {
			preview: [e.rattata],
			wave: [
				e.rattata, e.rattata, e.rattata,
			],
		},
		2: {
			preview: [e.rattata, e.ledyba],
			wave: [
				e.rattata, e.rattata, e.rattata, null, null, null,
				e.rattata, e.ledyba
			],
		},
		3: {
			preview: [e.rattata, e.ledyba],
			wave: [
				e.ledyba, e.ledyba, 
				e.rattata, e.rattata, e.rattata, null, null, null,
				e.ledyba, e.ledyba, 
			]
		},
		4: {
			preview: [e.rattata, e.ledyba],
			wave: [
				e.rattata, e.rattata, null, null, null,
				e.ledyba, e.ledyba, e.ledyba,
				e.rattata, e.rattata, e.rattata, e.rattata
			],
		},
		5: {
			preview: [e.rattata, e.rookidee],
			wave: [
				e.rattata, e.rattata, e.rattata, e.rattata, 
				e.rookidee,
			],
		},
		6: {
			preview: [e.ledyba, e.rookidee],
			wave: [
				e.rookidee,
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba
			],
		},
		7: {
			preview: [e.rattata, e.ledyba, e.rookidee],
			wave: [
				e.rookidee, e.rookidee, 
				null, null, null, null, null, null, null, 
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, 
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, 
			],
		},
		8: {
			preview: [e.doduo],
			wave: [
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
			],
		},
		9: {
			preview: [e.rattata, e.rookidee],
			wave: [
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,	
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee,
			],
		},
		10: {
			preview: [e.rattata, e.chingling],
			wave: [
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				null, null, null, 
				e.chingling
			],
		},
		11: {
			preview: [e.rattata, e.ledyba, e.rookidee],
			wave: [
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba,
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee,
				null, null, null, null, null, null, null, null, null, null, 
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
			],
		},
		12: {
			preview: [e.doduo],
			wave: [
				 e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
			],
		},
		13: {
			preview: [e.rattata, e.rookidee,],
			wave: [
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee,
				null, null, null, null, null, null, null, null, null, null, 
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, 
			],
		},
		14: {
			preview: [e.rookidee],
			wave: [
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee,
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee,
			],
		},
		15: {
			preview: [e.doduo, e.chingling],
			wave: [
				e.chingling, e.chingling, e.chingling,
				null, null, null, null, null, null,  
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
			],	
		},
		16: {
			preview: [e.rattata, e.raticate],
			wave: [
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, 
				null,
				e.raticate, e.raticate, 
				null,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
			],
		},
		17: {
			preview: [e.rattata, e.ledyba, e.raticate],
			wave: [
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.raticate, e.raticate,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba,
			],
		},
		18: {
			preview: [e.rookidee, e.bellsprout],
			wave: [
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee,
			],
		},
		19: {
			preview: [e.bellsprout, e.raticate],
			wave: [
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				null, null, null,
				e.raticate, e.raticate, 
			],
		},
		20: {
			preview: [e.rookidee, e.bonsly],
			wave: [
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee,
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.bonsly
			],
		},
		21: {
			preview: [e.chingling, e.bellsprout, e.raticate],
			wave: [
				e.chingling, e.chingling, e.chingling, 
				null, null,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				null, null,
				e.raticate, e.raticate, e.raticate, e.raticate, 
			],
		},
		22: {
			preview: [e.bellsprout, e.raticate],
			wave: [
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				null, null,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				null, null,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,
			],
		},
		23: {
			preview: [e.rattata, e.ledyba, e.rookidee],
			wave: [
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee,
				null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,  
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba,
			],
		},
		24: {
			preview: [e.doduo],
			wave: [
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
				null, null,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
				null, null,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
			],
		},
		25: {
			preview: [e.chingling, e.bonsly, e.bellsprout, e.raticate],
			wave: [
				e.chingling, e.chingling, e.chingling, e.chingling, 
				e.bonsly, e.bonsly, 
				null, null, null, null, null, null, null, null, null,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate
			],
		},
		26: {
			preview: [e.rookidee, e.bonsly],
			wave: [
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, null, null,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, null, null,
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee,

			],
		},
		27: {
			preview: [e.rattata, e.ledyba, e.bonsly],
			wave: [
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba,
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				
			],
		},
		28: {
			preview: [e.chingling, e.bonsly, e.raticate],
			wave: [
				e.chingling, e.chingling, e.chingling, e.chingling, e.chingling,
				null,
				e.raticate, e.raticate, e.raticate,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.raticate, e.raticate,
			],
		},
		29: {
			preview: [e.rattata, e.raticate],
			wave: [
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, 
				null, null, null, null, null, 
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
			],
		},
		30: {
			preview: [e.ledyba, e.ledian],
			wave: [
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba,
				e.ledian, 
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, 
				
			],
		},
		31: {
			preview: [e.bellsprout, e.weepinbell, e.delibird],
			wave: [
				e.weepinbell, 
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,
				e.weepinbell, 
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,
				e.weepinbell, 
				e.delibird,
			],
		},
		32: {
			preview: [e.rattata, e.raticate],
			wave: [
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, null, null,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, null, null,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, null, null,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, null, null,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, null, null,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
			],
		},
		33: {
			preview: [e.bonsly, e.bellsprout, e.doduo],
			wave: [
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,
				e.bonsly, e.bonsly, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,  
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,	
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
			],
			
		},
		34: {
			preview: [e.rattata, e.ledyba, e.rookidee, e.raticate, e.ledian],
			wave: [
				e.ledian,
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba,
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee,
				null, null, null, null, null, null, null, null, null, null, 

				e.raticate, e.raticate,  null, 
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				null, null, null, 
				e.raticate, e.raticate,  null, 
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.ledian,
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba,		
			],
		},
		35: {
			preview: [e.ledian, e.weepinbell, e.ditto],
			wave: [
				e.ditto, e.ditto, e.ditto,
				null, null, null, null, null, null,
				e.ledian, e.ledian, e.ledian,
				
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
			],
		},
		36: {
			preview: [e.doduo],
			wave: [
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
			],
		},
		37: {
			preview: [e.rattata, e.ledyba, e.chingling, e.bonsly, e.bellsprout],
			wave: [
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba,

				e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, 
				e.chingling, e.chingling,

				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, 
				null, 
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				null, null, null, null,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, 
				null, 
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
			],
		},
		38: {
			preview: [e.rookidee, e.bonsly, e.raticate],
			wave: [
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, 
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, 

				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,
				null,
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee,
				null,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, 
				null,
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, 
				null,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,
			],
		},
		39: {
			preview: [e.ledyba, e.bellsprout, e.ledian, e.weepinbell],
			wave: [
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, 
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, 

				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				
			],
		},
		40: {
			preview: [e.chingling, e.chimecho],
			wave: [
				e.chingling, e.chingling, e.chingling, e.chingling, e.chingling,  e.chingling, e.chingling, null, null,
				e.chingling, e.chingling, e.chingling,
				e.chimecho,
				e.chingling, e.chingling, e.chingling, null, null,
				e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling,
			],
		},
		41: {
			preview: [e.raticate, e.ledian],
			wave: [
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, 
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
			],
		},
		42: {
			preview: [e.rattata, e.ledyba, e.raticate, e.ledian],
			wave: [
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, 
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba,

				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null,
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, 
			],
			
		},
		43: {
			preview: [e.delibird],
			wave: [
				e.delibird, null,  null, e.delibird, null,  null, e.delibird
			],
		},
		44: {
			preview: [e.bonsly, e.bellsprout, e.weepinbell],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,

				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,
			]
		},
		45: {
			preview: [e.bonsly, e.bellsprout, e.raticate, e.ledian, e.weepinbell],
			wave: [
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, 
				e.ledian, e.ledian, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,
				e.bonsly, e.bonsly, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				e.bellsprout, e.bellsprout, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.raticate, e.raticate,
			]
		},
		46: {
			preview: [e.ledyba, e.doduo, e.ledian],
			wave: [
				e.doduo, e.doduo, 
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
			],		
		},
		47: {
			preview: [e.doduo, e.weepinbell],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				null, null, null,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
			],
		},
		48: {
			preview: [e.bonsly, e.raticate, e.ledian],
			wave: [
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, 
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,				
			],
		},
		49: {
			preview: [e.raticate, e.ledian, e.weepinbell],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, 
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
			],
		},
		50: {
			preview: [e.rookidee, e.corvisquire],
			wave: [
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee,				
			],
		},
		51: {
			preview: [e.raticate, e.ledian, e.chimecho],
			wave: [
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, 
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, 
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, 
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, 
			],
		},
		52: {
			preview: [e.chimecho, e.corvisquire],
			wave: [
				e.corvisquire, e.corvisquire, 
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, 
				e.corvisquire, e.corvisquire, 
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, 
				e.corvisquire, e.corvisquire, 
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, 
			],
		},
		53: {
			preview: [e.ledian],
			wave: [
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian
			],
		},
		54: {
			preview: [e.rookidee, e.chingling, e.chimecho, e.corvisquire],
			wave: [
				e.chimecho,
				e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling,
				e.chimecho,

				e.corvisquire,
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee,
				e.corvisquire,	
			],
		},
		55: {
			preview: [e.corvisquire],
			wave: [
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
			],
		},
		56: {
			preview: [e.ledian, e.weepinbell, e.corvisquire],
			wave: [
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, 
				null, null, null, null, null, null, null, null,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
			],
		},
		57: {
			preview: [e.ledian, e.weepinbell, e.corvisquire],
			wave: [
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,  e.corvisquire, e.corvisquire, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
			],
			
		},
		58: {
			preview: [e.raticate, e.ledian, e.chimecho, e.corvisquire],
			wave: [
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				null, null, null, 
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				null, null, null, null, null, null, null, null, null, null, null, 
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
			],
		},
		59: {
			preview: [e.doduo],
			wave: [
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
			],
			
		},
		60: {
			preview: [e.doduo, e.dodrio],
			wave: [
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio
			],
		},
		61: {
			preview: [e.ledian, e.corvisquire],
			wave: [
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, 
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, 
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
			],
		},
		62: {
			preview: [e.ledian, e.corvisquire, e.dodrio],
			wave: [
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, 
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, 
				e.dodrio, e.dodrio,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio,
			],
		},
		63: {
			preview: [e.chingling, e.bonsly, e.raticate, e.weepinbell],
			wave: [
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, 
				e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, 
				null, null, null, null, null, null,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				null, null, null, null,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, 
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, 
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, 
			],
		},
		64: {
			preview: [e.ledyba, e.doduo, e.bonsly, e.corvisquire, e.dodrio],
			wave: [
				e.bonsly, e.bonsly, e.bonsly, e.corvisquire, e.corvisquire, e.corvisquire, e.bonsly, e.bonsly, e.bonsly, 
				e.corvisquire, e.corvisquire, e.corvisquire, e.bonsly, e.bonsly, e.bonsly, e.corvisquire, e.corvisquire, e.corvisquire,

				null, null, null, null, null, null, null, null, null, null, null, null,
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba,
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba,

				null, null, null, null, null, null, null, null, null, null, null, null,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, 
				null, null, null, null, null, null,
				e.dodrio, 
				null, null, null, null, null, null,
				e.dodrio
			],
		},
		65: {
			preview: [e.chingling, e.raticate, e.corvisquire],
			wave: [
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling, e.chingling,
				e.chingling, e.chingling,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.raticate, e.raticate,
			],
		},
		66: {
			preview: [e.ledian, e.chimecho, e.corvisquire, e.dodrio, e.weepinbell],
			wave: [
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio,
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho,
				e.dodrio, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.dodrio,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, 

			],
		},
		67: {
			preview: [e.dodrio],
			wave: [
				e.dodrio, e.dodrio, e.dodrio, e.dodrio,  null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		68: {
			preview: [e.rattata, e.ledyba, e.rookidee, e.doduo, e.chingling],
			wave: [
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee,

				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, e.rattata,
				e.rattata, e.rattata, e.rattata, e.rattata, e.rattata, 

				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba,
				e.chingling, e.chingling, e.chingling, e.chingling, e.chingling,

				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,

				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba,
				e.ledyba, e.ledyba, e.ledyba, e.ledyba, e.ledyba, 

				
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, e.doduo,
			],
		},
		69: {
			preview: [e.bellsprout, e.weepinbell, e.ditto],
			wave: [
				e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, 
				e.ditto, e.ditto,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.ditto, e.ditto,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,		
			],
		},
		70: {
			preview: [e.bellsprout, e.weepinbell, e.chansey],
			wave: [
				e.chansey, 
				null, null, null, null, null,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout, e.bellsprout,
			],
		},
		71: {
			preview: [e.ledian, e.dodrio],
			wave: [
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio,
				null, null, null,
				e.dodrio, e.dodrio,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio,
				null, null, null,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio,
				null, null, null, null, null, null, null,
				e.dodrio, e.dodrio,
			],
		},
		72: {
			preview: [e.corvisquire, e.chansey],
			wave: [
				e.chansey,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, 
				e.chansey,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
			],
		},
		73: {
			preview: [e.dodrio, e.chansey],
			wave: [
				e.chansey, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null,
				e.chansey,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		74: {
			preview: [e.ledian, e.chimecho, e.corvisquire, e.dodrio, e.chansey],
			wave: [
				e.chansey,
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho,
				e.chansey, 
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, 
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		75: {
			preview: [e.chansey, e.ditto],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, 
				null, null, null, null, null, null,
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, 
			],
		},
		76: {
			preview: [e.chingling, e.ledian, e.chimecho, e.dodrio, e.chansey],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey,
				e.chingling, e.chingling, e.chingling, e.chingling, 
				e.chansey, e.chansey, e.chansey, e.chansey,
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho,
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho,
				e.chingling, e.chingling, e.chingling, e.chingling, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho, e.chimecho,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio,
			],
		},
		77: {
			preview: [e.corvisquire, e.weepinbell, e.chansey],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
			],
		},
		78: {
			preview: [e.ledian, e.chansey],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
			],
		},
		79: {
			preview: [e.delibird],
			wave: [
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, 
			],
		},
		80: {
			preview: [e.illumise, e.volbeat],
			wave: [
				e.illumise, e.volbeat
			],
		},
		81: {
			preview: [e.dodrio],
			wave: [
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		82: {
			preview: [e.doduo, e.dodrio, e.weepinbell],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.doduo, e.doduo, e.doduo, e.doduo, e.doduo, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		83: {
			preview: [e.chansey, e.volbeat],
			wave: [
				e.volbeat, e.chansey, e.chansey, e.chansey,
			],
		},
		84: {
			preview: [e.chansey, e.illumise],
			wave: [
				 e.illumise, e.chansey, e.chansey, e.chansey,
			],
		},
		85: {
			preview: [e.chansey, e.illumise, e.volbeat],
			wave: [
				e.illumise, 
				e.volbeat,
				e.chansey, e.chansey, e.chansey,
				null, null,
				e.chansey, e.chansey, e.chansey,
			],
		},
		86: {
			preview: [e.corvisquire, e.chansey, e.volbeat],
			wave: [
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, 
				null, null, null, null, null,
				e.chansey, e.chansey, e.chansey, 
				e.volbeat, e.volbeat
			],
		},
		87: {
			preview: [e.corvisquire, e.chansey, e.illumise],
			wave: [
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, 
				null, null, null, null, null,
				e.chansey, e.chansey, e.chansey, 
				e.illumise, e.illumise
			],
		},
		88: {
			preview: [e.rookidee, e.bonsly, e.corvisquire, e.illumise, e.volbeat],
			wave: [
				e.volbeat, 
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, 
				e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, e.rookidee, 
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, 
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.illumise,
			],
		},
		89: {
			preview: [e.bellsprout, e.weepinbell, e.ditto],
			wave: [
				e.ditto, e.ditto, e.ditto,

				null, null,

				e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, 

				null, null,

				e.ditto, e.ditto, e.ditto, null, null,

				e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell,
				e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				null, null,

				e.ditto, e.ditto, e.ditto, 

				null, null,

				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell,
				e.bellsprout, e.weepinbell, e.bellsprout, e.weepinbell, e.bellsprout,
			],
		},
		90: {
			preview: [e.corvisquire, e.phantum],
			wave: [
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.phantum, e.phantum, e.phantum, e.phantum
			],
		},
		91: {
			preview: [e.doduo, e.dodrio, e.ditto],
			wave: [
				e.ditto, e.ditto, e.ditto,
				e.ditto, e.ditto, e.ditto,
				e.doduo, e.doduo, e.doduo, e.doduo, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.doduo, e.doduo, 
				e.ditto, e.ditto, e.ditto,
				e.ditto, e.ditto, e.ditto,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.ditto, e.ditto, e.ditto,
				e.ditto, e.ditto, e.ditto, 
				e.doduo, e.doduo, e.dodrio, e.dodrio, e.dodrio, e.doduo, e.doduo, e.dodrio, e.doduo, e.doduo, 
				e.doduo, e.doduo, e.dodrio, e.dodrio, e.dodrio, e.doduo, e.doduo, e.dodrio, e.doduo, e.doduo, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,

			],
		},
		92: {
			preview: [e.raticate, e.ledian, e.chimecho, e.dodrio, e.trevenant],
			wave: [
				e.trevenant, e.trevenant, e.trevenant,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.chimecho, e.chimecho,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate, e.raticate,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.trevenant, e.trevenant, e.trevenant,
				e.chimecho, e.chimecho,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,

			],
		},
		93: {
			preview: [e.chansey, e.trevenant],
			wave: [
				e.chansey,
				e.trevenant, e.trevenant, e.trevenant,
				e.chansey, e.chansey,
				e.trevenant, e.trevenant, e.trevenant,
				e.chansey, e.chansey,
				e.trevenant, e.trevenant, e.trevenant,
				e.chansey, e.chansey,
			],
		},
		94: {
			preview: [e.dodrio, e.illumise, e.phantum],
			wave: [
				e.phantum,
				e.illumise, e.illumise,  
				e.phantum,
				e.illumise, e.illumise, 
				e.phantum,
				e.illumise, e.illumise, 
				e.phantum,
				e.illumise, e.illumise, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
			],	
		},
		95: {
			preview: [e.dodrio, e.volbeat, e.phantum],
			wave: [
				e.phantum,
				e.volbeat, e.volbeat, 
				e.phantum,
				e.volbeat, e.volbeat, 
				e.phantum,
				e.volbeat, e.volbeat, 
				e.phantum,
				e.volbeat, e.volbeat, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
			],
		},
		96: {
			preview: [e.illumise, e.volbeat, e.phantum],
			wave: [
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum,
				e.illumise, e.volbeat, e.illumise, e.volbeat, e.illumise, e.volbeat,
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum,
			],
		},
		97: {
			preview: [e.ledian, e.chansey, e.illumise, e.volbeat],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, 
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.illumise, e.volbeat, e.illumise, e.volbeat, e.illumise, e.volbeat, e.illumise, e.volbeat, e.illumise, e.volbeat,
				e.illumise, e.volbeat, e.illumise, e.volbeat, e.illumise, e.volbeat, e.illumise, e.volbeat, e.illumise, e.volbeat,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
			],
		},
		98: {
			preview: [e.dodrio, e.chansey, e.illumise, e.volbeat],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.illumise, e.volbeat, e.illumise, e.volbeat, e.illumise, e.volbeat, e.illumise, e.volbeat, e.illumise, e.volbeat,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.illumise, e.volbeat, e.illumise, e.volbeat, e.illumise, e.volbeat, e.illumise, e.volbeat, e.illumise, e.volbeat,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
			],
		},
		99: {
			preview: [e.chansey, e.illumise, e.volbeat, e.trevenant],
			wave: [
				e.trevenant, e.trevenant, e.trevenant,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.trevenant, e.trevenant, e.trevenant,
				e.illumise, e.volbeat, e.volbeat, e.illumise,
				e.trevenant, e.trevenant, e.trevenant,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,	
				e.trevenant, e.trevenant, e.trevenant,
				e.volbeat, e.illumise, e.illumise, e.volbeat,
			],
		},
		100: {
			preview: [e.shaymin],
			wave: [
				e.shaymin
			],
		},
	},
	1: {
		1: {
			preview: [e.caterpie],
			wave: [
				e.caterpie, e.caterpie, e.caterpie, e.caterpie, e.caterpie, e.caterpie, e.caterpie, e.caterpie, e.caterpie, e.caterpie,
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, 
			],
		},
		2: {
			preview: [e.caterpie, e.metapod],
			wave: [
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
			],
		},
		3: {
			preview: [e.metapod],
			wave: [
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
			],
		},
		4: {
			preview: [e.caterpie, e.metapod, e.bonsly],
			wave: [
				
				e.bonsly, e.bonsly, 
				null, null, null, null,
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
				null, null, null, null,
				e.bonsly, e.bonsly, 
				e.metapod, e.metapod, e.metapod, e.metapod, 
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
			],
		},
		5: {
			preview: [e.caterpie, e.metapod],
			wave: [
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, e.caterpie, e.caterpie,
			],
		},
		6: {
			preview: [e.caterpie, e.metapod, e.bonsly],
			wave: [
				e.bonsly, 
				e.metapod, e.metapod, e.metapod,
				e.caterpie, e.caterpie,	e.caterpie, 
				e.metapod, e.metapod, e.metapod,
				e.bonsly,
				e.metapod, e.metapod, e.metapod,
				e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, 
			],
		},
		7: {
			preview: [e.metapod, e.bonsly],
			wave: [
				e.bonsly, e.bonsly, e.bonsly, e.bonsly,
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly,  
				
			],
		},
		8: {
			preview: [e.metapod, e.venonat],
			wave: [
				e.venonat, e.venonat, e.venonat, 
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
			],
		},
		9: {
			preview: [e.caterpie, e.metapod],
			wave: [
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				null, null, null, null, null, null, null,
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,
			],
		},
		10: {
			preview: [e.caterpie, e.metapod, e.butterfree],
			wave: [
				e.butterfree,
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
			],
		},
		11: {
			preview: [e.venonat],
			wave: [
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
			],
		},
		12: {
			preview: [e.bonsly, e.venonat],
			wave: [
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, 
				null, null, null, null, null, null, null, null,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				null, null, null, null, null, null, null, null,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
			],
		},
		13: {
			preview: [e.venonat, e.butterfree],
			wave: [
				e.venonat, e.venonat, e.venonat, null, e.butterfree, null,
				e.venonat, e.venonat, e.venonat, null, null, e.butterfree, null,
				e.venonat, e.venonat, e.venonat, null, null, e.butterfree,

			],
		},
		14: {
			preview: [e.caterpie, e.metapod, e.butterfree],
			wave: [
				e.butterfree,
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod,
				e.butterfree, 
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
				e.butterfree, 
			],
		},
		15: {
			preview: [e.corvisquire],
			wave: [
				e.corvisquire, e.corvisquire, e.corvisquire, 
			],
		},
		16: {
			preview: [e.corvisquire, e.weepinbell],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				null, 
				e.corvisquire, e.corvisquire, 
				null, null, null, null, null, null, null, null, null, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
			],
		},
		17: {
			preview: [e.metapod, e.corvisquire],
			wave: [
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, null, e.corvisquire, e.corvisquire,
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, null, e.corvisquire, e.corvisquire, 
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, null, e.corvisquire, e.corvisquire,
				null, null, null, null, null, null, e.corvisquire, e.corvisquire,
			],
		},
		18: {
			preview: [e.venonat, e.butterfree],
			wave: [
				e.butterfree, e.butterfree, e.butterfree,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
			],
		},
		19: {
			preview: [e.bonsly, e.corvisquire],
			wave: [
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,
				null, e.corvisquire, null, e.corvisquire, null, e.corvisquire,
				null, null, null, null, null, null, null, null, null,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, 
				null, e.corvisquire, null, e.corvisquire, null, e.corvisquire,
				
			],
		},
		20: {
			preview: [e.bonsly, e.sudowoodo],
			wave: [
				e.sudowoodo,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,  e.bonsly, e.bonsly, e.bonsly, e.bonsly, 
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,  e.bonsly, e.bonsly, e.bonsly, e.bonsly, 
			],
		},
		21: {
			preview: [e.caterpie, e.metapod, e.butterfree],
			wave: [
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod,
				e.butterfree,
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
				e.butterfree,
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,
				e.butterfree,
				null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null,
				e.butterfree
			],
		},
		22: {
			preview: [e.venonat, e.weepinbell],
			wave: [
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,  
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
			],
		},
		23: {
			preview: [e.corvisquire, e.weepinbell],
			wave: [
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				null, null, null, null,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				null, null, null, null,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
			],
		},
		24: {
			preview: [e.venonat, e.weepinbell, e.delibird],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				null, null, null, null,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,  
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				null, null, null, null,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				null, null, null, null,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				null, null, null, null, null, null,
				e.delibird
			],
		},
		25: {
			preview: [e.caterpie, e.metapod, e.venonat, e.butterfree],
			wave: [
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, 
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
			],
		},
		26: {
			preview: [e.corvisquire, e.sudowoodo],
			wave: [
				e.sudowoodo, 
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				
			],
		},
		27: {
			preview: [e.venonat, e.weepinbell, e.butterfree],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.butterfree, e.butterfree, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.butterfree, e.butterfree, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.butterfree, e.butterfree, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.butterfree, e.butterfree, 
			],
		},
		28: {
			preview: [e.bonsly, e.sudowoodo],
			wave: [
				e.sudowoodo,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, 
				null, null, null, null, null,
				e.sudowoodo, 
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, 
				null, null, null, null, null, 
				e.sudowoodo,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, 
			],
		},
		29: {
			preview: [e.venonat, e.butterfree],
			wave: [
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
			],
		},
		30: {
			preview: [e.venonat, e.butterfree, e.venomoth],
			wave: [
				e.butterfree, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				null, null, null,
				e.butterfree, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				null, null, null,
				e.butterfree, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				null, null, null,
				e.butterfree, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				null, null, null,
				e.venomoth
			],
		},
		31: {
			preview: [e.bonsly, e.sudowoodo],
			wave: [
				e.sudowoodo,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, 
				e.sudowoodo,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,  
				e.sudowoodo,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,
				e.sudowoodo,
			],
		},
		32: {
			preview: [e.caterpie, e.metapod, e.venonat, e.butterfree, e.venomoth],
			wave: [
				e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod, e.metapod,
				e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie,	e.caterpie, e.caterpie, e.caterpie, e.caterpie, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, 
			],
		},
		33: {
			preview: [e.venonat, e.venomoth],
			wave: [
				e.venonat, e.venonat, e.venonat,
				e.venomoth, 
				e.venonat, e.venonat, e.venonat,
				e.venomoth, 
				e.venonat, e.venonat, e.venonat,
				e.venomoth, 
				e.venonat, e.venonat, e.venonat,
				e.venomoth, 
				e.venonat, e.venonat, e.venonat,
				e.venomoth, 
				e.venonat, e.venonat, e.venonat,
				e.venomoth, 
			],
		},
		34: {
			preview: [e.sudowoodo],
			wave: [
				e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, 
			],
		},
		35: {
			preview: [e.venonat, e.venomoth],
			wave: [
				e.venomoth, e.venomoth, e.venomoth,
				e.venonat, 
				e.venomoth, e.venomoth, e.venomoth,
				e.venonat, 
				e.venomoth, e.venomoth, e.venomoth,
				e.venonat, 
				e.venomoth, e.venomoth, e.venomoth,
				e.venonat, 
			],
		},
		36: {
			preview: [e.venonat, e.butterfree, e.corvisquire, e.weepinbell, e.growlitheHisui],
			wave: [
				e.growlitheHisui, e.growlitheHisui, 
				null, null, null, null, null, null,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				null, null, null, null, null, null,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
			],
		},
		37: {
			preview: [e.venonat, e.venomoth],
			wave: [
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
				e.venomoth, e.venomoth, e.venomoth
			],
		},
		38: {
			preview: [e.butterfree, e.venomoth],
			wave: [
				e.venomoth, e.venomoth, e.venomoth, 
				e.butterfree, e.butterfree,
				e.venomoth, e.venomoth, e.venomoth,
				e.butterfree, e.butterfree, 
				e.venomoth, e.venomoth, e.venomoth,
				e.butterfree, e.butterfree,  
				e.venomoth, e.venomoth, e.venomoth,
				e.butterfree, e.butterfree, 
				e.venomoth, e.venomoth, e.venomoth,
				e.butterfree, e.butterfree, 
				e.venomoth, e.venomoth, e.venomoth,
				e.butterfree, e.butterfree, 
			],
		},
		39: {
			preview: [e.weepinbell],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				null, null, null, null, null,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				null, null, null, null, null,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
			],
		},
		40: {
			preview: [e.weepinbell, e.victreebel],
			wave: [
				e.victreebel,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				
			],
		},
		41: {
			preview: [e.butterfree, e.venomoth],
			wave: [
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
			],
		},
		42: {
			preview: [e.sudowoodo],
			wave: [
				e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, 
				null, null, null, null, null,
				e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, 
				null, null, null, null, null,
				e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, 
			],
		},
		43: {
			preview: [e.corvisquire, e.weepinbell, e.growlitheHisui],
			wave: [
				e.growlitheHisui, e.growlitheHisui,
				e.weepinbell, e.weepinbell, e.weepinbell, 
				e.corvisquire, e.corvisquire, e.corvisquire, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.weepinbell, e.weepinbell, e.weepinbell, 
				e.corvisquire, e.corvisquire, e.corvisquire, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, 
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
			],
		},
		44: {
			preview: [e.venonat, e.butterfree, e.venomoth, e.victreebel],
			wave: [
				e.victreebel,
				e.venomoth, e.venomoth, e.venomoth, e.butterfree, e.venonat, e.butterfree, e.venomoth, e.venonat, e.venomoth, e.venomoth,
				e.venonat, e.venonat, e.butterfree, e.venonat, e.venomoth, e.butterfree, e.butterfree, e.venomoth, e.venonat, e.venonat,
				e.victreebel,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venonat, e.butterfree, e.venomoth, e.butterfree, e.venomoth, e.butterfree, e.butterfree, e.venomoth, e.venomoth, e.butterfree,
			],
		},
		45: {
			preview: [e.sudowoodo, e.venomoth, e.victreebel],
			wave: [
				e.victreebel, e.victreebel, e.victreebel, 
				null, null, null, null,
				e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				null, null, null, null,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
			],
		},
		46: {
			preview: [e.venonat, e.butterfree, e.venomoth],
			wave: [
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,

				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
				e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat, e.venonat,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
			],
		},
		47: {
			preview: [e.weepinbell, e.victreebel],
			wave: [
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.victreebel, e.victreebel, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.victreebel, e.victreebel, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.victreebel, e.victreebel, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
			],
		},
		48: {
			preview: [e.growlitheHisui],
			wave: [
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
			],
		},
		49: {
			preview: [e.bonsly, e.corvisquire, e.sudowoodo],
			wave: [
				e.sudowoodo,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, 
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.sudowoodo,
				e.sudowoodo,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, 
				e.sudowoodo,
			],
		},
		50: { 
			preview: [e.butterfree],
			wave: [
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
			] 
		},
		51: {
			preview: [e.corvisquire, e.corviknight],
			wave: [
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.corviknight, e.corviknight, e.corviknight,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
			],
		},
		52: { 
			preview: [e.corvisquire, e.phantum, e.ditto],
			wave: [
				e.phantum, 
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, 
				null, null, null, null, null, null,
				e.ditto, e.ditto, e.ditto, e.ditto,
			] 
		},
		53: { 
			preview: [e.growlitheHisui, e.corviknight, e.phantum],
			wave: [
				e.phantum, 
				e.corviknight, e.corviknight,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, 
			] 
		},
		54: { 
			preview: [e.weepinbell, e.victreebel],
			wave: [
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
			] 
		},
		55: { 
			preview: [e.sudowoodo, e.growlitheHisui, e.corviknight, e.phantum],
			wave: [
				e.phantum, e.phantum, e.phantum, 
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, 
				e.corviknight, e.corviknight, 
				e.sudowoodo, e.sudowoodo, e.sudowoodo,
			] 
		},
		56: { 
			preview: [e.venomoth],
			wave: [
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
			] 
		},
		57: { 
			preview: [e.butterfree, e.venomoth, e.victreebel],
			wave: [
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree,
			] 
		},
		58: { 
			preview: [e.weepinbell, e.victreebel],
			wave: [
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
			] 
		},
		59: { 
			preview: [e.growlitheHisui, e.phantum],
			wave: [
				e.phantum, e.phantum, 
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.phantum, e.phantum, 
			] 
		},
		60: { 
			preview: [e.phantum, e.trevenant],
			wave: [
				e.trevenant, e.phantum, e.phantum, e.phantum,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.trevenant, e.phantum, e.phantum, e.phantum,
			] 
		},
		61: { 
			preview: [e.corvisquire, e.corviknight, e.phantum],
			wave: [
				e.phantum, e.phantum,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
			] 
		},
		62: { 
			preview: [e.corviknight],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
			] 
		},
		63: { 
			preview: [e.growlitheHisui, e.arcanineHisui],
			wave: [
				e.arcanineHisui, e.arcanineHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, 
				e.arcanineHisui, e.arcanineHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, 
				e.arcanineHisui, e.arcanineHisui
			] 
		},
		64: { 
			preview: [e.corviknight, e.delibird],
			wave: [	
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				null, null, null, null,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				null, null, null, null,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				null, null,
				e.delibird,
				null, null,
				e.delibird,
				null, null,
				e.delibird,
				null, null,
				e.delibird,
			] 
		},
		65: { 
			preview: [e.bonsly, e.phantum],
			wave: [
				e.phantum, e.phantum, e.phantum, 
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,
				e.phantum, e.phantum, e.phantum,
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,
				e.phantum, e.phantum, e.phantum, 
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,
				e.phantum, e.phantum, e.phantum, 
				e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly, e.bonsly,
			] 
		},	
		66: { 
			preview: [e.phantum],
			wave: [
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum,
			] 
		},
		67: { 
			preview: [e.corviknight, e.phantum],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, 
				null, null, null, null,
				e.corviknight, e.corviknight, e.corviknight, 
				null, null, null, null,
				e.phantum, e.phantum, e.phantum,  
				null, null, null, null,
				e.corviknight, e.corviknight, e.corviknight, 
				null, null, null, null,
				e.phantum, e.phantum, e.phantum,  
			] 
		},
		68: { 
			preview: [e.trevenant],
			wave: [
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
			] 
		},
		69: { 
			preview: [e.corvisquire, e.sudowoodo, e.victreebel, e.growlitheHisui, e.corviknight],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
			] 
		},
		70: { 
			preview: [e.sudowoodo, e.growlitheHisui, e.corviknight, e.phantum],
			wave: [
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, 
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, 
				null, null, null, null, null, null, null, null, null, null,
				e.phantum, e.phantum, e.phantum, 
			] 
		},
		71: { 
			preview: [e.growlitheHisui, e.corviknight, e.phantum],
			wave: [
				e.phantum, e.phantum, e.phantum, e.phantum, 
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.phantum, e.phantum, e.phantum, e.phantum, 
			] 
		},
		72: { 
			preview: [e.corvisquire, e.growlitheHisui, e.phantum, e.arcanineHisui],
			wave: [
				e.arcanineHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, 
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, 
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, 
			] 
		},
		73: { 
			preview: [e.corviknight, e.phantum, e.trevenant],
			wave: [
				e.trevenant,
				null, null, null,
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				null, null, null, null, null, null, null, null, null,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.trevenant, 
				null, null, null, null, null, null, null, null, null,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				null, null, null, null, null, null, null, null, null,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
			] 
		},
		74: { 
			preview: [e.butterfree, e.venomoth, e.victreebel, e.corviknight, e.trevenant],
			wave: [
				e.trevenant,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,

				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.trevenant,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,

				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
			] 
		},
		75: { 
			preview: [e.weepinbell, e.venomoth, e.victreebel, e.growlitheHisui, e.corviknight],
			wave: [
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,

				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
			] 
		},
		76: { 
			preview: [e.growlitheHisui, e.phantum, e.arcanineHisui],
			wave: [
				e.growlitheHisui, e.arcanineHisui, e.growlitheHisui,
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum,  
				null, null, null, null, null, null, null, null, null,
				e.arcanineHisui, e.growlitheHisui, e.arcanineHisui, 
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, 
				null, null, null, null, null, null, null, null, null,
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum,
			] 
		},
		77: { 
			preview: [e.weepinbell, e.butterfree, e.victreebel, e.corviknight, e.arcanineHisui],
			wave: [
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell, e.weepinbell,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
			] 
		},
		78: { 
			preview: [e.growlitheHisui, e.arcanineHisui],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
			] 
		},
		79: { 
			preview: [e.growlitheHisui, e.phantum, e.trevenant, e.arcanineHisui],
			wave: [
				e.arcanineHisui,
				e.trevenant, e.trevenant, e.trevenant,
				e.arcanineHisui,
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, 
				e.arcanineHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.arcanineHisui,
				e.trevenant, e.trevenant, e.trevenant,
			] 
		},
		80: { 
			preview: [e.drampa, e.ditto],
			wave: [
				e.drampa,
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,	
				e.drampa,
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,			
			] 
		},
		81: { 
			preview: [e.weepinbell, e.victreebel, e.drampa],
			wave: [
				e.drampa, e.drampa,

				e.weepinbell, e.weepinbell, e.weepinbell, 

				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
			] 
		},
		82: { 
			preview: [e.corvisquire, e.victreebel, e.corviknight, e.arcanineHisui, e.drampa],
			wave: [
				e.arcanineHisui,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.arcanineHisui,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire, e.corvisquire,
				e.drampa, e.drampa,

				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.drampa, e.drampa,
			] 
		},
		83: { 
			preview: [e.sudowoodo, e.corviknight, e.phantum, e.trevenant, e.arcanineHisui],
			wave: [
				e.trevenant, e.trevenant, 
				e.arcanineHisui, e.arcanineHisui,
				null, null, null, null, null, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				null, null, null, null, null, 
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum,
				e.arcanineHisui, e.arcanineHisui,
				null, null, null, null, null, null, null, null, null,
				e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo, e.sudowoodo,
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum,
				e.arcanineHisui,
				null, null, null, null, null, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
			] 
		},
		84: { 
			preview: [e.butterfree, e.drampa],
			wave: [
				e.drampa, e.drampa,
				e.butterfree, e.butterfree, e.butterfree, 
				e.drampa, e.drampa,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.drampa, e.drampa,
				e.butterfree, e.butterfree, e.butterfree, 
				e.drampa, e.drampa,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.drampa, e.drampa,
			] 
		},
		85: { 
			preview: [e.corviknight, e.phantum, e.trevenant],
			wave: [
				e.trevenant, e.trevenant, e.trevenant,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.trevenant, e.trevenant, e.trevenant,
			] 
		},
		86: { 
			preview: [e.corvisquire, e.corviknight, e.delibird],
			wave: [
				e.corvisquire, e.corviknight, e.corvisquire, e.corviknight, e.corvisquire, e.corviknight, e.corvisquire, e.corviknight, e.corvisquire, e.corviknight, e.corvisquire, e.corviknight,
				e.corvisquire, e.corviknight, e.corvisquire, e.corviknight, e.corvisquire, e.corviknight, e.corvisquire, e.corviknight, e.corvisquire, e.corviknight, e.corvisquire, e.corviknight,
				e.corvisquire, e.corviknight, e.corvisquire, e.corviknight, e.corvisquire, e.corviknight, e.corvisquire, e.corviknight, e.corvisquire, e.corviknight, e.corvisquire, e.corviknight,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird,
			] 
		},
		87: { 
			preview: [e.growlitheHisui, e.corviknight, e.phantum],
			wave: [
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, 
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, 
			] 
		},
		88: { 
			preview: [e.phantum, e.trevenant],
			wave: [
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum,
				null, null, null, null, null, null, null, null, null, null,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum,
			] 
		},
		89: { 
			preview: [e.growlitheHisui, e.corviknight, e.phantum, e.trevenant, e.arcanineHisui],
			wave: [
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.trevenant, e.trevenant,		
				e.arcanineHisui, e.arcanineHisui,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, e.phantum,
				null, null, null, null,
				e.trevenant, e.trevenant,		
			] 
		},
		90: { 
			preview: [e.trevenant, e.arcanineHisui, e.drampa, e.togedemaru],
			wave: [
				e.trevenant, e.trevenant, e.trevenant,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.drampa, e.drampa, e.drampa,
				e.togedemaru,
				null, null, null, null, null, null, null, null, null,
				e.togedemaru
			] 
		},
		91: { 
			preview: [e.corviknight, e.phantum, e.trevenant, e.delibird],
			wave: [
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				null, null, null,
				e.delibird,
				null, null, null, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.phantum, e.phantum, e.phantum, e.phantum, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.delibird, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
			] 
		},
		92: { 
			preview: [e.growlitheHisui, e.trevenant, e.arcanineHisui, e.drampa],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, 
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,

				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				null, null, null, null, null, null, null, null, null,
				e.drampa, e.drampa,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				null, null, null, null, null, null, null,
				e.drampa, e.drampa,
				null, null, null, null, null, null, null, 
				e.drampa, e.drampa,
			] 
		},
		93: { 
			preview: [e.victreebel, e.drampa, e.ditto],
			wave: [
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.drampa, e.drampa,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				e.ditto, e.ditto, e.ditto, e.ditto,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.drampa, e.drampa,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.ditto, e.ditto, e.ditto, e.ditto,
				e.drampa, e.drampa, e.drampa, e.drampa,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.drampa, e.drampa,
				e.ditto, e.ditto, e.ditto, e.ditto,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.drampa, e.drampa,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.ditto, e.ditto, e.ditto, e.ditto,
				e.drampa, e.drampa, e.drampa, e.drampa,
			] 
		},
		94: { 
			preview: [e.victreebel, e.corviknight, e.arcanineHisui, e.drampa, e.togedemaru],
			wave: [
				e.arcanineHisui,
				e.corviknight, e.togedemaru, e.togedemaru, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				null, null, null, null, 
				e.drampa, e.drampa,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.togedemaru, e.togedemaru, e.corviknight, e.corviknight, e.corviknight,
				e.arcanineHisui,
				null, null, null, null, 
				e.corviknight, e.corviknight, e.corviknight, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.togedemaru, e.togedemaru, e.togedemaru, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.corviknight, e.corviknight,
				e.drampa, e.drampa,
				null, null, null, null, null, null, null, null, null,
				e.victreebel, e.victreebel, e.togedemaru, e.togedemaru, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.togedemaru, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.togedemaru, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.drampa, e.drampa,
			] 
		},
		95: { 
			preview: [e.corviknight, e.trevenant, e.arcanineHisui, e.togedemaru],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.togedemaru, e.togedemaru, e.togedemaru,

				e.trevenant, e.trevenant, e.corviknight, e.corviknight, e.corviknight, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.trevenant, e.trevenant, e.corviknight, e.corviknight,
				null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.trevenant, e.trevenant, 
				e.togedemaru, e.togedemaru, 
				null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		96: { 
			preview: [e.trevenant, e.arcanineHisui, e.drampa, e.togedemaru],
			wave: [
				e.arcanineHisui, e.arcanineHisui,
				null, null, null, null,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.togedemaru, e.togedemaru, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.drampa, e.drampa,
				null, null, null, null,
				e.togedemaru, e.togedemaru, 
				null, null, null, null,

				e.drampa, e.drampa,
				null, null, null, null,
				e.togedemaru, e.togedemaru,
			] 
		},
		97: { 
			preview: [e.victreebel, e.corviknight, e.phantum, e.arcanineHisui, e.trevenant],
			wave: [
				e.trevenant, e.trevenant,
				e.phantum, e.phantum, e.phantum, e.phantum, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.phantum, e.phantum, e.phantum, e.phantum,

				null, null, null, null, null, null, null, null,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,

				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,

				e.trevenant, 
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, 
				e.trevenant,  
				null, null, null, null, null, null, null, null,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 

				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,

				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
			] 
		},
		98: { 
			preview: [e.corviknight, e.phantum, e.arcanineHisui, e.trevenant],
			wave: [
				e.phantum, e.phantum, e.phantum,

				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				
				null, null, null, null, null, null, null, null,

				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.phantum, e.phantum, e.phantum,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,

				e.phantum, e.phantum, e.phantum, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.phantum, e.phantum, e.phantum, 

				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,

				e.trevenant, 
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, 
				e.phantum, e.phantum, e.phantum, e.phantum, e.phantum, 
				e.trevenant, 
			] 
		},
		99: { 
			preview: [e.trevenant, e.drampa, e.delibird],
			wave: [
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.delibird, 
				e.drampa, e.drampa, e.drampa, 
				e.delibird,
				null, null, null, null, null, null, null, null,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				null, 
				e.drampa, e.drampa, e.drampa, 
				null, null, null, null,
				e.delibird,
				null, null, null, null,
				e.delibird, e.delibird, e.delibird,
			] 
		},
		100: { 
			preview: [e.celebi], 
			wave: [
				e.celebi
			] 
		},
	},
	2: {
		1: {
			preview: [e.axew],
			wave: [
				e.axew, e.axew, e.axew, e.axew, 
				null, null, 
				e.axew, e.axew, e.axew, e.axew,
				null, null, 
				e.axew, e.axew, e.axew, e.axew, 
			],
		},
		2: {
			preview: [e.axew],
			wave: [
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
			],
		},
		3: {
			preview: [e.axew, e.ledian, e.venomoth],
			wave: [
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				
			],
		},
		4: {
			preview: [e.ledian, e.growlitheHisui],
			wave: [
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
			],
		},
		5: {
			preview: [e.axew, e.ledian, e.growlitheHisui, e.dodrio],
			wave: [
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
			],
		},
		6: {
			preview: [e.axew, e.ledian, e.chansey, e.ditto],
			wave: [
				e.chansey, e.chansey,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, 
				e.chansey, e.chansey,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.chansey, e.chansey,
				e.ditto, e.ditto, e.ditto, e.ditto,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, 
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, 
				e.ditto, e.ditto, e.ditto, e.ditto,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, 
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, 
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
			],
		},
		7: {
			preview: [e.growlitheHisui, e.ledian],
			wave: [
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
			],
		},
		8: {
			preview: [e.growlitheHisui, e.venomoth, e.dodrio],
			wave: [
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.dodrio, e.dodrio, e.dodrio, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		9: {
			preview: [e.axew, e.ledian, e.growlitheHisui, e.dodrio, e.chansey],
			wave: [
				e.chansey, e.chansey,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.chansey, e.chansey,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		10: {
			preview: [e.chansey, e.dodrio, e.ditto],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio
			],
		},
		11: {
			preview: [e.chansey, e.axew, e.fraxure],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				
			],
		},
		12: {
			preview: [e.growlitheHisui, e.dodrio, e.poochyena],
			wave: [
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,  
			],
		},
		13: {
			preview: [e.fraxure, e.poochyena],
			wave: [
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, 
				null, null, null, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, 
				null, null, null, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
			],
		},
		14: {
			preview: [e.ledian, e.venomoth, e.ditto],
			wave: [
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
			],
		},
		15: {
			preview: [e.dodrio, e.axew, e.fraxure, e.poochyena],
			wave: [
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
			],
		},
		16: {
			preview: [e.chansey, e.poochyena, e.delibird],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.delibird, e.delibird, e.delibird,
			],
		},
		17: {
			preview: [e.growlitheHisui, e.venomoth, e.axew, e.fraxure, e.poochyena],
			wave: [
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,

				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				null, null, null, null, null, null, null, null, null, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,

				null, null, null, null, null, null, null, null, null, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,			
			],
		},
		18: {
			preview: [e.growlitheHisui, e.axew, e.fraxure, e.poochyena],
			wave: [
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				null, null, null, null, null,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,	
				null, null, null, null, null,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,	
				null, null, null, null, null,  
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,	
				null, null, null, null, null, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,	
			],
		},
		19: {
			preview: [e.dodrio, e.chansey, e.corviknight],
			wave: [	
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		20: {
			preview: [e.ledian, e.corviknight, e.fraxure, e.delibird],
			wave: [
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				null, null, null, null, null,

				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.delibird,
				null, null, null, null, null,

				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.delibird
			],
		},
		21: {
			preview: [e.growlitheHisui, e.fraxure, e.corviknight, e.poochyena],
			wave: [
				e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, 
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, 
				e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, 
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, 
			],
		},
		22: {
			preview: [e.victreebel, e.poochyena],
			wave: [
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				null, null, null, null, null, null, null, null, null, null,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, 
				null, null,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				null, null, null, null, null, null,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, 
				null, null,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				null, null, null, null, null, null,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, 
				null, null,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				null, null, null, null, null, null,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, 
				null, null,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
			],
		},
		23: {
			preview: [e.dodrio, e.corviknight, e.trevenant, e.fraxure],
			wave: [
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, 
				e.trevenant, e.trevenant, e.trevenant,  
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.trevenant, e.trevenant, e.trevenant, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
			],
		},
		24: {
			preview: [e.ledian, e.dodrio, e.trevenant],
			wave: [
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,

				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		25: {
			preview: [e.chansey, e.corviknight, e.poochyena],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				null, null, null, null, null,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,	
			],
		},
		26: {
			preview: [e.corviknight, e.victreebel, e.trevenant, e.fraxure],
			wave: [
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.trevenant, e.trevenant, e.trevenant, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.trevenant, e.trevenant, e.trevenant, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,		
			],
		},
		27: {
			preview: [e.growlitheHisui, e.venomoth, e.victreebel, e.trevenant],
			wave: [
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
			],
		},
		28: {
			preview: [e.dodrio, e.corviknight, e.ditto],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, 
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, 
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		29: {
			preview: [e.corviknight, e.trevenant, e.fraxure],
			wave: [
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, 

				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,

				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,

				e.trevenant, e.trevenant, e.trevenant, e.trevenant,

				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, 

				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
			],
		},
		30: {
			preview: [e.ledian, e.venomoth, e.dodrio, e.trevenant, e.furfrou],
			wave: [
				e.furfrou, e.furfrou, 
				null, null, 
				e.trevenant, e.trevenant, e.trevenant, 
				null, null, null, null, null, null, null, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.furfrou, e.furfrou,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		31: {
			preview: [e.growlitheHisui, e.venomoth, e.dodrio, e.chansey],
			wave: [
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				null, null, null, 
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				null, null, null, null, null, null, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				null, null, null, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, 
				e.dodrio, e.dodrio, e.dodrio,  
				null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, 	
			],
		},
		32: {
			preview: [e.corviknight, e.poochyena, e.furfrou],
			wave: [
				e.furfrou,
				null, null, null, 
				e.furfrou,
				null, null, null, 
				e.furfrou,

				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
	
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				null, null, null, null, null, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				null, null, null, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				null, null, null, null, null, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,	
			],
		},
		33: {
			preview: [e.victreebel, e.trevenant, e.poochyena],
			wave: [
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,

				null, null, null, null, null, null,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				null, null, null, null, null, null,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
			],
		},
		34: {
			preview: [e.corviknight, e.victreebel, e.trevenant],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				null, null, null, null, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,

				null, null, null, null, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				null, null, null, null, null, null, null, null, 
				e.trevenant, e.trevenant, e.trevenant, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
			],
		},
		35: {
			preview: [e.furfrou],
			wave: [
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
				null, null, null, null, null, null, null, null, null, null, null,  null, null, 
				e.furfrou, e.furfrou, e.furfrou, 
				
			],
		},
		36: {
			preview: [e.ledian, e.growlitheHisui, e.dodrio, e.ditto],
			wave: [
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,

				null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				

				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,

				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		37: {
			preview: [e.poochyena],
			wave: [
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
			],
		},
		38: {
			preview: [e.poochyena, e.victreebel, e.trevenant, e.furfrou],
			wave: [
				e.trevenant, e.trevenant, 
				null, null, null, null,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.trevenant, e.trevenant,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,

				e.furfrou, e.furfrou, e.furfrou,
			],
		},
		39: {
			preview: [e.corviknight, e.victreebel, e.trevenant, e.furfrou],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.trevenant, e.trevenant, e.trevenant,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.trevenant, e.trevenant, e.trevenant, e.corviknight, e.corviknight, e.corviknight,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.furfrou, e.furfrou, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.furfrou, e.furfrou, e.furfrou, 
			],
		},	
		40: {
			preview: [e.poochyena, e.mightyena],
			wave: [
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena,

				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena,
			],
		},
		41: {
			preview: [e.chansey, e.trevenant, e.furfrou, e.mightyena],
			wave: [
				e.furfrou,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, 
				e.trevenant, e.trevenant,
				e.mightyena, e.mightyena,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.trevenant, e.trevenant,
				e.mightyena,
				e.furfrou,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, 
				e.mightyena, e.mightyena,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.trevenant, e.trevenant,
				e.mightyena,
				e.trevenant, e.trevenant,
				null, null,  
				e.mightyena, e.mightyena,
			],
		},
		42: {
			preview: [e.growlitheHisui, e.poochyena, e.mightyena, e.arcanineHisui],
			wave: [
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,

				e.mightyena, e.mightyena, e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena, e.mightyena, e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena, e.mightyena, e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena, e.mightyena, e.mightyena, 
				e.mightyena, e.mightyena, e.mightyena, 

			],
		},
		43: {
			preview: [e.ledian, e.venomoth, e.furfrou, e.mightyena, e.arcanineHisui],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				null, null, null, null, null, null, null, null,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				null, null, null, null, null, null, null, null,

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,

				e.mightyena, e.mightyena, e.mightyena, 

				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,

				e.mightyena, e.mightyena, e.mightyena,

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,

				e.mightyena, e.mightyena, e.mightyena,

				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,

				e.mightyena, e.mightyena, e.mightyena, 		
			],
		},
		44: {
			preview: [e.growlitheHisui, e.arcanineHisui],
			wave: [
				e.growlitheHisui, e.growlitheHisui, e.arcanineHisui, e.arcanineHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.arcanineHisui, e.arcanineHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.growlitheHisui, e.growlitheHisui, e.arcanineHisui, e.arcanineHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.arcanineHisui, e.arcanineHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,
			],
		},
		45: {
			preview: [e.corviknight, e.poochyena, e.mightyena, e.delibird],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,

				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird,
			],
		},
		46: {
			preview: [e.growlitheHisui, e.poochyena, e.mightyena, e.arcanineHisui],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui, e.growlitheHisui,

				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
			],
		},
		47: {
			preview: [e.venomoth, e.dodrio, e.chansey, e.fraxure],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				null, null, null, null, null, null, null, null, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,

				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				null, null, null, null, null, null, null, null,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		48: {
			preview: [e.ledian, e.dodrio, e.victreebel, e.trevenant, e.mightyena],
			wave: [
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,

				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, 

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				e.mightyena, e.mightyena, e.mightyena, e.mightyena,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 

				e.mightyena, e.mightyena, e.mightyena, e.mightyena,

			],
		},
		49: {
			preview: [e.fraxure, e.poochyena, e.corviknight, e.mightyena, e.arcanineHisui],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,

				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, 

			],
		},
		50: {
			preview: [e.dodrio, e.corviknight, e.furfrou, e.togedemaru],
			wave: [
				e.furfrou, e.furfrou, e.furfrou, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 	
			],
		},
		51: { 
			preview: [e.arcanineHisui, e.togedemaru, e.ditto],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				null, null, null, null, null, null,
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		52: { 
			preview: [e.dodrio, e.togedemaru, e.mightyena],
			wave: [
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			] 
		},
		53: { 
			preview: [e.poochyena, e.corviknight, e.trevenant, e.furfrou, e.mightyena],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,

				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null,
				e.furfrou, e.furfrou, e.furfrou, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 

				e.furfrou, e.furfrou, e.furfrou, 

				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,

				null, null, null,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
			] 
		},
		54: { 
			preview: [e.furfrou, e.mightyena, e.arcanineHisui, e.togedemaru],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,

				e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 

				null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 

				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,  
			] 
		},
		55: { 
			preview: [e.trevenant, e.furfrou, e.arcanineHisui, e.togedemaru, e.delibird],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.delibird, 
				e.trevenant, e.trevenant, e.trevenant,  
				e.furfrou, e.furfrou, e.furfrou, 
				null, null, null, null,
				e.trevenant, e.trevenant, e.trevenant, 
				e.delibird, 
				null, null, null, null, null, null, null, null,
				e.furfrou, e.furfrou, e.furfrou, 
				null, null, null, null,
				e.delibird,
				null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				e.delibird,
				null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.delibird,  
			] 
		},
		56: { 
			preview: [e.trevenant, e.furfrou, e.mightyena, e.togedemaru],
			wave: [
				e.furfrou, e.furfrou, e.furfrou,
				null, null, null, null, null, null, null, null,
				e.furfrou, e.furfrou, 
				e.trevenant, e.trevenant, e.trevenant, 
				e.furfrou, e.furfrou,  
				e.trevenant, e.trevenant, e.trevenant, 

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 

				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 	
			] 
		},
		57: { 
			preview: [e.corviknight, e.victreebel, e.trevenant, e.furfrou, e.mightyena],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			
			] 
		},
		58: { 
			preview: [e.victreebel, e.trevenant, e.furfrou, e.mightyena, e.togedemaru],
			wave: [
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, 
				e.furfrou, e.furfrou, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.trevenant, e.trevenant, 
				e.furfrou, e.furfrou, e.furfrou,
				e.trevenant, e.trevenant,  
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, 
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel, e.victreebel,
				null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
			] 
		},
		59: { 
			preview: [e.trevenant,  e.mightyena, e.arcanineHisui],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				null, null, null, null, null, null, null, null, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
			] 
		},
		60: { 
			preview: [e.trevenant, e.miltank],
			wave: [
				e.miltank, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
			] 
		},
		61: { 
			preview: [e.corviknight, e.trevenant, e.miltank],
			wave: [
				e.miltank,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.trevenant, e.trevenant, e.trevenant, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.trevenant, e.trevenant, e.trevenant,
				e.miltank, 
			]
		},
		62: { 
			preview: [e.togedemaru, e.miltank],
			wave: [
				e.miltank,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.miltank,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		63: { 
			preview: [e.dodrio, e.trevenant, e.poochyena, e.mightyena, e.miltank],
			wave: [
				e.miltank, e.miltank, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.trevenant, e.trevenant, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.miltank, e.miltank, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.trevenant, e.trevenant, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			] 
		},
		64: { 
			preview: [e.dodrio, e.trevenant, e.mightyena,  e.miltank],
			wave: [
				e.miltank, e.miltank, 
				e.trevenant, e.trevenant,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, 

				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, 

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			] 
		},
		65: { 
			preview: [e.chansey, e.corviknight, e.trevenant, e.furfrou, e.miltank],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				
				e.miltank, 
				e.furfrou, e.furfrou, e.furfrou,
				null, null, null, null, null, null, null, null, null, null,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,

				e.trevenant, e.trevenant, e.trevenant, e.trevenant, 

				e.furfrou, e.furfrou, e.furfrou,
				e.miltank, 
			] 
		},
		66: { 
			preview: [e.chansey, e.furfrou],
			wave: [
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou,

				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
		
				null, null, null, null, null, null, null, null,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				null, null, null, null, null, null, null, null,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
			] 
		},
		67: { 
			preview: [e.poochyena, e.mightyena],
			wave: [
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena, e.poochyena,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			] 
		},
		68: { 
			preview: [e.chansey, e.miltank, e.delibird],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey,
				e.miltank, e.miltank, e.miltank, e.miltank, 
				e.chansey, e.chansey, e.chansey, e.chansey, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
			] 
		},
		69: { 
			preview: [e.miltank],
			wave: [
				e.miltank, e.miltank, e.miltank,
				null, null, null, null, null, null, null, null,
				e.miltank, e.miltank, e.miltank, 
				null, null, null, null, null, null, null, null,
				e.miltank, e.miltank, e.miltank, 
			] 
		},
		70: { 
			preview: [e.corviknight, e.miltank, e.ditto],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,

				e.miltank, e.miltank, 
				null, null, null,
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
				null, null, null,
				e.miltank, e.miltank, e.miltank,
			] 
		},
		71: { 
			preview: [e.superCaterpie],
			wave: [
				e.superCaterpie
			] 
		},
		72: { 
			preview: [e.trevenant, e.mightyena, e.togedemaru, e.miltank],
			wave: [
				e.miltank, e.miltank, e.trevenant, e.trevenant, e.miltank, e.miltank,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.miltank, e.miltank,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.miltank, e.miltank, 
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.trevenant, e.trevenant, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
			] 
		},
		73: { 
			preview: [e.togedemaru],
			wave: [
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		74: { 
			preview: [e.corviknight, e.trevenant, e.furfrou, e.miltank],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.miltank, e.miltank, 
				null, null, null, null, null, null, null, null, null, null,
				e.miltank, e.miltank, 
				null, null, null, null, null, null, null, null, null, null,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
				null, null, null, null, null, null, null, null, null, null,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.miltank, e.miltank, e.miltank,
				null, null, null, null, null, null, null, null, null, null,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
			] 
		},
		75: { 
			preview: [e.trevenant, e.arcanineHisui, e.togedemaru, e.miltank],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.miltank, e.miltank, e.miltank, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		76: { 
			preview: [e.trevenant, e.mightyena, e.arcanineHisui, e.togedemaru, e.miltank],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.miltank, e.miltank, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.trevenant, e.trevenant, e.trevenant,
				e.miltank, e.miltank,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,

			] 
		},
		77: { 
			preview: [e.corviknight, e.trevenant, e.arcanineHisui, e.togedemaru, e.miltank],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.miltank, e.miltank, 
				e.togedemaru, e.togedemaru, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.trevenant, e.trevenant, e.trevenant, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.miltank, e.miltank,
				e.trevenant, e.trevenant, e.trevenant, 
				null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		78: { 
			preview: [e.arcanineHisui, e.togedemaru, e.miltank],
			wave: [
				e.miltank, e.miltank, e.miltank, e.miltank, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.miltank, e.miltank, e.miltank,  
				null, null, null, null, null, null, null, null, null, null,
				e.miltank, e.miltank, e.miltank, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		79: { 
			preview: [e.axew],
			wave: [
				e.axew, 
			] 
		},
		80: { 
			preview: [e.axew, e.fraxure, e.trevenant, e.mightyena, e.haxorus],
			wave: [
				e.haxorus,

				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,

				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,  
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

			] 
		},
		81: { 
			preview: [e.axew, e.haxorus],
			wave: [
				e.haxorus,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.haxorus,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.haxorus
			] 
		},
		82: { 
			preview: [e.togedemaru, e.miltank, e.haxorus],
			wave: [
				e.haxorus, 
				e.miltank, e.miltank, e.miltank, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.haxorus,
				e.miltank, e.miltank, e.miltank, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
			] 
		},
		83: { 
			preview: [e.corviknight, e.trevenant, e.arcanineHisui, e.miltank, e.haxorus],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.haxorus, e.haxorus,  
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.miltank,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,	
				e.miltank,  e.miltank,
			] 
		},
		84: { 
			preview: [e.trevenant, e.miltank, e.haxorus],
			wave: [
				e.haxorus, e.haxorus,
				e.miltank, e.miltank,  
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				null, null, null, null, null, null, null, null,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.miltank, e.miltank, 
				e.haxorus, e.haxorus,
			] 
		},
		85: { 
			preview: [e.delibird],
			wave: [
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
			] 
		},
		86: { 
			preview: [e.togedemaru, e.miltank, e.haxorus],
			wave: [
				e.haxorus,
				e.miltank, e.miltank, e.miltank,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.haxorus,
				e.miltank, e.miltank, e.miltank,
			] 
		},
		87: { 
			preview: [e.axew, e.fraxure, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, 

				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,

				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.haxorus, e.haxorus, 
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
			] 
		},
		88: { 
			preview: [e.mightyena, e.arcanineHisui, e.togedemaru, e.miltank],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 

				e.miltank, e.miltank, 

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 

				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 

				e.miltank, e.miltank,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 

				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		89: { 
			preview: [e.mightyena, e.arcanineHisui, e.miltank, e.haxorus],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.haxorus, 
				e.miltank,
				e.haxorus, 
				e.miltank, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
			] 
		},
		90: { 
			preview: [e.trevenant, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, 
				null, null, null, null, null, null, 
				e.haxorus, e.haxorus,
				null, null, null, null, null, null, null, null, null, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				null, null, null, null, null, null, null, null, null, 
				e.haxorus, e.haxorus, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,
			] 
		},
		91: { 
			preview: [e.arcanineHisui, e.corviknight, e.trevenant, e.miltank, e.ditto],
			wave: [
				e.trevenant, e.corviknight, e.miltank, e.ditto, e.arcanineHisui, e.ditto,
				e.trevenant, e.corviknight, e.miltank, e.ditto, e.arcanineHisui, e.ditto,
				e.trevenant, e.corviknight, e.miltank, e.ditto, e.arcanineHisui, e.ditto,
				e.trevenant, e.corviknight, e.miltank, e.ditto, e.arcanineHisui, e.ditto,
				e.trevenant, e.corviknight, e.miltank, e.ditto, e.arcanineHisui, e.ditto,
				e.trevenant, e.ditto, e.miltank, e.ditto, e.trevenant, e.ditto,
				e.trevenant, e.ditto, e.miltank, e.ditto, e.trevenant, e.ditto,
				e.trevenant, e.ditto, e.miltank, e.ditto, e.trevenant, e.ditto,
				e.trevenant, e.ditto, e.miltank, e.ditto, e.trevenant, e.ditto,
				e.trevenant, e.ditto, e.miltank, e.ditto, e.trevenant, e.ditto,
			] 
		},
		92: { 
			preview: [e.axew, e.fraxure, e.haxorus, e.ditto],
			wave: [
				e.haxorus, e.axew, e.haxorus, e.fraxure, e.ditto, e.ditto,
				null, null, null, null, null, null, null, null, null, 
				e.haxorus, e.axew, e.haxorus, e.fraxure, e.ditto, e.ditto,
				null, null, null, null, null, null, null, null, null, 
				e.haxorus, e.axew, e.haxorus, e.fraxure, e.ditto, e.ditto,
				null, null, null, null, null, null, null, null, null, 
				e.haxorus, e.axew, e.haxorus, e.fraxure, e.ditto, e.ditto,
				null, null, null, null, null, null, null, null, null, 
				e.haxorus, e.axew, e.fraxure, e.ditto, e.ditto,
			] 
		},
		93: { 
			preview: [e.delibird],
			wave: [
				e.delibird, e.delibird,
				null, null, null, null, 
				e.delibird, e.delibird, e.delibird,
				null, null, null, null,
				e.delibird, e.delibird,
				null, null, null, null, 
				e.delibird, e.delibird, e.delibird,
				null, null, null, null, 
				e.delibird, e.delibird, e.delibird,
			]
		},
		94: { 
			preview: [e.mightyena, e.togedemaru, e.haxorus],
			wave: [
				e.haxorus, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.haxorus, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		95: { 
			preview: [e.togedemaru],
			wave: [
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		96: { 
			preview: [e.mightyena, e.haxorus, e.ditto],
			wave: [
				e.haxorus, e.haxorus, 
				e.mightyena, e.mightyena,
			  	e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
			  	e.mightyena, e.mightyena,
			  	null, null, null, null, null, null, null, null,
			  	e.haxorus, e.haxorus, 
			  	e.mightyena, e.mightyena,
			  	e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
			  	e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
			  	null, null, null, null,
			  	e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
			  	null, null, null, null,
			  	e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			]  
		},
		97: { 
			preview: [e.miltank, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, e.haxorus,
				null, null, null,
				e.miltank, e.miltank,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.haxorus, e.haxorus, e.haxorus, 
				null, null, null,
				e.miltank, e.miltank, 
			] 
		},
		98: { 
			preview: [e.togedemaru, e.miltank, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, 
				e.miltank, e.miltank,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		99: { 
			preview: [e.axew, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, e.haxorus, 
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.haxorus, e.haxorus, e.haxorus, 
			]
		},
		100: { 
			preview: [e.lunala], 
			wave: [
				e.lunala
			] 
		},
	},
	3: {
		1: {
			preview: [e.silicobra],
			wave: [
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
			],
		},
		2: {
			preview: [e.silicobra, e.sandshrew],
			wave: [
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, 
			],
		},
		3: {
			preview: [e.silicobra, e.sandshrew],
			wave: [
				e.silicobra, e.silicobra, e.silicobra,
				e.sandshrew, e.sandshrew, 
				null, null, null,
				e.silicobra, e.silicobra, e.silicobra, 
				e.sandshrew, e.sandshrew, 
				null, null, null,
				e.silicobra, e.silicobra, e.silicobra, 
				e.sandshrew, e.sandshrew, 
			]
		},
		4: {
			preview: [e.silicobra, e.sandshrew],
			wave: [
				e.silicobra, e.silicobra, null, null, null,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.silicobra, e.silicobra, e.silicobra, e.silicobra
			],
		},
		5: {
			preview: [e.silicobra, e.larvitar],
			wave: [
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, 
				e.larvitar, e.larvitar, e.larvitar,
			],
		},
		6: {
			preview: [e.sandshrew, e.larvitar],
			wave: [
				e.larvitar, e.larvitar,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.larvitar, e.larvitar,
			],
		},
		7: {
			preview: [e.silicobra, e.sandshrew, e.larvitar],
			wave: [
				e.larvitar, e.larvitar, 
				null, null, null, null, null, null, null, 
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, 
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, 
			],
		},
		8: {
			preview: [e.diglett],
			wave: [
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett,
			],
		},
		9: {
			preview: [e.silicobra, e.larvitar],
			wave: [
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,	
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
			],
		},
		10: {
			preview: [e.silicobra, e.hippopotas],
			wave: [
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
				null, null, null, 
				e.hippopotas
			],
		},
		11: {
			preview: [e.silicobra, e.sandshrew, e.larvitar],
			wave: [
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				null, null, null, null, null, null, null, null, null, null, 
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
			],
		},
		12: {
			preview: [e.diglett],
			wave: [
				 e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett,
			],
		},
		13: {
			preview: [e.silicobra, e.larvitar,],
			wave: [
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				null, null, null, null, null, null, null, null, null, null, 
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, 
			],
		},
		14: {
			preview: [e.larvitar],
			wave: [
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
			],
		},
		15: {
			preview: [e.diglett, e.hippopotas],
			wave: [
				e.hippopotas, e.hippopotas, e.hippopotas,
				null, null, null, null, null, null,  
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
			],	
		},
		16: {
			preview: [e.silicobra, e.sandaconda],
			wave: [
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, 
				null,
				e.sandaconda, e.sandaconda, 
				null,
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
			],
		},
		17: {
			preview: [e.silicobra, e.sandshrew, e.sandaconda],
			wave: [
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
				e.sandaconda, e.sandaconda,
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
			],
		},
		18: {
			preview: [e.larvitar, e.sandile],
			wave: [
				e.sandile, e.sandile, e.sandile, e.sandile,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
			],
		},
		19: {
			preview: [e.sandile, e.sandaconda],
			wave: [
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, 
				null, null, null,
				e.sandaconda, e.sandaconda, 
			],
		},
		20: {
			preview: [e.larvitar, e.golett],
			wave: [
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, 
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,
			],
		},
		21: {
			preview: [e.hippopotas, e.sandile, e.sandaconda],
			wave: [
				e.hippopotas, e.hippopotas, e.hippopotas,

				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda,  
				e.sandile, e.sandile, e.sandile, e.sandile, 
				null, null,
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, 
			],
		},
		22: {
			preview: [e.sandile, e.sandaconda],
			wave: [
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, 
				null, null, null, null,
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda,
				null, null, 
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile,
			],
		},
		23: {
			preview: [e.silicobra, e.sandshrew, e.larvitar],
			wave: [
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				null, null, null, null, null, null, 
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
				null, null, null, null, null, null, 
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
			],
		},
		24: {
			preview: [e.diglett],
			wave: [
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett,
				null, null,
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett,
				null, null,
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett,
			],
		},
		25: {
			preview: [e.hippopotas, e.golett, e.sandile, e.sandaconda],
			wave: [
				e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, 
				e.golett, e.golett, 
				null, null, null, null, null, null, null, null, null,
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, 
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda
			],
		},
		26: {
			preview: [e.larvitar, e.golett],
			wave: [
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, null, null,
				e.golett, e.golett, e.golett, e.golett, e.golett, null, null,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,

			],
		},
		27: {
			preview: [e.silicobra, e.sandshrew, e.golett],
			wave: [
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
				
			],
		},
		28: {
			preview: [e.hippopotas, e.golett, e.sandaconda],
			wave: [
				e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas,
				null,
				e.sandaconda, e.sandaconda, e.sandaconda,
				e.golett, e.golett, e.golett, e.golett,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda,
				e.sandaconda, e.sandaconda,
			],
		},
		29: {
			preview: [e.silicobra, e.sandaconda],
			wave: [
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, 
				null, null, null, null, null, 
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda,
			],
		},
		30: {
			preview: [e.sandshrew, e.sandslash],
			wave: [
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandslash, 
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, 
				
			],
		},
		31: {
			preview: [e.sandile, e.krokorok, e.delibird],
			wave: [
				e.krokorok, 
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile,
				e.krokorok, 
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile,
				e.krokorok, 
				e.delibird,
			],
		},
		32: {
			preview: [e.sandslash],
			wave: [
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
			],
		},
		33: {
			preview: [e.golett, e.sandile, e.diglett],
			wave: [
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,
				e.golett, e.golett, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,  
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile,	
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett,
			],
			
		},
		34: {
			preview: [e.silicobra, e.sandshrew, e.larvitar, e.sandaconda, e.sandslash],
			wave: [
				e.sandslash,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				null, null, null, null, null, null, null, null, null, null, 

				e.sandaconda, e.sandaconda,  null, 
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
				null, null, null, 
				e.sandaconda, e.sandaconda,  null, 
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.sandslash,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,		
			],
		},
		35: {
			preview: [e.sandslash, e.krokorok, e.kecleon],
			wave: [
				e.kecleon, e.kecleon, e.kecleon,
				null, null, null, null, null, null,
				e.sandslash, e.sandslash, e.sandslash,
				
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, 
			],
		},
		36: {
			preview: [e.diglett],
			wave: [
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
			],
		},
		37: {
			preview: [e.silicobra, e.sandshrew, e.hippopotas, e.golett, e.sandile],
			wave: [
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,

				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,

				e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, 
				e.hippopotas, e.hippopotas,

				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, 
				null, 
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, 
				null, null, null, null,
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, 
				null, 
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, 
			],
		},
		38: {
			preview: [e.larvitar, e.golett, e.sandaconda],
			wave: [
				e.golett, e.golett, e.golett, e.golett, e.golett,
				null,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				null,
				e.golett, e.golett, e.golett, e.golett, e.golett, 
				null,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, 
				null,
				e.golett, e.golett, e.golett, e.golett, e.golett,

				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, 
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, 

				
			],
		},
		39: {
			preview: [e.sandshrew, e.sandile, e.sandslash, e.krokorok],
			wave: [
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, 
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 

				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, 
				
			],
		},
		40: {
			preview: [e.hippopotas, e.hippowdon],
			wave: [
				e.hippowdon, e.hippowdon,
				e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas,  e.hippopotas, e.hippopotas, 
				e.hippopotas, e.hippopotas, e.hippopotas,
				e.hippowdon, e.hippowdon, 
				e.hippopotas, e.hippopotas, e.hippopotas, 
				e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas,
			],
		},
		41: {
			preview: [e.sandaconda, e.sandslash],
			wave: [
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, 
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
			],
		},
		42: {
			preview: [e.silicobra, e.sandshrew, e.sandaconda, e.sandslash],
			wave: [
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,

				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda,
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
			],
			
		},
		43: {
			preview: [e.delibird],
			wave: [
				e.delibird, null,  null, e.delibird,  null,  null, e.delibird
			],
		},
		44: {
			preview: [e.golett, e.sandile, e.krokorok],
			wave: [
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, 
				e.sandile, e.sandile, e.sandile,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,

				
			]
		},
		45: {
			preview: [e.golett, e.sandile, e.sandaconda, e.sandslash, e.krokorok],
			wave: [
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
				e.sandslash, e.sandslash, 
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,
				e.golett, e.golett, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, 
				e.sandile, e.sandile, 
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda,
				e.sandaconda, e.sandaconda,
			]
		},
		46: {
			preview: [e.sandshrew, e.diglett, e.sandslash],
			wave: [
				e.diglett, e.diglett, 
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
			],
			
		},
		47: {
			preview: [e.silicobra, e.sandshrew, e.larvitar, e.golett],
			wave: [
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, 
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.golett, e.golett,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, 
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, 
			],
		},
		48: {
			preview: [e.larvitar, e.golett, e.sandaconda, e.sandslash],
			wave: [
				e.sandslash, e.sandslash, e.sandslash, 
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.larvitar, e.larvitar,
				e.sandslash, e.sandslash, e.sandslash,
				null, null, null, null, null, null,
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, 
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, 
				e.sandslash, e.sandslash, e.sandslash,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.sandslash, e.sandslash, e.sandslash,
				
			],
		},
		49: {
			preview: [e.diglett, e.krokorok],
			wave: [
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				null, null, null,
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
			],
		},
		50: {
			preview: [e.larvitar, e.pupitar],
			wave: [
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, 
				e.pupitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,				
			],
		},
		51: {
			preview: [e.sandaconda, e.sandslash, e.hippowdon],
			wave: [
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
				e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, 
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, 
			],
		},
		52: {
			preview: [e.larvitar, e.hippowdon, e.pupitar],
			wave: [
				e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, 
				e.pupitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, 
				e.pupitar, 
			],
		},
		53: {
			preview: [e.sandshrew, e.sandslash],
			wave: [
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
				null, null, null, null, null,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash
			],
		},
		54: {
			preview: [e.larvitar, e.hippopotas, e.hippowdon, e.pupitar],
			wave: [
				e.hippowdon,
				e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas,
				e.hippowdon,

				e.pupitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.pupitar,	
			],
		},
		55: {
			preview: [e.pupitar],
			wave: [
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				null, null, null,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
			],
		},
		56: {
			preview: [e.larvitar, e.sandile, e.krokorok, e.pupitar],
			wave: [
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				null, null, null, null, null, null, null, null,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, 
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, 
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
			],
		},
		57: {
			preview: [e.silicobra, e.sandshrew, e.larvitar, e.hippopotas],
			wave: [
				
				e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, 
				e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, 
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, 
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
			],
			
		},
		58: {
			preview: [e.sandaconda, e.sandslash, e.hippowdon, e.pupitar],
			wave: [
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				null, null, null, 
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				null, null, null, null, null, null, null, null, null, null, null, 
				e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, 
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
			],
		},
		59: {
			preview: [e.diglett],
			wave: [
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
			],
		},
		60: {
			preview: [e.diglett, e.dugtrio],
			wave: [
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
				null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio
			],
		},
		61: {
			preview: [e.sandslash, e.pupitar, e.dugtrio],
			wave: [
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
				e.dugtrio, e.dugtrio, e.dugtrio,
				null, null, null, null, null, null, 
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				
			],
		},
		62: {
			preview: [e.sandshrew, e.larvitar, e.sandslash, e.hippowdon, e.pupitar],
			wave: [
				e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, 
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
			],
		},
		63: {
			preview: [e.hippopotas, e.golett, e.sandaconda, e.krokorok, e.kecleon],
			wave: [
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, 
				e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, 
				null, null, null, null, null, null,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, 
				null, null, null, null,
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, 
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, 
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, 
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
			],
		},
		64: {
			preview: [e.sandshrew, e.diglett, e.golett, e.pupitar, e.dugtrio],
			wave: [
				e.golett, e.golett, e.golett, e.pupitar, e.pupitar, e.pupitar, e.golett, e.golett, e.golett, 
				e.pupitar, e.pupitar, e.pupitar, e.golett, e.golett, e.golett, e.pupitar, e.pupitar, e.pupitar,

				null, null, null, null, null, null, null, null, null, null, null, null,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,

				null, null, null, null, null, null, null, null, null, null, null, null,
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett,
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett,

				e.dugtrio, 
				null, null, null, null, null, null,
				e.dugtrio, 
				null, null, null, null, null, null,
				e.dugtrio
			],
		},
		65: {
			preview: [e.silicobra, e.hippopotas, e.sandaconda, e.pupitar],
			wave: [
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,

				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,

				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				null, null, null, null, null, null, null, null, null,
				e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas,
				e.hippopotas, e.hippopotas,

				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda,
				e.sandaconda, e.sandaconda,

				
			],
		},
		66: {
			preview: [e.sandslash, e.hippowdon, e.pupitar, e.krokorok, e.dugtrio],
			wave: [
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.dugtrio,
				e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon,
				e.dugtrio, 
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.dugtrio,
				null, null, null, null, 
				e.dugtrio, 
				null, null, null, null, 
				e.dugtrio, 

			],
		},
		67: {
			preview: [e.dugtrio, e.kecleon],
			wave: [
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, null, null, null, null, null, null,
				e.kecleon, e.kecleon,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, null, null, null, null, null, null,
				e.kecleon, e.kecleon,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, null, null, null, null, null, null, 
				e.kecleon, e.kecleon,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			],
		},
		68: {
			preview: [e.silicobra, e.sandshrew, e.larvitar, e.diglett, e.hippopotas],
			wave: [
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,

				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra,
				e.silicobra, e.silicobra, e.silicobra, e.silicobra, e.silicobra, 

				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas,

				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett,
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett,

				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, 

				
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett,
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett,
			],
		},
		69: {
			preview: [e.sandile, e.krokorok, e.kecleon],
			wave: [
				e.krokorok, e.sandile, e.krokorok, e.sandile, e.krokorok, e.sandile, e.krokorok, e.sandile, e.krokorok, 
				e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,	
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,	
			],
		},
		70: {
			preview: [e.sandile, e.krokorok, e.maractus],
			wave: [
				e.maractus, 
				
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile, e.sandile,
			],
		},
		71: {
			preview: [e.sandslash, e.dugtrio, e.kecleon],
			wave: [
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
				e.dugtrio, e.kecleon, e.kecleon,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.dugtrio, e.kecleon, e.kecleon,
				null, null, null, null, null, null, null, null, null, 
				e.dugtrio,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.dugtrio,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
				e.dugtrio,
				null, null, null, null, null, null, null, null, null, 
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
				e.dugtrio, e.kecleon, e.kecleon,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.dugtrio, e.kecleon, e.kecleon,
				null, null, null, null, null, null, null,
				e.dugtrio,
			],
		},
		72: {
			preview: [e.larvitar, e.golett, e.pupitar, e.dugtrio],
			wave: [
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.golett, e.golett, e.golett, e.golett, e.golett,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, 
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			],
		},
		73: {
			preview: [e.dugtrio, e.maractus, e.kecleon],
			wave: [
				e.maractus, e.maractus, e.maractus, 
				e.dugtrio, e.dugtrio, e.dugtrio,
				null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.kecleon,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.kecleon,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.kecleon
			],
		},
		74: {
			preview: [e.sandslash, e.hippowdon, e.pupitar, e.dugtrio, e.kecleon],
			wave: [
				e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, 
				null, null, null, null, null, null, null, null, null, 
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.kecleon, e.dugtrio, e.dugtrio, e.kecleon, e.dugtrio, e.dugtrio, e.kecleon, e.dugtrio, e.dugtrio, e.kecleon
			],
		},
		75: {
			preview: [e.maractus, e.kecleon],
			wave: [
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,
				null, null, null, null, null, null,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, 
			],
		},
		76: {
			preview: [e.hippopotas, e.golett, e.sandslash, e.hippowdon, e.dugtrio],
			wave: [
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,
				e.golett, e.golett, e.golett, e.golett, e.golett,
				e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas, e.hippopotas,
				e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon,
				e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon, e.hippowdon,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,  

			],
		},
		77: {
			preview: [e.pupitar, e.krokorok, e.maractus, e.kecleon],
			wave: [
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.maractus, e.maractus, e.maractus,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, 
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,

			],
		},
		78: {
			preview: [e.sandshrew, e.sandslash],
			wave: [
				e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew, e.sandshrew,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash,
			],
		},
		79: {
			preview: [e.delibird],
			wave: [
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, 
			],
		},
		80: {
			preview: [e.lunatone, e.solrock],
			wave: [
				e.lunatone, e.solrock
			],
		},
		81: {
			preview: [e.diglett, e.dugtrio],
			wave: [
				e.diglett, e.diglett, e.diglett, e.diglett, e.dugtrio, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.diglett, e.diglett, e.diglett, e.diglett, e.dugtrio, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
				e.diglett, e.diglett, e.diglett, e.diglett, e.dugtrio, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			],
		},
		82: {
			preview: [e.diglett, e.krokorok, e.dugtrio, e.maractus],
			wave: [
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, 
				e.maractus, e.maractus, e.maractus, e.maractus,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.maractus, e.maractus, e.maractus, e.maractus,
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			],
		},
		83: {
			preview: [e.maractus, e.solrock],
			wave: [
				e.solrock, e.maractus, e.maractus, e.maractus,
			],
		},
		84: {
			preview: [e.maractus, e.lunatone],
			wave: [
				 e.lunatone, e.maractus, e.maractus, e.maractus,
			],
		},
		85: {
			preview: [e.maractus, e.lunatone, e.solrock],
			wave: [
				e.lunatone, 
				e.solrock,
				e.maractus, e.maractus, e.maractus,
				null, null,
				e.maractus, e.maractus, e.maractus,
			],
		},
		86: {
			preview: [e.pupitar, e.maractus, e.solrock],
			wave: [
				e.maractus, e.maractus, e.maractus, 
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
				null, null, null, null, null, null, null,
				e.solrock, e.solrock,
			],
		},
		87: {
			preview: [e.pupitar, e.maractus, e.lunatone],
			wave: [
				e.maractus, e.maractus, e.maractus, 
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
				null, null, null, null, null, null, null,
				e.lunatone, e.lunatone, 
			],
		},
		88: {
			preview: [e.larvitar, e.golett, e.pupitar, e.lunatone, e.solrock],
			wave: [
				e.solrock, 
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar,
				e.solrock, e.solrock, 
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
				e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, e.larvitar, 
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, 
				e.lunatone, e.lunatone,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.lunatone,
			],
		},
		89: {
			preview: [e.krokorok, e.kecleon],
			wave: [
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, 
				null, null, null, null, null, null,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, 
				null, null, null, null, null, null,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, 
			],
		},
		90: {
			preview: [e.pupitar, e.cacnea],
			wave: [
				e.cacnea, e.cacnea, e.cacnea, e.cacnea,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.cacnea, e.cacnea, e.cacnea, e.cacnea,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.cacnea, e.cacnea, e.cacnea, e.cacnea,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar,
			],
		},
		91: {
			preview: [e.diglett, e.dugtrio, e.kecleon],
			wave: [
				e.kecleon, e.kecleon, e.kecleon,
				null, null, null,
				e.diglett, e.diglett, e.diglett, e.diglett, e.dugtrio, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
				e.kecleon, e.kecleon, e.kecleon,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.diglett, e.diglett, e.diglett, e.diglett, e.dugtrio, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
				null, null, null,
				e.diglett, e.diglett, e.diglett, e.diglett, e.dugtrio, e.diglett, e.diglett, e.diglett, e.diglett, e.diglett, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,

			],
		},
		92: {
			preview: [e.sandaconda, e.sandslash, e.hippowdon, e.dugtrio],
			wave: [
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.hippowdon, e.hippowdon,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda, e.sandaconda,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.hippowdon, e.hippowdon,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,

			],
		},
		93: {
			preview: [e.maractus, e.cacnea],
			wave: [
				e.maractus,
				null, null,
				e.cacnea, e.maractus,
				null, null, 
				e.cacnea, e.maractus,
				null, null,
				e.cacnea, e.maractus,
			],
		},
		94: {
			preview: [e.lunatone, e.cacnea],
			wave: [
				e.cacnea,
				null, null, null, null,
				e.lunatone, e.lunatone, e.lunatone, 
			],	
		},
		95: {
			preview: [e.solrock, e.cacnea],
			wave: [
				e.cacnea,
				null, null, null, null,
				e.solrock, e.solrock, e.solrock,
			],
		},
		96: {
			preview: [e.sandshrew, e.diglett, e.lunatone, e.solrock],
			wave: [
				e.lunatone, e.solrock, e.lunatone, e.solrock,
				e.diglett, e.sandshrew, e.diglett, e.sandshrew, e.diglett, e.sandshrew, e.diglett, e.sandshrew, e.diglett, e.sandshrew, e.diglett, e.sandshrew, e.diglett, e.sandshrew,
				e.diglett, e.sandshrew, e.diglett, e.sandshrew, e.diglett, e.sandshrew, e.diglett, e.sandshrew, e.diglett, e.sandshrew, e.diglett, e.sandshrew, e.diglett, e.sandshrew,
				e.diglett, e.sandshrew, e.diglett, e.sandshrew, e.diglett, e.sandshrew, e.diglett, e.sandshrew, e.diglett, e.sandshrew, e.diglett, e.sandshrew, e.diglett, e.sandshrew,
			],
		},
		97: {
			preview: [e.sandslash, e.dugtrio, e.lunatone, e.solrock],
			wave: [
				e.lunatone, e.solrock, e.lunatone, e.solrock, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash,
				null, null, null, null, null, null, null, null,
				e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash,
				null, null, null, null, null, null, null, null,
				e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash,
			],
		},
		98: {
			preview: [e.lunatone, e.solrock],
			wave: [
				e.lunatone, e.solrock, e.lunatone, e.solrock, 
				null, null, null, null, null, null,
				e.lunatone, e.solrock, e.lunatone, e.solrock, 
			],
		},
		99: {
			preview: [e.maractus, e.lunatone, e.solrock, e.cacnea],
			wave: [
				e.cacnea,
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,
				null, null, null,
				e.lunatone, e.solrock, 
				null, 
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,	
				null, null, null, null, null, null, null, null,
				e.solrock, e.lunatone,
			],
		},
		100: {
			preview: [e.moltres],
			wave: [
				e.moltres
			],
		},
	},
	4: {
		1: {
			preview: [e.poliwag],
			wave: [
				e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag,
				e.poliwag, e.poliwag,	e.poliwag, e.poliwag, e.poliwag, e.poliwag,	e.poliwag, e.poliwag, e.poliwag, e.poliwag,	
				e.poliwag, e.poliwag,	e.poliwag, e.poliwag, 
			],
		},
		2: {
			preview: [e.poliwag, e.poliwhirl],
			wave: [
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.poliwag, e.poliwag,	e.poliwag, e.poliwag, e.poliwag, e.poliwag,	e.poliwag, e.poliwag, e.poliwag, e.poliwag, 
			],
		},
		3: {
			preview: [e.poliwhirl],
			wave: [
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, 
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, 
			],
		},
		4: {
			preview: [e.poliwag, e.poliwhirl, e.golett],
			wave: [
				
				e.golett, e.golett, 
				null, null, null, null,
				e.poliwag, e.poliwag,	e.poliwag, e.poliwag, e.poliwag, e.poliwag, 
				null, null, null, null,
				e.golett, e.golett, 
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, 
				e.poliwag, e.poliwag,	e.poliwag, e.poliwag, e.poliwag, e.poliwag, 
			],
		},
		5: {
			preview: [e.poliwag, e.poliwhirl],
			wave: [
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, 
				e.poliwag, e.poliwag,	e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag,
			],
		},
		6: {
			preview: [e.poliwag, e.poliwhirl, e.golett],
			wave: [
				e.golett, 
				e.poliwhirl, e.poliwhirl, e.poliwhirl,
				e.poliwag, e.poliwag,e.poliwag, 
				e.poliwhirl, e.poliwhirl, e.poliwhirl,
				e.golett,
				e.poliwhirl, e.poliwhirl, e.poliwhirl,
				e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, 
			],
		},
		7: {
			preview: [e.poliwhirl, e.golett],
			wave: [
				e.golett, e.golett, e.golett, e.golett,
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, 
				e.golett, e.golett, e.golett, e.golett,  
				
			],
		},
		8: {
			preview: [e.poliwhirl, e.politoed],
			wave: [
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, 
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
			],
		},
		9: {
			preview: [e.poliwag, e.poliwhirl],
			wave: [
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, 
				e.poliwag, e.poliwag,e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, 
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, 
				null, null, null, null, null, null, null,
				e.poliwag, e.poliwag,e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag,
			],
		},
		10: {
			preview: [e.poliwag, e.poliwhirl, e.poliwrath],
			wave: [
				e.poliwrath, e.poliwrath,
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, 
				e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, 
				e.poliwrath, e.poliwrath,
			],
		},
		11: {
			preview: [e.politoed],
			wave: [
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
				e.politoed, e.politoed, 
			],
		},
		12: {
			preview: [e.golett, e.politoed],
			wave: [
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, 
				null, null, null, null, null, null, null, null,
				e.politoed, e.politoed, e.politoed, e.politoed, 
				null, null, null, null, null, null,
				e.politoed, e.politoed, e.politoed, e.politoed, 
			],
		},
		13: {
			preview: [e.politoed, e.poliwrath],
			wave: [
				e.politoed, e.politoed, e.politoed, null, null, e.poliwrath, null,
				e.politoed, e.politoed, e.politoed, null, null, e.poliwrath, null,
				e.politoed, e.politoed, e.politoed, null, null, e.poliwrath,

			],
		},
		14: {
			preview: [e.poliwag, e.poliwhirl, e.poliwrath],
			wave: [
				e.poliwrath,
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl,
				e.poliwrath, 
				e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, 
				e.poliwrath, 
			],
		},
		15: {
			preview: [e.pupitar],
			wave: [
				e.pupitar, e.pupitar, e.pupitar, 
			],
		},
		16: {
			preview: [e.pupitar, e.krokorok],
			wave: [
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, 
				e.pupitar, e.pupitar, 
				null, null, null, null, null, 
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
			],
		},
		17: {
			preview: [e.poliwhirl, e.pupitar],
			wave: [
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, null, e.pupitar, e.pupitar, e.pupitar,
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, null, e.pupitar, e.pupitar, e.pupitar, 
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, null, e.pupitar, e.pupitar, e.pupitar,
				null, null, null, null, null, null, e.pupitar, e.pupitar, e.pupitar,
			],
		},
		18: {
			preview: [e.politoed, e.poliwrath],
			wave: [
				e.poliwrath, e.poliwrath, e.poliwrath,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
			],
		},
		19: {
			preview: [e.golett, e.pupitar],
			wave: [
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,
				null, e.pupitar, null, e.pupitar, null, e.pupitar,
				null, null, null, null, null, null, null, null, null,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, 
				null, e.pupitar, null, e.pupitar, null, e.pupitar,
				
			],
		},
		20: {
			preview: [e.golett, e.golurk],
			wave: [
				e.golurk,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,  e.golett, e.golett, e.golett, e.golett, 
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,  e.golett, e.golett, e.golett, e.golett, 
			],
		},
		21: {
			preview: [e.poliwag, e.poliwhirl, e.poliwrath],
			wave: [
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl,
				e.poliwrath,
				e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, 
				e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, 
				e.poliwrath,
				e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag,
				e.poliwrath,
				null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null,
				e.poliwrath
			],
		},
		22: {
			preview: [e.politoed, e.krokorok],
			wave: [
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,  
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, 
			],
		},
		23: {
			preview: [e.pupitar, e.krokorok, e.delibird],
			wave: [
				e.pupitar, e.pupitar, 
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.pupitar, e.pupitar, 
				null, null, null, null, null,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				null, null, null, null, null,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				null, null, null, null, null, null,
				e.delibird
			],
		},
		24: {
			preview: [e.politoed, e.krokorok],
			wave: [
				e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,  
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
			],
		},
		25: {
			preview: [e.poliwag, e.poliwhirl, e.politoed, e.poliwrath],
			wave: [
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, 
				e.poliwag, e.poliwag,	e.poliwag, e.poliwag, e.poliwag, e.poliwag,	e.poliwag, e.poliwag, e.poliwag, e.poliwag, 
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
			],
		},
		26: {
			preview: [e.pupitar, e.golurk],
			wave: [
				e.golurk, e.golurk, 
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
			],
		},
		27: {
			preview: [e.politoed, e.krokorok, e.poliwrath],
			wave: [
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
				e.poliwrath, e.poliwrath, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
				e.poliwrath, e.poliwrath, 
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, 
				null, null, null, null,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,  
				e.poliwrath, e.poliwrath, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,  
				e.poliwrath, e.poliwrath, 
			],
		},
		28: {
			preview: [e.golett, e.golurk],
			wave: [
				e.golurk,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, 
				null, null, null, null, null,
				e.golurk, 
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, 
				null, null, null, null, null, 
				e.golurk,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, 
			],
		},
		29: {
			preview: [e.politoed, e.poliwrath],
			wave: [
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
			],
		},
		30: {
			preview: [e.politoed, e.poliwrath, e.gligar],
			wave: [
				e.poliwrath, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
				null, null, null,
				e.poliwrath, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
				null, null, null,
				e.poliwrath, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
				null, null, null,
				e.poliwrath, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
				null, null, null,
				e.gligar
			],
		},
		31: {
			preview: [e.golett, e.golurk],
			wave: [
				e.golurk,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, 
				e.golurk,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,  
				e.golurk,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,
				e.golurk,
			],
		},
		32: {
			preview: [e.poliwag, e.poliwhirl, e.politoed, e.poliwrath, e.gligar],
			wave: [
				e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl, e.poliwhirl,
				e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, e.poliwag, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
				null, null, null,
				e.gligar, e.gligar, e.gligar, e.gligar,
				null, null, null,
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, 
			],
		},
		33: {
			preview: [e.politoed, e.gligar],
			wave: [
				e.politoed, e.politoed, e.politoed,
				e.gligar, 
				e.politoed, e.politoed, e.politoed,
				e.gligar, 
				e.politoed, e.politoed, e.politoed,
				e.gligar, 
				e.politoed, e.politoed, e.politoed,
				e.gligar, 
				e.politoed, e.politoed, e.politoed,
				e.gligar, 
				e.politoed, e.politoed, e.politoed,
				e.gligar, 
			],
		},
		34: {
			preview: [e.golurk],
			wave: [
				e.golurk, e.golurk, 
				null, null, null, null, null, null,
				e.golurk, e.golurk, 
				null, null, null, null, null, null,
				e.golurk, e.golurk, 
			],
		},
		35: {
			preview: [e.politoed, e.gligar],
			wave: [
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.gligar, e.gligar, e.gligar
			],
		},
		36: {
			preview: [e.politoed, e.poliwrath, e.pupitar, e.krokorok, e.darumaka],
			wave: [
				e.darumaka, e.darumaka, 
				null, null, null, null, null, null,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				null, null, null, null, null, null,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
			],
		},
		37: {
			preview: [e.politoed, e.gligar],
			wave: [
				e.gligar, e.gligar, e.gligar,
				e.politoed, 
				e.gligar, e.gligar, e.gligar,
				e.politoed, 
				e.gligar, e.gligar, e.gligar,
				e.politoed, 
				e.gligar, e.gligar, e.gligar,
				e.politoed, 
			],
		},
		38: {
			preview: [e.poliwrath, e.gligar],
			wave: [
				e.gligar, e.gligar, e.gligar, 
				e.poliwrath, e.poliwrath,
				e.gligar, e.gligar, e.gligar,
				e.poliwrath, e.poliwrath, 
				e.gligar, e.gligar, e.gligar,
				e.poliwrath, e.poliwrath,  
				e.gligar, e.gligar, e.gligar,
				e.poliwrath, e.poliwrath, 
				e.gligar, e.gligar, e.gligar,
				e.poliwrath, e.poliwrath, 
				e.gligar, e.gligar, e.gligar,
				e.poliwrath, e.poliwrath, 
			],
		},
		39: {
			preview: [e.krokorok],
			wave: [
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
			],
		},
		40: {
			preview: [e.krokorok, e.krookodile],
			wave: [
				e.krookodile, e.krookodile, e.krookodile,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				
			],
		},
		41: {
			preview: [e.poliwrath, e.gligar, e.krookodile],
			wave: [
				e.krookodile, e.krookodile, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.krookodile, e.krookodile, 
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
				e.krookodile, e.krookodile, 
				
			],
		},
		42: {
			preview: [e.golurk, e.krookodile],
			wave: [
				e.golurk, e.golurk, e.golurk, e.golurk, 
				e.krookodile, e.krookodile, e.krookodile, 
				null, null, null, null, null, null, null, null, null, null,
				e.golurk, e.golurk, e.golurk, e.golurk,
				e.krookodile, e.krookodile, e.krookodile, 
			],
		},
		43: {
			preview: [e.pupitar, e.krokorok, e.darumaka, e.krookodile],
			wave: [
				e.darumaka, e.darumaka,
				e.krookodile, e.krookodile,
				e.krokorok, e.krokorok, e.krokorok, 
				e.pupitar, e.pupitar, e.pupitar, 
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, 
				e.krokorok, e.krokorok, e.krokorok, 
				e.krookodile, e.krookodile,
				e.pupitar, e.pupitar, e.pupitar, 
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, 
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
			],
		},
		44: {
			preview: [e.politoed, e.poliwrath, e.gligar],
			wave: [
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,

				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,

				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
			],
		},
		45: {
			preview: [e.darumaka],
			wave: [
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
			],
		},
		46: {
			preview: [e.politoed, e.poliwrath, e.gligar, e.krookodile],
			wave: [
				e.krookodile, e.krookodile,
				e.gligar, e.gligar, e.gligar, e.poliwrath, e.politoed, e.poliwrath, e.gligar, e.politoed, e.gligar, e.gligar,
				e.politoed, e.politoed, e.poliwrath, e.politoed, e.gligar, e.poliwrath, e.poliwrath, e.gligar, e.politoed, e.politoed,
				e.krookodile, e.krookodile,
				e.gligar, e.gligar, e.gligar, e.gligar,
				e.politoed, e.poliwrath, e.gligar, e.poliwrath, e.gligar, e.poliwrath, e.poliwrath, e.gligar, 
			],
			
		},
		47: {
			preview: [e.krokorok, e.krookodile],
			wave: [
				e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.krookodile, e.krookodile, e.krookodile, 
				e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.krookodile, e.krookodile, e.krookodile, 
				e.krokorok, e.krokorok, e.krokorok, e.krokorok,
			],
		},
		48: {
			preview: [e.golurk, e.gligar, e.krookodile],
			wave: [
				e.krookodile, e.krookodile, e.krookodile, 
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
			],
			
		},
		49: {
			preview: [e.golett, e.pupitar, e.golurk],
			wave: [
				e.golurk, e.golurk, e.golurk, e.golurk,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, 
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.golurk, e.golurk, e.golurk, e.golurk,
				e.golurk, e.golurk, e.golurk, e.golurk,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, 
				e.golurk, e.golurk, e.golurk, e.golurk,
			],
		},
		50: {
			preview: [e.pupitar, e.tyranitar],
			wave: [
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
				e.tyranitar, e.tyranitar, e.tyranitar, 
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
			],
		},
		51: { 
			preview: [e.pupitar, e.cacnea, e.kecleon],
			wave: [
				e.cacnea, 
				e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
				null, null, null, null, null, null,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon,
			] 
		},
		52: { 
			preview: [e.darumaka, e.tyranitar, e.cacnea],
			wave: [
				e.cacnea, e.cacnea, 
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, 
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, 
				null, null, null, null, null, null,
				e.tyranitar, e.tyranitar,
			] 
		},
		53: { 
			preview: [e.krokorok, e.krookodile],
			wave: [
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
			] 
		},
		54: { 
			preview: [e.darumaka, e.tyranitar, e.cacnea],
			wave: [
				e.cacnea, e.cacnea, e.cacnea, 
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, 
				e.tyranitar, e.tyranitar, e.tyranitar,
			] 
		},
		55: { 
			preview: [e.darumaka, e.cacnea],
			wave: [
				e.cacnea, e.cacnea, 
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.cacnea, e.cacnea,
			] 
		},
		56: { 
			preview: [e.golett, e.cacnea],
			wave: [
				e.cacnea, e.cacnea,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,
				e.cacnea, e.cacnea, 
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,
				e.cacnea, e.cacnea,  
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,
				e.cacnea, e.cacnea,
				e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett, e.golett,
			] 
		},
		57: { 
			preview: [e.tyranitar],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, 
				null, null, null, null, null,
				e.tyranitar, e.tyranitar, e.tyranitar, 
				null, null, null, null, null,
				e.tyranitar, e.tyranitar, e.tyranitar, 
			] 
		},
		58: { 
			preview: [e.pupitar, e.tyranitar, e.cacnea],
			wave: [
				e.cacnea, e.cacnea,
				null, null, null, null, null, null, null, null, null, null,
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				null, null, null, null, null, null,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				null, null, null, null, null, null,
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,
			] 
		},
		59: { 
			preview: [e.cacnea],
			wave: [
				e.cacnea, e.cacnea, e.cacnea, e.cacnea, 
				null, null, null, null, null, null, null, null, null, null,
				e.cacnea, e.cacnea, e.cacnea, e.cacnea,
			] 
		},
		60: { 
			preview: [e.cacnea, e.cacturne],
			wave: [
				e.cacturne, e.cacnea, e.cacnea, e.cacnea, e.cacnea, e.cacnea, 
			] 
		},
		61: { 
			preview: [e.poliwrath],
			wave: [
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
			] 
		},
		62: { 
			preview: [e.poliwrath, e.gligar, e.krookodile],
			wave: [
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				 e.krookodile, e.krookodile, e.krookodile,
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				 e.krookodile, e.krookodile, e.krookodile, 
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
			] 
		},
		63: { 
			preview: [e.tyranitar, e.cacnea],
			wave: [
				e.cacnea, e.cacnea, e.cacnea, 
				e.tyranitar, e.tyranitar, e.tyranitar, 
				null, null, null, null, null, null, null, null, null, null,
				e.cacnea, e.cacnea, e.cacnea, 
				e.tyranitar, e.tyranitar, e.tyranitar, 
			] 
		},
		64: { 
			preview: [e.cacturne],
			wave: [
				e.cacturne, e.cacturne, e.cacturne,
			] 
		},
		65: { 
			preview: [e.pupitar, e.golurk, e.krookodile, e.darumaka, e.tyranitar],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, 
			] 
		},
		66: { 
			preview: [e.krokorok, e.krookodile],
			wave: [
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
			] 
		},
		67: { 
			preview: [e.golurk, e.darumaka, e.tyranitar, e.cacnea],
			wave: [
				e.cacnea, e.cacnea, e.cacnea, e.cacnea, e.cacnea,
				null, null, null, null, null, null, null, 
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,
				null, null, null, null, null, null, null, 
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,
			] 
		},
		68: { 
			preview: [e.gligar],
			wave: [
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
			] 
		},
		69: { 
			preview: [e.darumaka, e.tyranitar, e.cacnea],
			wave: [
				e.cacnea, e.cacnea, e.cacnea, 
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				null, null, null, null, null, null, null, 
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				e.cacnea, e.cacnea, e.cacnea, 
			] 
		},
		70: { 
			preview: [e.pupitar, e.darumaka, e.darmanitan],
			wave: [
				e.darmanitan,
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, 
			] 
		},
		71: { 
			preview: [e.cacnea, e.cacturne],
			wave: [
				e.cacturne,
				null, null, null,
				e.cacnea, e.cacnea, e.cacnea, e.cacnea, e.cacnea,
				null, null, null, null, null, null,
				e.cacnea, e.cacnea, e.cacnea, e.cacnea, e.cacnea,
			] 
		},
		72: { 
			preview: [e.darumaka, e.darmanitan],
			wave: [
				e.darmanitan, e.darmanitan,
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, 
				e.darmanitan, e.darmanitan,
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, 
				e.darmanitan, e.darmanitan
			] 
		},
		73: { 
			preview: [e.tyranitar, e.delibird],
			wave: [
				e.delibird, e.delibird,
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,  
				e.delibird, e.delibird,
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,  
				e.delibird, e.delibird,
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,  
				e.delibird, e.delibird,
			] 
		},
		74: { 
			preview: [e.poliwrath, e.gligar, e.krookodile, e.tyranitar, e.cacturne],
			wave: [
				e.cacturne,

				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,

				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,

				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,
				
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
				e.cacturne,
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,

				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,

				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
			] 
		},
		75: { 
			preview: [e.krokorok, e.gligar, e.krookodile, e.darumaka, e.tyranitar],
			wave: [
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,

				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, 
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,

				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,

				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
			] 
		},
		76: { 
			preview: [e.darumaka, e.cacnea, e.darmanitan],
			wave: [
				e.darumaka, e.darmanitan, e.darumaka,
				null, null, null,
				e.cacnea, e.cacnea, 
				e.darmanitan, e.darumaka, e.darmanitan, 
				null, null, null,
				e.cacnea, e.cacnea,
				null, null, null,
				e.cacnea, e.cacnea, 
			]
		},
		77: { 
			preview: [e.golurk, e.tyranitar, e.cacnea, e.cacturne, e.darmanitan],
			wave: [
				e.cacturne, 
				e.darmanitan, e.darmanitan,
				e.tyranitar, e.tyranitar, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.cacnea, e.cacnea, e.cacnea,
				e.darmanitan, e.darmanitan,
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,
				null, null, null, null, null, 
				e.darmanitan,
				e.tyranitar, e.tyranitar, e.tyranitar, 
			] 
		},
		78: { 
			preview: [e.krokorok, e.poliwrath, e.krookodile, e.darmanitan],
			wave: [
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,

				e.darmanitan, e.darmanitan, e.darmanitan,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,
				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok,

				null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null,  
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,

				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
			] 
		},
		79: { 
			preview: [e.darumaka, e.tyranitar, e.cacnea, e.kecleon],
			wave: [
				e.cacnea, e.cacnea, e.cacnea, 
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, 
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, 
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, 
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, 	
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, 	
			] 
		},
		80: { 
			preview: [e.minior, e.kecleon],
			wave: [
				e.minior,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,		
			] 
		},
		81: { 
			preview: [e.darumaka, e.cacturne, e.darmanitan],
			wave: [
				e.darmanitan,
				e.cacturne, e.cacturne,
				e.darmanitan,
				e.darmanitan,
				null, null, null,
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.darmanitan,
				e.cacturne, e.cacturne,
			] 
		},
		82: { 
			preview: [e.krokorok, e.minior],
			wave: [
				e.minior,

				e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, e.krokorok, 
				null, null, null, null, null, null,
				e.minior,
			] 
		},
		83: { 
			preview: [e.pupitar, e.krookodile, e.tyranitar, e.darmanitan],
			wave: [
				e.darmanitan,
				e.tyranitar, e.tyranitar, e.tyranitar,
				e.darmanitan,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar, e.pupitar,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
			] 
		},
		84: { 
			preview: [e.darumaka, e.darmanitan],
			wave: [
				e.darmanitan, e.darmanitan, 
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.darmanitan, e.darmanitan, 
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.darmanitan, e.darmanitan, 
			] 
		},
		85: { 
			preview: [e.poliwrath, e.minior],
			wave: [
				e.minior, 
				e.poliwrath, e.poliwrath, e.poliwrath, 
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
				e.minior, 
				e.poliwrath, e.poliwrath, e.poliwrath, 
				e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath, e.poliwrath,
				e.minior, 
			] 
		},
		86: { 
			preview: [e.poliwrath, e.gligar, e.tyranitar, e.cacturne],
			wave: [
				e.poliwrath, e.gligar, e.poliwrath, e.gligar, e.poliwrath, e.gligar,
				e.cacturne,
				e.poliwrath, e.gligar, e.poliwrath, e.gligar, e.poliwrath, e.gligar,
				e.tyranitar,
				e.poliwrath, e.gligar, e.poliwrath, e.gligar, e.poliwrath, e.gligar,
				null,
				e.poliwrath, e.gligar, e.poliwrath, e.gligar, e.poliwrath, e.gligar,
				null,
				e.poliwrath, e.gligar, e.poliwrath, e.gligar, e.poliwrath, e.gligar,

			] 
		},
		87: { 
			preview: [e.pupitar, e.tyranitar, e.delibird],
			wave: [
				e.pupitar, e.tyranitar, e.pupitar, e.tyranitar, e.pupitar, e.tyranitar, e.pupitar, 
				null, null, null, null, null,null, null, null, null, null, 
				e.delibird, e.delibird, e.delibird,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird, e.delibird,
				null, null, null, null, null,null, null, null, null, null, null, null, null, 
				e.delibird, e.delibird, e.delibird,
				null, null, null, null, null,null, null, null, null, null,
				e.delibird, e.delibird,
				null, null, null, null, null,null, null, null, 
				e.delibird, e.delibird, e.delibird,
			] 
		},
		88: { 
			preview: [e.cacnea, e.cacturne],
			wave: [
				e.cacturne, e.cacturne, 
				e.cacnea, e.cacnea, e.cacnea, e.cacnea,  
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null, null, null,
				e.cacnea, e.cacnea, e.cacnea, e.cacnea,  
				e.cacturne, e.cacturne, 
			] 
		},
		89: { 
			preview: [e.darumaka, e.darmanitan],
			wave: [
				e.darumaka, e.darumaka, e.darmanitan, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				null, null, null, null,
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darmanitan, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
			] 
		},
		90: { 
			preview: [e.darmanitan, e.kangaskhan],
			wave: [
				e.darmanitan, e.darmanitan, e.darmanitan,
				e.kangaskhan
			] 
		},
		91: { 
			preview: [e.tyranitar, e.delibird],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				
				null, null, null,
				e.delibird,
				null, null, null, 
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,
				

				null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.delibird, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.delibird, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
			] 
		},
		92: { 
			preview: [e.butterfree, e.politoed, e.darumaka, e.darmanitan],
			wave: [
				e.darmanitan, e.darmanitan, e.darmanitan,
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, 
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				null, null, null, null, null, null, null, null, null,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
			] 
		},
		93: { 
			preview: [e.krookodile, e.kecleon],
			wave: [
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				null, null, null,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, 
				e.kecleon, e.kecleon, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				null, null, null,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.kecleon, e.kecleon, 

				null, null, null,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
	
				e.kecleon, e.kecleon,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				null, null, null,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.kecleon, e.kecleon,

			] 
		},
		94: { 
			preview: [e.kangaskhan],
			wave: [
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				null, null, null, null, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
			] 
		},
		95: { 
			preview: [e.lunatone, e.butterfree],
			wave: [
				e.lunatone, e.lunatone,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
			] 
		},
		96: { 
			preview: [e.solrock, e.politoed],
			wave: [
				e.solrock, e.solrock,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
			] 
		},
		97: { 
			preview: [e.solrock, e.butterfree, e.politoed],
			wave: [
				e.solrock, e.solrock,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.solrock, e.solrock,
			] 
		},
		98: { 
			preview: [e.lunatone, e.butterfree, e.politoed],
			wave: [
				e.lunatone, e.lunatone,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree, e.butterfree,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.lunatone, e.lunatone,
			] 
		},
		99: { 
			preview: [e.solrock, e.lunatone, e.butterfree, e.politoed],
			wave: [
				e.butterfree, e.politoed, e.butterfree, e.politoed, e.butterfree, e.politoed,
				e.lunatone, e.solrock,
				e.butterfree, e.politoed, e.butterfree, e.politoed, e.butterfree, e.politoed,
				e.butterfree, e.politoed, e.butterfree, e.politoed, e.butterfree, e.politoed,
				e.solrock, e.lunatone,
				e.butterfree, e.politoed, e.butterfree, e.politoed, e.butterfree, e.politoed,
			] 
		},
		100: { 
			preview: [e.regirock], 
			wave: [
				e.regirock
			] 
		},
	},
	5: {
		1: {
			preview: [e.trapinch],
			wave: [
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, 
				null, null, 
				e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				null, null, 
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, 
			],
		},
		2: {
			preview: [e.trapinch],
			wave: [
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				null, null, null, null, 
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				null, null, null, null, 
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
			],
		},
		3: {
			preview: [e.sandslash, e.gligar, e.trapinch],
			wave: [
				e.sandslash, e.sandslash, e.sandslash, e.sandslash,

				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,

				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				null, null, null,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
			],
		},
		4: {
			preview: [e.sandslash, e.darumaka],
			wave: [
				e.darumaka, e.darumaka,
				null, null, null, null, null, null,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
			],
		},
		5: {
			preview: [e.sandslash, e.trapinch],
			wave: [
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				null, null, null, null, null, null,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,

			],
		},
		6: {
			preview: [e.sandslash, e.trapinch],
			wave: [
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, 
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, 
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				null, null, null, null, 
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
			],
		},
		7: {
			preview: [e.sandslash, e.trapinch],
			wave: [
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
			],
		},
		8: {
			preview: [e.darumaka, e.gligar, e.dugtrio],
			wave: [
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.dugtrio, e.dugtrio, e.dugtrio, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, 
			],
		},
		9: {
			preview: [e.sandslash, e.darumaka, e.trapinch],
			wave: [
				e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
			],
		},
		10: {
			preview: [e.maractus],
			wave: [
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,
			],
		},
		11: {
			preview: [e.maractus, e.trapinch, e.vibrava],
			wave: [
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				null, null, null, null, 
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava,
			],
		},
		12: {
			preview: [e.darumaka, e.dugtrio, e.baltoy],
			wave: [
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,  
			],
		},
		13: {
			preview: [e.vibrava, e.baltoy],
			wave: [
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, 
				null, null, null, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, 
				null, null, null, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
			],
		},
		14: {
			preview: [e.sandslash, e.gligar],
			wave: [
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,

				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
			],
		},

		15: {
			preview: [e.dugtrio, e.trapinch, e.vibrava],
			wave: [
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,

				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			],
		},
		16: {
			preview: [e.maractus, e.delibird],
			wave: [
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, 
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird
			],
		},
		17: {
			preview: [e.darumaka, e.gligar, e.trapinch, e.vibrava, e.baltoy],
			wave: [
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,		
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,

				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				null, null, null, null, null, null, null, null, null, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,			
			],
		},
		18: {
			preview: [e.dugtrio, e.darumaka, e.trapinch, e.vibrava],
			wave: [
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,

				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,

				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			],
		},
		19: {
			preview: [e.dugtrio, e.maractus],
			wave: [	
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			],
		},
		20: {
			preview: [e.sandslash, e.tyranitar, e.trapinch, e.vibrava],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,

				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,

				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,

				null, null, null, null, null,

				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,

				null, null, null, null, null,

				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
			],
		},
		21: {
			preview: [e.darumaka, e.tyranitar, e.vibrava],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar,
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
			],
		},
		22: {
			preview: [e.krookodile, e.baltoy, e.kecleon],
			wave: [
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, 
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
			],
		},
		23: {
			preview: [e.tyranitar, e.cacturne, e.trapinch, e.vibrava],
			wave: [
				e.cacturne, 

				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,

				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 

				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
			],
		},
		24: {
			preview: [e.sandslash, e.dugtrio, e.cacturne],
			wave: [
				e.cacturne,  e.cacturne,  e.cacturne, e.cacturne, e.cacturne,  
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,

				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			],
		},
		25: {
			preview: [e.dugtrio, e.maractus, e.tyranitar, e.baltoy],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				null, null, null, null, null,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			],
		},
		26: {
			preview: [e.tyranitar, e.krookodile, e.cacturne, e.trapinch, e.vibrava],
			wave: [
				e.cacturne, e.cacturne, e.cacturne, 
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,

				null, null, null,

				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,

				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,

				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,			
			],
		},
		27: {
			preview: [e.darumaka, e.gligar, e.krookodile, e.cacturne],
			wave: [
				e.cacturne, e.cacturne, e.cacturne, e.cacturne, e.cacturne, 
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
			],
		},
		28: {
			preview: [e.dugtrio, e.tyranitar],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			],
		},
		29: {
			preview: [e.sandslash, e.dugtrio, e.cacturne],
			wave: [
				e.cacturne, e.cacturne, e.cacturne,
				null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, 
				null, null, null, null, null, null, null, 
				e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, e.sandslash, e.dugtrio, 
				null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			],
		},
		30: {
			preview: [e.sandslash, e.gligar, e.dugtrio, e.cacturne, e.sigilyph],
			wave: [
				e.sigilyph,
				null, null, 
				e.cacturne, e.cacturne, e.cacturne, 
				null, null, null, null, null, null, null, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,

				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			],
		},
		31: {
			preview: [e.darumaka, e.gligar, e.dugtrio, e.maractus],
			wave: [
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				null, null, null, 
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,
				null, null, null, null, null, null, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				null, null, null, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio,  
				null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, 	
			],
		},
		32: {
			preview: [e.baltoy, e.tyranitar, e.sigilyph],
			wave: [
				e.sigilyph,
				null, null, null, 
				e.sigilyph,
				null, null, null, 
				e.sigilyph,

				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,
	
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				null, null, null, null, null, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				null, null, null, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
			],
		},
		33: {
			preview: [e.baltoy, e.krookodile, e.cacturne],
			wave: [
				e.cacturne, e.cacturne, e.cacturne, e.cacturne, e.cacturne,

				null, null, null, null, null, null,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				null, null, null, null, null, null,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
			],
		},
		34: {
			preview: [e.tyranitar, e.krookodile],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				null, null, null, null, 
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,
			],
		},
		35: {
			preview: [e.sigilyph],
			wave: [
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.sigilyph, e.sigilyph,
			],
		},
		36: {
			preview: [e.baltoy, e.krookodile, e.cacturne, e.sigilyph],
			wave: [
				e.cacturne, e.cacturne, 
				null, null, null, null,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.cacturne, e.cacturne,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,

				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
			],
		},
		37: {
			preview: [e.tyranitar, e.krookodile, e.cacturne, e.sigilyph],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, 
				e.cacturne, e.cacturne, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,

				e.cacturne, e.cacturne, e.tyranitar, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.sigilyph, e.sigilyph, e.sigilyph, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, 
			],
		},
		38: {
			preview: [e.sandslash, e.darumaka, e.dugtrio, e.kecleon],
			wave: [
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,

				null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				

				e.darumaka, e.darumaka, e.darumaka,

				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			],
		},
		39: {
			preview: [e.baltoy],
			wave: [
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
			],
		},
		40: {
			preview: [e.baltoy, e.claydol],
			wave: [
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol,

				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol,
			],
		},
		41: {
			preview: [e.maractus, e.cacturne, e.claydol],
			wave: [
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, 
				e.cacturne,
				e.claydol, e.claydol,
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,
				e.cacturne, 
				e.claydol,
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, 
				e.claydol, e.claydol,
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,
				e.cacturne,
				e.claydol,
				e.cacturne, 
				null, null,  
				e.claydol, e.claydol,
				null, null, null, null, null, 
				e.claydol, e.claydol, e.claydol, e.claydol,
				null, null, null, null, null, 
				e.claydol, e.claydol,
				null, null, null, null, null, 
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
			],
		},
		42: {
			preview: [e.darumaka, e.baltoy, e.claydol, e.darmanitan],
			wave: [
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, 
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan,
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,

				e.claydol, e.claydol, e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol, e.claydol, e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol, e.claydol, e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,

			],
		},
		43: {
			preview: [e.sandslash, e.gligar, e.sigilyph, e.claydol, e.darmanitan],
			wave: [
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, 
				null, null, null, null, null, null, null, null,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				null, null, null, null, null, null, null, null,

				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 

				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,

				e.claydol, e.claydol, e.claydol,

				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,

				null, null, null, null,

				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,	
			],
		},
		44: {
			preview: [e.darumaka, e.darmanitan],
			wave: [
				e.darumaka, e.darumaka, e.darmanitan, e.darmanitan, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darmanitan, e.darmanitan, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan,
				e.darumaka, e.darumaka, e.darmanitan, e.darmanitan, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darmanitan, e.darmanitan, e.darumaka, e.darumaka, e.darumaka, e.darumaka,
			],
		},
		45: {
			preview: [e.tyranitar, e.baltoy, e.claydol, e.delibird],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,

				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird,
			],
		},
		46: {
			preview: [e.darumaka, e.baltoy, e.claydol, e.darmanitan],
			wave: [
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan,
				e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka, e.darumaka,

				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
			],
		},
		47: {
			preview: [e.gligar, e.dugtrio, e.maractus, e.vibrava],
			wave: [
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,

				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				null, null, null, null, null, null, null, null, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,

				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				null, null, null, null, null, null, null, null,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,  

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			],
		},
		48: {
			preview: [e.sandslash, e.dugtrio, e.krookodile, e.cacturne, e.claydol],
			wave: [
				e.cacturne, e.cacturne, e.cacturne, e.cacturne, e.cacturne, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.claydol, e.claydol, e.claydol, e.claydol,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,  
				null, null, null, null, null, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,

				null, null, null, null, null, null, null, null, null, null, 
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			],
		},
		49: {
			preview: [e.baltoy, e.tyranitar, e.claydol, e.darmanitan],
			wave: [
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan,
				e.tyranitar, e.tyranitar, e.tyranitar, 
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan,
				e.tyranitar, e.tyranitar, e.tyranitar, 

				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,

				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
			],
		},
		50: {
			preview: [e.tyranitar, e.sigilyph, e.kangaskhan],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 

			],
		},
		51: { 
			preview: [e.darmanitan, e.kangaskhan],
			wave: [
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan,

				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
			] 
		},
		52: { 
			preview: [e.dugtrio, e.kangaskhan],
			wave: [
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 

				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 

				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 

				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			] 
		},
		53: { 
			preview: [e.baltoy, e.tyranitar, e.cacturne, e.sigilyph, e.claydol],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.cacturne,  
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, 
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
			] 
		},
		54: { 
			preview: [e.sigilyph, e.claydol, e.darmanitan, e.kangaskhan],
			wave: [
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, 

				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,

				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 

				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
			] 
		},
		55: {
			preview: [e.vibrava, e.tyranitar, e.cacturne],
			wave: [
				e.cacturne, e.cacturne, 

				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,

				e.cacturne, e.cacturne,

				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
			],
		},
		56: { 
			preview: [e.cacturne, e.sigilyph, e.claydol, e.darmanitan, e.kangaskhan],
			wave: [
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,

				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 

				e.sigilyph, e.sigilyph,
				e.cacturne, e.cacturne, 

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, 

				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,

				e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, 

			] 
		},
		57: { 
			preview: [e.tyranitar, e.krookodile, e.cacturne, e.sigilyph, e.claydol],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				e.cacturne,
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.cacturne, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,

				e.claydol, e.claydol, e.claydol, e.claydol, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.claydol, e.claydol, e.claydol, e.claydol, 
			
			] 
		},
		58: { 
			preview: [e.krookodile, e.cacturne, e.sigilyph, e.kangaskhan],
			wave: [
				e.cacturne,
				e.sigilyph, e.sigilyph, 
				e.cacturne, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,  
				e.sigilyph, e.sigilyph, 
				e.cacturne,
				e.sigilyph, e.sigilyph, 
				e.cacturne, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
			] 
		},
		59: { 
			preview: [e.cacturne, e.sigilyph, e.claydol, e.darmanitan, e.kangaskhan],
			wave: [
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				null, null, null, null, null, null,
				e.darmanitan, e.darmanitan, 
				e.cacturne, e.cacturne,
				e.darmanitan, e.darmanitan, 
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, 

				e.sigilyph, e.sigilyph, e.sigilyph, 

				e.kangaskhan, e.kangaskhan, e.kangaskhan, 
	
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
			] 
		},
		60: { 
			preview: [e.gligar, e.gliscor],
			wave: [
				e.gligar, e.gligar, e.gligar, e.gligar, 
				null, null, null,
				e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gliscor, e.gliscor, e.gliscor, 
			] 
		},
		61: { 
			preview: [e.tyranitar, e.cacturne, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, e.gliscor, e.gliscor,
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				e.cacturne, e.cacturne, e.cacturne, 
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				e.cacturne, e.cacturne, e.cacturne,
			]
		},
		62: { 
			preview: [e.kangaskhan, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, e.gliscor, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,  
				e.gliscor, e.gliscor, e.gliscor,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
			] 
		},
		63: { 
			preview: [e.dugtrio, e.cacturne, e.baltoy, e.claydol, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, e.gliscor, e.gliscor,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.cacturne, e.cacturne, e.cacturne, e.cacturne,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.gliscor, e.gliscor, e.gliscor, e.gliscor,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.cacturne, e.cacturne, e.cacturne, e.cacturne,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,

				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null, null, null,

				null, null, null, null, null, null, null, null, null, null,

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			] 
		},
		64: { 
			preview: [e.dugtrio, e.cacturne, e.claydol, e.kangaskhan, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, 
				e.cacturne, 
				e.gliscor, e.gliscor,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				null, null, null,
				e.cacturne,
				null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.gliscor, e.gliscor, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.gliscor, e.gliscor, 
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				e.cacturne, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan,

				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,  
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			] 
		},
		65: { 
			preview: [e.maractus, e.tyranitar, e.cacturne, e.sigilyph, e.gliscor],
			wave: [
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				null, null, null, null, null, null, null, null, null, null,
				e.gliscor, e.gliscor, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				null, null, null, null, null, null, null, null, null, null,
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,

				e.cacturne, e.cacturne,

				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
			] 
		},
		66: { 
			preview: [e.maractus, e.sigilyph],
			wave: [
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,
				e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus, e.maractus,

				e.sigilyph, e.sigilyph, e.sigilyph,   
				null, null, null, null, null, null, null, null, null, null,
				e.sigilyph, e.sigilyph, e.sigilyph, 
				null, null, null, null, null, null, null, null, null, null,
				e.sigilyph, e.sigilyph, e.sigilyph, 
			] 
		},
		67: { 
			preview: [e.baltoy, e.claydol],
			wave: [
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy, e.baltoy,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
			] 
		},
		68: { 
			preview: [e.maractus, e.gliscor, e.delibird],
			wave: [
				e.maractus, e.maractus, e.maractus, e.maractus,
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, 
				e.maractus, e.maractus, e.maractus, e.maractus, 
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
			] 
		},
		69: { 
			preview: [e.gliscor],
			wave: [
				e.gliscor, e.gliscor, e.gliscor, e.gliscor,
				null, null, null, null, null, null, null, 
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, 
				null, null, null, null, null, null, null,
				e.gliscor, e.gliscor, e.gliscor, e.gliscor,  
			] 
		},
		70: { 
			preview: [e.tyranitar, e.gliscor, e.kecleon],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar,

				e.gliscor, e.gliscor, e.gliscor,
				null, null, null,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				null, null, null,
				e.gliscor, e.gliscor, e.gliscor,
			] 
		},
		71: { 
			preview: [e.krookodile, e.cacturne, e.sigilyph, e.kangaskhan],
			wave: [
				e.cacturne,
				e.sigilyph, e.sigilyph, e.sigilyph, 
				e.cacturne,

				e.krookodile, e.krookodile, e.krookodile, e.krookodile, 
				e.cacturne, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, 

				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,

				e.sigilyph, e.sigilyph, e.sigilyph, 
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 

			] 
		},
		72: { 
			preview: [e.cacturne, e.claydol, e.kangaskhan, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, 
				e.cacturne, e.cacturne, 
				e.gliscor, e.gliscor,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null,
				e.cacturne, e.cacturne, 
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, 
				e.gliscor, e.gliscor, 
				e.kangaskhan, e.kangaskhan,  
				e.gliscor, e.gliscor,  
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,

			] 
		},
		73: { 
			preview: [e.kangaskhan],
			wave: [
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.kangaskhan, e.kangaskhan,  
				null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
			] 
		},
		74: { 
			preview: [e.tyranitar, e.cacturne, e.sigilyph, e.gliscor],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				e.gliscor, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.cacturne, 
				e.gliscor,
				e.cacturne, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
			] 
		},
		75: { 
			preview: [e.cacturne, e.darmanitan],
			wave: [
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, 
				e.cacturne, e.cacturne, e.cacturne, e.cacturne,
				null, null, null, null, null, null, null, null,
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan,
				e.cacturne, e.cacturne, e.cacturne, e.cacturne,
			] 
		},
		76: { 
			preview: [e.claydol, e.kangaskhan],
			wave: [
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
			] 
		},
		77: { 
			preview: [e.tyranitar, e.cacturne, e.darmanitan, e.kangaskhan, e.gliscor],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan,
				e.cacturne, e.cacturne, e.cacturne, e.cacturne, 
				null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,

			] 
		},
		78: { 
			preview: [e.darmanitan, e.kangaskhan, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, 
				null, null, null, null,
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan,
				null, null, null, null,
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, 
				null, null, null, null,
				e.gliscor, e.gliscor, e.gliscor, e.gliscor,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
			] 
		},
		79: { 
			preview: [e.trapinch],
			wave: [
				e.trapinch,
			] 
		},
		80: { 
			preview: [e.vibrava, e.flygon],
			wave: [
				e.flygon,

				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
			] 
		},
		81: { 
			preview: [e.trapinch, e.flygon],
			wave: [
				e.flygon, e.flygon, 
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.flygon, e.flygon, 
			] 
		},
		82: { 
			preview: [e.kangaskhan, e.gliscor, e.flygon],
			wave: [
				e.flygon, 
				null, null,
				e.gliscor, e.gliscor, e.gliscor, e.gliscor,
				null, null,
				e.flygon,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				
			] 
		},
		83: { 
			preview: [e.tyranitar, e.cacturne, e.darmanitan, e.gliscor, e.flygon],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				e.flygon, e.flygon,  
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, 
				e.gliscor,
				null, null, null, null, null, null,
				e.tyranitar, e.tyranitar, e.tyranitar, 
				e.cacturne, e.cacturne, 
				e.tyranitar, e.tyranitar, e.tyranitar, 
				e.cacturne, e.cacturne, 
				e.gliscor,  
			] 
		},
		84: { 
			preview: [e.sandslash, e.tyranitar, e.flygon],
			wave: [
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				e.flygon, e.flygon,  
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				null, null, null, null, null, null,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,
				null, null, null, null, null, null,
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash, 
				e.sandslash, e.sandslash, e.sandslash, e.sandslash, e.sandslash,  
			] 
		},
		85: { 
			preview: [e.delibird],
			wave: [
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
			] 
		},
		86: { 
			preview: [e.dugtrio, e.sigilyph, e.gliscor, e.flygon], 
			wave: [
				e.flygon,
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, 
				null, null, null, null, null, null,
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.flygon,
			] 
		},
		87: { 
			preview: [e.trapinch, e.vibrava, e.flygon],
			wave: [
				e.flygon, e.flygon, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				null, null, null, null, null, null,
				e.flygon, e.flygon,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				null, null, null, null, null, null,
				e.flygon, e.flygon, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				null, null, null, null, null, null,
				e.flygon, e.flygon, 
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
			] 
		},
		88: { 
			preview: [e.claydol, e.darmanitan, e.kangaskhan, e.gliscor],
			wave: [
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, 

				e.gliscor, e.gliscor, e.gliscor,

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, 

				e.gliscor, e.gliscor, e.gliscor, 

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan,  

				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
			] 
		},
		89: { 
			preview: [e.claydol, e.darmanitan, e.gliscor, e.flygon],
			wave: [
				e.darmanitan, e.darmanitan, e.darmanitan, 
				e.flygon, 
				e.darmanitan, 
				e.gliscor, 
				e.flygon, 
				e.gliscor, 
				null, null, null, null, null, null,
				null, null, null, null,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				null, null, null,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				null, null, null, null, null,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.flygon,
				e.gliscor, e.gliscor, e.gliscor, e.gliscor,
				null, null, null, null, null, null,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				null, null, null,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				e.flygon, 
				e.claydol, e.claydol, e.claydol,
				null, null, null, null,
				e.gliscor, 
				null, null, null,
				e.gliscor, e.gliscor, e.gliscor, 
				null, null, null,
				e.gliscor, e.gliscor, e.gliscor,
				
			] 
		},
		90: { 
			preview: [e.cacturne, e.flygon],
			wave: [
				e.flygon, e.flygon, e.flygon,
				null, null, null, 
				e.cacturne, e.cacturne, e.cacturne, e.cacturne, e.cacturne, e.cacturne,				
			] 
		},
		91: { 
			preview: [e.darmanitan, e.tyranitar, e.cacturne, e.gliscor, e.kecleon],
			wave: [
				e.cacturne, e.tyranitar, e.gliscor, e.kecleon, e.darmanitan, e.kecleon,
				e.cacturne, e.tyranitar, e.gliscor, e.kecleon, e.darmanitan, e.kecleon,
				e.cacturne, e.tyranitar, e.gliscor, e.kecleon, e.darmanitan, e.kecleon,
				e.cacturne, e.tyranitar, e.gliscor, e.kecleon, e.darmanitan, e.kecleon,
				e.cacturne, e.tyranitar, e.gliscor, e.kecleon, e.darmanitan, e.kecleon,
				e.cacturne, e.kecleon, e.gliscor, e.kecleon, e.cacturne, 
				e.cacturne, e.kecleon, e.gliscor, e.kecleon, e.cacturne, 
				e.cacturne, e.kecleon, e.gliscor, e.kecleon, e.cacturne, 
				e.cacturne, e.kecleon, null, e.kecleon, e.cacturne, 
				e.cacturne, e.kecleon, null, e.kecleon, e.cacturne, 
			] 
		},
		92: { 
			preview: [e.trapinch, e.vibrava, e.flygon, e.kecleon],
			wave: [
				e.flygon, e.trapinch, e.kecleon, e.vibrava, e.flygon, e.kecleon,
				e.flygon, e.trapinch, e.kecleon, e.vibrava, e.vibrava, e.kecleon,
				e.flygon, e.trapinch, e.kecleon, e.vibrava, e.trapinch, e.kecleon,
				e.flygon, e.trapinch, e.kecleon, e.vibrava, e.vibrava, e.kecleon,
				e.flygon, e.trapinch, e.kecleon, e.vibrava, e.flygon, e.kecleon,
			] 
		},
		93: { 
			preview: [e.claydol, e.flygon, e.kecleon],
			wave: [
				e.flygon, e.flygon, 
			  	e.kecleon, e.kecleon, e.kecleon, e.kecleon, 
			  	e.kecleon, e.kecleon, e.kecleon, e.kecleon,
			  	e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
			  	e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol,
			  	e.flygon, e.flygon,  
			  	e.kecleon, e.kecleon, e.kecleon, e.kecleon, 
			  	e.kecleon, e.kecleon, e.kecleon, e.kecleon, 
			] 
		},
		94: { 
			preview: [e.dugtrio, e.cacturne, e.claydol, e.kangaskhan, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, e.gliscor, e.gliscor,
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, e.claydol, 
				e.cacturne, e.cacturne, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.gliscor, e.gliscor, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.gliscor, e.gliscor, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,  
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			] 
		},
		95: { 
			preview: [e.kangaskhan],
			wave: [
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
			] 
		},
		96: { 
			preview: [e.vibrava],
			wave: [
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
			] 
		},
		97: { 
			preview: [e.tyranitar, e.sigilyph, e.gliscor, e.flygon],
			wave: [
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.flygon, e.flygon,  
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.gliscor,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, e.tyranitar, 
				e.gliscor,  
			] 
		},
		98: { 
			preview: [e.trapinch, e.vibrava, e.flygon],
			wave: [
				e.flygon, e.flygon, e.flygon,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
			] 
		},
		99: { 
			preview: [e.flygon],
			wave: [
				e.flygon, e.flygon, 
				null, null, null, null,
				null, null, null, null,
				e.flygon, e.flygon, 
				null, null, null, null, 
				null, null, null, null,
				e.flygon, e.flygon, 
			] 
		},
		100: { 
			preview: [e.groudon], 
			wave: [
				e.groudon
			] 
		},
	},
	6: {
		1: {
			preview: [e.minccino],
			wave: [
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
			],
		},
		2: {
			preview: [e.minccino, e.sneasel],
			wave: [
				e.minccino, e.minccino, e.minccino, null, null, null,
				e.minccino, e.sneasel
			],
		},
		3: {
			preview: [e.minccino, e.sneasel],
			wave: [
				e.sneasel, e.sneasel, e.sneasel, 
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
				e.sneasel, e.sneasel, e.sneasel, 
			]
		},
		4: {
			preview: [e.minccino, e.sneasel],
			wave: [
				e.minccino, e.minccino, null, null, null,
				e.sneasel, e.sneasel, e.sneasel,
				e.minccino, e.minccino, e.minccino, e.minccino
			],
		},
		5: {
			preview: [e.minccino, e.swinub],
			wave: [
				e.minccino, e.minccino, e.minccino, e.minccino, 
				e.swinub, e.swinub, e.swinub,
			],
		},
		6: {
			preview: [e.sneasel, e.swinub],
			wave: [
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel
			],
		},
		7: {
			preview: [e.minccino, e.sneasel, e.swinub],
			wave: [
				e.swinub, e.swinub, e.swinub, e.swinub, 
				null, null, null, null, null, null, null, 
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, 
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, 
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, 
			],
		},
		8: {
			preview: [e.hoothoot],
			wave: [
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot,
			],
		},
		9: {
			preview: [e.minccino, e.swinub],
			wave: [
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,	
			],
		},
		10: {
			preview: [e.minccino, e.swablu],
			wave: [
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
				null, null, null, 
				e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, 
			],
		},
		11: {
			preview: [e.minccino, e.sneasel, e.swinub],
			wave: [
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				null, null, null, null, null, null, null, null, null, null, 
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
				null, null, null, null, null, null, null, null, null, null, 
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
			],
		},
		12: {
			preview: [e.hoothoot],
			wave: [
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot,
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot,
			],
		},
		13: {
			preview: [e.minccino, e.swinub, e.hoothoot],
			wave: [
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				null, null, null, null, null, 
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, 
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot,
			],
		},
		14: {
			preview: [e.swinub],
			wave: [
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
			],
		},
		15: {
			preview: [e.hoothoot, e.swablu],
			wave: [
				e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu,
				null, null, null, null, null, null,  
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
			],	
		},
		16: {
			preview: [e.minccino, e.cinccino],
			wave: [
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, 
				null,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, 
				null,
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
			],
		},
		17: {
			preview: [e.minccino, e.sneasel, e.cinccino],
			wave: [
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino,
			],
		},
		18: {
			preview: [e.swinub, e.tympole],
			wave: [
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole,
			],
		},
		19: {
			preview: [e.tympole, e.cinccino],
			wave: [
				e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, 
				null, null, null,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, 
			],
		},
		20: {
			preview: [e.swinub, e.snover],
			wave: [
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
			],
		},
		21: {
			preview: [e.swablu, e.tympole, e.cinccino, e.snover],
			wave: [
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.swablu, e.swablu, e.swablu, 
				e.tympole, e.tympole, e.tympole, e.tympole, 
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, 
			],
		},
		22: {
			preview: [e.tympole, e.cinccino],
			wave: [
				e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,	
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,	
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,		
			],
		},
		23: {
			preview: [e.minccino, e.sneasel, e.swinub],
			wave: [
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
			],
		},
		24: {
			preview: [e.hoothoot],
			wave: [
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot,
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot,
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot,
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot,
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot,
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot,
			],
		},
		25: {
			preview: [e.swablu, e.snover, e.tympole, e.cinccino],
			wave: [
				e.snover, e.snover, e.snover, e.snover, 
				e.swablu, e.swablu, e.swablu, e.swablu, 
				e.snover, e.snover, e.snover, e.snover, 
				e.swablu, e.swablu, e.swablu, e.swablu, 
				e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, 
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino
			],
		},
		26: {
			preview: [e.swinub, e.snover],
			wave: [
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, null, null,
				e.snover, e.snover, e.snover, e.snover, e.snover, null, null,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,

			],
		},
		27: {
			preview: [e.minccino, e.sneasel, e.snover],
			wave: [
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
				
			],
		},
		28: {
			preview: [e.swablu, e.snover, e.cinccino],
			wave: [
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu,
				null,
				e.cinccino, e.cinccino, e.cinccino,
				e.snover, e.snover, e.snover, e.snover,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
			],
		},
		29: {
			preview: [e.minccino, e.cinccino],
			wave: [
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, 
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
			],
		},
		30: {
			preview: [e.sneasel, e.weavile],
			wave: [
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.weavile, e.weavile, e.weavile, e.weavile, 
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, 
				
			],
		},
		31: {
			preview: [e.tympole, e.palpitoad, e.delibird],
			wave: [
				e.palpitoad, e.palpitoad, 
				e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole,
				e.palpitoad, e.palpitoad, 
				e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole,
				e.palpitoad, e.palpitoad, 
				e.delibird,
			],
		},
		32: {
			preview: [e.minccino, e.cinccino],
			wave: [
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, null, null,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, null, null,
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, null, null,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, null, null,
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, null, null,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
			],
		},
		33: {
			preview: [e.snover, e.tympole, e.hoothoot],
			wave: [
				e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.snover, e.snover, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,  
				e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole,	
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot,
			],
			
		},
		34: {
			preview: [e.minccino, e.sneasel, e.swinub, e.cinccino, e.weavile],
			wave: [
				e.weavile,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				null, null, null, null, null, null, null, null, null, null, 

				e.cinccino, e.cinccino,  null, 
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
				null, null, null, 
				e.cinccino, e.cinccino,  null, 
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.weavile,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,		
			],
		},
		35: {
			preview: [e.weavile, e.palpitoad, e.absol],
			wave: [
				e.absol, e.absol, e.absol,
				null, null, null, null, null, null,
				e.weavile, e.weavile, e.weavile,
				
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
			],
		},
		36: {
			preview: [e.hoothoot],
			wave: [
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
			],
		},
		37: {
			preview: [e.minccino, e.sneasel, e.swablu, e.snover, e.tympole],
			wave: [
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,

				e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, 
				e.swablu, e.swablu,

				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, 
				null, 
				e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, 
				null, null, null, null,
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, 
				null, 
				e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, 
			],
		},
		38: {
			preview: [e.swinub, e.snover, e.cinccino],
			wave: [
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, 
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, 

				e.snover, e.snover, e.snover, e.snover, e.snover,
				null,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				null,
				e.snover, e.snover, e.snover, e.snover, e.snover, 
				null,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, 
				null,
				e.snover, e.snover, e.snover, e.snover, e.snover,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, 
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, 
			],
		},
		39: {
			preview: [e.sneasel, e.tympole, e.weavile, e.palpitoad],
			wave: [
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, 
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 

				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, 
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
			],
		},
		40: {
			preview: [e.swablu, e.altaria],
			wave: [
				e.swablu, e.swablu, e.swablu, e.swablu, e.swablu,  e.swablu, e.swablu, null, null,
				e.swablu, e.swablu, e.swablu,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.swablu, e.swablu, e.swablu, null, null,
				e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu,
			],
		},
		41: {
			preview: [e.cinccino, e.weavile],
			wave: [
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
			],
		},
		42: {
			preview: [e.minccino, e.sneasel, e.cinccino, e.weavile],
			wave: [
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,

				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
			],
			
		},
		43: {
			preview: [e.delibird],
			wave: [
				e.delibird, null,  null, e.delibird,  null,  null, e.delibird
			],
		},
		44: {
			preview: [e.snover, e.tympole, e.palpitoad],
			wave: [
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,

				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.snover, e.snover, e.snover, e.snover, e.snover,
			]
		},
		45: {
			preview: [e.snover, e.tympole, e.cinccino, e.weavile, e.palpitoad],
			wave: [
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
				e.weavile, e.weavile, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.snover, e.snover, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, 
				e.tympole, e.tympole, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.cinccino, e.cinccino,
			]
		},
		46: {
			preview: [e.sneasel, e.hoothoot, e.weavile],
			wave: [
				e.hoothoot, e.hoothoot, 
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
			],
			
		},
		47: {
			preview: [e.minccino, e.sneasel, e.swinub, e.snover],
			wave: [
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.snover, e.snover,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, 
			],
		},
		48: {
			preview: [e.swinub, e.snover, e.cinccino, e.weavile],
			wave: [
				e.weavile, e.weavile, e.weavile, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.swinub, e.swinub,
				e.weavile, e.weavile, e.weavile,
				null, null, null, null, null, null,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.weavile, e.weavile, e.weavile,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.weavile, e.weavile, e.weavile,
				
			],
		},
		49: {
			preview: [e.hoothoot, e.palpitoad],
			wave: [
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				null, null, null,
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
			],
		},
		50: {
			preview: [e.swinub, e.piloswine],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine,	
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,			
			],
		},
		51: {
			preview: [e.cinccino, e.weavile, e.altaria],
			wave: [
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, 
			],
		},
		52: {
			preview: [e.swinub, e.altaria, e.piloswine],
			wave: [
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.piloswine,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, 
				e.piloswine, 
			],
		},
		53: {
			preview: [e.sneasel, e.weavile],
			wave: [
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.weavile, e.weavile, e.weavile, 
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.weavile, e.weavile, e.weavile, 
			],
		},
		54: {
			preview: [e.swinub, e.swablu, e.altaria, e.piloswine],
			wave: [
				e.altaria, e.altaria, e.altaria,
				e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu,
				e.altaria, e.altaria, e.altaria,

				e.piloswine, e.piloswine, e.piloswine,
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.piloswine, e.piloswine, e.piloswine,

				e.altaria, e.altaria, e.altaria,
				e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu,
				e.altaria, e.altaria, e.altaria,	 
			],
		},
		55: {
			preview: [e.piloswine, e.hoothoot],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,  
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot,
			],
		},
		56: {
			preview: [e.swinub, e.palpitoad, e.altaria, e.piloswine],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, 
				e.altaria, e.altaria,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.altaria, e.altaria,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.altaria, e.altaria,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
			],
		},
		57: {
			preview: [e.minccino, e.sneasel, e.swinub, e.swablu],
			wave: [
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.swinub, e.swinub, e.swinub, e.swinub, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				null, null, null, null, null, null,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				null, null, null, null,
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino,
				e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, e.minccino, 
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				null, null, null, null,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, 
				e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				null, null, null, null, null, null, null, null,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
			],	
		},
		58: {
			preview: [e.weavile, e.piloswine],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.piloswine, e.piloswine, e.piloswine, 
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.weavile, e.weavile, e.weavile,  
			],
		},
		59: {
			preview: [e.hoothoot],
			wave: [
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
			],
			
		},
		60: {
			preview: [e.hoothoot, e.noctowl],
			wave: [
				e.hoothoot, e.hoothoot, e.hoothoot,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl,
				e.hoothoot, e.hoothoot, e.hoothoot,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.hoothoot, e.hoothoot, e.hoothoot,
			],
		},
		61: {
			preview: [e.cinccino, e.weavile, e.altaria, e.piloswine],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				null, null, null, null, null, null, 
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				null, null, null, null, null, null, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
			],
		},
		62: {
			preview: [e.sneasel, e.swinub, e.weavile, e.altaria, e.piloswine],
			wave: [
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, 
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
			],
		},
		63: {
			preview: [e.piloswine, e.noctowl],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,
			],
		},
		64: {
			preview: [e.sneasel, e.hoothoot, e.snover, e.piloswine, e.noctowl],
			wave: [
				e.snover, e.snover, e.snover, e.piloswine, e.piloswine, e.piloswine, e.snover, e.snover, e.snover, 
				e.piloswine, e.piloswine, e.piloswine, e.snover, e.snover, e.snover, e.piloswine, e.piloswine, e.piloswine,

				null, null, null, null, null, null, null, null, null, null, null, null,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,

				null, null, null, null, null, null, null, null, null, null, null, null,
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot,
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, 
				e.noctowl, e.noctowl,  e.noctowl, 
				null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl,  
				null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		65: {
			preview: [e.swablu, e.cinccino, e.piloswine],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,

				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				null, null, null, null, null, null, null, null, null,
				e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu,
				e.swablu, e.swablu,

				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.cinccino, e.cinccino,

				
			],
		},
		66: {
			preview: [e.weavile, e.altaria, e.piloswine, e.noctowl, e.palpitoad],
			wave: [
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
				e.noctowl, e.noctowl,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.noctowl, e.noctowl,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.noctowl, e.noctowl,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.noctowl, e.noctowl,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.noctowl, e.noctowl,

			],
		},
		67: {
			preview: [e.noctowl, e.absol],
			wave: [
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.absol, e.absol, e.absol, e.absol,
				null, null, null, null, null, null, null, null, null,
				e.absol, e.absol, e.absol, e.absol,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.absol, e.absol, e.absol, e.absol,
				null, null, null, null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		68: {
			preview: [e.altaria, e.noctowl, e.absol],
			wave: [
				e.altaria, e.altaria, e.altaria, e.altaria, e.noctowl, e.noctowl, e.noctowl, 
				e.absol, e.absol, e.absol, e.absol,
				null, null, null, null, null, null,
				e.altaria, e.altaria, e.altaria, e.altaria, e.noctowl, e.noctowl, e.noctowl, 
				e.absol, e.absol, e.absol, e.absol,
				null, null, null, null, null, null,
				e.altaria, e.altaria, e.altaria, e.altaria, e.noctowl, e.noctowl, e.noctowl, 
				e.absol, e.absol, e.absol, e.absol,
				null, null, null, null, null, null,
				e.altaria, e.altaria, e.altaria, e.altaria, e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		69: {
			preview: [e.piloswine, e.noctowl, e.absol],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,
				e.absol, e.absol, e.absol, e.absol,
				null, null, null, null, null, null, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,
				e.absol, e.absol, e.absol, e.absol,
				null, null, null, null, null, null, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,
				e.absol, e.absol, e.absol, e.absol,
				null, null, null, null, null, null, 
				null, null, null, null,  e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,
			],
		},
		70: {
			preview: [e.tympole, e.palpitoad, e.snorlax],
			wave: [
				e.snorlax, 
				null, null, null, null, null, null, null, null ,null, null, null, null, null, null, null,
				e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole, e.tympole,
			],
		},
		71: {
			preview: [e.altaria, e.noctowl, e.snorlax],
			wave: [
				e.snorlax,
				null, null, null, null, null, null, null, null ,null, null, null, null, null, null, null,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.noctowl, e.noctowl,  
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.noctowl, e.noctowl, 
				null, null, null,
				e.noctowl, e.noctowl, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.noctowl, e.noctowl,  
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.noctowl, e.noctowl,
				null, null, null,
				e.noctowl, e.noctowl, 
			],
		},
		72: {
			preview: [e.snorlax],
			wave: [
				e.snorlax, e.snorlax,  e.snorlax
			],
		},
		73: {
			preview: [e.weavile, e.altaria, e.noctowl],
			wave: [
				e.weavile, e.altaria, e.noctowl, e.weavile, e.altaria, e.noctowl, e.weavile, e.altaria, e.noctowl,
				e.weavile, e.altaria, e.noctowl, e.weavile, e.altaria, e.noctowl, e.weavile, e.altaria, e.noctowl,
				e.weavile, e.altaria, e.noctowl, e.weavile, e.altaria, e.noctowl, e.weavile, e.altaria, e.noctowl,
				e.weavile, e.altaria, e.noctowl, e.weavile, e.altaria, e.noctowl, e.weavile, e.altaria, e.noctowl,

			],
		},
		74: {
			preview: [e.weavile, e.altaria, e.piloswine, e.noctowl, e.absol],
			wave: [
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.absol, e.absol, e.absol, e.absol, e.absol,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.absol, e.absol, e.absol, e.absol, e.absol,
			],
		},
		75: {
			preview: [e.snorlax, e.absol],
			wave: [
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, 
				null, null, null, null, null, null,
				e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, 
			],
		},
		76: {
			preview: [e.swablu, e.snover, e.weavile, e.altaria],
			wave: [
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.snover, e.snover, e.snover, e.snover, e.snover,
				e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu, e.swablu,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
			],
		},
		77: {
			preview: [e.piloswine, e.palpitoad, e.snorlax],
			wave: [
				e.snorlax, e.snorlax,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
			],
		},
		78: {
			preview: [e.sneasel, e.weavile],
			wave: [
				e.weavile, e.weavile, e.weavile,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel, e.sneasel,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.weavile, e.weavile, e.weavile,
			],
		},
		79: {
			preview: [e.delibird],
			wave: [
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, 
				null, null, null,
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, 
			],
		},
		80: {
			preview: [e.jynx, e.lapras],
			wave: [
				e.jynx, e.lapras
			],
		},
		81: {
			preview: [e.hoothoot, e.noctowl],
			wave: [
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.noctowl, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.noctowl, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.noctowl, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,

			],
		},
		82: {
			preview: [e.hoothoot, e.noctowl, e.palpitoad],
			wave: [
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		83: {
			preview: [e.snorlax, e.lapras],
			wave: [
				e.lapras, e.snorlax, e.snorlax, e.snorlax,
			],
		},
		84: {
			preview: [e.snorlax, e.jynx],
			wave: [
				e.jynx, e.snorlax, e.snorlax, e.snorlax,
			],
		},
		85: {
			preview: [e.snorlax, e.jynx, e.lapras],
			wave: [
				e.jynx, 
				e.lapras,
				null, null, null, null,
				e.snorlax, e.snorlax, e.snorlax,
			],
		},
		86: {
			preview: [e.piloswine, e.lapras],
			wave: [
				e.lapras, e.lapras,
				null, null, null, null, null,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				
			],
		},
		87: {
			preview: [e.piloswine, e.jynx],
			wave: [
				e.jynx, e.jynx,
				null, null, null, null, null,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
			],
		},
		88: {
			preview: [e.swinub, e.snover, e.piloswine, e.jynx, e.lapras],
			wave: [
				e.lapras, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, e.swinub, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.jynx,
			],
		},
		89: {
			preview: [e.tympole, e.palpitoad, e.seismitoad, e.absol],
			wave: [
				e.tympole, e.palpitoad, e.tympole, e.palpitoad, e.tympole, e.palpitoad, e.tympole, e.palpitoad, e.tympole, e.palpitoad,
				e.palpitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.palpitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.palpitoad,
				e.tympole, e.palpitoad, e.tympole, e.palpitoad, e.tympole, 

				e.absol, e.absol, e.absol,

				null, null, null, null,

				e.absol, e.absol, e.absol,

				e.tympole, e.palpitoad, e.tympole, e.palpitoad, e.tympole, e.palpitoad, e.tympole, e.palpitoad, e.tympole, e.palpitoad,
				e.palpitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.palpitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.palpitoad,
				e.tympole, e.palpitoad, e.tympole, e.palpitoad, e.tympole, 

				e.absol, e.absol, e.absol, null, null,

				null, null, null, null, null, null, null, null,

				e.absol, e.absol, e.absol, 

				null, null, null, null, null, null, null, null, null, null, null,

				e.absol, e.absol, e.absol,

				null, null, null, null, null, null, null, null,

				e.absol, e.absol, e.absol, 

				null, null, null, null, null, null, null, null, null, null, null,

				e.absol, e.absol, e.absol,
			],
		},
		90: {
			preview: [e.piloswine, e.slowpoke, e.absol],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.slowpoke, e.slowpoke,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.absol, e.absol, e.absol,
				null, null, 
				e.absol, e.absol, e.absol,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.absol, e.absol, e.absol,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.slowpoke, e.slowpoke,
				null, null, null, null, 
				e.absol, e.absol, e.absol,
				e.slowpoke, e.slowpoke,
				e.absol, e.absol, e.absol,
				null, null, null, null,
				e.slowpoke, e.slowpoke,
				e.absol, e.absol, e.absol,
			],
		},
		91: {
			preview: [e.hoothoot, e.noctowl, e.absol],
			wave: [
				e.absol, e.absol, e.absol,
				null, null, null,
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.noctowl, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
				e.absol, e.absol, e.absol,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.noctowl, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
				null, null, null,
				e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.noctowl, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, e.hoothoot, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,

			],
		},
		92: {
			preview: [e.cinccino, e.weavile, e.altaria, e.noctowl],
			wave: [
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.altaria, e.altaria,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,
				e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino, e.cinccino,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.altaria, e.altaria,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				null, null, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,
				null, null, null, null, null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,
				null, null, null, null, null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,

			],
		},
		93: {
			preview: [e.snorlax, e.slowpoke],
			wave: [
				e.snorlax,
				null, null,
				e.slowpoke, e.snorlax,
				null, null, 
				e.slowpoke, e.snorlax,
				null, null, 
				e.slowpoke, e.snorlax,
			],
		},
		94: {
			preview: [e.lapras, e.slowpoke],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke,
				null, null, null, null,
				e.lapras, e.lapras, e.lapras,
			],
		},
		95: {
			preview: [e.jynx, e.slowpoke],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke,
				null, null, null, null,
				e.jynx, e.jynx, e.jynx, 
				
			],	
		},
		96: {
			preview: [e.jynx, e.lapras, e.slowpoke],
			wave: [
				e.jynx, e.lapras, e.jynx, 
				null, null, 
				e.lapras, e.jynx, e.lapras,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
			],
		},
		97: {
			preview: [e.sneasel, e.hoothoot, e.jynx],
			wave: [
				e.jynx, 
				e.hoothoot, e.sneasel, e.hoothoot, e.sneasel, e.hoothoot, e.sneasel, e.hoothoot, e.sneasel, e.hoothoot, e.sneasel, e.hoothoot, e.sneasel, e.hoothoot, e.sneasel,
				e.jynx, 
				e.hoothoot, e.sneasel, e.hoothoot, e.sneasel, e.hoothoot, e.sneasel, e.hoothoot, e.sneasel, e.hoothoot, e.sneasel, e.hoothoot, e.sneasel, e.hoothoot, e.sneasel,
				e.jynx, 
				e.hoothoot, e.sneasel, e.hoothoot, e.sneasel, e.hoothoot, e.sneasel, e.hoothoot, e.sneasel, e.hoothoot, e.sneasel, e.hoothoot, e.sneasel, e.hoothoot, e.sneasel,
			],
		},
		98: {
			preview: [e.weavile, e.noctowl, e.lapras],
			wave: [
				e.lapras, e.lapras, e.lapras, e.lapras, 
				e.noctowl, e.weavile, e.noctowl, e.weavile, e.noctowl, e.weavile, e.noctowl, e.weavile, e.noctowl, e.weavile, e.noctowl, e.weavile, e.noctowl, e.weavile,
				e.noctowl, e.weavile, e.noctowl, e.weavile, e.noctowl, e.weavile, e.noctowl, e.weavile, e.noctowl, e.weavile, e.noctowl, e.weavile, e.noctowl, e.weavile,
				e.noctowl, e.weavile, e.noctowl, e.weavile, e.noctowl, e.weavile, e.noctowl, e.weavile, e.noctowl, e.weavile, e.noctowl, e.weavile, e.noctowl, e.weavile,
			],
		},
		99: {
			preview: [e.snorlax, e.jynx, e.lapras, e.slowpoke],
			wave: [
				e.snorlax, e.snorlax, e.snorlax,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				null, null, null,
				e.jynx, 
				null, null, null,
				e.snorlax, e.lapras, 
				
			],
		},
		100: {
			preview: [e.registeel],
			wave: [
				e.registeel
			],
		},
	},
	7: {
		1: {
			preview: [e.vanillite],
			wave: [
				e.vanillite, e.vanillite, e.vanillite, e.vanillite, e.vanillite, e.vanillite, e.vanillite, e.vanillite, e.vanillite, e.vanillite,
				e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite,	
				e.vanillite, e.vanillite,	e.vanillite, e.vanillite, 
			],
		},
		2: {
			preview: [e.vanillite, e.vanillish],
			wave: [
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite, 
			],
		},
		3: {
			preview: [e.vanillish],
			wave: [
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, 
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, 
			],
		},
		4: {
			preview: [e.vanillite, e.vanillish, e.snover],
			wave: [
				
				e.snover, e.snover, 
				null, null, null, null,
				e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite, 
				null, null, null, null,
				e.snover, e.snover, 
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, 
				e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite, 
			],
		},
		5: {
			preview: [e.vanillite, e.vanillish],
			wave: [
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, 
				e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite, e.vanillite, e.vanillite,
			],
		},
		6: {
			preview: [e.vanillite, e.vanillish, e.snover],
			wave: [
				e.snover, 
				e.vanillish, e.vanillish, e.vanillish,
				e.vanillite, e.vanillite,	e.vanillite, 
				e.vanillish, e.vanillish, e.vanillish,
				e.snover,
				e.vanillish, e.vanillish, e.vanillish,
				e.vanillite, e.vanillite, e.vanillite,	e.vanillite, e.vanillite, 
			],
		},
		7: {
			preview: [e.vanillish, e.snover],
			wave: [
				e.snover, e.snover, e.snover, e.snover,
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.snover, e.snover, e.snover, e.snover,  
				
			],
		},
		8: {
			preview: [e.vanillish, e.shellos],
			wave: [
				e.shellos, e.shellos, e.shellos, 
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, 
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, 
			],
		},
		9: {
			preview: [e.vanillite, e.vanillish],
			wave: [
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, 
				e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite, 
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, 
				null, null, null, null, null, null, null,
				e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite,
			],
		},
		10: {
			preview: [e.vanillite, e.vanillish, e.vanilluxe],
			wave: [
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, 
				e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite, 
			],
		},
		11: {
			preview: [e.shellos],
			wave: [
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,
			],
		},
		12: {
			preview: [e.snover, e.shellos],
			wave: [
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
			],
		},
		13: {
			preview: [e.shellos, e.vanilluxe],
			wave: [
				e.shellos, e.shellos, e.shellos, e.vanilluxe, null,
				e.shellos, e.shellos, e.shellos, e.vanilluxe, null,
				e.shellos, e.shellos, e.shellos, e.vanilluxe,

			],
		},
		14: {
			preview: [e.vanillite, e.vanillish, e.vanilluxe],
			wave: [
				e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, 
			],
		},
		15: {
			preview: [e.piloswine],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, 
			],
		},
		16: {
			preview: [e.piloswine, e.palpitoad],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
			],
		},
		17: {
			preview: [e.vanillish, e.piloswine],
			wave: [
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.piloswine, e.piloswine,
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.piloswine, e.piloswine, 
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.piloswine, e.piloswine,
			],
		},
		18: {
			preview: [e.shellos, e.vanilluxe],
			wave: [
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
			],
		},
		19: {
			preview: [e.snover, e.piloswine],
			wave: [
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				null, e.piloswine, null, e.piloswine, null, e.piloswine,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				null, e.piloswine, null, e.piloswine, null, e.piloswine,
				
			],
		},
		20: {
			preview: [e.snover, e.abomasnow],
			wave: [
				e.abomasnow, e.abomasnow, e.abomasnow,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,  e.snover, e.snover, e.snover, e.snover, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,  e.snover, e.snover, e.snover, e.snover, 
			],
		},
		21: {
			preview: [e.vanillite, e.vanillish, e.vanilluxe],
			wave: [
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish,
				e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite, 
				e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite,
				e.vanilluxe, e.vanilluxe, e.vanilluxe,
				null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null,
				e.vanilluxe, e.vanilluxe, e.vanilluxe,
			],
		},
		22: {
			preview: [e.shellos, e.palpitoad],
			wave: [
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,  
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,  
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,  
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,  
			],
		},
		23: {
			preview: [e.piloswine, e.palpitoad],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				null, null,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
			],
		},
		24: {
			preview: [e.shellos, e.palpitoad],
			wave: [
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,  
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
			],
		},
		25: {
			preview: [e.vanillite, e.vanillish, e.shellos, e.vanilluxe],
			wave: [
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, 
				e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
			],
		},
		26: {
			preview: [e.piloswine, e.abomasnow, e.delibird],
			wave: [
				e.abomasnow, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				null, null, null, null, null, null,
				e.delibird, e.delibird, 
			],
		},
		27: {
			preview: [e.shellos, e.palpitoad, e.vanilluxe],
			wave: [
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
			],
		},
		28: {
			preview: [e.snover, e.abomasnow],
			wave: [
				e.abomasnow,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				null, null, null, null, null,
				e.abomasnow, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				null, null, null, null, null, 
				e.abomasnow,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
			],
		},
		29: {
			preview: [e.shellos, e.vanilluxe],
			wave: [
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
			],
		},
		30: {
			preview: [e.shellos, e.vanilluxe, e.gastrodon],
			wave: [
				e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
				null, null, null,
				e.gastrodon, e.gastrodon, e.gastrodon,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
				null, null, null,
				e.gastrodon, e.gastrodon, e.gastrodon,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
				null, null, null, 
				e.gastrodon, e.gastrodon, e.gastrodon,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
				e.gastrodon, e.gastrodon, e.gastrodon,
			],
		},
		31: {
			preview: [e.snover, e.abomasnow],
			wave: [
				e.abomasnow, e.abomasnow,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.abomasnow, e.abomasnow,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,  
				e.abomasnow, e.abomasnow,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.abomasnow, e.abomasnow,
			],
		},
		32: {
			preview: [e.vanillite, e.vanillish, e.shellos, e.vanilluxe, e.gastrodon],
			wave: [
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish,
				e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite,	e.vanillite, e.vanillite, e.vanillite, e.vanillite, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
			],
		},
		33: {
			preview: [e.shellos, e.gastrodon, e.absol],
			wave: [
				e.shellos, e.shellos, e.shellos,
				e.gastrodon, 
				e.shellos, e.shellos, e.shellos,
				e.gastrodon, 
				e.shellos, e.shellos, e.shellos,
				e.gastrodon, 
				e.shellos, e.shellos, e.shellos,
				e.gastrodon, 
				e.shellos, e.shellos, e.shellos,
				e.gastrodon, 
				e.shellos, e.shellos, e.shellos,
				e.gastrodon, 
				e.absol, e.absol, e.absol, e.absol, e.absol, e.absol,
				e.absol, e.absol, e.absol, e.absol, e.absol, e.absol,
				e.absol, e.absol, e.absol, e.absol, e.absol, e.absol,
				e.absol, e.absol, e.absol, e.absol, e.absol, e.absol,
			],
		},
		34: {
			preview: [e.abomasnow, e.absol],
			wave: [
				e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, 
				e.absol, e.absol, e.absol, e.absol, e.absol, e.absol,
				e.absol, e.absol, e.absol, e.absol, e.absol, e.absol,
				e.absol, e.absol, e.absol, e.absol, e.absol, e.absol,
				e.absol, e.absol, e.absol, e.absol, e.absol, e.absol,
			],
		},
		35: {
			preview: [e.vanillish, e.shellos, e.vanilluxe, e.gastrodon, e.absol],
			wave: [
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish,
				e.absol, e.absol,	e.absol, e.absol, e.absol, e.absol,	e.absol, e.absol, e.absol, e.absol, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.absol, e.absol,	e.absol, e.absol, e.absol, e.absol,	e.absol, e.absol, e.absol, e.absol, 
			],
		},
		36: {
			preview: [e.shellos, e.vanilluxe, e.piloswine, e.palpitoad, e.shellder],
			wave: [
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
			],
		},
		37: {
			preview: [e.shellos, e.gastrodon, e.shellder],
			wave: [
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,
				e.gastrodon, e.gastrodon, e.gastrodon
			],
		},
		38: {
			preview: [e.vanilluxe, e.gastrodon],
			wave: [
				e.gastrodon, e.gastrodon, e.gastrodon, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.gastrodon, e.gastrodon, e.gastrodon,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.gastrodon, e.gastrodon, e.gastrodon,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.gastrodon, e.gastrodon, e.gastrodon,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.gastrodon, e.gastrodon, e.gastrodon,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.gastrodon, e.gastrodon, e.gastrodon,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
			],
		},
		39: {
			preview: [e.palpitoad],
			wave: [
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
			],
		},
		40: {
			preview: [e.palpitoad, e.seismitoad],
			wave: [
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.seismitoad, e.seismitoad, e.seismitoad, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				
			],
		},
		41: {
			preview: [e.vanilluxe, e.gastrodon, e.absol, e.delibird],
			wave: [
				e.delibird,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.delibird,
				e.absol, e.absol, e.absol, e.absol,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.delibird,
				e.absol, e.absol, e.absol, e.absol,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.absol, e.absol, e.absol, e.absol,
				e.delibird,
				e.absol, e.absol, e.absol, e.absol,
			],
		},
		42: {
			preview: [e.vanilluxe, e.abomasnow],
			wave: [
				e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
			],
		},
		43: {
			preview: [e.piloswine, e.palpitoad, e.shellder, e.seismitoad],
			wave: [
				e.seismitoad, e.seismitoad,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.palpitoad, e.palpitoad, e.palpitoad, 
				e.piloswine, e.piloswine, e.piloswine, 
				e.seismitoad, e.seismitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.piloswine, e.piloswine, e.piloswine, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
			],
		},
		44: {
			preview: [e.shellos, e.vanilluxe, e.gastrodon, e.seismitoad],
			wave: [
				e.seismitoad, e.seismitoad, e.seismitoad,
				e.gastrodon, e.gastrodon, e.gastrodon, e.vanilluxe, e.shellos, e.vanilluxe, e.gastrodon, e.shellos, e.gastrodon, e.gastrodon,
				e.shellos, e.shellos, e.vanilluxe, e.shellos, e.gastrodon, e.vanilluxe, e.vanilluxe, e.gastrodon, e.shellos, e.shellos,
				e.seismitoad, e.seismitoad, e.seismitoad,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.shellos, e.vanilluxe, e.gastrodon, e.vanilluxe, e.gastrodon, e.vanilluxe, e.vanilluxe, e.gastrodon, e.gastrodon, e.vanilluxe,
			],
		},
		45: {
			preview: [e.abomasnow, e.gastrodon, e.seismitoad],
			wave: [
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				null, null, null, null,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				null, null, null, null,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
			],
		},
		46: {
			preview: [e.shellos, e.vanilluxe, e.gastrodon],
			wave: [
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,

				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,

				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
			],
		},
		47: {
			preview: [e.palpitoad, e.seismitoad, e.absol],
			wave: [
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.seismitoad, e.seismitoad, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.seismitoad, e.seismitoad, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.seismitoad, e.seismitoad, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol,
				null, null, null, null, null, null, null, null,
				e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol,
				null, null, null, null, null, null, null, null,
				e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol,
			],
		},
		48: {
			preview: [e.vanilluxe, e.gastrodon, e.shellder],
			wave: [
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
			],
		},
		49: {
			preview: [e.snover, e.piloswine, e.abomasnow],
			wave: [
				e.abomasnow,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.abomasnow, e.abomasnow, e.abomasnow,
				e.abomasnow, e.abomasnow, e.abomasnow,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, 
				e.abomasnow,
			],
		},
		50: {
			preview: [e.piloswine, e.mamoswine],
			wave: [
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.mamoswine, e.mamoswine, e.mamoswine,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
			],
		},
		51: { 
			preview: [e.piloswine, e.slowpoke, e.absol],
			wave: [
				e.slowpoke, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				null, null, null, null, null, null,
				e.absol, e.absol, e.absol, e.absol,
			] 
		},
		52: { 
			preview: [e.shellder, e.mamoswine, e.slowpoke],
			wave: [
				e.slowpoke, e.slowpoke, 
				e.mamoswine, e.mamoswine,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.slowpoke, e.slowpoke, 
			] 
		},
		53: { 
			preview: [e.palpitoad, e.seismitoad],
			wave: [
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
			] 
		},
		54: { 
			preview: [e.abomasnow, e.shellder, e.mamoswine, e.slowpoke],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.mamoswine, e.mamoswine, e.mamoswine,
				e.abomasnow, e.abomasnow, e.abomasnow,
			] 
		},
		55: { 
			preview: [e.shellder, e.slowpoke],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
			] 
		},
		56: { 
			preview: [e.snover, e.slowpoke],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.slowpoke, e.slowpoke, e.slowpoke,
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.slowpoke, e.slowpoke, e.slowpoke, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.slowpoke, e.slowpoke, e.slowpoke, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
				e.slowpoke, e.slowpoke, e.slowpoke, 
				e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover, e.snover,
			] 
		},
		57: { 
			preview: [e.mamoswine],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
				null, null, null, null, null, null, null, null,
				 e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
			] 
		},
		58: { 
			preview: [e.piloswine, e.mamoswine, e.slowpoke],
			wave: [
				e.slowpoke, e.slowpoke,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,

			] 
		},
		59: { 
			preview: [e.slowpoke],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
			] 
		},
		60: { 
			preview: [e.slowpoke, e.slowbro],
			wave: [
				e.slowbro, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
			] 
		},
		61: { 
			preview: [e.shellos, e.mamoswine, e.slowpoke],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,
				e.mamoswine, e.mamoswine,  
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,
				e.slowpoke, e.slowpoke, e.slowpoke, 
				e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos, e.shellos,
			] 
		},
		62: { 
			preview: [e.vanilluxe],
			wave: [
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
			] 
		},
		63: { 
			preview: [e.vanilluxe, e.gastrodon, e.seismitoad],
			wave: [
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				 e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				 e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				 e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
			] 
		},
		64: { 
			preview: [e.slowbro],
			wave: [
				e.slowbro, e.slowbro, e.slowbro,
			] 
		},
		65: { 
			preview: [e.piloswine, e.abomasnow, e.shellder, e.mamoswine],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow,
			] 
		},
		66: { 
			preview: [e.palpitoad, e.seismitoad],
			wave: [
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
			] 
		},
		67: { 
			preview: [e.abomasnow, e.shellder, e.mamoswine, e.slowpoke],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.mamoswine, e.mamoswine, e.mamoswine, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow, e.abomasnow,
			] 
		},
		68: { 
			preview: [e.gastrodon],
			wave: [
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
			] 
		},
		69: { 
			preview: [e.shellder, e.mamoswine, e.slowpoke],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke,
				e.mamoswine, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.mamoswine, 
				e.slowpoke, e.slowpoke, e.slowpoke,
			] 
		},
		70: { 
			preview: [e.piloswine, e.shellder, e.slowpoke, e.cloyster],
			wave: [
				e.cloyster,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, 
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
			] 
		},
		71: { 
			preview: [e.mamoswine, e.slowpoke, e.slowbro],
			wave: [
				e.slowbro,
				null, null, null,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,  
				null, null, null, null, null, null,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				null, null, null,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
			] 
		},
		72: { 
			preview: [e.shellder, e.cloyster],
			wave: [
				e.cloyster, e.cloyster,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.cloyster, e.cloyster,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.cloyster, e.cloyster
			] 
		},
		73: { 
			preview: [e.mamoswine, e.delibird],
			wave: [
				e.delibird,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				e.delibird,
			] 
		},
		74: { 
			preview: [e.shellder, e.slowpoke, e.cloyster],
			wave: [
				e.shellder, e.cloyster, e.shellder,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				null, null, null, null, null, null, null, null, null,
				e.shellder, e.cloyster, e.shellder,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				null, null, null, null, null, null, null, null, null,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,  
			] 
		},
		75: { 
			preview: [e.palpitoad, e.gastrodon, e.seismitoad, e.shellder, e.mamoswine],
			wave: [
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,

				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				null, null, null, null, null, null, null, null, null,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.mamoswine, e.mamoswine, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,

				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
			] 
		},
		76: { 
			preview: [e.vanilluxe, e.gastrodon, e.seismitoad, e.mamoswine, e.slowbro],
			wave: [
				e.slowbro,
				e.mamoswine, e.mamoswine, e.mamoswine,  

				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 

				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,

				e.mamoswine, e.mamoswine, e.mamoswine, 
				
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
			] 
		},
		77: { 
			preview: [e.mamoswine, e.slowpoke, e.slowbro, e.cloyster],
			wave: [
				e.slowbro, e.slowbro, 
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				null, null, null, null, null, null, null, null, null,
				e.cloyster, e.cloyster,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
			] 
		},
		78: { 
			preview: [e.palpitoad, e.vanilluxe, e.seismitoad, e.mamoswine, e.cloyster],
			wave: [
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 

				e.cloyster, e.cloyster, e.cloyster, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.mamoswine, e.mamoswine, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,

				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,

				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
			] 
		},
		79: { 
			preview: [e.shellder, e.mamoswine, e.slowpoke],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
			] 
		},
		80: { 
			preview: [e.froslass, e.absol],
			wave: [
				e.froslass,
				null, null, null, null, null, null, null, null, null,
				e.absol, e.absol, e.absol, e.absol, e.absol,		
			] 
		},
		81: { 
			preview: [e.shellder, e.slowpoke, e.slowbro, e.cloyster],
			wave: [
				e.cloyster,
				e.slowpoke, e.slowpoke, e.slowbro,
				e.cloyster,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
				e.cloyster,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.cloyster,
			] 
		},
		82: { 
			preview: [e.palpitoad, e.seismitoad, e.froslass],
			wave: [
				e.froslass, e.froslass,

				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
			] 
		},
		83: { 
			preview: [e.piloswine, e.mamoswine, e.cloyster, e.froslass],
			wave: [
				e.cloyster,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
				e.cloyster,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine, e.piloswine,
				e.froslass, e.froslass,
			] 
		},
		84: { 
			preview: [e.shellder, e.cloyster],
			wave: [
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,
			] 
		},
		85: { 
			preview: [e.vanilluxe, e.froslass],
			wave: [
				e.froslass, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.froslass, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.froslass, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.froslass, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.froslass, 
			] 
		},
		86: { 
			preview: [e.mamoswine, e.slowpoke, e.slowbro],
			wave: [
				e.slowbro, e.slowpoke, 
				null, null, null, null,
				e.mamoswine, e.mamoswine, e.mamoswine, 
				e.slowpoke, e.slowpoke, e.slowpoke,
				null, null, null, null, 
				e.mamoswine, e.mamoswine, e.mamoswine,
				e.slowbro, e.slowpoke, 
			] 
		},
		87: { 
			preview: [e.piloswine, e.mamoswine, e.delibird],
			wave: [
				e.piloswine, e.mamoswine, e.piloswine, e.mamoswine, e.piloswine, e.mamoswine, e.piloswine, e.mamoswine, e.piloswine, e.mamoswine, e.piloswine, e.mamoswine,
				e.piloswine, e.mamoswine, e.piloswine, e.mamoswine, 
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird, e.delibird, e.delibird,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird, e.delibird,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,
				e.delibird,
			] 
		},
		88: { 
			preview: [e.slowpoke, e.slowbro],
			wave: [
				e.slowbro, e.slowbro, 
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
			] 
		},
		89: { 
			preview: [e.shellder, e.mamoswine, e.slowpoke, e.slowbro, e.cloyster],
			wave: [
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.slowbro, e.slowbro,		
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.cloyster, e.cloyster,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
			] 
		},
		90: { 
			preview: [e.slowpoke, e.cloyster, e.froslass, e.glalie],
			wave: [
				e.cloyster, e.cloyster, e.cloyster,
				e.slowpoke, e.slowpoke, e.slowpoke,
				e.froslass, e.froslass, 
				e.glalie,
				null, null, null, null, null, null, null, null, null,
				e.glalie
			] 
		},
		91: { 
			preview: [e.mamoswine, e.slowpoke, e.slowbro, e.delibird],
			wave: [
				e.slowbro, e.slowbro, e.slowbro, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				null, null, null,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				null, null, null,
				e.delibird,
				null, null, null, 
				e.delibird, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.delibird, 
				null, null, null, null, null, null, null, null, null,
				e.delibird,
			] 
		},
		92: { 
			preview: [e.shellder, e.slowpoke, e.cloyster, e.froslass],
			wave: [
				e.cloyster, e.cloyster, e.cloyster,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.cloyster, e.cloyster, e.cloyster,
				null, null, null, null, null, null, null, null, null,
				e.froslass, e.froslass,
				e.slowpoke, e.slowpoke, e.slowpoke, 
				null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, 
				e.froslass, e.froslass,
			] 
		},
		93: { 
			preview: [e.seismitoad, e.froslass, e.absol],
			wave: [
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.froslass, e.froslass,
				null, null, null, null, null, null, null,
				null, null, null, null, null, null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				e.absol, e.absol, e.absol, e.absol,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.froslass, e.froslass,
				null, null, null, null, null, null, null,
				null, null, null, null, null, null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.absol, e.absol, e.absol, e.absol,
				

				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				null, null,
				e.absol, e.absol, e.absol, e.absol,
			] 
		},
		94: { 
			preview: [e.froslass],
			wave: [
				e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, 
			] 
		},
		95: { 
			preview: [e.mamoswine, e.slowpoke, e.cloyster, e.glalie],
			wave: [
				e.glalie, e.glalie, e.glalie,
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, 

				e.slowpoke, e.slowpoke, e.slowpoke,  
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
				null, null, null, null,
				e.mamoswine, e.mamoswine, e.mamoswine, 
				null, null, null, null,
				e.slowpoke, e.slowpoke, e.slowpoke, 
				e.glalie, e.glalie, e.glalie,	
			] 
		},
		96: { 
			preview: [e.delibird],
			wave: [
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
			] 
		},
		97: { 
			preview: [e.seismitoad, e.mamoswine, e.lapras, e.jynx],
			wave: [
				e.jynx, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				e.lapras, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				e.lapras,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.jynx,
				e.mamoswine, e.mamoswine, e.lapras, e.mamoswine, 
				e.jynx,
				e.mamoswine, e.mamoswine, 
			] 
		},
		98: { 
			preview: [e.slowpoke, e.cloyster, e.froslass],
			wave: [
				e.cloyster, e.cloyster,
				null, null, null, null,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				e.froslass,
				null, null, null, null,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,  
				e.froslass, 
				null, null, null, null,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,  
				e.froslass, 
				null, null, null, null,
			] 
		},
		99: { 
			preview: [e.slowpoke, e.slowbro, e.froslass],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				e.slowbro, 
				e.froslass, e.froslass, e.froslass, 
			] 
		},
		100: { 
			preview: [e.regice], 
			wave: [
				e.regice
			] 
		},
	},
	8: {
		1: {
			preview: [e.spheal],
			wave: [
				e.spheal, e.spheal, e.spheal, e.spheal, 
				e.spheal, e.spheal, e.spheal, e.spheal,
				e.spheal, e.spheal, e.spheal, e.spheal, 
			],
		},
		2: {
			preview: [e.spheal],
			wave: [
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
			],
		},
		3: {
			preview: [e.weavile, e.gastrodon, e.spheal],
			wave: [
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				e.weavile, e.weavile, e.weavile, e.weavile,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
			],
		},
		4: {
			preview: [e.weavile, e.shellder],
			wave: [
				e.shellder, e.shellder,
				null, null, null, null, null, null,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
			],
		},
		5: {
			preview: [e.weavile, e.spheal],
			wave: [
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				null, null, null, null, null, null,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,

			],
		},
		6: {
			preview: [e.weavile, e.spheal],
			wave: [
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, 
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, 
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
			],
		},
		7: {
			preview: [e.weavile, e.shellder, e.spheal],
			wave: [
				e.spheal, e.shellder, e.spheal, e.shellder, e.spheal, e.shellder, e.spheal, e.shellder, e.spheal, e.shellder,
				e.spheal, e.shellder, e.spheal, e.shellder, e.spheal, e.shellder, e.spheal, e.shellder, e.spheal, e.shellder,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
			],
		},
		8: {
			preview: [e.gastrodon, e.noctowl, e.shellder],
			wave: [
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.noctowl, e.noctowl, e.noctowl, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		9: {
			preview: [e.weavile, e.shellder, e.spheal],
			wave: [
				e.shellder, e.shellder, e.shellder, e.shellder,
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
			],
		},
		10: {
			preview: [e.snorlax],
			wave: [
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax, 
			],
		},
		11: {
			preview: [e.snorlax, e.spheal,  e.sealeo],
			wave: [
				e.snorlax, e.snorlax, e.snorlax, e.snorlax,
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				null, null, null, null, 
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo,
			],
		},
		12: {
			preview: [e.noctowl, e.shellder, e.cubchoo],
			wave: [
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				 
			],
		},
		13: {
			preview: [e.sealeo, e.cubchoo],
			wave: [
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				null, null, null, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				null, null, null, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
			],
		},
		14: {
			preview: [e.weavile, e.gastrodon],
			wave: [
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
			],
		},

		15: {
			preview: [e.spheal, e.sealeo],
			wave: [
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
			],
		},
		16: {
			preview: [e.snorlax, e.delibird],
			wave: [
				e.snorlax, e.snorlax, e.snorlax, 
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
				e.snorlax, e.snorlax, e.snorlax, 
				null, null, null, null, null, null,
				e.snorlax, e.snorlax, e.snorlax, 
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
				null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, 
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
				null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, 
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
			],
		},
		17: {
			preview: [e.gastrodon, e.spheal, e.shellder, e.sealeo, e.cubchoo],
			wave: [
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,

				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,

				null, null, null, null, null, null, null, null, null, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,			
			],
		},
		18: {
			preview: [e.spheal, e.shellder, e.sealeo],
			wave: [
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
			],
		},
		19: {
			preview: [e.noctowl, e.snorlax],
			wave: [	
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax,

				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		20: {
			preview: [e.weavile, e.mamoswine, e.spheal, e.sealeo],
			wave: [
				e.mamoswine,

				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,

				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,

				null, null, null, null, null,

				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,

				null, null, null, null, null,

				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
			],
		},
		21: {
			preview: [e.mamoswine, e.shellder, e.sealeo],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
			],
		},
		22: {
			preview: [e.seismitoad, e.cubchoo],
			wave: [
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				null, null,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				null, null, null, null, null, null,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				null, null,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				null, null, null, null, null, null,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				null, null,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				null, null, null, null, null, null,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				null, null,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
			],
		},
		23: {
			preview: [e.mamoswine, e.slowpoke, e.spheal, e.sealeo],
			wave: [
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
			],
		},
		24: {
			preview: [e.weavile, e.noctowl],
			wave: [
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,

				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		25: {
			preview: [e.snorlax, e.mamoswine, e.cubchoo,],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.snorlax, e.snorlax, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				null, null, null, null, null,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,			
			],
		},
		26: {
			preview: [e.mamoswine, e.seismitoad, e.slowpoke, e.spheal, e.sealeo],
			wave: [
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,

				e.slowpoke, e.slowpoke, e.slowpoke, 
				e.mamoswine, e.mamoswine, e.mamoswine, 
				e.slowpoke, e.slowpoke, e.slowpoke, 
				null, null, null,

				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,

				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,		
			],
		},
		27: {
			preview: [e.gastrodon, e.seismitoad, e.slowpoke, e.shellder],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				null, null, null, null, null, null, null, null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
			],
		},
		28: {
			preview: [e.noctowl, e.mamoswine],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, null, null, null, null, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, null, null, null, null, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, null, null, null, null, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		29: {
			preview: [e.mamoswine, e.slowpoke, e.sealeo],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				e.mamoswine, e.mamoswine, e.mamoswine, 
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
			],
		},
		30: {
			preview: [e.weavile, e.gastrodon, e.noctowl, e.slowpoke, e.cryogonal],
			wave: [
				e.cryogonal,
				null, null, 
				e.slowpoke, e.slowpoke, e.slowpoke, 
				null, null, null, null, null, null, null, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,

				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,

				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		31: {
			preview: [e.gastrodon, e.noctowl, e.snorlax, e.shellder],
			wave: [
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				null, null, null, 
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, 
				null, null, null, null, null, null, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				null, null, null, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, 
				e.noctowl, e.noctowl, e.noctowl,  
				null, null, null, 
				e.noctowl, e.noctowl, e.noctowl, 	
			],
		},
		32: {
			preview: [e.cubchoo, e.mamoswine, e.cryogonal],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 

				e.cryogonal,
				null, null, null, 
				e.cryogonal,
				null, null, null, 
				e.cryogonal,
				
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
	
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,  	
			],
		},
		33: {
			preview: [e.cubchoo, e.seismitoad, e.slowpoke],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,

				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,  
				null, null, null, null, null, null, null, null, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				null, null, null, null, null, null, null, null, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
			],
		},
		34: {
			preview: [e.mamoswine, e.seismitoad, e.slowpoke],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				null, null, null, null, null, null,

				null, null, null, null, null, null,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 

				null, null, null, null, null, null, null, null, 
				e.slowpoke, e.slowpoke, e.slowpoke, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
			],
		},
		35: {
			preview: [e.cryogonal],
			wave: [
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal,
				e.cryogonal, e.cryogonal,
			],
		},
		36: {
			preview: [e.cubchoo, e.seismitoad, e.slowpoke, e.cryogonal],
			wave: [
				e.slowpoke, e.slowpoke, 
				null, null, null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				null, null, null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				null, null, null, null, null, null, null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.slowpoke, e.slowpoke,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				null, null, null, null,

				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, 
			],
		},
		37: {
			preview: [e.mamoswine, e.seismitoad, e.slowpoke, e.cryogonal],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.slowpoke, e.slowpoke, e.slowpoke,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 

				e.slowpoke, e.slowpoke, e.slowpoke, e.mamoswine, e.mamoswine, e.mamoswine,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,  
				e.cryogonal, e.cryogonal, e.cryogonal,
			],
		},
		38: {
			preview: [e.weavile, e.shellder, e.noctowl, e.absol],
			wave: [
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,

				null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				

				e.shellder, e.shellder, e.shellder,

				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		39: {
			preview: [e.cubchoo],
			wave: [
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
			],
		},
		40: {
			preview: [e.cubchoo, e.beartic],
			wave: [
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.beartic,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.beartic,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,

				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.beartic,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.beartic,
				
			],
		},
		41: {
			preview: [e.snorlax, e.slowpoke, e.beartic],
			wave: [
				e.snorlax, e.snorlax, e.snorlax, 
				e.slowpoke, e.slowpoke,
				e.beartic, e.beartic,
				e.snorlax, e.snorlax, e.snorlax, 
				e.slowpoke, e.slowpoke,
				e.beartic, e.beartic,
				e.snorlax, e.snorlax, e.snorlax, 
				e.beartic, e.beartic,
			],
		},
		42: {
			preview: [e.shellder, e.cubchoo, e.beartic, e.cloyster],
			wave: [
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,

				e.beartic, e.beartic,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				e.beartic, e.beartic, 

			],
		},
		43: {
			preview: [e.weavile, e.gastrodon, e.cryogonal, e.beartic, e.cloyster],
			wave: [
				e.cloyster, e.cloyster, e.cloyster, e.cloyster,
				null, null, null, null, null, null, null, null,
				e.cryogonal, e.cryogonal, e.cryogonal, 
				null, null, null, null, null, null, null, null,

				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,


				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,

				e.beartic, e.beartic, 

				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				
				null, null, null, null, null, null, null, null, null, null, null,

				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
	
			],
		},
		44: {
			preview: [e.shellder, e.cloyster],
			wave: [
				e.shellder, e.shellder, e.cloyster, e.cloyster, e.shellder, e.shellder, e.shellder, e.shellder, e.cloyster, e.cloyster, e.shellder, e.shellder, e.shellder, e.shellder,
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,
				e.shellder, e.shellder, e.cloyster, e.cloyster, e.shellder, e.shellder, e.shellder, e.shellder, e.cloyster, e.cloyster, e.shellder, e.shellder, e.shellder, e.shellder,
			],
		},
		45: {
			preview: [e.mamoswine, e.cubchoo, e.beartic, e.delibird],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,

				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				e.beartic, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.beartic,
				null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.delibird,
			],
		},
		46: {
			preview: [e.shellder, e.cubchoo, e.cloyster],
			wave: [
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,

				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
			],
		},
		47: {
			preview: [e.gastrodon, e.noctowl, e.snorlax, e.sealeo],
			wave: [
				e.snorlax, e.snorlax, e.snorlax,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, 
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, 
				e.snorlax, e.snorlax, e.snorlax, 

				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				null, null, null, null, null, null, null, null, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,

				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				null, null, null, null, null, null, null, null,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,


				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 

				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,
			],
		},
		48: {
			preview: [e.weavile, e.noctowl, e.seismitoad, e.slowpoke],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 

				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
		
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 

				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,

				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,

				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 

			],
		},
		49: {
			preview: [e.cubchoo],
			wave: [
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,

				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
			],
		},
		50: {
			preview: [e.noctowl, e.mamoswine, e.cryogonal, e.glalie],
			wave: [
				e.cryogonal, e.cryogonal, 
				e.mamoswine, e.mamoswine, e.mamoswine, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.glalie, e.glalie, e.glalie, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		51: { 
			preview: [e.cloyster, e.glalie],
			wave: [
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.glalie, e.glalie, e.glalie, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.glalie, e.glalie, e.glalie,  
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.glalie, e.glalie, e.glalie,  
			] 
		},
		52: { 
			preview: [e.noctowl, e.glalie, e.beartic],
			wave: [
				e.glalie, e.glalie, e.glalie, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, null, null, null,
				e.beartic, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 

				e.glalie, e.glalie, e.glalie, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 

				e.beartic, 
				null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			] 
		},
		53: { 
			preview: [e.cubchoo, e.mamoswine, e.slowpoke, e.beartic],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, 

				e.slowpoke, e.slowpoke, e.slowpoke,
				e.beartic, 
				e.slowpoke, e.slowpoke, e.slowpoke, 

				null, null, null, null, null, null, null, null, null,null, null, null,

				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
			] 
		},
		54: { 
			preview: [e.cryogonal, e.cloyster],
			wave: [
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
				e.cryogonal, e.cryogonal, 
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,

			] 
		},
		55: { 
			preview: [e.slowpoke, e.cryogonal, e.cloyster, e.glalie, e.delibird],
			wave: [
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
				e.delibird, 
				e.slowpoke, e.slowpoke, 
				e.cryogonal, 
				e.slowpoke, e.slowpoke, 
				e.delibird, 

				e.cryogonal, e.cryogonal, e.cryogonal, 
				null, null, null, null,
				e.delibird,
				e.glalie, e.glalie, 
				e.delibird,
				null, null, null, null,
				e.glalie, e.glalie, 
				e.delibird,  
			] 
		},
		56: { 
			preview: [e.slowpoke, e.cryogonal, e.cloyster],
			wave: [
				e.cloyster, e.cloyster,
				e.cryogonal,
				e.cloyster, e.cloyster,
				e.cryogonal, 
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
			] 
		},
		57: { 
			preview: [e.mamoswine, e.seismitoad, e.slowpoke],
			wave: [
				e.mamoswine, e.mamoswine, 
				e.slowpoke, e.slowpoke, 
				e.mamoswine, e.mamoswine, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.mamoswine, e.mamoswine,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.slowpoke, e.slowpoke, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
			] 
		},
		58: { 
			preview: [e.cryogonal],
			wave: [
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal,
			] 
		},
		59: { 
			preview: [e.slowpoke,  e.cloyster],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
			] 
		},
		60: { 
			preview: [e.slowpoke, e.aerodactyl],
			wave: [
				e.aerodactyl, 
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
			] 
		},
		61: { 
			preview: [e.mamoswine, e.aerodactyl],
			wave: [
				e.aerodactyl, e.aerodactyl, e.aerodactyl, 
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
			]
		},
		62: { 
			preview: [e.beartic],
			wave: [
				e.beartic, e.beartic, e.beartic, e.beartic, e.beartic, e.beartic, e.beartic, e.beartic, e.beartic, e.beartic, 
			] 
		},
		63: { 
			preview: [e.noctowl, e.slowpoke, e.cubchoo, e.aerodactyl],
			wave: [
				e.aerodactyl, e.aerodactyl,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 

				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			] 
		},
		64: { 
			preview: [e.beartic, e.aerodactyl],
			wave: [
				e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.beartic, e.beartic, e.beartic, e.beartic, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.beartic, e.beartic, e.beartic, e.beartic, 

			] 
		},
		65: { 
			preview: [e.snorlax, e.mamoswine, e.aerodactyl],
			wave: [
				e.aerodactyl, e.aerodactyl, e.aerodactyl, 
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 
				
			] 
		},
		66: { 
			preview: [e.snorlax, e.cryogonal],
			wave: [
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax, 

				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, 
				null, null, null, null, null, null, null, null,
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, 
				null, null, null, null, null, null, null, null,
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, 
			] 
		},
		67: { 
			preview: [e.cubchoo, e.beartic],
			wave: [
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.beartic, e.beartic, e.beartic, e.beartic, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				e.beartic, e.beartic, e.beartic, e.beartic, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				e.beartic, e.beartic, e.beartic, e.beartic,  
	
			] 
		},
		68: { 
			preview: [e.snorlax, e.aerodactyl, e.delibird],
			wave: [
				e.snorlax, e.snorlax, e.snorlax, 
				e.aerodactyl, e.aerodactyl, e.aerodactyl, 
				e.snorlax, e.snorlax, e.snorlax, 
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null,
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
			] 
		},
		69: { 
			preview: [e.aerodactyl],
			wave: [
				e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl,
			] 
		},
		70: { 
			preview: [e.mamoswine, e.aerodactyl, e.absol],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, 

				e.aerodactyl, e.aerodactyl,  
				null, null, null,
				e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol,
				e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol, e.absol,
				null, null, null,
				e.aerodactyl, e.aerodactyl, 
			] 
		},
		71: { 
			preview: [e.seismitoad, e.cryogonal, e.beartic,],
			wave: [
				e.cryogonal, e.cryogonal, e.cryogonal, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				e.cryogonal, e.cryogonal, e.cryogonal, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.beartic, e.beartic, e.beartic,
			] 
		},
		72: { 
			preview: [e.slowpoke, e.beartic, e.glalie],
			wave: [
				e.beartic, e.beartic, e.beartic,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
				e.glalie, e.glalie, e.glalie, 
				e.beartic, e.beartic, e.beartic, 
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.glalie, e.glalie, e.glalie, 
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
			] 
		},
		73: { 
			preview: [e.glalie],
			wave: [
				e.glalie, e.glalie, e.glalie, e.glalie, 
				null, null,
				e.glalie, e.glalie, e.glalie, e.glalie, 
				null, null, 
				e.glalie, e.glalie, e.glalie, e.glalie,
				null, null,
				e.glalie, e.glalie, e.glalie, e.glalie,
			] 
		},
		74: { 
			preview: [e.mamoswine,  e.aerodactyl],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
				e.aerodactyl, e.aerodactyl, e.aerodactyl, 
			] 
		},
		75: { 
			preview: [e.spheal, e.sealeo],
			wave: [
				e.spheal, e.sealeo, e.spheal, e.sealeo, e.spheal, e.sealeo, e.spheal, e.sealeo, e.spheal, e.sealeo, e.spheal, e.sealeo,
				e.spheal, e.sealeo, e.spheal, e.sealeo, e.spheal, e.sealeo, e.spheal, e.sealeo, e.spheal, e.sealeo, e.spheal, e.sealeo,
				e.spheal, e.sealeo, e.spheal, e.sealeo, e.spheal, e.sealeo, e.spheal, e.sealeo, e.spheal, e.sealeo, e.spheal, e.sealeo,
			] 
		},
		76: { 
			preview: [e.beartic, e.cloyster, e.aerodactyl],
			wave: [
				e.beartic, e.beartic, e.beartic, e.beartic,
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
				e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl, 
				e.beartic, e.beartic, e.beartic, e.beartic, 
			] 
		},
		77: { 
			preview: [e.weavile,  e.aerodactyl],
			wave: [
				e.weavile, e.weavile, e.weavile, e.weavile, 
				e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
				null, null, null, null, null,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
				null, null, null, null, null,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
				null, null, null, null, null,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, 
			] 
		},
		78: { 
			preview: [e.cloyster, e.glalie, e.aerodactyl],
			wave: [
				e.aerodactyl, e.aerodactyl, 
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,
				e.aerodactyl, e.aerodactyl, 
				null, null, null, null, null,
				e.aerodactyl, e.aerodactyl,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.glalie, e.glalie, e.glalie, e.glalie,
			] 
		},
		79: { 
			preview: [e.spheal],
			wave: [
				e.spheal,
			] 
		},
		80: { 
			preview: [e.sealeo, e.beartic, e.walrein],
			wave: [
				e.walrein,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.beartic, e.beartic, e.beartic, e.beartic, e.beartic, e.beartic, 
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.beartic, e.beartic, e.beartic, e.beartic, e.beartic, e.beartic,  		
			]
		},
		81: { 
			preview: [e.spheal, e.walrein],
			wave: [
				e.walrein, e.walrein, e.walrein,
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				e.walrein, e.walrein, e.walrein,
			] 
		},
		82: { 
			preview: [e.glalie, e.aerodactyl, e.walrein],
			wave: [
				e.walrein, 
				e.aerodactyl, e.aerodactyl, null,
				e.walrein,
				e.aerodactyl, e.aerodactyl, null, 
				e.walrein,
				e.glalie, e.glalie, e.glalie, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.glalie, e.glalie, e.glalie, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.glalie, e.glalie, e.glalie, 
			] 
		},
		83: { 
			preview: [e.mamoswine, e.cloyster, e.aerodactyl, e.walrein],
			wave: [
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
				e.walrein, e.walrein,  
				null, null, null, null, null,
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
				e.aerodactyl,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
				null, null, null, null, null,
				e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine, e.mamoswine,
				null, null, null, null, null,
				e.aerodactyl, 
			] 
		},
		84: { 
			preview: [e.slowpoke, e.aerodactyl, e.walrein],
			wave: [
				e.walrein, e.walrein,
				e.aerodactyl, e.aerodactyl,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				null, null, null, null, null, null, null, null,
				e.walrein, e.walrein,
				e.aerodactyl, e.aerodactyl, 
				e.slowpoke, e.slowpoke, e.slowpoke, 
			] 
		},
		85: { 
			preview: [e.delibird],
			wave: [
				e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird, e.delibird,
			] 
		},
		86: { 
			preview: [e.glalie, e.aerodactyl, e.walrein],
			wave: [
				e.glalie, e.glalie, e.glalie,  
				e.walrein,
				e.aerodactyl, e.aerodactyl,  
				null, null, null, null, null,
				e.aerodactyl, e.aerodactyl, 
				null, null, null, null, null,
				e.aerodactyl, e.aerodactyl, 
				e.walrein,
				e.glalie, e.glalie, e.glalie, 
			] 
		},
		87: { 
			preview: [e.spheal, e.sealeo, e.walrein],
			wave: [
				e.walrein, e.walrein, e.walrein, 

				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,

				e.walrein, e.walrein, e.walrein,
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,

				e.walrein, e.walrein, e.walrein, 
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.walrein, e.walrein, e.walrein, 
				e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal, e.spheal,
			] 
		},
		88: { 
			preview: [e.beartic, e.cloyster, e.aerodactyl],
			wave: [
				e.beartic, e.beartic, e.beartic, e.beartic, e.beartic, 
				e.cloyster, e.cloyster, e.cloyster, 
				e.aerodactyl, e.aerodactyl,  
				e.beartic, e.beartic, e.beartic, e.beartic, e.beartic, 
				e.cloyster, e.cloyster, e.cloyster, 
				e.aerodactyl, e.aerodactyl, 
				e.beartic, e.beartic, e.beartic, e.beartic, e.beartic,
			] 
		},
		89: { 
			preview: [e.cubchoo, e.beartic],
			wave: [
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.beartic, e.beartic, e.beartic, e.beartic, e.beartic,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.beartic, e.beartic, e.beartic, e.beartic, e.beartic,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo,
				e.beartic, e.beartic, e.beartic, e.beartic, e.beartic,
			] 
		},
		90: { 
			preview: [e.slowpoke, e.walrein],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
				e.walrein, e.walrein, e.walrein, 
				null, null, null, null, null,
				e.walrein, e.walrein, e.walrein,
				null, null, null, null, null,
				e.walrein, e.walrein, e.walrein,
			] 
		},
		91: { 
			preview: [e.cloyster, e.mamoswine, e.slowpoke, e.aerodactyl, e.absol],
			wave: [
				e.slowpoke, e.mamoswine, e.aerodactyl, e.absol, e.cloyster, e.absol,
				e.slowpoke, e.cloyster, e.mamoswine, e.absol, e.cloyster, e.absol,
				e.slowpoke, e.absol, e.slowpoke, e.absol, e.slowpoke, e.absol,
				e.slowpoke, e.absol, e.slowpoke, e.absol, e.slowpoke, e.absol,
				e.slowpoke, e.mamoswine, e.aerodactyl, e.absol, e.cloyster, e.absol,
				e.slowpoke, e.cloyster, e.mamoswine, e.absol, e.cloyster, e.absol,
				e.slowpoke, e.mamoswine, e.aerodactyl, e.absol, e.cloyster, e.absol,
			] 
		},
		92: { 
			preview: [e.spheal, e.sealeo, e.walrein, e.absol],
			wave: [
				e.walrein, e.spheal, e.walrein, e.sealeo, e.walrein, e.absol,
				e.walrein, e.spheal, e.walrein, e.sealeo, e.walrein, e.absol,
				e.walrein, e.spheal, e.walrein, e.sealeo, e.walrein, e.absol,
				e.walrein, e.spheal, e.walrein, e.sealeo, null, e.absol,
				e.walrein, e.spheal, e.walrein, e.sealeo, null, e.absol,
			] 
		},
		93: { 
			preview: [e.delibird],
			wave: [
				e.delibird, 
				null, null, null, null,
				e.delibird, 
				null, null, null, null,
				e.delibird, 
				null, null, null, null,
				e.delibird, 
				null, null, null, null,
				e.delibird, 
				null, null, null, null,
				e.delibird, 
				null, null, null, null,
				e.delibird, 
				null, null, null, null,
				e.delibird, 
				null, null, null, null,
				e.delibird, 
			] 
		},
		94: { 
			preview: [e.beartic, e.walrein, e.absol],
			wave: [
				e.walrein, e.walrein, e.walrein, e.walrein, e.walrein,
				e.beartic, e.beartic,
			  	e.absol, e.absol, e.absol, e.absol, e.absol,
			  	e.beartic, e.beartic,
			  	e.walrein, e.walrein, e.walrein, 
			  	e.beartic, e.beartic,
			  	e.absol, e.absol, e.absol, e.absol, e.absol,
			] 
		},
		95: { 
			preview: [e.togedemaru, e.kangaskhan, e.glalie],
			wave: [
				e.togedemaru, e.kangaskhan, e.glalie, e.togedemaru, e.kangaskhan, e.glalie, e.togedemaru, e.kangaskhan, e.glalie,
				e.togedemaru, e.kangaskhan, e.glalie, e.togedemaru, e.kangaskhan, e.glalie, e.togedemaru, e.kangaskhan, e.glalie,
				e.togedemaru, e.kangaskhan, e.glalie, e.togedemaru, e.kangaskhan, e.glalie, e.togedemaru, e.kangaskhan, e.glalie,
			] 
		},
		96: { 
			preview: [e.slowbro, e.froslass],
			wave: [
				e.slowbro, 
				e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, 
				e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, 
			] 
		},
		97: { 
			preview: [e.weavile, e.noctowl, e.cubchoo, e.aerodactyl],
			wave: [
				e.aerodactyl, e.aerodactyl,
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				e.aerodactyl, e.aerodactyl,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.cubchoo, e.cubchoo, e.cubchoo, e.cubchoo, 
				e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile, e.weavile,
			] 
		},
		98: { 
			preview: [e.snorlax, e.beartic],
			wave: [
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax,
				e.beartic, e.beartic, e.beartic, e.beartic, 
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax,
				e.beartic, e.beartic, e.beartic, e.beartic, 
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax, 
				e.beartic, e.beartic, e.beartic, e.beartic, 
				e.snorlax, e.snorlax, e.snorlax, e.snorlax, e.snorlax, 
			]  
		},
		99: { 
			preview: [e.walrein],
			wave: [
				e.walrein, e.walrein, e.walrein, e.walrein, e.walrein,
				e.walrein, e.walrein, e.walrein, e.walrein, e.walrein, 
			] 
		},
		100: { 
			preview: [e.regigigas], 
			wave: [
				e.regigigas
			] 
		},
	},
	9: {
		1: {
			preview: [e.ledian],
			wave: [
				e.ledian, e.ledian, e.ledian, e.ledian, 
				e.ledian, e.ledian, e.ledian, e.ledian, 
				e.ledian, e.ledian, e.ledian, e.ledian, 
				e.ledian, e.ledian, e.ledian, e.ledian, 
				e.ledian, e.ledian, e.ledian, e.ledian, 
				e.ledian, e.ledian, e.ledian, e.ledian, 
			],
		},
		2: {
			preview: [e.axew, e.fraxure],
			wave: [
				e.axew, e.axew, e.axew, e.axew, 
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.axew, e.axew, e.axew, e.axew, 
			],
		},
		3: {
			preview: [e.fraxure, e.ledian, e.venomoth],
			wave: [
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
			],
		},
		4: {
			preview: [e.ledian, e.arcanineHisui],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
			],
		},
		5: {
			preview: [e.ledian, e.fraxure,  e.arcanineHisui, e.dodrio],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
			],
		},
		6: {
			preview: [e.togedemaru, e.chansey, e.ditto],
			wave: [
				e.chansey, e.chansey,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				e.chansey, e.chansey,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.chansey, e.chansey,
				e.ditto, e.ditto, e.ditto, e.ditto,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				e.ditto, e.ditto, e.ditto, e.ditto,
			],
		},
		7: {
			preview: [e.arcanineHisui],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
			],
		},
		8: {
			preview: [e.arcanineHisui, e.togedemaru, e.dodrio],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.togedemaru, e.togedemaru, e.togedemaru,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		9: {
			preview: [e.chansey, e.togedemaru],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.chansey, e.chansey, e.chansey, e.chansey,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				 null, null, null, null, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				
			],
		},
		10: {
			preview: [e.arcanineHisui, e.dodrio, e.ditto],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
			],
		},
		11: {
			preview: [e.fraxure, e.arcanineHisui],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
			],
		},
		12: {
			preview: [e.arcanineHisui, e.dodrio, e.togedemaru],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,  
			],
		},
		13: {
			preview: [e.fraxure, e.kangaskhan],
			wave: [
				e.kangaskhan, e.kangaskhan, 
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.kangaskhan, e.kangaskhan, 
			],
		},
		14: {
			preview: [e.furfrou, e.kangaskhan, e.ditto],
			wave: [
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
			],
		},
		15: {
			preview: [e.furfrou, e.kangaskhan, e.fraxure],
			wave: [
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
			],
		},
		16: {
			preview: [e.kangaskhan, e.mightyena],
			wave: [
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.mightyena, e.mightyena, e.mightyena,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			],
		},
		17: {
			preview: [e.arcanineHisui, e.venomoth, e.axew, e.fraxure, e.mightyena],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew, e.axew,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				null, null, null, null, null, null, null, null, null, 
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,
				e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth, e.venomoth,

				null, null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,			
			],
		},
		18: {
			preview: [e.arcanineHisui, e.fraxure, e.mightyena],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,	
				null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,	
				null, null, null, null, null,  
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,	
				null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,	
			],
		},
		19: {
			preview: [e.dodrio, e.chansey, e.corviknight, e.miltank],
			wave: [	
				e.chansey, e.chansey, e.miltank, e.chansey, e.chansey, e.miltank, e.chansey, e.chansey, e.miltank, e.chansey, e.chansey, e.miltank, e.chansey, e.chansey,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		20: { 
			preview: [e.corviknight, e.miltank, e.ditto],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,

				e.miltank, e.miltank, e.miltank,
				null, null, null,
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
				null, null, null,
				e.miltank, e.miltank, e.miltank,
			] 
		},
		21: { 
			preview: [e.trevenant, e.corviknight, e.miltank],
			wave: [
				e.miltank, e.miltank, e.miltank,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.miltank, e.miltank, e.miltank,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.miltank, e.miltank, e.miltank,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.miltank, e.miltank, e.miltank,
			] 
		},
		22: { 
			preview: [e.trevenant, e.mightyena, e.togedemaru, e.miltank],
			wave: [
				e.miltank, e.miltank, e.trevenant, e.trevenant, e.miltank, e.miltank,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.miltank, e.miltank,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.miltank, e.miltank, 
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.trevenant, e.trevenant, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
			] 
		},
		23: { 
			preview: [e.drampa, e.togedemaru],
			wave: [
				e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa,
				e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		24: { 
			preview: [e.corviknight, e.trevenant, e.furfrou, e.miltank],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.miltank, e.miltank, 
				null, null, null, null, null, null, null, null, null, null,
				e.miltank, e.miltank, 
				null, null, null, null, null, null, null, null, null, null,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
				null, null, null, null, null, null, null, null, null, null,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.miltank, e.miltank, e.miltank,
				null, null, null, null, null, null, null, null, null, null,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
			] 
		},
		25: { 
			preview: [e.trevenant, e.arcanineHisui, e.togedemaru, e.miltank],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.miltank, e.miltank, e.miltank, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		26: { 
			preview: [e.trevenant, e.mightyena, e.arcanineHisui, e.togedemaru, e.miltank],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.miltank, e.miltank, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.trevenant, e.trevenant, e.trevenant,
				e.miltank, e.miltank,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,

			] 
		},
		27: { 
			preview: [e.corviknight, e.trevenant, e.arcanineHisui, e.togedemaru, e.miltank],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.miltank, e.miltank, 
				e.togedemaru, e.togedemaru, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.trevenant, e.trevenant, e.trevenant, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.miltank, e.miltank,
				e.trevenant, e.trevenant, e.trevenant, 
				null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		28: { 
			preview: [e.arcanineHisui, e.togedemaru, e.miltank],
			wave: [
				e.miltank, e.miltank, e.miltank, e.miltank, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.miltank, e.miltank, e.miltank,  
				null, null, null, null, null, null, null, null, null, null,
				e.miltank, e.miltank, e.miltank, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		29: { 
			preview: [e.haxorus],
			wave: [
				e.haxorus, e.haxorus, e.haxorus, e.haxorus, 
			] 
		},
		30: { 
			preview: [e.fraxure, e.trevenant, e.mightyena, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, 

				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,

				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,  
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

			] 
		},
		31: {
			preview: [e.arcanineHisui, e.mightyena, e.dodrio, e.chansey, e.haxorus],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				null, null, null, 
				e.haxorus, e.haxorus, e.haxorus, 
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, 
				null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, 
				e.dodrio, e.dodrio, e.dodrio,  
				null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, 	
			],
		},
		32: {
			preview: [e.corviknight, e.mightyena, e.furfrou],
			wave: [
				e.furfrou,
				e.furfrou,
				e.furfrou,

				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
	
				null, null, null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			
			],
		},
		33: {
			preview: [e.trevenant, e.mightyena, e.miltank],
			wave: [
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,

				null, null, null, null, null, null,
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank,

				null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
			],
		},
		34: {
			preview: [e.corviknight, e.trevenant, e.miltank],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, 
				null, null, null, null, null, null, null, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				null, null, null, null, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, 
				e.trevenant, e.trevenant, e.trevenant, 
			],
		},
		35: {
			preview: [e.furfrou, e.miltank],
			wave: [
				e.furfrou, e.furfrou, e.furfrou, e.miltank, e.furfrou, e.furfrou, e.miltank, e.furfrou, e.furfrou, e.furfrou, e.miltank, e.furfrou, e.furfrou, 
				null, null, null, null, 
				e.furfrou, e.furfrou, e.furfrou, e.miltank, e.furfrou, e.furfrou, e.miltank, e.furfrou, e.furfrou, e.furfrou, e.miltank, e.furfrou, e.furfrou, 
			],
		},
		36: {
			preview: [e.ledian, e.arcanineHisui, e.dodrio, e.furfrou, e.ditto],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,

				null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 	

				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,

				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian, e.ledian,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		37: {
			preview: [e.mightyena],
			wave: [
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			],
		},
		38: {
			preview: [e.mightyena, e.chansey, e.trevenant, e.furfrou],
			wave: [
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				null, null, null, null,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

				e.furfrou, e.furfrou, e.furfrou,
			],
		},
		39: {
			preview: [e.corviknight, e.arcanineHisui, e.trevenant, e.furfrou],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.trevenant, e.trevenant, e.trevenant,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,

				e.trevenant, e.trevenant, e.trevenant, e.corviknight, e.corviknight, e.corviknight,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.furfrou, e.furfrou, 

				e.furfrou, e.furfrou, e.furfrou, 
			],
		},	
		40: {
			preview: [e.mightyena, e.arcanineHisui],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			],
		},
		41: {
			preview: [e.chansey, e.trevenant, e.furfrou, e.mightyena],
			wave: [
				e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				e.chansey, e.chansey, e.chansey, 
				e.trevenant, e.trevenant,
				e.mightyena, e.mightyena,
				e.chansey, e.chansey, e.chansey, 
				e.trevenant, e.trevenant,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				e.chansey, e.chansey, e.chansey,
				e.mightyena, e.mightyena,
				e.chansey, e.chansey, e.chansey,
				e.trevenant, e.trevenant,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.trevenant, e.trevenant,
				null, null,  
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			],
		},
		42: {
			preview: [e.mightyena,  e.arcanineHisui],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,

				e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, 
				e.mightyena, e.mightyena, e.mightyena, 

			],
		},
		43: {
			preview: [e.mightyena, e.arcanineHisui, e.chansey, e.furfrou],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				null, null, null, null, null, null, null, null,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				null, null, null, null, null, null, null, null,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.mightyena, e.mightyena, e.mightyena, 
				e.furfrou, e.furfrou, e.furfrou, e.furfrou,

				e.mightyena, e.mightyena, e.mightyena,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,  
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 	
			],
		},
		44: {
			preview: [e.arcanineHisui, e.drampa],
			wave: [
				e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
			],
		},
		45: {
			preview: [e.corviknight, e.mightyena, e.furfrou],
			wave: [
				e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
			],
		},
		46: {
			preview: [e.arcanineHisui, e.mightyena, e.haxorus],
			wave: [
				e.haxorus, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.haxorus,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.haxorus, 
				null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			],
		},
		47: {
			preview: [e.dodrio, e.chansey, e.fraxure, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, 
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		48: {
			preview: [e.dodrio, e.chansey, e.furfrou, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, 
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.haxorus, e.haxorus, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			],
		},
		49: {
			preview: [e.fraxure, e.mightyena, e.corviknight, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, e.haxorus, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				null, null, null, null, null, null, null, null,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				null, null, null, null, null, null, null, null,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,  
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

			],
		},
		50: {
			preview: [e.dodrio, e.corviknight, e.togedemaru, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, 
				null, null, null,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.haxorus, e.haxorus,
				null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 	
			],
		},
		51: { 
			preview: [e.arcanineHisui, e.togedemaru, e.ditto],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				null, null, null, 
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		52: { 
			preview: [e.dodrio, e.togedemaru, e.mightyena],
			wave: [
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 

				null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			] 
		},
		53: { 
			preview: [e.mightyena, e.corviknight, e.trevenant, e.furfrou],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,

				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.furfrou, e.furfrou, e.furfrou, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.furfrou, e.furfrou, e.furfrou, 

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			] 
		},
		54: { 
			preview: [e.furfrou, e.mightyena, e.arcanineHisui, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				e.haxorus, e.haxorus, e.haxorus, e.haxorus, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.haxorus, e.haxorus, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,  
			] 
		},
		55: { 
			preview: [e.trevenant, e.furfrou, e.arcanineHisui, e.togedemaru, e.haxorus],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.haxorus, 
				e.trevenant, e.trevenant, e.trevenant,  
				e.furfrou, e.furfrou, e.furfrou, 
				null, null,
				e.trevenant, e.trevenant, e.trevenant, 
				e.haxorus, 
				null, null, 
				e.furfrou, e.furfrou, e.furfrou, 
				null, null,
				null, null, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
 
			] 
		},
		56: { 
			preview: [e.trevenant, e.furfrou, e.mightyena, e.togedemaru],
			wave: [
				e.furfrou, e.furfrou, e.furfrou,  e.furfrou, 
				e.trevenant, e.trevenant, e.trevenant, 
				e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.trevenant, e.trevenant, e.trevenant, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 	

			] 
		},
		57: { 
			preview: [e.corviknight, e.trevenant, e.mightyena, e.haxorus],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.haxorus, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.haxorus,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.haxorus, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			] 
		},
		58: { 
			preview: [e.trevenant, e.furfrou, e.mightyena, e.togedemaru, e.miltank],
			wave: [
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				null, null, null, null, null, null, null, null, 
				e.furfrou, e.furfrou, 
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank,
				e.trevenant, e.trevenant, 
				e.furfrou, e.furfrou,
				e.trevenant, e.trevenant,  
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
			] 
		},
		59: { 
			preview: [e.trevenant,  e.mightyena, e.arcanineHisui],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				null, null, null, null, null, null, null, null, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
			] 
		},
		60: { 
			preview: [e.trevenant, e.miltank],
			wave: [
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
			] 
		},
		61: { 
			preview: [e.corviknight, e.trevenant, e.miltank],
			wave: [
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.trevenant, e.trevenant, e.trevenant, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.trevenant, e.trevenant, e.trevenant,
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank,
			]
		},
		62: { 
			preview: [e.togedemaru, e.miltank],
			wave: [
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null, null, null, null, 
				
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
			] 
		},
		63: { 
			preview: [e.dodrio, e.trevenant, e.mightyena, e.miltank],
			wave: [
				e.miltank, e.miltank, 
				e.trevenant, e.trevenant, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.miltank, e.miltank, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.trevenant, e.trevenant, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			] 
		},
		64: { 
			preview: [e.dodrio, e.trevenant, e.mightyena, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, e.haxorus, 
				e.trevenant, e.trevenant,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.haxorus, e.haxorus, 
				null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 

				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				null, null, null, null, null, null, null, null, null, null,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 

				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			] 
		},
		65: { 
			preview: [e.chansey, e.corviknight, e.trevenant, e.furfrou, e.miltank],
			wave: [
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, 
				e.furfrou, e.furfrou, e.furfrou,
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.furfrou, e.furfrou, e.furfrou,
			] 
		},
		66: { 
			preview: [e.mightyena, e.chansey, e.furfrou],
			wave: [
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
				e.furfrou, e.furfrou, e.furfrou, e.furfrou,

				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
			
				e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			] 
		},
		67: { 
			preview: [e.mightyena],
			wave: [
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			] 
		},
		68: { 
			preview: [e.chansey, e.miltank, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, e.haxorus, e.haxorus, 
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				null, null,
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, 
				null, null,
				e.chansey, e.chansey, e.chansey, e.chansey, e.chansey,
				e.haxorus, e.haxorus, e.haxorus, e.haxorus, 
			] 
		},
		69: { 
			preview: [e.miltank, e.haxorus],
			wave: [
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank,
				null, null, null,
				e.haxorus, e.haxorus, e.haxorus,
				null, null, null, 
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, 
				null, null, null,
				e.haxorus, e.haxorus, e.haxorus, 
				null, null, null,
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank,
			] 
		},
		70: { 
			preview: [e.corviknight, e.mightyena, e.ditto],
			wave: [
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			] 
		},
		71: { 
			preview: [e.drampa, e.haxorus],
			wave: [
				e.haxorus,
				e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa,
				e.haxorus, e.haxorus, e.haxorus, 
				e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa, e.drampa,
				e.haxorus,
			] 
		},
		72: { 
			preview: [e.trevenant, e.mightyena, e.togedemaru, e.miltank, e.haxorus],
			wave: [
				e.haxorus, e.haxorus,
				e.miltank, e.miltank, e.trevenant, e.trevenant, e.miltank, e.miltank, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				null, null, null, null, null,
				e.haxorus, e.haxorus, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			] 
		},
		73: { 
			preview: [e.togedemaru, e.miltank],
			wave: [
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		74: { 
			preview: [e.corviknight, e.trevenant, e.furfrou, e.miltank],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.miltank, e.miltank, e.miltank, e.miltank, 
				null, null, null, null, null, null, null, null, null, null,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
				null, null, null, null, null, null, null, null, null, null,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.miltank, e.miltank, e.miltank,  e.miltank,
				null, null, null, null, null, null, null, null, null, null,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
			] 
		},
		75: { 
			preview: [e.trevenant, e.arcanineHisui, e.togedemaru, e.miltank, e.haxorus],
			wave: [
				e.haxorus, e.haxorus,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,  e.arcanineHisui, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.haxorus, e.haxorus,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.miltank, e.miltank, e.miltank, e.miltank, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		76: { 
			preview: [e.trevenant, e.mightyena, e.arcanineHisui, e.togedemaru, e.miltank],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.miltank, e.miltank, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.miltank, e.miltank,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,

			] 
		},
		77: { 
			preview: [e.corviknight, e.trevenant, e.arcanineHisui, e.togedemaru, e.miltank],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.miltank, e.miltank, 
				e.togedemaru, e.togedemaru, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,  e.arcanineHisui,
				e.trevenant, e.trevenant, e.trevenant, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.miltank, e.miltank,
				e.trevenant, e.trevenant, e.trevenant, 
				null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		78: { 
			preview: [e.arcanineHisui, e.togedemaru, e.miltank, e.haxorus],
			wave: [
				e.haxorus, e.haxorus,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.miltank, e.miltank, e.miltank, e.miltank, 
				e.haxorus, e.haxorus, 
				null, null, null, null, null, null, null, null, null, null,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui,
				e.haxorus, e.haxorus,
				e.miltank, e.miltank, e.miltank,  
				null, null, null, null, null, null, null, null, null, null,
				e.miltank, e.miltank, e.miltank, 
				e.haxorus, e.haxorus, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		79: { 
			preview: [e.fraxure, e.haxorus],
			wave: [
				e.haxorus,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.fraxure, e.fraxure, e.haxorus, e.haxorus, e.haxorus, e.haxorus, e.haxorus, e.haxorus,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.haxorus,
			] 
		},
		80: { 
			preview: [e.fraxure, e.trevenant, e.mightyena, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, e.haxorus, e.haxorus,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,

				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.haxorus, e.haxorus, e.haxorus, e.haxorus,
				null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			] 
		},
		81: { 
			preview: [e.mightyena, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, 
				e.mightyena, e.mightyena, e.mightyena,
				e.haxorus, e.haxorus,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena,
				e.haxorus, e.haxorus,  
				
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena,
			] 
		},
		82: { 
			preview: [e.dodrio, e.togedemaru, e.miltank, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, e.haxorus,
				null, null, null,
				e.haxorus, e.haxorus, e.haxorus, 
				e.miltank, e.miltank, e.miltank, 
				null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				null, null, null, 
				e.miltank, e.miltank, e.miltank, 
				null, null, null,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				null, null, null, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
				e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, e.dodrio, 
			] 
		},
		83: { 
			preview: [e.corviknight, e.trevenant, e.arcanineHisui, e.miltank],
			wave: [
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,	
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,	
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank,
				e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, e.corviknight, 
			] 
		},
		84: { 
			preview: [e.trevenant, e.miltank, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, 
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				null, null, null, null, null, null, null, null,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, 
				e.haxorus, e.haxorus, 
			] 
		},
		85: { 
			preview: [e.miltank],
			wave: [
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, 
				null, null, null, null, null, null, null, null, 
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, 
				null, null, null, null, null, null, null, null, 
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, 
			] 
		},
		86: { 
			preview: [e.togedemaru, e.miltank, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, e.haxorus,
				e.miltank, e.miltank, e.miltank,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.haxorus, e.haxorus, e.haxorus,
				e.miltank, e.miltank, e.miltank,
			] 
		},
		87: { 
			preview: [e.fraxure, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, e.haxorus, e.haxorus, 
				null, null, null, null, null, 
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				null, null, null, null, null, 
				e.haxorus, e.haxorus, e.haxorus, e.haxorus, 
				null, null, null, null, null, 
				e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure, e.fraxure,
				null, null, null, null, null, 
				e.haxorus, e.haxorus, e.haxorus, e.haxorus, 
			] 
		},
		88: { 
			preview: [e.mightyena, e.arcanineHisui, e.togedemaru, e.miltank],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 

				e.miltank, e.miltank, 

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 

				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 

				e.miltank, e.miltank,

				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 

				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
				

			] 
		},
		89: { 
			preview: [e.mightyena, e.arcanineHisui, e.miltank],
			wave: [
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				e.miltank, e.miltank,e.miltank,
				e.arcanineHisui, e.arcanineHisui, e.arcanineHisui, 
				null, null, null, null, null, null, null, null, 
				e.miltank, e.miltank,e.miltank,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				null, null, null, null, null, null, null, null, null, null, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

			] 
		},
		90: { 
			preview: [e.trevenant, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, e.haxorus, e.haxorus, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				null, null, null, null, null, null, null, null, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.haxorus, e.haxorus, e.haxorus, e.haxorus,
			] 
		},
		91: { 
			preview: [e.arcanineHisui, e.corviknight, e.trevenant, e.miltank, e.ditto],
			wave: [
				e.trevenant, e.ditto, e.miltank, e.ditto, e.trevenant, e.ditto,
				e.trevenant, e.ditto, e.miltank, e.ditto, e.trevenant, e.ditto,
				e.trevenant, e.ditto, e.miltank, e.ditto, e.trevenant, e.ditto,
				e.trevenant, e.corviknight, e.miltank, e.ditto, e.arcanineHisui, e.ditto,
				e.trevenant, e.corviknight, e.miltank, e.ditto, e.arcanineHisui, e.ditto,
				e.trevenant, e.corviknight, e.miltank, e.ditto, e.arcanineHisui, e.ditto,
				e.trevenant, e.corviknight, e.miltank, e.ditto, e.arcanineHisui, e.ditto,
				e.trevenant, e.corviknight, e.miltank, e.ditto, e.arcanineHisui, e.ditto,
				e.trevenant, e.ditto, e.miltank, e.ditto, e.trevenant, e.ditto,
				e.trevenant, e.ditto, e.miltank, e.ditto, e.trevenant, e.ditto,
			] 
		},
		92: { 
			preview: [e.trevenant, e.fraxure, e.haxorus],
			wave: [
				e.haxorus, e.fraxure, e.haxorus, e.fraxure, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.haxorus, e.fraxure, e.haxorus, e.fraxure, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.haxorus, e.fraxure, e.haxorus, e.fraxure,
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,
				e.haxorus, e.fraxure, e.haxorus, e.fraxure, 
				e.trevenant, e.trevenant, e.trevenant, e.trevenant,
			] 
		},
		93: { 
			preview: [e.furfrou, e.miltank, e.haxorus],
			wave: [
				e.miltank, e.miltank, e.haxorus,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou,  e.haxorus,
				e.miltank, e.miltank, e.miltank,  e.haxorus,
				null, null, null, null, null, null, null, null, null, null, 
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, 
				e.miltank, e.miltank,  e.haxorus,
				e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou, e.furfrou,  
				e.miltank, e.miltank, e.miltank,
			]
		},
		94: { 
			preview: [e.mightyena, e.togedemaru, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, e.haxorus, 
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,
				e.haxorus, e.haxorus, e.haxorus, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.haxorus, e.haxorus, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

			] 
		},
		95: { 
			preview: [e.togedemaru, e.haxorus],
			wave: [
				e.haxorus,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.haxorus,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.haxorus,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.haxorus,
				null, null, null, null, null, null, null, 
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
			] 
		},
		96: { 
			preview: [e.mightyena, e.haxorus, e.ditto],
			wave: [
				e.haxorus, e.haxorus, e.haxorus, e.haxorus, e.haxorus, e.haxorus,
				e.mightyena, e.mightyena, 
			  	e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
			  	null, null, null, null, null, null, null, null, null, null, null, 
			  	null, null, null, null, null, null, null, null, null, null, null, 
			  	e.haxorus,  e.haxorus, e.haxorus,
			  	e.mightyena, e.mightyena, e.mightyena, 
			  	e.mightyena, e.mightyena, e.mightyena,
			  	e.ditto, e.ditto, e.ditto, e.ditto, e.ditto,
			  	null, null, null, null, null, null, null, null, null, null, null, 
			  	e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena, 
			  	e.haxorus, e.haxorus, e.haxorus, 
			  	null, null, null, null, null, null, null, null, null, null, null, 
			  	null, null, null, null, null, null, null, null, null, null, null, 
			  	null, null, null, null, null, null, null, null, null, null, null, 
			  	e.mightyena, e.mightyena, e.mightyena, e.mightyena, e.mightyena,

			]  
		},
		97: { 
			preview: [e.miltank, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, e.haxorus,  e.haxorus, e.haxorus,
				null, null, null, null, null,
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.haxorus, e.haxorus, e.haxorus,  e.haxorus, e.haxorus, 
				null, null, null, null, null,
				e.miltank, e.miltank, e.miltank, e.miltank, e.miltank,
			] 
		},
		98: { 
			preview: [e.togedemaru, e.drampa, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, e.haxorus, e.haxorus, 
				e.drampa, e.drampa, e.drampa, e.drampa,
				e.haxorus,
				e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru, e.togedemaru,
				e.haxorus, 
				e.drampa, e.drampa, e.drampa, e.drampa,
				e.haxorus, e.haxorus, e.haxorus, e.haxorus, 

			] 
		},
		99: { 
			preview: [e.axew, e.haxorus],
			wave: [
				e.haxorus, e.haxorus, e.haxorus, e.haxorus, e.haxorus, e.haxorus, 
				null, null, null, null, null, null,
				e.axew, e.axew, e.axew, 
				e.haxorus, e.haxorus, e.haxorus, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.haxorus, e.haxorus, 
				e.axew, e.axew, e.axew, 
				e.haxorus, e.haxorus, e.haxorus, 
				null, null, null, null, null, null, null, null, null, 
				e.axew, e.axew, e.axew, 
				e.haxorus, e.haxorus, 
				null, null, null, null, null, null, null, null, null,
				e.haxorus, e.haxorus,
			]
		},
		100: { 
			preview: [e.zapdos], 
			wave: [
				e.zapdos
			] 
		},
	},
	10: {
		1: {
			preview: [e.trapinch, e.vibrava],
			wave: [
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, 
			],
		},
		2: {
			preview: [e.vibrava, e.solrock, e.lunatone],
			wave: [
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.lunatone, e.lunatone, e.lunatone, e.lunatone, 
				e.solrock, e.solrock, e.solrock, e.solrock, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
			],
		},
		3: {
			preview: [e.solrock, e.lunatone],
			wave: [
				e.solrock, e.solrock, e.solrock, e.solrock,
				e.lunatone, e.lunatone, e.lunatone, e.lunatone,
				e.lunatone, e.lunatone, e.lunatone, e.lunatone,
				e.solrock, e.solrock, e.solrock, e.solrock, 
			],
		},
		4: {
			preview: [e.solrock, e.lunatone, e.minior],
			wave: [
				e.lunatone, e.lunatone, e.lunatone, e.lunatone, e.lunatone, e.lunatone,
				e.minior, e.minior, e.minior,
				e.solrock, e.solrock, e.solrock, e.solrock, e.solrock, e.solrock,  
			],
		},
		5: {
			preview: [e.lunatone, e.vibrava, e.minior, e.gligar],
			wave: [
				e.minior, e.minior, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.lunatone, e.lunatone, e.lunatone, e.lunatone, e.lunatone, e.lunatone, e.lunatone,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
			],
		},
		6: {
			preview: [e.kangaskhan, e.krookodile, e.kecleon],
			wave: [
				e.krookodile, e.krookodile,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.krookodile, e.krookodile,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,  
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.krookodile, e.krookodile,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,  
				e.kecleon, e.kecleon, e.kecleon, e.kecleon,
			],
		},
		7: {
			preview: [e.minior],
			wave: [
				e.minior, e.minior, e.minior, 
				null, null, null, null, 
				null, null, null, null, 
				e.minior, e.minior, e.minior, 

			],
		},
		8: {
			preview: [e.minior, e.kangaskhan, e.gligar],
			wave: [
				e.minior, e.minior, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.minior, e.minior, 
				e.gligar, e.gligar, e.gligar, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.gligar, e.gligar, e.gligar, 
			],
		},
		9: {
			preview: [e.krookodile, e.kangaskhan],
			wave: [
				e.krookodile, e.krookodile,
				e.kangaskhan, e.kangaskhan, 
				e.krookodile, e.krookodile,
				e.kangaskhan, e.kangaskhan, 
				e.krookodile, e.krookodile,
				e.kangaskhan, e.kangaskhan,
				e.krookodile, e.krookodile,
			],
		},
		10: {
			preview: [e.minior, e.gligar, e.kecleon],
			wave: [
				e.minior, e.minior, e.minior, e.minior,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				null, null, null, null, null, null, null, null, null,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
			],
		},
		11: {
			preview: [e.sigilyph, e.kangaskhan, e.kecleon],
			wave: [
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
			],
		},
		12: {
			preview: [e.darmanitan, e.trapinch, e.vibrava, e.dugtrio],
			wave: [
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan,
				e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan, e.darmanitan,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,			
			],
		},
		13: {
			preview: [e.minior, e.vibrava, e.dugtrio],
			wave: [
				e.minior, e.minior, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.minior, e.minior, 
				null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,	
				null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,	
				null, null, null, null, null,  
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,	
				null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,	
			],
		},
		14: {
			preview: [e.gligar, e.krookodile, e.politoed],
			wave: [	
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
			],
		},
		15: { 
			preview: [e.politoed, e.gliscor, e.kecleon],
			wave: [
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.gliscor, e.gliscor, e.gliscor,e.gliscor, e.gliscor,
				null, null, null,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
				e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon, e.kecleon,
			] 
		},
		16: { 
			preview: [e.golurk, e.politoed],
			wave: [
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
			] 
		},
		17: { 
			preview: [e.golurk, e.dugtrio, e.kangaskhan, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, e.golurk, e.golurk, e.gliscor, e.gliscor,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.golurk, e.golurk, e.golurk, e.golurk,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.gliscor, e.gliscor,
				e.gliscor, e.gliscor, 
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.golurk, e.golurk, 
				null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			] 
		},
		18: { 
			preview: [e.kangaskhan],
			wave: [
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
			] 
		},
		19: {
			preview: [e.vibrava, e.flygon],
			wave: [
				e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.flygon, e.flygon, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava,
			],
		},
		20: {
			preview: [e.minior, e.gligar, e.flygon],
			wave: [
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,  
				e.minior, 
				e.flygon, e.flygon, 
				e.minior, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
			],
		},
		21: {
			preview: [e.vibrava, e.flygon],
			wave: [
				e.flygon, e.flygon, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.flygon, e.flygon,
			],
		},		
		22: {
			preview: [e.sigilyph, e.kangaskhan, e.vibrava, e.flygon],
			wave: [
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.flygon, e.flygon, 
			],
		},
		23: {
			preview: [e.flygon, e.dugtrio],
			wave: [
				e.flygon, 
				e.dugtrio, e.dugtrio, e.dugtrio,  e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.flygon, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			],
		},
		24: { 
			preview: [e.politoed, e.golurk, e.sigilyph, e.gliscor],
			wave: [
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.gliscor, e.gliscor, 
				null, null, null, null, null, null, null, null, null, null,
				e.gliscor, e.gliscor, 
				null, null, null, null, null, null, null, null, null, null,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				null, null, null, null, null, null, null, null, null, null,
				e.golurk, e.golurk, e.golurk, e.golurk, 
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, 
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
			] 
		},
		25: { 
			preview: [e.golurk, e.minior, e.kangaskhan, e.gliscor],
			wave: [
				e.minior, e.minior, e.minior,
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.minior, e.minior, e.minior, 
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,
				e.gliscor, e.gliscor, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
			] 
		},
		26: { 
			preview: [e.golurk, e.dugtrio, e.minior, e.kangaskhan, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.minior, e.minior, e.minior, e.minior,
				e.golurk, e.golurk, e.golurk, e.golurk,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,

				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,

			] 
		},
		27: { 
			preview: [e.politoed, e.golurk, e.minior, e.kangaskhan, e.gliscor],
			wave: [
				e.politoed, e.politoed, e.politoed, e.politoed, 
				e.gliscor, e.gliscor, 
				e.kangaskhan, e.kangaskhan, 
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, 
				e.minior, e.minior, 
				e.politoed, e.politoed, e.politoed, e.politoed,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.gliscor, e.gliscor,
				e.minior, e.minior,
				null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
			] 
		},
		28: { 
			preview: [e.minior, e.kangaskhan, e.gliscor],
			wave: [
				e.gliscor, e.gliscor,  
				e.minior, e.minior,
				e.gliscor, e.gliscor,  
				null, null, null, null, null, null, null, null, null, null,
				e.gliscor, e.gliscor, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
			] 
		},
		29: {
			preview: [e.politoed, e.dugtrio, e.sigilyph],
			wave: [
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,		

				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
	
				null, null, null, null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			
			],
		},
		30: { 
			preview: [e.flygon],
			wave: [
				e.flygon, e.flygon, e.flygon, 
				null, null, null, null, null, null, null, null, null, null, null,
				e.flygon, e.flygon,
			] 
		},
		31: { 
			preview: [e.vibrava, e.golurk, e.dugtrio, e.flygon],
			wave: [
				e.flygon, e.flygon, e.flygon, 

				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,

				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null,

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,

			] 
		},
		32: {
			preview: [e.minior, e.dugtrio, e.gligar, e.krookodile, e.flygon],
			wave: [
				e.minior, e.minior, e.minior,
				null, null, null, 
				e.flygon, e.flygon, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.gligar, e.gligar, e.gligar, 
				null, null, null, 
				e.gligar, e.gligar, e.gligar,  
				null, null, null, 
				e.gligar, e.gligar, e.gligar, 	
			],
		},
		33: {
			preview: [e.golurk, e.dugtrio, e.gliscor],
			wave: [
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,

				null, null, null, null, null, null,
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor,
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor,

				null, null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			],
		},
		34: {
			preview: [e.politoed, e.golurk, e.gliscor],
			wave: [
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.gliscor, e.gliscor, e.gliscor, 
				null, null, null, null, 
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,
				e.gliscor, e.gliscor, e.gliscor, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,		 
			],
		},
		35: {
			preview: [e.sigilyph],
			wave: [
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
			],
		},
		36: {
			preview: [e.dugtrio],
			wave: [
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			],
		},
		37: {
			preview: [e.dugtrio, e.krookodile, e.golurk, e.sigilyph],
			wave: [
				e.golurk, e.golurk, e.golurk, e.golurk,
				null, null, null, null,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.golurk, e.golurk, e.golurk, e.golurk,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,

				e.sigilyph, e.sigilyph, e.sigilyph,
			],
		},
		38: {
			preview: [e.politoed, e.minior, e.golurk, e.sigilyph],
			wave: [
				e.sigilyph, e.sigilyph, e.sigilyph, 
				e.politoed, e.politoed, e.politoed, e.golurk, e.golurk, e.golurk,
				e.minior, e.minior, 

				e.golurk, e.golurk, e.golurk, e.politoed, e.politoed, e.politoed,
				e.minior, e.minior, 
				e.sigilyph, e.sigilyph, 

				e.sigilyph, e.sigilyph, e.sigilyph, 
			],
		},	
		39: {
			preview: [e.solrock, e.lunatone, e.minior, e.gligar, e.sigilyph],
			wave: [
				e.minior, e.minior, e.minior,

				null, null, null, null,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				
				e.minior, e.minior, e.minior,

				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.lunatone, e.lunatone, e.lunatone, e.lunatone, e.lunatone, e.lunatone, e.lunatone, 
				e.solrock, e.solrock, e.solrock, e.solrock, e.solrock, e.solrock, e.solrock, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.solrock, e.solrock, e.solrock, e.solrock, e.solrock, e.solrock, e.solrock, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.lunatone, e.lunatone, e.lunatone, e.lunatone, e.lunatone, e.lunatone, e.lunatone, 
				null, null, null, null,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				null, null, null, null, null, null, null, null,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				null, null, null, null, null, null, null, null,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
			],
		},
		40: {
			preview: [e.dugtrio, e.lunatone, e.minior],
			wave: [
				e.minior, e.minior,  

				e.lunatone, e.lunatone, e.lunatone, e.lunatone, e.lunatone, e.lunatone, e.lunatone, e.lunatone, e.lunatone, e.lunatone,
				e.minior, e.minior, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,


				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			],
		},
		41: {
			preview: [e.krookodile, e.golurk, e.sigilyph, e.dugtrio],
			wave: [
				e.sigilyph, e.sigilyph,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, 
				e.golurk, e.golurk,
				e.dugtrio, e.dugtrio,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.golurk, e.golurk,
				e.dugtrio,
				e.sigilyph, e.sigilyph,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, 
				e.dugtrio, e.dugtrio,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.golurk, e.golurk,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.golurk, e.golurk,
				null, null,  
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			],
		},
		42: {
			preview: [e.dugtrio,  e.minior],
			wave: [
				e.minior, e.minior, e.minior, e.minior, e.minior, 

				e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, 

			],
		},
		43: {
			preview: [e.dugtrio, e.minior, e.krookodile, e.sigilyph],
			wave: [
				e.minior, e.minior,  
				null, null, null, null, null, null, null, null,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				null, null, null, null, null, null, null, null,
				e.minior, e.minior,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.dugtrio, e.dugtrio, e.dugtrio, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,

				e.dugtrio, e.dugtrio, e.dugtrio,

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,  
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 	
			],
		},
		44: {
			preview: [e.minior, e.flygon],
			wave: [
				e.minior, e.minior, e.minior,
				e.flygon, e.flygon, 
				e.minior, e.minior, e.minior,  
			],
		},
		45: {
			preview: [e.politoed, e.dugtrio, e.flygon],
			wave: [
				e.flygon, e.flygon, e.flygon, e.flygon,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			],
		},
		46: {
			preview: [e.minior, e.dugtrio, e.flygon],
			wave: [
				e.flygon, 
				e.minior, e.minior, 
				e.flygon, e.flygon, 
				e.minior, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,

			],
		},
		47: {
			preview: [e.gligar, e.krookodile, e.vibrava, e.flygon],
			wave: [
				e.flygon, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.flygon, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.flygon,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 

				e.flygon, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
			],
		},
		48: {
			preview: [e.gligar, e.krookodile, e.sigilyph, e.flygon],
			wave: [
				e.flygon, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.flygon, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.flygon,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.flygon, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
			],
		},
		49: {
			preview: [e.vibrava, e.dugtrio, e.politoed, e.flygon],
			wave: [
				e.flygon, e.flygon, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.flygon, e.flygon,  
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			],
		},
		50: {
			preview: [e.gligar, e.politoed, e.sigilyph, e.kangaskhan],
			wave: [
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 	
			],
		},
		51: { 
			preview: [e.minior, e.kangaskhan],
			wave: [
				e.minior, e.minior, 
				null, null, null, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.minior, e.minior,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
			] 
		},
		52: { 
			preview: [e.gligar, e.kangaskhan, e.dugtrio],
			wave: [
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 

				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 

				null, null, null, null, null, null,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
			] 
		},
		53: { 
			preview: [e.dugtrio, e.politoed, e.golurk, e.sigilyph],
			wave: [
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,

				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.sigilyph, e.sigilyph, e.sigilyph, 
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, 
				e.sigilyph, e.sigilyph, e.sigilyph, 

				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			] 
		},
		54: { 
			preview: [e.sigilyph, e.dugtrio, e.minior, e.flygon],
			wave: [
				e.flygon, e.flygon, 
				null, null, null, null,	null, null,	null,
				e.minior, e.minior, e.minior, e.minior,  
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				null, null, null, null, null, null, null,	
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.flygon, e.flygon, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,  
			] 
		},
		55: { 
			preview: [e.golurk, e.sigilyph, e.minior, e.kangaskhan, e.flygon],
			wave: [
				e.minior, e.minior, e.minior, 
				e.golurk, e.golurk, e.golurk,   e.golurk, e.golurk, e.golurk,  
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.flygon, 
				e.sigilyph, e.sigilyph, e.sigilyph, 
				null, null,
				e.golurk, e.golurk, e.golurk, 
				null, null, 
				e.sigilyph, e.sigilyph, e.sigilyph, 
				null, null,
				e.flygon,
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,  e.golurk, e.golurk, e.golurk,  
				null, null, 
				e.minior, e.minior, 
				e.flygon,
				null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
 
			] 
		},
		56: { 
			preview: [e.golurk, e.sigilyph, e.dugtrio, e.kangaskhan],
			wave: [
				e.sigilyph, e.sigilyph, e.sigilyph,
	
				e.golurk, e.golurk, e.golurk, 
				e.sigilyph, e.sigilyph,  
				e.golurk, e.golurk, 

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,  e.dugtrio,  	
			] 
		},
		57: { 
			preview: [e.politoed, e.golurk, e.sigilyph, e.dugtrio, e.flygon],
			wave: [
				e.flygon, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,
				e.flygon, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.flygon,  
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.flygon,
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
 				e.flygon,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			] 
		},
		58: { 
			preview: [e.golurk, e.sigilyph, e.dugtrio, e.kangaskhan, e.gliscor],
			wave: [
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,  
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, 
				e.sigilyph, e.sigilyph, 
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor, 
				e.golurk, e.golurk, 
				e.sigilyph, e.sigilyph, e.sigilyph,
				e.golurk, e.golurk,  
				null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			] 
		},
		59: { 
			preview: [e.golurk, e.dugtrio, e.minior],
			wave: [
				e.minior, e.minior, e.minior, e.minior, e.minior,
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, 
				null, null, null, null, null, null, null, null, 
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,
				e.minior, e.minior, e.minior, e.minior, e.minior,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				null, null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			] 
		},
		60: { 
			preview: [e.golurk, e.gliscor],
			wave: [
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, 
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor, 
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor, 
			] 
		},
		61: { 
			preview: [e.politoed, e.golurk, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor,
				e.golurk, e.golurk, e.golurk, e.golurk, 
				e.gliscor, e.gliscor,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
				e.golurk, e.golurk, e.golurk, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
				e.golurk, e.golurk, e.golurk,
				e.gliscor, e.gliscor,
			]
		},
		62: { 
			preview: [e.dugtrio, e.kangaskhan, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, e.gliscor, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				null, null, null, null, null, null, null, null, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.gliscor, e.gliscor, e.gliscor, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				null, null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
		
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				null, null, null, null, null, null, null, null, 

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,			
			] 
		},
		63: { 
			preview: [e.gligar, e.golurk, e.dugtrio, e.gliscor, e.flygon],
			wave: [
				e.gliscor, e.gliscor, 
				e.flygon, 
				e.golurk, e.golurk, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.flygon,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gliscor, e.gliscor, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.flygon, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.golurk, e.golurk, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.flygon, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,

				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,		 
			] 
		},
		64: { 
			preview: [e.gligar, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
			] 
		},
		65: { 
			preview: [e.krookodile, e.politoed, e.golurk, e.sigilyph, e.gliscor],
			wave: [
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.gliscor, e.gliscor, e.gliscor, 
				e.sigilyph, e.sigilyph, e.sigilyph,
				e.gliscor, e.gliscor, e.gliscor, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.golurk, e.golurk, e.golurk, e.golurk, 
				e.sigilyph, e.sigilyph, e.sigilyph,
			] 
		},
		66: { 
			preview: [e.krookodile, e.sigilyph],
			wave: [
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
			] 
		},
		67: { 
			preview: [e.dugtrio],
			wave: [
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			] 
		},
		68: { 
			preview: [e.krookodile, e.flygon],
			wave: [
				e.flygon, e.flygon, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.flygon, e.flygon, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, 
				e.flygon, e.flygon, 

			] 
		},
		69: { 
			preview: [e.krookodile, e.sigilyph, e.gliscor, e.flygon],
			wave: [
				e.gliscor, e.gliscor, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.flygon, e.flygon, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.gliscor, e.gliscor, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.flygon, e.flygon, 
			] 
		},
		70: { 
			preview: [e.politoed, e.dugtrio, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.gliscor, e.gliscor, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.gliscor, e.gliscor, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			] 
		},
		71: { 
			preview: [e.flygon],
			wave: [
				e.flygon, e.flygon, e.flygon,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.flygon, e.flygon, e.flygon,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.flygon, e.flygon, e.flygon,
			] 
		},
		72: { 
			preview: [e.golurk, e.dugtrio, e.kangaskhan, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, e.golurk, e.golurk, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.golurk, e.golurk, e.golurk, e.golurk,
				null, null, null, null, null,
				e.gliscor, e.gliscor,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				null, null, null, null, null, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			] 
		},
		73: { 
			preview: [e.kangaskhan, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				null, null, null, null, null, null, null, null, null, null,
				e.gliscor, e.gliscor, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
			] 
		},
		74: { 
			preview: [e.politoed, e.golurk, e.sigilyph, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, e.gliscor, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				null, null, null, null, null, null, null, null, null, null,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				null, null, null, null, null, null, null, null, null, null,
				e.golurk, e.golurk, e.golurk, e.golurk, 
				e.gliscor, e.gliscor, e.gliscor,
				null, null, null, null, null, null, null, null, null, null,
				e.golurk, e.golurk, e.golurk, e.golurk, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
			] 
		},
		75: { 
			preview: [e.golurk, e.minior, e.kangaskhan, e.gliscor, e.flygon],
			wave: [
				e.flygon, e.flygon,
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,
				e.minior, e.minior,  
				e.gliscor, 
				null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null,
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,
				e.minior, e.minior, 
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,
				e.gliscor, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
			] 
		},
		76: { 
			preview: [e.golurk, e.dugtrio, e.minior, e.kangaskhan, e.gliscor],
			wave: [
				e.minior, e.minior,  
				e.gliscor, e.gliscor, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.minior, e.minior, 
				e.golurk, e.golurk, e.golurk, e.golurk,
				e.gliscor, e.gliscor,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,

			] 
		},
		77: { 
			preview: [e.politoed, e.golurk, e.minior, e.kangaskhan, e.gliscor],
			wave: [
				e.politoed, e.politoed, e.politoed, e.politoed, 
				e.gliscor, e.gliscor, 
				e.kangaskhan, e.kangaskhan, 
				e.minior, e.minior, e.minior, e.minior,
				e.golurk, e.golurk, e.golurk, 
				e.politoed, e.politoed, e.politoed, e.politoed,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				e.gliscor, e.gliscor,
				e.golurk, e.golurk, e.golurk, 
				null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
				null, null, null, null, null,
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan,
			] 
		},
		78: { 
			preview: [e.vibrava, e.minior, e.kangaskhan, e.gliscor, e.flygon],
			wave: [
				e.flygon, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.flygon, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.kangaskhan, e.kangaskhan,  e.kangaskhan,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.minior, e.minior, e.minior,  
				null, null, null, null, null, null, null, null, null, null,
				e.gliscor, e.gliscor, e.gliscor, 
				e.flygon, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				
			] 
		},
		79: { 
			preview: [e.vibrava, e.flygon],
			wave: [
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.flygon, e.flygon, e.flygon, e.flygon, e.flygon,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
			] 
		},
		80: { 
			preview: [e.vibrava, e.golurk, e.dugtrio, e.flygon],
			wave: [
				e.flygon, e.flygon, 

				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,

				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, e.golurk,  
				e.flygon, e.flygon, 

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			] 
		},
		81: { 
			preview: [e.dugtrio, e.flygon],
			wave: [
				e.flygon, 
				e.dugtrio, e.dugtrio, e.dugtrio,
				e.flygon, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio,
				e.flygon, e.flygon, 
				
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			] 
		},
		82: { 
			preview: [e.gligar, e.kangaskhan, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, e.gliscor, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gliscor, e.gliscor, e.gliscor, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.kangaskhan, e.kangaskhan, e.kangaskhan, e.kangaskhan, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 	
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
			] 
		},
		83: { 
			preview: [e.politoed, e.golurk, e.minior, e.gliscor, e.flygon],
			wave: [
				e.minior, e.minior, e.minior, e.minior, e.minior, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.flygon, e.flygon, 
				e.gliscor, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.golurk, e.golurk, e.golurk, e.golurk,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.golurk, e.golurk, e.golurk, e.golurk,	
				e.gliscor,  
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, 
			] 
		},
		84: { 
			preview: [e.golurk, e.gliscor, e.flygon],
			wave: [
				e.flygon, e.flygon, 
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, 
				null, null, null, null, null, null, null, null,
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, 
				e.flygon, e.flygon, 
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, 
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, 
				e.gliscor, e.gliscor,  
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, 
				e.golurk, e.golurk, e.golurk, e.golurk, e.golurk, 
				null, null, null, null, null, null, null, null,
				e.gliscor, e.gliscor, 
				null, null, null, null, null, null, null, null,
				e.flygon, e.flygon, 
			] 
		},
		85: { 
			preview: [e.gliscor],
			wave: [
				e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor, e.gliscor,
			] 
		},
		86: { 
			preview: [e.gligar, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, e.gliscor, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gliscor, e.gliscor, e.gliscor, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gliscor, e.gliscor, e.gliscor,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gliscor, e.gliscor, e.gliscor, 
			] 
		},
		87: { 
			preview: [e.trapinch, e.vibrava, e.flygon],
			wave: [
				e.flygon, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.flygon, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.flygon, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.flygon, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.flygon, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
				e.flygon, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch, e.trapinch,
			] 
		},
		88: { 
			preview: [e.dugtrio, e.minior, e.gliscor],
			wave: [
				e.minior, e.minior,
				
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				e.gliscor, e.gliscor, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,

				e.minior, e.minior, 

				e.gliscor, e.gliscor,

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			] 
		},
		89: { 
			preview: [e.dugtrio, e.minior, e.gliscor, e.flygon],
			wave: [
				e.gliscor, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.minior, e.minior,  
				e.flygon, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.minior,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.gliscor,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.flygon, e.flygon,
				e.gliscor, 
				
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			] 
		},
		90: { 
			preview: [e.golurk, e.vibrava, e.flygon],
			wave: [
				e.flygon, e.vibrava, e.vibrava, e.vibrava, e.vibrava ,e.vibrava, e.vibrava, e.flygon, 
				null, null, null, null, null, null, null, null, null, 
				e.golurk, e.golurk, e.golurk, e.golurk, 
				null, null, null, null, null, null, null, null, null, 
				e.golurk, e.golurk, e.golurk, e.golurk,
				e.flygon, e.vibrava, e.vibrava, e.vibrava, e.vibrava ,e.vibrava, e.vibrava, e.flygon,
			] 
		},
		91: { 
			preview: [e.gligar, e.krookodile, e.sigilyph, e.flygon],
			wave: [
				e.flygon, 
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.flygon,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.flygon, 
				e.flygon, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
			],
		},
		92: { 
			preview: [e.vibrava, e.dugtrio, e.politoed, e.flygon],
			wave: [
				e.flygon, e.flygon, 
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.flygon, e.flygon,  
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed, e.politoed,

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,

				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,

				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			],
		},
		93: { 
			preview: [e.sigilyph, e.gliscor],
			wave: [
				e.gliscor, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.gliscor, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.gliscor,
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.sigilyph, e.sigilyph, e.sigilyph, e.sigilyph, 
				e.gliscor, 
			]
		},
		94: { 
			preview: [e.minior, e.dugtrio, e.flygon],
			wave: [
				e.minior, e.minior, 
				e.flygon, 
				e.flygon, 
				e.minior, e.minior, 
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
				e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,

			],
		},
		95: { 
			preview: [e.gligar, e.krookodile, e.vibrava, e.flygon],
			wave: [
				e.flygon, e.flygon, e.flygon,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.flygon, e.flygon, e.flygon,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
			],
		},
		96: { 
			preview: [e.dugtrio, e.gligar, e.krookodile, e.vibrava,  e.flygon],
			wave: [
				e.flygon, e.flygon, e.flygon,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.flygon, e.flygon, e.flygon,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile, e.krookodile,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar,
				e.dugtrio, e.dugtrio,
			  	e.dugtrio, e.dugtrio,
			  	e.dugtrio, e.dugtrio,
			  	e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			  	null, null, null, null,	null, null, null, null,	null, null, null, null,	null, null, null, null,
			  	e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, 
			  	null, null, null, null,	null, null, null, null,	null, null, null, null,	null, null, null, null,
			  	e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio, e.dugtrio,
			]  
		},
		97: { 
			preview: [e.gligar, e.gliscor, e.flygon],
			wave: [
				e.flygon, e.flygon, 
				e.gliscor, e.gliscor,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gliscor, e.gliscor,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gliscor, e.gliscor,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.flygon, e.flygon,
				null, null, null,
				
			] 
		},
		98: { 
			preview: [e.vibrava, e.gliscor],
			wave: [
				e.gliscor, e.gliscor, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.gliscor, e.gliscor, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.gliscor, e.gliscor, 
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.gliscor, e.gliscor,
			] 
		},
		99: { 
			preview: [e.gligar, e.vibrava, e.gliscor, e.flygon],
			wave: [
				e.gliscor, e.flygon, e.gliscor, e.flygon,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava, e.vibrava,
				e.flygon, e.gliscor, e.flygon, e.gliscor,
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
				e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, e.gligar, 
			]
		},
		100: { 
			preview: [e.hooh], 
			wave: [
				e.hooh
			] 
		},
	},
	11: {
		1: {
			preview: [e.palpitoad, e.seismitoad],
			wave: [
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.seismitoad, e.seismitoad, e.seismitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.seismitoad, e.seismitoad, e.seismitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
			],
		},
		2: {
			preview: [e.sealeo],
			wave: [
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
			],
		},
		3: {
			preview: [e.palpitoad, e.cryogonal, e.sealeo],
			wave: [
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.cryogonal, e.cryogonal, 
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
			],
		},
		4: {
			preview: [e.shellder, e.cloyster],
			wave: [
				e.cloyster, e.cloyster,
				e.cloyster, e.cloyster,
				e.shellder, e.shellder, e.shellder, e.shellder,
				e.shellder, e.shellder, e.shellder, e.shellder,
				e.cloyster, e.cloyster,
				e.cloyster, e.cloyster,
			],
		},
		5: {
			preview: [e.sealeo, e.aerodactyl],
			wave: [
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				null, null, null, null, null, null,
				e.aerodactyl, 

			],
		},
		6: {
			preview: [e.sealeo, e.froslass],
			wave: [
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, 
				e.froslass, e.froslass,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.froslass, e.froslass, 
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, 
				e.froslass, e.froslass,
			],
		},
		7: {
			preview: [e.shellder, e.froslass, e.cryogonal],
			wave: [
				e.froslass, e.shellder, e.froslass, e.shellder, e.froslass, e.shellder, e.froslass, e.shellder, e.froslass, e.shellder,
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, 
				e.froslass, e.shellder, e.froslass, e.shellder, e.froslass, e.shellder, e.froslass, e.shellder, e.froslass, e.shellder,
			],
		},
		8: {
			preview: [e.noctowl, e.gastrodon, e.cloyster],
			wave: [
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
				e.noctowl, e.noctowl, e.noctowl, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		9: {
			preview: [e.glalie],
			wave: [
				e.glalie, e.glalie, e.glalie, e.glalie, 
				null, null, null, 
				e.glalie, e.glalie, e.glalie, e.glalie,  
			],
		},
		10: {
			preview: [e.slowpoke, e.slowbro],
			wave: [
				e.slowpoke, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowpoke, 
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				e.slowpoke, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowpoke, 
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
			],
		},
		11: {
			preview: [e.palpitoad, e.seismitoad],
			wave: [
				e.seismitoad, e.seismitoad, e.seismitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.seismitoad, e.seismitoad, e.seismitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.seismitoad, e.seismitoad, e.seismitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.seismitoad, e.seismitoad, e.seismitoad, 
			],
		},
		12: {
			preview: [e.noctowl, e.cloyster, e.cryogonal],
			wave: [
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				 
			],
		},
		13: {
			preview: [e.froslass],
			wave: [
				e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass,
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass,
			],
		},
		14: {
			preview: [e.vanillish, e.vanilluxe],
			wave: [
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanillish, e.vanillish, e.vanillish, e.vanillish, e.vanillish, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
			],
		},
		15: {
			preview: [e.palpitoad, e.seismitoad],
			wave: [
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.palpitoad, e.palpitoad, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.palpitoad, e.palpitoad, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.palpitoad, e.palpitoad, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
			],
		},
		16: {
			preview: [e.aerodactyl],
			wave: [
				e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl,
			],
		},
		17: {
			preview: [e.cryogonal, e.aerodactyl],
			wave: [
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal,
				null, null, null, null, null, null, null, null, null, 
				e.aerodactyl,	
			],
		},
		18: {
			preview: [e.froslass, e.walrein],
			wave: [
				e.walrein, e.walrein, 
				null, null, null, null, null, null, null, null, null, 
				e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, 
				null, null, null, null, 
				e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, 
				
			],
		},
		19: {
			preview: [e.noctowl, e.lapras],
			wave: [	
				e.lapras, e.lapras, e.lapras, e.lapras, 

				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.lapras, e.lapras, e.lapras, e.lapras,

				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				
				null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		20: {
			preview: [e.altaria, e.gastrodon, e.cloyster],
			wave: [
				e.cloyster, e.cloyster, e.cloyster, 

				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,

				e.cloyster, e.cloyster, e.cloyster,  

				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
			],
		},
		21: {
			preview: [e.slowpoke, e.slowbro, e.sealeo],
			wave: [
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
				e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
			],
		},
		22: {
			preview: [e.seismitoad, e.walrein],
			wave: [
				e.walrein, e.walrein,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				null, null, null, null, null, null,
				e.walrein, e.walrein,
				null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				null, null, null, null, null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
	
			],
		},
		23: {
			preview: [e.sealeo, e.walrein],
			wave: [
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.walrein, e.walrein,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.walrein, e.walrein, 
			],
		},
		24: {
			preview: [e.noctowl, e.froslass],
			wave: [
				e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, 	
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, 				
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		25: {
			preview: [e.cloyster],
			wave: [
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
			],
		},
		26: {
			preview: [e.walrein],
			wave: [
				e.walrein, e.walrein, e.walrein, e.walrein, e.walrein, 
			],
		},
		27: {
			preview: [e.shellder, e.cloyster, e.cryogonal],
			wave: [
				e.cryogonal, e.cryogonal, e.cryogonal, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.cryogonal, e.cryogonal, e.cryogonal, 

			],
		},
		28: {
			preview: [e.shellder, e.cloyster, e.cryogonal],
			wave: [
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 

				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,
				null, null, null, null, null, null, null, null, null,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				null, null, null, null, null, null, null, null, null,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,
				null, null, null, null, null, null, null, null, null,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 

				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal,
			],
		},
		29: {
			preview: [e.altaria, e.walrein, e.aerodactyl],
			wave: [
				e.aerodactyl, e.altaria, e.altaria, e.altaria, 
				e.walrein, e.walrein, 
				e.altaria, e.altaria, e.altaria, e.altaria, 
				e.altaria, e.altaria, e.altaria, e.aerodactyl,
				e.walrein, e.walrein, 

			],
		},
		30: {
			preview: [e.froslass, e.glalie],
			wave: [
				e.froslass, e.froslass, e.froslass, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.glalie, e.froslass, e.glalie, e.froslass, e.glalie, e.froslass, e.glalie, e.froslass, e.glalie,
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.froslass, e.froslass, e.froslass, 
			],
		},
		31: {
			preview: [e.gastrodon, e.froslass, e.glalie],
			wave: [
				e.glalie, e.glalie, e.glalie, e.glalie,
				null, null, null, null, null, 
				e.froslass, e.froslass, e.froslass, e.froslass, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				null, null, null, null, null, null, null, null, null, 
				e.froslass, e.froslass, e.froslass, e.froslass,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.glalie, e.glalie, e.glalie, e.glalie, 

			],
		},
		32: {
			preview: [e.cryogonal],
			wave: [
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal,
				null, null, null, 
				e.cryogonal, e.cryogonal,
				null, null, null, 
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal,
	
			],
		},
		33: {
			preview: [e.seismitoad, e.slowbro, e.cloyster],
			wave: [
				e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro,
				e.cloyster, e.cloyster, e.cloyster, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro,
				e.cloyster, e.cloyster, 
			],
		},
		34: {
			preview: [e.slowbro, e.aerodactyl],
			wave: [
				e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro,
				e.aerodactyl,
				e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro,
				e.aerodactyl,
			],
		},
		35: {
			preview: [e.cryogonal],
			wave: [
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal,
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, 
			],
		},
		36: {
			preview: [e.seismitoad, e.cryogonal, e.aerodactyl, e.walrein],
			wave: [
				e.aerodactyl, e.aerodactyl, 
				e.walrein, 
				null, null, null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.walrein, 
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, 
				null, null, null, null,
				e.aerodactyl, e.aerodactyl, 
			],
		},
		37: {
			preview: [e.froslass, e.cryogonal],
			wave: [
				e.froslass, e.froslass, e.froslass, 
				null, null, null, null, null,
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, 
				null, null, null, null, null,
				e.froslass, e.froslass, e.froslass, 
			],
		},
		38: {
			preview: [e.glalie, e.cryogonal],
			wave: [
				e.glalie, e.glalie, e.glalie,
				null, null, null, null, null,
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, 
				null, null, null, null, null,
				e.glalie, e.glalie, e.glalie,
			],
		},
		39: {
			preview: [e.lapras, e.cryogonal],
			wave: [
				e.lapras, e.lapras, e.lapras, e.lapras,
				e.cryogonal, e.cryogonal, e.cryogonal, 
				e.lapras, e.lapras, e.lapras, e.lapras, 
				e.cryogonal, e.cryogonal, e.cryogonal, 
				e.lapras, e.lapras, e.lapras, e.lapras, 
			],
		},
		40: {
			preview: [e.lapras, e.aerodactyl],
			wave: [
				e.aerodactyl, 
				e.lapras, e.lapras, e.lapras, e.lapras,
				null, null, null, null, null,
				e.lapras, e.lapras, e.lapras, e.lapras, 
				e.aerodactyl, 
			],
		},
		41: {
			preview: [e.slowpoke, e.slowbro, e.lapras],
			wave: [
				e.slowbro, e.slowbro,
				e.lapras, e.lapras,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				e.slowbro, e.slowbro,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				e.lapras, e.lapras,
			],
		},
		42: {
			preview: [e.shellder, e.cloyster, e.glalie],
			wave: [
				e.glalie, e.glalie, e.glalie, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.cloyster, e.cloyster, e.cloyster, e.cloyster,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.glalie, e.glalie, e.glalie, 
				e.cloyster, e.cloyster, e.cloyster, e.cloyster,  
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,  
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
			],
		},
		43: {
			preview: [e.altaria, e.cloyster, e.froslass],
			wave: [
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
				e.froslass, e.froslass, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.altaria, e.altaria, e.altaria, 
				e.froslass, e.froslass, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.cloyster, e.cloyster, 
				e.altaria, e.altaria, e.altaria, 
				e.froslass, e.froslass,e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
			],
		},
		44: {
			preview: [e.shellder, e.cloyster],
			wave: [
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,
				e.shellder, e.shellder, e.cloyster, e.cloyster, e.shellder, e.shellder, e.shellder, e.shellder, e.cloyster, e.cloyster, e.shellder, e.shellder, e.shellder, e.shellder,
				e.cloyster, e.cloyster, e.shellder, e.shellder, e.cloyster, e.cloyster, 
				e.shellder, e.shellder, e.cloyster, e.cloyster, e.shellder, e.shellder, e.shellder, e.shellder, e.cloyster, e.cloyster, e.shellder, e.shellder, e.shellder, e.shellder,
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,
			],
		},
		45: {
			preview: [e.sealeo, e.walrein],
			wave: [
				e.walrein, e.walrein,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.walrein, e.walrein, 
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
			],
		},
		46: {
			preview: [e.altaria, e.froslass, e.glalie, e.walrein],
			wave: [
				e.glalie, e.glalie,
				e.froslass, e.froslass, e.froslass, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.walrein, e.walrein, e.walrein, 
				null, null, null, null, null,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,  
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.glalie, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.glalie, e.glalie,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.walrein, e.walrein, 
				e.froslass, e.froslass,  
			],
		},
		47: {
			preview: [e.gastrodon, e.noctowl, e.sealeo, e.walrein],
			wave: [
				e.walrein, e.walrein, e.walrein, e.walrein,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, 
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				null, null, null, null, null, null, null, null, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				null, null, null, null, null, null, null, null,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,
			],
		},
		48: {
			preview: [e.noctowl, e.seismitoad, e.slowbro, e.gastrodon],
			wave: [
				e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro,  
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 

				null, null, null, null, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 

				null, null, null, null, 

				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,

				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		49: {
			preview: [e.lapras, e.seismitoad, e.slowbro, e.gastrodon],
			wave: [
				e.lapras, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro,  
				e.lapras, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				e.lapras, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,  e.gastrodon,  e.gastrodon,
				e.lapras, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,

			],
		},
		50: {
			preview: [e.altaria, e.lapras, e.cryogonal, e.glalie],
			wave: [
				e.cryogonal, e.cryogonal, 
				e.lapras, e.lapras, e.lapras, 
				null, null, null, null, null, 
				e.glalie, e.glalie, e.glalie, 
				null, null, null, null, null, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
			],
		},
		51: { 
			preview: [e.cloyster, e.glalie, e.froslass],
			wave: [
				e.glalie, e.glalie, e.glalie,  
				e.cloyster, e.cloyster, e.cloyster, 
				e.froslass, e.froslass, e.froslass,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.glalie, e.glalie, e.glalie, 
				e.cloyster, e.cloyster, e.cloyster, 
				null, null, null, null, null, null, null, null, null, null, null, null, 
				e.glalie, e.glalie, e.glalie,  
				e.froslass, e.froslass, e.froslass,
				
			] 
		},
		52: { 
			preview: [e.altaria, e.glalie, e.cryogonal],
			wave: [
				e.glalie, e.glalie, e.glalie, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				null, null, null, null, null, null,
				e.cryogonal, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,  

				e.glalie, e.glalie, e.glalie, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 

				e.cryogonal, 
				null, null, null, null, null, null,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
			] 
		},
		53: { 
			preview: [e.lapras, e.vanilluxe, e.walrein],
			wave: [
				e.lapras, e.lapras, e.lapras, e.walrein,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.lapras, e.lapras, e.lapras, e.walrein,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.lapras, e.lapras, e.lapras, e.walrein,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
			] 
		},
		54: { 
			preview: [e.cryogonal, e.cloyster, e.aerodactyl],
			wave: [
				e.aerodactyl, 
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
				null, null, null, null, null, null,
				e.cryogonal, e.cryogonal, 
				null, null, null, null, null, null,
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,
				e.aerodactyl,  

			] 
		},
		55: {
			preview: [e.palpitoad, e.seismitoad, e.altaria, e.vanilluxe, e.aerodactyl],
			wave: [
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.aerodactyl, e.aerodactyl,  
				e.seismitoad, e.seismitoad, e.seismitoad,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.aerodactyl, 
				e.seismitoad, e.seismitoad, e.seismitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.aerodactyl,  
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
			],
		},
		56: {
			preview: [e.sealeo, e.altaria, e.walrein],
			wave: [
				e.walrein, e.walrein, e.walrein,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.walrein, e.walrein, e.walrein,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
			],
		},
		57: {
			preview: [e.palpitoad, e.cryogonal, e.sealeo, e.aerodactyl],
			wave: [
				e.aerodactyl, 
				e.cryogonal, e.cryogonal, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.aerodactyl, 
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.cryogonal, e.cryogonal, 
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.aerodactyl, 
			],
		},
		58: {
			preview: [e.altaria, e.cloyster, e.walrein],
			wave: [
				e.cloyster, e.cloyster, e.walrein,
				e.cloyster, e.cloyster, e.walrein,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.cloyster, e.cloyster, e.walrein,
				e.cloyster, e.cloyster, e.walrein,
			],
		},
		59: {
			preview: [e.sealeo, e.aerodactyl],
			wave: [
				e.aerodactyl, 
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.aerodactyl, e.aerodactyl, 
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.aerodactyl, 

			],
		},
		60: {
			preview: [e.sealeo, e.walrein],
			wave: [
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, 
				e.walrein, e.walrein,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.walrein, e.walrein, 
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, 
				e.walrein, e.walrein,
			],
		},
		61: {
			preview: [e.noctowl, e.froslass, e.cryogonal],
			wave: [
				e.froslass, e.noctowl, e.froslass, e.noctowl, e.froslass, e.noctowl, e.froslass, e.noctowl, e.froslass, e.noctowl,
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal,
				e.froslass, e.noctowl, e.froslass, e.noctowl, e.froslass, e.noctowl, e.froslass, e.noctowl, e.froslass, e.noctowl,
			],
		},
		62: {
			preview: [e.noctowl, e.gastrodon, e.cloyster, e.cryogonal],
			wave: [
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
				e.noctowl, e.noctowl, e.noctowl, 
				e.cryogonal, e.cryogonal, e.cryogonal,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.noctowl, e.noctowl, e.noctowl, 
				e.cryogonal, e.cryogonal, e.cryogonal,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		63: {
			preview: [e.noctowl, e.glalie],
			wave: [
				e.glalie, e.glalie, e.glalie, e.glalie, e.glalie, e.glalie, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,
				e.glalie, e.glalie, e.glalie, e.glalie, e.glalie, e.glalie, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		64: {
			preview: [e.slowpoke, e.slowbro],
			wave: [
				e.slowpoke, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowpoke,  e.slowbro, 
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke, 
				e.slowpoke, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowpoke,  e.slowbro, 
			],
		},
		65: {
			preview: [e.altaria, e.aerodactyl],
			wave: [
				e.aerodactyl, e.aerodactyl, e.aerodactyl, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.aerodactyl, e.aerodactyl, e.aerodactyl, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
			],
		},
		66: {
			preview: [e.noctowl, e.sealeo, e.altaria, e.walrein],
			wave: [
				e.altaria, e.walrein, e.walrein,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.walrein, e.walrein, 
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.altaria, e.walrein, e.walrein,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 

			],
		},
		67: {
			preview: [e.noctowl, e.altaria, e.sealeo, e.aerodactyl],
			wave: [
				e.altaria, e.altaria, e.altaria, e.altaria, 
				e.aerodactyl,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.aerodactyl,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.aerodactyl,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.aerodactyl,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		68: {
			preview: [e.noctowl, e.altaria, e.lapras],
			wave: [	
				e.lapras, e.lapras, e.lapras, e.lapras, 

				e.altaria, e.altaria, e.altaria, e.altaria, 
				null, null, null, null, null, null, null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, null, null, null,
				e.lapras, e.lapras, e.lapras, e.lapras,

				e.altaria, e.altaria, e.altaria, e.altaria, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		69: {
			preview: [e.altaria, e.gastrodon, e.cloyster],
			wave: [
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
			],
		},
		70: {
			preview: [e.slowpoke, e.slowbro, e.sealeo, e.walrein],
			wave: [
				e.walrein,
				e.slowpoke, e.slowpoke, e.slowpoke, e.slowpoke,
				e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.walrein,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.walrein,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.walrein
			],
		},
		71: {
			preview: [e.seismitoad, e.walrein],
			wave: [
				e.walrein, e.walrein, e.walrein, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				null, null, null, null, null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.walrein, e.walrein, e.walrein,
				null, null, null, null, null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				null, null, null, null, null, null,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
	
			],
		},
		72: {
			preview: [e.sealeo, e.walrein],
			wave: [
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.walrein, e.walrein, e.walrein, e.walrein,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.walrein, e.walrein, e.walrein, e.walrein,
			],
		},
		73: {
			preview: [e.aerodactyl],
			wave: [
				e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl, e.aerodactyl
			],
		},
		74: {
			preview: [e.altaria, e.aerodactyl],
			wave: [
				e.altaria, e.altaria, e.altaria, e.altaria, 
				e.aerodactyl, e.aerodactyl,	
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.aerodactyl, e.aerodactyl,	
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.aerodactyl, e.aerodactyl,	
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.aerodactyl, e.aerodactyl,	
				e.altaria, e.altaria, e.altaria, e.altaria, 
			],
		},
		75: {
			preview: [e.altaria, e.froslass, e.walrein],
			wave: [
				e.walrein, e.walrein, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, 
				null, null, null, null, null, null,
				null, null, null, null, null, null, null, null, null, 
				e.walrein, e.walrein, 
				null, null, null, null, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, e.froslass, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				
			],
		},
		76: {
			preview: [e.froslass, e.cryogonal],
			wave: [
				e.froslass, e.froslass, e.froslass, 
				null, null, null, null, null,
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, 
				null, null, null, null, null,
				e.froslass, e.froslass, e.froslass, 
			],
		},
		77: {
			preview: [e.glalie, e.cryogonal],
			wave: [
				e.glalie, e.glalie, e.glalie,
				null, null, null, null, null,
				e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, e.cryogonal, 
				null, null, null, null, null,
				e.glalie, e.glalie, e.glalie,
			],
		},
		78: {
			preview: [e.shellder, e.altaria, e.glalie],
			wave: [
				e.glalie, e.glalie, e.glalie, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,
				e.glalie, e.glalie, e.glalie,  
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder,  
				e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, e.shellder, 
				e.glalie, e.glalie, e.glalie, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
			],
		},
		79: {
			preview: [e.gastrodon, e.cryogonal, e.walrein],
			wave: [
				e.cryogonal, e.cryogonal, e.cryogonal, 
				e.walrein, e.walrein, e.walrein,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, 
				e.cryogonal, e.cryogonal, e.cryogonal, 
				e.walrein, e.walrein, e.walrein,
				e.cryogonal, e.cryogonal, e.cryogonal, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,  
			],
		},
		80: {
			preview: [e.gastrodon, e.cryogonal, e.lapras],
			wave: [
				e.lapras, e.gastrodon, e.gastrodon, e.lapras,
				e.cryogonal, e.cryogonal, e.cryogonal, 
				e.gastrodon, e.lapras, e.lapras, e.gastrodon, 
				e.cryogonal, e.cryogonal, e.cryogonal, 
				e.lapras, e.gastrodon, e.gastrodon, e.lapras, 
			],
		},
		81: {
			preview: [e.altaria, e.cloyster, e.glalie, e.walrein],
			wave: [
				e.glalie,
				e.cloyster, e.cloyster, e.cloyster, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.walrein, e.walrein, e.walrein, 
				null, null, null, null, null,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,  
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.glalie, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				null, null, null, null, null,
				e.glalie, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
			],
		},
		82: {
			preview: [e.altaria, e.cloyster, e.froslass, e.walrein],
			wave: [
				e.froslass,
				e.cloyster, e.cloyster, e.cloyster, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.walrein, e.walrein, e.walrein, 
				null, null, null, null, null,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,  
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.froslass, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				null, null, null, null, null,
				e.froslass, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
			],
		},
		83: {
			preview: [e.sealeo, e.walrein, e.aerodactyl],
			wave: [
				e.walrein, e.walrein,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, 
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, 
				e.aerodactyl,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, 
				e.walrein, e.walrein,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, 
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, 
				e.aerodactyl, 
			],
		},
		84: {
			preview: [e.altaria, e.cloyster, e.froslass],
			wave: [
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
				e.froslass, e.froslass, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.altaria, e.altaria, e.altaria, 
				e.froslass, e.froslass, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.cloyster, e.cloyster, 
				e.altaria, e.altaria, e.altaria, 
				e.froslass, e.froslass,e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
			],
		},
		85: {
			preview: [e.shellder, e.cloyster],
			wave: [
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,
				e.shellder, e.shellder, e.cloyster, e.cloyster, e.shellder, e.shellder, e.shellder, e.shellder, e.cloyster, e.cloyster, e.shellder, e.shellder, e.shellder, e.shellder,
				e.cloyster, e.cloyster, e.shellder, e.shellder, e.cloyster, e.cloyster, 
				e.shellder, e.shellder, e.cloyster, e.cloyster, e.shellder, e.shellder, e.shellder, e.shellder, e.cloyster, e.cloyster, e.shellder, e.shellder, e.shellder, e.shellder,
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,
			],
		},
		86: {
			preview: [e.sealeo, e.walrein],
			wave: [
				e.walrein, e.walrein, e.walrein,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.walrein, e.walrein, 
			],
		},
		87: {
			preview: [e.gastrodon, e.noctowl, e.sealeo, e.walrein],
			wave: [
				e.walrein, e.walrein, e.walrein,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, 
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, 
				e.walrein, e.walrein, e.walrein, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				null, null, null, null, null, null, null, null, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				null, null, null, null, null, null, null, null,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,
			],
		},
		88: {
			preview: [e.noctowl, e.seismitoad, e.slowbro, e.gastrodon],
			wave: [
				e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro,  
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl,
				e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, e.noctowl, 
			],
		},
		89: {
			preview: [e.lapras, e.seismitoad, e.slowbro, e.gastrodon],
			wave: [
				e.lapras, e.lapras, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,
				e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro, e.slowbro,  
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, 
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon,  e.gastrodon,  e.gastrodon,
				e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, e.gastrodon, 
			],
		},
		90: {
			preview: [e.altaria, e.lapras, e.glalie],
			wave: [
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.lapras, e.lapras, e.lapras, 
				e.glalie, e.glalie, e.glalie, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
			],
		},
		91: { 
			preview: [e.altaria, e.glalie, e.froslass],
			wave: [
				e.glalie, e.glalie, e.glalie,  
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.froslass, e.froslass, e.froslass,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.glalie, e.glalie, e.glalie, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.glalie, e.glalie, e.glalie,  
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.froslass, e.froslass, e.froslass,
				
			] 
		},
		92: { 
			preview: [e.altaria, e.glalie, e.lapras],
			wave: [
				e.lapras, e.lapras, e.lapras,
				e.glalie, e.glalie, e.glalie, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,  
				e.glalie, e.glalie, e.glalie, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
			] 
		},
		93: { 
			preview: [e.vanilluxe, e.lapras],
			wave: [
				e.lapras, e.lapras, e.lapras, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.lapras, e.lapras, e.lapras,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.lapras, e.lapras, e.lapras, 
				
			] 
		},
		94: { 
			preview: [e.altaria, e.cloyster],
			wave: [
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
				e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster, e.cloyster,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, 
			] 
		},
		95: {
			preview: [e.palpitoad, e.seismitoad, e.altaria, e.vanilluxe, e.aerodactyl],
			wave: [
				e.aerodactyl, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.seismitoad, e.seismitoad, e.seismitoad,
				e.aerodactyl,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.aerodactyl,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.seismitoad, e.seismitoad, e.seismitoad,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.aerodactyl, 
			],
		},
		96: {
			preview: [e.sealeo,  e.seismitoad, e.altaria, e.walrein],
			wave: [
				e.walrein,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.walrein,
				e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad, e.seismitoad,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
			],
		},
		97: {
			preview: [e.palpitoad, e.sealeo, e.cryogonal, e.lapras],
			wave: [
				e.lapras, e.lapras,
				e.cryogonal, e.cryogonal, 
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
				e.cryogonal, e.cryogonal, 
				e.lapras, e.lapras,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.palpitoad, e.palpitoad, e.palpitoad, e.palpitoad,
			],
		},
		98: { 
			preview: [e.vanilluxe, e.cryogonal, e.lapras],
			wave: [
				e.lapras, e.lapras, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.cryogonal, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.cryogonal, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.lapras, e.lapras, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, 
				e.cryogonal, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,  
				e.cryogonal, 
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,
				e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe, e.vanilluxe,  
				e.lapras, e.lapras,
				
			] 
		},
		99: {
			preview: [e.altaria,  e.sealeo, e.walrein],
			wave: [
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.walrein, e.walrein, e.walrein,
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.walrein, e.walrein, e.walrein, 
				e.altaria, e.altaria, e.altaria, e.altaria, e.altaria, e.altaria,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo, e.sealeo,
				e.walrein, e.walrein, 
			],
		},
		100: {
			preview: [e.articuno],
			wave: [
				e.articuno
			],
		},
	}
}