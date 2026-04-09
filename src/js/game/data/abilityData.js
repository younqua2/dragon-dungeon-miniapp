export const abilityData = {
	ambusher: {
		id: 'ambusher',
		name: ['Ambusher', 'Acechador', 'Guetteur', 'Emboscador', 'Agguato', 'Lauerer', '待ち伏せ者', '매복꾼', '伏擊者', "Zamachowiec"],
		description: [
		  	`It doubles its power if it is in tall grass.`,
		  	`Duplica su poder si se encuentra en hierba alta.`,
		  	`Double sa puissance s'il est dans les hautes herbes.`,
		  	`Duplica seu poder se estiver na grama alta.`,
		  	`Raddoppia la sua potenza se si trova nell'erba alta.`,
		  	`Es verdoppelt seine Kraft, wenn es im hohen Gras steht.`,
		  	`高い草むらにいるとき、パワーが2倍になる。`,
		  	`풀숲에 있을 때 공격력이 2배가 된다.`,
		  	`在高草中时，威力翻倍。`,
			'Podwaja swoją moc, jeśli użytkownik znajduje się w trawie.'
		]
	},
	swimmer: {
		id: 'swimmer',
		name: ['Swift Swim', 'Nado Rápido', 'Nage Rapide', 'Nado Rápido', 'Nuoto Veloce', 'Wassertempo', 'すいすい', '쾌속 수영', '悠游自如', "Pływak"],
		description: [
		    "Halves recharge time when in water.",
		    "Reduce a la mitad el tiempo de recarga si se encuentra en el agua.",
		    "Réduit de moitié le temps de récupération lorsqu'il est dans l'eau.",
		    "Reduz pela metade o tempo de recarga quando estiver na água.",
		    "Riduce della metà il tempo di ricarica quando si trova nell'acqua.",
		    "Verringert die Wiederaufladezeit um die Hälfte, wenn es sich im Wasser befindet.",
		    "水中にいると再充電時間が半分になります。",
		    "물 속에 있으면 재충전 시간이 절반으로 감소합니다.",
		    "在水中时充能时间减半。",
			"Skraca czas odnowienia o połowę, gdy znajduje się w wodzie."
		]
	},
	vigilant: {
		id: 'vigilant',
		name: ['Vigilant', 'Vigilante', 'Vigilant', 'Vigilante', 'Vigile', 'Wachsamkeit', 'ヴィジラント', '경계병', `警戒者`, "Czujny"],
		description: [
		  	`It doubles its range if it is in the mountains.`,
		  	`Duplica su rango si se encuentra en la montaña.`,
		  	`Double sa portée s'il est en montagne.`,
		  	`Duplica seu alcance se estiver na montanha.`,
		  	`Raddoppia la sua portata se si trova in montagna.`,
		  	`Seine Reichweite verdoppelt sich, wenn es in den Bergen ist.`,
			`山にいると射程が2倍になる。`,
			`산에 있으면 사거리가 2배가 된다.`,
			`在山地时，射程翻倍。`,
			`Podwaja swój zasięg, jeśli znajduje się w górach.`,
		]
	},
	vigilantFrisk: {
		id: 'vigilantFrisk',
		name: [
			'Vigilant-Frisk', 
			'Cacheo-Vigilante', 
			'Fouille-Vigilant', 
			'Revistar-Vigilante', 
			'Perquisizione-Wachsamkeit', 
			'Filzen-Wachsamkeit', 
			'ヴィジラント-フリスク', 
			'경계병-수색', 
			'察觉-警戒者', 
			'Rewizja-Czujny'
		],
		description: [
			'It doubles its range if it is in the mountains. Can hit invisible enemies.',
			'Duplica su rango si se encuentra en la montaña. Puede golpear a enemigos invisibles.',
			`Double sa portée s'il est en montagne. Peut toucher les ennemis invisibles.`,
			'Duplica seu alcance se estiver na montanha. Pode atingir inimigos invisíveis.',
			'Raddoppia la sua portata se si trova in montagna. Può colpire nemici invisibili.',
			'Seine Reichweite verdoppelt sich, wenn es in den Bergen ist. Kann unsichtbare Gegner treffen.',
			'山にいると射程が2倍になる。 透明な敵にも攻撃できる。',
			'산에 있으면 사거리가 2배가 된다. 투명한 적도 공격할 수 있음.',
			'在山地时，射程翻倍。 可以攻击隐形的敌人。',
			'Podwaja swój zasięg, jeśli znajduje się w górach. Może trafiać niewidzialnych wrogów.',
		]
	},
	burn: {
		id: 'burn',
		name: ['Burn', 'Quemadura', 'Brulure', 'Queimadura', 'Bruciatura', 'Verbrennung', 'やけど', '화상', '灼伤', 'Oparzenie'],
		description: [
		  	`The attacks burn the target for 10 seconds, causing them to lose 0.5% of their life per second.`,
		  	`Los ataques queman al objetivo durante 10 segundos, perdiendo 0.5% de vida por segundo.`,
		  	`Les attaques brulent la cible pendant 10 secondes, faisant perdre 0,5% de sa vie par seconde.`,
		  	`Os ataques queimam o alvo por 10 segundos, causando perda de 0.5% de vida por segundo.`,
		  	`Gli attacchi bruciano il bersaglio per 10 secondi, facendogli perdere l'0.5% di vita al secondo.`,
		  	`Angriffe verbrennen das Ziel 10 Sekunden lang und es 0.5% Leben pro Sekunde verliert.`,
		  	`攻撃は対象を10秒間やけど状態にし、毎秒HPを0.5%失わせる。`,
		  	`공격은 대상에게 10초 동안 화상을 입혀 매초 체력 0.5%를 잃게 한다.`,
		  	`攻击会使目标进入灼烧状态，持续10秒，每秒损失其生命值的0.5%。`,
			`Ataki podpalają cel na 10 s, powodując utratę 0,5% HP na sekundę.`,
		]
	},
	burnNerf: {
		id: 'burnNerf',
		name: ['Burn', 'Quemadura', 'Brulure', 'Queimadura', 'Bruciatura', 'Verbrennung', 'やけど', '화상', '灼伤', 'Oparzenie'],
		description: [
			'Attacks have a 50% chance to burn the target for 10 seconds, causing it to lose 0.5% HP per second.',
			'Los ataques tienen un 50% de quemar al objetivo durante 10 segundos, perdiendo 0.5% de vida por segundo.',
			'Les attaques ont 50 % de chances de bruler la cible pendant 10 secondes, faisant perdre 0,5 % de vie par seconde.',
			'Os ataques têm 50% de chance de queimar o alvo por 10 segundos, fazendo-o perder 0,5% de vida por segundo.',
			'Gli attacchi hanno il 50% di probabilità di bruciare il bersaglio per 10 secondi, facendogli perdere lo 0,5% di vita al secondo.',
			'Angriffe haben eine 50% Chance, das Ziel für 10 Sekunden zu verbrennen, wobei es 0.5% Leben pro Sekunde verliert.',
			'攻撃は50%の確率で対象を10秒間やけど状態にし、毎秒体力の0.5%を失わせる。',
			'공격은 50% 확률로 대상에게 10초 동안 화상을 입히며, 매초 체력의 0.5%를 잃게 한다.',
			`攻击有 50% 的概率使目标进入灼伤状态，持续 10 秒，每秒损失 0.5% 的生命值。`,
			`Ataki mają 50% szansy by podpalić cel na 10 s, powodując utratę 0,5% HP na sekundę.`,
		]
	},
	poison: {
		id: 'poison',
		name: ['Poison', 'Veneno', 'Poison', 'Veneno', 'Veleno', 'Gift', 'どく', '독', '中毒', "Trucizna"],
		description: [
			`The attacks apply 1 stack of poison.
			The target loses 0.1% of life per second for each charge.`,
			`Los ataques aplican 1 carga de veneno.
			El objetivo pierde 0.1% de vida por segundo por cada carga.`,
			`Les attaques infligent 1 charge de poison.
			La cible perd 0,1 % de sa vie par seconde pour chaque charge.`,
			`Os ataques aplicam 1 carga de veneno.
			O alvo perde 0,1% de vida por segundo por cada carga.`,
			`Gli attacchi applicano 1 carica di veleno.
			Il bersaglio perde lo 0,1% di vita al secondo per ogni carica.`,
			`Angriffe fügen 1 Giftstapel zu.
			Das Ziel verliert 0,1 % Leben pro Sekunde für jeden Stapel.`,
			`攻撃は1つのどくチャージを与える。
			対象はチャージごとに毎秒HPの0.1%を失う。`,
			`공격은 독 1스택을 적용한다.
			대상은 스택당 매초 체력 0.1%를 잃는다.`,
			`攻击会施加 1 层中毒。
			目标每层中毒每秒损失 0.1% 的生命值。`,
			`Ataki nakładają 1 warstwę trucizny.
			Cel traci 0,1% życia na sekundę za każdą warstwę.`
		]
	},
	frisk: {
		id: 'frisk',
		name: ['Frisk', 'Cacheo', 'Fouille', 'Revistar', 'Perquisizione', 'Filzen', 'フリスク', '수색', '察觉', 'Rewizja'],
		description: [
			'Can hit invisible enemies.',
			'Puede golpear a enemigos invisibles.',
			'Peut toucher les ennemis invisibles.',
			'Pode atingir inimigos invisíveis.',
			'Può colpire nemici invisibili.',
			'Kann unsichtbare Gegner treffen.',
			'透明な敵にも攻撃できる。',
			'투명한 적도 공격할 수 있음.',
			'可以攻击隐形的敌人。',
			'Może trafiać niewidzialnych wrogów.',
		]
	},
	slow: {
		id: 'slow',
		name: ['Slow', 'Ralentizar', 'Lenteur', 'Retardar', 'Rallentare', 'Verlangsamen', 'スロウ', '느리게 하기', '减速', 'Spowolnienie'],
		description: [
			`The attacks slow the target for 2 seconds.`,
			`Los ataques ralentizan al objetivo durante 2 segundos.`,
			`Les attaques ralentissent la cible pendant 2 secondes.`,
			`Os ataques desaceleram o alvo por 2 segundos.`,
			`Gli attacchi rallentano il bersaglio per 2 secondi.`,
			`Angriffe verlangsamen das Ziel für 2 Sekunden.`,
			`攻撃は対象の動きを2秒間遅くする。`,
			`공격은 대상의 속도를 2초 동안 늦춘다.`,
			`攻击会使目标减速2秒。`,
			`Ataki spowalniają cel na 2 sekundy.`,
		]
	},
	stunMono: {
		id: 'stunMono',
		name: ['Stun', 'Aturdir', 'Étourdissement', 'Atordoar', 'Stordire', 'Betäuben', 'スタン', '기절', '眩暈', 'Ogłuszenie'],
		description: [
		    "Attacks have a 30% chance to stun the target for 2 seconds.",
		    "Los ataques tienen un 30% de aturdir al objetivo durante 2 segundos.",
		    "Les attaques ont 30 % de chances d'étourdir la cible pendant 2 secondes.",
		    "Os ataques têm 30% de chance de atordoar o alvo por 2 segundos.",
		    "Gli attacchi hanno il 30% di possibilità di stordire il bersaglio per 2 secondi.",
		    "Angriffe haben eine 30% Chance, das Ziel 2 Sekunden lang zu betäuben.",
		    "攻撃はターゲットを2秒間30％の確率でひるませます。",
		    "공격은 대상에게 2초 동안 30% 확률로 기절을 부여합니다.",
		    "攻击有30%的几率使目标眩晕2秒。",
			"Ataki mają 30% szansy ogłuszyć cel na 2 sekundy.",
		]
	},
	stunMonoNerf: {
		id: 'stunMonoNerf',
		name: ['Stun', 'Aturdir', 'Étourdissement', 'Atordoar', 'Stordire', 'Betäuben', 'スタン', '기절', '眩暈', 'Ogłuszenie'],
		description: [
		    "Attacks have a 5% chance to stun the target for 1.5 seconds.",
		    "Los ataques tienen un 5% de aturdir al objetivo durante 1.5 segundos.",
		    "Les attaques ont 5 % de chances d'étourdir la cible pendant 1,5 seconde.",
		    "Os ataques têm 5% de chance de atordoar o alvo por 1,5 segundos.",
		    "Gli attacchi hanno il 5% di possibilità di stordire il bersaglio per 1,5 secondi.",
		    "Angriffe haben eine 5% Chance, das Ziel 1,5 Sekunden lang zu betäuben.",
		    "攻撃はターゲットを1.5秒間5％の確率でひるませます。",
		    "공격은 대상에게 1.5초 동안 5% 확률로 기절을 부여합니다.",
		    "攻击有5%的几率使目标眩晕1.5秒。",
			"Ataki mają 5% szansy ogłuszyć cel na 1.5 sekundy.",
		]
	},
	stunArea: {
		id: 'stunArea',
		name: ['Stun', 'Aturdir', 'Étourdissement', 'Atordoar', 'Stordire', 'Betäuben', 'スタン', '기절', '眩暈', 'Ogłuszenie'],
		description: [
		 	 "Attacks have a 30% chance to stun the target for 1.5 seconds.",
		    "Los ataques tienen un 30% de aturdir al objetivo durante 1.5 segundos.",
		    "Les attaques ont 30 % de chances d'étourdir la cible pendant 1,5 secondes.",
		    "Os ataques têm 30% de chance de atordoar o alvo por 1.5 segundos.",
		    "Gli attacchi hanno il 30% di possibilità di stordire il bersaglio per 1.5 secondi.",
		    "Angriffe haben eine 30% Chance, das Ziel 1.5 Sekunden lang zu betäuben.",
		    "攻撃はターゲットを1.5秒間30％の確率でひるませます。",
		    "공격은 대상에게 1.5초 동안 30% 확률로 기절을 부여합니다.",
		    "攻击有30%的几率使目标眩晕1.5秒。",
			"Ataki mają 30% szansy ogłuszyć cel na 1.5 sekundy.",
		]
	},	
	armorBreak: {
		id: 'armorBreak',
		name: [
		  	'Armor Break',
		  	'Rompearmadura',
		  	'Brise-Armure',
		  	'Quebra-Armadura',
		  	'Rompicolpo',
		  	'Rüstungsbrecher',
		  	'アーマーブレイク',
		  	'아머 브레이크',
		  	'破甲',
			'Przebicie Pancerza'
		],
		description: [
		  	`Causes double damage to armor.`,
		  	`Causa el doble de daño a la armadura.`,
		  	`Inflige le double de dégâts à l’armure.`,
		  	`Causa o dobro de dano à armadura.`,
		  	`Infligge il doppio del danno all’armatura.`,
		  	`Verursacht doppelten Schaden an Rüstung.`,
		  	`アーマーに対して2倍のダメージを与える。`,
		  	`방어구에 두 배의 피해를 준다.`,
		  	`对护甲造成双倍伤害。`,
			`Zadaje podwójne obrażenia pancerzowi.`
		]
	},
	ninja: {
		id: 'ninja',
		name: ['Ninja', 'Ninja', 'Ninja', 'Ninja', 'Ninja', 'Ninja', '忍者', '닌자', '忍者', 'Ninja'],
		description: [
			`The attacks ricochet between enemies with reduced damage.`,
			`Los ataques rebotan entre los enemigos con daño reducido.`,
			`Les attaques ricochent entre les ennemis avec des dégâts réduits.`,
			`Os ataques ricocheteiam entre os inimigos com dano reduzido.`,
			`Gli attacchi rimbalzano tra i nemici con danni ridotti.`,
			`Angriffe prallen zwischen Gegnern mit reduziertem Schaden ab.`,
			`攻撃はダメージを減らして敵の間で跳ね返る。`,
			`공격은 적 사이에서 반사되어 피해가 감소한다.`,
			`攻击会在敌人之间反弹，并造成降低的伤害。`,
			`Ataki rykoszetują między wrogami, zadając zmniejszone obrażenia.`,
		]	
	},
	heal: {
		id: 'heal',
		name: ['Heal', 'Curación', 'Soin', 'Cura', 'Cura', 'Heilen', 'ヒール', '회복', '治疗', 'Leczenie'],
		description: [
			`Attacks have a 5% chance to restore 1 heart. Halves the chance with each use (3 uses per wave).`,
		    `Los ataques tienen un 5% de probabilidad de recuperar 1 corazón. Reduce su probabilidad a la mitad con cada uso (3 usos por oleada).`,
		    `Les attaques ont 5 % de chances de restaurer 1 cœur. Réduit les chances de moitié à chaque utilisation (3 utilisations par vague).`,
		    `Os ataques têm 5% de chance de restaurar 1 coração. Reduz a chance pela metade a cada uso (3 usos por onda).`,
		    `Gli attacchi hanno il 5% di probabilità di ripristinare 1 cuore. Dimezza la probabilità a ogni utilizzo (3 utilizzi per ondata).`,
		    `Angriffe haben eine Chance von 5 %, 1 Herz wiederherzustellen. Halbiert die Chance bei jeder Nutzung (3 Nutzungen pro Welle).`,
		    `攻撃は5%の確率でハートを1つ回復する。使用するたびに確率が半分になる（ウェーブごとに3回まで）。`,
		    `공격 시 5% 확률로 하트 1개를 회복합니다. 사용할 때마다 확률이 절반으로 감소합니다 (웨이브당 3회 사용).`,
		    `攻击有5%的概率恢复1个心。每次使用都会使概率减半（每波次限用3次）。`,
		    `Ataki mają 5% szansy na przywrócenie 1 serca. Zmniejsza szansę o połowę przy każdym użyciu (3 użycia na falę).`,
		]
	},
	greed: {
		id: 'greed',
		name: ['Greed', 'Codicia', 'Avidité', 'Ganância', 'Avidità', 'Gier', 'グリード', '탐욕', '貪婪', 'Chciwość'],
		description: [
			`Attacks grant $ equal to 10% of the target’s gold.`,
			`Los ataques otorgan $ equivalente al 10% del oro del objetivo.`,
			`Les attaques accordent $ égal à 10 % de l’or de la cible.`,
			`Ataques concedem $ equivalente a 10% do ouro do alvo.`,
			`Gli attacchi concedono $ pari al 10% dell’oro del bersaglio.`,
			`Angriffe gewähren $ in Höhe von 10% des Goldes des Ziels.`,
			`攻撃は、対象のゴールドの10％に相当する$を付与する。`,
			`공격은 대상의 골드의 10%에 해당하는 $를 제공합니다.`,
			`攻擊會獲得相當於目標金幣 10% 的 $。`,
			`Ataki przyznają $ równe 10% złota celu.`,
		]
	},
	focus: {
		id: 'focus',
		name: ['Focus', 'Focus', 'Concentration', 'Foco', 'Concentrazione', 'Fokus', 'フォーカス', '집중', '专注', 'Skupienie'],
		description: [
		  	"Each consecutive attack against the same target increases the damage dealt by 7.5%.",
		  	"Cada ataque a un mismo objetivo aumenta el daño ocasionado en un 7.5%.",
		  	"Chaque attaque contre une même cible augmente les dégâts infligés de 7,5 %.",
		  	"Cada ataque contra o mesmo alvo aumenta o dano causado em 7,5%.",
		  	"Ogni attacco contro lo stesso bersaglio aumenta i danni inflitti del 7,5%.",
		  	"Jeder Angriff gegen dasselbe Ziel erhöht den verursachten Schaden um 7,5%.",
		  	"同じ対象への攻撃ごとに、与えるダメージが7.5％増加します。",
		  	"같은 대상에게 공격할 때마다 가하는 피해가 7.5% 증가합니다.",
		  	"对同一目标的每次攻击都会使造成的伤害提高7.5%。",
			"Każdy kolejny atak w ten sam cel zwiększa zadawane obrażenia o 7,5%.",
		]
	},
	curse: {
		id: 'curse',
		name: ['Curse', 'Maldición', 'Malédiction', 'Maldição', 'Maledizione', 'Fluch', 'カース', '저주', '诅咒', 'Klątwa'],
		description: [
			'Curse an enemy and deal damage to all cursed enemies.',
			'Maldice a un enemigo y causa daño a todos los enemigos malditos.',
			'Maudit un ennemi et inflige des dégâts à tous les ennemis maudits.',
			'Amaldiçoa um inimigo e causa dano a todos os inimigos amaldiçoados.',
			'Maledici un nemico e infliggi danno a tutti i nemici maledetti.',
			'Verflucht einen Gegner und fügt allen verfluchten Gegnern Schaden zu.',
			'敵を呪い、呪われた全ての敵にダメージを与える。',
			'적을 저주하고 저주받은 모든 적에게 피해를 준다.',
			'诅咒一个敌人，并对所有被诅咒的敌人造成伤害。',
			'Rzuć klątwę na wroga i zadaj obrażenia wszystkim przeklętym wrogom.',
		]
	},
	doubleShot: {
		id: 'doubleShot',
		name: ['Double Shot', 'Disparo Doble', 'Tir Double', 'Tiro Duplo', 'Doppio Colpo', 'Doppelschuss', 'ダブルショット', '더블 샷', '双重射击', 'Podwójny Strzał'],
		description: [
			`Fires projectiles at up to 2 enemies at once.`,
			`Dispara proyectiles hasta a 2 enemigos a la vez.`,
			`Tire des projectiles jusque sur 2 ennemis à la fois.`,
			`Dispara projéteis em até 2 inimigos ao mesmo tempo.`,
			`Spara proiettili fino a 2 nemici contemporaneamente.`,
			`Feuert Projektile auf bis zu 2 Gegner gleichzeitig ab.`,
			`一度に最大2体の敵に弾を発射する。`,
			`한 번에 최대 2명의 적에게 투사체를 발사한다.`,
			`同时向最多 2 个敌人发射投射物。`,
			`Strzela pociskami do maksymalnie 2 wrogów naraz.`,
		]
	},
	tripleShot: {
		id: 'tripleShot',
		name: ['Triple Shot', 'Disparo Triple', 'Tir Triple', 'Tiro Triplo', 'Triplo Colpo', 'Dreifachschuss', 'トリプルショット', '트리플 샷', '三重射击', 'Potrójny Strzał'],
		description: [
			'Fires projectiles at up to 3 enemies at once.',
			'Dispara proyectiles hasta a 3 enemigos a la vez.',
			'Tire des projectiles jusque sur 3 ennemis à la fois.',
			'Dispara projéteis em até 3 inimigos ao mesmo tempo.',
			'Spara proiettili fino a 3 nemici contemporaneamente.',
			'Feuert Projektile auf bis zu 3 Gegner gleichzeitig ab.',
			'一度に最大3体の敵に弾を発射する。',
			'한 번에 최대 3명의 적에게 투사체를 발사한다.',
			'同时向最多 3 个敌人发射投射物。',
			'Strzela pociskami do maksymalnie 3 wrogów naraz.',
		]
	},
	quadraShot: {
		id: 'quadraShot',
		name: ['Quadra Shot', 'Disparo Cuádruple', 'Tir Quadruple', 'Tiro Quádruplo', 'Quadruplo Colpo', 'Vierfachschuss', 'クアドラショット', '쿼드라 샷', '四重射击', 'Poczwórny Strzał'],
		description: [
			'Fires projectiles at up to 4 enemies at once.',
			'Dispara proyectiles hasta a 4 enemigos a la vez.',
			'Tire des projectiles jusque sur 4 ennemis à la fois.',
			'Dispara projéteis em até 4 inimigos ao mesmo tempo.',
			'Spara proiettili fino a 4 nemici contemporaneamente.',
			'Feuert Projektile auf bis zu 4 Gegner gleichzeitig ab.',
			'一度に最大4体の敵に弾を発射する。',
			'한 번에 최대 4명의 적에게 투사체를 발사한다.',
			'同时向最多 4 个敌人发射投射物。',
			'Strzela pociskami do maksymalnie 4 wrogów naraz.',
		]
	},
	splash: {
		id: 'splash',
		name: ['Splash', 'Splash', 'Éclaboussure', 'Splash', 'Splash', 'Platscher', 'スプラッシュ', '스플래시', '溅射', 'Plusk'],
		description: [
			`The projectiles explode in an area, causing half damage to nearby enemies.`,
			`Los projectiles explotan en área, causando la mitad de daño a enemigos cercanos.`,
			`Les projectiles explosent dans une zone, infligeant la moitié des dégâts aux ennemis proches.`,
			`Os projéteis explodem em uma área, causando metade do dano aos inimigos próximos.`,
			`I proiettili esplodono in un’area, causando metà danno ai nemici vicini.`,
			`Projektile explodieren in einem Gebiet und verursachen halben Schaden an nahegelegenen Gegnern.`,
			`弾は範囲内で爆発し、近くの敵に半分のダメージを与える。`,
			`투사체가 범위 내에서 폭발하여 주변 적에게 절반 피해를 준다.`,
			`投射物在范围内爆炸，对附近敌人造成一半伤害。`,
			`Pociski wybuchają na obszarze, zadając połowę obrażeń pobliskim wrogom.`,
		]

	},
	superCritical: {
		id: 'superCritical',
		name: ['Super Critical', 'Super Crítico', 'Super Critique', 'Super Crítico', 'Super Critico', 'Superkritisch', 'スーパークリティカル', '슈퍼 크리티컬', '超级暴击', 'Super Krytyk'],
		description: [
			`Criticals do twice the damage.`,
			`Los críticos hacen el doble de daño.`,
			`Les coups critiques infligent le double de dégâts.`,
			`Os críticos causam o dobro do dano.`,
			`I colpi critici infliggono il doppio del danno.`,
			`Kritische Treffer verursachen doppelten Schaden.`,
			`クリティカルヒットは2倍のダメージを与える。`,
			`크리티컬 공격은 두 배의 피해를 준다.`,
			`暴击造成双倍伤害。`,
			`Trafienia krytyczne zadają podwójne obrażenia.`
		]
	},
	powerAura: {
		id: 'powerAura',
		name: ['Power Aura', 'Aura de Poder', 'Aura de Puissance', 'Aura de Poder', 'Aura di Potere', 'Kraft-Aura', 'パワーオーラ', '파워 오라', '力量光环', 'Aura Mocy'],
		description: [
			`Increases damage dealt by Pokémon within range by 20%.`,
			`Aumenta el daño de los Pokémon dentro de rango un 20%.`,
			`Augmente de 20 % les dégâts infligés par les Pokémon à portée.`,
			`Aumenta o dano causado pelos Pokémon dentro do alcance em 20%.`,
			`Aumenta del 20% i danni inflitti dai Pokémon nel raggio d’azione.`,
			`Erhöht den von Pokémon im Wirkungsbereich verursachten Schaden um 20%.`,
			`範囲内のポケモンの与えるダメージが20％増加する。`,
			`범위 내 포켓몬의 피해량이 20% 증가한다.`,
			`使范围内的宝可梦造成的伤害提高20%。`,
			`Zwiększa obrażenia Pokémonów w zasięgu o 20%.`,
		]
	},
	criticalDamageAura: {
		id: 'criticalDamageAura',
		name: [
			'Critical Aura',
			'Aura de Crítico',
			'Aura Critique',
			'Aura Crítica',
			'Aura Critica',
			'Kritische Aura',
			'クリティカルオーラ',
			'크리티컬 오라',
			'暴击光环',
			'Aura Krytyczna'
		],
		description: [
			`Increases the critical damage of Pokémon within range by 50%.`,
			`Aumenta el daño crítico de los Pokémon dentro de rango un 50%.`,
			'Augmente de 50 % les dégâts critiques des Pokémon à portée.',
			'Aumenta em 50% o dano crítico dos Pokémon dentro do alcance.',
			'Aumenta del 50% i danni critici dei Pokémon nel raggio.',
			'Erhöht den kritischen Schaden von Pokémon im Wirkungsbereich um 50%.',
			'範囲内のポケモンの急所ダメージが50%上昇する。',
			'범위 내 포켓몬의 치명타 피해가 50% 증가합니다.',
			'使范围内的宝可梦暴击伤害提高50%。',
			'Zwiększa obrażenia krytyczne Pokémonów w zasięgu o 50%.',
		]
	},
	criticalAura: {
		id: 'criticalAura',
		name: [
			'Critical Aura',
			'Aura de Crítico',
			'Aura Critique',
			'Aura Crítica',
			'Aura Critica',
			'Kritische Aura',
			'クリティカルオーラ',
			'크리티컬 오라',
			'暴击光环',
			'Aura Krytyczna'
		],
		description: [
			"Increases the critical chance of Pokémon within range by 10%.",
			"Aumenta la probabilidad de golpe crítico de los Pokémon dentro del alcance en un 10%.",
			"Augmente de 10 % la probabilité de coup critique des Pokémon dans la zone.",
			"Aumenta a chance de acerto crítico dos Pokémon dentro do alcance em 10%.",
			"Aumenta la probabilità di colpo critico dei Pokémon nell’area del 10%.",
			"Erhöht die kritische Trefferchance von Pokémon im Wirkungsbereich um 10%.",
			"範囲内のポケモンの会心率が10％上がる。",
			"사정거리 내 포켓몬의 크리티컬 확률이 10% 증가합니다.",
			"范围内宝可梦的暴击率提高10%。",
			"Zwiększa szansę na trafienie krytyczne Pokémonów w zasięgu o 10%."
		]
	},
	// NEW
	curseDoubleShot: {
		id: 'curseDoubleShot',
		name: ['Curse DoubleShot', 'Disparo Doble Maldito', 'Double Tir Maudit', 'Disparo Duplo Amaldiçoado', 'Doppio Colpo Maledetto', 'Fluch-Doppelschuss', 'カースダブルショット', '커스 더블샷', '詛咒雙重射擊', 'Podwójny strzał klątwy'],
		description: [
		  	'Shoots projectiles at up to 2 enemies at once and curses them. Deals damage to all cursed enemies.',
		  	'Dispara proyectiles hasta a 2 enemigos a la vez y los maldice. Causa daño a todos los enemigos malditos.',
		  	'Tire des projectiles jusque sur 2 ennemis à la fois et les maudit. Inflige des dégâts à tous les ennemis maudits.',
		  	'Dispara projéteis em até 2 inimigos ao mesmo tempo e os amaldiçoa. Causa dano a todos os inimigos amaldiçoados.',
		  	'Spara proiettili fino a 2 nemici alla volta e li maledice. Infligge danni a tutti i nemici maledetti.',
		  	'Schießt Projektile auf bis zu 2 Gegner gleichzeitig und verflucht sie. Verursacht Schaden an allen verfluchten Gegnern.',
		  	'最大2体の敵に同時に弾を放ち、呪いをかける。呪われた敵全員にダメージを与える。',
		  	'최대 2명의 적에게 투사체를 발사해 저주를 걸며, 저주받은 모든 적에게 피해를 준다.',
		  	'同時向最多2個敵人發射投射物並施加詛咒，對所有被詛咒的敵人造成傷害。',
			'Strzela pociskami do maksymalnie 2 wrogów naraz i rzuca na nich klątwę. Zadaje obrażenia wszystkim przeklętym wrogom.',
		]
	},
	poisonDoubleShot: {
		id: 'poisonDoubleShot',
		name: ['Poison DoubleShot', 'Doble Veneno', 'Double Poison', 'Duplo Veneno', 'Doppio Veleno', 'Gift-Doppelschuss', 'どくダブルショット', '독 더블샷', '毒雙重射擊', 'Podwójny strzał trucizny'],
		description: [
			`Shoots projectiles at up to 2 enemies at once and applies 1 stack of poison. The target loses 0.1% health per second per stack.`,
			`Dispara proyectiles hasta a 2 enemigos a la vez y aplica 1 carga de veneno. El objetivo pierde 0.1% de vida por segundo por cada carga.`,
			`Tire des projectiles sur jusque sur 2 ennemis à la fois et applique 1 de poison. La cible perd 0,1 % de sa vie par seconde par accumulation.`,
			`Dispara projéteis em até 2 inimigos ao mesmo tempo e aplica 1 carga de veneno. O alvo perde 0,1% de vida por segundo por carga.`,
			`Spara proiettili fino a 2 nemici contemporaneamente e applica 1 carica di veleno. Il bersaglio perde lo 0,1% di vita al secondo per ogni carica.`,
			`Feuert Projektile gleichzeitig auf bis zu 2 Gegner ab und fügt ihnen 1 Giftstapel zu. Das Ziel verliert pro Stapel 0,1% Gesundheit pro Sekunde.`,
			`最大2体の敵に向かって弾を撃ち、毒1スタックを付与する。対象はスタックごとに1秒あたり0.1%のHPを失う。`,
			`한 번에 최대 2명의 적에게 투사체를 발사하고 독 1스택을 적용합니다. 대상은 스택당 초당 0.1% 체력을 잃습니다.`,
			`同時向最多2個敵人發射投射物並施加1層中毒效果。目標每層中毒每秒失去0.1%生命值。`,
			`Strzela pociskami do maksymalnie 2 wrogów naraz i nakłada 1 warstwę trucizny. Cel traci 0,1% zdrowia na sekundę za każdą warstwę.`,
		]

	},
	spinda: {
		id: 'spinda',
		name: ['Own Tempo', 'Tumbos', 'Tempo Perso', 'Ritmo Próprio', 'Ritmo Proprio', 'Eigenes Tempo', 'マイペース', '마이페이스', '我行我素', 'Własne Tempo'],
		description: [
			'Has trouble focusing.', 
			'Tiene problemas para mantener el foco.', 
			'A du mal à rester concentré.', 
			'Tem problemas para manter o foco.', 
			'Ha difficoltà a mantenere la concentrazione.', 
			'Hat Probleme, sich zu konzentrieren.', 
			'集中力を保つのが難しい。', 
			'집중하는 데 어려움이 있다.',
			'难以保持专注。',
			'Ma problem ze skupieniem.',
		]
	},
	slowSplash: {
		id: 'slowSplash',
		name: ['Slow Splash', 'Slow Splash', 'Slow Splash', 'Slow Splash', 'Slow Splash', 'Langsamer Platscher', 'ゆっくりはねる', '느린 첨벙', '緩慢飛濺', 'Spowalniający Plusk'],
		description: [
			'Projectiles explode in an area, dealing half damage to nearby enemies and slowing them for 2 seconds.',
			'Los proyectiles explotan en área, causando la mitad de daño a enemigos cercanos y ralentizándolos durante 2 segundos.',
			'Les projectiles explosent dans une zone, infligeant la moitié des dégâts aux ennemis proches et les ralentissant pendant 2 secondes.',
			'Os projéteis explodem em área, causando metade do dano aos inimigos próximos e os desacelerando por 2 segundos.',
			'I proiettili esplodono in un’area, infliggendo metà danno ai nemici vicini e rallentandoli per 2 secondi.',
			'Projektile explodieren in einem Bereich, verursachen halben Schaden an nahegelegenen Gegnern und verlangsamen sie 2 Sekunden lang.',
			'弾は範囲で爆発し、近くの敵に半分のダメージを与え、2秒間減速させる。',
			'투사체가 범위 내에서 폭발하여 근처 적에게 절반의 피해를 주고 2초 동안 느리게 만듭니다.',
			'投射物在範圍內爆炸，對附近敵人造成一半傷害，並使其減速2秒。',
			'Pociski wybuchają na obszarze, zadając połowę obrażeń pobliskim wrogom i spowalniając ich na 2 sekundy.',
		]
	},
	armorBreakSplash: {
		id: 'armorBreakSplash',
		name: ['Armor Break Splash', 'Splash Rompearmadura', 'Splash Brise-Armure', 'Splash Quebra-Armadura', 'Splash Rompicolpo', 'Rüstungsbrecher-Splash', 'アーマーブレイクスプラッシュ', '아머 브레이크 스플래시', '破甲溅射', 'Rozprysk przełamania pancerza'],
		description: [
		  	"Projectiles explode in an area, dealing half damage to nearby enemies and dealing double damage to armor.",
		  	"Los proyectiles explotan en área, infligiendo la mitad de daño a los enemigos cercanos y el doble de daño a la armadura.",
		  	"Les projectiles explosent dans une zone, infligeant la moitié des dégâts aux ennemis proches et des dégâts doublés à l'armure.",
		  	"Os projéteis explodem em área, causando metade do dano a inimigos próximos e dano em dobro à armadura.",
		  	"I proiettili esplodono in un'area, infliggendo metà danno ai nemici vicini e danni raddoppiati all'armatura.",
		  	"Projektile explodieren in einem Bereich, verursachen halben Schaden an nahegelegenen Gegnern und doppelten Schaden an Rüstung.",
		  	"弾は範囲内で爆発し、近くの敵に半分のダメージを与え、アーマーには2倍のダメージを与える。",
		  	"투사체가 범위 내에서 폭발하여 근처 적에게 절반의 피해를 주고, 방어력에 두 배의 피해를 줍니다.",
		  	"投射物在區域內爆炸，對附近敵人造成一半傷害，並對護甲造成雙倍傷害。",
		  	"Pociski wybuchają na obszarze, zadając połowę obrażeń pobliskim wrogom i podwójne obrażenia pancerzowi."
		]
	},
	synchronySplash: {
		id: 'synchronySplash',
		name: ['Synchrony', 'Sincronía', 'Synchro', 'Sincronia', 'Sincronia', 'Synchronisation', 'シンクロ', '싱크로', '同步', 'Synchronia'] ,
		description: [
		    "Projectiles explode in an area, dealing half damage to nearby enemies and spreading the main target’s status effects (burn, poison, stun, slow).",
		    "Los proyectiles explotan en área, causando la mitad de daño a enemigos cercanos y propagando los estados del objetivo principal (quemadura, veneno, aturdimiento, ralentización).",
		    "Les projectiles explosent en zone, infligeant la moitié des dégâts aux ennemis proches propagent problèmes de statut de la cible principale (brulure, poison, étourdissement, ralentissement).",
		    "Os projéteis explodem em área, causando metade do dano aos inimigos próximos e propagando os estados do alvo principal (queimadura, veneno, atordoamento, lentidão).",
		    "I proiettili esplodono ad area, infliggendo metà dei danni ai nemici vicini e propagando gli stati del bersaglio principale (bruciatura, veleno, stordimento, rallentamento).",
		    "Projektile explodieren in einem Bereich, verursachen halben Schaden an nahen Gegnern und verbreiten die Zustände des Hauptziels (Verbrennung, Gift, Betäubung, Verlangsamung).",
		    "弾は範囲内で爆発し、近くの敵に半分のダメージを与え、メインターゲットの状態異常（やけど、どく、スタン、スロー）を拡散します。",
		    "투사체가 범위 내에서 폭발하여 주변 적에게 절반의 피해를 주고, 주요 대상의 상태 이상(화상, 독, 기절, 둔화)을 전파합니다.",
		    "投射物在范围内爆炸，对附近敌人造成一半伤害，并扩散主要目标的状态效果（灼伤、中毒、眩晕、减速）。",
			"Pociski wybuchają na obszarze, zadając połowę obrażeń pobliskim wrogom i rozprzestrzeniając statusy celu głównego (oparzenie, zatrucie, ogłuszenie, spowolnienie).",
		]

	},
	castform: {
		id: 'castform',
		name: ['Forecast', 'Cambio Climático', 'Météo', 'Previsão', 'Previsioni', 'Wettervorhersage', 'てんきや', '기후조절', '天气预报', 'Prognoza'],
		description: [
			'Multiplies its damage by 2 in tall grass, its speed by 2 in water, and its range by 2 in mountains.',
			'Multiplica su daño x2 en hierba alta, su velocidad x2 en agua, y su alcance x2 en montaña.',
			'Multiplie ses dégâts par 2 dans les hautes herbes, sa vitesse par 2 dans l’eau, et sa portée par 2 en montagne.',
			'Multiplica seu dano por 2 em grama alta, sua velocidade por 2 na água e seu alcance por 2 na montanha.',
			'Moltiplica il suo danno x2 in erba alta, la sua velocità x2 in acqua e il suo raggio d’azione x2 in montagna.',
			'Multipliziert seinen Schaden x2 im hohen Gras, seine Geschwindigkeit x2 im Wasser und seine Reichweite x2 im Gebirge.',
			'高い草ではダメージが2倍、水中では速度が2倍、山では射程が2倍になる。',
			'높은 풀에서는 피해가 2배, 물에서는 속도가 2배, 산에서는 사정거리가 2배가 됩니다.',
			'在高草中伤害变为2倍，在水中速度变为2倍，在山地中射程变为2倍。',
			'Mnoży swoje obrażenia x2 w trawie, prędkość przeładowania x2 w wodzie i zasięg ataku x2 w górach.',
		]
	},
	star: {
		id: 'star',
		name: ['star', 'estrella', 'étoile', 'estrela', 'stella', 'Stern', 'スター', '별', '星', 'Gwiazda'],
		description: [
			'Attacks deal 1 additional damage for each star.',
			'Los ataques hacen 1 de daño adicional por cada estrella.',
			'Les attaques infligent 1 dégât supplémentaire par étoile.',
			'Os ataques causam 1 de dano adicional por estrela.',
			'Gli attacchi infliggono 1 danno aggiuntivo per ogni stella.',
			'Angriffe verursachen 1 zusätzlichen Schaden pro Stern.',
			'攻撃は星1つごとに追加で1ダメージを与える。',
			'공격은 별 하나당 1의 추가 피해를 입힙니다.',
			'每擁有一顆星星，攻擊就會額外造成 1 點傷害。',
			'Ataki zadają dodatkowe obrażenia o 1 za każdą gwiazdkę.',
		]
	},
	teleport: {
		id: 'teleport',
		name: ['teleport', 'teleport', 'teleport', 'teleport', 'teleport', 'Teleport', 'テレポート', '텔레포트', '瞬間移動', 'Teleport'],
		description: [
			'Teleports periodically whenever possible. Each teleport grants 100% stackable damage to the next attack.',
			'Se teleporta periódicamente cuando sea posible. Cada teleport otorga 100% de daño acumulable para el siguiente ataque.',
			'Se téléporte périodiquement lorsque c’est possible, Chaque téléportation confère 100 % de dégâts cumulables à la prochaine attaque.',
			'Teleporta-se periodicamente quando possível. Cada teleporte concede 100% de dano acumulável ao próximo ataque.',
			'Si teletrasporta periodicamente quando possibile. Ogni teletrasporto garantisce il 100% di danno cumulabile al prossimo attacco.',
			'Teleportiert sich periodisch, wann immer möglich. Jede Teleportation verleiht 100% stapelbaren Schaden für den nächsten Angriff.',
			'可能な場合に定期的にテレポートし、テレポート1回ごとに次の攻撃のダメージが100％ずつ累積で増加する。',
			'가능할 때 주기적으로 텔레포트하며, 텔레포트할 때마다 다음 공격에 100%의 누적 피해가 부여됩니다.',
			'在可行時會定期瞬間移動。每次瞬間移動都會使下一次攻擊的傷害提高 100%，且可疊加。',
			'Okresowo teleportuje się, gdy to możliwe. Każdy teleport daje +100% kumulujących się obrażeń do następnego ataku.',
		]
	},
	nightmare: {
		id: 'nightmare',
		name: ['nightmare', 'pesadilla', 'cauchemar', 'pesadelo', 'incubo', 'Albtraum', 'ナイトメア', '악몽', '惡夢', 'Koszmar'],
		description: [
			'Attacks apply 1 nightmare stack. Each stack deals damage equal to 20% of this Pokémon’s power per second.',
			'Los ataques aplican 1 carga de pesadilla. Cada carga causa un daño igual al 20% del poder de este Pokémon cada segundo.',
			'Les attaques appliquent 1 accumulation de cauchemar. Chaque accumulation inflige des dégâts égaux à 20 % de la puissance de ce Pokémon par seconde.',
			'Os ataques aplicam 1 carga de pesadelo. Cada carga causa dano igual a 20% do poder deste Pokémon por segundo.',
			'Gli attacchi applicano 1 carica di incubo. Ogni carica infligge danno pari al 20% del potere di questo Pokémon ogni secondo.',
			'Angriffe fügen 1 Albtraum-Stapel hinzu. Jeder Stapel verursacht Schaden in Höhe von 20% der Kraft dieses Pokémon pro Sekunde.',
			'攻撃はナイトメア1スタックを付与する。各スタックはこのポケモンの力の20%のダメージを毎秒与える。',
			'공격은 악몽 1스택을 적용합니다. 각 스택은 이 포켓몬 능력치의 20% 피해를 매초 입힙니다.',
			'攻擊會附加 1 層惡夢。每層每秒造成相當於此寶可夢力量 20% 的傷害。',
			'Ataki nakładają 1 warstwę koszmaru. Każda warstwa zadaje obrażenia równe 20% mocy tego Pokémona na sekundę.',
		]
	},
	bastiodon: {
		id: 'bastiodon',
		name: ['Fossil Speed', 'Velocidad Fósil', 'Vitesse Fossile', 'Velocidade Fóssil', 'Velocità Fossile', 'Fossilgeschwindigkeit', '化石の速さ', '화석 속도', '化石速度', 'Szybkość Skamieniałości'],
		description: [
			'Reduces recharge time by 0.5s for each Fossil Pokémon on the team.',
			'Reduce 0.5s la velocidad de recarga por cada Pokémon Fósil en el equipo.',
			'Réduit le temps de rechargement de 0,5 s pour chaque Pokémon Fossile dans l’équipe.',
			'Reduz 0,5s do tempo de recarga para cada Pokémon Fóssil na equipe.',
			'Riduce il tempo di ricarica di 0,5 s per ogni Pokémon Fossile nella squadra.',
			'Verringert die Nachladezeit um 0,5 s für jedes Fossil-Pokémon im Team.',
			'チームにいる化石ポケモン1体ごとにリロード時間が0.5秒短くなる。',
			'팀에 있는 화석 포켓몬마다 재장전 시간이 0.5초 감소합니다.',
			'隊伍中每有 1 隻化石寶可夢，充能時間就減少 0.5 秒。',
			'Skraca czas przeładowania o 0,5s za każdą Skamielinę w drużynie.',
		]
	},
	rampardos: {
		id: 'rampardos',
		name: ['Rock Head', 'Cabeza de Roca', 'Tête de Roc', 'Cabeça de Pedra', 'Testa di Roccia', 'Felskopf', 'いしあたま', '바위 머리', '堅硬腦袋', 'Twarda Głowa'],
		description: [
			'Increases damage by 5% for each missing heart.',
			'Aumenta 5% el daño por cada corazón faltante.',
			'Augmente les dégâts de 5 % pour chaque cœur manquant.',
			'Aumenta 5% do dano por cada coração faltante.',
			'Aumenta il danno del 5% per ogni cuore mancante.',
			'Erhöht den Schaden um 5% für jedes fehlende Herz.',
			'失われたハート1つごとにダメージが5%増加する。',
			'잃은 하트마다 피해가 5% 증가합니다.',
			'每失去 1 顆心，造成的傷害提高 5%。',
			'Zwiększa obrażenia o 5% za każde brakujące serce.',
		]
	},
	armaldo: {
		id: 'armaldo',
		name: ['Critical Ricochet', 'Rebote Critico', 'Ricochet critique', 'Ricochete crítico', 'Rimbalzo critico', 'Kritischer Querschläger', 'クリティカルリコシェ', '크리티컬 리코셰', '暴擊反彈', 'Krytyczny Rykoszet'],
		description: [
			'Critical projectiles ricochet between enemies and keep ricocheting as long as they remain critical.',
			'Los proyectiles críticos rebotan entre los enemigos, y siguen rebotando mientras sean críticos.',
			'Les projectiles critiques ricochent entre les ennemis et continuent de ricocher tant qu’ils restent critiques.',
			'Projéteis críticos ricocheteiam entre os inimigos e continuam ricocheteando enquanto forem críticos.',
			'I proiettili critici rimbalzano tra i nemici e continuano a rimbalzare finché restano critici.',
			'Kritische Projektile prallen zwischen Gegnern ab und prallen weiter, solange sie kritisch bleiben.',
			'クリティカルの弾は敵の間を跳ね返り、クリティカルである限り跳ね続ける。',
			'크리티컬 탄환은 적들 사이를 튕기며, 크리티컬인 동안 계속 튕깁니다.',
			'暴擊投射物會在敵人之間反彈，並且只要仍為暴擊狀態就會持續反彈。',
			'Krytyczne pociski rykoszetują między wrogami i odbijają się tak długo, jak pozostają krytyczne.',
		]
	},
	cradily: {
		id: 'cradily',
		name: ['Fossil Projectile', 'Proyectil Fósil', 'Projectile Fossile', 'Projétil Fóssil', 'Proiettile Fossile', 'Fossiliengeschoss', '化石の弾', '화석 투사체', '化石投射物', 'Skamieniały Pocisk'],
		description: [
			'Shoots one projectile for each Fossil Pokémon on the team. Attacks slow the target for 2 seconds.',
			'Dispara un proyectil por cada Pokémon Fósil en el equipo. Los ataques ralentizan al objetivo durante 2 segundos.',
			'Tire un projectile pour chaque Pokémon Fossile dans l’équipe. Les attaques ralentissent la cible pendant 2 secondes.',
			'Dispara um projétil para cada Pokémon Fóssil na equipe. Os ataques desaceleram o alvo por 2 segundos.',
			'Spara un proiettile per ogni Pokémon Fossile nella squadra. Gli attacchi rallentano il bersaglio per 2 secondi.',
			'Feuert für jedes Fossil-Pokémon im Team ein Projektil ab. Angriffe verlangsamen das Ziel 2 Sekunden lang.',
			'チームにいる化石ポケモン1体ごとに弾を1発撃つ。攻撃は対象を2秒間遅くする。',
			'팀에 있는 화석 포켓몬마다 탄환을 1개 발사합니다. 공격은 대상을 2초 동안 느리게 합니다.',
			'隊伍中每有一隻化石寶可夢，就會發射一枚投射物。攻擊會使目標減速 2 秒。',
			'Strzela jednym pociskiem za każdą Skamielinę w drużynie. Ataki spowalniają cel na 2 sekundy.',
		]
	},
	transform: {
		id: 'transform',
		name: ['Transform', 'Transform', 'Transform', 'Transform', 'Transform', 'Verwandlung', 'へんしん', '변신', '變身', 'Transformacja'],
		description: [
			'Transforms into the first Pokémon in the party, copying its stats and ability adjusted to Ditto’s level.', 
			'Se transforma en el primer Pokémon del grupo, copiando sus estadísticas y habilidad adaptadas al nivel de Ditto.', 
			'Il se transforme en le premier pokémon de l’équipe, en copiant ses statistiques et son talent ajustés au niveau de Métamorph.', 
			'Transforma-se no primeiro Pokémon do grupo, copiando seus atributos e habilidade ajustados ao nível de Ditto.', 
			'Si trasforma nel primo Pokémon della squadra, copiandone le statistiche e l’abilità adattate al livello di Ditto.', 
			'Ditto verwandelt sich in das erste Pokémon im Team und kopiert dessen Werte und Fähigkeit, angepasst an Dittos level.', 
			'メタモンのレベルに合わせて、手持ちの先頭のポケモンに変身し、その能力値と特性をコピーする。', 
			'메타몽의 레벨에 맞추어 파티의 첫 번째 포켓몬으로 변신하며, 그 능력치와 특성을 복사한다.',
			'會變身為隊伍中的第一隻寶可夢，並依照百變怪的等級複製其能力值與特性。',
			'Zmienia się w pierwszego Pokémona w drużynie, kopiując jego statystyki i zdolność, dostosowane do poziomu Ditto.',
		]
	},
	fieryDance: {
		id: 'fieryDance',
		name: ['Fiery Dance', 'Danza Llama', 'Danse du Feu', 'Dança Ardente', 'Voldifuoco', 'Feuerreigen', 'ほのおのまい', '불꽃춤', '火焰之舞', 'Ognisty Taniec'],
		description: [
			"If the target is burned, it deals 30% additional damage. It detonates the target's burn, dealing 0.2% of max HP for each remaining second of burn.",
			"Si el objetivo está quemado, causa un 30% de daño adicional. Detona la quemadura del objetivo, causando un 0.2% de vida máxima por cada segundo de quemadura restante.",
			"Si la cible est brûlée, cela inflige 30 % de dégâts supplémentaires. Détonne la brûlure de la cible, infligeant 0,2 % des PV max pour chaque seconde de brûlure restante.",
			"Se o alvo estiver queimado, causa 30% de dano adicional. Detona a queimadura do alvo, causando 0,2% da vida máxima para cada segundo restante de queimadura.",
			"Se il bersaglio è scottato, infligge il 30% di danni aggiuntivi. Detona la scottatura del bersaglio, infliggendo lo 0,2% dei PS massimi per ogni secondo di scottatura rimanente.",
			"Wenn das Ziel verbrannt ist, verursacht es 30 % zusätzlichen Schaden. Zündet die Verbrennung des Ziels und verursacht 0,2 % der maximalen KP für jede verbleibende Sekunde der Verbrennung.",
			"対象がやけど状態の場合、追加で30%のダメージを与える。対象のやけどを起爆し、残りのやけど時間1秒ごとに最大HPの0.2%のダメージを与える。",
			"대상이 화상 상태라면 30%의 추가 피해를 준다. 대상의 화상을 폭발시켜 남은 화상 시간 1초마다 최대 체력의 0.2% 피해를 준다.",
			"如果目标处于灼伤状态，则造成额外30%的伤害。引燃目标的灼伤，每剩余一秒灼伤造成其最大生命值的0.2%。",
			"Jeśli cel jest poparzony, zadaje 30% dodatkowych obrażeń. Detonuje oparzenie celu, zadając 0,2% maksymalnego zdrowia za każdą pozostałą sekundę oparzenia."
		]
	},
	static: {
		id: 'static',
		name: ['Static', 'Electricidad estática', 'Électricité statique', 'Eletricidade Estática', 'Statico', 'Statik', 'せいでんき', '정전기', '静电', 'Statyczność'],
		description: [
			'Attacks ricochet between enemies with reduced damage and have a 5% chance to stun the target for 1.5 seconds.', 
			'Los ataques rebotan entre los enemigos con daño reducido y tienen un 5% de probabilidad de aturdir al objetivo durante 1.5 segundos.', 
			'Les attaques ricochent entre les ennemis avec des dégâts réduits et ont 5 % de chances d’étourdir la cible pendant 1,5 seconde.', 
			'Os ataques ricocheteiam entre os inimigos com dano reduzido e têm 5% de chance de atordoar o alvo por 1,5 segundos.', 
			'Gli attacchi rimbalzano tra i nemici con danni ridotti e hanno il 5% di probabilità di stordire il bersaglio per 1,5 secondi.', 
			'Angriffe prallen zwischen Gegnern mit reduziertem Schaden ab und haben eine Chance von 5 %, das Ziel 1,5 Sekunden lang zu betäuben.', 
			'攻撃はダメージが減少した状態で敵の間を跳ね返り、5％の確率で1.5秒間相手をひるませる。', 
			'공격이 적 사이에서 피해가 감소한 채로 반사되며, 5% 확률로 대상이 1.5초 동안 기절한다.',
			'攻击会在敌人之间以降低的伤害进行弹射，并有5%的概率使目标眩晕1.5秒。',
			'Ataki rykoszetują między wrogami, zadając zmniejszone obrażenia i mają 5% szansy ogłuszyć cel na 1,5 sekundy.',
		]
	},
	defiant: {
		id: 'defiant',
		name: ['Defiant', 'Competitivo', 'Acharné', 'Desafiante', 'Agonismo', 'Siegeswille', 'まけんき', '오기', '不服输', 'Nieugiętość'],
		description: [
			'Turns negative effects of items into positive effects.', 
			'Convierte los efectos negativos de los objetos en positivos.', 
			'Transforme les effets négatifs des objets en effets positifs.', 
			'Converte os efeitos negativos dos itens em positivos.', 
			'Trasforma gli effetti negativi degli oggetti in positivi.', 
			'Verwandelt negative Effekte von Items in positive Effekte.', 
			'アイテムのマイナス効果をプラス効果に変える。', 
			'아이템의 부정적인 효과를 긍정적인 효과로 바꾼다.',
			'将道具的负面效果转化为正面效果。',
			'Zamienia negatywne efekty przedmiotów w pozytywne.',
		]
	},
	firstImpression: {
		id: 'firstImpression',
		name: ['First Impression', 'Escaramuza', 'Escarmouche', 'Primeira Impressão', 'Schermaglia', 'Überrumpler', 'であいがしら', '만나자마자', '迎头一击', 'Pierwsze Wrażenie'],
		description: [
			'The first attack on an enemy deals triple damage.', 
		    'El primer ataque a un enemigo causa el triple de daño.', 
		    'La première attaque sur un ennemi inflige le triple de dégâts.', 
		    'O primeiro ataque em um inimigo causa o triplo de dano.', 
		    'Il primo attacco a un nemico infligge il triplo del danno.', 
		    'Der erste Angriff auf einen Gegner verursacht dreifachen Schaden.',
		    '敵への最初の攻撃はダメージが3倍になる。',
		    '적에게 가하는 첫 번째 공격은 데미지가 3배가 된다.',
		    '对敌人的第一次攻击造成三倍伤害。',
		    'Pierwszy atak na wroga zadaje potrójne obrażenia.',
		]
	},
	moxie: {
		id: 'moxie',
		name: ['Moxie', 'Autoestima', 'Impudence', 'Arrogância', 'Arroganza', 'Hochmut', 'じしんかじょう', '자기과신', '自信过剩', 'Zuchwałość'],
		description: [
			'During the current wave, each time this Pokémon defeats a Pokémon, its damage increases by 3%.', 
			'Durante la oleada actual, cada vez que este Pokémon derrota a un Pokémon, su daño aumenta un 3%.', 
			'Au cours de la vague actuelle, chaque fois que ce Pokémon bat un Pokémon, ses dégâts augmentent de 3%.', 
			'Durante a onda atual, cada vez que este Pokémon derrota um Pokémon, seu dano aumenta 3%.', 
			"Durante l'onda attuale, ogni volta che questo Pokémon sconfigge un Pokémon, il suo danno aumenta dell'3%.", 
			'Während der aktuellen Welle erhöht sich der Schaden dieses Pokémon jedes Mal um 3 %, wenn es ein Pokémon besieg.', 
			'現在のウェーブ中、このポケモンがポケモンを倒すたびに、ダメージが3％増加する。', 
			'현재 웨이브 동안, 이 포켓몬이 포켓몬을 쓰러뜨릴 때마다 데미지가 3% 증가한다.',
			'在当前波次中，每当该宝可梦击败一只宝可梦，其伤害提高3%。',
			'Podczas bieżącej fali, za każdym razem gdy ten Pokémon pokona Pokémona, jego obrażenia rosną o 3%.',
		]
	},
	armorBreakDoubleShot: {
		id: 'armorBreakDoubleShot',
		name: ['Armor Break DoubleShot', 'Disparo Doble Rompearmadura', 'Double Tir Brise-Armure', 'Disparo Duplo Quebra-Armadura', 'Doppio Colpo Rompicolpo', 'Doppelschuss Rüstungsbrecher', 'アーマーブレイクダブルショット', '방어력파괴 더블샷', '破甲双射', 'Podwójny strzał przebicia pancerza'],
		description: [
		    "Fires projectiles at up to 2 enemies at once. Deals double damage to armor.",
		    "Dispara proyectiles a hasta 2 enemigos a la vez. Causa el doble de daño a la armadura.",
		    "Tire des projectiles sur jusqu'à 2 ennemis à la fois. Inflige le double de dégâts aux armures.",
		    "Dispara projéteis contra até 2 inimigos de uma só vez. Causa o dobro de dano à armadura.",
		    "Spara proiettili a fino a 2 nemici contemporaneamente. Infligge il doppio dei danni all'armatura.",
		    "Feuert gleichzeitig Projektile auf bis zu 2 Gegner. Verdoppelt den Schaden an Rüstung.",
		    "同時に最大2体の敵に向けて弾を発射します。防御力には2倍のダメージを与えます。",
		    "최대 2명의 적에게 동시에 투사체를 발사합니다. 방어에는 두 배의 피해를 줍니다.",
		    "同时向最多2个敌人发射投射物，对护甲造成双倍伤害。",
			"Strzela pociskami do maksymalnie 2 wrogów naraz. Zadaje podwójne obrażenia pancerzowi.",
		]
	},
	stanceChange: {
		id: 'stanceChange',
		name: ['Stance Change', 'Cambio táctico', 'Déclic Tactique', 'Mudança de Postura', 'Accendilotta', 'Taktikwechsel', 'バトルスイッチ', '배틀스위치', '战斗切换', 'Zmiana Postawy'],
		description: [
			'Sword Form: Deals double damage to armor. <br>Shield Form: Deals area damage and slows enemies for 2 seconds but loses half of its power.',
			'Forma Espada: Causa el doble de daño a la armadura. <br>Forma Escudo: Causa daño en área y ralentiza a los enemigos durante 2 segundos, pero pierde la mitad de su poder.',
			'Forme Épée : inflige le double de dégâts à l’armure. <br>Forme Bouclier : inflige des dégâts de zone et ralentit les ennemis pendant 2 secondes, mais perd la moitié de sa puissance.',
			'Forma Espada: causa o dobro de dano à armadura. <br>Forma Escudo: causa dano em área e reduz a velocidade dos inimigos por 2 segundos, mas perde metade do seu poder.',
			'Forma Spada: infligge il doppio dei danni all’armatura. <br>Forma Scudo: infligge danni ad area e rallenta i nemici per 2 secondi, ma perde metà della sua potenza.',
			'Schwertform: verursacht doppelten Schaden an Rüstung. <br>Schildform: verursacht Flächenschaden und verlangsamt Gegner 2 Sekunden lang, verliert jedoch die Hälfte seiner Stärke.',
			'ブレードフォルム：アーマーに2倍のダメージを与える。<br>シールドフォルム：範囲ダメージを与え、敵を2秒間遅くするが、攻撃力が半減する。',
			'검 형태: 방어도에 2배의 피해를 준다. <br>방패 형태: 광역 피해를 주고 적을 2초간 느리게 하지만 공격력이 절반으로 감소한다.',
			'剑形态：对护甲造成双倍伤害。<br>盾形态：造成范围伤害并使敌人减速2秒，但攻击力降低一半。',
			'Forma Miecza: zadaje podwójne obrażenia pancerzowi. <br>Forma Tarczy: zadaje obrażenia obszarowe i spowalnia wrogów na 2 sekundy, ale traci połowę mocy.',
		]
	},
	willOWisp: {
		id: 'willOWisp',
		name: ["Will-O-Wisp", "Fuego Fatuo", "Feu Follet", "Fogo-Fátuo", "Fuoco Fatuo", "Irrlicht", "おにび", "위험불꽃", "鬼火", "Ognik"],
		description: [
			"If the target is cursed, deals damage to all cursed enemies and burns them.",
			"Si el objetivo está maldito, causa daño a todos los enemigos malditos y los quema.",
			"Si la cible est maudite, inflige des dégâts à tous les ennemis maudits et les brule.",
			"Se o alvo estiver amaldiçoado, causa dano a todos os inimigos amaldiçoados e os queima.",
			"Se il bersaglio è maledetto, infligge danno a tutti i nemici maledetti e li brucia.",
			"Wenn das Ziel verflucht ist, verursacht es Schaden an allen verfluchten Gegnern und verbrennt sie.",
			"ターゲットが呪われている場合、すべての呪われた敵にダメージを与え、やけど状態にする。",
			"대상이 저주 상태라면 모든 저주받은 적에게 피해를 주고 화상을 입힙니다.",
			"如果目标被诅咒，则对所有被诅咒的敌人造成伤害并使其灼伤。",
			"Jeśli cel jest przeklęty, zadaje obrażenia wszystkim przeklętym wrogom i podpala ich.",
		]
	},
	sniper: {
		id: 'sniper',
		name: ["Sniper", "Francotirador", "Sniper", "Atirador de Elite", "Cecchino", "Scharfschütze", "スナイパー", "저격수", "狙击手", "Snajper"],
		description: [
			"The projectile multiplies its damage by 2 for every 150 units of distance traveled.",
			"El proyectil multiplica su daño por 2 por cada 150 unidades de distancia recorrida.",
			"Le projectile multiplie ses dégâts par 2 tous les 150 unités de distance parcourue.",
			"O projétil multiplica seu dano por 2 a cada 150 unidades de distância percorrida.",
			"Il proiettile moltiplica il suo danno per 2 ogni 150 unità di distanza percorsa.",
			"Das Projektil vervielfacht seinen Schaden um das 2-fache für je 150 Einheiten zurückgelegte Distanz.",
			"弾は移動した距離1150ごとにダメージが2倍になります。",
			"투사체는 이동한 거리 150마다 피해가 2배로 증가합니다.",
			"投射物每飞行150距离，伤害提升为原来的2倍。",
			"Pocisk mnoży swoje obrażenia x2 za każde 150 jednostek przebytego dystansu.",
		]
	},
	toughClaws: {
		id: 'toughClaws',
		name: ["Tough Claws", "Garra Dura", "Griffe Dure", "Garras Firmes", "Unghiedure", "Krallenwucht", "かたいツメ", "단단한발톱", "硬爪", "Twarde Pazury"],
		description: [
			"Increases its power by 50% while on a mountain. Sets its critical chance to 100% while in tall grass.",
			"Aumenta un 50% su poder si se encuentra en la montaña. Vuelve 100% su Crítico si se encuentra en hierba alta.",
			"Augmente sa puissance de 50 % en montagne. Son taux de critique passe à 100 % lorsqu'il est dans les hautes herbes.",
			"Aumenta o seu poder em 50% quando está na montanha. Torna o crítico 100% quando está em relva alta.",
			"Aumenta la sua potenza del 50% quando si trova in montagna. Porta il colpo critico al 100% quando si trova nell'erba alta.",
			"Erhöht seine Stärke um 50 %, wenn es sich auf einem Berg befindet. Setzt die Krit-Chance auf 100 %, wenn es sich im hohen Gras befindet.",
			"山にいる間、威力が50%上昇する。背の高い草むらにいる間、クリティカル率が100%になる。",
			"산에 있을 때 위력이 50% 증가합니다. 키 큰 풀숲에 있을 때 치명타 확률이 100%가 됩니다.",
			"在山地时威力提高50%。在高草中时，暴击率变为100%。",
			"Zwiększa obrażenia o 50% w górach. Zmienia szansę na cios krytyczny na 100% gdy jest w trawie.",
		]
	},
	toughClawsDay: {
		id: 'toughClawsDay',
		name: ["Tough Claws", "Garra Dura", "Griffe Dure", "Garras Firmes", "Unghiedure", "Krallenwucht", "かたいツメ", "단단한발톱", "硬爪", "Twarde Pazury"],
		description: [
			"Increases its power by 50% and sets its critical chance to 100% while on a mountain.",
			"Aumenta un 50% su poder y vuelve 100% su Crítico si se encuentra en la montaña.",
			"Augmente sa puissance de 50 % et fait passer son taux de critique à 100 % lorsqu'il se trouve sur une montagne.",
			"Aumenta o seu poder em 50% e torna o crítico 100% quando está na montanha.",
			"Aumenta la sua potenza del 50% e porta il colpo critico al 100% quando si trova in montagna.",
			"Erhöht seine Stärke um 50 % und setzt die Krit-Chance auf 100 %, wenn es sich auf einem Berg befindet.",
			"山にいる間、威力が50%上昇し、クリティカル率が100%になる。",
			"산에 있을 때 위력이 50% 증가하고 치명타 확률이 100%가 됩니다.",
			"在山地時，威力提高50%，並將暴擊率設為100%。",
			"Zwiększa obrażenia o 50% i zmienia szansę na cios krytyczny na 100% gdy jest w górach.",
		]
	},
	toughClawsNight: {
		id: 'toughClawsNight',
		name: ["Tough Claws", "Garra Dura", "Griffe Dure", "Garras Firmes", "Unghiedure", "Krallenwucht", "かたいツメ", "단단한발톱", "硬爪", "Twarde Pazury"],
		description: [
			"Increases its power by 50% and sets its critical chance to 100% while in tall grass.",
			"Aumenta un 50% su poder y vuelve 100% su Crítico si se encuentra en hierba alta.",
			"Augmente sa puissance de 50 % et fait passer son taux de critique à 100 % lorsqu'il se trouve dans les hautes herbes.",
			"Aumenta o seu poder em 50% e torna o crítico 100% quando está em relva alta.",
			"Aumenta la sua potenza del 50% e porta il colpo critico al 100% quando si trova nell'erba alta.",
			"Erhöht seine Stärke um 50 % und setzt die Krit-Chance auf 100 %, wenn es sich im hohen Gras befindet.",
			"背の高い草むらにいる間、威力が50%上昇し、クリティカル率が100%になる。",
			"키 큰 풀숲에 있을 때 위력이 50% 증가하고 치명타 확률이 100%가 됩니다.",
			"在高草地时，威力提高50%，并将暴击率设为100%。",
			"Zwiększa obrażenia o 50% i zmienia szansę na cios krytyczny na 100% gdy jest w trawie.",
		]
	},
	triage: {
		id: 'triage',
		name: ["Triage", "Primer Auxilio", "Prioguérison", "Triagem", "Primacura", "Heilwandel", "ヒーリングシフト", "힐링시프트", "先制治疗", "Pierwsza Pomoc"],
		description: [
			"Reduces the recharge time of Pokémon within range by 15%. At the end of the wave, has a 5% chance to recover 1 heart.",
			"Disminuye el tiempo de recarga de los Pokémon dentro de rango un 15%. Al final de la oleada, tiene un 5% de recuperar 1 corazón.",
			"Réduit le temps de récupération des Pokémon à portée de 15 %. A 5 % de chance de récupérer 1 cœur en fin de vague.",
			"Reduz o tempo de recarga dos Pokémon dentro do alcance em 15%. No final da onda, tem 5% de chance de recuperar 1 coração.",
			"Riduce il tempo di ricarica dei Pokémon nel raggio del 15%. Alla fine dell'ondata, ha il 5% di probabilità di recuperare 1 cuore.",
			"Reduziert die Wiederaufladezeit von Pokémon in Reichweite um 15 %. Am Ende der Welle besteht eine 5%-Chance, 1 Herz wiederherzustellen.",
			"範囲内のポケモンの再充電時間を15％短縮します。ウェーブ終了時に、5％の確率でハートを1回復します。",
			"범위 내 포켓몬의 재충전 시간을 15% 감소시킵니다. 웨이브 종료 시 5% 확률로 하트를 1 회복합니다.",
			"使范围内的宝可梦充能时间减少15%。在波次结束时，有5%的概率恢复1颗心。",
			"Skraca czas przeładowania Pokémonów w zasięgu o 15%. Na koniec fali istnieje 5% szansy na odzyskanie 1 serca.",
		]
	},
	scheme: {
		id: 'scheme',
		name: ["Sketch", "Esbozo", "Gribouille", "Esboço", "Schizzo", "Nachahmer", "スケッチ", "스케치", "写生", "Intryga"],
		description: [
			"Each hit has a 1/9000 chance to turn a Pokémon that is in its final evolutionary stage shiny.",
			"Cada golpe tiene una probabilidad de 1/9000 de volver variocolor a un Pokémon que está en su etapa evolutiva final.",
			"Chaque coup a une chance sur 9000 de rendre chromatique un Pokémon à son stade évolutif final.",
			"Cada acerto tem uma chance de 1/9000 de tornar brilhante um Pokémon que está em seu estágio evolutivo final.",
			"Ogni colpo ha una probabilità di 1 su 9000 di rendere cromatico un Pokémon nella sua fase evolutiva finale.",
			"Jeder Treffer hat eine Chance von 1/9000, ein Pokémon in seiner letzten Entwicklungsstufe schillernd zu machen.",
			"最終進化段階にいるポケモンを色違いにする確率が、攻撃1回ごとに1/9000ある。",
			"최종 진화 단계에 있는 포켓몬을 색이 다른 포켓몬으로 만들 확률이 한 번의 타격마다 1/9000이다.",
			"每次命中都有1/9000的概率使处于最终进化阶段的宝可梦变成闪光。",
			"Każde trafienie ma 1/9000 szansę, by zmienić Pokémona w jego końcowym stadium ewolucji w shiny.",
		]
	},
	doubleShotSand: {
		id: 'doubleShotSand',
		name: ['Double Shot', 'Disparo Doble', 'Tir Double', 'Tiro Duplo', 'Doppio Colpo', 'Doppelschuss', 'ダブルショット', '더블 샷', '雙重射擊', 'Podwójny Strzał'],
		description: [
			`Fires projectiles at up to 2 enemies at once. Doubles its range on Route 2.`,
			`Dispara proyectiles hasta a 2 enemigos a la vez. Duplica su rango en la Ruta 2.`,
			`Tire des projectiles jusque sur 2 ennemis à la fois. Double sa portée sur la Route 2.`,
			`Dispara projéteis em até 2 inimigos ao mesmo tempo. Dobra o alcance na Rota 2.`,
			`Spara proiettili fino a 2 nemici contemporaneamente.  Raddoppia la sua gittata sul Percorso 2.`,
			`Feuert Projektile auf bis zu 2 Gegner gleichzeitig ab. Verdoppelt seine Reichweite auf Route 2.`,
			`一度に最大2体の敵に弾を発射する。 2番道路では射程が2倍になります。`,
			`한 번에 최대 2명의 적에게 투사체를 발사한다. 2번 도로에서는 사거리가 2배가 됩니다.`,
			`同時向最多2名敵人發射投射物。在2號道路時，射程加倍。`,
			'Wystrzeliwuje pociski jednocześnie w maksymalnie 2 wrogów. Na Drodze 2 podwaja swój zasięg.',
		]
	},
	quadraShotSand: {
		id: 'quadraShotSand',
		name: ['Quadra Shot', 'Disparo Cuádruple', 'Tir Quadruple', 'Tiro Quádruplo', 'Quadruplo Colpo', 'Vierfachschuss', 'クアドラショット', '쿼드라 샷', '四重射击', 'Poczwórny Strzał'],
		description: [
			'Fires projectiles at up to 4 enemies at once. Doubles its range on Route 2.',
			'Dispara proyectiles hasta a 4 enemigos a la vez. Duplica su rango en la Ruta 2.',
			'Tire des projectiles jusque sur 4 ennemis à la fois. Double sa portée sur la Route 2.',
			'Dispara projéteis em até 4 inimigos ao mesmo tempo. Dobra o alcance na Rota 2.',
			'Spara proiettili fino a 4 nemici contemporaneamente.  Raddoppia la sua gittata sul Percorso 2.',
			'Feuert Projektile auf bis zu 4 Gegner gleichzeitig ab. Verdoppelt seine Reichweite auf Route 2.',
			'一度に最大4体の敵に弾を発射する。 2番道路では射程が2倍になります。',
			'한 번에 최대 4명의 적에게 투사체를 발사한다. 2번 도로에서는 사거리가 2배가 됩니다.',
			'同时向最多4名敌人发射投射物。在2号道路时，射程加倍。',
			'Wystrzeliwuje pociski jednocześnie w maksymalnie 4 wrogów. Na Trasie 2 podwaja swój zasięg.',
		]
	},
	chatter: {
		id: 'chatter',
		name: ["Chatter", "Cháchara", "Babil", "Tagarelice", "Schiamazzo", "Geschwätz", "おしゃべり", "수다", "聒噪", "Gadanina"],
		description: [
		    "Its damage depends on the volume of the game's sound effects.",
		    "Su daño depende del volumen de los efectos del juego.",
		    "Ses dégâts dépendent du volume des effets sonores du jeu.",
		    "Seu dano depende do volume dos efeitos sonoros do jogo.",
		    "Il suo danno dipende dal volume degli effetti sonori del gioco.",
		    "Sein Schaden hängt von der Lautstärke der Soundeffekte des Spiels ab.",
		    "ゲーム内の効果音の音量によってダメージが決まります。",
		    "게임 내 효과음의 볼륨에 따라 피해량이 결정됩니다.",
		    "其伤害取决于游戏音效的音量。",
			"Zadawane obrażenia zależą od głośności efektów dźwiękowych w grze.",
		]
	},
	speedBoost: {
		id: 'speedBoost',
		name: ["Speed Boost", "Impulso", "Turbo", "Impulso", "Velocità +", "Tempomacher", "スピードブースト", "스피드 부스트", "加速", "Przyśpieszenie"],
		description: [
		    "Each attack reduces recharge time by 0.3 seconds, stackable up to 10 times per wave.",
		    "Cada ataque reduce el tiempo de recarga en 0.3 segundos, acumulable 10 veces por oleada.",
		    "Chaque attaque réduit le temps de recharge de 0,3 seconde, cumulable jusqu'à 10 fois par vague.",
		    "Cada ataque reduz o tempo de recarga em 0,3 segundos, acumulável até 10 vezes por onda.",
		    "Ogni attacco riduce il tempo di ricarica di 0,3 secondi, accumulabile fino a 10 volte per ondata.",
		    "Jeder Angriff reduziert die Wiederaufladezeit um 0,3 Sekunden, stapelbar bis zu 10 Mal pro Welle.",
		    "各攻撃は再充電時間を0.3秒短縮し、ウェーブごとに最大10回まで累積します。",
		    "각 공격은 재충전 시간을 0.3초 감소시키며, 웨이브당 최대 10회까지 중첩됩니다.",
		    "每次攻击使冷却时间减少0.3秒，每一波中最多可叠加10次。",
			"Każdy atak skraca czas odnowienia o 0,3 s. Efekt kumuluje się do 10 razy na falę.",
		]
	},
	simple: {
		id: 'simple',
		name: [
		  	"Simple",
		  	"Simple",
		  	"Simple",
		  	"Simple",
		  	"Disinvoltura",
		  	"Wankelmut",
		  	"たんじゅん",
		  	"단순",
		  	"单纯",
		  	"Simple"
		],
		description: [
		    "Boosts the positive and negative effects of items by 50%.",
			"Potencia los efectos positivos y negativos de los objetos un 50%.",
			"Renforce les effets positifs et négatifs des objets de 50 %.",
			"Aumenta em 50% os efeitos positivos e negativos dos itens.",
			"Aumenta del 50% gli effetti positivi e negativi degli strumenti.",
			"Erhöht positive und negative Effekte von Items um 50 %.",
			"持ち物の良い効果と悪い効果を50％強化する。",
			"도구의 긍정적·부정적 효과를 50% 강화합니다.",
			"将道具的正面和负面效果提高50%。",
			"Wzmacnia pozytywne i negatywne efekty przedmiotów o 50%."
		]
	},
	drizzle: {
		id: 'drizzle',
		name: [
		  	"Drizzle",
			"Llovizna",
			"Crachin",
			"Chuvisco",
			"Piovischio",
			"Niesel",
			"あめふらし",
			"잔비",
			"降雨",
			"Drizzle"
		],
		description: [
		    'Applies Rain weather. Increases damage dealt by units in water by 20%',
		    'Aplica el clima Lluvia. Aumenta el daño causado por las unidades situadas en agua un 20%',
		    `Applique le climat Pluie. Augmente les dégâts infligés par les unités dans l'eau de 20%`,
		    'Aplica o clima Chuva. Aumenta o dano causado por unidades na água em 20%',
		    'Applica il meteo Pioggia. Aumenta i danni inflitti dalle unità situate in acqua del 20%',
		    'Wendet das Wetter Regen an. Erhöht den von Einheiten im Wasser verursachten Schaden um 20%',
		    'あめの天候にする。水中にいるユニットの与えるダメージが20%増加する',
		    '비가 내리는 날씨를 적용합니다. 물 속에 있는 유닛의 가하는 피해가 20% 증가합니다',
		    '进入下雨天气。水中单位造成的伤害提高20%',
		    'Wprowadza pogodę Deszcz. Zwiększa obrażenia zadawane przez jednostki znajdujące się w wodzie o 20%',
		]
	},
	defeatist: {
		id: 'defeatist',
		name: [
		  	"Defeatist",
		  	"Flaqueza",
		  	"Défaitiste",
		  	"Chuvisco",  
		  	"Sconforto",
		  	"Schwächling",
		  	"よわき",
		  	"무기력",
		  	"软弱",
		  	"Defeatist"
		],
		description: [
			"If hearts are 7 or fewer, damage is reduced by half.",
			"Si los corazones son 7 o menos, reduce el daño a la mitad.",
			"Si les cœurs sont inférieurs ou égaux à 7, les dégâts sont réduits de moitié.",
			"Se os corações forem 7 ou menos, o dano é reduzido à metade.",
			"Se i cuori sono 7 o meno, i danni vengono dimezzati.",
			"Wenn die Herzen 7 oder weniger sind, wird der Schaden halbiert.",
			"ハートが7以下の場合、与えるダメージが半分になる。",
			"하트가 7개 이하이면 피해가 절반으로 감소합니다.",
			"当心数为7或更少时，造成的伤害减半。",
			"Jeśli liczba serc wynosi 7 lub mniej, obrażenia zostają zmniejszone o połowę."
		]
	},
	dreamEater: {
		id: 'dreamEater',
		name: [
		  	"Dream Eater",
		  	"Comesueños",
		  	"Dévorêve",
		  	"Chuvisco",  
		  	"Mangiasogni",
		  	"Traumfresser",
		  	"ゆめくい",
		  	"꿈먹기",
		  	"食梦",
		  	"Dream Eater"
		],
		description: [
		    'Deals 100% more damage to enemies suffering from Nightmare.',
		    'Causa un 100% más de daño a enemigos con pesadilla.',
		    'Inflige 100 % de dégâts supplémentaires aux ennemis affectés par Cauchemar.',
		    'Causa 100% a mais de dano a inimigos que estejam sob Pesadelo.',
		    'Infligge il 100% di danni in più ai nemici affetti da Incubo.',
		    'Fügt Gegnern, die von Albtraum betroffen sind, 100 % mehr Schaden zu.',
		    'ナイトメア状態の敵に100%多くのダメージを与える。',
		    '악몽 상태의 적에게 100% 더 많은 피해를 줍니다.',
		    '对受到噩梦影响的敌人造成100%更多伤害。',
		    'Zadaje o 100% więcej obrażeń wrogom dotkniętym Koszmarem.',
		]
	},
	burnSplash: {
		id: 'burnSplash',
		name: [
			'Burn Splash', 
			'Quemadura Splash', 
			'Brulure Splash', 
			'Queimadura Splash', 
			'Verbrennung Splash', 
			'Langsamer Platscher', 
			'ゆっくりはねる', 
			'느린 첨벙', 
			'緩慢飛濺', 
			'Spowalniający Plusk'
		],
		description: [
		    'Projectiles explode in an area, dealing half damage to nearby enemies and burning them.',
		    'Los proyectiles explotan en área, causando la mitad de daño a enemigos cercanos y quemándolos.',
		    'Les projectiles explosent dans une zone, infligeant la moitié des dégâts aux ennemis proches et les brûlant.',
		    'Os projéteis explodem em área, causando metade do dano aos inimigos próximos e os queimando.',
		    'I proiettili esplodono in un’area, infliggendo metà dei danni ai nemici vicini e bruciandoli.',
		    'Projektile explodieren in einem Bereich, fügen nahen Gegnern halben Schaden zu und versengen sie.',
		    '弾は範囲で爆発し、近くの敵に半分のダメージを与えて燃やす。',
		    '투사체가 범위 내에서 폭발하여 근처 적에게 절반의 피해를 주고 화상 상태로 만든다.',
		    '投射物在範圍內爆炸，對附近敵人造成一半傷害並灼燒其目標。',
		    'Pociski wybuchają na obszarze, zadając połowę obrażeń pobliskim wrogom i podpalając ich.',
		]
	},
	slowRicochet: {
		id: 'slowRicochet',
		name: [
    		'Slow Ricochet',
    		'Rebote Lento',
    		'Ricochet Lent',
    		'Ricochete Lento',
    		'Rimbalzo Lento',
    		'Langsamer Abpraller',
    		'スローリコシェ',
    		'슬로 리코셰',
    		'緩速跳彈',
    		'Powolny Rykoszet',
		],
		description: [
		    'Projectiles slow for 2 second and bounce between enemies.',
		    'Los proyectiles ralentizan 2 segundo y rebotan entre los enemigos.',
		    'Les projectiles ralentissent pendant 2 seconde et ricochent entre les ennemis.',
		    'Os projéteis desaceleram por 2 segundo e ricocheteiam entre os inimigos.',
		    'I proiettili rallentano per 2 secondo e rimbalzano tra i nemici.',
		    'Projektile verlangsamen 2 Sekunde lang und prallen zwischen Gegnern ab.',
		    '弾は2秒間減速し、敵の間で跳ね返る。',
		    '투사체가 2초 동안 둔화시키고 적 사이에서 튕깁니다.',
		    '投射物会减速2秒，并在敌人之间弹跳。',
		    'Pociski spowalniają na 2 sekundę i rykoszetują między wrogami.',
		]
	},
	torrent: {
		id: 'torrent',
		name: [
		  	"Torrent",
		  	"Torrente",
		  	"Torrent",
		  	"Torrent",
		  	"Acquaiuto",
		  	"Sturzbach",
		  	"げきりゅう",
		  	"급류",
		  	"激流",
		  	"Strumień"
		],
		description: [
		  	"Increases damage dealt by 75% if the user is in water and has less than 5 hearts.",
		  	"Aumenta el daño infligido en un 75% si el usuario está en agua y tiene menos de 5 corazones.",
		  	"Augmente les dégâts infligés de 75 % si l'utilisateur est dans l'eau et a moins de 5 cœurs.",
		  	"Aumenta o dano causado em 75% se o usuário estiver na água e tiver menos de 5 corações.",
		  	"Aumenta i danni inflitti del 75% se l'utilizzatore è in acqua e ha meno di 5 cuori.",
		  	"Erhöht den verursachten Schaden um 75 %, wenn der Anwender im Wasser ist und weniger als 5 Herzen hat.",
		  	"ユーザーが水中にいて、体力が5未満の場合、与えるダメージが75%増加する。",
		  	"사용자가 물속에 있고 체력이 5 이하일 때 가하는 피해가 75% 증가합니다.",
		  	"如果使用者在水中且少于5颗心，造成的伤害增加75%。",
		  	"Zwiększa zadawane obrażenia o 75%, jeśli użytkownik znajduje się w wodzie i ma mniej niż 5 serc."
		]
	},
	overgrow: {
		id: 'overgrow',
		name: [
		    "Overgrow",
		    "Espesura",
		    "Engrais",
		    "Espessaço",
		    "Erbaiuto",
		    "Notdünger",
		    "しんりょく",
		    "잎숨기",
		    "茂盛",
		    "Overgrow"
		],
		description: [
			"Increases damage dealt by 75% if the user is on grass and has less than 5 hearts.",
			"Aumenta el daño infligido en un 75% si el usuario está en hierba y tiene menos de 5 corazones.",
			"Augmente les dégâts infligés de 75 % si l'utilisateur est sur l'herbe et a moins de 5 cœurs.",
			"Aumenta o dano causado em 75% se o usuário estiver na grama e tiver menos de 5 corações.",
			"Aumenta i danni inflitti del 75% se l'utilizzatore è sull'erba e ha meno di 5 cuori.",
			"Erhöht den verursachten Schaden um 75 %, wenn der Anwender auf Gras steht und weniger als 5 Herzen hat.",
			"ユーザーがくさの上にいて、体力が5未満の場合、与えるダメージが75%増加する。",
			"사용자가 풀 위에 있고 체력이 5 이하일 때 가하는 피해가 75% 증가합니다.",
			"如果使用者在草地上且少于5颗心，造成的伤害增加75%。",
			"Zwiększa zadawane obrażenia o 75%, jeśli użytkownik znajduje się na trawie i ma mniej niż 5 serc."
		]
	},
	grassyTerrain: {
		id: 'grassyTerrain',
		name: [
		    "Grassy Terrain",
		    "Campo de Hierba",
		    "Champ Herbu",
		    "Campo de Grama",
		    "Campo Erboso",
		    "Grasfeld",
		    "グラスフィールド",
		    "그래스필드",
		    "青草场地",
		    "Trawiasty Teren"
		],
		description: [
		    "Field/Grass Pokemon can be placed on top of this Pokemon. Carried Pokémon reduces it recharge time by 15% and gains Grass bonuses.",
		    "Los Pokémon de Campo/Hierba pueden colocarse encima de este Pokémon. El Pokémon transportado reduce su tiempo de recarga en un 15% y aplica bonificaciones de Hierba.",
		    "Les Pokémon de Champ/Herbe peuvent être placés au-dessus de ce Pokémon. Le Pokémon porté réduit son temps de recharge de 15 % et applique des bonus d'Herbe.",
		    "Pokémon de Campo/Grama podem ser colocados em cima deste Pokémon. O Pokémon carregado reduz seu tempo de recarga em 15% e aplica bônus de Grama.",
		    "I Pokémon di Campo/Erba possono essere posizionati sopra questo Pokémon. Il Pokémon trasportato riduce il tempo di ricarica del 15% e applica bonus Erba.",
		    "Feld/Gras-Pokémon können auf dieses Pokémon gesetzt werden. Das getragene Pokémon verringert die Aufladezeit um 15 % und gewährt Gras-Boni.",
		    "フィールド/草タイプのポケモンをこのポケモンの上に置くことができます。乗せているポケモンのリチャージ時間を15%短縮し、草タイプのボーナスを適用します。",
		    "필드/풀 포켓몬을 이 포켓몬 위에 놓을 수 있습니다. 지니고 있는 포켓몬은 재충전 시간을 15% 단축하고 풀 보너스를 적용합니다.",
		    "场地/草属性宝可梦可以放置在此宝可梦之上。所携带的宝可梦会缩短15%的冷却时间并提供草属性加成。",
		    "Pokémony Pola/Trawy mogą być umieszczone na tym Pokémonie. Niosący Pokémon skraca czas odnowienia o 15% i nakłada trawiaste bonusy."
		]
	},
	magician: {
		id: 'magician',
		name: [
		    "Magician",
		    "Prestidigitador",
		    "Magicien",
		    "Mágico",
		    "Prestigiatore",
		    "Zauberer",
		    "マジシャン",
		    "매지션",
		    "魔术师",
		    "Magician"
		],
		description: [
			"Can hold an item that is already being used by another Pokémon.",
			"Puede llevar un objeto que esté siendo usado por otro Pokémon.",
			"Peut tenir un objet déjà utilisé par un autre Pokémon.",
			"Pode segurar um item que já esteja sendo usado por outro Pokémon.",
			"Può tenere un oggetto già utilizzato da un altro Pokémon.",
			"Kann einen Gegenstand halten, der bereits von einem anderen Pokémon benutzt wird.",
			"他のポケモンが使用している持ち物を持たせることができる。",
			"다른 포켓몬이 사용 중인 도구를 소지할 수 있습니다.",
			"可以携带已经被其他宝可梦使用的道具。",
			"Może trzymać przedmiot, który jest już używany przez innego Pokémona."
		]
	},
	makeItRain: {
		id: 'makeItRain',
		name: [
		  	"Make It Rain",
		  	"Fiebre Dorada",
		  	"Ruée d’Or",
		  	"Chuva de Dinheiro",
		  	"Corsa all’Oro",
		  	"Goldrausch",
		  	"ゴールドラッシュ",
		  	"골드러시",
		  	"淘金潮",
		  	"Make It Rain"
		],
		description: [
			"Deals an additional 5% damage for each digit in your all-time total amount of money.",
			"Inflige un 5% adicional de daño por cada dígito en el total histórico de dinero obtenido.",
			"Inflige 5 % de dégâts supplémentaires pour chaque chiffre du montant total d'argent accumulé depuis le début.",
			"Causa 5% de dano adicional para cada dígito no seu montante total histórico de dinheiro.",
			"Infligge un 5% di danno aggiuntivo per ogni cifra nella somma totale di denaro accumulata da sempre.",
			"Verursacht zusätzlichen 5% Schaden für jede Ziffer deines gesamten, jemals verdienten Geldbetrages.",
			"これまでに獲得した所持金の全合計の桁数ごとに、追加で5％のダメージを与える。",
			"역대 총 누적 금액의 각 자리수마다 추가로 5%의 피해를 입힌다.",
			"对你历史累计总金额的每一位数字造成额外5%的伤害。",
			"Zadaje dodatkowe 5% obrażeń za każdą cyfrę w całkowitej, historycznej kwocie pieniędzy."
		]
	},
  	invalidState: {
	    id: "invalidState",
	    name: [
			  	"Invalid State",
			  	"Estado Inválido",
			  	"État Invalide",
			  	"Estado Inválido",
			  	"Stato Non Valido",
			  	"Ungültiger Zustand",
			  	"無効状態",
			  	"잘못된 상태",
			  	"无效状态",
			  	"Nieprawidłowy Stan"
	    ],
    	description: [
	      	"Attacks have a 5% chance to apply a random status effect (burn, stun, slow, curse, nightmare, or poison).",
	      	"Los ataques tienen un 5% de probabilidad de aplicar un efecto de estado aleatorio (quemadura, aturdimiento, ralentización, maldición, pesadilla o veneno).",
	      	"Les attaques ont 5 % de chances d’appliquer un effet de statut aléatoire (brûlure, étourdissement, ralentissement, malédiction, cauchemar ou poison).",
	      	"Os ataques têm 5% de chance de aplicar um efeito de estado aleatório (queimadura, atordoamento, lentidão, maldição, pesadelo ou veneno).",
	      	"Gli attacchi hanno il 5% di probabilità di applicare un effetto di stato casuale (bruciatura, stordimento, rallentamento, maledizione, incubo o veleno).",
	      	"Angriffe haben eine Chance von 5 %, einen zufälligen Statuseffekt anzuwenden (Verbrennung, Betäubung, Verlangsamung, Fluch, Albtraum oder Gift).",
	      	"攻撃は5％の確率でランダムな状態異常（やけど、スタン、スロー、カース、ナイトメア、どく）を付与する。",
	      	"공격은 5% 확률로 무작위 상태 이상(화상, 기절, 둔화, 저주, 악몽, 독)을 부여합니다.",
	      	"攻击有5%的概率施加随机状态效果（灼伤、眩晕、减速、诅咒、噩梦或中毒）。",
	      	"Ataki mają 5% szansy na nałożenie losowego efektu statusu (oparzenie, ogłuszenie, spowolnienie, klątwa, koszmar lub trucizna)."
	    ]
  	},

	// lightningRod: {
	// 	id: 'lightningRod',
	// 	name: [
	// 		"Lightning Rod",
	// 		"Pararrayos",
	// 		"Paratonnerre",
	// 		"Binding Polygon",
	// 		"Parafulmine",
	// 		"Blitzfänger",
	// 		"ひらいしん",
	// 		"피뢰침",
	// 		"避雷针",
	// 		"Lightning Rod"
	// 	],
	// 	description: [
	// 		"Gain a charge every time a Pokémon within range is stunned (maximum 1 charge per second). Upon reaching 10 charges, its next attack does splash damage.",
	// 		"Gana una carga cada vez que un Pokémon dentro del alcance es aturdido (máximo 1 carga por segundo). Al alcanzar 10 cargas, su siguiente ataque causa daño en área.",
	// 		"Gagne une charge chaque fois qu’un Pokémon à portée est étourdi (maximum 1 charge par seconde). À 10 charges, sa prochaine attaque inflige des dégâts de zone.",
	// 		"Ganha uma carga sempre que um Pokémon dentro do alcance é atordoado (máximo de 1 carga por segundo). Ao atingir 10 cargas, o próximo ataque causa dano em área.",
	// 		"Ottiene una carica ogni volta che un Pokémon entro la portata viene stordito (massimo 1 carica al secondo). Raggiunte 10 cariche, il prossimo attacco infligge danni ad area.",
	// 		"Erhält jedes Mal eine Aufladung, wenn ein Pokémon in Reichweite betäubt wird (maximal 1 Aufladung pro Sekunde). Bei 10 Aufladungen verursacht der nächste Angriff Flächenschaden.",
	// 		"範囲内のポケモンがスタンされるたびにチャージを1つ獲得する（1秒につき最大1チャージ）。10チャージに達すると、次の攻撃が範囲ダメージになる。",
	// 		"범위 내의 포켓몬이 기절할 때마다 충전을 1회 획득합니다(초당 최대 1회). 충전이 10회에 도달하면 다음 공격이 광역 피해를 줍니다.",
	// 		"每当范围内的宝可梦被眩晕时获得1层充能（每秒最多1层）。达到10层充能后，下次攻击将造成范围伤害。",
	// 		"Zyskuje jedno naładowanie za każdym razem, gdy Pokémon w zasięgu zostanie ogłuszony (maksymalnie 1 naładowanie na sekundę). Po osiągnięciu 10 naładowań następny atak zadaje obrażenia obszarowe."
	// 	]
	// },
}


