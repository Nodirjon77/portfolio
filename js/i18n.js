/* =============================================
   i18n.js — Til almashtirish tizimi
   Tillar: UZ | RU | EN
   ============================================= */

const TRANSLATIONS = {
  uz: {
    nav_home:"Asosiy", nav_about:"Men haqimda", nav_skills:"Ko'nikmalar",
    nav_portfolio:"Portfolio", nav_contact:"Bog'lanish",
    hero_tag:"Mavjud — frilanser loyihalarga ochiq",
    hero_greeting:"Salom, men",
    hero_desc:"Telegram botlar, web saytlar va avtomatlashtirish tizimlarini yarataman.",
    hero_location:"Farg'ona, O'zbekiston",
    hero_btn_work:"Ishlarimni ko'ring", hero_btn_contact:"Bog'lanish",
    hero_roles:["Web Dasturchi","Telegram Bot Dasturchi","Python Dasturchi","Frilanser"],
    stat_projects:"Loyihalar", stat_clients:"Mijozlar",
    about_label:"// men haqimda", about_title:"Web\nDasturchi",
    about_p1:"Assalomu alaykum! Men Nodirjon To'ychiyev — Web va Telegram bot dasturchiman. <strong>aiogram 3</strong>, <strong>SQLite / PostgreSQL</strong> va <strong>Odoo 17 ERP</strong> tizimlarida ishlayman.",
    about_p2:"Hozirda xalqaro frilanser platformalarda (Kwork, Upwork) faoliyat yuritaman va OOP, Docker, Design Patterns bo'yicha bilimlarni chuqurlashtiryapman.",
    about_loc_label:"Joylashuv", about_loc_val:"Farg'ona, O'zbekiston",
    about_exp_label:"Tajriba", about_exp_val:"1+ yil HTML, CSS",
    about_lang_label:"Til", about_lang_val:"O'zbek, Rus, Ingliz (A2)",
    about_status_label:"Holat", about_status_val:"● Mavjud",
    about_cv_btn:"CV yuklab olish",
    skills_label:"// texnologiyalar", skills_title:"Ko'nikmalarim",
    skill_py_title:"Python", skill_py_desc:"OOP, Decorators, Generators, FastAPI, aiohttp",
    skill_tg_title:"Telegram Botlar", skill_tg_desc:"aiogram 3, FSM, inline keyboards, webhooks",
    skill_db_title:"Ma'lumotlar bazasi", skill_db_desc:"PostgreSQL, SQLite, SQLAlchemy",
    skill_odoo_title:"Odoo 17 ERP", skill_odoo_desc:"Konfiguratsiya, modullar, texnik topshiriq",
    skill_fe_title:"Frontend", skill_fe_desc:"HTML5, CSS3, Flexbox, Grid, Responsive",
    skill_dev_title:"DevOps (o'rganmoqda)", skill_dev_desc:"Docker, Git, Linux, deployment",
    portfolio_label:"// loyihalarim", portfolio_title:"Portfolio",
    p1_title:"Telegram E-commerce Bot",
    p1_desc:"Mahsulotlar katalogi, buyurtma tizimi va real vaqt sklad boshqaruvi bilan to'liq savdo boti. Webhook asosida ishlaydi.",
    p2_title:"Sklad Boshqaruv Tizimi",
    p2_desc:"Ombor inventarizatsiyasi uchun backend tizim: kirim, chiqim, hisobotlar va Telegram bildirishnomalar.",
    p3_title:"Odoo 17 ERP Konfiguratsiya",
    p3_desc:"Mebel kompaniyasi uchun to'liq ERP sozlash: ombor, POS, valuta, CSV import va hisobotlar.",
    p4_title:"Portfolio Sayt",
    p4_desc:"Siz hozir ko'rayotgan bu sayt! HTML5, CSS3 (Flexbox + Grid), responsive dizayn va zamonaviy UI.",
    cta_label:"// tayyor loyiha bormi?", cta_title:"Birgalikda yarataylik!",
    cta_desc:"Python bot, backend API yoki Odoo ERP — har qanday loyiha uchun murojaat qiling.",
    cta_btn:"Loyiha boshlash",
    footer_copy:"© 2026 Nodirjon To'ychiyev · Built with HTML &amp; CSS",
    contact_label:"// bog'lanish", contact_title:"Loyiha bormi?\nGaplashaylik!",
    contact_intro:"Python bot, web sayt yoki Odoo ERP — har qanday loyiha uchun yozing. Odatda <strong>24 soat</strong> ichida javob beraman.",
    form_name_label:"Ismingiz", form_name_ph:"Nodirjon",
    form_email_label:"Email", form_email_ph:"email@example.com",
    form_subject_label:"Mavzu", form_subject_ph:"Web dizayn yaratish",
    form_msg_label:"Xabar", form_msg_ph:"Loyiha haqida batafsil yozing...",
    form_send_btn:"Xabar jo'natish",
    info_phone_hours:"Sha–Pa, 8:00–18:00", info_email_hint:"Istalgan vaqt yozing",
    info_location:"Farg'ona viloyati", info_country:"O'zbekiston",
    avail_title:"Hozirda loyihalarga ochiqman", avail_sub:"Frilanser buyurtmalar qabul qilinadi",
    location:"Joylashuv", telegram:"Telegram", phone:"Telefon",
  },
  ru: {
    nav_home:"Главная", nav_about:"Обо мне", nav_skills:"Навыки",
    nav_portfolio:"Портфолио", nav_contact:"Контакты",
    hero_tag:"Доступен — открыт для фриланс-проектов",
    hero_greeting:"Привет, я",
    hero_desc:"Создаю Telegram-боты, backend API и системы автоматизации.",
    hero_location:"Фергана, Узбекистан",
    hero_btn_work:"Мои работы", hero_btn_contact:"Связаться",
    hero_roles:["Web Разработчик","Telegram Bot Разработчик","Python Разработчик","Фрилансер"],
    stat_projects:"Проекты", stat_clients:"Клиенты",
    about_label:"// обо мне", about_title:"Web\nРазработчик",
    about_p1:"Привет! Я Нодирджон Туйчиев — Python backend и Telegram bot разработчик. Работаю с <strong>HTML, CSS </strong>, <strong>aiogram 3</strong>, <strong>SQLite / PostgreSQL</strong> и <strong>Odoo 17 ERP</strong>.",
    about_p2:"Работаю на международных фриланс-платформах (Kwork, Upwork) и углубляю знания в OOP, Docker, Design Patterns.",
    about_loc_label:"Местоположение", about_loc_val:"Фергана, Узбекистан",
    about_exp_label:"Опыт", about_exp_val:"1+ лет HTML, CSS",
    about_lang_label:"Языки", about_lang_val:"Узбекский, Русский, Английский (A2)",
    about_status_label:"Статус", about_status_val:"● Доступен",
    about_cv_btn:"Скачать CV",
    skills_label:"// технологии", skills_title:"Мои навыки",
    skill_py_title:"Python", skill_py_desc:"ООП, Декораторы, Генераторы, FastAPI, aiohttp",
    skill_tg_title:"Telegram Боты", skill_tg_desc:"aiogram 3, FSM, inline клавиатуры, вебхуки",
    skill_db_title:"Базы данных", skill_db_desc:"PostgreSQL, SQLite, SQLAlchemy",
    skill_odoo_title:"Odoo 17 ERP", skill_odoo_desc:"Конфигурация, модули, техническое задание",
    skill_fe_title:"Frontend", skill_fe_desc:"HTML5, CSS3, Flexbox, Grid, Адаптивный дизайн",
    skill_dev_title:"DevOps (изучаю)", skill_dev_desc:"Docker, Git, Linux, деплой",
    portfolio_label:"// мои проекты", portfolio_title:"Портфолио",
    p1_title:"Telegram E-commerce Бот",
    p1_desc:"Полноценный торговый бот с каталогом, системой заказов и управлением складом в реальном времени.",
    p2_title:"Система управления складом",
    p2_desc:"Backend-система для инвентаризации: приход, расход, отчёты и Telegram-уведомления.",
    p3_title:"Конфигурация Odoo 17 ERP",
    p3_desc:"Полная настройка ERP для мебельной компании: склад, POS, валюта, CSV-импорт и отчёты.",
    p4_title:"Портфолио-сайт",
    p4_desc:"Этот сайт, который вы сейчас смотрите! HTML5, CSS3 (Flexbox + Grid), адаптивный дизайн.",
    cta_label:"// есть проект?", cta_title:"Создадим вместе!",
    cta_desc:"Python-бот, backend API или Odoo ERP — обращайтесь по любому проекту.",
    cta_btn:"Начать проект",
    footer_copy:"© 2026 Nodirjon To'ychiyev · Built with HTML &amp; CSS",
    contact_label:"// контакты", contact_title:"Есть проект?\n Давайте обсудим!",
    contact_intro:"Python-бот, backend или Odoo ERP — пишите по любому поводу. Обычно отвечаю в течение <strong>24 часов</strong>.",
    form_name_label:"Ваше имя", form_name_ph:"Иван",
    form_email_label:"Email", form_email_ph:"email@example.com",
    form_subject_label:"Тема", form_subject_ph:"Создание Telegram-бота",
    form_msg_label:"Сообщение", form_msg_ph:"Расскажите подробнее о проекте...",
    form_send_btn:"Отправить сообщение",
    info_phone_hours:"Сб–Чт, 8:00–18:00", info_email_hint:"Пишите в любое время",
    info_location:"Ферганская область", info_country:"Узбекистан",
    avail_title:"Сейчас открыт для проектов", avail_sub:"Принимаю фриланс-заказы",
    location:"Локация", telegram:"Телеграм", phone:"Телефон",
  },
  en: {
    nav_home:"Home", nav_about:"About", nav_skills:"Skills",
    nav_portfolio:"Portfolio", nav_contact:"Contact",
    hero_tag:"Available — open to freelance projects",
    hero_greeting:"Hi, I'm",
    hero_desc:"I build Telegram bots, backend APIs and automation systems.",
    hero_location:"Fergana, Uzbekistan",
    hero_btn_work:"View my work", hero_btn_contact:"Get in touch",
    hero_roles:["Web Developer","Telegram Bot Developer","Python Developer","Freelancer"],
    stat_projects:"Projects", stat_clients:"Clients",
    about_label:"// about me", about_title:"Web\nDeveloper",
    about_p1:"Hi! I'm Nodirjon To'ychiyev — a Frontend and Telegram bot developer. I work with <strong>HTML, CSS</strong>, <strong>aiogram 3</strong>, <strong>SQLite / PostgreSQL</strong> and <strong>Odoo 17 ERP</strong>.",
    about_p2:"I'm active on international freelance platforms (Kwork, Upwork) and deepening my knowledge of OOP, Docker, and Design Patterns.",
    about_loc_label:"Location", about_loc_val:"Fergana, Uzbekistan",
    about_exp_label:"Experience", about_exp_val:"2+ years Python",
    about_lang_label:"Languages", about_lang_val:"Uzbek, Russian, English (A2)",
    about_status_label:"Status", about_status_val:"● Available",
    about_cv_btn:"Download CV",
    skills_label:"// tech stack", skills_title:"My Skills",
    skill_py_title:"Python", skill_py_desc:"OOP, Decorators, Generators, FastAPI, aiohttp",
    skill_tg_title:"Telegram Bots", skill_tg_desc:"aiogram 3, FSM, inline keyboards, webhooks",
    skill_db_title:"Databases", skill_db_desc:"PostgreSQL, SQLite, SQLAlchemy",
    skill_odoo_title:"Odoo 17 ERP", skill_odoo_desc:"Configuration, modules, technical specification",
    skill_fe_title:"Frontend", skill_fe_desc:"HTML5, CSS3, Flexbox, Grid, Responsive Design",
    skill_dev_title:"DevOps (learning)", skill_dev_desc:"Docker, Git, Linux, deployment",
    portfolio_label:"// my projects", portfolio_title:"Portfolio",
    p1_title:"Telegram E-commerce Bot",
    p1_desc:"Full-featured store bot with product catalog, order system, and real-time warehouse management.",
    p2_title:"Warehouse Management System",
    p2_desc:"Backend system for inventory: stock in/out, reports, and Telegram notifications.",
    p3_title:"Odoo 17 ERP Configuration",
    p3_desc:"Complete ERP setup for a furniture company: warehouse, POS, currency, CSV import, and reports.",
    p4_title:"Portfolio Website",
    p4_desc:"The site you're looking at right now! HTML5, CSS3 (Flexbox + Grid), responsive design and modern UI.",
    cta_label:"// got a project?", cta_title:"Let's build together!",
    cta_desc:"Python bot, backend API or Odoo ERP — reach out for any project.",
    cta_btn:"Start a project",
    footer_copy:"© 2026 Nodirjon To'ychiyev · Built with HTML &amp; CSS",
    contact_label:"// contact", contact_title:"Got a project?\n Let's talk!",
    contact_intro:"Python bot, backend or Odoo ERP — message me about anything. I usually reply within <strong>24 hours</strong>.",
    form_name_label:"Your name", form_name_ph:"John",
    form_email_label:"Email", form_email_ph:"email@example.com",
    form_subject_label:"Subject", form_subject_ph:"Building a Telegram bot",
    form_msg_label:"Message", form_msg_ph:"Tell me about your project...",
    form_send_btn:"Send message",
    info_phone_hours:"Sa–Th, 8:00–18:00", info_email_hint:"Write any time",
    info_location:"Fergana region", info_country:"Uzbekistan",
    avail_title:"Currently open to projects", avail_sub:"Accepting freelance orders",
    location:"Location", telegram:"Telegram", phone:"Phone",
  }
};

