/* ==========================================================================
   Лескванта — карусель 10 домов, интерьеры, лайтбокс, платёжка и форма
   ========================================================================== */

const HERO_PROJECT = {
  id: 'spiral-staircase',
  category: 'stairs',
  categoryLabel: 'Лестницы и отделка',
  title: 'Винтовая лестница, кессонный потолок и буазери',
  place: 'Рублёвское шоссе, МО · 2025',
  image: 'images/staircase-hero.jpg',
  summary: 'Комплексная отделка двусветного холла: точёная винтовая лестница, глубокие кессоны на потолке и стеновые панели из тёмного ореха.',
  description:
    'Проект выполнен по индивидуальным замерам целиком в нашем цеху в Апрелевке. Опорный столб, изогнутый поручень и балясины выточены из отборного массива, кессонная решётка со встроенным освещением точно увязана по осям с настенными панелями буазери.',
  specs: {
    'Порода дерева': 'Американский орех и массив дуба',
    'Покрытие': 'Матовая тонировка и лак Tikkurila',
    'Объём работ': 'Лестница, потолок 64 м², панели стен',
    'Срок в цеху': '11 недель + 10 дней монтаж'
  },
  inquiryType: 'Лестница или отделка деревом'
};

const HOUSES = [
  {
    id: 'house-novaya-riga',
    categoryLabel: 'Деревянный дом · 01',
    title: 'Дом из клееного бруса с террасой из лиственницы',
    place: 'Новорижское шоссе, МО · 285 м²',
    woodShort: 'Клееный брус (ангарская сосна) и сибирская лиственница',
    image: 'images/timber-house.jpg',
    summary: 'Тёплый двухэтажный дом в сосновом лесу с широкой верандой из лиственницы, панорамным остеклением и спокойной плоской архитектурой кровли.',
    description:
      'Построен для круглогодичного проживания большой семьи. Стены из плотного клееного бруса ангарской сосны сечением 240×270 мм не требуют дополнительной обшивки, а открытая терраса 48 м² и подшивка свесов выполнены из отборной сибирской лиственницы.',
    specs: {
      'Порода дерева': 'Ангарская сосна (клееный брус) + сибирская лиственница',
      'Площадь': '285 м² + терраса 48 м²',
      'Покрытие': 'Атмосферостойкое масло Tikkurila',
      'Регион': 'Московская область (возможна сборка по всей РФ)',
      'Срок': '6 месяцев под ключ'
    },
    inquiryType: 'Деревянный дом под ключ'
  },
  {
    id: 'house-kelo-karelia',
    categoryLabel: 'Деревянный дом · 02',
    title: 'Северная усадьба из карельской сухостойной сосны Kelo',
    place: 'Республика Карелия · 240 м²',
    woodShort: 'Карельская сухостойная сосна Kelo (бревно 34–38 см)',
    image: 'images/house-kelo.jpg',
    summary: 'Дом из природно высохшей серебристой сосны кело на берегу озера — не даёт усадки, не нуждается в покраске и служит десятилетиями.',
    description:
      'Для стен отобрано цельное сухостойное бревно кело, созревшее на корню в северных лесах. Дом поставлен на цоколь из колотого гранита, крыша накрыта натуральной деревянной дранкой, а панорамное окно гостиной выходит прямо на водную гладь.',
    specs: {
      'Порода дерева': 'Карельская сухостойная сосна Kelo, терраса — лиственница',
      'Площадь': '240 м² + палубная терраса по периметру',
      'Кровля': 'Натуральная деревянная дранка (лиственница)',
      'Регион': 'Карелия (доставка и рубка в любой регион)',
      'Срок': '7 месяцев'
    },
    inquiryType: 'Деревянный дом под ключ'
  },
  {
    id: 'house-altai-chalet',
    categoryLabel: 'Деревянный дом · 03',
    title: 'Горное шале из алтайского кедра и природного камня',
    place: 'Красная Поляна, Сочи · 360 м²',
    woodShort: 'Цельный алтайский кедр и дубовые балки',
    image: 'images/house-chalet.jpg',
    summary: 'Просторное двухэтажное шале с глубокими свесами кровли, мощными кедровыми балками, каменным цоколем и широким балконом с видом на горы.',
    description:
      'Алтайский кедр держит комфортный микроклимат при горной влажности и наполняет дом лёгким хвойным ароматом. Несущие столбы и ограждения балкона усилены массивом дуба, первый этаж облицован природным тёмным камнем.',
    specs: {
      'Порода дерева': 'Алтайский кедр камерной сушки + массив дуба',
      'Площадь': '360 м² · 2 этажа и каменная терраса',
      'Кровля': 'Фальцевая матовая кровля с усиленными стропилами',
      'Регион': 'Краснодарский край, Сочи',
      'Срок': '8 месяцев'
    },
    inquiryType: 'Деревянный дом под ключ'
  },
  {
    id: 'house-repino-larch',
    categoryLabel: 'Деревянный дом · 04',
    title: 'Одноэтажная резиденция из лиственницы и термоясеня',
    place: 'Репино, Ленинградская обл. · 195 м²',
    woodShort: 'Сибирская лиственница и тёмный термоясень',
    image: 'images/house-modern-larch.jpg',
    summary: 'Лаконичный одноэтажный дом с плоской кровлей, утопленной крытой верандой и витражами в пол среди соснового парка.',
    description:
      'Современная архитектура без лишних украшений: вертикальный планкен из сибирской лиственницы сочетается с глубоким графитовым оттенком термоясеня. Внутри — единое пространство гостиной, кухни и тёплой веранды на одном уровне с садом.',
    specs: {
      'Порода дерева': 'Сибирская лиственница и термообработанный ясень',
      'Площадь': '195 м² · 1 этаж без ступеней',
      'Остекление': 'Тёплый алюминиевый профиль, энергосберегающий стеклопакет',
      'Регион': 'Санкт-Петербург и Ленобласть',
      'Срок': '5,5 месяцев'
    },
    inquiryType: 'Деревянный дом под ключ'
  },
  {
    id: 'house-angara-estate',
    categoryLabel: 'Деревянный дом · 05',
    title: 'Классическая усадьба из рубленной ангарской сосны',
    place: 'Истринский район, МО · 310 м²',
    woodShort: 'Отборная ангарская сосна ручной рубки (36–40 см)',
    image: 'images/house-log-estate.jpg',
    summary: 'Большой родовой сруб из золотистой ангарской сосны с широким крыльцом, аккуратной резьбой наличников и фальцевой кровлей.',
    description:
      'Каждое бревно плотной сибирской ангарской сосны подгонялось вручную в чашу с замком, чтобы стены не продувались даже в суровые морозы. Входные двери и вся внутренняя столярка выполнены из дуба в нашем цеху.',
    specs: {
      'Порода дерева': 'Ангарская сосна ручной рубки + двери из дуба',
      'Площадь': '310 м² · 2 этажа и круговое крыльцо',
      'Отделка': 'Шлифовка, натуральное масло, деликатная резьба',
      'Регион': 'Московская область',
      'Срок': '8 месяцев'
    },
    inquiryType: 'Деревянный дом под ключ'
  },
  {
    id: 'house-fachwerk-oak',
    categoryLabel: 'Деревянный дом · 06',
    title: 'Фахверковый дом из клееного дуба с панорамным стеклом',
    place: 'Калужская область · 270 м²',
    woodShort: 'Клееный дуб (несущий каркас) и лиственница',
    image: 'images/house-fachwerk.jpg',
    summary: 'Светлый дом на опушке леса с мощным тёмным дубовым каркасом, вторым светом и открытой деревянной террасой с подсветкой.',
    description:
      'Силовой стоечно-балочный каркас собран из клееного дуба под тёмным маслом — дерево остаётся полностью открытым и снаружи, и внутри гостиной. Безрамное панорамное остекление растворяет границу между домом и лугом.',
    specs: {
      'Порода дерева': 'Клееный дуб + палубная доска из лиственницы',
      'Площадь': '270 м² · второй свет 6,4 м',
      'Остекление': 'Мультифункциональные двухкамерные стеклопакеты',
      'Регион': 'Калужская область',
      'Срок': '6 месяцев'
    },
    inquiryType: 'Деревянный дом под ключ'
  },
  {
    id: 'house-barnhouse-zavidovo',
    categoryLabel: 'Деревянный дом · 07',
    title: 'Лесной барнхаус из обожжённой лиственницы и ясеня',
    place: 'Завидово, Тверская обл. · 165 м²',
    woodShort: 'Обожжённая брашированная лиственница и светлый ясень',
    image: 'images/house-barnhouse.jpg',
    summary: 'Компактный выразительный дом в хвойном лесу: тёмный фасад в технике обжига и тёплая медовая входная ниша из ясеня.',
    description:
      'Обжиг и браширование защищают сибирскую лиственницу от влаги и ультрафиолета естественным образом — фасад не требует обновления краски. Внутри всё обшито светлым ясенем, установлена чугунная печь-камин.',
    specs: {
      'Порода дерева': 'Обожжённая сибирская лиственница + интерьер из ясеня',
      'Площадь': '165 м² + терраса 32 м²',
      'Технология': 'Обжиг Shou Sugi Ban + натуральное масло',
      'Регион': 'Тверская область',
      'Срок': '4,5 месяца'
    },
    inquiryType: 'Деревянный дом под ключ'
  },
  {
    id: 'house-cedar-ekb',
    categoryLabel: 'Деревянный дом · 08',
    title: 'Семейная резиденция из сибирского кедра с баней и купелью',
    place: 'Свердловская область (Екатеринбург) · 340 м²',
    woodShort: 'Сибирский кедр камерной сушки и лиственница',
    image: 'images/house-cedar-complex.jpg',
    summary: 'Основной жилой дом и банный комплекс под единой тёплой галереей, плюс уличная кедровая купель на просторной веранде.',
    description:
      'Продуманный загородный комплекс для уральского климата: толстые стены из сибирского кедра держат тепло в минус тридцать, крытый переход соединяет дом с парной из липы и кедра, а на террасе встроена купель с подогревом.',
    specs: {
      'Порода дерева': 'Сибирский кедр + отделка парной из липы и кедра',
      'Площадь': '340 м² (дом + банный корпус + галерея)',
      'Особенности': 'Кедровая купель на террасе, каменные ступени',
      'Регион': 'Свердловская область',
      'Срок': '8 месяцев'
    },
    inquiryType: 'Деревянный дом под ключ'
  },
  {
    id: 'house-lake-kazan',
    categoryLabel: 'Деревянный дом · 09',
    title: 'Двухэтажный дом у озера из северной ели и лиственницы',
    place: 'Республика Татарстан (Казань) · 230 м²',
    woodShort: 'Клееный брус северной ели и террасная лиственница',
    image: 'images/house-lakehouse.jpg',
    summary: 'Просторный дом прямо у воды с широким пирсом-террасой, балконом и панорамной гостиной, отражающейся в озере.',
    description:
      'Светлый брус северной ели практически не темнеет и не выделяет лишней смолы. Большой настил из сибирской лиственницы вынесен над береговой линией на винтовых сваях — идеален для спокойных вечеров у воды.',
    specs: {
      'Порода дерева': 'Северная ель (клееный брус) + терраса из лиственницы',
      'Площадь': '230 м² + пирс-терраса 60 м²',
      'Кровля': 'Тёмный матовый клик-фальц',
      'Регион': 'Республика Татарстан',
      'Срок': '6 месяцев'
    },
    inquiryType: 'Деревянный дом под ключ'
  },
  {
    id: 'house-guest-aprelevka',
    categoryLabel: 'Деревянный дом · 10',
    title: 'Гостевой дом-шале из дуба и сосны в сосновом бору',
    place: 'Апрелевка, МО · 140 м²',
    woodShort: 'Массив дуба, профилированная сосна и натуральный камень',
    image: 'images/house-guest-pine.jpg',
    summary: 'Уютный дом с раздвижными стеклянными дверями на палубную террасу, каменным каминным дымоходом и кровлей из дранки.',
    description:
      'Идеальный формат гостевого дома, кабинета на природе или дачи для круглогодичного отдыха. Несущие дубовые колонны, тёплые сосновые стены, встроенная библиотека из нашего цеха и настоящий дровяной камин.',
    specs: {
      'Порода дерева': 'Профилированная сосна + несущие колонны из дуба',
      'Площадь': '140 м² + терраса 26 м²',
      'Особенности': 'Дровяной камин, кровля из дранки, встроенная мебель',
      'Регион': 'Московская область (г. Апрелевка)',
      'Срок': '4 месяца'
    },
    inquiryType: 'Деревянный дом под ключ'
  }
];

