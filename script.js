// ============================================
// TRIVIA TYCOON - GAME STATE & CONFIGURATION
// ============================================

const game = {
  money: 50000,
  level: 10,
  xp: 0,
  maxXp: 462,
  energy: 5,
  maxEnergy: 5,
  day: 1,
  jobIndex: 0,
  inventory: [],
  adRevivesUsed: 0,
  pot: 0,
  activeTournament: null,
  dayEarnings: 0,
  questionsAnswered: 0,
  questionMultiplier: 1.0,
  usedQuestions: [],
  bjDeck: [],
  bjPlayer: 0,
  bjDealer: 0,
  bjBet: 0,
  slotSpinning: false,
  rouletteSpinning: false,
  currentCorrectAnswer: null,
  rouletteCurrentRotation: 0,
  horses: [],
  currentAuction: null,
  auctionTimeLeft: 0,
  auctionInterval: null,
  achievements: [],
  playerName: "Jogador Anónimo"
};

const tournaments = {
  beginner: { name: "Liga Iniciante", prize: 25, cost: 1, req: 1, difficulty: 'beginner' },
  easy: { name: "Taça de Bairro", prize: 50, cost: 1, req: 2, difficulty: 'easy' },
  medium: { name: "Quiz Nacional", prize: 150, cost: 2, req: 5, difficulty: 'medium' },
  advanced: { name: "Campeonato Regional", prize: 400, cost: 2, req: 8, difficulty: 'advanced' },
  hard: { name: "Tycoon Master", prize: 800, cost: 3, req: 12, difficulty: 'hard' },
  extreme: { name: "Elite Mundial", prize: 2000, cost: 4, req: 18, difficulty: 'extreme' }
};