/* ---- Core engine ---- */
const I18n = (() => {
  const KEY = 'portfolio_lang';
  let lang = localStorage.getItem(KEY) || 'uz';

  const t = k => TRANSLATIONS[lang][k] ?? TRANSLATIONS.uz[k] ?? k;

  function apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = t(el.dataset.i18n);
      if (el.matches('input,textarea')) el.placeholder = v;
      else el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      el.placeholder = t(el.dataset.i18nPh);
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.lang === lang));
  }

  function setLang(l) {
    if (!TRANSLATIONS[l]) return;
    lang = l; localStorage.setItem(KEY, l); apply();
  }

  return { init: apply, setLang, t, getRoles: () => t('hero_roles') };
})();

/* ---- Typed text ---- */
function initTyped() {
  const el = document.querySelector('.typed-text');
  if (!el) return;
  let ri = 0, ci = 0, del = false;
  (function loop() {
    const roles = I18n.getRoles();
    const word = roles[ri % roles.length];
    el.textContent = del ? word.slice(0, ci--) : word.slice(0, ci++);
    if (!del && ci > word.length) { del = true; setTimeout(loop, 1500); return; }
    if (del && ci < 0) { del = false; ri = (ri + 1) % roles.length; ci = 0; }
    setTimeout(loop, del ? 50 : 80);
  })();
}

