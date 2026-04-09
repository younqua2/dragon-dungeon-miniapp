export const itemData = {
	ringTarget: {
		id: 'ringTarget',
		name: ['Ring Target', 'Blanco', 'Point de Mire', 'Alvo', 'Facilsaglio', 'Zielscheibe', 'ねらいのまと', '겨냥표적', '目標環', 'Ring Target'],
		sprite: './src/assets/images/items/ring-target.png',
		price: 1,
		description: [
			'Allows Spinda to choose attack target.',
			'Permite que Spinda elija el objetivo del ataque.',
			'Permet à Spinda de choisir la cible d’attaque.',
			'Permite que Spinda escolha o alvo do ataque.',
			"Permette a Spinda di scegliere il bersaglio dell'attacco.",
			'Ermöglicht es Pandir, das Angriffsziel zu wählen.',
			'パッチールは攻撃対象を選択できる。',
			'얼루기는 공격 대상을 선택할 수 있다。',
			'使晃晃斑可以選擇攻擊目標。',
			'Spinda może wybrać cel ataku.'
		],
		restriction: {
			id: [53]
		}
	},
	protein: { 
		id: 'protein',
		name: [
			"Protein",
			"Proteína",
			"Protéine",
			"Proteína",
			"Proteina",
			"Protein",
			"プロテイン",
			"타우린",
			"蛋白質",
			"Protein",
		],
		sprite: './src/assets/images/items/protein.png',
		price: 9800,
		description: [
			"The holder deals +15 damage.",
			"El portador del objeto causa +15 de daño.",
			"Le porteur inflige +15 de dégâts.",
			"O portador causa +15 de dano.",
			"Il portatore infligge +15 danni.",
			"Der Träger verursacht +15 Schaden.",
			"持たせたポケモンのダメージが+15される。",
			"소지자는 피해를 +15만큼 더 줍니다.",
			"持有者造成 +15 傷害。",
			"Posiadacz zadaje +15 obrażeń.",
		],
		restriction: {
			idForbidden: [19, 70, 404, 83, 101]
		},
	},
	carbos: { 
		id: 'carbos',
		name: [
			"Carbos",
			"Carburante",
			"Carbone",
			"Carbos",
			"Carbos",
			"Carbon",
			"カルボス",
			"알칼로이드",
			"速度強化劑",
			"Carbos",
		],
		sprite: './src/assets/images/items/carbos.png',
		price: 9800,
		description: [
			"Reduces recharge speed by 15%.",
			"Reduce la velocidad de recarga en un 15%.",
			"Réduit la vitesse de récupération de 15 %.",
			"Reduz a velocidade de recarga em 15%.",
			"Riduce la velocità di ricarica del 15%.",
			"Verringert die Nachladegeschwindigkeit um 15%.",
			"リチャージ速度が15%低下する。",
			"재충전 속도가 15% 감소합니다.",
			"充能速度降低 15%。",
			"Zmniejsza szybkość przeładowania o 15%."
		],
		restriction: {
			idForbidden: [19, 70, 404, 83, 101]
		},
	},
	lifeOrb: {
		id: 'lifeOrb',
		name: [
			"Life Orb",
			"Vidaesfera",
			"Orbe Vie",
			"Orbe da Vida",
			"Assorbisfera",
			"Leben-Orb",
			"いのちのたま",
			"생명의구슬",
			"生命寶珠",
			"Life Orb",
		],
		sprite: './src/assets/images/items/life-orb.png',
		price: 15000,
		description: [
			"Attacks no longer restore hearts. The holder gains +50% damage and -50% recharge time. Only Pokémon that restore hearts can hold it.",
			"Los ataques ya no restauran corazones. El portador gana +50% de daño y -50% de tiempo de recarga. Solo pueden llevarlo Pokémon que restauren corazones.",
			"Les attaques ne restaurent plus les cœurs. Le porteur gagne +50 % de dégâts et -50 % de temps de récupération. Seuls les Pokémon qui restaurent des cœurs peuvent le tenir.",
			"Os ataques não restauram mais corações. O portador ganha +50% de dano e -50% de tempo de recarga. Apenas Pokémon que restauram corações podem segurá-lo.",
			"Gli attacchi non ripristinano più i cuori. Il portatore ottiene +50% di danno e -50% di tempo di ricarica. Solo i Pokémon che ripristinano i cuori possono tenerlo.",
			"Angriffe stellen keine Herzen mehr wieder her. Der Träger erhält +50 % Schaden und -50 % Wiederaufladezeit. Nur Pokémon, die Herzen wiederherstellen, können es tragen.",
			"攻撃はもうハートを回復しません。持ち主はダメージ+50％、再充電時間-50％になります。ハートを回復するポケモンのみ装備可能です。",
			"공격은 더 이상 하트를 회복하지 않습니다. 장착자는 피해 +50% 및 재충전 시간 -50%를 얻습니다. 하트를 회복하는 포켓몬만 장착할 수 있습니다.",
			"攻擊不再回復愛心。持有者獲得 +50% 傷害並且充能時間 -50%。只有能回復愛心的寶可夢才能攜帶。",
			"Ataki nie przywracają serc. Posiadacz zyskuje +50% obrażeń i -50% czasu przeładowania. Mogą go nosić tylko Pokémony przywracające serca.",
		],
		restriction: {
			id: [21, 23, 27, 88]
		}
	},
	lightClay: {
		id: 'lightClay',
		name: ['Light Clay', 'Refleluz', 'Lumargile', 'Argila Luminosa', 'Creta Luce', 'Lichtlehm', 'ひかりのねんど', '빛의점토', '光之黏土', 'Light Clay'],
		sprite: './src/assets/images/items/light-clay.png',
		price: 20000,
		description: [
			"Increases the duration of stuns and slows by 10%.",
			"Incrementa la duración de los aturdimientos y ralentizaciones un 10%.",
			"Augmente la durée des étourdissements et des ralentissements de 10 %.",
			"Aumenta a duração de atordoamentos e lentidões em 10%.",
			"Aumenta la durata degli stordimenti e dei rallentamenti del 10%.",
			"Erhöht die Dauer von Betäubungen und Verlangsamungen um 10%.",
			"スタンとスローの持続時間が10％増加します。",
			"기절 및 느려짐 지속 시간이 10% 증가합니다.",
			"暈眩與減速效果的持續時間增加 10%。",
			"Wydłuża czas trwania ogłuszeń i spowolnień o 10%.",
		],
		restriction: {
			id: [54, 60, 20, 28, 42, 49, 5, 13, 15, 33, 34, 64, 72, 80, 97]
		}
	},
	twistedSpoon: {
		id: 'twistedSpoon',
		name: ['Twisted Spoon', 'Cuchara Torcida', 'Cuillère Tordue', 'Colher Torta', 'Cucchiaio Torto', 'Krummöffel', 'まがったスプーン', '휘어진스푼', '彎曲的湯匙', 'Twisted Spoon'],
		sprite: './src/assets/images/items/twisted-spoon.png',
		price: 20000,
		description: [
			"The Pokémon focuses on teleporting in place, at the cost of reducing stacking damage by 75%. Can only be held by Abra, Kadabra, or Alakazam.",
			"El Pokémon se enfoca en teletransportarse en el lugar, a costa de reducir el daño por acumulación en un 75%. Solo puede ser llevado por Abra, Kadabra o Alakazam.",
			"Le porteur se concentre sur la téléportation sur place, au prix d'une réduction de 75 % des dégâts par Cuillère Tordue. Ne peut être tenue que par Abra, Kadabra ou Alakazam.",
			"O Pokémon foca-se em teletransportar-se no lugar, ao custo de reduzir o dano por acumulação em 75%. Só pode ser segurado por Abra, Kadabra ou Alakazam.",
			"Il Pokémon si concentra nel teletrasportarsi sul posto, a costo di ridurre del 75% il danno da accumulo. Può essere tenuto solo da Abra, Kadabra o Alakazam.",
			"Das Pokémon konzentriert sich darauf, sich an Ort und Stelle zu teleportieren, auf Kosten einer 75%igen Reduzierung des Schadens pro Stapel. Kann nur von Abra, Kadabra oder Simsala getragen werden.",
			"このポケモンはその場でテレポートすることに専念するが、その代償として累積ダメージが75%減少する。持てるのはケーシィ、ユンゲラー、フーディンのみ。",
			"이 포켓몬은 제자리에서 텔레포트하는 데 집중하지만, 그 대가로 누적 피해가 75% 감소한다. 이 아이템은 캐이시, 윤겔라 또는 후딘만 지닐 수 있다.",
			"寶可夢專注於原地瞬間移動，但代價是累積傷害降低 75%。僅限凱西、勇基拉或胡地可攜帶。",
			"Pokémon skupia się na teleportowaniu w miejscu, kosztem zmniejszenia obrażeń narastających o 75%. Może go nosić tylko Abra, Kadabra lub Alakazam.",
		],
		restriction: {
			id: [68]
		}
	},
	clefairyDoll: { 
		id: 'clefairyDoll',
		name: [
			"Clefairy Doll",
			"Muñeca de Clefairy",
			"Poupée Mélofée",
			"Boneca Clefairy",
			"Bambola Clefairy",
			"Piepi-Puppe",
			"ピッピの人形",
			"삐삐 인형",
			"皮皮玩偶",
			"Clefairy Doll",
		],
		sprite: './src/assets/images/items/poke-doll.png',
		price: 25000,
		description: [
			"Restores 1 heart after dealing 25,000 damage, can only be held by Clefairy or Clefable.",
			"Restaura 1 corazón tras causar 25.000 de daño, solo puede ser llevado por Clefairy o Clefable.",
			"Restaure 1 cœur après avoir infligé 25 000 de dégâts, ne peut être tenu que par Mélofée ou Mélodelfe.",
			"Restaura 1 coração após causar 25.000 de dano, só pode ser segurado por Clefairy ou Clefable.",
			"Ripristina 1 cuore dopo aver inflitto 25.000 danni, può essere tenuto solo da Clefairy o Clefable.",
			"Stellt 1 Herz wieder her, nachdem 25.000 Schaden verursacht wurden. Kann nur von Piepi oder Pixi gehalten werden.",
			"25,000ダメージを与えた後、ハートを1つ回復する。ピッピまたはピクシーのみが持てる。",
			"25,000의 피해를 입힌 후 하트 1개를 회복합니다. 이 아이템은 삐삐 또는 픽시만 지닐 수 있습니다.",
			"造成 25,000 傷害後回復 1 顆愛心，只能由皮皮或皮可西攜帶。",
			"Przywraca 1 serce po zadaniu 25 000 obrażeń; mogą go nosić tylko Clefairy lub Clefable.",
		],
		restriction: {
			id: [62]
		}
	},
	amuletCoin: {
		id: 'amuletCoin',
		name: ['Amulet Coin', 'Moneda Amuleto', 'Pièce Rune', 'Moeda Amuleto', 'Moneta Amuleto', 'Münzamulett', 'おまもりこばん', '부적금화', '護符金幣', 'Amulet Coin',],
		sprite: './src/assets/images/items/amulet-coin.png',
		price: 25000,
		description: [
			"Attacks grant gold equal to 0.1% of the damage dealt per star obtained.",
			"Los ataques otorgan oro equivalente al 0.1% del oro del daño causado por cada estrella obtenida.",
			"Les attaques accordent de l’or équivalent à 0,1 % des dégâts infligés par étoile obtenue.",
			"Os ataques concedem ouro equivalente a 0,1% do dano causado por cada estrela obtida.",
			"Gli attacchi concedono oro pari allo 0,1% del danno inflitto per ogni stella ottenuta.",
			"Angriffe gewähren Gold in Höhe von 0,1 % des verursachten Schadens pro erhaltenem Stern.",
			"攻撃は、取得した星ごとに与えたダメージの0.1％に相当するゴールドを付与する。",
			"공격은 획득한 별마다 입힌 피해의 0.1%에 해당하는 골드를 제공합니다.",
			"攻击会根据获得的每颗星奖励相当于造成伤害0.1%的金币。",
			"Ataki przyznają złoto równe 0,1% zadanych obrażeń za każdą zdobywaną gwiazdkę."
		],
		restriction: {
			attackType: 'single'
		}
	},
	fertiliser: { 
		id: 'fertiliser',
		name: [
			"Fertiliser",
			"Fertilizante",
			"Engrais",
			"Fertilizante",
			"Fertilizzante",
			"Dünger",
			"肥料",
			"비료",
			"肥料",
			"Fertiliser",
		],
		sprite: './src/assets/images/items/rich.png',
		price: 25000,
		description: [
			"Field terrain instead behaves as grass for the holder.",
			"El terreno de campo en su lugar se comporta como hierba para el portador.",
			"Le terrain de type champ se comporte comme de l'herbe pour le porteur.",
			"O terreno de campo passa a se comportar como grama para o portador.",
			"Il terreno di tipo campo si comporta invece come erba per il portatore.",
			"Feldterrain verhält sich stattdessen wie Gras für den Träger.",
			"フィールドの地形は、持たせたポケモンにとって草地として扱われる。",
			"필드 지형이 소지한 포켓몬에게는 풀 지형처럼 작용합니다.",
			"對持有者而言，原本的場地地形會改為視作草地。",
			"Teren typu Pole jest traktowany przez posiadacza jak Trawa.",
		],
		restriction: {
			id: [1, 22, 26, 61, 76]
		}
	},
	heartScale: {
		id: 'heartScale',
		name: ["Heart Scale", "Escama Corazón", "Écaille Cœur", "Escama Coração", "Squama Cuore", "Herzschuppe", "ハートのウロコ", "하트비늘", "心之鱗片"],
		sprite: './src/assets/images/items/heart-scale.png',
		price: 50000,
		description: [
			"After recovering a heart, the Pokémon holding this item will have its recharge speed reduced by 50% for the rest of the wave.",
			"Tras recuperar un corazón, quien lleve este objeto verá reducida su velocidad de recarga un 50% por el resto de la oleada.",
			"Après avoir récupéré un cœur, le porteur verra sa vitesse de récupération réduite de 50 % pour le reste de la vague.",
			"Após recuperar um coração, o Pokémon que estiver segurando este item terá sua velocidade de recarga reduzida em 50% pelo resto da onda.",
			"Dopo aver recuperato un cuore, il Pokémon che tiene questo oggetto vedrà la sua velocità di ricarica ridotta del 50% per il resto dell'ondata.",
			"Nachdem ein Herz wiederhergestellt wurde, wird die Wiederaufladegeschwindigkeit des Pokémon, das diesen Gegenstand trägt, für den Rest der Welle um 50% reduziert.",
			"ハートを回復した後、このアイテムを持っているポケモンはウェーブ終了まで再充電速度が50％低下します。",
			"하트를 회복한 후 이 아이템을 장착한 포켓몬은 웨이브가 끝날 때까지 재충전 속도가 50% 감소합니다.",
			"在回復 1 顆愛心後，持有此道具的寶可夢在該波次剩餘時間內，充能速度降低 50%。",
			"Po odzyskaniu serca, szybkość przeładowania Pokémona trzymającego ten przedmiot spada o 50% do końca fali.",
		],
		restriction: {
			idForbidden: [70, 404, 19, 83, 101]
		}
	},
	squirtBottle: { 
		id: 'squirtBottle',
		name: [
			"Squirt Bottle",
			"Botella pulverizadora",
			"Carapuce à O",
			"Garrafa pulverizadora",
			"Bottiglia a spruzzo",
			"Schiggykanne",
			"スプレーボトル",
			"꼬부기물뿌리개",
			"噴水瓶"
		],
		sprite: './src/assets/images/items/squirt-bottle.png',
		price: 50000,
		description: [
			"Field terrain instead behaves as water for the holder.",
			"El terreno de campo en su lugar se comporta como agua para el portador.",
			"Le terrain de type champ se comporte comme de l’eau pour le porteur.",
			"O terreno de campo passa a se comportar como água para o portador.",
			"Il terreno di tipo campo si comporta invece come acqua per il portatore.",
			"Feldterrain verhält sich stattdessen wie Wasser für den Träger.",
			"フィールドの地形は、持たせたポケモンにとって水地形として扱われる。",
			"필드 지형이 소지한 포켓몬에게는 물 지형처럼 작용합니다.",
			"對持有者而言，原本的場地地形會改為視作水地形。",
			"Dla posiadacza teren Pole działa jak Woda.",
		],
		restriction: {
			id: [32, 35, 48, 58, 61, 93, 98]
		}
	},
	wideLens: {
		id: 'wideLens',
		name: ['Wide Lens', 'Lupa', 'Loupe', 'Lente Ampla', 'Grandelente', 'Großlinse', 'こうかくレンズ', '광각렌즈', '廣角鏡', 'Wide Lens'],
		sprite: './src/assets/images/items/wide-lens.png',
		price: 50000,
		description: [
			"Attack is 100% wider.",
			"El ataque es un 100% más ancho.",
			"L’attaque est 100% plus large.",
			"O ataque é 100% mais largo.",
			"L’attacco è più largo del 100%.",
			"Der Angriff ist 100% breiter.",
			"攻撃範囲が100％広くなる",
			"공격 범위가 100% 더 넓어집니다",
			"攻擊範圍增加 100%。",
			"Atak jest o 100% szerszy.",
		],
		restriction: {
			id: [10, 29, 34, 45, 54, 77, 15, 32, 81, 77, 85, 96, 97]
		}
	},
	choiceScarf: { 
		id: 'choiceScarf',
		name: ['Choice Scarf', 'Pañuelo Elegido', 'Mouchoir Choix', 'Lenço Escolha', 'Sciarpa Scelta', 'Wahlschal', 'こだわりスカーフ', '구애스카프', '拘束圍巾', 'Choice Scarf'],
		sprite: './src/assets/images/items/choice-scarf.png',
		price: 50000,
		description: [
			"Reduces the number of projectiles to one, but decreases recharge time by half for each lost projectile. Lileep and Cradily cannot hold this item.",
			"Reduce la cantidad de proyectiles a uno, pero disminuye el tiempo de recarga a la mitad por cada proyectil perdido. Lileep y Cradily no pueden llevar este objeto.",
			"Réduit le nombre de projectiles à un, mais diminue le temps de récupération de moitié pour chaque projectile perdu. Lilia et Vacylis ne peuvent pas tenir cet objet.",
			"Reduz o número de projéteis para um, mas diminui o tempo de recarga pela metade para cada projétil perdido. Lileep e Cradily não podem segurar este item.",
			"Riduce il numero di proiettili a uno, ma diminuisce il tempo di ricarica della metà per ogni proiettile perso. Lileep e Cradily non possono tenere questo oggetto.",
			"Reduziert die Anzahl der Projektile auf eins, verringert jedoch die Nachladezeit um die Hälfte für jedes verlorene Projektil. Lileep und Cradily können diesen Gegenstand nicht halten.",
			"弾の数を1に減らすが、失った弾ごとに再装填時間が半分になる。リリーラとラクライはこのアイテムを持てない。",
			"투사체 수를 1로 줄이지만, 잃은 투사체마다 재장전 시간이 절반으로 감소합니다. 릴링와 릴리요는 이 아이템을 들 수 없습니다.",
			"將投射物數量減少為 1，但每失去 1 個投射物，充能時間就會縮短一半。觸手百合與搖籃百合無法攜帶此道具。",
			"Zmniejsza liczbę pocisków do jednego, ale skraca czas przeładowania o połowę za każdy utracony pocisk. Lileep i Cradily nie mogą nosić tego przedmiotu."
		],
		restriction: {
			id: [24, 37, 47, 51, 56, 59, 67, 75, 85]
		}
	},
	airBalloon: {
		id: 'airBalloon',
		name: ['Air Balloon', 'Globo Helio', 'Ballon', 'Balão de Ar', 'Palloncino', 'Luftballon', 'ふうせん', '풍선', '氣球', "Air Balloon"],
		sprite: './src/assets/images/items/air-balloon.png',
		price: 50000,
		description: [
		  	"Allows Field/Grass Pokémon to be placed in Mountain terrain.",
		  	"Permite colocar Pokémon de Campo/Hierba en terreno de Montaña.",
		  	"Permet de placer des Pokémon de Champ/Herbes sur un terrain Montagne.",
		  	"Permite que Pokémon de Campo/Relva sejam colocados em terreno de Montanha.",
		  	"Consente di posizionare Pokémon di Campo/Erba su terreno Montagna.",
		  	"Ermöglicht es, Feld-/Gras-Pokémon in Berg-Gelände zu platzieren.",
		  	"フィールド／草タイプのポケモンを山の地形に配置できる。",
		  	"필드/풀 포켓몬을 산 지형에 배치할 수 있다.",
		  	"可將場地／草地寶可夢配置在山地地形。",
		  	"Pozwala umieszczać Pokémony z terenu Pole/Trawa na terenie Gór."
		],
		restriction: {
			tileForbidden: [3, 4]
		}
	},
	oldRod: { 
		id: 'oldRod',
		name: [
			"Old Rod",
			"Caña Vieja",
			"Canne",
			"Vara Velha",
			"Vecchia Canna",
			"Alte Angel",
			"ボロのつりざお",
			"낡은 낚싯대",
			"破舊釣竿",
			"Old Rod",
		],
		sprite: './src/assets/images/items/old-rod.png',
		price: 50000,
		description: [
			"Increases range by 75. Can only be held by Magikarp or Gyarados.",
			"Aumenta el alcance en 75. Solo puede ser llevado por Magikarp o Gyarados.",
			"Augmente la portée de 75. Ne peut être tenue que par Magicarpe ou Léviator.",
			"Aumenta o alcance em 75. Só pode ser segurado por Magikarp ou Gyarados.",
			"Aumenta la portata di 75. Può essere tenuto solo da Magikarp o Gyarados.",
			"Reichweite wird um 75 erhöht. Kann nur von Karpador oder Garados getragen werden.",
			"射程が60増加する。コイキングまたはギャラドスのみが持てる。",
			"사거리가 75 증가합니다. 잉어킹 또는 갸라도스만 이 아이템을 들 수 있습니다.",
			"射程增加 75。僅限鯉魚王或暴鯉龍攜帶。",
			"Zwiększa zasięg o 75. Może go nosić tylko Magikarp lub Gyarados.",
		],
		restriction: {
			id: [71]
		}
	},
	heatRock: {
		id: 'heatRock',
		name: [
			"Heat Rock",
			"Roca Calor",
			"Roche Chaude",
			"Rocha de Calor",
			"Roccia Solare",
			"Heißbrocken",
			"ひでりのいし",
			"뜨거운바위",
			"熱岩",
			"Heat Rock",
		],
		sprite: './src/assets/images/items/heat-rock.png',
		price: 50000,
		description: [
			'Burn chances are boosted up to 100%. Can only be held by Torkoal.',
			'La probabilidad de quemadura aumenta hasta 100%. Solo puede ser llevado por Torkoal.',
			'Les chances de brûlure sont augmentées jusqu’à 100 %. Ne peut être porté que par Chartor.',
			'A probabilidade de queimadura aumenta até 100%. Só pode ser usado por Torkoal.',
			'Le probabilità di bruciatura aumentano fino al 100%. Può essere portato solo da Torkoal.',
			'Die Brandwahrscheinlichkeit steigt auf 100 %. Kann nur von Qurtel getragen werden.',
			'やけどの確率が最大100％になる。ドータクンしか持てない。',
			'화상 확률이 최대 100%까지 증가한다. 토르코알만 지닐 수 있다.',
			'灼烧几率提高至100%。只能由炎王龙携带。',
			'Prawdopodobieństwo spalenia wzrasta do 100%. Może być trzymany tylko przez Torkoal.'
		],
		restriction: {
			id: [52]
		}
	},
	dampMulch: { 
		id: 'dampMulch',
		name: [
			"Damp Mulch",
			"Mantillo Húmedo",
			"Fertihumide",
			"Cobertura Úmida",
			"Pacciamanto Umido",
			"Feuchtmulch",
			"しめりけのマルチ",
			"축축이비료",
			"濕潤覆蓋物",
			"Damp Mulch",
		],
		sprite: './src/assets/images/items/damp.png',
		price: 50000,
		description:[
		  	"Allows strictly Water Pokémon to be placed on Field.",
		  	"Permite colocar exclusivamente Pokémon de Agua en el Campo.",
		  	"Permet de placer uniquement des Pokémon de type Eau sur le Champ.",
		  	"Permite que apenas Pokémon de Água sejam colocados no Campo.",
		  	"Consente di posizionare esclusivamente Pokémon di tipo Acqua sul Campo.",
		  	"Ermöglicht es, ausschließlich Wasser-Pokémon auf dem Feld zu platzieren.",
		  	"水タイプのポケモンのみをフィールドに配置できる。",
		  	"물 타입 포켓몬만 필드에 배치할 수 있다.",
		  	"僅限水屬性寶可夢可配置在場地。",
		  	"Pozwala umieszczać wyłącznie Pokémony typu Woda na terenie Pola."
		],
		restriction: {
			tileForbidden: [1, 2, 4]
		}
	},
	softSand: { 
		id: 'softSand',
		name: [
			"Soft Sand",
			"Arena Fina",
			"Sable Doux",
			"Pudersand",
			"Sabbia Soffice",
			"Pudersand",
			"やわらかいすな",
			"부드러운모래",
			"柔软沙子",
			"Soft Sand",
		],
		sprite: './src/assets/images/items/soft-sand.png',
		price: 50000,
		description: [
			"Increases damage dealt by 100%, but is reduced by half for each enemy hit. Only for area Pokémon.",
			"Aumenta el daño infligido en un 100%, pero se reduce a la mitad por cada enemigo golpeado. Solo para Pokémon de área.",
			"Augmente les dégâts infligés de 100 %, mais sont réduits de moitié pour chaque ennemi touché. Uniquement pour les Pokémon de zone.",
			"Aumenta o dano causado em 100%, mas é reduzido à metade para cada inimigo atingido. Apenas para Pokémon de área.",
			"Aumenta i danni inflitti del 100%, ma vengono dimezzati per ogni nemico colpito. Solo per Pokémon d'area.",
			"Erhöht den verursachten Schaden um 100 %, wird jedoch für jeden getroffenen Gegner halbiert. Nur für Flächen-Pokémon.",
			"与えるダメージが100％増加するが、攻撃が当たった敵ごとに半分になる。範囲ポケモン専用。",
			"가하는 피해가 100% 증가하지만, 적에게 맞을 때마다 절반으로 감소합니다. 범위 포켓몬 전용.",
			"造成的伤害增加100%，但每命中一个敌人伤害减半。仅限范围宝可梦。",
			"Zwiększa zadawane obrażenia o 100%, ale zmniejsza się o połowę za każdego trafionego wroga. Tylko dla Pokémonów obszarowych."
		],
		restriction: {
			attackType: 'area'
		}
	},
	heavyDutyBoots: {
		id: 'heavyDutyBoots',
		name: ['Heavy-Duty Boots', 'Botas Gruesas', 'Grosses Bottes', 'Botas Grossas', 'Scarponi robusti', 'Plateauschuhe', 'あつぞこブーツ', '통굽부츠', '厚底靴', 'Heavy-Duty Boots',],
		sprite: './src/assets/images/items/heavy-duty-boots.png',
		price: 50000,
		description: [
		  	"Allows Field/Mountain Pokémon to be placed in Grass terrain.",
		  	"Permite colocar Pokémon de Campo/Montaña en terreno de Hierba.",
		  	"Permet de placer des Pokémon de Champ/Montagne sur un terrain Herbes.",
		  	"Permite que Pokémon de Campo/Montanha sejam colocados em terreno de Relva.",
		  	"Consente di posizionare Pokémon di Campo/Montagna su terreno Erba.",
		  	"Ermöglicht es, Feld-/Berg-Pokémon in Gras-Gelände zu platzieren.",
		  	"フィールド／山のポケモンを草の地形に配置できる。",
		  	"필드/산 포켓몬을 풀 지형에 배치할 수 있다.",
		  	"可將場地／山地寶可夢配置在草地地形。",
		  	"Pozwala umieszczać Pokémony z terenu Pole/Góry na terenie Trawy."
		],
		restriction: {
			tileForbidden: [2, 3]
		}
	},
	shieldBreakerBullet: { 
		id: 'shieldBreakerBullet',
		name: ['Shield Breaker Bullet', 'Bala Rompeescudos', 'Balle Perçante', 'Projétil Quebrador de Escudo', 'Proiettile Spaccascudo', 'Schildbrecher-Kugel', 'シールドブレイカーバレット', '실드 브레이커 탄환', '破盾子彈', 'Shield Breaker Bullet'],
		sprite: './src/assets/images/items/iron-ball.png',
		price: 50000,
		description: [
			"Deals double damage to armor, can only be held by Clauncher or Clawitzer. Increase recharge time by 2 seconds.",
			"Inflige el doble de daño a la armadura, solo puede ser sostenido por Clauncher o Clawitzer. Aumenta el tiempo de recarga en 2 segundos.",
			"Inflige le double de dégâts à l’armure, ne peut être tenu que par Flingouste ou Gamblast. Augmente le temps de récupération de 2 secondes.",
			"Causa o dobro de dano à armadura, só pode ser segurado por Clauncher ou Clawitzer. Aumenta o tempo de recarga em 2 segundos.",
			"Infligge il doppio dei danni all'armatura, può essere tenuto solo da Clauncher o Clawitzer. Aumenta il tempo di ricarica di 2 secondi.",
			"Verursacht doppelten Schaden an der Rüstung, kann nur von Scampisto oder Wummer gehalten werden. Erhöht die Nachladezeit um 2 Sekunden.",
			"アーマーに対して2倍のダメージを与え、ウデッポウまたはブロスターのみが装備可能です。再充電時間が2秒増加します。",
			"방어구에 두 배의 피해를 주며, 완철포 또는 블로스터만 장착할 수 있습니다. 재충전 시간이 2초 증가합니다.",
			"對護甲造成 2 倍傷害，僅限鐵臂槍蝦或鋼炮臂蝦攜帶。充能時間增加 2 秒。",
			"Zadaje podwójne obrażenia pancerzowi. Mogą go nosić tylko Clauncher lub Clawitzer. Zwiększa czas przeładowania o 2 s.",
		],
		restriction: {
			id: [29]
		}
	},
	shellBell: { 
		id: 'shellBell', 
		name: ['Shell Bell', 'Cascabel Concha', 'Grelot Coque', 'Sino de Concha', 'Conchinella', 'Muschelglocke', 'かいがらのすず', '조개껍질방울', '貝殼鈴', 'Shell Bell',],
		sprite: './src/assets/images/items/shell-bell.png',
		price: 50000,
		description: [
			"Once per round, restores 1 heart after dealing 50,000 damage.",
			"Una vez por ronda, regenera 1 corazón tras causar 50.000 de daño.",
			"Une fois par tour, restaure 1 cœur après avoir infligé 50 000 dégâts.",
			"Uma vez por rodada, regenera 1 coração após causar 50.000 de dano.",
			"Una volta per turno, rigenera 1 cuore dopo aver inflitto 50.000 danni.",
			"Einmal pro Runde stellt es 1 Herz wieder her, nachdem 50.000 Schaden verursacht wurden.",
			"1ラウンドに1回、50,000ダメージを与えた後、ハートを1つ回復する。",
			"한 라운드에 한 번, 50,000의 피해를 입힌 후 하트 1개를 회복합니다.",
			"每回合一次，在造成 50,000 傷害後回復 1 顆愛心。",
			"Raz na falę przywraca 1 serce po zadaniu 50 000 obrażeń.",
		],
		restriction: {
			idForbidden: [70, 404, 19, 83, 101]
		},
	},
	stickyBarb: { 
		id: 'stickyBarb',
		name: [
			"Sticky Barb",
			"Pincho pegajoso",
			"Piquants",
			"Espinho pegajoso",
			"Aculeo appiccicoso",
			"Klettdorn",
			"スティッキーバーブ",
			"끈적끈적바늘",
			"黏黏刺",
			'Sticky Barb',
		],
		sprite: './src/assets/images/items/sticky-barb.png',
		price: 50000,
		description: [
			"Increases damage by 25% to slowed or stunned enemies. Only for Pokémon that can be deployed in water.",
			"Aumenta un 25% el daño a enemigos sloweados o stuneados. Solo para Pokémon que puedan ser desplegados en agua.",
			"Augmente les dégâts de 25 % aux ennemis ralentis ou étourdis. Seulement pour les Pokémon pouvant être envoyés dans l'eau.",
			"Aumenta o dano em 25% aos inimigos lentos ou atordoados. Apenas para Pokémon que podem ser implantados na água.",
			"Aumenta del 25% il danno ai nemici rallentati o storditi. Solo per i Pokémon che possono essere schierati in acqua.",
			"Erhöht den Schaden um 25% an verlangsamten oder betäubten Gegnern. Nur für Pokémon, die im Wasser eingesetzt werden können.",
			"スローまたはスタン状態の敵に与えるダメージが25%増加する。水上に展開できるポケモンのみ。",
			"느려지거나 기절한 적에게 가하는 피해가 25% 증가합니다. 물에서 배치할 수 있는 포켓몬만 해당됩니다.",
			"對處於減速或暈眩狀態的敵人造成的傷害提高 25%。僅限可部署於水中的寶可夢。",
			"Zwiększa obrażenia o 25% przeciw spowolnionym lub ogłuszonym wrogom. Tylko dla Pokémonów, które można rozstawiać w wodzie.",
		],
		restriction: {
			tile: [3]
		}
	},
	starCandy: { 
		id: 'starCandy',
		name: ["Star Candy", "Caramelo Estrella", "Bonbon Étoile", "Doce Estrela", "Caramella Stella", "Sternbonbon", "スターキャンディ", "스타사탕공예", "星星糖果", "Star Candy"],
		sprite: './src/assets/images/items/star-sweet.png',
		price: 50000,
		description: [
			"Gain 0.1 additional range every star, can only be held by Clefairy or Clefable.",
			"Gana 0.1 de alcance adicional por cada estrella, solo puede ser sostenido por Clefairy o Clefable.",
			"0,1 de portée supplémentaire par étoile, ne peut être tenue que par Mélofée ou Mélodelfe.",
			"Ganha 0,1 de alcance adicional por cada estrela, só pode ser segurado por Clefairy ou Clefable.",
			"Ottieni 0,1 di gittata aggiuntiva per ogni stella, può essere tenuto solo da Clefairy o Clefable.",
			"Erhält 0,1 zusätzliche Reichweite pro Stern, kann nur von Piepi oder Pixi getragen werden.",
			"星ごとに0.1の追加射程を得ることができ、ピッピまたはピクシーのみが装備可能です。",
			"별마다 0.1의 추가 사거리를 얻으며, 삐삐 또는 픽시만 장착할 수 있습니다.",
			"每獲得 1 顆星星，射程額外增加 0.1。僅限皮皮或皮可西攜帶。",
			"Zyskujesz dodatkowe 0,1 zasięgu za każdą gwiazdkę. Mogą go nosić tylko Clefairy lub Clefable.",
		],
		restriction: {
			id: [62]
		}
	},
	electirizer: { 
		id: 'electirizer',
		name: [
			"Electirizer",
			"Electrizador",
			"Électriseur",
			"Electrizer",
			"Elettrizzatore",
			"Stromisierer",
			"エレクトライザー",
			"에레키부스터",
			"電力增幅器",
			"Electirizer",
		],
		sprite: './src/assets/images/items/electirizer.png',
		price: 50000,
		description: [
			"Deals 30% extra damage to stunned enemies. Only Pokémon that can cause stun can equip it.",
			"Hace 30% de daño extra a enemigos aturdidos. Solo pueden equiparlo Pokémon que causen aturdimiento.",
			"Inflige 30 % de dégâts supplémentaires aux ennemis étourdis. Seuls les Pokémon capables d'étourdir peuvent l'équiper.",
			"Causa 30% de dano extra a inimigos atordoados. Apenas Pokémon que podem causar atordoamento podem equipá-lo.",
			"Infligge il 30% di danno extra ai nemici storditi. Solo i Pokémon che possono causare stordimento possono equipaggiarlo.",
			"Verursacht 30% zusätzlichen Schaden an betäubten Gegnern. Nur Pokémon, die Betäubung verursachen können, können es ausrüsten.",
			"スタン状態の敵に対して30%追加ダメージを与える。スタンを与えられるポケモンのみ装備可能。",
			"기절한 적에게 30% 추가 피해를 입힌다. 스턴을 일으킬 수 있는 포켓몬만 장착 가능.",
			"對陷入暈眩狀態的敵人造成額外 30% 傷害。僅限能造成暈眩的寶可夢裝備。",
			"Zadaje o 30% więcej obrażeń ogłuszonym wrogom. Tylko dla Pokémonów, które potrafią ogłuszać.",
		],
		restriction: {
			id: [5, 13, 15, 33, 34, 72]
		}
	},
	cellBattery: { 
		id: 'cellBattery',
		name: [
		    "Cell Battery",
		    "Batería Celular",
		    "Pile",
		    "Bateria Celular",
		    "Batteria Cellulare",
		    "Akku",
		    "セルバッテリー",
		    "충전지",
		    "電池組",
			"Cell Battery",
		],
		sprite: './src/assets/images/items/cell-battery.png',
		price: 50000,
		description: [
			"Increases damage by 50% and all attacks cause flinching, but the duration is reduced by 95%. Can only be held by Voltorb or Electrode.",
			"Aumenta el daño un 50% y todos los ataques causan aturdimiento, pero la duración del mismo se reduce un 95%. Solo puede ser llevado por Voltorb o Electrode.",
			"Augmente les dégâts de 50 % et toutes les attaques provoquent la peur, mais la durée est réduite de 95 %. Ne peut être tenu que par Voltorbe ou Électrode.",
			"Aumenta o dano em 50% e todos os ataques causam atordoamento, mas a duração é reduzida em 95%. Só pode ser usado por Voltorb ou Electrode.",
			"Aumenta i danni del 50% e tutti gli attacchi causano stordimento, ma la durata è ridotta del 95%. Può essere tenuto solo da Voltorb o Electrode.",
			"Erhöht den Schaden um 50 % und alle Angriffe verursachen Rückzug, aber die Dauer wird um 95 % reduziert. Nur von Voltorb oder Electrode tragbar.",
			"ダメージが50％増加し、すべての攻撃はひるみを与えるが、持続時間は95％減少する。ボルトロスまたはエレブーのみ装備可能。",
			"피해가 50% 증가하고 모든 공격이 깜짝놀라기를 일으키지만, 지속 시간은 95% 감소합니다. 볼토르 또는 일렉트로드만 착용 가능.",
			"伤害增加50%，所有攻击会导致畏缩，但持续时间减少95%。仅限电球或顽皮弹携带。",
			"Zwiększa obrażenia o 50% i wszystkie ataki powodują cofnięcie się, ale czas trwania jest skrócony o 95%. Może być noszony tylko przez Voltorb lub Electrode."
		],
		restriction: {
			id: [5]
		}
	},
	leek: {
		id: 'leek',
		name: ['Leek', 'Puerro', 'Poireau', 'Alho-poró', 'Porro', 'Lauch', 'ネギ', '대파', '大蔥', "Leek"],
		sprite: './src/assets/images/items/leek.png',
		price: 50000,
		description: [
			"Doubles critical hit chance and critical damage, can only be held by Farfetch'd.",
			"Duplica la probabilidad de crítico y el daño crítico, solo puede ser sostenido por Farfetch'd.",
			"Double la chance de coup critique et les dégâts critiques, ne peut être tenu que par Canarticho.",
			"Duplica a chance de acerto crítico e o dano crítico, só pode ser segurado por Farfetch'd.",
			"Raddoppia la probabilità di colpo critico e il danno critico, può essere tenuto solo da Farfetch'd.",
			"Verdoppelt die Chance auf einen kritischen Treffer und den kritischen Schaden, kann nur von Porenta gehalten werden.",
			"急所に当たる確率と急所ダメージが2倍になり、カモネギのみが装備可能です。",
			"치명타 확률과 치명타 피해가 2배가 되며, 파오리만 장착할 수 있습니다.",
			"暴擊率與暴擊傷害加倍，僅限大蔥鴨攜帶。",
			"Podwaja szansę na trafienie krytyczne i obrażenia krytyczne. Może go nosić tylko Farfetch'd.",
		],
		restriction: { 
			id: [57]
		}
	},
	thickClub: {
		id: 'thickClub',
		name: ['Thick Club', 'Hueso Grueso', 'Masse Os', 'Osso Grosso', 'Ossospesso', 'Kampfknochen', 'ふといホネ', '굵은뼈', '粗骨頭', 'Thick Club',],
		sprite: './src/assets/images/items/thick-club.png',
		price: 75000,
		description: [
			'Increases damage dealt by 50%, can only be held by Cubone, Marowak, Lucario or Riolu.',
			'Aumenta el daño causado un 50%, solo puede llevarlo Cubone, Marowak, Lucario o Riolu.',
			'Augmente les dégâts infligés de 50 %, ne peut être portée que par Osselait, Ossatueur, Lucario ou Riolu.',
			'Aumenta o dano causado em 50%, só pode ser equipado por Cubone, Marowak, Lucario ou Riolu.',
			'Aumenta i danni inflitti del 50%, può essere indossato solo da Cubone, Marowak, Lucario o Riolu.',
			'Erhöht den verursachten Schaden um 50%, kann nur von Tragosso, Knogga, Lucario oder Riolu getragen werden.',
			'与えるダメージが50%増加する。カラカラ、ガラガラ、ルカリオ、リオルのみが所持可能。',
			'입히는 데미지가 50% 증가한다. 탕구리, 텅구리, 루카리오 또는 리오르만 소지할 수 있습니다.',
			'造成的傷害提高 50%。仅限卡拉卡拉、嘎啦嘎啦、路卡利欧或利欧路持有。',
			'Zwiększa zadawane obrażenia o 50%. Może go nosić tylko Cubone, Marowak, Lucario lub Riolu.',
		],
		restriction: {
			id: [11, 45]
		}
	},
	lightBall: {
		id: 'lightBall',
		name: ["Light Ball","Bola luminosa","Balle Lumière","Bola luminosa","Palla luminosa","Kugelblitz","ライトボール","전기구슬","電氣球", "Light Ball"],
		sprite: './src/assets/images/items/light-ball.png',
		price: 75000,
		description: [
			"Increases damage dealt by 50%, can only be held by Pikachu or Raichu.",
			"Aumenta el daño infligido en un 50%, solo puede ser llevado por Pikachu o Raichu.",
			"Augmente les dégâts infligés de 50 %, ne peut être tenue que par Pikachu ou Raichu.",
			"Aumenta o dano causado em 50%, só pode ser segurado por Pikachu ou Raichu.",
			"Aumenta il danno inflitto del 50%, può essere tenuto solo da Pikachu o Raichu.",
			"Erhöht den verursachten Schaden um 50%, kann nur von Pikachu oder Raichu getragen werden.",
			"与えるダメージが50%増加する。ピカチュウまたはライチュウにのみ持たせることができる。",
			"가하는 피해가 50% 증가하며, 피카츄 또는 라이츄만 지닐 수 있습니다.",
			"造成的傷害提高 50%，僅限皮卡丘或雷丘攜帶。",
			"Zwiększa zadawane obrażenia o 50%. Może go nosić tylko Pikachu lub Raichu.",
		],
		restriction: {
			id: [72]
		}
	},
	nanabBerry: { 
		id: 'nanabBerry',
		name: [
			"Nanab Berry",
			"Baya Nanab",
			"Baie Nanab",
			"Baya Nanab",
			"Bacca Nanab",
			"Nanabbeere",
			"ナナのみ",
			"나나열매",
			"蕉香果",
			"Nanab Berry"
		],
		sprite: './src/assets/images/items/nanab-berry.png',
		price: 75000,
		description: [
			"Increases range by 30%, damage by 50%, and recharge by 25%. Can only be held by apes.",
			"Aumenta el alcance en un 30%, el daño en un 50% y la recarga en un 25%. Solo puede ser llevado por simios.",
			"Augmente la portée de 30 %, les dégâts de 50 % et le temps de recharge de 25 %. Ne peut être tenu que par des singes.",
			"Aumenta o alcance em 30%, o dano em 50% e o recarregamento em 25%. Só pode ser usado por símios.",
			"Aumenta la gittata del 30%, il danno del 50% e il tempo di ricarica del 25%. Può essere tenuto solo dagli scimmioni.",
			"Erhöht die Reichweite um 30 %, den Schaden um 50 % und die Wiederaufladezeit um 25 %. Kann nur von Affen getragen werden.",
			"射程が30％増加し、ダメージが50％増加、再使用時間が25％短縮される。猿のみが装備可能。",
			"사정거리가 30%, 피해가 50%, 재사용 시간이 25% 증가합니다. 유인원만 착용 가능.",
			"射程增加30%，伤害增加50%，充能时间增加25%。只能由猿类宝可梦携带。",
			"Zwiększa zasięg o 30%, obrażenia o 50% i czas odnowienia o 25%. Może być używany tylko przez małpy."
		],
		restriction: {
			id: [8, 9]
		}
	},
	bigRoot: {
		id: 'bigRoot',
		name: [
			'Big Root',
			'Raíz Grande',
			'Grosse Racine',
			'Raiz Grande',
			'Radice Grande',
			'Großwurzel',
			'おおきなねっこ',
			'큰뿌리',
			'大根莖',
			'Big Root',
		],
		sprite: './src/assets/images/items/big-root.png',
		price: 80000,
		description: [
			'Doubles hearts restored.',
			'Duplica los corazones restaurados.',
			'Double les cœurs restaurés.',
			'Dobra os corações restaurados.',
			'Raddoppia i cuori ripristinati.',
			'Verdoppelt die Anzahl wiederhergestellter Herzen.',
			'回復するハートが2倍になる。',
			'회복되는 하트가 2배가 된다.',
			'回復的愛心數量加倍。',
			"Podwaja przywracane serca."
		],
		restriction: {
			id: [21, 23, 27, 88]
		}
	},
	sprayduck: {
		id: 'sprayduck',
		name: [
			"Sprayduck",
			"Psydugadera",
			"Kwakarrosoir",
			"Sprayduck",
			"Sprayduck",
			"Enton-Kanne",
			"コダックじょうろ",
			"고라파덕물뿌리개",
			"可达鸭喷壶",
			"Sprayduck"
		],
		sprite: './src/assets/images/items/sprayduck.png',
		price: 100000,
		description: [
			"The projectiles explode in an area, causing half damage to nearby enemies. Can only be held by Psyduck or Golduck.",
			"Los proyectiles explotan en área, causando la mitad de daño a los enemigos cercanos. Solo puede ser llevado por Psyduck o Golduck.",
			"Les projectiles explosent en zone, infligeant la moitié des dégâts aux ennemis à proximité. Ne peut être tenu que par Psykokwak ou Akwakwak.",
			"Os projéteis explodem em área, causando metade do dano aos inimigos próximos. Só pode ser segurado por Psyduck ou Golduck.",
			"I proiettili esplodono in un'area, causando la metà del danno ai nemici vicini. Può essere tenuto solo da Psyduck o Golduck.",
			"Die Projektile explodieren in einem Bereich und verursachen nahe Gegnern die Hälfte des Schadens. Kann nur von Enton oder Entoron getragen werden.",
			"弾が範囲で爆発し、周囲の敵に対してダメージの半分を与える。コダックまたはゴルダックのみが所持できる。",
			"투사체가 범위로 폭발하여 주변 적들에게 피해의 절반을 입힌다. 고라파덕 또는 골덕만 이 아이템을 지닐 수 있습니다.",
			"投射物会在范围内爆炸，对附近敌人造成一半伤害。仅可由可达鸭或哥达鸭携带。",
			"Pociski wybuchają na obszarze, zadając połowę obrażeń pobliskim wrogom. Może go nosić tylko Psyduck lub Golduck.",
		],
		restriction: {
			id: [35]
		}
	},
	razorClaw: { 
		id: 'razorClaw',
		name: [
			"Razor Claw",
			"Garra Afilada",
			"Griffe Rasoir",
			"Garra Afiada",
			"Affilartigli",
			"Scharfklaue",
			"するどいツメ",
			"예리한손톱",
			"銳利之爪",
			"Razor Claw",
		],
		sprite: './src/assets/images/items/razor-claw.png',
		price: 100000,
		description: [
			"Critical hits slow the target for 0.2 seconds. Pokémon that apply any status effects cannot hold this item.",
			"Los críticos ralentizan al objetivo durante 0,2 segundos. No pueden llevarlo Pokémon que apliquen algún efecto de estado.",
			"Les coups critiques ralentissent la cible pendant 0,2 seconde. Les Pokémon qui appliquent des effets de statut ne peuvent pas tenir cet objet.",
			"Os golpes críticos desaceleram o alvo por 0,2 segundos. Pokémon que aplicam efeitos de estado não podem segurar este item.",
			"I colpi critici rallentano il bersaglio per 0,2 secondi. I Pokémon che applicano effetti di stato non possono tenere questo oggetto.",
			"Kritische Treffer verlangsamen das Ziel für 0,2 Sekunden. Pokémon, die Statusveränderungen verursachen, können diesen Gegenstand nicht tragen.",
			"クリティカルヒットは対象を0.2秒間スロー状態にする。状態異常を付与するポケモンはこのアイテムを持てない。",
			"치명타는 대상에게 0.2초 동안 둔화를 적용합니다. 상태 이상을 부여하는 포켓몬은 이 아이템을 장착할 수 없습니다.",
			"會心一擊會使目標減速 0.2 秒。可施加任何異常狀態的寶可夢無法攜帶此道具。",
			"Trafienia krytyczne spowalniają cel o 0,2 s. Pokémony nakładające jakiekolwiek statusy nie mogą nosić tego przedmiotu.",
		],
		restriction: {
			idForbidden: [0, 5, 6, 9, 10, 13, 14, 15, 16, 19, 20, 25, 28, 33, 34, 42, 49, 51, 52, 54, 55, 56, 60, 64, 69, 70, 404, 72, 80, 83, 86, 101]
		}
	},
	spellTag: { 
		id: 'spellTag',
		name: [
			'Spell Tag',
			'Hechizo',
			'Rune Sort',
			'Talismã de Feitiço',
			'Spettrotarga',
			'Bannsticker',
			'のろいのおふだ',
			'저주의부적',
			'詛咒之符',
			'Spell Tag',
		],
		sprite: './src/assets/images/items/spell-tag.png',
		price: 100000,
		description: [
		  	"The holder deals 15% more damage for each status (Burn, Stun, Slow, Poison) the target has. Capped to 50%.",
		  	"El portador inflige un 15% más de daño por cada efecto de estado (Quemadura, Aturdimiento, Ralentización, Veneno) que tenga el objetivo. Máximo 50%.",
		  	"Le porteur inflige 15 % de dégâts supplémentaires pour chaque effet de statut (Brûlure, Étourdissement, Lenteur, Poison) que la cible possède. Limité à 50 %.",
		  	"O portador causa 15% a mais de dano para cada efeito de status (Queimadura, Atordoamento, Lentidão, Veneno) que o alvo possua. Limitado a 50%.",
		  	"Il portatore infligge il 15% di danno in più per ogni effetto di stato (Bruciatura, Stordimento, Lentezza, Veleno) che il bersaglio ha. Massimo 50%.",
		  	"Der Träger verursacht 15 % mehr Schaden für jeden Status (Verbrennung, Betäubung, Verlangsamung, Gift), den das Ziel hat. Maximal 50 %.",
		  	"持ち主は、対象が持っている状態異常（やけど、スタン、スロー、どく）1つにつき15%多くダメージを与える。最大50%。",
		  	"소지자는 대상이 가진 상태 이상(화상, 기절, 느려짐, 독) 하나마다 15% 추가 피해를 입힙니다. 최대 50%.",
		  	"持有者对目标每种状态效果（灼伤、眩晕、减速、中毒）造成的伤害增加15%。上限50%。",
		  	"Posiadacz zadaje o 15% więcej obrażeń za każdy efekt statusu (Spalenie, Ogłuszenie, Spowolnienie, Trucizna) posiadany przez cel. Maksymalnie 50%."
		],
		restriction: {
			idForbidden: [
				0, 9, 52, 14, 25, 56, 6, 13, 15, 33, 34, 5, 20, 28, 42, 49, 54, 60, 55, 70, 72, 19, 83, 96, 97, 101, 404
			]
		},
	},
	sharpBeak: {
		id: 'sharpBeak',
		name: [
			'Sharp Beak',
			'Pico Afilado',
			'Bec Pointu',
			'Bico Afiado',
			'Becco Affilato',
			'Spitzer Schnabel',
			'するどいくちばし',
			'예리한부리',
			'銳利鳥嘴',
			'Sharp Beak',
		],
		sprite: './src/assets/images/items/sharp-beak.png',
		price: 100000,
			description: [
			"The further the range and the closer the attack, the more damage it deals, up to an additional 50%. Only activates on mountains.",
			"Cuanto mayor alcance y más cerca ataque, más daño causa, hasta un 50% adicional. Solo se activa en montaña.",
			"Plus la portée est grande et plus l'attaque est proche, plus les dégâts sont importants, jusqu'à 50 % supplémentaires. Ne s'active que sur les montagnes.",
			"Quanto maior o alcance e mais próximo for o ataque, mais dano causa, até 50% adicional. Só é ativado em montanhas.",
			"Più grande è la gittata e più vicino l'attacco, più danno infligge, fino al 50% aggiuntivo. Si attiva solo in montagna.",
			"Je größer die Reichweite und je näher der Angriff, desto mehr Schaden verursacht er, bis zu 50 % zusätzlich. Aktiviert nur in Bergen.",
			"射程が長く、攻撃が近いほど、最大50％の追加ダメージを与える。山地でのみ発動。",
			"사정거리가 멀고 공격이 가까울수록 피해가 증가하며, 최대 50% 추가 피해를 줍니다. 산악 지형에서만 발동.",
			"射程越远且攻击越近，造成的伤害越高，最多增加50%。仅在山地激活。",
			"Im większy zasięg i bliższy atak, tym większe obrażenia, do 50% dodatkowo. Aktywne tylko w górach."
		],
		restriction: {
			tile: [4]
		}
	},
	clawFossil: {
		id: 'clawFossil',
		name: [
		    "Claw Fossil",
		    "Fósil Garra",
		    "Fossile Griffe",
		    "Fóssil Garra",
		    "Fossilartiglio",
		    "Klauenfossil",
		    "ツメのカセキ",
		    "발톱화석",
		    "爪子化石",
		    "Claw Fossil",
		],
		sprite: './src/assets/images/items/claw.png',
		price: 100000,
		description: [
		    "Increases damage dealt by 5% for each Fossil Pokémon on the team. Can only be held by Anorith or Armaldo.",
		    "Aumenta el daño causado en un 5% por cada Pokémon Fósil en el equipo. Solo puede ser llevado por Anorith o Armaldo.",
		    "Augmente les dégâts infligés de 5 % pour chaque Pokémon Fossile dans l'équipe. Ne peut être tenu que par Anorith ou Armaldo.",
		    "Aumenta o dano causado em 5% para cada Pokémon Fóssil na equipe. Só pode ser segurado por Anorith ou Armaldo.",
		    "Aumenta i danni inflitti del 5% per ogni Pokémon Fossile nella squadra. Può essere tenuto solo da Anorith o Armaldo.",
		    "Erhöht den verursachten Schaden um 5 % für jedes Fossil-Pokémon im Team. Kann nur von Anorith oder Armaldo getragen werden.",
		    "チームにいる化石ポケモン1体につき、与えるダメージが5％増加します。アノプスまたはアーマルドのみが装備できます。",
		    "팀에 있는 화석 포켓몬 하나당 피해량이 5% 증가합니다. 아노딥스 또는 아말도가 장착할 수 있습니다.",
		    "队伍中每有一只化石宝可梦，造成的伤害提高5%。只能由太古羽虫或太古盔甲携带。",
		    "Zwiększa obrażenia o 5% za każdą Skamielinę w drużynie. Może go nosić tylko Anorith lub Armaldo.",
		],
		restriction: {
			id: [63]
		}
	},
	sniperScope: {
		id: 'sniperScope',
		name: [
			'Sniper Scope',
			'Mira Telescópica',
			'Lunette de Visée',
			'Mira de Atirador',
			'Mirino Cecchino',
			'Scope-Linse',
			'スナイパースコープ',
			'초점렌즈',
			'狙擊瞄準鏡',
			'Sniper Scope'
		],
		sprite: './src/assets/images/items/scope-lens.png',
		price: 100000,
		description: [
			'Damage is increased by 25% if the enemy is further than 150 range, decreased by 25% if not. Only usable for projectile-based Pokémon.',
			'El daño se incrementa en un 25% si el enemigo está a más de 150 de alcance y se reduce en un 25% si no. Solo usable por Pokémon basados en proyectiles.',
			'Les dégâts sont augmentés de 25 % si l’ennemi est à plus de 150 de portée et réduits de 25 % le cas échéant. Utilisable uniquement par les Pokémon à projectiles.',
			'O dano é aumentado em 25% se o inimigo estiver a mais de 150 de alcance e reduzido em 25% se não. Utilizável apenas por Pokémon baseados em projéteis.',
			'Il danno aumenta del 25% se il nemico è oltre 150 di gittata e diminuisce del 25% altrimenti. Utilizzabile solo da Pokémon basati su proiettili.',
			'Der Schaden wird um 25 % erhöht, wenn der Gegner weiter als 150 Reichweite entfernt ist, und um 25 % reduziert, wenn nicht. Nur für projektilebasierte Pokémon verwendbar.',
			'敵が射程150以上離れている場合、ダメージが25%増加し、そうでない場合は25%減少する。投射物系ポケモンのみ使用可能。',
			'적과의 거리가 150 이상일 경우 피해가 25% 증가하고, 그렇지 않으면 25% 감소한다. 투사체 기반 포켓몬만 사용 가능.',
			'若敵人距離超過 150 射程，傷害提高 25%；否則降低 25%。僅可由投射物型寶可夢使用。',
			'Obrażenia rosną o 25%, jeśli wróg jest dalej niż 150 zasięgu, w przeciwnym razie maleją o 25%. Tylko dla Pokémonów strzelających pociskami.',
		],
		restriction: { 
			attackType: 'single'
		}
	},
	loadedDice: { 
		id: 'loadedDice',
		name: [
			"Loaded Dice",
			"Dados Cargados",
			"Dé Pipé",
			"Dados viciados",
			"Dadi truccati",
			"Gezinkter Würfel",
			"ローデッドダイス",
			"속임수주사위",
			"作弊骰子",
			"Loaded Dice"
		],
		sprite: './src/assets/images/items/loaded-dice.png',
		price: 123456,
		description: [
			"Projectiles no longer ricochet. The holder gains 50% damage for each missed ricochet.",
			"Los proyectiles ya no rebotan. El portador gana 50% de daño por cada rebote perdido.",
			"Les projectiles ne ricochent plus. Le porteur gagne 50 % de dégâts pour chaque ricochet manqué.",
			"Os projéteis não ricocheteiam mais. O portador ganha 50% de dano por cada ricochete perdido.",
			"I proiettili non rimbalzano più. Il portatore guadagna il 50% di danno per ogni rimbalzo perso.",
			"Projektile prallen nicht mehr ab. Der Träger erhält 50% Schaden für jeden verpassten Rückprall.",
			"弾はもう跳ね返らない。持たせたポケモンは失われた跳ね返りごとに50%のダメージを得る。",
			"투사체가 더 이상 튕기지 않습니다. 소지자는 놓친 튕김마다 피해가 50% 증가합니다.",
			"投射物不再反彈。每失去一次反彈，攜帶者的傷害提高 50%。",
			"Pociski przestają odbijać się rykoszetem. Posiadacz zyskuje 50% obrażeń za każdy utracony rykoszet."
		],
		restriction: {
			id: [2, 45, 72, 97]
		}
	},
	quickPowder: { 
		id: 'quickPowder',
		name: [
			'Quick Powder',
			'Polvo Veloz',
			'Poudre Vite',
			'Pó Rápido',
			'Velopolvere',
			'Flottstaub',
			'スピードパウダー',
			'스피드파우더',
			'速度粉末',
			'Quick Powder'
		],
		sprite: './src/assets/images/items/quick-powder.png',
		price: 150000,
		description: [
			'Reduces damage by 50% and recharge time by 25%. Only Ditto can use this item.',
			'Reduce el daño en un 50% y el tiempo de recarga en un 25%. Solo Ditto puede usar este objeto.',
			'Réduit les dégâts de 50 % et le temps de récupération de 25 %. Seul Métamorph peut utiliser cet objet.',
			'Reduz o dano em 50% e o tempo de recarga em 25%. Apenas Ditto pode usar este item.',
			'Riduce il danno del 50% e il tempo di ricarica del 25%. Solo Ditto può usare questo oggetto.',
			'Reduziert den Schaden um 50% und die Nachladezeit um 25%. Nur Ditto kann diesen Gegenstand benutzen.',
			'ダメージを50%軽減し、リチャージ時間を25%短縮する。このアイテムを使えるのはメタモンのみ。',
			'피해를 50% 감소시키고 재충전 시간을 25% 증가합니다. 이 아이템은 메타몽만 사용할 수 있습니다.',
			'傷害降低 50%，並將再充填時間縮短 25%。僅百變怪可使用此道具。',
			'Zmniejsza obrażenia o 50% i skraca czas przeładowania o 25%. Tylko Ditto może używać tego przedmiotu.',
		],
		restriction: {
			id: [70, 404]
		}
	},
	metalPowder: { 
		id: 'metalPowder',
		name: [
			'Metal Powder',
			'Polvo Metálico',
			'Poudre Métal',
			'Pó Metálico',
			'Metalpolvere',
			'Metallstaub',
			'メタルパウダー',
			'금속파우더',
			'金屬粉末',
			'Metal Powder'
		],
		sprite: './src/assets/images/items/metal-powder.png',
		price: 150000,
		description: [
			'Increase damage by 50% and recharge time by 25%. Only Ditto can use this item.',
			'Aumenta el daño en un 50% y el tiempo de recarga en un 25%. Solo Ditto puede usar este objeto.',
			'Augmente les dégâts de 50 % et le temps de récupération de 25 %. Seul Métamorph peut utiliser cet objet.',
			'Aumenta o dano em 50% e o tempo de recarga em 25%. Apenas Ditto pode usar este item.',
			'Aumenta il danno del 50% e il tempo di ricarica del 25%. Solo Ditto può usare questo oggetto.',
			'Erhöht den Schaden um 50% und die Nachladezeit um 25%. Nur Ditto kann diesen Gegenstand benutzen.',
			'ダメージが50%増加し、リチャージ時間が25%短縮される。このアイテムを使えるのはメタモンのみ。',
			'피해가 50% 증가하고 재충전 시간이 25% 증가됩니다. 이 아이템은 메타몽만 사용할 수 있습니다.',
			'傷害提高 50%，再充填時間增加 25%。僅百變怪可使用此道具。',
			"Zwiększa obrażenia o 50% i wydłuża czas przeładowania o 25%. Tylko Ditto może używać tego przedmiotu.",
		],
		restriction: {
			id: [70, 404]
		}
	},
	hardStone: { 
		id: 'hardStone',
		name: [
			'Hard Stone',
			'Piedra Dura',
			'Pierre Dure',
			'Pedra Dura',
			'Pietradura',
			'Granitstein',
			'かたいいし',
			'딱딱한돌',
			'堅硬石頭',
			'Hard Stone'
		],
		sprite: './src/assets/images/items/hard-stone.png',
		price: 150000,
		description: [
			'Increases damage dealt by 25%. Only Fossils can hold it.',
			'Aumenta el daño causado en un 25%. Solo pueden llevarlo Fósiles.',
			'Augmente les dégâts infligés de 25 %. Seuls les Fossiles peuvent la tenir.',
			'Aumenta o dano causado em 25%. Apenas Fósseis podem segurá-lo.',
			'Aumenta il danno inflitto del 25%. Solo i Fossili possono portarlo.',
			'Erhöht den verursachten Schaden um 25%. Nur Fossil-Pokémon können es tragen.',
			'与えるダメージが25%増加する。化石ポケモンだけが持てる。',
			'가하는 피해가 25% 증가합니다. 화석 포켓몬만 지닐 수 있습니다.',
			'造成的傷害提高 25%。僅化石寶可夢可攜帶。',
			'Zwiększa zadawane obrażenia o 25%. Tylko Skamieliny mogą go nosić.',
		],
		restriction: {
			id: [58, 59, 63, 64, 65, 66, 94]
		}
	},
	domeFossil: {
		id: 'domeFossil',
		name: [
		    "Dome Fossil",
		    "Fósil Domo",
		    "Fossile Dôme",
		    "Fóssil Domo",
		    "Fossile Domo",
		    "Domfossil",
		    "とげのカセキ",
		    "껍질화석",
		    "圆顶化石",
			"Dome Fossil",
		],
		sprite: './src/assets/images/items/dome.png',
		price: 150000,
		description: [
		    "Increases critical by 5% for each Fossil Pokémon on the team. Can only be held by Kabuto or Kabutops.",
		    "Aumenta la probabilidad de crítico en un 5% por cada Pokémon Fósil en el equipo. Solo puede ser llevado por Kabuto o Kabutops.",
		    "Augmente les chances de coup critique de 5 % pour chaque Pokémon Fossile dans l'équipe. Ne peut être tenu que par Kabuto ou Kabutops.",
		    "Aumenta a chance de crítico em 5% para cada Pokémon Fóssil na equipe. Só pode ser segurado por Kabuto ou Kabutops.",
		    "Aumenta la probabilità di colpo critico del 5% per ogni Pokémon Fossile nella squadra. Può essere tenuto solo da Kabuto o Kabutops.",
		    "Erhöht die kritische Trefferchance um 5% für jedes Fossil-Pokémon im Team. Kann nur von Kabuto oder Kabutops gehalten werden.",
		    "チームにいる化石ポケモン1体につき、クリティカル率が5％増加します。カブトまたはカブトプスのみが装備できます。",
		    "팀에 있는 화석 포켓몬 하나당 치명타 확률이 5% 증가합니다. 투구 또는 투구푸스만 장착할 수 있습니다.",
		    "队伍中每有一只化石宝可梦，暴击率提高5%。只能由化石盔甲或化石盔甲携带。",
			"Zwiększa szansę na trafienie krytyczne o 5% za każdą Skamielinę w drużynie. Może go nosić tylko Kabuto lub Kabutops.",
		],
		restriction: {
			id: [59]
		}
	},
	starPiece: { 
		id: 'starPiece',
		name: [
			'Star Piece',
			'Fragmento Estrella',
			'Morceau d’Étoile',
			'Fragmento Estrela',
			'Pezzo Stella',
			'Sternenstück',
			'ほしのかけら',
			'별의조각',
			'星之碎片',
			'Star Piece'
		],
		sprite: './src/assets/images/items/star-piece.png',
		price: 150000,
		description: [
			'Converts 4-direction attacks into 8-direction attacks.',
			'Convierte ataques de 4 direcciones en ataques en 8 direcciones.',
			'Transforme les attaques à 4 directions en attaques à 8 directions.',
			'Converte ataques de 4 direções em ataques de 8 direções.',
			'Converte gli attacchi a 4 direzioni in attacchi a 8 direzioni.',
			'Wandelt 4-Richtungs-Angriffe in 8-Richtungs-Angriffe um.',
			'4方向の攻撃を8方向の攻撃に変換します。',
			'4방향 공격을 8방향 공격으로 변환합니다.',
			'將 4 方向攻擊轉換為 8 方向攻擊。',
			'Zamienia ataki w 4 kierunkach na ataki w 8 kierunkach.',
		],
		restriction: {
			id: [10, 29, 34, 45, 54, 77, 15, 32, 81, 77, 85, 96, 97]
		}
	},
	rockyHelmet: {
		id: 'rockyHelmet',
		name: [
			'Rocky Helmet',
			'Casco Dentado',
			'Casque Brut',
			'Capacete Pedregoso',
			'Elmo Roccioso',
			'Beulenhelm',
			'いしのヘルメット',
			'울퉁불퉁멧',
			'岩石頭盔',
			'Rocky Helmet'
		],
		sprite: './src/assets/images/items/rocky-helmet.png',
		price: 150000,
		description: [
			"Doubles Rampardos damage boost from 5% per missing heart to 10% per missing heart.",
			'Duplica el aumento de daño de Rampardos de 5% por corazón perdido a 10% por corazón perdido.',
			'Double le bonus de dégâts de Charkos de 5 % à 10 % par cœur manquant.',
			'Dobra o aumento de dano de Rampardos de 5% por coração perdido para 10% por coração perdido.',
			'Raddoppia il bonus di danno di Rampardos da 5% per cuore mancante a 10% per cuore mancante.',
			'Verdoppelt Rameidons Schadensbonus von 5% pro fehlendem Herz auf 10% pro fehlendem Herz.',
			'ラムパルドの失ったハート1つごとのダメージ上昇が5%から10%に倍増する。',
			'램펄드의 잃은 하트 1개당 데미지 증가가 5%에서 10%로 두 배가 된다.',
			'將戰槌龍每失去 1 顆愛心的傷害加成由 5% 提高至 10%。',
			'Podwaja wzmocnienie obrażeń Rampardosa za każde brakujące serce z 5% do 10%.',
		],
		restriction: {
			id: [66],
		}
	},
	berryJuice: { 
		id: 'berryJuice',
		name: [
			"Berry Juice",
			"Jugo de Bayas",
			"Jus de Baie",
			"Suco de Baya",
			"Succo di Bacca",
			"Beerensaft",
			"ベリージュース",
			"나무열매쥬스",
			"树果汁",
			"Berry Juice",
		],
		sprite: './src/assets/images/items/berry-juice.png',
		price: 150000,
		description: [
			"Slowing is 25% stronger. Only Shuckle can hold it.",
			"La ralentización es un 25% más potente. Solo Shuckle puede llevarlo.",
			"Le ralentissement est 25 % plus puissant. Seul Caratroc peut le porter.",
			"A lentidão é 25% mais potente. Apenas Shuckle pode segurá-lo.",
			"Il rallentamento è più potente del 25%. Solo Shuckle può portarlo.",
			"Verlangsamen ist 25% stärker. Nur von Pottrott tragbar.",
			"遅延効果が25%強くなる。持てるのはツボツボのみ。",
			"느려짐 효과가 25% 더 강해집니다. 이 아이템은 단단지만 지닐 수 있습니다.",
			"减速效果提高 25%。只有壶壶可以携带。",
			"Spowolnienie jest o 25% silniejsze. Może go nosić tylko Shuckle.",
		],
		restriction: {
			id: [42]
		}
	},
	blueBandana: { 
		id: 'blueBandana',
		name: [
			"Blue Bandana",
			"Bandana azul",
			"Bandana Bleu",
			"Bandana azul",
			"Bandana blu",
			"Blauer Schal",
			"青いバンダナ",
			"파랑밴드",
			"藍色頭巾",
			"Blue Bandana"
		],
		sprite: './src/assets/images/items/blue.png',
		price: 175000,
		description: [
			"The holder can no longer deal critical hits. Increases damage by 1% for every 1% critical.",
			"El portador ya no puede ocasionar Críticos. Aumenta el daño un 1% por cada 1% de crítico.",
			"Le porteur ne peut plus infliger de coups critiques. Augmente les dégâts de 1 % pour chaque 1 % de critique.",
			"O portador não pode mais causar críticos. Aumenta o dano em 1% para cada 1% de crítico.",
			"Il portatore non può più infliggere colpi critici. Aumenta il danno dell'1% per ogni 1% di critico.",
			"Der Träger kann keine kritischen Treffer mehr verursachen. Erhöht den Schaden um 1% für jeden 1% Kritischer Chance.",
			"持たせたポケモンはもうクリティカルを発生させられない。クリティカル1%ごとにダメージが1%増加する。",
			"소지자는 더 이상 크리티컬을 일으킬 수 없습니다. 크리티컬 1%마다 피해가 1% 증가합니다.",
			"持有者將無法再造成要害攻擊。每擁有 1% 要害率，傷害提高 1%。",
			"Posiadacz nie może już zadawać obrażeń krytycznych. Zwiększa obrażenia o 1% za każdy 1% szansy na krytyczny cios.",
		],
		restriction: {
			idForbidden: [70, 404, 19, 83, 101]
		}
	},
	adrenalineOrb: { 
		id: 'adrenalineOrb',
		name: [
			'Adrenaline Orb',
			'Nerviosfera',
			'Orbe Frousse',
			'Orbe de Adrenalina',
			'Fifasfera',
			'Zitterorb',
			'ビビリだま',
			'주눅구슬',
			'膽怯球',
			'Adrenaline Orb',
		],
		sprite: './src/assets/images/items/adrenaline-orb.png',
		price: 200000,
		description: [
			"Reduces recharge time by 2.5% for each missing heart.",
			"Reduce el tiempo de recarga un 2.5% por cada corazón que falte.",
			"Réduit le temps de recharge de 2.5 % pour chaque cœur manquant.",
			"Reduz o tempo de recarga em 2.5% para cada coração em falta.",
			"Riduce il tempo di ricarica del 2.5% per ogni cuore mancante.",
			"Verringert die Aufladezeit um 2.5 % für jedes fehlende Herz.",
			"失っているハート1つにつき、リチャージ時間を2.5％短縮する。",
			"잃은 하트 하나당 재사용 대기 시간이 2.5% 감소합니다.",
			"每缺少一个心，充能时间减少2.5%。",
			"Skraca czas odnowienia o 2.5% za każde brakujące serce."
		],
		restriction: {
			idForbidden: [70, 404, 19, 83, 101]
		},
	},
	zoomLens: {
		id: 'zoomLens',
		name: [
			'Zoom Lens',
			'Telescopio',
			'Lentille Zoom',
			'Lente de Zoom',
			'Zoomlente',
			'Zoomlinse',
			'フォーカスレンズ',
			'멀티렌즈',
			'變焦鏡片',
			'Zoom Lens'
		],
		sprite: './src/assets/images/items/zoom-lens.png',
		price: 200000,
		description: [
			'The holder can fire projectiles at one additional target, but their damage is reduced by 50%.',
			'El portador puede lanzar proyectiles a un objetivo adicional, pero su daño se reduce en un 50%.',
			'Le porteur peut lancer des projectiles sur une cible supplémentaire, mais leurs dégâts sont réduits de 50 %.',
			'O portador pode disparar projéteis em um alvo adicional, mas seu dano é reduzido em 50%.',
			'Il portatore può lanciare proiettili su un bersaglio aggiuntivo, ma il loro danno è ridotto del 50%.',
			'Der Träger kann Projektile auf ein zusätzliches Ziel abfeuern, aber der Schaden wird um 50 % reduziert.',
			'持たせたポケモンは追加の1体に向かって投射物を放てるが、ダメージは50%減少する。',
			'소지자는 추가 목표 하나에 투사체를 발사할 수 있지만, 피해량은 50% 감소한다.',
			'持有者可向額外一個目標發射投射物，但傷害降低 50%。',
			'Posiadacz może strzelać pociskami do jednego dodatkowego celu, ale obrażenia tego pocisku są zmniejszone o 50%.',
		],
		restriction: {
			idForbidden: [13, 14, 19, 24, 26, 33, 37, 41, 42, 44, 47, 49, 51, 52, 53, 56, 58, 59, 64, 65, 67, 70, 404, 74, 75, 80, 83, 85, 91, 100, 101]
		}
	},
	metronome: {
		id: 'metronome',
		name: [
			'Metronome',
			'Metrónomo',
			'Métronome',
			'Metrônomo',
			'Plessimetro',
			'Metronom',
			'メトロノーム',
			'메트로놈',
			'節拍器',
			'Metronome'
		],
		sprite: './src/assets/images/items/metronome.png',
		price: 200000,
		description: [
			'Increases the damage of ricochets by 15%.',
			'Aumenta el daño de los rebotes en un 15%.',
			'Augmente les dégâts des ricochets de 15 %.',
			'Aumenta o dano dos ricochetes em 15%.',
			'Aumenta i danni dei rimbalzi del 15%.',
			'Erhöht den Schaden von Abprallern um 15%.',
			'はね返り攻撃のダメージを15%増加させる。',
			'리코쳇 공격의 피해를 15% 증가시킨다.',
			'使反彈攻擊造成的傷害提高 15%。',
			'Zwiększa obrażenia z rykoszetów o 15%.',
		],
		restriction: {
			id: [2, 45, 63, 72, 97]
		}
	},
	strangeIdol: {
		id: 'strangeIdol',
		name: [
			'Strange Idol',
			'Ídolo Extraño',
			'Idole Étrange',
			'Ídolo Estranho',
			'Idolo Strano',
			'Skurriloskulptur',
			'ふしぎなオブジェ',
			'이상한장식품',
			'奇異神像',
			'Strange Idol'
		],
		sprite: './src/assets/images/items/strange-idol.png',
		price: 200000,
		description: [
			'Deals +50% damage, reduced by 1% for each cursed enemy. Can only be held by curse-based Pokémon.',
			'Causa +50% de daño, que se reduce en 1% por cada enemigo maldito. Solo puede ser llevado por Pokémon que se basen en maldiciones.',
			'Inflige +50 % de dégâts, réduit de 1 % pour chaque ennemi maudit. Ne peut être porté que par les Pokémon basés sur les malédictions.',
			'Causa +50% de dano, reduzido em 1% para cada inimigo amaldiçoado. Só pode ser usado por Pokémon baseados em maldições.',
			'Causa +50% di danno, ridotto dell’1% per ogni nemico maledetto. Può essere portato solo da Pokémon basati sulle maledizioni.',
			'Verursacht +50% Schaden, reduziert um 1 % für jeden verfluchten Gegner. Kann nur von auf Flüche spezialisierten Pokémon getragen werden.',
			'ダメージが50％増加し、呪われた敵1体につき1％減少する。呪いを主体とするポケモンしか持てない。',
			'데미지가 +50% 증가하며, 저주받은 적 한 마리마다 1%씩 감소한다. 저주 기반 포켓몬만 지닐 수 있다.',
			'造成伤害+50%，每个被诅咒的敌人降低1%。只能由以诅咒为核心的宝可梦携带。',
			'Zadaje +50% obrażeń, zmniejszane o 1% za każdego przeklętego wroga. Może być trzymany tylko przez Pokémony oparte na klątwach.'
		],
		restriction: {
			id: [10, 16, 51, 73, 86]
		}
	},
	helixFossil: { 
		id: 'helixFossil',
		name: [
		    "Helix Fossil",
		    "Fósil Helix",
		    "Fossile Nautile",
		    "Fóssil Hélix",
		    "Fossile Helix",
		    "Helixfossil",
		    "かいのカセキ",
		    "조개화석",
		    "螺旋化石",
			"Helix Fossil"
		],
		sprite: './src/assets/images/items/helix.png',
		price: 250000,
		description: [
		    "Increases range by 10 for each Fossil Pokémon on the team. Can only be held by Omanyte or Omastar.",
		    "Aumenta el alcance en 10 por cada Pokémon Fósil en el equipo. Solo puede ser llevado por Omanyte u Omastar.",
		    "Augmente la portée de 10 pour chaque Pokémon Fossile dans l'équipe. Ne peut être tenu que par Amonita ou Amonistar.",
		    "Aumenta o alcance em 10 para cada Pokémon Fóssil na equipe. Só pode ser segurado por Omanyte ou Omastar.",
		    "Aumenta la gittata di 10 per ogni Pokémon Fossile nella squadra. Può essere tenuto solo da Omanyte o Omastar.",
		    "Erhöht die Reichweite um 10 für jedes Fossil-Pokémon im Team. Kann nur von Amonitas oder Amoroso getragen werden.",
		    "チームにいる化石ポケモン1体につき、射程が10増加します。オムナイトまたはオムスターのみが装備できます。",
		    "팀에 있는 화석 포켓몬 하나당 사거리가 10 증가합니다. 암나이트 또는 암스타만 장착할 수 있습니다.",
		    "队伍中每有一只化石宝可梦，射程提高10。只能由小菊石或多刺菊石携带。",
			"Zwiększa zasięg o 10 za każdą Skamielinę w drużynie. Może go nosić tylko Omanyte lub Omastar."
		],
		restriction: {
			id: [58]
		}
	},
	spindaCocktail: { 
		id: 'spindaCocktail',
		name: [
			'Spinda Cocktail',
			'Cóctel de Spinda',
			'Cocktail Spinda',
			'Coquetel de Spinda',
			'Cocktail di Spinda',
			'Pandir-Cocktail',
			'パッチールカクテル',
			'얼루기칵테일',
			'晃晃斑雞尾酒',
			'Spinda Cocktail'
		],
		sprite: './src/assets/images/items/spinda-cocktail.png',
		price: 250000,
		description: [
			'Increases the attacker’s range by 25% but makes the user target random enemies, only for single-target Pokémon.',
			'Aumenta el alcance del atacante en un 25% pero hace que el usuario apunte a enemigos aleatorios, solo para Pokémon de objetivo único.',
			'Augmente la portée de l’attaquant de 25 % mais fait que le lanceur cible des ennemis aléatoires. Uniquement pour les Pokémon à cible unique.',
			'Aumenta o alcance do atacante em 25% mas faz com que o usuário mire em inimigos aleatórios, apenas para Pokémon de alvo único.',
			'Aumenta la portata dell’attaccante del 25% ma fa sì che l’utilizzatore bersagli nemici casuali, solo per Pokémon a bersaglio singolo.',
			'Erhöht die Reichweite des Angreifers um 25 %, lässt den Benutzer aber zufällige Gegner anvisieren, nur von Einzelziel-Pokémon tragbar.',
			'攻撃者の射程が25%増加するが、対象はランダムな敵になる。単体対象のポケモンのみ使用可能。',
			'공격자의 사거리가 25% 증가하지만, 대상은 무작위 적이 된다. 단일 대상 포켓몬만 사용 가능.',
			'使攻擊者的射程提高 25%，但會隨機鎖定敵人。僅限單體目標的寶可夢使用。',
			'Zwiększa zasięg atakującego o 25%, ale każe mu celować w losowych wrogów. Tylko dla Pokémonów atakujące pojedyńcze cele.',
		],
		restriction: {
			idForbidden: [13, 14, 24, 26, 33, 37, 41, 42, 44, 47, 49, 51, 52, 53, 56, 58, 59, 64, 65, 67, 70, 404, 74, 80, 85, 19, 83, 91, 100, 101]
		}
	},
	dragonFang: { 
		id: 'dragonFang',
		name: [
			"Dragon Fang",
			"Colmillo Dragón",
			"Croc Dragon",
			"Presa de Dragão",
			"Zanna del Drago",
			"Drachenzahn",
			"りゅうのキバ",
			"용의이빨",
			"龍之牙",
			"Dragon Fang"
		],
		sprite: './src/assets/images/items/dragon-fang.png',
		price: 250000,
		description: [
			"Increases the projectile impact area by 100%. Can only be held by Druddigon.",
			"Aumenta el área de impacto de los proyectiles en un 100%. Solo puede ser llevado por Druddigon.",
			"Augmente la zone d'impact des projectiles de 100 %. Ne peut être tenue que par Drakkarmin.",
			"Aumenta a área de impacto dos projéteis em 100%. Só pode ser segurado por Druddigon.",
			"Aumenta l'area d'impatto dei proiettili del 100%. Può essere tenuto solo da Druddigon.",
			"Erhöht den Einschlagsbereich von Projektilen um 100%. Kann nur von Shardrago getragen werden.",
			"弾の衝撃範囲が100%増加する。持てるのはクリムガンのみ。",
			"투사체의 충돌 범위가 100% 증가합니다. 크리만만 이 아이템을 지닐 수 있습니다.",
			"使投射物的衝擊範圍提高 100%。僅限赤面龍可持有。",
			"Zwiększa obszar uderzenia pocisków o 100%. Może go nosić tylko Druddigon.",
		],
		restriction: {
			id: [17]
		}
	},
	ejectButton: { 
		id: 'ejectButton',
		name: [
			"Eject Button",
			"Botón de Expulsión",
			"Bouton Fuite",
			"Botão de Ejeção",
			"Pulsante di Espulsione",
			"Fluchtknopf",
			"イジェクトボタン",
			"탈출버튼",
			"逃脫按鈕",
			"Eject Button",
		],
		sprite: './src/assets/images/items/eject-button.png',
		price: 300000,
		description: [
			"Halves the teleportation cooldown. Can only be held by Abra, Kadabra, or Alakazam.",
			"Reduce la duración de enfriamiento de la teleportación a la mitad. Solo puede ser llevado por Abra, Kadabra o Alakazam.",
			"Réduit de moitié le temps de récupération de la téléportation. Ne peut être tenu que par Abra, Kadabra ou Alakazam.",
			"Reduz pela metade o tempo de recarga do teletransporte. Só pode ser segurado por Abra, Kadabra ou Alakazam.",
			"Riduce della metà il tempo di ricarica della teletrasportazione. Può essere tenuto solo da Abra, Kadabra o Alakazam.",
			"Halbiert die Abklingzeit der Teleportation. Kann nur von Abra, Kadabra oder Simsala getragen werden.",
			"テレポートのクールダウンが半分になる。ケーシィ、ユンゲラー、フーディンのみが持てる。",
			"텔레포트의 재사용 대기시간이 절반으로 줄어듭니다. 캐이시, 윤겔라 또는 후딘만 이 아이템을 지닐 수 있습니다.",
			"將瞬間移動的冷卻時間減半。僅限凱西、勇基拉或胡地可持有。",
			"Zmniejsza o połowę czas przeładowania teleportu. Może go nosić tylko Abra, Kadabra lub Alakazam.",
		],
		restriction: {
			id: [68]
		}
	},
	nightmareCloth: {
		id: 'nightmareCloth',
		name: [
			"Nightmare Cloth",
			"Tela Pesadilla",
			"Tissu Cauchemar",
			"Tecido Pesadelo",
			"Tessuto Incubo",
			"Alptraumstoff",
			"ナイトメアクロス",
			"악몽의 천",
			"惡夢之布",
			'Nightmare Cloth'
		],
		sprite: './src/assets/images/items/nightmare-cloth.png',
		price: 300000,
		description: [
			"Allows Gardevoir to spread nightmares.",
			"Permite a Gardevoir propagar pesadillas.",
			"Permet à Gardevoir de propager des cauchemars.",
			"Permite que Gardevoir propague pesadelos.",
			"Permette a Gardevoir di diffondere incubi.",
			"Ermöglicht es Guardevoir, Albträume zu verbreiten.",
			"サーナイトは悪夢を広げることができる。",
			"가디안은 악몽을 퍼뜨릴 수 있다.",
			"使沙奈朵可以擴散惡夢。",
			"Pozwala Gardevoir rozprzestrzeniać koszmary.",
		],
		restriction: {
			id: [55]
		}
	},
	poisonBarb: { 
		id: 'poisonBarb',
		name: [
			"Poison Barb",
			"Púa venenosa",
			"Pic Venin",
			"Espinho venenoso",
			"Aculeo velenoso",
			"Giftstich",
			"どくのトゲ",
			"독바늘",
			"毒刺",
			"Poison Barb"
		],
		sprite: './src/assets/images/items/poison-barb.png',
		price: 400000,
		description: [
			"The holder reduces recharge time by 20% and has a 50% chance to apply an additional poison stack with each attack.",
			"El portador reduce el tiempo de recarga en un 20% y tiene un 50% de probabilidad de aplicar una acumulación de veneno adicional con cada ataque.",
			"Le porteur réduit le temps de récupération de 20 % et a 50 % de chance d'appliquer du poison supplémentaire à chaque attaque.",
			"O portador reduz o tempo de recarga em 20% e tem 50% de chance de aplicar uma pilha de veneno adicional a cada ataque.",
			"Il portatore riduce il tempo di ricarica del 20% e ha il 50% di probabilità di applicare uno stack di veleno aggiuntivo con ogni attacco.",
			"Der Träger reduziert die Nachladezeit um 20% und hat eine 50% Chance, bei jedem Angriff einen zusätzlichen Giftschaden-Stapel anzuwenden.",
			"持たせたポケモンはリチャージ時間が20%短縮され、攻撃ごとに50%の確率で追加のどくスタックを付与する。",
			"소지자는 재충전 시간을 20% 증가하며, 공격마다 50% 확률로 추가 독 스택을 적용합니다.",
			"持有者的冷卻時間減少20%，且每次攻擊有50%的機率施加額外一層中毒。",
			"Posiadacz skraca czas przeładowania o 20% i ma 50% szansy na nałożenie dodatkowej warstwy trucizny przy każdym ataku."
		],
		restriction: {
			id: [6, 14, 25, 56]
		}
	},
	silphScope: {
		id: 'silphScope',
		name: [
			'Silph Scope',
			'Visor Silph',
			'Scope Sylphe',
			'Silph Scope',
			'Scope Silph',
			'Silph Scope',
			'シルフスコープ',
			'실프스코프',
			'西爾佛斯可普',
			'Silph Scope',
		],
		sprite: './src/assets/images/items/silph-scope.png',
		price: 500000,
		description: [
			'Reveals invisible enemies, must be carried by a Pokémon that fires projectiles. Pokémon with the ability Frisk gain +15 range and +60 power.', 
			'Revela a enemigos invisibles, debe llevarlo un Pokémon que lance proyectiles. Pokémon con la habilidad Cacheo ganan +15 alcance y +60 poder.', 
			'Révèle les ennemis invisibles, doit être porté par un Pokémon qui lance des projectiles. Les Pokémon avec la capacité Fouille gagnent +15 de portée et +60 de puissance.', 
			'Revela inimigos invisíveis, deve ser equipado por um Pokémon que dispare projéteis. Pokémon com a habilidade Revistar ganham +15 de alcance e +60 de poder.', 
			`Rivela i nemici invisibili, deve essere equipaggiato da un Pokémon che lancia proiettili. I Pokémon con l'abilità Perquisizione ottengono +15 portata e +60 potenza.`, 
			'Enthüllt unsichtbare Gegner, kann nur von einem Pokémon getragen werden, das Projektile abfeuert. "Pokémon mit der Fähigkeit Filzen erhalten +15 Reichweite und +60 Stärke.', 
			'透明な敵を明らかにする。投射物を放つポケモンが持つ必要がある。 特性フリiskを持つポケモンは射程+15と威力+60を得る。', 
			'보이지 않는 적을 드러낸다. 투사체를 발사하는 포켓몬이 착용해야 한다. 프리스크 특성을 가진 포켓몬은 사거리 +15와 위력 +60을 얻는다.',
			'揭露隱形的敵人，必須由發射投射物的寶可夢攜帶。 具有察觉特性的宝可梦可获得+15射程和+60力量。',
			'Ujawnia niewidzialnych wrogów; musi być noszony przez Pokémona strzelającego pociskami. Pokémony z umiejętnością Frisk zyskują +15 zasięgu i +60 mocy.',
		],
		restriction: {
			attackType: 'single'
		}
	},
	quickClaw: {
		id: 'quickClaw',
		name: [
			'Quick Claw',
			'Garra Rápida',
			'Vive Griffe',
			'Garra Rápida',
			'Artiglio Rapido',
			'Flinkklaue',
			'クイッククロウ',
			'선제공격손톱',
			'先制之爪',
			'Quick Claw',
		],
		sprite: './src/assets/images/items/quick-claw.png',
		price: 500000,
		description: [
			"Reduces damage by 50% and recharge time by 50%. The focus automatically targets the fastest enemy.",
			"Reduce el daño en un 50% y el tiempo de recarga en un 50%. El enfoque apunta automáticamente al enemigo más rápido.",
			"Réduit les dégâts de 50 % et le temps de récupération de 50 %. Cible automatiquement l'ennemi le plus rapide.",
			"Reduz o dano em 50% e o tempo de recarga em 50%. O foco automaticamente mira o inimigo mais rápido.",
			"Riduce il danno del 50% e il tempo di ricarica del 50%. Il focus mira automaticamente il nemico più veloce.",
			"Reduziert den Schaden um 50% und die Wiederaufladezeit um 50%. Der Fokus richtet sich automatisch auf den schnellsten Gegner.",
			"ダメージが50%減少し、リチャージ時間が50%減少する。フォーカスは自動的に最も速い敵を狙う。",
			"피해가 50% 감소하고 재충전 시간이 50% 감소합니다. 포커스는 자동으로 가장 빠른 적을 목표로 합니다.",
			"傷害降低50%，再充能時間縮短50%。鎖定會自動以速度最快的敵人為目標。",
			"Zmniejsza obrażenia o 50% i skraca czas przeładowania o 50%. Skupienie automatycznie celuje w najszybszego wroga.",
		],
		restriction: {
			idForbidden: [70, 404, 19, 83, 101]
		},
	},
	revelationAroma: { 
		id: 'revelationAroma',
		name: [
			"Revelation Aroma",
			"Aroma de la Revelación",
			"Arôme Révélateur",
			"Aroma da Revelação",
			"Aroma della Rivelazione",
			"Offenbarungsaroma",
			"リベレーションアロマ",
			"향기로운 꽃",
			"啟示之香",
			"Revelation Aroma",
		],
		sprite: './src/assets/images/items/flower-sweet.png',
		price: 500000,
		description: [
			"Increases range by 25. Can only be held by Sunkern, Sunflora, or Comfey.",
			"Aumenta el alcance en 25. Solo puede ser llevado por Sunkern, Sunflora o Comfey.",
			"Augmente la portée de 25. Ne peut être tenu que par Tournegrin, Héliatronc ou Guérilande.",
			"Aumenta o alcance em 25. Só pode ser segurado por Sunkern, Sunflora ou Comfey.",
			"Aumenta la gittata di 25. Può essere tenuto solo da Sunkern, Sunflora o Comfey.",
			"Erhöht die Reichweite um 25. Kann nur von Sonnkern, Sonnflora oder Curelei gehalten werden.",
			"射程が25増加します。ヒマナッツ、キマワリ、またはキュワワーのみが装備可能です。",
			"사거리가 25 증가합니다. 해너츠, 해루미, 또는 큐아링만 장착할 수 있습니다.",
			"射程增加25。僅可由向日種子、向日花怪或花療環環持有。",
			"Zwiększa zasięg o 25. Może go nosić tylko Sunkern, Sunflora lub Comfey.",

		],
		restriction: {
			id: [19, 83]
		}
	},
	falmeOrb: {
		id: 'falmeOrb',
		name: [
			'Flame Orb',
			'Llamasfera',
			'Orbe Flamme',
			'Orbe de Chama',
			'Fiammosfera',
			'Heiß-Orb',
			'かえんだま',
			'화염구슬',
			'火焰寶珠',
			'Flame Orb',
		],
		sprite: './src/assets/images/items/flame-orb.png',
		price: 600000,
		description: [
			'Increases damage dealt by burn by 50%.',
			'Incrementa el daño causado por la quemadura un 50%.',
			'Augmente les dégâts des brulure de 50 %.',
			'Aumenta o dano causado por queimadura em 50%.',
			'Aumenta il danno inflitto dal bruciamento del 50%.',
			'Erhöht den durch Verbrennung verursachten Schaden um 50%.',
			'やけどによるダメージが50%増加する。',
			'화상으로 입히는 피해가 50% 증가합니다.',
			'由灼傷造成的傷害提高50%。',
			'Zwiększa obrażenia zadawane przez oparzenie o 50%.',
		],
		restriction: { 
			id: [0, 9, 52, 73, 96]
		}
	},
	badgeOfHonor: { 
		id: 'badgeOfHonor',
		name: [
			"Badge Of Honor",
			"Placa de Honor",
			"Badge Honorifique",
			"Distintivo de Honra",
			"Distintivo d'Onore",
			"Abzeichen der Ehre",
			"名誉のバッジ",
			"명예의 배지",
			"榮譽徽章",
			"Badge Of Honor"
		],
		sprite: './src/assets/images/items/honor-of-kalos.png',
		price: 900000,
		description: [
		  	"Increases the holder's damage by 1% for every 30 stars acquired. Capped to 30%.",
		  	"Aumenta el daño del portador en un 1% por cada 30 estrellas obtenidas. Máximo 30%.",
		  	"Augmente les dégâts du porteur de 1 % toutes 30 étoiles. Limité à 30 %.",
		  	"Aumenta o dano do portador em 1% para cada 30 estrelas adquiridas. Limitado a 30%.",
		  	"Aumenta il danno del portatore del 1% per ogni 30 stelle ottenute. Massimo 30%.",
		  	"Erhöht den Schaden des Trägers um 1% für jeweils 30 gesammelte Sterne. Maximal 30%.",
		  	"所持者のダメージが、獲得した星30個ごとに1%増加する。最大30%。",
		  	"소지자의 피해가 획득한 별 30개마다 1% 증가합니다. 최대 30%.",
		  	"所持者每獲得30顆星星，造成的傷害提高1%。上限30%。",
		  	"Zwiększa obrażenia posiadacza o 1% za każde 30 zdobytych gwiazdek. Maksymalnie 30%."
		],
		restriction: {
			idForbidden: [70, 404, 19, 83, 101]
		},
	},
	toxicOrb: { 
		id: 'toxicOrb',
		name: [
			'Toxic Orb',
			'Toxisfera',
			'Orbe Toxique',
			'Orbe Tóxico',
			'Tossicsfera',
			'Toxik-Orb',
			'どくどくだま',
			'맹독구슬',
			'劇毒寶珠',
			'Toxic Orb'
		],
		sprite: './src/assets/images/items/toxic-orb.png',
		price: 1000000,
		description: [ 
			'The holder adds an extra poison stack with each attack.', 
			'El portador añade una acumulación de veneno extra con cada ataque.', 
			'Le porteur ajoute une accumulation de poison supplémentaire à chaque attaque.', 
			'O portador adiciona um acúmulo de veneno extra a cada ataque.', 
			'Il portatore aggiunge un accumulo di veleno extra a ogni attacco.', 
			'Der Träger fügt mit jedem Angriff einen zusätzlichen Giftstapel hinzu.', 
			'持たせたポケモンは、攻撃ごとに毒の蓄積を1つ追加する。', 
			'소지자는 공격할 때마다 독 중첩을 하나 추가한다.', 
			'所持者每次攻擊施加額外一層中毒。', 
			'Posiadacz nakłada dodatkową warstwę trucizny przy każdym ataku.'
		],
		restriction: {
			id: [6, 14, 25, 56]
		}
	},	
	shinyCharm: {
		id: 'shinyCharm',
		name: ["Shiny Charm","Amuleto iris","Charme Chroma","Amuleto Brilhante","Cromamuleto","Schillerpin","ひかるおまもり","빛나는부적","闪耀护符", "Shiny Charm"],
		sprite: './src/assets/images/items/shiny-charm.png',
		price: 1000000000,
		description: [
		    "Triples the chances of turning a Pokémon Shiny. Must be held by Smeargle.",
		    "Triplica las probabilidades de convertir un Pokémon en Shiny. Debe llevarlo Smeargle.",
		    "Triple les chances de rendre un Pokémon chromatique. Doit être tenu par Queulorior.",
		    "Triplica as chances de tornar um Pokémon Brilhante. Deve ser segurado por Smeargle.",
		    "Triplica le probabilità di rendere un Pokémon Cromatico. Deve essere tenuto da Smeargle.",
		    "Verdreifacht die Chance, ein Pokémon schillernd zu machen. Kann nur von Farbeagle getragen werden.",
		    "ポケモンが色違いになる確率が3倍になります。ムーランドが持っている必要があります。",
		    "포켓몬이 색이 다른 이로치가 될 확률이 3배가 됩니다. 루브도가 장착해야 합니다.",
		    "将宝可梦变为闪光的概率提高三倍。必须由奇鲁莉安携带。",
			"Potraja szansę na przemianę Pokémona w Shiny. Musi go nosić Smeargle.",
		],
		restriction: {
			id: [84]
		}
	},
	bicycle: {
		id: 'bicycle',
		name: [
			"Segmental's Bicycle",
			"Bicicleta de Segmental",
			"Vélo de Segmental",
			"Bicicleta do Segmental",
			"Bicicletta di Segmental",
			"Segmentals Fahrrad",
			"自転車", 
			"자전거", 
			'的自行車',
			"Segmental's Bicycle",
		],
		sprite: './src/assets/images/items/bicycle.png',
		price: 1000000000,
		description: [
			'Ding ding.', 
			'Ding ding.', 
			'Ding ding.', 
			'Tin tin.', 
			'Din don.', 
			'Klingeling.', 
			'チリンチリン。', 
			'딩딩.', 
			'叮鈴叮鈴。',
			"Dzyń dzyń."
		],
		restriction: {
			attackType: 'single'
		}
	},
	condensedBlizzard: {
		id: 'condensedBlizzard',
		name: [
		  	"Condensed Blizzard",
		  	"Ventisca Condensada",
		  	"Blizzard Condensée",
		  	"Nevasca Condensada",
		  	"Bufera di Neve Concentrata",
		  	"Kondensierter Blizzard",
		  	"凝縮ブリザード",
		  	"응축된 블리자드",
		  	"凝缩暴风雪",
		  	"Skondensowana Zamieć"
		],
		sprite: './src/assets/images/items/casteliacone.png',
		price: 0,
		description: [
			"Turns targeting shape into a circle and reduces its range by 50%. Must be held by Cryogonal.",
			"Convierte la forma de apuntado en un círculo y reduce su alcance en un 50 %. Debe ser sostenido por Cryogonal.",
			"Transforme la forme de ciblage en cercle et réduit sa portée de 50 %. Doit être tenu par Hexagel.",
			"Transforma a forma de mira em um círculo e reduz seu alcance em 50%. Deve ser segurado por Cryogonal.",
			"Trasforma la forma di puntamento in un cerchio e ne riduce la portata del 50%. Deve essere tenuto da Cryogonal.",
			"Wandelt die Zielerfassungsform in einen Kreis um und verringert deren Reichweite um 50 %. Muss von Frigometri getragen werden.",
			"照準の形状を円形に変更し、射程を50％減少させる。フリージオが持たなければならない。",
			"조준 형태를 원형으로 바꾸고 사거리를 50% 감소시킨다. 프리지오가 지녀야 한다.",
			"将瞄准形状变为圆形，并将射程降低50%。必须由几何雪花携带。",
			"Zmienia kształt namierzania na okrąg i zmniejsza jego zasięg o 50%. Musi być dzierżony przez Cryogonal."
		],
		restriction: {
			id: [15]
		}
	},
	stretchySpring: {
		id: 'stretchySpring',
		name: [
		  	"Stretchy Spring",
		  	"Resorte elástico",
		  	"Ressort extensible",
		  	"Mola elástica",
		  	"Molla elastica",
		  	"Dehnfeder",
		  	"伸縮するバネ",
		  	"늘어나는 스프링",
		  	"伸縮彈簧",
		  	"Elastyczna sprężyna"
		],
		sprite: './src/assets/images/items/stretchy-spring.png',
		price: 0,
		description: [
			"Projectiles ricochet two additional time. Only applies to ricocheting projectiles.",
			"Los proyectiles rebotan dos veces adicionales. Solo para proyectiles con rebotes.",
			"Les projectiles ricochent deux fois supplémentaires. Uniquement pour les projectiles avec ricochet.",
			"Os projéteis ricocheteiam mais duas vezes. Apenas para projéteis com ricochete.",
			"I proiettili rimbalzano due volte in più. Solo per proiettili con rimbalzi.",
			"Projektile prallen zwei weitere Male ab. Nur für Projektile mit Abprall.",
			"弾がさらに2回跳ね返る。反射する投射物のみ有効。",
			"투사체가 두 번 더 튕깁니다. 반사가 가능한 투사체에만 적용됩니다.",
			"投射物会额外反弹两次。仅适用于可反弹的投射物。",
			"Pociski odbijają się o dwa razy więcej. Tylko dla pocisków z odbiciem."
		],
		restriction: {
			id: [2, 45, 72, 97]
		}
	},
	blackGlasses: {
		id: 'blackGlasses',
		name: [
		  	"Black Glasses",
		  	"Gafas de Sol",
		  	"Lunettes Noires",
		  	"Black Glasses",
		  	"Occhialineri",
		  	"Schattenbrille",
		  	"くろいメガネ",
		  	"검은안경",
		  	"黑色眼镜",
		  	"Black Glasses"
		],
		sprite: './src/assets/images/items/black-glasses.png',
		price: 0,
		description: [
			"Doubles the bonus from the Moxie ability.",
			"Duplica el bonus de la habilidad Autoestima.",
			"Double le bonus de la capacité Impudence.",
			"Dobra o bônus da habilidade Arrogância.",
			"Raddoppia il bonus dell’abilità Arroganza.",
			"Verdoppelt den Bonus der Fähigkeit Hochmut.",
			"とくせい「じしんかじょう」の効果を2倍にする。",
			"특성 ‘자기과신’의 보너스를 두 배로 만든다.",
			"将“自信过剩”特性的加成翻倍。",
			"Podwaja premię z umiejętności Zuchwałość."
		],
		restriction: {
			id: [78]
		}
	},
	ancientSword: {
		id: 'ancientSword',
		name: [
		  	"Ancient Sword",
		  	"Espada Antigua",
		  	"Épée Antique",
		  	"Espada Antiga",
		  	"Spada Antica",
		  	"Antikes Schwert",
		  	"古代の剣",
		  	"고대의 검",
		  	"古代之剑",
		  	"Starożytny Miecz"
		],
		sprite: './src/assets/images/items/rusted-sword.png',
		price: 0,
		description: [
		  	"Increases power and reduces recharge time by 20%. Must be held by Aegislash Sword Forme.",
		  	"Incrementa el poder y reduce el tiempo de recarga un 20%. Debe ser llevado por Aegislash Forma Espada.",
		  	"Augmente la puissance et réduit le temps de recharge de 20 %. Doit être tenu par Exagide Forme Lame.",
		  	"Aumenta o poder e reduz o tempo de recarga em 20%. Deve ser segurado por Aegislash Forma Espada.",
		  	"Aumenta la potenza e riduce il tempo di ricarica del 20%. Deve essere tenuto da Aegislash Forma Spada.",
		  	"Erhöht die Stärke und verringert die Aufladezeit um 20 %. Muss von Aegislash Schildform getragen werden.", 
		  	"パワーが上昇し、リチャージ時間が20％短くなる。ギルガルド・ブレードフォルム専用。",
		  	"공격력이 증가하고 충전 시간이 20% 감소합니다. 블레이드폼의 킬가르도만 장착할 수 있습니다.",
		  	"提高威力并将充能时间减少20%。必须由坚盾剑怪刀剑形态携带。",
		  	"Zwiększa siłę i skraca czas ładowania o 20%. Musi być trzymane przez Aegislash Formę Miecza."
		],
		restriction: {
			key: 'aegislashSword'
		}
	},
	ancientShield: {
		id: 'ancientShield',
		name: [
		  	"Ancient Shield",
		  	"Escudo Antiguo",
		  	"Bouclier Antique",
		  	"Escudo Antigo",
		  	"Scudo Antico",
		  	"Antiker Schild",
		  	"古代の盾",
		  	"고대의 방패",
		  	"古代之盾",
		  	"Starożytna Tarcza"
		],
		sprite: './src/assets/images/items/rusted-shield.png',
		price: 0,
		description: [
		  	"Increases power and range by 20%. Must be held by Aegislash Shield Forme.",
		  	"Incrementa el poder y el alcance un 20%. Debe ser llevado por Aegislash Forma Escudo.",
		  	"Augmente la puissance et la portée de 20 %. Doit être tenu par Exagide Forme Bouclier.",
		  	"Aumenta o poder e o alcance em 20%. Deve ser segurado por Aegislash Forma Escudo.",
		  	"Aumenta la potenza e la gittata del 20%. Deve essere tenuto da Aegislash Forma Scudo.",
		  	"Erhöht die Stärke und die Reichweite um 20 %. Muss von Aegislash Schildform getragen werden.",
		  	"パワーと射程が20％上昇する。ギルガルド・シールドフォルム専用。",
		  	"공격력과 사거리가 20% 증가합니다. 실드폼의 킬가르도만 장착할 수 있습니다.",
		  	"提高威力和射程20%。必须由坚盾剑怪盾牌形态携带。",
		  	"Zwiększa siłę i zasięg o 20%. Musi być trzymane przez Aegislash Formę Tarczy."
		],
		restriction: {
			key: 'aegislash'
		}
	},
	wrestlingMask: {
		id: 'wrestlingMask',
		name: [
		  	"Wrestling Mask",
		  	"Máscara de Lucha Libre",
		  	"Masque de Lutte",
		  	"Máscara de Luta Livre",
		  	"Maschera da Wrestling",
		  	"Wrestlingmaske",
		  	"レスリングマスク",
		  	"레슬링 마스크",
		  	"摔跤面具",
		  	"Maska Zapaśnicza"
		],
		sprite: './src/assets/images/items/professors-mask.png',
		price: 0,
		description: [
  			"Reduces range by 75 and recharge time by 30%. Must be held by Hawlucha.",
		  	"Reduce el alcance en 75 y el tiempo de recarga en un 30%. Debe ser llevado por Hawlucha.",
		  	"Réduit la portée de 75 et le temps de recharge de 30 %. Doit être tenu par Brutalibré.",
		  	"Reduz o alcance em 75 e o tempo de recarga em 30%. Deve ser segurado por Hawlucha.",
		  	"Riduce la portata di 75 e il tempo di ricarica del 30%. Deve essere tenuto da Hawlucha.",
		  	"Verringert die Reichweite um 75 und die Abklingzeit um 30 %. Muss von Resladero getragen werden.",
		  	"射程を75減少させ、クールダウン時間を30%短縮する。ルチャブルが持つ必要がある。",
		  	"사거리를 75 감소시키고 재사용 대기시간을 30% 줄입니다. 루차불이 지녀야 합니다.",
		  	"射程减少75，冷却时间减少30%。必须由摔角鹰人携带。",
		  	"Zmniejsza zasięg o 75 oraz czas odnowienia o 30%. Musi być trzymane przez Hawluchę."
		],
		restriction: {
			id: [43]
		}
	},
	magmarizer: {
		id: 'magmarizer',
		name: [
		  	"Magmarizer",
		  	"Magmatizador",
		  	"Magmariseur",
		  	"Magmarizer",
		  	"Magmatore",
		  	"Magmaisierer",
		  	"マグマブースター",
		  	"마그마부스터",
		  	"熔岩增幅器",
		  	"Magmarizer"
		],
		sprite: './src/assets/images/items/magmarizer.png',
		price: 0,
		description: [
		  	"Deals 30% extra damage to burned enemies. Only Pokémon that can cause burn can equip it.",
		  	"Hace 30% de daño extra a enemigos quemados. Solo pueden equiparlo Pokémon que causen quemadura.",
		  	"Inflige 30 % de dégâts supplémentaires aux ennemis brûlés. Seuls les Pokémon capables d'infliger des brûlures peuvent l'équiper.",
		  	"Causa 30% de dano extra a inimigos queimados. Apenas Pokémon que podem causar queimadura podem equipá-lo.",
		  	"Infligge il 30% di danno extra ai nemici bruciati. Solo i Pokémon che possono causare ustione possono equipaggiarlo.",
		  	"Verursacht 30% zusätzlichen Schaden an verbrannten Gegnern. Nur Pokémon, die Verbrennung verursachen können, können es ausrüsten.",
		  	"やけど状態の敵に対して30%追加ダメージを与える。やけどを与えられるポケモンのみ装備可能。",
		  	"화상 상태의 적에게 30% 추가 피해를 입힌다. 화상을 일으킬 수 있는 포켓몬만 장착 가능.",
		  	"對陷入灼傷狀態的敵人造成額外 30% 傷害。僅限能造成灼傷的寶可夢裝備。",
		  	"Zadaje o 30% więcej obrażeń poparzonym wrogom. Tylko dla Pokémonów, które potrafią powodować oparzenia.",
		],
		restriction: { 
			id: [0, 9, 52, 73, 96]
		}
	},
	inverter: {
		id: 'inverter',
		name: [
		  	"Inverter",
		  	"Inversor",
		  	"Onduleur",
		  	"Inversor",
		  	"Inverter",
		  	"Wechselrichter",
		  	"インバーター",
		  	"인버터",
		  	"逆变器",
		  	"Inwerter"
		],	
		sprite: './src/assets/images/items/inverter.png',
		price: 0,
		description: [
		  	"Inverts things.",
		  	"Invierte cosas.",
		  	"Inverse des choses.",
		  	"Inverte coisas.",
		  	"Inverte le cose.",
		  	"Invertiert Dinge.",
		  	"物事を反転させる。",
		  	"것들을 뒤집는다.",
		  	"反转事物。",
		  	"Odwraca rzeczy."
		],
		restriction: {
			idForbidden: [19, 70, 404, 83, 101]
		}
	},
	subwoofer: {
		id: 'subwoofer',
		name: [
		  	"Subwoofer",
		  	"Subwoofer",
		  	"Subwoofer",
		  	"Subwoofer",
		  	"Subwoofer",
		  	"Subwoofer",
		  	"サブウーファー",
		  	"서브우퍼",
		  	"低音炮",
		  	"Subwoofer"
		],
		sprite: './src/assets/images/items/medal-box.png',
		price: 0,
		description: [
		  	"Woof woof.",
		  	"Guau guau.",
		  	"Ouaf ouaf.",
		  	"Au au.",
		  	"Bau bau.",
		  	"Wuff wuff.",
		  	"ワンワン。",
		  	"멍멍.",
		  	"汪汪。",
		  	"Hau hau."
		],
		restriction: {
			attackType: 'single'
		}
	},
	xAttack: {
		id: 'xAttack',
		name: [
		  	"X-Attack",
		  	"Ataque X",
		  	"Attaque +",
		  	"X-Attack",
		  	"Attacco X",
		  	"X-Angriff",
		  	"プラスパワー",
		  	"プラスパワー",
		  	"力量强化",
		  	"X Attack"
		],
		sprite: './src/assets/images/items/x-attack.png',
		price: 0,
		description: [
			"The holder deals +50 damage.",
			"El portador del objeto causa +50 de daño.",
			"Le porteur inflige +50 de dégâts.",
			"O portador causa +50 de dano.",
			"Il portatore infligge +50 danni.",
			"Der Träger verursacht +50 Schaden.",
			"持たせたポケモンのダメージが+50される。",
			"소지자는 피해를 +50만큼 더 줍니다.",
			"持有者造成 +50 傷害。",
			"Posiadacz zadaje +50 obrażeń.",
		],
		restriction: {
			idForbidden: [19, 70, 404, 83, 101]
		},
	},
	weaknessPolicy: {
		id: 'weaknessPolicy',
		name: [
		  	"Weakness Policy",
		  	"Seguro Debilidad",
		  	"Vulné-Assurance",
		  	"Apólice de Fraqueza",
		  	"Vulneropolizza",
		  	"Schwächenschutz",
		  	"じゃくてんほけん",
		  	"약점보험",
		  	"弱點保險",
		  	"Polisa Słabości"
		],
		sprite: './src/assets/images/items/weakness-policy.png',
		price: 0,
		description: [
		    "Increase damage dealt by 100%, but projectiles can no longer splash.",
		    "Aumenta el daño infligido en un 100%, pero los proyectiles ya no hacen daño en área.",
		    "Augmente les dégâts infligés de 100 %, mais les projectiles ne peuvent plus faire de dégâts de zone.",
		    "Aumenta o dano causado em 100%, mas os projéteis não causam mais dano em área.",
		    "Aumenta i danni inflitti del 100%, ma i proiettili non infliggono più danni ad area.",
		    "Erhöht den verursachten Schaden um 100 %, aber Projektile verursachen keinen Flächenschaden mehr.",
		    "与えるダメージが100％増加するが、弾は範囲ダメージを与えなくなる。",
		    "가하는 피해가 100% 증가하지만 투사체는 더 이상 범위 피해를 주지 않습니다.",
		    "造成的伤害提高100%，但投射物将不再造成范围伤害。",
		    "Zwiększa zadawane obrażenia o 100%, ale pociski nie zadają już obrażeń obszarowych."
		],
		restriction: {
			id: [11, 17, 28, 30, 54, 55, 60, 71, 87, 96]
		}
	},
	muscleBand: {
		id: 'muscleBand',
		name: [
		  	"Muscle Band",
		  	"Cinta Fuerte",
		  	"Bandeau Muscle",
		  	"Faixa Muscular",
		  	"Muscolbanda",
		  	"Muskelband",
		  	"ちからのハチマキ",
		  	"근육밴드",
		  	"力量头带",
		  	"Opaska Mięśniowa"
		],
		sprite: './src/assets/images/items/muscle-band.png',
		price: 0,
		description: [
		    "Increases recharge time by 25%, but splash projectiles deal full damage to nearby enemies.",
		    "Aumenta el tiempo de recarga en un 25%, pero los proyectiles con daño en área infligen daño completo a enemigos cercanos.",
		    "Augmente le temps de recharge de 25 %, mais les projectiles à dégâts de zone infligent des dégâts complets aux ennemis proches.",
		    "Aumenta o tempo de recarga em 25%, mas projéteis com dano em área causam dano total aos inimigos próximos.",
		    "Aumenta il tempo di ricarica del 25%, ma i proiettili con danno ad area infliggono danni completi ai nemici vicini.",
		    "Erhöht die Aufladezeit um 25 %, aber Projektile mit Flächenschaden verursachen vollen Schaden an nahen Gegnern.",
		    "リチャージ時間が25％増加するが、範囲ダメージの弾は周囲の敵に完全なダメージを与える。",
		    "재사용 대기 시간이 25% 증가하지만 범위 피해 투사체는 주변 적에게 전체 피해를 입힙니다.",
		    "充能时间增加25%，但范围伤害投射物对附近敌人造成完整伤害。",
		    "Zwiększa czas odnowienia o 25%, ale pociski obszarowe zadają pełne obrażenia pobliskim wrogom."
		],
		restriction: {
			id: [11, 17, 28, 30, 54, 55, 60, 71, 87, 96]
		}
	},
	litCoal: {
		id: 'litCoal',
		name: [
		  	"Lit Coal",
		  	"Carbón Encendido",
		  	"Charbon Allumé",
		  	"Carvão Aceso",
		  	"Carbone Acceso",
		  	"Glühende Kohle",
		  	"燃えた石炭",
		  	"불붙은 석탄",
		  	"燃烧的煤炭",
		  	"Żarzący Węgiel"
		],
		sprite: './src/assets/images/items/charcoal.png',
		price: 0,
		description: [
			"The user has a 10% chance to apply burn with each attack. Only usable by projectile-based Pokémon.",
			"El usuario tiene un 10% de probabilidad de aplicar quemadura con cada ataque. Solo usable por Pokémon basados en proyectiles.",
			"L’utilisateur a 10 % de chances d’infliger une brûlure à chaque attaque. Utilisable uniquement par les Pokémon à projectiles.",
			"O usuário tem 10% de chance de aplicar queimadura a cada ataque. Usado apenas por Pokémon baseados em projéteis.",
			"L’utilizzatore ha il 10% di probabilità di infliggere scottatura con ogni attacco. Utilizzabile solo da Pokémon basati su proiettili.",
			"Der Anwender hat bei jedem Angriff eine Chance von 10 %, eine Verbrennung zu verursachen. Nur von Pokémon mit Projektilangriffen verwendbar.",
			"攻撃するたびに10％の確率でやけど状態にする。飛び道具主体のポケモンのみ使用可能。",
			"사용자는 각 공격마다 10% 확률로 화상을 부여합니다. 투사체 기반 포켓몬만 사용 가능합니다.",
			"使用者每次攻击都有10%的几率造成灼伤状态。仅限以投射物为基础的宝可梦使用。",
			"Użytkownik ma 10% szansy na nałożenie oparzenia przy każdym ataku. Tylko dla Pokémonów opartych na pociskach."
		],
		restriction: {
			idForbidden: [0, 9, 52, 96, 100, 13, 14, 26, 33, 41, 42, 44, 49, 58, 65, 70, 404, 74, 75, 91, 101, 19, 83, 80]
		}
	},
	magnet: {
		id: 'magnet',
		name: [
		  	"Magnet",
		  	"Imán",
		  	"Aimant",
		  	"Ímã",
		  	"Magnete",
		  	"Magnet",
		  	"じしゃく",
		  	"자석",
		  	"磁铁",
		  	"Magnes"
		],
		sprite: './src/assets/images/items/magnet.png',
		price: 0,
		description: [
		  	"Attacks slow for 1 second while the target has armor. Only usable by projectile-based Pokémon.",
			"Los ataques ralentizan 1 segundo mientras el objetivo tenga armadura. Solo usable por Pokémon basados en proyectiles.",
			"Les attaques ralentissent la cible pendant 1 seconde tant qu’elle a une armure. Utilisable uniquement par les Pokémon à projectiles.",
			"Os ataques aplicam lentidão por 1 segundo enquanto o alvo tiver armadura. Usado apenas por Pokémon baseados em projéteis.",
			"Gli attacchi rallentano per 1 secondo mentre il bersaglio ha armatura. Utilizzabile solo da Pokémon basati su proiettili.",
			"Angriffe verlangsamen für 1 Sekunde, solange das Ziel über Rüstung verfügt. Nur von Pokémon mit Projektilangriffen verwendbar.",
			"対象にアーマーがあるあいだ、攻撃は1秒間スロウを付与する。飛び道具主体のポケモンのみ使用可能。",
			"대상이 방어막을 가지고 있는 동안 공격이 1초 동안 둔화를 겁니다. 투사체 기반 포켓몬만 사용 가능합니다.",
			"当目标拥有护甲时，攻击会减速1秒。仅限以投射物为基础的宝可梦使用。",
			"Ataki spowalniają o 1 sekundę, gdy cel ma pancerz. Tylko dla Pokémonów opartych na pociskach."
		],
		restriction: {
			attackType: 'single'
		}
	},
	leftovers: {
		id: 'leftovers',
		name: [
			"Leftovers",
			"Restos",
			"Restes",
			"Sobras",
			"Avanzi",
			"Überreste",
			"たべのこし",
			"먹다남은음식",
			"吃剩的东西",
			"Resztki"
		],
		sprite: './src/assets/images/items/leftovers.png',
		price: 0,
		description: [
		    "Each projectile has a 1% chance to restore one heart. Can't be held by ricochet Pokémon. (1 use per wave)",
		    "Cada proyectil tiene un 1% de probabilidad de restaurar un corazón. No puede ser usado por Pokémon con rebote. (1 uso por oleada)",
		    "Chaque projectile a 1 % de chances de restaurer un cœur. Ne peut pas être tenu par des Pokémon à ricochet. (1 utilisation par vague)",
		    "Cada projétil tem 1% de chance de restaurar um coração. Não pode ser segurado por Pokémon com ricochete. (1 uso por onda)",
		    "Ogni proiettile ha l'1% di probabilità di ripristinare un cuore. Non può essere equipaggiato da Pokémon con rimbalzo. (1 utilizzo per ondata)",
		    "Jedes Projektil hat eine Chance von 1 %, ein Herz wiederherzustellen. Kann nicht von Abpraller-Pokémon gehalten werden. (1 Nutzung pro Welle)",
		    "発射体ごとに1％の確率でハートを回復する。跳ね返りポケモンには持たせられません。(ウェーブごとに1回使用）",
		    "각 투사체가 1% 확률로 하트를 회복합니다. 도탄 포켓몬은 소지할 수 없습니다. (웨이브당 1회 사용)",
		    "每个弹丸有1%的几率恢复一颗心。跳弹宝可梦无法携带。(每波次可使用1次）",
		    "Każdy pocisk ma 1% szansy na przywrócenie jednego serca. Nie może być trzymany przez Pokemony z rykoszetem. (1 użycie na falę)"
		],
		restriction: {
			attackType: 'single',
			ricochet: false
		}
	},
	hikingKit: { 
		id: 'hikingKit',
		name: [
		  	"Hiking Kit",
		  	"Kit de Senderismo",
		  	"Kit de Randonnée",
		  	"Kit de Caminhada",
		  	"Kit da Escursione",
		  	"Wander-Set",
		  	"ハイキングキット",
		  	"하이킹 키트",
		  	"登山套裝",
		  	"Zestaw Turystyczny"
		],
		sprite: './src/assets/images/items/camping-gear.png',
		price: 0,
		description: [
		  	"Field terrain instead behaves as mountain for the holder.",
		  	"El terreno de campo en su lugar se comporta como montaña para el portador.",
		  	"Le terrain de type champ se comporte comme une montagne pour le porteur.",
		  	"O terreno de campo passa a se comportar como montanha para o portador.",
		  	"Il terreno di tipo campo si comporta invece come montagna per il portatore.",
		  	"Feldterrain verhält sich stattdessen wie Berg-Gelände für den Träger.",
		  	"フィールドの地形は、持たせたポケモンにとって山の地形として扱われる。",
		  	"필드 지형이 소지한 포켓몬에게는 산 지형처럼 작용합니다.",
		  	"對持有者而言，原本的場地地形會改為視作山地。",
		  	"Teren typu Pole jest traktowany przez posiadacza jak Góry."
		],
		restriction: {
			id: [4, 38, 44, 46, 76, 101]
		}
	},
	assaultVest: {
		id: 'assaultVest',
		name: [
		    "Assault Vest",
		    "Chaleco Asalto",
		    "Veste de Combat",
		    "Colete Assalto",
		    "Giubbotto Assalto",
		    "Assault-Weste",
		    "とつげきチョッキ",
		    "돌격조끼",
		    "突击背心",
		    "Assault Vest",
		],
		sprite: './src/assets/images/items/assault-vest.png',
		price: 0,
		description: [
			"Allows Fossil Pokémon to be placed on Grass.",
			"Permite colocar Pokémon fósil en hierba.",
			"Permet de placer les Pokémon Fossile sur l’herbe.",
			"Permite colocar Pokémon Fóssil na Grama.",
			"Permette di posizionare i Pokémon Fossile sull’Erba.",
			"Erlaubt es, Fossilien-Pokémon auf Gras zu platzieren.",
			"化石ポケモンを草地に配置できる。",
			"화석 포켓몬을 풀밭에 배치할 수 있습니다.",
			"允许将化石宝可梦放置在草地上。",
			"Pozwala umieszczać Pokémony Fossil na trawie."
		],
		restriction: {
			id: [58, 59, 63, 64, 65, 66, 94]
		}
	},
	spindasSpecialDelivery: {
		id: 'spindasSpecialDelivery',
		name: [
		    "Spinda's Special Delivery",
		    "Entrega Especial Spinda",
		    "Livraison spéciale Spinda",
		    "Entrega especial Spinda",
		    "Consegna speciale Spinda",
		    "Pandirs Speziallieferung",
		    "スピンダの特別配達",
		    "스핀다의 특별 배달",
		    "晃晃斑的特别递送",
		    "Specjalna dostawa Spindy"
		],
		sprite: './src/assets/images/items/parcel.png',
		price: 0,
		description: [
		  	"Attacks have a 6% chance to apply a status effect (Burn, Stun, Slow, Poison). Only Spinda can hold it.",
		  	"Los ataques tienen un 6% de probabilidad de aplicar un efecto de estado (Quemadura, Aturdimiento, Ralentización, Veneno). Solo Spinda puede llevarlo.",
		  	"Les attaques ont 6 % de chances d'appliquer un effet de statut (Brûlure, Étourdissement, Lenteur, Poison). Seul Spinda peut le posséder.",
		  	"Os ataques têm 6% de chance de aplicar um efeito de status (Queimadura, Atordoamento, Lentidão, Veneno). Apenas Spinda pode segurá-lo.",
		  	"Gli attacchi hanno il 6% di probabilità di applicare un effetto di stato (Bruciatura, Stordimento, Lentezza, Veleno). Solo Spinda può possederlo.",
		  	"Angriffe haben eine 6%ige Chance, einen Status-Effekt zu verursachen (Verbrennung, Betäubung, Verlangsamung, Gift). Nur Pandir kann es halten.",
		  	"攻撃は6%の確率で状態異常を与える（やけど、スタン、スロー、どく）。持てるのはパチリスのみ。",
		  	"공격은 6% 확률로 상태 이상을 적용합니다 (화상, 기절, 느려짐, 독). 오직 스핀다만 소지할 수 있습니다.",
		  	"攻击有6%的概率施加状态效果（灼伤、眩晕、减速、中毒）。只有斑斑可以持有它。",
		  	"Ataki mają 6% szans na nałożenie efektu statusu (Spalenie, Ogłuszenie, Spowolnienie, Trucizna). Tylko Spinda może go posiadać."
		],
		restriction: {
			id: [53]
		}
	},
	bindingBand: {
		id: 'bindingBand',
		name: [
			"Binding Band",
			"Banda Atadura",
			"Bande Étreinte",
			"Binding Band",
			"Legafascia",
			"Klammerband",
			"しめつけバンド",
			"조임밴드",
			"紧绑束带",
			"Binding Band"
		],
		sprite: './src/assets/images/items/binding-band.png',
		price: 0,
		description: [
			"Allows slowing enemies immune to slow, but increases its recharge time by 1.5 seconds. Must be held by Tangela or Tangrowth.",
			"Permite ralentizar a enemigos inmunes a la ralentización, pero aumenta su tiempo de recarga en 1.5 segundos. Debe llevarlo Tangela o Tangrowth.",
			"Permet de ralentir les ennemis immunisés contre la lenteur, mais augmente son temps de recharge de 1.5 secondes. Doit être tenu par Saquedeneu ou Bouldeneu.",
			"Permite desacelerar inimigos imunes a lentidão, mas aumenta seu tempo de recarga em 1.5 segundos. Deve ser usado por Tangela ou Tangrowth.",
			"Permette di rallentare i nemici immuni al rallentamento, ma aumenta il tempo di ricarica di 1.5 secondi. Deve essere tenuto da Tangela o Tangrowth.",
			"Ermöglicht es, Gegner zu verlangsamen, die immun gegen Verlangsamung sind, erhöht aber die Aufladezeit um 1.5 Sekunden. Muss von Tangela oder Tangrowth getragen werden.",
			"スロウ無効の敵も減速させることができるが、リチャージ時間が1.5秒増加する。タングラまたはモジャンボが持つ必要がある。",
			"느려짐에 면역인 적도 둔화시킬 수 있지만, 재사용 대기 시간이 1.5초 증가합니다. 탱탱겔 또는 탱탱루가 착용해야 합니다.",
			"允许减速对减速免疫的敌人，但增加1.5秒的充能时间。必须由蔓藤怪或巨蔓藤携带。",
			"Pozwala spowolnić wrogów odpornych na spowolnienie, ale zwiększa czas odnowienia o 1.5 sekundy. Musi być noszony przez Tangela lub Tangrowth."
		],
		restriction: {
			id: [20]
		}
	},
	direHit: {
		id: 'direHit',
		name: [
		  	"Dire Hit",
		  	"Crítico X",
		  	"Muscle +",
		  	"Dire Hit",
		  	"Supercolpo",
		  	"Angriffplus",
		  	"クリティカット",
		  	"크리티컬커터",
		  	"要害攻击",
		  	"Dire Hit"
		],
		sprite: './src/assets/images/items/dire-hit.png',
		price: 0,
		description: [
			"Increases critical hit chance by 10%.",
			"Aumenta el valor de probabilidad de crítico en 10%.",
			"Augmente la probabilité de coup critique de 10 %.",
			"Aumenta a chance de acerto crítico em 10%.",
			"Aumenta la probabilità di colpo critico del 10%.",
			"Erhöht die kritische Trefferchance um 10 %. ",
			"会心率が10％上がる。",
			"크리티컬 확률이 10% 증가합니다.",
			"暴击率提高10%。",
			"Zwiększa szansę na trafienie krytyczne o 10%."
		],
		restriction: {
			idForbidden: [19, 70, 404, 83, 101]
		}
	},
	clover: {
		id: 'clover',
		name: [
			"Clover",
			"Trébol",
			"Trèfle",
			"Trefle",
			"Trifoglio",
			"Klee",
			"クローバー",
			"클로버",
			"三叶草",
			"Clover"
		],
		sprite: './src/assets/images/items/clover-sweet.png',
		price: 0,
		description: [
			"Increases the critical damage by 30%.",
			"Aumenta el daño crítico en un 30%.",
			"Augmente les dégâts critiques de 30 %.",
			"Aumenta o dano crítico em 30%.",
			"Aumenta i danni critici del 30%.",
			"Erhöht den kritischen Schaden um 30 %.",
			"会心ダメージが30％上がる。",
			"크리티컬 피해가 30% 증가합니다.",
			"暴击伤害提高30%。",
			"Zwiększa obrażenia krytyczne o 30%."
		],
		restriction: {
			idForbidden: [19, 70, 404, 83, 101]
		}
	},
	sunflowerPetal: {
		id: 'sunflowerPetal',
		name: [
			"Sunflower Petal",
			"Pétalo de Girasol",
			"Pétale de Tournesol",
			"Pétala de Girassol",
			"Petalo di Girasole",
			"Sonnenblütenblatt",
			"ひまわりのはなびら",
			"해바라기 꽃잎",
			"向日葵花瓣",
			"Płatek Słonecznika"
		],
		sprite: './src/assets/images/items/petal-yellow.png',
		price: 0,
		description: [
			"The ability Power Aura now grants an additional +10% damage dealt, but reduces the holder's range by 50. Must be held by Sunkern or Sunflora.",
			"La habilidad Aura Poder ahora otorga +10% de daño infligido adicional, pero reduce el alcance del portador en un 50. Debe ser llevado por Sunkern o Sunflora.",
			"La capacité Aura de Puissance confère désormais +10 % de dégâts infligés supplémentaires, mais réduit la portée du porteur de 50. Doit être tenu par Tournegrin ou Héliatronc.",
			"A habilidade Aura de Poder agora concede +10% de dano adicional causado, mas reduz o alcance do usuário em 50. Deve ser usado por Semente ou Floravento.",
			"La capacità Aura di Potenza ora conferisce un +10% di danni aggiuntivi, ma riduce la gittata del portatore del 50. Deve essere tenuto da Semeele o Solflora.",
			"Die Fähigkeit Kraftaura gewährt nun zusätzlich +10 % Schaden, reduziert jedoch die Reichweite des Trägers um 50. Muss von Sonnkern oder Sonnflora getragen werden.",
			"とくせい「パワーオーラ」は、与えるダメージが追加で10％増加するが、持ち主の射程は50減少する。ヒマナッツかキマワリのみが装備可能。",
			"특성 파워 오라는 추가로 가하는 피해가 10% 증가하지만, 소유자의 사거리가 50 감소합니다. 해바라기씨 또는 해바라기만 착용 가능.",
			"特性力量光环现在额外提高10%的伤害，但持有者的射程减少50。必须由向日葵种子或向日花携带。",
			"Umiejętność Aura Mocy daje teraz dodatkowe +10% obrażeń, ale zmniejsza zasięg posiadacza o 50. Może być używany tylko przez Słonecznik lub Słonecznicę."
		],
		restriction: {
			id: [19]
		}
	},
	cherryBlossom: {
		id: 'cherryBlossom',
		name: [
			"Cherry Blossom",
			"Flor de Cerezo",
			"Fleur de Cerisier",
			"Flor de Cerejeira",
			"Fiore di Ciliegio",
			"Kirschblüte",
			"さくらのはな",
			"벚꽃",
			"樱花",
			"Kwiat Wiśni"
		],
		sprite: './src/assets/images/items/petal-pink.png',
		price: 0,
		description: [
			"The holder can launch projectiles at an additional target. Can only be held by Cherubi or Cherrim.",
			"El portador puede lanzar proyectiles a un objetivo adicional. Solo puede ser llevado por Cherubi o Cherrim.",
			"Le porteur peut lancer des projectiles sur une cible supplémentaire. Ne peut être tenu que par Ceribou ou Ceriflor.",
			"O portador pode lançar projéteis a um alvo adicional. Só pode ser usado por Cherubi ou Cherrim.",
			"Il portatore può lanciare proiettili su un bersaglio aggiuntivo. Può essere tenuto solo da Cherubi o Cherrim.",
			"Der Träger kann Projektile auf ein zusätzliches Ziel abfeuern. Kann nur von Kirlia oder Cherrim getragen werden.",
			"持ち主は追加のターゲットに弾を撃てる。チェリンボかチェリムのみ持たせられる。",
			"보유자는 추가 목표에 투사체를 발사할 수 있습니다. 체리부 또는 체리림만 착용 가능.",
			"持有者可以向额外目标发射投射物。仅限樱花果或花疗环携带。",
			"Posiadacz może wystrzelić pociski w dodatkowy cel. Może być noszony tylko przez Cherubi lub Cherrim."
		],
		restriction: {
			id: [75]
		}
	},
	focusBand: {
		id: 'focusBand',
		name: [
			"Focus Band",
			"Banda Focus",
			"Bandeau",
			"Banda Focus",
			"Bandana",
			"Fokus-Band",
			"きあいのハチマキ",
			"기합의머리띠",
			"气势头带",
			"Focus Band"
		],
		sprite: './src/assets/images/items/focus-band.png',
		price: 0,
		description: [
			"Each consecutive attack against the same target increases the damage dealt by 5%. Only usable by projectile-based Pokémon.",
		  	"Cada ataque a un mismo objetivo aumenta el daño ocasionado en un 5%. Solo usable por Pokémon basados en proyectiles.",
		  	"Chaque attaque contre une même cible augmente les dégâts infligés de 5 %. Utilisable uniquement par les Pokémon à projectiles.",
		  	"Cada ataque contra o mesmo alvo aumenta o dano causado em 5%. Usado apenas por Pokémon baseados em projéteis.",
		  	"Ogni attacco contro lo stesso bersaglio aumenta i danni inflitti del 5%. Utilizzabile solo da Pokémon basati su proiettili.",
		  	"Jeder Angriff gegen dasselbe Ziel erhöht den verursachten Schaden um 5%. Nur von Pokémon mit Projektilangriffen verwendbar.",
		  	"同じ対象への攻撃ごとに、与えるダメージが5％増加します。飛び道具主体のポケモンのみ使用可能。",
		  	"같은 대상에게 공격할 때마다 가하는 피해가 5% 증가합니다.투사체 기반 포켓몬만 사용 가능합니다.",
		  	"对同一目标的每次攻击都会使造成的伤害提高5%。仅限以投射物为基础的宝可梦使用。",
			"Każdy kolejny atak w ten sam cel zwiększa zadawane obrażenia o 5%. Tylko dla Pokémonów opartych na pociskach.",
		],
		restriction: {
			attackType: 'single'
		}
	},
	gimmighoul: {
		id: 'gimmighoul',
		name: [
		  	"Gimmighoul",
		  	"Gimmighoul",
		  	"Mordudor",
		  	"Gimmighoul",
		  	"Gimmighoul",
		  	"Gierspenst",
		  	"コレクレー",
		  	"모으령",
		  	"索财灵",
		  	"Gimmighoul"
		],
		sprite: './src/assets/images/items/gimmighoul.png',
		price: 10000000000,
		description: [
			"Unlocks Gholdengo.",
			"Desbloquea a Gholdengo.",
			"Débloque Gromago.",
			"Desbloqueia Gholdengo.",
			"Sblocca Gholdengo.",
			"Schaltet Monetigo frei.",
			"ゴルデンゴを解放する。",
			"골덴고를 해금합니다.",
			"解锁赛富豪。",
			"Odblokowuje Gholdengo."
		],
		restriction: 'notEquipable'
	},
	alakazite: {
		id: 'alakazite',
		name: [
			"Alakazite",
			"Alakazita",
			"Alakazite",
			"Alakazite",
			"Alakazite",
			"Simsalanit",
			"アクアカザイト",
			"알라카자이트",
			"胡地石",
			"Alakazite"
		],
		megaStone: true,
		sprite: './src/assets/images/items/alakazite.png',
		price: 100000000,
		description: [
			"Mega Evolves the Pokémon holding it. Only one Pokémon can be Mega Evolved.",
			"Megaevoluciona al Pokémon que pueda sostenerla. Solo un Pokémon puede estar megaevolucionado.",
			"Fait méga-évoluer le Pokémon qui la tient. Un seul Pokémon peut être méga-évolué.",
			"Mega Evolui o Pokémon que a estiver segurando. Apenas um Pokémon pode estar Mega Evoluído.",
			"Mega-evolve il Pokémon che la tiene. Solo un Pokémon può essere Mega Evoluto.",
			"Mega-entwickelt das Pokémon, das es hält. Nur ein Pokémon kann megaentwickelt sein.",
			"持たせたポケモンがメガ進化する。メガ進化できるポケモンは1匹のみ。",
			"가지고 있는 포켓몬이 메가진화합니다. 메가진화할 수 있는 포켓몬은 하나뿐입니다.",
			"持有它的宝可梦会进行超级进化。每次只有一个宝可梦能超级进化。",
			"Mega Ewoluuje Pokémona, który ją trzyma. Tylko jeden Pokémon może być w Mega Ewolucji."
		],
		restriction: {
			key: 'alakazam'
		}
	},
	absolite: {
		id: 'absolite',
		name: [
			"Absolite",
			"Absolita",
			"Absolite",
			"Absolite",
			"Absolite",
			"Absolnit",
			"アブソルナイト",
			"앱솔라이트",
			"阿勃梭鲁石",
			"Absolite"
		],
		megaStone: true,
		sprite: './src/assets/images/items/absolite.png',
		price: 100000000,
		description: [
			"Mega Evolves the Pokémon holding it. Only one Pokémon can be Mega Evolved.",
			"Megaevoluciona al Pokémon que pueda sostenerla. Solo un Pokémon puede estar megaevolucionado.",
			"Fait méga-évoluer le Pokémon qui la tient. Un seul Pokémon peut être méga-évolué.",
			"Mega Evolui o Pokémon que a estiver segurando. Apenas um Pokémon pode estar Mega Evoluído.",
			"Mega-evolve il Pokémon che la tiene. Solo un Pokémon può essere Mega Evoluto.",
			"Mega-entwickelt das Pokémon, das es hält. Nur ein Pokémon kann megaentwickelt sein.",
			"持たせたポケモンがメガ進化する。メガ進化できるポケモンは1匹のみ。",
			"가지고 있는 포켓몬이 메가진화합니다. 메가진화할 수 있는 포켓몬은 하나뿐입니다.",
			"持有它的宝可梦会进行超级进化。每次只有一个宝可梦能超级进化。",
			"Mega Ewoluuje Pokémona, który ją trzyma. Tylko jeden Pokémon może być w Mega Ewolucji."
		],
		restriction: {
			key: 'absol'
		}
	},
	sceptilite: {
		id: 'sceptilite',
		name: [
			"Sceptilite",
			"Sceptilita",
			"Sceptilite",
			"Sceptilite",
			"Sceptilite",
			"Gewaldronit",
			"ジュカインナイト",
			"쟈카인나이트",
			"蜥蜴王之石",
			"Sceptilite"
		],
		megaStone: true,
		sprite: './src/assets/images/items/sceptilite.png',
		price: 100000000,
		description: [
			"Mega Evolves the Pokémon holding it. Only one Pokémon can be Mega Evolved.",
			"Megaevoluciona al Pokémon que pueda sostenerla. Solo un Pokémon puede estar megaevolucionado.",
			"Fait méga-évoluer le Pokémon qui la tient. Un seul Pokémon peut être méga-évolué.",
			"Mega Evolui o Pokémon que a estiver segurando. Apenas um Pokémon pode estar Mega Evoluído.",
			"Mega-evolve il Pokémon che la tiene. Solo un Pokémon può essere Mega Evoluto.",
			"Mega-entwickelt das Pokémon, das es hält. Nur ein Pokémon kann megaentwickelt sein.",
			"持たせたポケモンがメガ進化する。メガ進化できるポケモンは1匹のみ。",
			"가지고 있는 포켓몬이 메가진화합니다. 메가진화할 수 있는 포켓몬은 하나뿐입니다.",
			"持有它的宝可梦会进行超级进化。每次只有一个宝可梦能超级进化。",
			"Mega Ewoluuje Pokémona, który ją trzyma. Tylko jeden Pokémon może być w Mega Ewolucji."
		],
		restriction: {
			key: 'sceptile'
		}
	},
	charizarditeX: {
		id: 'charizarditeX',
		name: [
			"Charizardite X",
			"Charizardita X",
			"Charizardite X",
			"Charizardite X",
			"Charizardite X",
			"Gluraknit X",
			"リザードナイトX",
			"리자몽나이트 X",
			"喷火龙之石X",
			"Charizardite X"
		],
		megaStone: true,
		sprite: './src/assets/images/items/charizardite-x.png',
		price: 100000000,
		description: [
			"Mega Evolves the Pokémon holding it. Only one Pokémon can be Mega Evolved.",
			"Megaevoluciona al Pokémon que pueda sostenerla. Solo un Pokémon puede estar megaevolucionado.",
			"Fait méga-évoluer le Pokémon qui la tient. Un seul Pokémon peut être méga-évolué.",
			"Mega Evolui o Pokémon que a estiver segurando. Apenas um Pokémon pode estar Mega Evoluído.",
			"Mega-evolve il Pokémon che la tiene. Solo un Pokémon può essere Mega Evoluto.",
			"Mega-entwickelt das Pokémon, das es hält. Nur ein Pokémon kann megaentwickelt sein.",
			"持たせたポケモンがメガ進化する。メガ進化できるポケモンは1匹のみ。",
			"가지고 있는 포켓몬이 메가진화합니다. 메가진화할 수 있는 포켓몬은 하나뿐입니다.",
			"持有它的宝可梦会进行超级进化。每次只有一个宝可梦能超级进化。",
			"Mega Ewoluuje Pokémona, który ją trzyma. Tylko jeden Pokémon może być w Mega Ewolucji."
		],
		restriction: {
			key: 'charizard'
		}
	},
	// magmaStone: {
	// 	id: 'magmaStone',
	// 	name: [
	// 		"Magma Stone",
	// 		"Magma Stone",
	// 		"Magma Stone",
	// 		"Magma Stone",
	// 		"Magma Stone",
	// 		"Magma Stone",
	// 		"ひでりのいし",
	// 		"뜨거운바위",
	// 		"熱岩",
	// 		"Magma Stone",
	// 	],
	// 	sprite: './src/assets/images/items/magma-stone.png',
	// 	price: 50000,
	// 	description: [
	// 		'Increases burn duration to 20 seconds.', 
	// 		'Aumenta la duración de la quemadura a 20 segundos.', 
	// 		'Augmente la durée de brûlure à 20 secondes.', 
	// 		'Aumenta a duração da queimadura para 20 segundos.', 
	// 		'Aumenta la durata della bruciatura a 20 secondi.', 
	// 		'Erhöht die Branddauer auf 20 Sekunden.', 
	// 		'やけどの持続時間を20秒に増加させる。', 
	// 		'화상 지속 시간을 20초로 늘린다.', 
	// 		'将灼烧持续时间增加到20秒。', 
	// 		'Zwiększa czas trwania spalenia do 20 sekund.'
	// 	],
	// 	restriction: {
	// 		id: [0, 9, 52, 73, 96]
	// 	}
	// },
	tinyMushroom: {
		id: 'tinyMushroom',
		name: [
			"Tiny Mushroom",
			"Miniseta",
			"Petit Champignon",
			"Mini Cogumelo",
			"Minifungo",
			"Minipilz",
			"ちいさなキノコ",
			"작은버섯",
			"小蘑菇",
			"Tiny Mushroom",
		],
		sprite: './src/assets/images/items/tiny-mushroom.png',
		price: 0,
		description: [
			'Grants $500,000 when obtained.',
			'Otorga $500.000 al ser obtenida.',
			'Donne 500 000 $ lorsqu’il est obtenu.',
			'Concede $500.000 ao ser obtido.',
			'Concede 500.000 $ quando ottenuto.',
			'Gewährt $500.000 beim Erhalten.',
			'入手時に500,000ドルがもらえる。',
			'획득 시 500,000$를 제공한다.',
			'获得时可获得500,000$。',
			'Przyznaje 500 000 $ po zdobyciu.'
		],
		restriction: 'notEquipable',
		amount: 500000
	},
	rareBone: {
		id: 'rareBone',
		name: [
			"Rare Bone",
			"Hueso Raro",
			"Os Rare",
			"Osso Raro",
			"Osso Raro",
			"Seltenknochen",
			"きちょうなホネ",
			"귀한뼈",
			"贵重骨头",
			"Rare Bone",
		],
		sprite: './src/assets/images/items/rare-bone.png',
		price: 0,
		description: [
			'Grants $2,500,000 when obtained.',
			'Otorga $2.500.000 al ser obtenida.',
			'Donne 2 500 000 $ lorsqu’il est obtenu.',
			'Concede $2.500.000 ao ser obtido.',
			'Concede 2.500.000 $ quando ottenuto.',
			'Gewährt $2.500.000 beim Erhalten.',
			'入手時に2,500,000ドルがもらえる。',
			'획득 시 2,500,000$를 제공한다.',
			'获得时可获得2,500,000$。',
			'Przyznaje 2 500 000 $ po zdobyciu.'
		],
		restriction: 'notEquipable',
		amount: 2500000
	},
	slowpokeTail: {
		id: 'slowpokeTail',
		name: [
			"Slowpoke Tail",
			"Cola Slowpoke",
			"Queue Ramoloss",
			"Cauda de Slowpoke",
			"Coda di Slowpoke",
			"Flegmonrute",
			"おいしいシッポ",
			"맛있는꼬리",
			"美味尾巴",
			"Slowpoke Tail"
		],
		sprite: './src/assets/images/items/slowpoke-tail.png',
		price: 0,
		description: [
			'Grants $50,000,000 when obtained.',
			'Otorga $50.000.000 al ser obtenida.',
			'Donne 50 000 000 $ lorsqu’il est obtenu.',
			'Concede $50.000.000 ao ser obtido.',
			'Concede 50.000.000 $ quando ottenuto.',
			'Gewährt $50.000.000 beim Erhalten.',
			'入手時に50,000,000ドルがもらえる。',
			'획득 시 50,000,000$를 제공한다.',
			'获得时可获得50,000,000$。',
			'Przyznaje 50 000 000 $ po zdobyciu.'
		],
		restriction: 'notEquipable',
		amount: 50000000
	},
}

