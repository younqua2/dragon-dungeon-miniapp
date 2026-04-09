const songs = {
	0: {
		name: ['Route 1-1', 'Ruta 1-1', 'Route 1-1', 'Rota 1-1', 'Zona 1-1', 'Route 1-1', 'ルート1-1', '루트 1-1', '路線 1-1', 'Droga 1-1'],
		song: 'route1',
		order: 0
	},
	1: {
		name: ['Route 1-2', 'Ruta 1-2', 'Route 1-2', 'Rota 1-2', 'Zona 1-2', 'Route 1-2', 'ルート1-2', '루트 1-2', '路線 1-2', 'Droga 1-2'],
		song: 'route2',
		order: 1
	},
	2: {
		name: ['Route 1-3', 'Ruta 1-3', 'Route 1-3', 'Rota 1-3', 'Zona 1-3', 'Route 1-3', 'ルート1-3', '루트 1-3', '路線 1-3', 'Droga 1-3'],
		song: 'route3',
		order: 2
	},
	9: {
		name: ['Route 1-4', 'Ruta 1-4', 'Route 1-4', 'Rota 1-4', 'Zona 1-4', 'Route 1-4', 'ルート1-4', '루트 1-4', '路線 1-4', 'Droga 1-4'],
		song: 'route10',
		order: 3
	},
	3: {
		name: ['Route 2-1', 'Ruta 2-1', 'Route 2-1', 'Rota 2-1', 'Zona 2-1', 'Route 2-1', 'ルート2-1', '루트 2-1', '路線 2-1', 'Droga 2-1'],
		song: 'route4',
		order: 4
	},
	4: {
		name: ['Route 2-2', 'Ruta 2-2', 'Route 2-2', 'Rota 2-2', 'Zona 2-2', 'Route 2-2', 'ルート2-2', '루트 2-2', '路線 2-2', 'Droga 2-2'],
		song: 'route5',
		order: 5
	},
	5: {
		name: ['Route 2-3', 'Ruta 2-3', 'Route 2-3', 'Rota 2-3', 'Zona 2-3', 'Route 2-3', 'ルート2-3', '루트 2-3', '路線 2-3', 'Droga 2-3'],
		song: 'route6',
		order: 6
	},
	10: {
		name: ['Route 2-4', 'Ruta 2-4', 'Route 2-4', 'Rota 2-4', 'Zona 2-4', 'Route 2-4', 'ルート2-4', '루트 2-4', '路線 2-4', 'Droga 2-4'],
		song: 'route11',
		order: 7
	},
	6: {
		name: ['Route 3-1', 'Ruta 3-1', 'Route 3-1', 'Rota 3-1', 'Zona 3-1', 'Route 3-1', 'ルート3-1', '루트 3-1', '路線 3-1', 'Droga 3-1'],
		song: 'route7',
		order: 8
	},
	7: {
		name: ['Route 3-2', 'Ruta 3-2', 'Route 3-2', 'Rota 3-2', 'Zona 3-2', 'Route 3-2', 'ルート3-2', '루트 3-2', '路線 3-2', 'Droga 3-2'],
		song: 'route8',
		order: 9
	},
	8: {
		name: ['Route 3-3', 'Ruta 3-3', 'Route 3-3', 'Rota 3-3', 'Zona 3-3', 'Route 3-3', 'ルート3-3', '루트 3-3', '路線 3-3', 'Droga 3-3'],
		song: 'route9',
		order: 10
	},
	11: {
		name: ['Route 3-4', 'Ruta 3-4', 'Route 3-4', 'Rota 3-4', 'Zona 3-4', 'Route 3-4', 'ルート3-4', '루트 3-4', '路線 3-4', 'Droga 3-4'],
		song: 'route12',
		order: 11
	},
}

export const songData = Object.keys(songs)
  	.map(key => ({
	    song: songs[key].song,
	    name: songs[key].name,
	    id: songs[key].order
	}))
	.sort((a, b) => a.id - b.id);