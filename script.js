/* ==========================================================================
   Лескванта — логика портфолио, лайтбокса, копирования реквизитов и формы
   ========================================================================== */

const HERO_PROJECT = {
  id: 'spiral-staircase',
  category: 'stairs',
  categoryLabel: 'Лестницы и отделка',
  title: 'Винтовая лестница, кессонный потолок и буазери',
  place: 'Рублёвское шоссе, МО · 2025',
  image: 'images/staircase-hero.jpg',
  wide: false,
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

const PROJECTS = [
  {
    id: 'timber-house',
    category: 'houses',
    categoryLabel: 'Загородные дома',
    title: 'Загородный дом из клееного бруса и лиственницы',
    place: 'Новорижское шоссе, МО · 2024',
    image: 'images/timber-house.jpg',
    wide: true,
    summary: 'Двухэтажный деревянный дом в сосновом лесу с просторной террасой из сибирской лиственницы и панорамным остеклением.',
    description:
      'Тёплый дом для круглогодичного проживания. Для фасадов и открытой веранды использована отборная сибирская лиственница камерной сушки с защитной пропиткой маслом, а подшивка свесов и наличники выполнены в едином столярном стиле.',
    specs: {
      'Материалы': 'Клееный брус, сибирская лиственница',
      'Площадь': '285 м² + терраса 48 м²',
      'Защита': 'Атмосферостойкие масла Tikkurila',
      'Регион': 'Истринский район, Московская область'
    },
    inquiryType: 'Загородный дом или терраса'
  },
  {
    id: 'executive-library',
    category: 'furniture',
    categoryLabel: 'Кабинеты и мебель',
    title: 'Угловая библиотека и кабинет из тёмного дуба',
    place: 'Москва, ЦАО · 2025',
    image: 'images/library-study.jpg',
    wide: false,
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
    wide: false,
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
    category: 'houses',
    categoryLabel: 'Загородные дома',
    title: 'Гостиная со стропильными балками и стеллажами',
    place: 'КП «Апрелевка Парк», МО · 2025',
    image: 'images/house-living.jpg',
    wide: false,
    summary: 'Интерьерная отделка загородного дома: открытые дубовые балки, встроенные шкафы и спокойная тёплая цветовая гамма.',
    description:
      'Задача была сделать деревянный интерьер светлым и воздушным, без тяжеловесности. Массив натурального дуба под прозрачным маслом сочетается с известковой штукатуркой и тёплым камнем камина.',
    specs: {
      'Порода дерева': 'Отборный дуб натурального тона',
      'Элементы': 'Балки перекрытия, встроенная библиотека, портал',
      'Покрытие': 'Натуральное матовое масло-воск',
      'Срок': '8 недель'
    },
    inquiryType: 'Загородный дом или терраса'
  },
  {
    id: 'walnut-kitchen',
    category: 'furniture',
    categoryLabel: 'Кабинеты и мебель',
    title: 'Кухня с островом и столовая из ореха и ясеня',
    place: 'Одинцовский район, МО · 2024',
    image: 'images/kitchen-walnut.jpg',
    wide: false,
    summary: 'Фасады с непрерывным вертикальным рисунком шпона, массивный остров с камнем и обеденная группа из дуба.',
    description:
      'Все фасады раскроены из одной пачки шпона, чтобы текстура дерева переходила с дверцы на дверцу без разрыва. Внутри — усиленная европейская фурнитура, рассчитанная на ежедневную нагрузку большой семьи.',
    specs: {
      'Материалы': 'Американский орех, ясень, натуральный травертин',
      'Фурнитура': 'Blum Legrabox и петли Hettich',
      'Комплектация': 'Кухня, остров, обеденный стол на 8 персон',
      'Срок': '6 недель'
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
    wide: false,
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
    wide: false,
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
  'Производство: Московская область, г. Апрелевка',
  'Салон / офис: г. Москва, ул. Шоссейная, д. 90, корп. 13',
  'Юридический адрес: г. Москва, ул. Цимлянская, д. 3, корп. 2',
  'Телефоны: +7 (495) 772-07-34, +7 (925) 772-07-34',
  'Email: info@leskvanta.ru | Сайт: leskvanta.ru'
].join('\n');

document.addEventListener('DOMContentLoaded', () => {
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
  let modalList = [...PROJECTS];
  let activeModalIndex = 0;
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

  /* ---------- Рендер портфолио ---------- */
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
      .map((project, idx) => {
        const wideClass = filter === 'all' && project.wide ? ' is-wide' : '';
        return `
          <article class="project-card${wideClass}" data-index="${idx}" tabindex="0" role="button" aria-label="Открыть проект: ${project.title}">
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
        `;
      })
      .join('');
  }

  renderProjects('all');

  /* Открытие главного объекта из Hero */
  const heroTrigger = document.getElementById('heroProjectTrigger');
  if (heroTrigger) {
    const openHeroModal = () => {
      modalList = [HERO_PROJECT, ...PROJECTS];
      openModal(0, modalList);
    };
    heroTrigger.addEventListener('click', openHeroModal);
    heroTrigger.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openHeroModal();
      }
    });
  }

  /* Фильтрация */
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

  /* Открытие модалки по клику или Enter/Space */
  grid.addEventListener('click', (event) => {
    const card = event.target.closest('.project-card');
    if (!card) return;
    modalList = [...visibleProjects];
    openModal(Number(card.dataset.index), modalList);
  });

  grid.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const card = event.target.closest('.project-card');
    if (!card) return;
    event.preventDefault();
    modalList = [...visibleProjects];
    openModal(Number(card.dataset.index), modalList);
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
    if (list) modalList = list;
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

  const copyAllBtn = document.getElementById('copyRequisitesBtn');
  if (copyAllBtn) {
    copyAllBtn.addEventListener('click', () => {
      copyText(REQUISITES_TEXT, 'Реквизиты ООО «ЛЕСКВАНТ» скопированы');
    });
  }

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
      { rootMargin: '-35% 0px -55% 0px' }
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

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
});