export const itemListData = [ 
	'protein', 'carbos', 'lifeOrb', 'lightClay', 'twistedSpoon', 'clefairyDoll', 
	'amuletCoin', 'fertiliser', 'heartScale', 'squirtBottle', 'wideLens', 'choiceScarf', 'airBalloon', 
	'oldRod', 'heatRock', 'dampMulch', 'softSand', 'heavyDutyBoots', 'shieldBreakerBullet', 'shellBell', 
	'stickyBarb', 'starCandy', 'electirizer', 'cellBattery', 'leek', 'thickClub', 'lightBall', 
	'nanabBerry', 'bigRoot', 'sprayduck', 'razorClaw', 'ringTarget', 'spellTag', 'sharpBeak', 'clawFossil',
	'sniperScope', 'loadedDice', 'quickPowder', 'metalPowder', 'hardStone', 'domeFossil', 'starPiece', 'rockyHelmet', 
	'berryJuice', 'blueBandana', 'adrenalineOrb', 'zoomLens', 'metronome', 'strangeIdol', 'helixFossil', 'spindaCocktail', 'dragonFang', 
	'ejectButton', 'nightmareCloth', 'poisonBarb', 'silphScope', 'quickClaw', 'revelationAroma', 'falmeOrb', 
	'badgeOfHonor', 'toxicOrb', 

	'absolite', 'sceptilite', 'charizarditeX', 'alakazite', 

	'shinyCharm', 'bicycle', 

	'gimmighoul', 
]

export const itemListDataUpdate = [
	'absolite', 'sceptilite', 'charizarditeX', 'alakazite', 'gimmighoul', 
]

export const itemBackup = [...itemListData];