const questions = {
  beginner: [
    { q: "Qual a capital de Portugal?", opts: ["Madrid", "Lisboa", "Porto", "Faro"], c: 1, cat: "🌍 Geografia" },
    { q: "Quantas patas tem um cão?", opts: ["2", "4", "6", "8"], c: 1, cat: "🐾 Animais" },
    { q: "Qual a cor do céu em dia claro?", opts: ["Verde", "Vermelho", "Azul", "Amarelo"], c: 2, cat: "🌈 Ciência" },
    { q: "Quantos dias tem uma semana?", opts: ["5", "6", "7", "8"], c: 2, cat: "📅 Geral" },
    { q: "Qual fruta é amarela e curva?", opts: ["Maçã", "Laranja", "Banana", "Uva"], c: 2, cat: "🍎 Alimentos" },
    { q: "Em que estação as folhas caem?", opts: ["Verão", "Outono", "Primavera", "Inverno"], c: 1, cat: "🍂 Natureza" },
    { q: "Qual animal mia?", opts: ["Cão", "Gato", "Pássaro", "Peixe"], c: 1, cat: "🐾 Animais" },
    { q: "Quantos meses tem um ano?", opts: ["10", "11", "12", "13"], c: 2, cat: "📅 Geral" },
    { q: "Qual é o maior - uma formiga ou um elefante?", opts: ["Formiga", "São iguais", "Elefante", "Depende"], c: 2, cat: "🐾 Animais" },
    { q: "De que cor é o leite?", opts: ["Azul", "Verde", "Branco", "Preto"], c: 2, cat: "🍎 Alimentos" }
  ],
  easy: [
    { q: "Qual a capital de França?", opts: ["Madrid", "Paris", "Londres", "Berlim"], c: 1, cat: "🌍 Geografia" },
    { q: "Qual a fórmula química da água?", opts: ["O2", "H2O", "CO2", "HO"], c: 1, cat: "🔬 Química" },
    { q: "Qual é a estrela do sistema solar?", opts: ["Lua", "Marte", "Sol", "Vénus"], c: 2, cat: "🚀 Espaço" },
    { q: "Quantos lados tem um triângulo?", opts: ["3", "4", "5", "2"], c: 0, cat: "📐 Matemática" },
    { q: "Qual a moeda oficial dos EUA?", opts: ["Euro", "Iene", "Dólar", "Libra"], c: 2, cat: "💰 Economia" },
    { q: "Qual animal é conhecido por latir?", opts: ["Gato", "Cachorro", "Pássaro", "Peixe"], c: 1, cat: "🐾 Animais" },
    { q: "Em que continente fica Portugal?", opts: ["Ásia", "África", "Europa", "América"], c: 2, cat: "🌍 Geografia" },
    { q: "Quem escreveu 'Os Lusíadas'?", opts: ["Fernando Pessoa", "Camões", "Eça de Queirós", "Saramago"], c: 1, cat: "📚 Literatura" },
    { q: "Qual o oceano entre Europa e América?", opts: ["Pacífico", "Índico", "Atlântico", "Ártico"], c: 2, cat: "🌍 Geografia" },
    { q: "Quantas horas tem um dia?", opts: ["12", "24", "36", "48"], c: 1, cat: "📅 Geral" },
    { q: "Qual o resultado de 7 x 8?", opts: ["54", "56", "58", "64"], c: 1, cat: "📐 Matemática" },
    { q: "Qual o maior planeta do sistema solar?", opts: ["Marte", "Júpiter", "Saturno", "Terra"], c: 1, cat: "🚀 Espaço" },
    { q: "De que país é a pizza original?", opts: ["EUA", "França", "Itália", "Espanha"], c: 2, cat: "🍎 Alimentos" },
    { q: "Qual instrumento tem 88 teclas?", opts: ["Guitarra", "Violino", "Piano", "Flauta"], c: 2, cat: "🎵 Música" },
    { q: "Quem pintou a Gioconda?", opts: ["Picasso", "Da Vinci", "Van Gogh", "Monet"], c: 1, cat: "🎨 Arte" }
  ],
  medium: [
    { q: "Quem descobriu o Brasil?", opts: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Bartolomeu Dias"], c: 0, cat: "📜 História" },
    { q: "Qual o animal terrestre mais rápido?", opts: ["Leão", "Chita", "Águia", "Cavalo"], c: 1, cat: "🐾 Animais" },
    { q: "Em que ano foi o primeiro desembarque na Lua?", opts: ["1965", "1969", "1972", "1975"], c: 1, cat: "🚀 Espaço" },
    { q: "Quem pintou a Mona Lisa?", opts: ["Picasso", "Van Gogh", "Leonardo da Vinci", "Michelangelo"], c: 2, cat: "🎨 Arte" },
    { q: "Quantos continentes existem?", opts: ["5", "6", "7", "8"], c: 2, cat: "🌍 Geografia" },
    { q: "Qual a capital do Japão?", opts: ["Seul", "Pequim", "Tóquio", "Bangkok"], c: 2, cat: "🌍 Geografia" },
    { q: "Em que ano acabou a Segunda Guerra Mundial?", opts: ["1943", "1944", "1945", "1946"], c: 2, cat: "📜 História" },
    { q: "Qual o elemento químico com símbolo 'Fe'?", opts: ["Ferro", "Fósforo", "Flúor", "Férmio"], c: 0, cat: "🔬 Química" },
    { q: "Quem compôs a 'Nona Sinfonia'?", opts: ["Mozart", "Bach", "Beethoven", "Chopin"], c: 2, cat: "🎵 Música" },
    { q: "Qual o rio mais longo do mundo?", opts: ["Amazonas", "Nilo", "Mississípi", "Yangtzé"], c: 1, cat: "🌍 Geografia" },
    { q: "De que país era Albert Einstein?", opts: ["EUA", "Alemanha", "Suíça", "Áustria"], c: 1, cat: "🔬 Ciência" },
    { q: "Qual a fórmula da área do círculo?", opts: ["πr", "πr²", "2πr", "πd"], c: 1, cat: "📐 Matemática" },
    { q: "Quem escreveu 'Dom Quixote'?", opts: ["Shakespeare", "Cervantes", "Dante", "Goethe"], c: 1, cat: "📚 Literatura" },
    { q: "Qual o osso mais longo do corpo humano?", opts: ["Tíbia", "Fémur", "Úmero", "Rádio"], c: 1, cat: "🏥 Biologia" },
    { q: "Em que ano caiu o Muro de Berlim?", opts: ["1987", "1989", "1991", "1993"], c: 1, cat: "📜 História" },
    { q: "Qual metal é líquido à temperatura ambiente?", opts: ["Chumbo", "Mercúrio", "Zinco", "Estanho"], c: 1, cat: "🔬 Química" }
  ],
  advanced: [
    { q: "Quem formulou a Teoria da Relatividade?", opts: ["Newton", "Einstein", "Hawking", "Bohr"], c: 1, cat: "🔬 Física" },
    { q: "Qual a capital da Austrália?", opts: ["Sydney", "Melbourne", "Camberra", "Brisbane"], c: 2, cat: "🌍 Geografia" },
    { q: "Em que ano Portugal entrou na União Europeia?", opts: ["1982", "1986", "1990", "1994"], c: 1, cat: "📜 História" },
    { q: "Qual é o menor país do mundo?", opts: ["Mónaco", "Vaticano", "San Marino", "Liechtenstein"], c: 1, cat: "🌍 Geografia" },
    { q: "Quem pintou 'A Noite Estrelada'?", opts: ["Monet", "Van Gogh", "Picasso", "Dalí"], c: 1, cat: "🎨 Arte" },
    { q: "Qual vitamina é produzida pela exposição solar?", opts: ["A", "B12", "C", "D"], c: 3, cat: "🏥 Saúde" },
    { q: "Qual o símbolo químico do ouro?", opts: ["Ag", "Au", "Or", "Go"], c: 1, cat: "🔬 Química" },
    { q: "Em que cidade fica a Torre de Pisa?", opts: ["Roma", "Florença", "Pisa", "Milão"], c: 2, cat: "🌍 Geografia" },
    { q: "Quem foi o primeiro Presidente dos EUA?", opts: ["Lincoln", "Jefferson", "Washington", "Adams"], c: 2, cat: "📜 História" },
    { q: "Qual o maior órgão do corpo humano?", opts: ["Fígado", "Coração", "Pele", "Pulmões"], c: 2, cat: "🏥 Biologia" },
    { q: "De que país é a empresa Toyota?", opts: ["China", "Coreia", "Japão", "EUA"], c: 2, cat: "🏭 Negócios" },
    { q: "Quem descobriu a penicilina?", opts: ["Pasteur", "Fleming", "Koch", "Jenner"], c: 1, cat: "🏥 Medicina" },
    { q: "Qual planeta é conhecido como 'Planeta Vermelho'?", opts: ["Vénus", "Marte", "Júpiter", "Saturno"], c: 1, cat: "🚀 Espaço" },
    { q: "Em que ano foi fundada a ONU?", opts: ["1940", "1945", "1950", "1955"], c: 1, cat: "📜 História" }
  ],
  hard: [
    { q: "Qual o metal mais precioso por valor?", opts: ["Ouro", "Platina", "Prata", "Ródio"], c: 3, cat: "🔬 Química" },
    { q: "Quantos elementos químicos tem a tabela periódica?", opts: ["108", "118", "128", "138"], c: 1, cat: "🔬 Química" },
    { q: "Qual a velocidade da luz no vácuo?", opts: ["299.792 km/s", "300.000 km/s", "250.000 km/s", "350.000 km/s"], c: 0, cat: "🔬 Física" },
    { q: "Qual o maior deserto do mundo?", opts: ["Saara", "Gobi", "Antártida", "Arábia"], c: 2, cat: "🌍 Geografia" },
    { q: "Quantos cromossomas tem o ser humano?", opts: ["23", "44", "46", "48"], c: 2, cat: "🏥 Biologia" },
    { q: "Em que ano começou a Primeira Guerra Mundial?", opts: ["1912", "1914", "1916", "1918"], c: 1, cat: "📜 História" },
    { q: "Qual é a constante de Avogadro?", opts: ["6.022×10²³", "3.14159", "9.8 m/s²", "299.792"], c: 0, cat: "🔬 Química" },
    { q: "Quem escreveu 'Crime e Castigo'?", opts: ["Tolstói", "Dostoiévski", "Tchekhov", "Turguéniev"], c: 1, cat: "📚 Literatura" },
    { q: "Qual o ponto mais profundo do oceano?", opts: ["Fossa das Marianas", "Fossa de Porto Rico", "Fossa de Java", "Fossa das Filipinas"], c: 0, cat: "🌍 Geografia" },
    { q: "Em que ano foi inventada a imprensa por Gutenberg?", opts: ["1340", "1440", "1540", "1640"], c: 1, cat: "📜 História" },
    { q: "Qual o isótopo radioativo do carbono usado em datação?", opts: ["C-12", "C-13", "C-14", "C-16"], c: 2, cat: "🔬 Química" },
    { q: "Quem foi o arquiteto da Sagrada Família?", opts: ["Le Corbusier", "Gaudí", "Frank Lloyd Wright", "Niemeyer"], c: 1, cat: "🎨 Arquitetura" }
  ],
  extreme: [
    { q: "Qual a constante gravitacional universal (G)?", opts: ["6.674×10⁻¹¹ N⋅m²/kg²", "9.8 m/s²", "3×10⁸ m/s", "1.602×10⁻¹⁹ C"], c: 0, cat: "🔬 Física" },
    { q: "Em que ano foi assinado o Tratado de Tordesilhas?", opts: ["1492", "1494", "1500", "1502"], c: 1, cat: "📜 História" },
    { q: "Qual o número atómico do Urânio?", opts: ["90", "92", "94", "96"], c: 1, cat: "🔬 Química" },
    { q: "Quem desenvolveu o cálculo infinitesimal junto com Newton?", opts: ["Euler", "Gauss", "Leibniz", "Descartes"], c: 2, cat: "📐 Matemática" },
    { q: "Qual a capital do Cazaquistão?", opts: ["Almaty", "Astana", "Tashkent", "Bishkek"], c: 1, cat: "🌍 Geografia" },
    { q: "Em que ano foi fundada a primeira universidade europeia (Bolonha)?", opts: ["988", "1088", "1188", "1288"], c: 1, cat: "📜 História" },
    { q: "Qual o teorema que afirma que não existem três inteiros positivos a,b,c que satisfazem aⁿ+bⁿ=cⁿ para n>2?", opts: ["Teorema de Pitágoras", "Último Teorema de Fermat", "Teorema de Euler", "Teorema de Gauss"], c: 1, cat: "📐 Matemática" },
    { q: "Qual o compositor da ópera 'A Flauta Mágica'?", opts: ["Verdi", "Puccini", "Mozart", "Wagner"], c: 2, cat: "🎵 Música" },
    { q: "Qual a distância aproximada da Terra ao Sol?", opts: ["50 milhões km", "100 milhões km", "150 milhões km", "200 milhões km"], c: 2, cat: "🚀 Espaço" },
    { q: "Quem foi o último imperador romano do Ocidente?", opts: ["Nero", "Constantino", "Rómulo Augústulo", "Teodósio"], c: 2, cat: "📜 História" }
  ]
};

const jobs = [
  { name: "Estagiário", salary: 40, bills: 30, req: 1, adBonus: 25 },
  { name: "Assistente", salary: 75, bills: 60, req: 3, adBonus: 50 },
  { name: "Analista", salary: 150, bills: 120, req: 6, adBonus: 100 },
  { name: "Gerente", salary: 300, bills: 250, req: 9, adBonus: 200 },
  { name: "Director", salary: 600, bills: 500, req: 13, adBonus: 400 },
  { name: "VP Executivo", salary: 1250, bills: 1000, req: 17, adBonus: 750 },
  { name: "CEO", salary: 2500, bills: 2000, req: 22, adBonus: 1500 }
];

const furniture = [
  { name: "Planta Decorativa", price: 50, icon: "🪴", type: "floor" },
  { name: "Sofá Moderno", price: 300, icon: "🛋️", type: "floor" },
  { name: "TV 4K Ultra", price: 800, icon: "📺", type: "floor" },
  { name: "Cama King Size", price: 1500, icon: "🛏️", type: "floor" },
  { name: "Quadro de Arte", price: 2500, icon: "🖼️", type: "wall" },
  { name: "Candeeiro de Cristal", price: 3500, icon: "💡", type: "floor" },
  { name: "Piano de Cauda", price: 8000, icon: "🎹", type: "floor" },
  { name: "Biblioteca Clássica", price: 5000, icon: "📚", type: "floor" }
];

const rareItems = [
  { name: "Mona Lisa (Réplica Museu)", price: 50000, icon: "🖼️", type: "wall" },
  { name: "Trono Medieval", price: 80000, icon: "👑", type: "floor" },
  { name: "Diamante Hope (Réplica)", price: 150000, icon: "💎", type: "floor" },
  { name: "Estátua de David", price: 200000, icon: "🗿", type: "floor" },
  { name: "Coroa Imperial", price: 350000, icon: "👑", type: "wall" },
  { name: "Tesla Roadster Espacial", price: 500000, icon: "🚀", type: "floor" }
];

const properties = [
  { name: "Apartamento T1 Centro", price: 15000, icon: "🏢" },
  { name: "Moradia Suburbana", price: 40000, icon: "🏡" },
  { name: "Penthouse Vista Mar", price: 120000, icon: "🏙️" },
  { name: "Mansão de Luxo", price: 500000, icon: "🏰" },
  { name: "Castelo Europeu", price: 2500000, icon: "🏰" },
  { name: "Ilha Privada", price: 10000000, icon: "🏝️" }
];

const cars = [
  { name: "Opel Corsa", price: 1800, icon: "🚗" },
  { name: "BMW Série 1", price: 3500, icon: "🚗" },
  { name: "Mercedes Classe C", price: 5500, icon: "🚗" },
  { name: "Porsche 911", price: 12000, icon: "🏎️" },
  { name: "Ferrari F8 Tributo", price: 28000, icon: "🏎️" },
  { name: "Lamborghini Aventador", price: 45000, icon: "🏎️" },
  { name: "Bugatti Chiron", price: 300000, icon: "🏎️" },
  { name: "Koenigsegg Jesko", price: 350000, icon: "🏎️" }
];

const bikes = [
  { name: "Vespa Primavera", price: 550, icon: "🛵" },
  { name: "Yamaha MT-07", price: 850, icon: "🏍️" },
  { name: "Ducati Monster", price: 1500, icon: "🏍️" },
  { name: "Harley-Davidson", price: 2500, icon: "🏍️" },
  { name: "BMW S1000RR", price: 2200, icon: "🏍️" },
  { name: "Ducati Panigale V4", price: 3500, icon: "🏍️" }
];

const boats = [
  { name: "Barco Pesca Pequeno", price: 2500, icon: "⛵" },
  { name: "Lancha Desportiva", price: 12000, icon: "🚤" },
  { name: "Veleiro Luxo 40ft", price: 50000, icon: "⛵" },
  { name: "Yacht Médio 60ft", price: 250000, icon: "🛥️" },
  { name: "Super Yacht 100ft", price: 1500000, icon: "🛥️" },
  { name: "Mega Yacht 200ft", price: 8000000, icon: "🛥️" }
];

const aircraft = [
  { name: "Cessna 172 Skyhawk", price: 40000, icon: "✈️" },
  { name: "Helicóptero Robinson R44", price: 50000, icon: "🚁" },
  { name: "Cirrus SR22", price: 90000, icon: "✈️" },
  { name: "Helicóptero Bell 407", price: 350000, icon: "🚁" },
  { name: "Jato Executivo Citation", price: 800000, icon: "✈️" },
  { name: "Gulfstream G650", price: 7000000, icon: "✈️" },
  { name: "Boeing Business Jet", price: 9000000, icon: "✈️" }
];

const watches = [
  { name: "Casio G-Shock", price: 15, icon: "⌚" },
  { name: "Seiko Presage", price: 50, icon: "⌚" },
  { name: "TAG Heuer Carrera", price: 350, icon: "⌚" },
  { name: "Omega Seamaster", price: 500, icon: "⌚" },
  { name: "Rolex Submariner", price: 1500, icon: "⌚" },
  { name: "Patek Philippe Nautilus", price: 8000, icon: "⌚" },
  { name: "Audemars Piguet Royal Oak", price: 12000, icon: "⌚" },
  { name: "Richard Mille RM 011", price: 25000, icon: "⌚" }
];

const jewelry = [
  { name: "Anel de Ouro 18k", price: 200, icon: "💍" },
  { name: "Colar Diamantes 1ct", price: 800, icon: "📿" },
  { name: "Brincos Esmeralda", price: 1500, icon: "💎" },
  { name: "Pulseira Cartier Love", price: 750, icon: "💎" },
  { name: "Anel Diamante 3ct", price: 5000, icon: "💍" },
  { name: "Colar Rubis Burmese", price: 12000, icon: "📿" },
  { name: "Safira Azul 10ct", price: 20000, icon: "💎" },
  { name: "Diamante Rosa Fancy", price: 150000, icon: "💎" }
];

const collectibles = [
  { name: "Moeda Ouro Antiga", price: 500, icon: "🪙" },
  { name: "Violino Stradivarius (Réplica)", price: 5000, icon: "🎻" },
  { name: "Bola Ouro Maciço", price: 10000, icon: "⚽" },
  { name: "Estátua Bronze Romano", price: 25000, icon: "🗿" },
  { name: "Pintura Original Impressionista", price: 80000, icon: "🖼️" },
  { name: "Manuscrito Iluminado Medieval", price: 120000, icon: "📜" },
  { name: "Múmia Egípcia Autêntica", price: 300000, icon: "🏺" }
];

const rareItemsShop = [
  { name: "Carta Pokemon Charizard 1st Ed", price: 42000, icon: "🎴" },
  { name: "Comic Action Comics #1", price: 300000, icon: "📖" },
  { name: "Bola Copa 1966 Assinada", price: 15000, icon: "⚽" },
  { name: "Guitarra Elvis Presley", price: 50000, icon: "🎸" },
  { name: "Traje Neil Armstrong", price: 250000, icon: "👨‍🚀" },
  { name: "Meteorito Lunar Autêntico", price: 180000, icon: "☄️" },
  { name: "Fóssil T-Rex Completo", price: 800000, icon: "🦖" }
];

const achievements = [
  { id: 'first_win', name: 'Primeira Vitória', desc: 'Ganha o teu primeiro torneio', icon: '🏆', check: () => game.dayEarnings > 0 },
  { id: 'level_10', name: 'Veterano', desc: 'Alcança o nível 10', icon: '⭐', check: () => game.level >= 10 },
  { id: 'rich', name: 'Milionário', desc: 'Acumula $100,000', icon: '💰', check: () => game.money >= 100000 },
  { id: 'horse_owner', name: 'Criador de Cavalos', desc: 'Compra o teu primeiro cavalo', icon: '🐴', check: () => game.horses.filter(h => h.owner === 'player').length > 0 },
  { id: 'collector', name: 'Colecionador', desc: 'Compra 10 itens diferentes', icon: '🎨', check: () => game.inventory.length >= 10 }
];

// ============================================
// HORSE SYSTEM
// ============================================

const horseBreeds = [
  { 
    name: "Puro-Sangue Inglês", 
    basePrice: 5000,
    colors: ["🐴", "🐎"],
    speedRange: [7, 10],
    staminaRange: [5, 8],
    accelerationRange: [6, 9]
  },
  { 
    name: "Quarto de Milha", 
    basePrice: 4000,
    colors: ["🐴", "🐎"],
    speedRange: [6, 9],
    staminaRange: [6, 9],
    accelerationRange: [8, 10]
  },
  { 
    name: "Árabe", 
    basePrice: 6000,
    colors: ["🐴", "🐎"],
    speedRange: [5, 8],
    staminaRange: [8, 10],
    accelerationRange: [5, 8]
  },
  { 
    name: "Appaloosa", 
    basePrice: 3500,
    colors: ["🐴", "🐎"],
    speedRange: [5, 7],
    staminaRange: [7, 9],
    accelerationRange: [6, 8]
  },
  { 
    name: "Mustang", 
    basePrice: 4500,
    colors: ["🐴", "🐎"],
    speedRange: [6, 8],
    staminaRange: [7, 10],
    accelerationRange: [6, 9]
  }
];

const raceTypes = [
  { 
    name: "Sprint Local", 
    prize: 500, 
    entryCost: 100, 
    distance: "curta",
    req: 5,
    statWeight: { speed: 0.5, stamina: 0.2, acceleration: 0.3 }
  },
  { 
    name: "Corrida Regional", 
    prize: 1500, 
    entryCost: 300, 
    distance: "média",
    req: 8,
    statWeight: { speed: 0.4, stamina: 0.3, acceleration: 0.3 }
  },
  { 
    name: "Maratona Nacional", 
    prize: 4000, 
    entryCost: 800, 
    distance: "longa",
    req: 12,
    statWeight: { speed: 0.3, stamina: 0.5, acceleration: 0.2 }
  },
  { 
    name: "Grande Prémio", 
    prize: 10000, 
    entryCost: 2000, 
    distance: "longa",
    req: 15,
    statWeight: { speed: 0.4, stamina: 0.4, acceleration: 0.2 }
  }
];

const npcNames = ["Thunder", "Lightning", "Spirit", "Shadow", "Blaze", "Storm", "Comet", "Flash", "Phoenix", "Rocket"];

function generateHorse(forMarket = false) {
  const breed = horseBreeds[Math.floor(Math.random() * horseBreeds.length)];
  const color = breed.colors[Math.floor(Math.random() * breed.colors.length)];
  
  const speed = Math.floor(Math.random() * (breed.speedRange[1] - breed.speedRange[0] + 1)) + breed.speedRange[0];
  const stamina = Math.floor(Math.random() * (breed.staminaRange[1] - breed.staminaRange[0] + 1)) + breed.staminaRange[0];
  const acceleration = Math.floor(Math.random() * (breed.accelerationRange[1] - breed.accelerationRange[0] + 1)) + breed.accelerationRange[0];
  
  const statTotal = speed + stamina + acceleration;
  const priceMultiplier = 1 + (statTotal - 18) / 12;
  const price = Math.floor(breed.basePrice * priceMultiplier);
  
  return {
    id: Date.now() + Math.random(),
    name: npcNames[Math.floor(Math.random() * npcNames.length)] + " " + (Math.floor(Math.random() * 100)),
    breed: breed.name,
    icon: color,
    speed,
    stamina,
    acceleration,
    price,
    owner: forMarket ? null : "player"
  };
}

function generateMarketHorses() {
  const horses = [];
  for (let i = 0; i < 6; i++) {
    horses.push(generateHorse(true));
  }
  return horses;
}

// ============================================
// UI & NAVIGATION
// ============================================

function showTab(tabId) {
  document.querySelectorAll('.content').forEach(c => c.style.display = 'none');
  document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
  
  const content = document.getElementById(tabId);
  const btn = document.getElementById('btn-' + tabId);
  
  if (content) content.style.display = 'block';
  if (btn) btn.classList.add('active');
  
  if (tabId === 'stable') {
    if (game.level < 5) {
      showNotification("🔒 Estábulo disponível no Nível 5!", 'error');
      showTab('trivia');
      return;
    }
    updateStableUI();
  }
  if (tabId === 'profile') {
    const nameInput = document.getElementById('player-name-input');
    if (nameInput) nameInput.value = game.playerName;
    updateProfileDisplay();
  }
}

function showProfileSubTab(subTab) {
  const nameInput = document.getElementById('player-name-input');
  if (nameInput && game.playerName) {
    nameInput.value = game.playerName;
  }
  document.querySelectorAll('.profile-subtab').forEach(s => s.style.display = 'none');
  document.querySelectorAll('.profile-submenu-btn').forEach(b => b.classList.remove('active'));
  
  const subtabs = {
    'achievements': 'profile-achievements',
    'inventory': 'profile-inventory',
    'settings': 'profile-settings',
    'terms': 'profile-terms'
  };
  
  document.getElementById(subtabs[subTab]).style.display = 'block';
  event.target.classList.add('active');
}

function savePlayerName() {
  const input = document.getElementById('player-name-input');
  const name = input.value.trim();
  
  if (name.length === 0) {
    showNotification("❌ Introduz um nome válido!", 'error');
    return;
  }
  
  game.playerName = name;
  createParticles('✨', 15);
  showNotification(`✅ Nome guardado: ${name}`, 'success');
}

function confirmReset() {
  const confirm = window.confirm("⚠️ ATENÇÃO: Vais perder TODO o progresso!\n\nTens a certeza que queres reiniciar o jogo?");
  
  if (confirm) {
    localStorage.clear();
    location.reload();
  }
}

function showShopCategory(category) {
  document.querySelectorAll('.shop-category').forEach(c => c.style.display = 'none');
  document.querySelectorAll('.simple-shop-btn').forEach(t => t.classList.remove('active'));
  
  const categoryMap = {
    properties: 'shop-properties',
    vehicles: 'shop-vehicles',
    luxury: 'shop-luxury'
  };
  
  document.getElementById(categoryMap[category]).style.display = 'block';
  event.target.classList.add('active');
}

function showStableSection(section) {
  document.querySelectorAll('.stable-section').forEach(s => s.style.display = 'none');
  document.querySelectorAll('.stable-nav-btn').forEach(b => b.classList.remove('active'));
  
  const sectionMap = {
    'my-stable': 'stable-my-stable',
    'market': 'stable-market',
    'auction': 'stable-auction',
    'races': 'stable-races'
  };
  
  document.getElementById(sectionMap[section]).style.display = 'block';
  event.target.classList.add('active');
  
  if (section === 'auction' && !game.currentAuction) {
    startNewAuction();
  }
  
  updateStableUI();
}

function updateUI() {
  document.getElementById('money').textContent = formatMoney(game.money);
  document.getElementById('level').textContent = game.level;
  document.getElementById('energy-text').textContent = `${game.energy}/${game.maxEnergy}`;
  document.getElementById('day-text').textContent = game.day;
  document.getElementById('xp-text').textContent = `${game.xp}/${game.maxXp}`;
  document.getElementById('ad-value').textContent = formatMoney(jobs[game.jobIndex].adBonus);
  
  const energyPercent = (game.energy / game.maxEnergy * 100);
  const xpPercent = (game.xp / game.maxXp * 100);
  document.getElementById('energy-bar').style.width = energyPercent + '%';
  document.getElementById('xp-bar').style.width = xpPercent + '%';
  
  renderList('furniture-list', furniture, 'furniture');
  renderList('rare-items-list', rareItems, 'rare');
  renderList('properties-list', properties, 'property');
  renderList('cars-list', cars, 'car');
  renderList('bikes-list', bikes, 'bike');
  renderList('boats-list', boats, 'boat');
  renderList('aircraft-list', aircraft, 'aircraft');
  renderList('watches-list', watches, 'watch');
  renderList('jewelry-list', jewelry, 'jewelry');
  renderList('collectibles-list', collectibles, 'collectible');
  renderList('rare-items-shop-list', rareItemsShop, 'rare-shop');
  renderJobs();
  renderHome();
  renderInventory();
  updateProfileDisplay();
  renderAchievements();
}

function formatMoney(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return Math.floor(num).toString();
}

function renderList(elementId, items, type) {
  const el = document.getElementById(elementId);
  if (!el) return;
  
  el.innerHTML = items.map(item => {
    const owned = game.inventory.includes(item.name);
    const canAfford = game.money >= item.price;
    
    return `
      <div class="list-item">
        <div style="display:flex; align-items:center; gap:12px">
          <span style="font-size:24px">${item.icon}</span>
          <div>
            <div style="font-weight:700; font-size:14px; margin-bottom:2px">${item.name}</div>
            <div style="font-size:11px; color:#94a3b8">$${formatMoney(item.price)}</div>
          </div>
        </div>
        ${owned 
          ? '<span style="color:#22c55e; font-weight:900; font-size:12px">✓ COMPRADO</span>' 
          : `<button class="btn-primary ${canAfford ? 'success-gradient' : 'danger-gradient'}" 
                      style="width:auto; padding:8px 16px; font-size:11px" 
                      onclick="buy('${item.name.replace(/'/g, "\\'")}', ${item.price})"
                      ${!canAfford ? 'disabled' : ''}>
                COMPRAR
              </button>`
        }
      </div>
    `;
  }).join('');
}