const PROJECTS = [
  {
    id: 'executive-library',
    category: 'furniture',
    categoryLabel: 'Кабинеты и мебель',
    title: 'Угловая библиотека и кабинет из тёмного дуба',
    place: 'Москва, ЦАО · 2025',
    image: 'images/library-study.jpg',
    summary: 'Встроенная система стеллажей от пола до потолка с ТВ-нишей, скрытой проводкой и рабочим столом с латунными вставками.',
    description:
      'Стеллажи огибают угол кабинета без видимых зазоров и компенсируют геометрию стен. В центральной панели заложены кабель-каналы и скрытые розетки, а рабочий стол выполнен в едином шпоне и тоне с библиотекой.',
    specs: {
      'Материалы': 'Морёный дуб, шпон, шлифованная латунь',
      'Фурнитура': 'Blum (скрытые направляющие с доводкой)',
      'Габариты': '6,4 × 3,8 м, высота 3,15 м',
      'Срок': '7 недель под ключ'
    },
    inquiryType: 'Кабинет, библиотека или шкаф'
  },
  {
    id: 'oak-foyer-stairs',
    category: 'stairs',
    categoryLabel: 'Лестницы и отделка',
    title: 'Маршевая лестница и парадный холл из массива дуба',
    place: 'Одинцовский район, МО · 2025',
    image: 'images/oak-foyer-stairs.jpg',
    summary: 'Классическая дубовая лестница с точёными балясинами, цельным гнутым поручнем, панелями стен и филёнчатыми дверями.',
    description:
      'Светлый холл загородного дома, где лестница, стеновые панели и двустворчатая дверь в гостиную выполнены из одной партии отборного дуба. Все стыки собраны без видимого крепежа, ступени защищены износостойким матовым лаком.',
    specs: {
      'Порода дерева': 'Отборный массив дуба',
      'Покрытие': 'Натуральная тонировка и паркетный лак',
      'Комплект': 'Лестница, стеновые панели, двустворчатая дверь',
      'Срок': '9 недель под ключ'
    },
    inquiryType: 'Лестница или отделка деревом'
  },
  {
    id: 'house-living',
    category: 'stairs',
    categoryLabel: 'Лестницы и отделка',
    title: 'Гостиная с дубовыми балками и встроенными стеллажами',
    place: 'КП «Апрелевка Парк», МО · 2025',
    image: 'images/house-living.jpg',
    summary: 'Интерьерная отделка деревянного дома: открытые дубовые балки, встроенные шкафы и спокойная тёплая цветовая гамма.',
    description:
      'Задача была сделать деревянный интерьер светлым и воздушным, без тяжеловесности. Массив натурального дуба под прозрачным маслом сочетается с известковой штукатуркой и тёплым камнем камина.',
    specs: {
      'Порода дерева': 'Отборный дуб натурального тона',
      'Элементы': 'Балки перекрытия, встроенная библиотека, портал',
      'Покрытие': 'Натуральное матовое масло-воск',
      'Срок': '8 недель'
    },
    inquiryType: 'Лестница или отделка деревом'
  },
  {
    id: 'walnut-kitchen',
    category: 'furniture',
    categoryLabel: 'Кабинеты и мебель',
    title: 'Кухня с островом и столовая из ореха и ясеня',
    place: 'Санкт-Петербург · 2024',
    image: 'images/kitchen-walnut.jpg',
    summary: 'Фасады с непрерывным вертикальным рисунком шпона, массивный остров с камнем и обеденная группа из дуба.',
    description:
      'Все фасады раскроены из одной пачки шпона, чтобы текстура дерева переходила с дверцы на дверцу без разрыва. Внутри — усиленная европейская фурнитура, рассчитанная на ежедневную нагрузку большой семьи.',
    specs: {
      'Материалы': 'Американский орех, ясень, натуральный травертин',
      'Фурнитура': 'Blum Legrabox и петли Hettich',
      'Комплектация': 'Кухня, остров, обеденный стол на 8 персон',
      'Срок': '6 недель + доставка и монтаж'
    },
    inquiryType: 'Кухня из массива'
  },
  {
    id: 'carved-heraldic',
    category: 'decor',
    categoryLabel: 'Резьба и декор',
    title: 'Резные геральдические панно и классические буазери',
    place: 'Москва · 2024',
    image: 'images/carved-panel.jpg',
    summary: 'Объёмная художественная резьба по массиву дуба с патинированием под старую бронзу и классическая отделка стен.',
    description:
      'Ручная доработка рельефа, плетение декоративного багета и многослойное патинирование позволяют добиться глубокой игры света. Изготавливаем фамильные и государственные гербы, панно, резные фризы и порталы.',
    specs: {
      'Порода дерева': 'Цельный массив дуба и бука',
      'Техника': 'Резьба по дереву, ручное патинирование',
      'Отделка': 'Тонировка, бронзовая патина, защитный лак',
      'Срок': '3–4 недели на комплект'
    },
    inquiryType: 'Резные изделия и декор'
  },
  {
    id: 'walkin-wardrobe',
    category: 'furniture',
    categoryLabel: 'Кабинеты и мебель',
    title: 'Гардеробная комната и филёнчатые двери из массива',
    place: 'КП «Миллениум Парк», МО · 2025',
    image: 'images/dressing-room.jpg',
    summary: 'Открытые секции и витрины с тёплой подсветкой, центральный комод-остров и межкомнатная дверь в одном оттенке.',
    description:
      'Продуманная эргономика хранения под конкретный гардероб владельцев: мягкая светодиодная подсветка утоплена прямо в деревянные стойки, ящики отделаны светлой замшей, а латунные ручки выточены под заказ.',
    specs: {
      'Материалы': 'Орех, массив дуба, дымчатое стекло',
      'Фурнитура': 'Hafele и Blum',
      'Площадь': '22 м² + дверной блок из массива',
      'Срок': '6 недель'
    },
    inquiryType: 'Кабинет, библиотека или шкаф'
  }
];