/* ---- Boot ---- */
// YANGI — shu bilan almashtiring
document.addEventListener('click', e => {
  const btn = e.target.closest('.lang-btn');
  if (btn && btn.dataset.lang) I18n.setLang(btn.dataset.lang);
});

function bootI18n() {
  I18n.init();
  initTyped();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootI18n);
} else {
  bootI18n();
}

/* =============================================
   THEME ENGINE
   ============================================= */
const Theme = (() => {
    const KEY = 'portfolio_theme';
    let current = localStorage.getItem(KEY) || 'dark';

    function apply(theme) {
        document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : '');
        current = theme;
        localStorage.setItem(KEY, theme);
        // Logo almashtirish — CSS content: url() GitHub Pages da ishlamaydi
        document.querySelectorAll('.logo-img').forEach(img => {
            img.src = theme === 'light' ? 'images/qizil.png' : 'images/oqlogo.png';
        });
    }

    function toggle() {
        apply(current === 'dark' ? 'light' : 'dark');
    }

    function init() {
        if (!localStorage.getItem(KEY)) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            current = prefersDark ? 'dark' : 'light';
        }
        apply(current);
    }

    return { init, toggle };
})();

document.addEventListener('click', e => {
    if (e.target.closest('.theme-toggle')) Theme.toggle();
});