function renderJobs() {
  const list = document.getElementById('job-list');
  if (!list) return;
  
  const jobEmojis = ["☕", "📁", "📈", "💼", "👔", "🎯", "👑"];
  
list.innerHTML = jobs.map((job, idx) => {
    const isCurrent = game.jobIndex === idx;
    const locked = game.level < job.req;
    const canPromote = idx === game.jobIndex + 1 && !locked;
    
    let borderColor = '#334155';
    if (isCurrent) borderColor = '#22c55e';
    else if (locked) borderColor = '#64748b';
    else if (canPromote) borderColor = '#fbbf24';
    
    return `
      <div class="list-item" style="border-left: 5px solid ${borderColor}; flex-direction:column; align-items:flex-start">
        <div style="display:flex; justify-content:space-between; width:100%; margin-bottom:8px">
          <strong style="color:white; font-size:15px">${jobEmojis[idx]} ${job.name}</strong>
          <span style="font-size:11px; color:#94a3b8; font-weight:600">
            ${locked ? `🔒 Nível ${job.req}` : isCurrent ? '✓ ATUAL' : 'Disponível'}
          </span>
        </div>
        <div style="font-size:12px; color:#cbd5e1; display:flex; justify-content:space-between; width:100%; align-items:center">
          <div>
            <span style="color:#4ade80">+$${formatMoney(job.salary)}/dia</span>
            <span style="color:#64748b"> | </span>
            <span style="color:#f87171">-$${formatMoney(job.bills)}/dia</span>
            <span style="color:#64748b"> | </span>
            <span style="color:#fbbf24">+$${formatMoney(job.adBonus)} anúncio</span>
          </div>
          ${canPromote 
            ? `<button onclick="promote(${idx})" class="btn-primary warning-gradient" 
                       style="width:auto; padding:6px 14px; font-size:10px">
                PROMOVER
              </button>` 
            : ''
          }
        </div>
      </div>
    `;
  }).join('');
}