const REQUISITES_TEXT = [
  'ООО «ЛЕСКВАНТ» (бренд LESKVANTA / «Лескванта»)',
  'ИНН: 7723422889 | КПП: 772301001 | ОГРН: 5157746158862',
  'Дата регистрации: 09.12.2015 (история бренда с 2013 года)',
  'Генеральный директор: Оберюхтин Алексей Александрович (ИНН 501204399621)',
  'Производство: Московская область, г. Апрелевка (работаем по всей России)',
  'Салон / офис: г. Москва, ул. Шоссейная, д. 90, корп. 13',
  'Юридический адрес: г. Москва, ул. Цимлянская, д. 3, корп. 2',
  'Телефоны: +7 (495) 772-07-34, +7 (925) 772-07-34',
  'Email: info@leskvanta.ru | Сайт: leskvanta.ru'
].join('\n');

document.addEventListener('DOMContentLoaded', () => {
  const housesTrack = document.getElementById('housesTrack');
  const housesDots = document.getElementById('housesDots');
  const housesCounter = document.getElementById('housesCounter');
  const housesPrev = document.getElementById('housesPrev');
  const housesNext = document.getElementById('housesNext');

  const grid = document.getElementById('portfolioGrid');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const modal = document.getElementById('projectModal');
  const modalImage = document.getElementById('modalImage');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalLocation = document.getElementById('modalLocation');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecs = document.getElementById('modalSpecs');
  const modalCounter = document.getElementById('modalCounter');
  const modalPrev = document.getElementById('modalPrev');
  const modalNext = document.getElementById('modalNext');
  const modalInquireBtn = document.getElementById('modalInquireBtn');
  const toastEl = document.getElementById('toast');

  let currentFilter = 'all';
  let visibleProjects = [...PROJECTS];
  let modalList = [...HOUSES];
  let activeModalIndex = 0;
  let activeHouseIndex = 0;
  let toastTimer = null;

  /* ---------- Уведомление ---------- */
  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.setAttribute('aria-hidden', 'false');
    toastEl.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('is-visible');
      toastEl.setAttribute('aria-hidden', 'true');
    }, 2400);
  }

  function formatRub(num) {
    const clean = Math.max(0, Number(num) || 0);
    return `${clean.toLocaleString('ru-RU')} ₽`;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ---------- Карусель 10 деревянных домов ---------- */
  if (housesTrack && housesDots) {
    housesTrack.innerHTML = HOUSES.map(
      (house, idx) => `
        <article class="house-slide" data-house-index="${idx}" tabindex="0" role="button" aria-label="Открыть подробности: ${house.title}">
          <div class="house-slide-media">
            <img src="${house.image}" alt="${house.title}" loading="${idx < 2 ? 'eager' : 'lazy'}">
          </div>
          <div class="house-slide-body">
            <div>
              <h3 class="house-slide-title">${house.title}</h3>
              <p class="house-slide-region">${house.place}</p>
            </div>
            <div>
              <p class="house-slide-wood"><strong>Дерево:</strong> ${house.woodShort}</p>
              <p class="house-slide-desc">${house.summary}</p>
              <span class="house-slide-link">Характеристики и детали →</span>
            </div>
          </div>
        </article>
      `
    ).join('');

    housesDots.innerHTML = HOUSES.map(
      (house, idx) => `
        <button type="button" class="house-dot${idx === 0 ? ' is-active' : ''}" data-dot-index="${idx}" title="${house.title}">
          ${String(idx + 1).padStart(2, '0')}
        </button>
      `
    ).join('');

    const slideEls = Array.from(housesTrack.querySelectorAll('.house-slide'));
    const dotEls = Array.from(housesDots.querySelectorAll('.house-dot'));

    function updateHouseIndicator(index) {
      activeHouseIndex = Math.max(0, Math.min(HOUSES.length - 1, index));
      if (housesCounter) {
        housesCounter.textContent = `${activeHouseIndex + 1} / ${HOUSES.length}`;
      }
      dotEls.forEach((dot, i) => dot.classList.toggle('is-active', i === activeHouseIndex));
    }

    function scrollToHouse(index) {
      const targetIdx = (index + HOUSES.length) % HOUSES.length;
      const slide = slideEls[targetIdx];
      if (!slide) return;
      housesTrack.scrollTo({
        left: slide.offsetLeft - housesTrack.offsetLeft,
        behavior: 'smooth'
      });
      updateHouseIndicator(targetIdx);
    }

    housesPrev?.addEventListener('click', () => scrollToHouse(activeHouseIndex - 1));
    housesNext?.addEventListener('click', () => scrollToHouse(activeHouseIndex + 1));

    housesDots.addEventListener('click', (event) => {
      const dot = event.target.closest('.house-dot');
      if (!dot) return;
      scrollToHouse(Number(dot.dataset.dotIndex));
    });

    let scrollSyncTimer = null;
    housesTrack.addEventListener('scroll', () => {
      clearTimeout(scrollSyncTimer);
      scrollSyncTimer = setTimeout(() => {
        const trackLeft = housesTrack.scrollLeft + housesTrack.offsetLeft;
        let closestIdx = 0;
        let minDiff = Infinity;
        slideEls.forEach((slide, idx) => {
          const diff = Math.abs(slide.offsetLeft - trackLeft);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = idx;
          }
        });
        updateHouseIndicator(closestIdx);
      }, 60);
    });

    housesTrack.addEventListener('click', (event) => {
      const slide = event.target.closest('.house-slide');
      if (!slide) return;
      openModal(Number(slide.dataset.houseIndex), HOUSES);
    });

    housesTrack.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollToHouse(activeHouseIndex + 1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollToHouse(activeHouseIndex - 1);
      } else if (event.key === 'Enter' || event.key === ' ') {
        const slide = event.target.closest('.house-slide');
        if (!slide) return;
        event.preventDefault();
        openModal(Number(slide.dataset.houseIndex), HOUSES);
      }
    });
  }

  /* ---------- Портфолио мебели и интерьеров ---------- */
  function renderProjects(filter) {
    currentFilter = filter;
    if (filter === 'all') {
      visibleProjects = [...PROJECTS];
    } else if (filter === 'stairs') {
      visibleProjects = [HERO_PROJECT, ...PROJECTS.filter((item) => item.category === 'stairs')];
    } else {
      visibleProjects = PROJECTS.filter((item) => item.category === filter);
    }

    grid.innerHTML = visibleProjects
      .map(
        (project, idx) => `
          <article class="project-card" data-index="${idx}" tabindex="0" role="button" aria-label="Открыть проект: ${project.title}">
            <div class="project-media">
              <img src="${project.image}" alt="${project.title}" loading="${idx < 2 ? 'eager' : 'lazy'}">
            </div>
            <div class="project-meta-top">
              <h3 class="project-title">${project.title}</h3>
              <span class="project-place">${project.place}</span>
            </div>
            <p class="project-summary">${project.summary}</p>
            <span class="project-tags">${project.categoryLabel} · ${project.specs['Порода дерева'] || project.specs['Материалы']}</span>
          </article>
        `
      )
      .join('');
  }

  renderProjects('all');

  /* Открытие главного объекта из Hero */
  const heroTrigger = document.getElementById('heroProjectTrigger');
  if (heroTrigger) {
    const openHeroModal = () => openModal(0, [HERO_PROJECT, ...PROJECTS]);
    heroTrigger.addEventListener('click', openHeroModal);
    heroTrigger.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openHeroModal();
      }
    });
  }

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const nextFilter = tab.dataset.filter;
      if (nextFilter === currentFilter) return;

      filterTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });

      renderProjects(nextFilter);
    });
  });

  grid.addEventListener('click', (event) => {
    const card = event.target.closest('.project-card');
    if (!card) return;
    openModal(Number(card.dataset.index), visibleProjects);
  });

  grid.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const card = event.target.closest('.project-card');
    if (!card) return;
    event.preventDefault();
    openModal(Number(card.dataset.index), visibleProjects);
  });

  /* ---------- Модальное окно ---------- */
  function populateModal(index) {
    activeModalIndex = (index + modalList.length) % modalList.length;
    const project = modalList[activeModalIndex];
    if (!project) return;

    modalCounter.textContent = `${activeModalIndex + 1} / ${modalList.length}`;
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalCategory.textContent = project.categoryLabel;
    modalTitle.textContent = project.title;
    modalLocation.textContent = project.place;
    modalDesc.textContent = project.description;

    modalSpecs.innerHTML = Object.entries(project.specs)
      .map(
        ([label, value]) => `
        <div class="modal-spec-row">
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>
      `
      )
      .join('');
  }

  function openModal(index, list) {
    if (list) modalList = [...list];
    populateModal(index);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  }

  modal.querySelectorAll('[data-close-modal]').forEach((el) => {
    el.addEventListener('click', closeModal);
  });

  modalPrev.addEventListener('click', () => populateModal(activeModalIndex - 1));
  modalNext.addEventListener('click', () => populateModal(activeModalIndex + 1));

  modalInquireBtn.addEventListener('click', () => {
    const project = modalList[activeModalIndex];
    closeModal();
    const select = document.getElementById('projectType');
    const message = document.getElementById('clientMessage');
    if (select && project?.inquiryType) {
      select.value = project.inquiryType;
    }
    if (message && project) {
      message.value = `Интересует похожий проект: «${project.title}».`;
    }
    const contacts = document.getElementById('contacts');
    if (contacts) {
      contacts.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => document.getElementById('clientName')?.focus(), 450);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowLeft') populateModal(activeModalIndex - 1);
    if (event.key === 'ArrowRight') populateModal(activeModalIndex + 1);
  });

  /* ---------- Кнопки блока Дизайнерский проект ---------- */
  const orderDesignBtn = document.getElementById('orderDesignBtn');
  const discussDesignLink = document.getElementById('discussDesignLink');

  if (orderDesignBtn) {
    orderDesignBtn.addEventListener('click', () => {
      selectPaymentPreset('design');
      document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (discussDesignLink) {
    discussDesignLink.addEventListener('click', () => {
      const select = document.getElementById('projectType');
      const message = document.getElementById('clientMessage');
      if (select) select.value = 'Дизайнерский проект с командой';
      if (message && !message.value.trim()) {
        message.value = 'Хочу разработать индивидуальный дизайн-проект вместе с вашей командой.';
      }
    });
  }

  /* ---------- Платёжный виджет ---------- */
  const presetBtns = Array.from(document.querySelectorAll('.preset-option'));
  const customAmountRow = document.getElementById('customAmountRow');
  const payCustomAmount = document.getElementById('payCustomAmount');
  const payContractNumber = document.getElementById('payContractNumber');
  const paySummaryTitle = document.getElementById('paySummaryTitle');
  const paySummaryAmount = document.getElementById('paySummaryAmount');
  const sbpPurpose = document.getElementById('sbpPurpose');
  const cardPayBtn = document.getElementById('cardPayBtn');
  const paymentStatus = document.getElementById('paymentStatus');
  const payTabs = Array.from(document.querySelectorAll('.pay-tab'));
  const payPanes = {
    sbp: document.getElementById('pane-sbp'),
    card: document.getElementById('pane-card'),
    invoice: document.getElementById('pane-invoice')
  };

  let currentPayState = {
    preset: 'design',
    title: 'Индивидуальный дизайн-проект',
    amount: 35000
  };

  function refreshPaymentSummary() {
    const contractText =
      currentPayState.preset === 'contract' && payContractNumber?.value.trim()
        ? ` (${payContractNumber.value.trim()})`
        : '';
    const fullTitle = `${currentPayState.title}${contractText}`;
    const formatted = formatRub(currentPayState.amount);

    if (paySummaryTitle) paySummaryTitle.textContent = fullTitle;
    if (paySummaryAmount) paySummaryAmount.textContent = formatted;
    if (sbpPurpose) sbpPurpose.textContent = `Оплата: ${fullTitle}`;
    if (cardPayBtn) cardPayBtn.textContent = `Оплатить ${formatted}`;
  }

  function selectPaymentPreset(presetId) {
    const btn = presetBtns.find((b) => b.dataset.preset === presetId);
    if (!btn) return;
    presetBtns.forEach((b) => b.classList.toggle('is-selected', b === btn));
    currentPayState.preset = presetId;
    currentPayState.title = btn.dataset.title || '';

    if (presetId === 'contract') {
      if (customAmountRow) customAmountRow.hidden = false;
      currentPayState.amount = Math.max(1000, Number(payCustomAmount?.value) || 150000);
    } else {
      if (customAmountRow) customAmountRow.hidden = true;
      currentPayState.amount = Number(btn.dataset.amount) || 0;
    }

    if (paymentStatus) paymentStatus.hidden = true;
    refreshPaymentSummary();
  }

  presetBtns.forEach((btn) => {
    btn.addEventListener('click', () => selectPaymentPreset(btn.dataset.preset));
  });

  payCustomAmount?.addEventListener('input', () => {
    currentPayState.amount = Math.max(0, Number(payCustomAmount.value) || 0);
    refreshPaymentSummary();
  });

  payContractNumber?.addEventListener('input', refreshPaymentSummary);

  payTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const method = tab.dataset.method;
      payTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });
      Object.entries(payPanes).forEach(([key, pane]) => {
        pane?.classList.toggle('is-active', key === method);
      });
      if (paymentStatus) paymentStatus.hidden = true;
    });
  });

  document.getElementById('copySbpPurposeBtn')?.addEventListener('click', () => {
    const text = `ООО «ЛЕСКВАНТ» (ИНН 7723422889) — ${sbpPurpose?.textContent || ''} — ${formatRub(currentPayState.amount)}`;
    copyText(text, 'Назначение платежа СБП скопировано');
  });

  document.getElementById('confirmSbpBtn')?.addEventListener('click', () => {
    if (!paymentStatus) return;
    const orderNum = `LK-${Math.floor(100000 + Math.random() * 900000)}`;
    paymentStatus.classList.remove('is-error');
    paymentStatus.innerHTML = `
      Платёж <strong>#${orderNum}</strong> на сумму <strong>${formatRub(currentPayState.amount)}</strong>
      (${escapeHtml(paySummaryTitle?.textContent || '')}) сформирован для оплаты по&nbsp;СБП в&nbsp;адрес ООО «ЛЕСКВАНТ».
      При&nbsp;подключении боевого СБП-шлюза здесь автоматически откроется приложение вашего банка.
    `;
    paymentStatus.hidden = false;
  });

  /* Форматирование номера карты и срока */
  const cardNumberInput = document.getElementById('cardNumber');
  const cardExpiryInput = document.getElementById('cardExpiry');

  cardNumberInput?.addEventListener('input', () => {
    const digits = cardNumberInput.value.replace(/\D/g, '').slice(0, 16);
    cardNumberInput.value = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
  });

  cardExpiryInput?.addEventListener('input', () => {
    const digits = cardExpiryInput.value.replace(/\D/g, '').slice(0, 4);
    cardExpiryInput.value = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
  });

  document.getElementById('cardPayForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!paymentStatus) return;
    const digits = (cardNumberInput?.value || '').replace(/\D/g, '');
    const expiry = (cardExpiryInput?.value || '').trim();
    const cvc = (document.getElementById('cardCvc')?.value || '').trim();
    const email = (document.getElementById('cardEmail')?.value || '').trim();

    if (currentPayState.amount < 1000) {
      paymentStatus.textContent = 'Укажите сумму не менее 1 000 ₽.';
      paymentStatus.classList.add('is-error');
      paymentStatus.hidden = false;
      return;
    }

    if (digits.length < 16 || expiry.length < 5 || cvc.length < 3 || !email.includes('@')) {
      paymentStatus.textContent = 'Проверьте данные карты (16 цифр, срок ММ/ГГ, 3 цифры CVC) и почту для чека.';
      paymentStatus.classList.add('is-error');
      paymentStatus.hidden = false;
      return;
    }

    const orderNum = `LK-${Math.floor(100000 + Math.random() * 900000)}`;
    paymentStatus.classList.remove('is-error');
    paymentStatus.innerHTML = `
      Тестовая оплата <strong>#${orderNum}</strong> на сумму <strong>${formatRub(currentPayState.amount)}</strong>
      прошла успешно (карта •••• ${escapeHtml(digits.slice(-4))}).
      Электронный чек будет отправлен на&nbsp;${escapeHtml(email)} после подключения боевого эквайринга ООО «ЛЕСКВАНТ».
    `;
    paymentStatus.hidden = false;
    event.target.reset();
  });

  /* Генерация печатного счёта */
  document.getElementById('invoiceForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!paymentStatus) return;
    const payer = (document.getElementById('invPayer')?.value || '').trim();
    const inn = (document.getElementById('invInn')?.value || '').trim();
    const contact = (document.getElementById('invContact')?.value || '').trim();

    if (!payer || !contact) {
      paymentStatus.textContent = 'Укажите плательщика и контакт (телефон или почту) для формирования счёта.';
      paymentStatus.classList.add('is-error');
      paymentStatus.hidden = false;
      return;
    }

    const invNumber = Math.floor(1000 + Math.random() * 9000);
    const today = new Date().toLocaleDateString('ru-RU');
    const title = paySummaryTitle?.textContent || currentPayState.title;
    const amountStr = formatRub(currentPayState.amount);

    const win = window.open('', '_blank', 'width=820,height=720');
    if (win) {
      win.document.write(`
        <!DOCTYPE html>
        <html lang="ru">
        <head>
          <meta charset="UTF-8">
          <title>Счёт № ${invNumber} от ${today} — ООО «ЛЕСКВАНТ»</title>
          <style>
            body { font-family: Arial, sans-serif; color: #222; padding: 40px; max-width: 740px; margin: 0 auto; line-height: 1.5; }
            h1 { font-size: 20px; border-bottom: 2px solid #222; padding-bottom: 10px; }
            table { width: 100%; border-collapse: collapse; margin: 22px 0; }
            th, td { border: 1px solid #ccc; padding: 10px; text-align: left; font-size: 14px; }
            th { background: #f4f4f4; }
            .meta { font-size: 14px; margin: 8px 0; }
            .total { text-align: right; font-size: 18px; font-weight: bold; margin-top: 16px; }
            .print-btn { margin-top: 24px; padding: 10px 20px; background: #241F1B; color: #fff; border: 0; cursor: pointer; }
            @media print { .print-btn { display: none; } }
          </style>
        </head>
        <body>
          <h1>Счёт на оплату № ${invNumber} от ${today}</h1>
          <p class="meta"><strong>Поставщик:</strong> ООО «ЛЕСКВАНТ», ИНН 7723422889, КПП 772301001, ОГРН 5157746158862</p>
          <p class="meta"><strong>Адрес:</strong> г. Москва, ул. Цимлянская, д. 3, корп. 2 · Производство: МО, г. Апрелевка</p>
          <p class="meta"><strong>Руководитель:</strong> Генеральный директор Оберюхтин Алексей Александрович</p>
          <p class="meta"><strong>Плательщик:</strong> ${escapeHtml(payer)}${inn ? ` (ИНН ${escapeHtml(inn)})` : ''}</p>
          <p class="meta"><strong>Контакт:</strong> ${escapeHtml(contact)}</p>
          <table>
            <thead>
              <tr><th>№</th><th>Наименование работы / услуги</th><th>Кол-во</th><th>Сумма</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>${escapeHtml(title)}</td><td>1</td><td>${amountStr}</td></tr>
            </tbody>
          </table>
          <p class="total">Итого к оплате: ${amountStr}</p>
          <p class="meta" style="color:#666; margin-top:24px;">Для уточнения банковских реквизитов расчётного счёта и подписания договора: +7 (495) 772-07-34, info@leskvanta.ru</p>
          <button class="print-btn" onclick="window.print()">Распечатать / Сохранить PDF</button>
        </body>
        </html>
      `);
      win.document.close();
    }

    paymentStatus.classList.remove('is-error');
    paymentStatus.innerHTML = `Счёт <strong>№ ${invNumber}</strong> на сумму <strong>${amountStr}</strong> сформирован для ${escapeHtml(payer)}.`;
    paymentStatus.hidden = false;
  });

  refreshPaymentSummary();

  /* ---------- Копирование реквизитов ---------- */
  async function copyText(text, label) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const helper = document.createElement('textarea');
        helper.value = text;
        helper.style.position = 'fixed';
        helper.style.opacity = '0';
        document.body.appendChild(helper);
        helper.select();
        document.execCommand('copy');
        helper.remove();
      }
      showToast(label || 'Скопировано в буфер обмена');
    } catch {
      showToast('Не удалось скопировать автоматически');
    }
  }

  document.querySelectorAll('.copy-inline').forEach((btn) => {
    btn.addEventListener('click', () => {
      const value = btn.dataset.copy;
      if (value) copyText(value, `Скопировано: ${value}`);
    });
  });

  document.getElementById('copyRequisitesBtn')?.addEventListener('click', () => {
    copyText(REQUISITES_TEXT, 'Реквизиты ООО «ЛЕСКВАНТ» скопированы');
  });

  /* ---------- Мобильное меню ---------- */
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileDrawer = document.getElementById('mobileDrawer');

  function setDrawerOpen(open) {
    menuToggle.setAttribute('aria-expanded', String(open));
    mobileDrawer.classList.toggle('is-open', open);
    mobileDrawer.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('no-scroll', open);
  }

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      setDrawerOpen(!expanded);
    });

    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setDrawerOpen(false));
    });
  }

  /* ---------- Подсветка активного раздела в шапке ---------- */
  const navLinks = Array.from(document.querySelectorAll('.main-nav a'));
  const observedSections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && observedSections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = `#${entry.target.id}`;
          navLinks.forEach((link) => {
            link.classList.toggle('is-current', link.getAttribute('href') === id);
          });
        });
      },
      { rootMargin: '-32% 0px -58% 0px' }
    );

    observedSections.forEach((sec) => observer.observe(sec));
  }

  /* ---------- Форма обратной связи ---------- */
  const form = document.getElementById('inquiryForm');
  const formStatus = document.getElementById('formStatus');

  if (form && formStatus) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = form.elements.name.value.trim();
      const phone = form.elements.phone.value.trim();
      const type = form.elements.type.value;
      const message = form.elements.message.value.trim();

      if (!name || phone.length < 6) {
        formStatus.textContent = 'Пожалуйста, укажите имя и контактный телефон или мессенджер.';
        formStatus.classList.add('is-error');
        formStatus.hidden = false;
        return;
      }

      formStatus.classList.remove('is-error');
      const mailSubject = encodeURIComponent(`Заявка с сайта Лескванта: ${type}`);
      const mailBody = encodeURIComponent(
        `Имя: ${name}\nКонтакт: ${phone}\nНаправление: ${type}\nКомментарий: ${message || '—'}`
      );

      formStatus.innerHTML = `
        Спасибо, ${escapeHtml(name)}! Заявка по направлению «${escapeHtml(type)}» принята.
        Мы свяжемся с вами по номеру ${escapeHtml(phone)}.
        Если удобно, можете также сразу отправить текст на почту
        <a href="mailto:info@leskvanta.ru?subject=${mailSubject}&body=${mailBody}" style="text-decoration: underline;">info@leskvanta.ru</a>.
      `;
      formStatus.hidden = false;
      form.reset();
    });
  }
});