(function(){
    const t = localStorage.getItem('portfolio_theme');
    if (t === 'light') document.documentElement.setAttribute('data-theme','light');
})();

document.addEventListener('DOMContentLoaded', () => Theme.init());

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // 1. Tilni sizning localstorage-ingizga moslab aniqlash
        let currentLang = localStorage.getItem('portfolio_lang') || 'uz';
        currentLang = currentLang.substring(0, 2).toLowerCase();

        // 2. Tarjimalar
        const translations = {
            uz: { title: "Muvaffaqiyatli!", text: "Xabaringiz yuborildi.", btn: "OK" },
            ru: { title: "Успешно!", text: "Ваше сообщение отправлено.", btn: "OK" },
            en: { title: "Success!", text: "Your message has been sent.", btn: "OK" }
        };

        const t = translations[currentLang] || translations['uz'];
        const data = new FormData(event.target);

        // 3. Xabarni yuborish
        fetch(event.target.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => { // 'response' argumenti shu yerda
            if (response.ok) {
                Swal.fire({
                    title: t.title,
                    text: t.text,
                    icon: 'success',
                    iconColor: '#1a9637', // Ikonka rangi
                    confirmButtonText: t.btn,
                    padding: '0.3em',
                    width: '300px',
                    color: '#4a4a6a',
                    background: '#E1E5F0',
                    timer: 4000,
                    timerProgressBar: true,
                });
                contactForm.reset();
            } else {
                Swal.fire("Error!", "Formspree error", "error");
            }
        })
        .catch(error => {
            console.error("Xato:", error);
            Swal.fire("Xato!", "Tarmoq ulanishida xatolik", "error");
        });
    });
}