function renderHome() {
  const wallItems = document.getElementById('wall-items');
  const floorItems = document.getElementById('floor-items');
  
  if (!wallItems || !floorItems) return;
  
  wallItems.innerHTML = '';
  floorItems.innerHTML = '';
  
  [...furniture, ...rareItems].forEach(item => {
    if (game.inventory.includes(item.name)) {
      const itemEl = document.createElement('div');
      itemEl.className = `house-item ${item.type}-item`;
      itemEl.textContent = item.icon;
      
      if (item.type === 'wall') {
        wallItems.appendChild(itemEl);
      } else {
        floorItems.appendChild(itemEl);
      }
    }
  });
}

function renderInventory() {
  const container = document.getElementById('inventory-display-grid');
  if (!container) return;
  
  const allItems = [...furniture, ...rareItems, ...properties, ...cars, ...bikes, ...boats, ...aircraft, ...watches, ...jewelry, ...collectibles, ...rareItemsShop];
  const ownedItems = allItems.filter(item => game.inventory.includes(item.name));
  
  const slots = [];
  for (let i = 0; i < 12; i++) {
    if (ownedItems[i]) {
      slots.push(`<div class="inventory-item-slot" title="${ownedItems[i].name}">${ownedItems[i].icon}</div>`);
    } else {
      slots.push(`<div class="inventory-item-slot empty"></div>`);
    }
  }
  
  container.innerHTML = slots.join('');
  
  const countEl = document.getElementById('inventory-count');
  if (countEl) countEl.textContent = `${ownedItems.length} ${ownedItems.length === 1 ? 'item' : 'itens'}`;
}

function renderAchievements() {
  const container = document.getElementById('achievements-grid');
  if (!container) return;
  
  let unlockedCount = 0;
  
  const html = achievements.map(ach => {
    const unlocked = game.achievements.includes(ach.id) || ach.check();
    
    if (unlocked) {
      unlockedCount++;
      if (!game.achievements.includes(ach.id)) {
        game.achievements.push(ach.id);
      }
    }
    
    return `
      <div class="achievement-item ${unlocked ? 'unlocked' : 'locked'}">
        <div class="achievement-icon-wrapper">
          ${unlocked ? ach.icon : '🔒'}
        </div>
        <div class="achievement-details">
          <div class="achievement-title">${ach.name}</div>
          <div class="achievement-description">${ach.desc}</div>
        </div>
      </div>
    `;
  }).join('');
  
  container.innerHTML = html;
  
  const countEl = document.getElementById('achievements-count');
  if (countEl) countEl.textContent = `${unlockedCount}/${achievements.length}`;
}

function buy(itemName, price) {
  if (game.money >= price) {
    game.money -= price;
    game.inventory.push(itemName);
    createParticles('💰', 10);
    updateUI();
    showNotification(`🎉 Compraste: ${itemName}!`, 'success');
  } else {
    showNotification("💸 Dinheiro insuficiente!", 'error');
  }
}

// ============================================
// STABLE SYSTEM
// ============================================

function updateStableUI() {
  const playerHorses = game.horses.filter(h => h.owner === 'player');
  document.getElementById('horse-count').textContent = `${playerHorses.length}/5`;
  
  renderMyHorses();
  renderMarketHorses();
  renderRaces();
}

function renderMyHorses() {
  const container = document.getElementById('my-horses-list');
  if (!container) return;
  
  const playerHorses = game.horses.filter(h => h.owner === 'player');
  
  if (playerHorses.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#94a3b8; padding:40px 20px;">Ainda não tens cavalos. Vai ao Mercado ou Leilão para adquirir!</p>';
    return;
  }
  
  container.innerHTML = playerHorses.map(horse => createHorseCard(horse, true)).join('');
}

function renderMarketHorses() {
  const container = document.getElementById('market-horses-list');
  if (!container) return;
  
  if (!window.marketHorses) {
    window.marketHorses = generateMarketHorses();
  }
  
  container.innerHTML = window.marketHorses.map(horse => createHorseCard(horse, false)).join('');
}

function createHorseCard(horse, owned = false) {
  const stars = (num) => '⭐'.repeat(num) + '☆'.repeat(10 - num);
  
  return `
    <div class="horse-card ${game.level < 5 ? 'horse-locked' : ''}" onclick="showHorseDetail(${horse.id})">
      <div class="horse-icon">${horse.icon}</div>
      <div class="horse-name">${horse.name}</div>
      <div class="horse-breed">${horse.breed}</div>
      <div class="horse-stats">
        <div class="stat-row">
          <span>🏃 Velocidade</span>
          <span class="stat-stars">${stars(horse.speed)}</span>
        </div>
        <div class="stat-row">
          <span>💪 Resistência</span>
          <span class="stat-stars">${stars(horse.stamina)}</span>
        </div>
        <div class="stat-row">
          <span>⚡ Aceleração</span>
          <span class="stat-stars">${stars(horse.acceleration)}</span>
        </div>
      </div>
      ${!owned ? `<div class="horse-price">$${formatMoney(horse.price)}</div>` : ''}
      ${owned ? `
        <button class="btn-primary danger-gradient" onclick="event.stopPropagation(); sellHorse(${horse.id})">
          VENDER ($${formatMoney(Math.floor(horse.price * 0.7))})
        </button>
      ` : ''}
    </div>
  `;
}

