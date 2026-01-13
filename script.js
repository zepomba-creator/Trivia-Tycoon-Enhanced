// ============================================
// TRIVIA TYCOON - GAME STATE & CONFIGURATION
// ============================================

const game = {
  money: 100,
  level: 1,
  xp: 0,
  maxXp: 100,
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
  rouletteCurrentRotation: 0
};

const tournaments = {
  beginner: { name: "Liga Iniciante", prize: 25, cost: 1, req: 1, difficulty: 'beginner' },
  easy: { name: "Taça de Bairro", prize: 50, cost: 1, req: 2, difficulty: 'easy' },
  medium: { name: "Quiz Nacional", prize: 150, cost: 2, req: 5, difficulty: 'medium' },
  advanced: { name: "Campeonato Regional", prize: 400, cost: 2, req: 8, difficulty: 'advanced' },
  hard: { name: "Tycoon Master", prize: 800, cost: 3, req: 12, difficulty: 'hard' },
  extreme: { name: "Elite Mundial", prize: 2000, cost: 4, req: 18, difficulty: 'extreme' }
};

// ============================================
// PERGUNTAS - MUITO MAIS VARIADAS
// ============================================

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

// ============================================
// ECONOMIA REBALANCEADA - VALORES MAIS BAIXOS
// ============================================

const jobs = [
  { name: "Estagiário", salary: 80, bills: 30, req: 1, adBonus: 50 },
  { name: "Assistente", salary: 150, bills: 60, req: 3, adBonus: 100 },
  { name: "Analista", salary: 300, bills: 120, req: 6, adBonus: 200 },
  { name: "Gerente", salary: 600, bills: 250, req: 9, adBonus: 400 },
  { name: "Director", salary: 1200, bills: 500, req: 13, adBonus: 800 },
  { name: "VP Executivo", salary: 2500, bills: 1000, req: 17, adBonus: 1500 },
  { name: "CEO", salary: 5000, bills: 2000, req: 22, adBonus: 3000 }
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
          <strong style="color:white; font-size:15px">${job.name}</strong>
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
  
  // Update streak bar
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
  game.questionMultiplier += 0.25;
  
  const xpGain = game.activeTournament.difficulty === 'extreme' ? 50 :
                 game.activeTournament.difficulty === 'hard' ? 40 : 
                 game.activeTournament.difficulty === 'advanced' ? 35 :
                 game.activeTournament.difficulty === 'medium' ? 30 : 
                 game.activeTournament.difficulty === 'easy' ? 20 : 15;
  
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
// CASINO - BLACKJACK (BUG CORRIGIDO)
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
      if (Math.random() < 0.20) {
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
// CASINO - ROULETTE (BUG CORRIGIDO)
// ============================================

function toggleRouletteInfo(event) {
  event.stopPropagation();
  const info = document.getElementById('roulette-info');
  info.style.display = info.style.display === 'none' ? 'block' : 'none';
}

// Definição dos segmentos da roleta (8 segmentos de 45 graus cada)
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
  // Normaliza o ângulo para 0-360
  const normalizedAngle = ((angle % 360) + 360) % 360;
  
  for (const segment of rouletteSegments) {
    if (normalizedAngle >= segment.start && normalizedAngle < segment.end) {
      return segment.color;
    }
  }
  return 'red'; // fallback
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
  
  // Disable buttons during spin
  document.querySelectorAll('.roulette-btn').forEach(btn => btn.disabled = true);
  
  const wheel = document.getElementById('roulette-wheel');
  const arrow = document.getElementById('roulette-arrow');
  const resultDisplay = document.getElementById('roulette-result-display');
  
  // Reset arrow color
  arrow.className = 'roulette-arrow';
  resultDisplay.textContent = '';
  
  // Rotação aleatória: 5-8 voltas completas + posição aleatória
  const extraSpins = (5 + Math.floor(Math.random() * 3)) * 360;
  const finalPosition = Math.floor(Math.random() * 360);
  const totalRotation = game.rouletteCurrentRotation + extraSpins + finalPosition;
  
  // Aplica a rotação com transição suave
  wheel.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
  wheel.style.transform = `rotate(${totalRotation}deg)`;
  
  // Guarda a rotação atual para a próxima vez
  game.rouletteCurrentRotation = totalRotation;
  
  setTimeout(() => {
    // Calcula a posição final (a seta está no topo, então precisamos inverter)
    // A seta aponta para baixo, então o ângulo que ela "vê" é o oposto da rotação
    const finalAngle = (360 - (totalRotation % 360)) % 360;
    const result = getRouletteColor(finalAngle);
    
    const msgEl = document.getElementById('roulette-msg');
    
    // Atualiza a cor da seta para mostrar o resultado
    arrow.classList.add(`result-${result}`);
    
    // Mostra o resultado visual
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

// Tornar funções globais
window.showTab = showTab;
window.showShopCategory = showShopCategory;
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