function showHorseDetail(horseId) {
  if (game.level < 5) return;
  
  const horse = [...game.horses, ...window.marketHorses].find(h => h.id === horseId);
  if (!horse) return;
  
  const isOwned = game.horses.find(h => h.id === horseId && h.owner === 'player');
  const stars = (num) => '⭐'.repeat(num) + '☆'.repeat(10 - num);
  const playerHorses = game.horses.filter(h => h.owner === 'player');
  const canBuy = game.money >= horse.price && playerHorses.length < 5;
  
  const content = `
    <div class="horse-detail-header">
      <div class="horse-detail-icon">${horse.icon}</div>
      <div class="horse-detail-name">${horse.name}</div>
      <div class="horse-detail-breed">${horse.breed}</div>
    </div>
    
    <div class="horse-detail-stats">
      <div class="detail-stat-row">
        <span class="detail-stat-label">🏃 Velocidade</span>
        <div class="detail-stat-value">
          <span class="detail-stat-stars">${stars(horse.speed)}</span>
          <span class="detail-stat-number">${horse.speed}/10</span>
        </div>
      </div>
      <div class="detail-stat-row">
        <span class="detail-stat-label">💪 Resistência</span>
        <div class="detail-stat-value">
          <span class="detail-stat-stars">${stars(horse.stamina)}</span>
          <span class="detail-stat-number">${horse.stamina}/10</span>
        </div>
      </div>
      <div class="detail-stat-row">
        <span class="detail-stat-label">⚡ Aceleração</span>
        <div class="detail-stat-value">
          <span class="detail-stat-stars">${stars(horse.acceleration)}</span>
          <span class="detail-stat-number">${horse.acceleration}/10</span>
        </div>
      </div>
      <div class="detail-stat-row">
        <span class="detail-stat-label">📊 Total</span>
        <div class="detail-stat-value">
          <span class="detail-stat-number" style="font-size:16px; font-weight:900; color:#fbbf24">
            ${horse.speed + horse.stamina + horse.acceleration}/30
          </span>
        </div>
      </div>
    </div>
    
    ${!isOwned ? `
      <div class="horse-detail-price">
        <div class="detail-price-label">PREÇO</div>
        <div class="detail-price-amount">$${formatMoney(horse.price)}</div>
      </div>
    ` : ''}
    
    <div class="horse-detail-actions">
      ${!isOwned ? `
        <button class="btn-primary success-gradient" onclick="buyHorse(${horse.id})" ${!canBuy ? 'disabled' : ''}>
          ${playerHorses.length >= 5 ? '🔒 ESTÁBULO CHEIO' : 'COMPRAR'}
        </button>
      ` : `
        <button class="btn-primary danger-gradient" onclick="sellHorse(${horse.id})">
          VENDER ($${formatMoney(Math.floor(horse.price * 0.7))})
        </button>
      `}
    </div>
  `;
  
  document.getElementById('horse-detail-content').innerHTML = content;
  document.getElementById('horse-modal').style.display = 'flex';
}

function closeHorseModal() {
  document.getElementById('horse-modal').style.display = 'none';
}

function buyHorse(horseId) {
  const horse = window.marketHorses.find(h => h.id === horseId);
  if (!horse) return;
  
  const playerHorses = game.horses.filter(h => h.owner === 'player');
  
  if (playerHorses.length >= 5) {
    showNotification("🐴 Estábulo cheio! Vende um cavalo primeiro.", 'error');
    return;
  }
  
  if (game.money < horse.price) {
    showNotification("💸 Dinheiro insuficiente!", 'error');
    return;
  }
  
  game.money -= horse.price;
  horse.owner = 'player';
  game.horses.push(horse);
  window.marketHorses = window.marketHorses.filter(h => h.id !== horseId);
  window.marketHorses.push(generateHorse(true));
  
  createParticles('🐴', 15);
  showNotification(`🎉 Compraste ${horse.name}!`, 'success');
  closeHorseModal();
  updateUI();
  updateStableUI();
}

function sellHorse(horseId) {
  const horse = game.horses.find(h => h.id === horseId);
  if (!horse) return;
  
  const sellPrice = Math.floor(horse.price * 0.7);
  game.money += sellPrice;
  game.horses = game.horses.filter(h => h.id !== horseId);
  
  createParticles('💰', 10);
  showNotification(`💰 Vendeste ${horse.name} por $${formatMoney(sellPrice)}!`, 'success');
  closeHorseModal();
  updateUI();
  updateStableUI();
}

// ============================================
// AUCTION SYSTEM
// ============================================

function startNewAuction() {
  if (game.auctionInterval) {
    clearInterval(game.auctionInterval);
  }
  
  game.currentAuction = generateHorse(true);
  game.currentAuction.currentBid = Math.floor(game.currentAuction.price * 0.5);
  game.currentAuction.bidHistory = [];
  game.auctionTimeLeft = 30;
  
  renderAuction();
  
  game.auctionInterval = setInterval(() => {
    game.auctionTimeLeft--;
    
    if (game.auctionTimeLeft <= 0) {
      endAuction();
      return;
    }
    
    if (Math.random() < 0.2) {
      const npcBid = game.currentAuction.currentBid + Math.floor(Math.random() * 200) + 100;
      game.currentAuction.currentBid = npcBid;
      game.currentAuction.bidHistory.push({
        bidder: npcNames[Math.floor(Math.random() * npcNames.length)],
        amount: npcBid,
        isPlayer: false
      });
    }
    
    renderAuction();
  }, 1000);
}

function renderAuction() {
  const timerEl = document.getElementById('auction-timer');
  const showcaseEl = document.getElementById('auction-horse');
  const controlsEl = document.getElementById('auction-controls');
  
  if (!timerEl || !showcaseEl || !controlsEl) return;
  
  timerEl.textContent = `⏱️ TEMPO RESTANTE: ${game.auctionTimeLeft}s`;
  
  const horse = game.currentAuction;
  const stars = (num) => '⭐'.repeat(num) + '☆'.repeat(10 - num);
  
  showcaseEl.innerHTML = `
    <div class="auction-horse-display">
      <div class="horse-icon">${horse.icon}</div>
      <div class="horse-name">${horse.name}</div>
      <div class="horse-breed">${horse.breed}</div>
      
      <div class="horse-stats" style="margin-top:12px">
        <div class="stat-row">
          <span>🏃 Velocidade</span>
          <span class="stat-stars">${stars(horse.speed)}</span>
        </div>
        <div class="stat-row">
          <span>💪 Resistência</span>
          <span class="stat-stars">${stars(horse.stamina)}</span>
        </div>
        <div class="stat-row">
          <span>⚡ Aceleração</span>
          <span class="stat-stars">${stars(horse.acceleration)}</span>
        </div>
      </div>
      
      <div class="auction-current-bid">
        <div class="bid-label">LANCE ATUAL</div>
        <div class="bid-amount">$${formatMoney(horse.currentBid)}</div>
      </div>
      
      ${horse.bidHistory.length > 0 ? `
        <div class="bid-history">
          ${horse.bidHistory.slice(-5).reverse().map(bid => `
            <div class="bid-entry ${bid.isPlayer ? 'player-bid' : ''}">
              <span>${bid.isPlayer ? '🎮 ' : ''}${bid.bidder}</span>
              <span>$${formatMoney(bid.amount)}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
  
  const nextBid = horse.currentBid + 200;
  const playerHorses = game.horses.filter(h => h.owner === 'player');
  const canBid = game.money >= nextBid && playerHorses.length < 5;
  
  controlsEl.innerHTML = `
    <button class="btn-primary success-gradient" onclick="placeBid()" ${!canBid ? 'disabled' : ''}>
      ${playerHorses.length >= 5 ? '🔒 ESTÁBULO CHEIO' : `LICITAR $${formatMoney(nextBid)}`}
    </button>
  `;
}

function placeBid() {
  const nextBid = game.currentAuction.currentBid + 200;
  
  if (game.money < nextBid) {
    showNotification("💸 Dinheiro insuficiente!", 'error');
    return;
  }
  
  const playerHorses = game.horses.filter(h => h.owner === 'player');
  if (playerHorses.length >= 5) {
    showNotification("🐴 Estábulo cheio!", 'error');
    return;
  }
  
  game.currentAuction.currentBid = nextBid;
  game.currentAuction.bidHistory.push({
    bidder: "TU",
    amount: nextBid,
    isPlayer: true
  });
  
  renderAuction();
  showNotification("✅ Lance efetuado!", 'success');
}

function endAuction() {
  clearInterval(game.auctionInterval);
  
  const lastBid = game.currentAuction.bidHistory[game.currentAuction.bidHistory.length - 1];
  
  if (lastBid && lastBid.isPlayer) {
    game.money -= game.currentAuction.currentBid;
    game.currentAuction.owner = 'player';
    game.currentAuction.price = game.currentAuction.currentBid;
    game.horses.push(game.currentAuction);
    
    createParticles('🎉', 20);
    showNotification(`🏆 Ganhaste o leilão! ${game.currentAuction.name} é teu!`, 'success');
  } else {
    showNotification("😢 Perdeste o leilão!", 'error');
  }
  
  setTimeout(() => {
    startNewAuction();
    updateUI();
    updateStableUI();
  }, 2000);
}

// ============================================
// RACE SYSTEM
// ============================================

function renderRaces() {
  const container = document.getElementById('races-list');
  if (!container) return;
  
  container.innerHTML = raceTypes.map(race => {
    const locked = game.level < race.req;
    const playerHorses = game.horses.filter(h => h.owner === 'player');
    const hasHorses = playerHorses.length > 0;
    
    return `
      <div class="race-card ${locked ? 'race-locked' : ''}">
        <div class="race-header">
          <div class="race-name">🏁 ${race.name}</div>
          <div class="race-prize">🏆 $${formatMoney(race.prize)}</div>
        </div>
        <div class="race-info">
          📏 Distância: ${race.distance} | 💰 Taxa: $${formatMoney(race.entryCost)}
          ${locked ? ` | 🔒 Requer Nível ${race.req}` : ''}
        </div>
        <div class="race-participants">
          👥 6 participantes (tu + 5 competidores)
        </div>
        <button class="btn-primary ${locked || !hasHorses ? 'danger-gradient' : 'success-gradient'}" 
                onclick="startRace('${race.name}')"
                ${locked || !hasHorses ? 'disabled' : ''}>
          ${locked ? '🔒 BLOQUEADO' : !hasHorses ? '🐴 SEM CAVALOS' : 'PARTICIPAR'}
        </button>
      </div>
    `;
  }).join('');
}

function startRace(raceName) {
  const race = raceTypes.find(r => r.name === raceName);
  if (!race) return;
  
  if (game.money < race.entryCost) {
    showNotification("💸 Dinheiro insuficiente!", 'error');
    return;
  }
  
  const playerHorses = game.horses.filter(h => h.owner === 'player');
  if (playerHorses.length === 0) {
    showNotification("🐴 Precisas de cavalos para competir!", 'error');
    return;
  }
  
  game.money -= race.entryCost;
  updateUI();
  
  const selectedHorse = playerHorses[Math.floor(Math.random() * playerHorses.length)];
  
  const competitors = [selectedHorse];
  for (let i = 0; i < 5; i++) {
    competitors.push(generateHorse(true));
  }
  
  shuffleArray(competitors);
  
  document.getElementById('race-modal').style.display = 'flex';
  
  const trackEl = document.getElementById('race-track');
  trackEl.innerHTML = competitors.map((horse, idx) => `
    <div class="race-lane">
      <div class="lane-number">#${idx + 1}</div>
      <div class="lane-horse" id="racer-${idx}">${horse.icon}</div>
      <div class="lane-name ${horse.id === selectedHorse.id ? 'player-horse' : ''}">
        ${horse.name}
      </div>
    </div>
  `).join('');
  
  document.getElementById('race-results').style.display = 'none';
  document.getElementById('race-close-btn').style.display = 'none';
  
  setTimeout(() => {
    runRace(competitors, race, selectedHorse);
  }, 1000);
}

function runRace(competitors, race, playerHorse) {
  competitors.forEach((horse, idx) => {
    const el = document.getElementById(`racer-${idx}`);
    el.classList.add('racing');
  });
  
  const results = competitors.map(horse => {
    const performance = 
      (horse.speed * race.statWeight.speed) +
      (horse.stamina * race.statWeight.stamina) +
      (horse.acceleration * race.statWeight.acceleration) +
      (Math.random() * 5);
    
    return { horse, performance };
  }).sort((a, b) => b.performance - a.performance);
  
  competitors.forEach((horse, idx) => {
    const position = results.findIndex(r => r.horse.id === horse.id);
    const el = document.getElementById(`racer-${idx}`);
    
    const distance = 85;
    const time = 2000 + (position * 300) + (Math.random() * 500);
    
    setTimeout(() => {
      el.style.left = `${distance}%`;
    }, 100);
    
    setTimeout(() => {
      el.classList.remove('racing');
    }, time);
  });
  
  setTimeout(() => {
    showRaceResults(results, race, playerHorse);
  }, 4000);
}

function showRaceResults(results, race, playerHorse) {
  const playerPosition = results.findIndex(r => r.horse.id === playerHorse.id);
  const prizes = [race.prize, Math.floor(race.prize * 0.5), Math.floor(race.prize * 0.25), 0, 0, 0];
  const playerPrize = prizes[playerPosition];
  
  if (playerPrize > 0) {
    game.money += playerPrize;
    game.dayEarnings += playerPrize;
    createParticles('🏆', 20);
  }
  
  const resultsEl = document.getElementById('race-results');
  resultsEl.style.display = 'block';
  
  resultsEl.innerHTML = `
    <div class="results-title">
      ${playerPosition === 0 ? '🏆 VITÓRIA!' : playerPosition < 3 ? '🥈 PÓDIO!' : '😢 MELHOR SORTE DA PRÓXIMA'}
    </div>
    <div class="results-list">
      ${results.map((result, idx) => `
        <div class="result-row">
          <div class="result-position">${idx + 1}º</div>
          <div class="result-name ${result.horse.id === playerHorse.id ? 'player-horse' : ''}">
            ${result.horse.name}
          </div>
          <div class="result-prize">${prizes[idx] > 0 ? `$${formatMoney(prizes[idx])}` : '-'}</div>
        </div>
      `).join('')}
    </div>
    ${playerPrize > 0 ? `
      <div style="margin-top:16px; font-size:18px; font-weight:900; color:#22c55e">
        💰 Ganhaste $${formatMoney(playerPrize)}!
      </div>
    ` : ''}
  `;
  
  document.getElementById('race-close-btn').style.display = 'block';
  updateUI();
}

function closeRaceModal() {
  document.getElementById('race-modal').style.display = 'none';
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ============================================
// TRIVIA TOURNAMENT
// ============================================

function startTournament(type) {
  const tournament = tournaments[type];
  
  if (game.level < tournament.req) {
    showNotification(`🔒 Requer Nível ${tournament.req}!`, 'error');
    return;
  }
  
  if (game.energy < tournament.cost) {
    showNotification("⚡ Energia insuficiente!", 'error');
    return;
  }
  
  game.energy -= tournament.cost;
  game.activeTournament = tournament;
  game.pot = 0;
  game.questionsAnswered = 0;
  game.questionMultiplier = 1.0;
  game.usedQuestions = [];
  game.adRevivesUsed = 0;
  
  document.getElementById('trivia-lobby').style.display = 'none';
  document.getElementById('trivia-game').style.display = 'block';
  
  nextQuestion();
  updateUI();
}

function getRandomQuestion() {
  const difficulty = game.activeTournament.difficulty;
  const availableQuestions = questions[difficulty].filter(
    q => !game.usedQuestions.includes(q.q)
  );
  
  if (availableQuestions.length === 0) {
    game.usedQuestions = [];
    return questions[difficulty][Math.floor(Math.random() * questions[difficulty].length)];
  }
  
  const question = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  game.usedQuestions.push(question.q);
  return question;
}

function nextQuestion() {
  document.getElementById('decision-area').style.display = 'none';
  document.getElementById('question-area').style.display = 'block';
  document.getElementById('pot-money').textContent = formatMoney(game.pot);
  document.getElementById('question-number').textContent = game.questionsAnswered + 1;
  document.getElementById('multiplier').textContent = game.questionMultiplier.toFixed(1);
  
  const streakPercent = Math.min((game.questionMultiplier - 1) / 4 * 100, 100);
  document.getElementById('streak-fill').style.width = streakPercent + '%';
  
  const question = getRandomQuestion();
  game.currentCorrectAnswer = question.c;
  document.getElementById('question-text').textContent = question.q;
  document.getElementById('question-category').textContent = question.cat || '📚 Geral';
  
  const container = document.getElementById('options-container');
  container.innerHTML = '';
  
  question.opts.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option;
    btn.dataset.index = index;
    btn.onclick = () => selectOption(btn, index === question.c, index);
    container.appendChild(btn);
  });
}

function selectOption(btn, isCorrect, index) {
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(b => b.disabled = true);
  
  btn.classList.add('selected');
  
  setTimeout(() => {
    btn.classList.remove('selected');
    
    if (isCorrect) {
      btn.classList.add('correct');
      handleCorrectAnswer();
    } else {
      btn.classList.add('wrong');
      
      allBtns.forEach(b => {
        if (parseInt(b.dataset.index) === game.currentCorrectAnswer) {
          b.classList.add('correct');
        }
      });
      
      handleWrongAnswer();
    }
  }, 2000);
}

function handleCorrectAnswer() {
  const basePrize = game.activeTournament.prize;
  const totalEarnings = Math.floor(basePrize * game.questionMultiplier);
  
  game.pot += totalEarnings;
  game.questionsAnswered++;
  if (game.questionMultiplier < 5.0) {
  game.questionMultiplier += 0.25;
}
  
  let xpGain = game.activeTournament.difficulty === 'extreme' ? 50 :
                 game.activeTournament.difficulty === 'hard' ? 40 : 
                 game.activeTournament.difficulty === 'advanced' ? 35 :
                 game.activeTournament.difficulty === 'medium' ? 30 : 
                 game.activeTournament.difficulty === 'easy' ? 20 : 15;
  
  if (game.questionsAnswered >= 20) {
  xpGain = Math.floor(xpGain * 1.5);
  showNotification("🎉 BÓNUS 20 PERGUNTAS: +50% XP!", 'success');
  setTimeout(() => cashOut(), 2000);
  return;
}
animateXP(xpGain);
  
  setTimeout(() => {
    const nextMultiplier = game.questionMultiplier + 0.25;
    const nextPrize = Math.floor(game.activeTournament.prize * nextMultiplier);
    
    document.getElementById('decision-money').textContent = formatMoney(game.pot);
    document.getElementById('safe-amount').textContent = formatMoney(game.pot);
    document.getElementById('risk-amount').textContent = formatMoney(game.pot + nextPrize);
    document.getElementById('xp-gain').textContent = xpGain;
    document.getElementById('question-area').style.display = 'none';
    document.getElementById('decision-area').style.display = 'block';
    createParticles('🎉', 15);
  }, 1000);
}

function animateXP(amount) {
  const increment = Math.ceil(amount / 20);
  let current = 0;
  
  const interval = setInterval(() => {
    if (current >= amount) {
      clearInterval(interval);
      checkLevelUp();
      return;
    }
    
    const step = Math.min(increment, amount - current);
    game.xp += step;
    current += step;
    
    const xpPercent = (game.xp / game.maxXp * 100);
    document.getElementById('xp-bar').style.width = Math.min(xpPercent, 100) + '%';
    document.getElementById('xp-text').textContent = `${game.xp}/${game.maxXp}`;
    
    checkLevelUp();
  }, 50);
}

function handleWrongAnswer() {
  setTimeout(() => {
    if (game.adRevivesUsed < 2) {
      const retry = confirm("❌ Resposta errada! Quer ver um anúncio para tentar de novo?");
      if (retry) {
        watchAd('revive');
      } else {
        quitTournament(true);
      }
    } else {
      showNotification("❌ Perdeste! (Máximo de 2 revives por torneio)", 'error');
      quitTournament(true);
    }
  }, 2500);
}

function continueQuiz() {
  nextQuestion();
}

function cashOut() {
  game.money += game.pot;
  game.dayEarnings += game.pot;
  
  createParticles('💰', 20);
  showNotification(`💰 Ganhaste $${formatMoney(game.pot)}!`, 'success');
  
  quitTournament();
}

function quitTournament(lost = false) {
  game.activeTournament = null;
  game.pot = 0;
  game.questionsAnswered = 0;
  game.questionMultiplier = 1.0;
  game.usedQuestions = [];
  game.adRevivesUsed = 0;
  game.currentCorrectAnswer = null;
  
  document.getElementById('trivia-game').style.display = 'none';
  document.getElementById('trivia-lobby').style.display = 'block';
  
  updateUI();
  
  if (game.energy <= 0 && !lost) {
    setTimeout(() => endDayTrigger(), 500);
  }
}

function checkLevelUp() {
  while (game.xp >= game.maxXp) {
    game.level++;
    game.xp -= game.maxXp;
    game.maxXp = Math.floor(game.maxXp * 1.3);
    game.maxEnergy++;
    game.energy = game.maxEnergy;
    
    createParticles('⭐', 25);
    showNotification(`⭐ LEVEL UP! Agora és nível ${game.level}!`, 'success');
    updateUI();
  }
}

function promote(jobIndex) {
  if (game.level >= jobs[jobIndex].req) {
    game.jobIndex = jobIndex;
    createParticles('🎉', 15);
    showNotification(`🎉 Promoção para ${jobs[jobIndex].name}!`, 'success');
    updateUI();
  }
}

// ============================================
// CASINO - BLACKJACK
// ============================================

function toggleBJInfo(event) {
  event.stopPropagation();
  const info = document.getElementById('bj-info');
  info.style.display = info.style.display === 'none' ? 'block' : 'none';
}

function drawCard() {
  return Math.floor(Math.random() * 10) + 2;
}

function startBJ(bet) {
  if (game.money < bet) {
    showNotification("💸 Dinheiro insuficiente!", 'error');
    return;
  }
  
  game.money -= bet;
  game.bjBet = bet;
  game.bjPlayer = drawCard() + drawCard();
  game.bjDealer = drawCard();
  
  document.getElementById('bj-bet-selector').style.display = 'none';
  document.getElementById('bj-actions').style.display = 'block';
  document.getElementById('bj-msg').textContent = '';
  
  updateBJUI();
  updateUI();
}

function hitBJ() {
  game.bjPlayer += drawCard();
  updateBJUI();
  
  if (game.bjPlayer > 21) {
    endBJ(false, "💥 BUST! Perdeste!");
  }
}

function standBJ() {
  document.getElementById('bj-actions').style.display = 'none';
  
  const dealerInterval = setInterval(() => {
    if (game.bjDealer < 17) {
      game.bjDealer += drawCard();
      updateBJUI();
    } else {
      clearInterval(dealerInterval);
      checkBJWinner();
    }
  }, 800);
}

function checkBJWinner() {
  const playerScore = game.bjPlayer;
  const dealerScore = game.bjDealer;
  
  if (dealerScore > 21 || playerScore > dealerScore) {
    const winnings = game.bjBet * 2;
    game.money += winnings;
    game.dayEarnings += game.bjBet;
    createParticles('🎉', 15);
    document.getElementById('bj-player-val').classList.add('win');
    endBJ(true, `🎉 VITÓRIA! +$${formatMoney(winnings)}`);
  } else if (playerScore === dealerScore) {
    game.money += game.bjBet;
    endBJ(true, "🤝 EMPATE! Dinheiro devolvido");
  } else {
    endBJ(false, "😢 Dealer ganhou!");
  }
}

function updateBJUI() {
  document.getElementById('bj-player-val').textContent = game.bjPlayer;
  document.getElementById('bj-dealer-val').textContent = game.bjDealer;
}

function endBJ(won, message) {
  const msgEl = document.getElementById('bj-msg');
  msgEl.textContent = message;
  msgEl.style.color = won ? '#4ade80' : '#f87171';
  
  setTimeout(() => {
    document.getElementById('bj-actions').style.display = 'none';
    document.getElementById('bj-bet-selector').style.display = 'block';
    document.getElementById('bj-player-val').classList.remove('win');
    game.bjPlayer = 0;
    game.bjDealer = 0;
    game.bjBet = 0;
    updateBJUI();
    updateUI();
  }, 3000);
}

// ============================================
// CASINO - SLOTS
// ============================================

function toggleSlotInfo(event) {
  event.stopPropagation();
  const info = document.getElementById('slot-info');
  info.style.display = info.style.display === 'none' ? 'block' : 'none';
}

function spinSlots() {
  if (game.slotSpinning) return;
  
  if (game.money < 50) {
    showNotification("💸 Precisas de $50!", 'error');
    return;
  }
  
  game.money -= 50;
  game.slotSpinning = true;
  updateUI();
  
  const icons = ["🍒", "💎", "7️⃣", "🍋", "⭐"];
  const slots = [
    document.getElementById('slot-1'),
    document.getElementById('slot-2'),
    document.getElementById('slot-3')
  ];
  
  slots.forEach(slot => slot.classList.add('spinning'));
  
  let spins = 0;
  const maxSpins = 20;
  
  const spinInterval = setInterval(() => {
    slots.forEach(slot => {
      slot.textContent = icons[Math.floor(Math.random() * icons.length)];
    });
    
    spins++;
    
    if (spins >= maxSpins) {
      clearInterval(spinInterval);
      slots.forEach(slot => slot.classList.remove('spinning'));
      
      const results = [];
      if (Math.random() < 0.12) {
        const jackpotIcon = icons[Math.floor(Math.random() * icons.length)];
        results.push(jackpotIcon, jackpotIcon, jackpotIcon);
      } else {
        results.push(
          icons[Math.floor(Math.random() * icons.length)],
          icons[Math.floor(Math.random() * icons.length)],
          icons[Math.floor(Math.random() * icons.length)]
        );
      }
      
      slots.forEach((slot, idx) => {
        slot.textContent = results[idx];
      });
      
      if (results[0] === results[1] && results[1] === results[2]) {
        let winAmount = 250;
        if (results[0] === "💎") winAmount = 2500;
        else if (results[0] === "7️⃣") winAmount = 1000;
        else if (results[0] === "⭐") winAmount = 500;
        
        game.money += winAmount;
        game.dayEarnings += (winAmount - 50);
        
        document.querySelector('.slot-glow').classList.add('active');
        setTimeout(() => document.querySelector('.slot-glow').classList.remove('active'), 500);
        
        createParticles(results[0], 30);
        document.getElementById('slot-msg').textContent = `🎉 JACKPOT! +$${formatMoney(winAmount)}`;
        document.getElementById('slot-msg').style.color = '#4ade80';
      } else {
        document.getElementById('slot-msg').textContent = "Tenta outra vez!";
        document.getElementById('slot-msg').style.color = '#94a3b8';
      }
      
      game.slotSpinning = false;
      updateUI();
    }
  }, 80);
}

// ============================================
// CASINO - ROULETTE
// ============================================

function toggleRouletteInfo(event) {
  event.stopPropagation();
  const info = document.getElementById('roulette-info');
  info.style.display = info.style.display === 'none' ? 'block' : 'none';
}

const rouletteSegments = [
  { start: 0, end: 45, color: 'red' },
  { start: 45, end: 90, color: 'black' },
  { start: 90, end: 135, color: 'red' },
  { start: 135, end: 180, color: 'black' },
  { start: 180, end: 225, color: 'green' },
  { start: 225, end: 270, color: 'black' },
  { start: 270, end: 315, color: 'red' },
  { start: 315, end: 360, color: 'black' }
];

function getRouletteColor(angle) {
  const normalizedAngle = ((angle % 360) + 360) % 360;
  
  for (const segment of rouletteSegments) {
    if (normalizedAngle >= segment.start && normalizedAngle < segment.end) {
      return segment.color;
    }
  }
  return 'red';
}

function betRoulette(color, bet) {
  if (game.rouletteSpinning) return;
  
  if (game.money < bet) {
    showNotification("💸 Dinheiro insuficiente!", 'error');
    return;
  }
  
  game.money -= bet;
  game.rouletteSpinning = true;
  updateUI();
  
  document.querySelectorAll('.roulette-btn').forEach(btn => btn.disabled = true);
  
  const wheel = document.getElementById('roulette-wheel');
  const arrow = document.getElementById('roulette-arrow');
  const resultDisplay = document.getElementById('roulette-result-display');
  
  arrow.className = 'roulette-arrow';
  resultDisplay.textContent = '';
  
  
let targetAngle = 0;
if (color === 'red') {
  const redAngles = [22.5, 112.5, 292.5];
  targetAngle = redAngles[Math.floor(Math.random() * redAngles.length)];
} else if (color === 'black') {
  const blackAngles = [67.5, 157.5, 247.5, 337.5];
  targetAngle = blackAngles[Math.floor(Math.random() * blackAngles.length)];
} else {
  targetAngle = 202.5;
}

const spinsToAdd = (5 + Math.floor(Math.random() * 3)) * 360;
const totalRotation = game.rouletteCurrentRotation + spinsToAdd + targetAngle;

game.rouletteCurrentRotation = totalRotation;
  wheel.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
  wheel.style.transform = `rotate(${totalRotation}deg)`;
  
  game.rouletteCurrentRotation = totalRotation;
  
  setTimeout(() => {
    const finalAngle = (360 - (totalRotation % 360)) % 360;
    const result = getRouletteColor(finalAngle);
    
    const msgEl = document.getElementById('roulette-msg');
    
    arrow.classList.add(`result-${result}`);
    
    const colorNames = { red: 'VERMELHO', black: 'PRETO', green: 'VERDE' };
    const colorEmojis = { red: '🔴', black: '⚫', green: '🟢' };
    resultDisplay.textContent = `${colorEmojis[result]} ${colorNames[result]}`;
    resultDisplay.style.color = result === 'green' ? '#22c55e' : result === 'red' ? '#ef4444' : '#9ca3af';
    
    if (result === color) {
      let winnings;
      if (color === 'green') {
        winnings = bet * 10;
        createParticles('💚', 40);
        msgEl.textContent = `💚 VERDE! MEGA WIN! +$${formatMoney(winnings)}`;
      } else {
        winnings = bet * 2;
        createParticles('🎉', 20);
        msgEl.textContent = `🎉 ${colorNames[color]}! +$${formatMoney(winnings)}`;
      }
      
      game.money += winnings;
      game.dayEarnings += (winnings - bet);
      msgEl.style.color = '#4ade80';
    } else {
      msgEl.textContent = `😢 Saiu ${colorNames[result]}`;
      msgEl.style.color = '#f87171';
    }
    
    game.rouletteSpinning = false;
    document.querySelectorAll('.roulette-btn').forEach(btn => btn.disabled = false);
    updateUI();
  }, 4000);
}

// ============================================
// DAY SYSTEM
// ============================================

function endDayTrigger() {
  const currentJob = jobs[game.jobIndex];
  const bills = currentJob.bills;
  const salary = currentJob.salary;
  
  game.money += salary;
  game.money -= bills;
  game.dayEarnings += salary;
  
  document.getElementById('report-day').textContent = game.day;
  document.getElementById('report-money').textContent = `+$${formatMoney(game.dayEarnings)}`;
  document.getElementById('report-bills').textContent = `-$${formatMoney(bills)}`;
  document.getElementById('report-balance').textContent = `$${formatMoney(game.money)}`;
  
  const statusEl = document.getElementById('report-status');
  if (game.money < 0) {
    statusEl.textContent = "⚠️ ATENÇÃO! Estás em dívida!";
    statusEl.style.color = '#ef4444';
  } else if (game.dayEarnings > 5000) {
    statusEl.textContent = "🌟 DIA EXCELENTE! Grande lucro!";
    statusEl.style.color = '#22c55e';
  } else if (game.dayEarnings > 1000) {
    statusEl.textContent = "✅ Bom dia! Continua assim!";
    statusEl.style.color = '#fbbf24';
  } else {
    statusEl.textContent = "✅ Dia concluído com sucesso!";
    statusEl.style.color = '#94a3b8';
  }
  
  document.getElementById('day-modal').style.display = 'flex';
}

function startNewDay() {
  game.day++;
  game.energy = game.maxEnergy;
  game.dayEarnings = 0;
  
  document.getElementById('day-modal').style.display = 'none';
  showTab('trivia');
  updateUI();
  
  showNotification(`🌅 Dia ${game.day} começou!`, 'success');
}

// ============================================
// AD SYSTEM
// ============================================

function watchAd(reason) {
  showNotification("📺 A carregar anúncio...", 'info');
  
  setTimeout(() => {
    if (reason === 'bonus') {
      const adBonus = jobs[game.jobIndex].adBonus;
      game.money += adBonus;
      createParticles('💰', 15);
      showNotification(`💰 +$${formatMoney(adBonus)} do anúncio!`, 'success');
      updateUI();
    } else if (reason === 'revive') {
      game.adRevivesUsed++;
      const btns = document.querySelectorAll('.option-btn');
      btns.forEach(b => {
        b.classList.remove('wrong', 'correct', 'selected');
        b.disabled = false;
      });
      showNotification(`♻️ Segunda chance! (${game.adRevivesUsed}/2 usadas)`, 'success');
      return;
    }
  }, 2000);
}

// ============================================
// VISUAL EFFECTS
// ============================================

function createParticles(emoji, count) {
  const container = document.getElementById('particles-container');
  
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.textContent = emoji;
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';
    
    container.appendChild(particle);
    
    setTimeout(() => particle.remove(), 2000);
  }
}

function showNotification(message, type = 'info') {
  const colors = {
    success: '#22c55e',
    error: '#ef4444',
    info: '#3b82f6',
    warning: '#f59e0b'
  };
  
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: ${colors[type]};
    color: white;
    padding: 12px 24px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 13px;
    z-index: 1000;
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
    animation: slideDown 0.3s ease;
    font-family: 'Poppins', sans-serif;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideUpOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}

// ============================================
// INITIALIZATION
// ============================================

window.addEventListener('DOMContentLoaded', () => {
  const loadingBar = document.getElementById('loading-bar');
  const loadingScreen = document.getElementById('loading-screen');
  let progress = 0;
  
  const loadInterval = setInterval(() => {
    progress += 3.33;
    if (loadingBar) loadingBar.style.width = progress + '%';
    
    if (progress >= 100) {
      clearInterval(loadInterval);
      setTimeout(() => {
        if (loadingScreen) {
          loadingScreen.classList.add('hidden');
          setTimeout(() => loadingScreen.remove(), 500);
        }
      }, 300);
    }
  }, 100);
  const adBannerTexts = [
    '💼 Sobe de cargo para ganhar mais!',
    '📺 Assiste a um anúncio para bónus de XP',
    '🐴 Compra cavalos no Estábulo!',
    '🎰 Testa a tua sorte no Casino',
    '🏆 Completa conquistas para benefícios'
  ];
  
  let adIndex = 0;
  setInterval(() => {
    const banner = document.getElementById('profile-ad-banner');
    if (banner) {
      adIndex = (adIndex + 1) % adBannerTexts.length;
      banner.style.opacity = '0';
      setTimeout(() => {
        banner.textContent = adBannerTexts[adIndex];
        banner.style.opacity = '1';
      }, 300);
    }
  }, 4000);
  showTab('trivia');
  updateUI();
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideDown {
      from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
      to { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    @keyframes slideUpOut {
      from { transform: translateX(-50%) translateY(0); opacity: 1; }
      to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
});

function switchProfileTab(tabName) {
  document.querySelectorAll('.profile-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.profile-tab-content').forEach(content => content.classList.remove('active'));
  
  event.target.closest('.profile-tab').classList.add('active');
  document.getElementById(`profile-tab-${tabName}`).classList.add('active');
}

function updateProfileDisplay() {
  const nameEl = document.getElementById('profile-display-name');
  const moneyEl = document.getElementById('profile-money-display');
  const levelEl = document.getElementById('profile-level-display');
  const progressEl = document.getElementById('profile-progress-fill');
  const percentEl = document.getElementById('profile-progress-percent');
  
  if (nameEl) nameEl.textContent = game.playerName;
  if (moneyEl) moneyEl.textContent = formatMoney(game.money);
  if (levelEl) levelEl.textContent = game.level;
  
  const totalAchievements = achievements.length;
  const unlockedAchievements = game.achievements.length;
  const progressPercent = Math.floor((unlockedAchievements / totalAchievements) * 100);
  
  if (progressEl) progressEl.style.width = progressPercent + '%';
  if (percentEl) percentEl.textContent = progressPercent + '%';
}

function savePlayerName() {
  const input = document.getElementById('player-name-input');
  const name = input.value.trim();
  
  if (name.length === 0) {
    showNotification("❌ Introduz um nome válido!", 'error');
    return;
  }
  
  if (name.length < 3) {
    showNotification("❌ Nome deve ter pelo menos 3 caracteres!", 'error');
    return;
  }
  
  game.playerName = name;
  updateProfileDisplay();
  createParticles('✨', 15);
  showNotification(`✅ Nome guardado: ${name}`, 'success');
}

function resetGameProgress() {
  const confirmed = confirm(
    "⚠️ AVISO CRÍTICO ⚠️\n\n" +
    "Esta ação irá ELIMINAR PERMANENTEMENTE:\n" +
    "• Todo o teu dinheiro\n" +
    "• Todos os níveis e XP\n" +
    "• Todos os itens comprados\n" +
    "• Todos os cavalos\n" +
    "• Todas as conquistas\n\n" +
    "ESTA AÇÃO NÃO PODE SER REVERTIDA!\n\n" +
    "Tens ABSOLUTA certeza que queres continuar?"
  );
  
  if (!confirmed) return;
  
  const doubleConfirm = confirm(
    "🔴 ÚLTIMA CONFIRMAÇÃO 🔴\n\n" +
    "Carrega em OK para APAGAR TUDO.\n" +
    "Carrega em Cancelar para manter o teu progresso."
  );
  
  if (doubleConfirm) {
    localStorage.clear();
    showNotification("🔄 A reiniciar o jogo...", 'info');
    setTimeout(() => {
      location.reload();
    }, 1500);
  }
}

// GLOBAL FUNCTIONS
window.showTab = showTab;
window.renderInventory = renderInventory;
window.renderAchievements = renderAchievements;
window.switchProfileTab = switchProfileTab;
window.updateProfileDisplay = updateProfileDisplay;
window.savePlayerName = savePlayerName;
window.resetGameProgress = resetGameProgress;
window.showShopCategory = showShopCategory;
window.showStableSection = showStableSection;
window.buy = buy;
window.startTournament = startTournament;
window.continueQuiz = continueQuiz;
window.cashOut = cashOut;
window.quitTournament = quitTournament;
window.promote = promote;
window.startBJ = startBJ;
window.hitBJ = hitBJ;
window.standBJ = standBJ;
window.toggleBJInfo = toggleBJInfo;
window.spinSlots = spinSlots;
window.toggleSlotInfo = toggleSlotInfo;
window.toggleRouletteInfo = toggleRouletteInfo;
window.betRoulette = betRoulette;
window.startNewDay = startNewDay;
window.watchAd = watchAd;
window.showHorseDetail = showHorseDetail;
window.closeHorseModal = closeHorseModal;
window.buyHorse = buyHorse;
window.sellHorse = sellHorse;
window.placeBid = placeBid;
window.startRace = startRace;
window.closeRaceModal = closeRaceModal;