// src/data/roadmap.js
// Content language: Kurdish Sorani (RTL). Icon names are Lucide icon names.
// This is the single source of truth for the Roadmap, Resources, and Content.

export const siteMeta = {
  title: "نەخشەڕێگای گەشەپێدەری Backend | PHP & MySQL",
  description: "نەخشەڕێگایەکی گشتگیر و کرداری بۆ بوون بە گەشەپێدەری Backend بە زمانەکانی PHP، داتابەیسی MySQL و فریمۆرکی Laravel. لە بنەماکانی وێبەوە تا پڕۆژەی ڕاستەقینە.",
  badge: "نەخشەڕێگای ٢٠٢٥ – ٢٠٢٦",
  hero: {
    eyebrow: "نەخشەڕێگای گەشەپێدەری Backend",
    title: "لە سفرەوە تا پیشەگەر بە PHP و MySQL",
    subtitle: "ڕێگایەکی کرداری، پڕۆژە-تەوەر و بەهێز بۆ ئەوانەی دەیانەوێت ببنە گەشەپێدەری سێرڤەر و وێب ئەپڵیکەیشنی سەردەمیانە.",
    stats: [
      { value: "١٠", label: "قۆناغی سەرەکی", subtext: "هەنگاو بە هەنگاو" },
      { value: "٦ - ٩", label: "مانگ خوێندن", subtext: "بەپێی تەرخانکردنی کات" },
      { value: "PHP + MySQL + Laravel", label: "تەکنەلۆژیا سەرەکییەکان", subtext: "ستانداردی بازاڕی کار" },
    ],
    ctaPrimary: "دەستپێکردنی نەخشەڕێگا",
    ctaSecondary: "پێشمەرج و پێداویستییەکان",
  },
  whyUs: {
    title: "بۆچی ئەم نەخشەڕێگایە؟",
    subtitle: "دیزاین کراوە بۆ ئەوەی ڕاستەوخۆ فێری ئەو تەکنەلۆژیا و کارامەییانە بیت کە لە بازاڕی کاردا داواکراون.",
    cards: [
      {
        icon: "rocket",
        title: "پڕۆژە-تەوەر و کرداری",
        description: "لە هەموو قۆناغێکدا پڕۆژەیەکی ڕاستەقینە دروست دەکەیت تا پۆرتفۆلیۆیەکی پڕ بەهای هەبێت.",
      },
      {
        icon: "layers",
        title: "لە بنەماوە تا Laravel",
        description: "ڕێگایەکی متمانەپێکراو لە پرۆگرامینگی بنەڕەتییەوە تا پەرەپێدانی سیستمە گەورەکان بە Laravel.",
      },
      {
        icon: "book-open",
        title: "سەرچاوەی بەخۆڕایی و سەردەمیانە",
        description: "باشترین بەڵگەنامە فەرمییەکان، کۆرس و کتێبە شایستەکان بۆ هەر تەوەرەیەک دەستنیشان کراون.",
      },
      {
        icon: "shield",
        title: "تەرکیز لەسەر ئاسایش و Clean Code",
        description: "فێربوونی شێوازەکانی پاراستن بەرامبەر هێرشە باوەکان (SQLi, XSS, CSRF) و پرەنسیپەکانی SOLID.",
      },
    ],
  },
  faqTitle: "پرسیارە باوەکان",
  faqSubtitle: "وەڵامی ئەو پرسیارانەی زۆرترین جار لەلایەن فێرخوازانەوە دەپرسرێن",
  resourcesTitle: "سەرچاوە پێشنیارکراوەکان",
  resourcesSubtitle: "کۆمەڵێک لە باشترین ماڵپەڕ، بەڵگەنامەی فەرمی و سەرچاوەکانی فێربوون",
  finalCta: {
    title: "ئامادەیت گەشتەکەت بەرەو Backend دەست پێبکەیت؟",
    subtitle: "ئێستا باشترین کاتە بۆ دەستپێکردن. نەخشەڕێگاکە لەبەردەستتە و هەنگاو بە هەنگاو ڕێنماییت دەکات.",
    button: "دەست پێبکە لە قۆناغی یەکەمەوە",
  },
  footer: {
    about: "نەخشەڕێگای گەشەپێدەری Backend بە PHP و MySQL — سەرچاوەیەکی کراوە و بەخۆڕایی بۆ گەشەپێدەرانی کورد.",
    copyright: "مافی بڵاوکردنەوە پارێزراوە بۆ کۆمەڵگەی گەشەپێدەرانی کورد.",
    backToTop: "بڕۆ سەرەوە",
  },
};

export const prerequisites = {
  title: "پێشمەرجەکان و ئامرازەکان",
  subtitle: "ئەو شتانەی پێش دەستپێکردن پێویستتن و ئەو ئامرازانەی ڕۆژانە بەکاریاندەهێنیت",
  items: [
    "هیچ ئەزموونێکی پێشووی بەرنامەسازی پێویست ناکات",
    "شارەزایی سەرەتایی لە بەکارهێنانی کۆمپیوتەر",
    "توانای خوێندنەوەی ئینگلیزی بە ئاستێکی سەرەتایی",
    "تەرخانکردنی 10-15 کاتژمێر لە هەفتەیەکدا",
  ],
  tools: [
    { name: "VS Code", icon: "laptop" },
    { name: "XAMPP / Laragon", icon: "server" },
    { name: "Chrome + DevTools", icon: "globe" },
    { name: "GitHub", icon: "folder-git-2" },
    { name: "Terminal", icon: "terminal" },
  ],
};

export const roadmapPhases = [
  {
    id: 1,
    title: "بنەماکانی وێب و ئامادەکردنی ژینگە",
    duration: "1-2 هەفتە",
    icon: "globe",
    summary: "فێربوونی چۆنیەتی کارکردنی ئینتەرنێت، HTML/CSS بنەڕەتی، دامەزراندنی بەرنامەکان و فەرمانەکانی گیت.",
    topics: [
      "Client-Server, HTTP/HTTPS, DNS, Hosting",
      "HTML5 بنەماکان و Semantic Tags",
      "CSS3 بنەماکان، Flexbox ـی سەرەتایی",
      "دامەزراندنی XAMPP/Laragon و VS Code",
      "فەرمانە سەرەتاییەکانی Terminal",
      "بنەماکانی Git (init, add, commit, push)",
    ],
    project: "پەیجی CV ـی کەسی بە HTML/CSS، بارکراو لەسەر GitHub",
  },
  {
    id: 2,
    title: "PHP ی سەرەتایی",
    duration: "3-4 هەفتە",
    icon: "code",
    summary: "دەستپێکردنی کۆدنووسین بە زمانی PHP، گۆڕاوەکان، مەرجەکان، لووپەکان، مامەڵەکردن لەگەڵ فۆڕم و Session.",
    topics: [
      "Variables, Data Types, Operators",
      "Control Structures و Loops",
      "Functions و Arrays",
      "Forms: $_GET / $_POST",
      "Sessions, Cookies, File Handling",
      "Error Handling ـی سەرەتایی",
    ],
    project: "Calculator ئۆنلاین یان Quiz ـی سادە",
  },
  {
    id: 3,
    title: "MySQL ی سەرەتایی",
    duration: "2-3 هەفتە",
    icon: "database",
    summary: "تێگەیشتن لە داتابەیسە پەیوەندیدارەکان (RDBMS)، دروستکردنی خشتە، پەیوەندییەکان و کوێرییەکانی SQL.",
    topics: [
      "RDBMS و phpMyAdmin",
      "CRUD بە SQL (INSERT/SELECT/UPDATE/DELETE)",
      "Primary/Foreign Key و Relationships",
      "JOIN, GROUP BY, Aggregate Functions",
      "Normalization ـی سەرەتایی",
    ],
    project: "دیزاینی داتابەیس بۆ فرۆشگایەکی بچووک",
  },
  {
    id: 4,
    title: "تێکەڵکردنی PHP + MySQL",
    duration: "2-3 هەفتە",
    icon: "plug",
    summary: "بەستنەوەی PHP بە بنکەدراوە بە بەکارهێنانی PDO، کۆدی پارێزراو بە Prepared Statements و ئەنجامدانی CRUD.",
    topics: [
      "PDO و Prepared Statements",
      "CRUD تەواو لەناو کۆدی PHP",
      "Pagination و Search",
      "File Upload",
    ],
    project: "سیستەمی بەڕێوەبردنی خوێندکاران (CRUD تەواو)",
  },
  {
    id: 5,
    title: "OOP بە PHP",
    duration: "2-3 هەفتە",
    icon: "boxes",
    summary: "پەرەپێدانی شێوازی تەن-تەوەر (Object-Oriented Programming)، دروستکردنی کڵاس و تەن و پرەنسیپەکانی دەستکەوت.",
    topics: [
      "Class, Object, Constructor",
      "Inheritance, Interfaces, Abstract Classes",
      "Traits و Namespaces",
      "Magic Methods و Custom Exceptions",
    ],
    project: "بازنووسینەوەی پڕۆژەی CRUD بە شێوازی OOP",
  },
  {
    id: 6,
    title: "پاراستن، API و تایبەتمەندی پێشکەوتوو",
    duration: "3-4 هەفتە",
    icon: "shield",
    summary: "ئاسایشی وێب، خۆپاراستن لە کێشە ئەمنییەکان، بەکارهێنانی Composer بۆ پاکێجەکان، و دروستکردنی RESTful API.",
    topics: [
      "Composer و PSR-4 Autoloading",
      "Mini-MVC و Design Patterns ـی سەرەتایی",
      "SQL Injection, XSS, CSRF, Password Hashing",
      "RESTful API و JWT",
    ],
    project: "RESTful API بۆ سیستەمی تۆدۆ لەگەڵ JWT Authentication",
  },
  {
    id: 7,
    title: "فریمۆرکی Laravel",
    duration: "6-8 هەفتە",
    icon: "layers",
    summary: "شارەزابوون لە بەناوبانگترین فریمۆرکی مۆدێرن، سیستەمی Routing، مۆدێلەکان لەگەڵ Eloquent، و دروستکردنی تەواوی سیستمەکان.",
    topics: [
      "Routing, Controllers, Blade",
      "Eloquent ORM, Migrations, Relationships",
      "Middleware و Validation",
      "Breeze/Sanctum Authentication",
      "دروستکردنی RESTful API بە Laravel",
      "Artisan, Testing ـی سەرەتایی",
    ],
    project: "بلۆگ یان فرۆشگایەکی بچووک بە Laravel + Admin Panel",
  },
  {
    id: 8,
    title: "داتابەیسی پێشکەوتوو",
    duration: "2-3 هەفتە",
    icon: "database",
    summary: "قووڵبوونەوە لە کارامەییەکانی داتابەیس، بەڕێوەبردنی مامەڵە داراییەکان بە Transactions، و خێراکردنی کوێرییەکان بە Indexing.",
    topics: [
      "Transactions و ACID",
      "Stored Procedures, Triggers, Views",
      "Indexing پێشکەوتوو و Query Optimization",
      "Backup و Restore",
    ],
    project: "باشترکردنی Query ـە گرنگەکانی پڕۆژەی Laravel",
  },
  {
    id: 9,
    title: "Git، Linux و Deployment",
    duration: "3-4 هەفتە",
    icon: "server",
    summary: "ئامادەکردنی سێرڤەری ڕاستەقینە، بەکارهێنانی هێڵی فەرمانەکانی Linux، بەستنەوەی دۆمەین و SSL، و خستنەکاری پڕۆژە بۆ جیهان.",
    topics: [
      "Git Branching, Merging, Pull Requests",
      "Linux Command Line ـی سەرەتایی",
      "Docker ـی سەرەتایی",
      "Deployment بۆ VPS + Domain + SSL",
    ],
    project: "Deploy کردنی پڕۆژەیەکی Laravel لەسەر سێرڤەرێکی ڕاستەقینە",
  },
  {
    id: 10,
    title: "پڕۆژە گەورەکان و پۆرتفۆلیۆ",
    duration: "6-8 هەفتە",
    icon: "trophy",
    summary: "نووسینی کۆدی پاک بە پێوەرەکانی SOLID، بەستنی چەندین پڕۆژەی تەواو، دروستکردنی پۆرتفۆلیۆ، و خۆئامادەکردن بۆ چاوپێکەوتنی کار.",
    topics: [
      "Clean Code و SOLID Principles",
      "3-5 پڕۆژەی ڕاستەقینە بۆ پۆرتفۆلیۆ",
      "ئامادەکردنی CV و پەیجی پۆرتفۆلیۆ",
      "ئامادەکاری بۆ Interview",
    ],
    project: "پۆرتفۆلیۆیەکی تەواو لەسەر GitHub + پەیجی کەسی",
  },
];

export const resources = [
  {
    name: "php.net/docs",
    type: "دۆکیومێنتی فەرمی",
    desc: "سەرچاوەی سەرەکی و فەرمی زمانی PHP لەگەڵ نموونەی ڕوون بۆ هەموو فەنکشنێک.",
    url: "https://www.php.net/docs.php",
  },
  {
    name: "dev.mysql.com/doc",
    type: "دۆکیومێنتی فەرمی",
    desc: "ڕێبەری گشتگیری بنکەدراوەی MySQL، سینتاکسەکانی SQL و ئامرازەکانی ئۆپتیمایزەیشن.",
    url: "https://dev.mysql.com/doc/",
  },
  {
    name: "laravel.com/docs",
    type: "دۆکیومێنتی فەرمی",
    desc: "باشترین و ڕوونترین دۆکیومێنت لە جیهانی وێبدا کە هەموو بەشێکی Laravel بە جوانی ڕووندەکاتەوە.",
    url: "https://laravel.com/docs",
  },
  {
    name: "Laracasts",
    type: "ڤیدیۆ (پارەدار)",
    desc: "بەرزترین ئاستی وانەکانی ڤیدیۆیی بۆ PHP و Laravel لەلایەن مامۆستای ناودار Jeffrey Way.",
    url: "https://laracasts.com",
  },
  {
    name: "freeCodeCamp",
    type: "کۆرسی بەخۆڕایی",
    desc: "کۆرس و وتاری بەخۆڕایی سەبارەت بە بنەماکانی وێب، گیت، و داتابەیس.",
    url: "https://www.freecodecamp.org",
  },
  {
    name: "Codecourse",
    type: "ڤیدیۆ",
    desc: "وانەی کرداری لەسەر دروستکردنی ئەپی ڕاستەقینە و شێوازەکانی کۆدنووسینی مۆدێرن بە PHP.",
    url: "https://codecourse.com",
  },
];

export const faqList = [
  {
    q: "ئایا پێویستم بە هیچ ئەزموونێکی پێشوەختەی بەرنامەسازی هەیە؟",
    a: "نەخێر! ئەم نەخشەڕێگەیە بە شێوەیەک دانراوە کە لە سەرەتاییترین بنەماکانی وێب (HTML، CSS، چۆنیەتی کارکردنی سێرڤەر) دەست پێدەکات و هەنگاو بە هەنگاو بەرەو بابەتی قووڵتر و پێشکەوتوو دەڕوات.",
  },
  {
    q: "تەواوکردنی ئەم نەخشەڕێگەیە چەند کات دەخایەنێت؟",
    a: "بە شێوەیەکی گشتی لە نێوان ٦ بۆ ٩ مانگ دەخایەنێت ئەگەر هەفتانە ١٠ تا ١٥ کاتژمێر تەرخان بکەیت بۆ خوێندن و کۆدنووسینی کرداری. هەندێک کەس ڕەنگە کەمتر یان زیاتریان پێ بچێت بەپێی کات و هەوڵەکانیان.",
  },
  {
    q: "ئایا فێربوونی فریمۆرکی Laravel ئیجبارییە؟",
    a: "بەڵێ، زۆر پێشنیار کراوە. ئەمڕۆ لە زۆربەی کۆمپانیا و پڕۆژە ڕاستەقینەکاندا فریمۆرک بەکاردەهێنرێت نەک زمانی خاو، و Laravel لە ئێستادا باوترین، دڵخوازترین و دەوڵەمەندترین فریمۆرکی زمانی PHPیە لە بازاڕی کاردا.",
  },
  {
    q: "چ جۆرە کۆمپیوتەر یان ئامێرێکم پێویستە بۆ دەستپێکردن؟",
    a: "هەر کۆمپیوتەرێکی ئاسایی کە توانای هەڵکردنی نووسەری کۆد (وەک VS Code)، براوسەرێکی مۆدێرن و بەرنامەی سێرڤەری لۆکاڵی (وەک Laragon یان XAMPP) هەبێت بەسە. پێویستت بە کۆمپیوتەری زۆر بەهێز نییە.",
  },
  {
    q: "چۆن دەتوانم پڕۆژەکانم بە شێوەیەکی کاریگەر بکەمە پۆرتفۆلیۆ؟",
    a: "لە قۆناغەکانی سەرەتاییەوە فێری Git و GitHub دەبیت. هەموو کۆدێک کە دەینووسیت باری دەکەیتە سەر هەژماری GitHub خۆت، لەگەڵ فایلێکی ڕوونکردنەوەی README بە وێنە و وردەکاری. لە قۆناغی کۆتاییدا دەیانخەیتە سەر سێرڤەری ڕاستەقینە تا بە شێوەی زیندوو پێشکەشی خاوەنکارانی بکەیت.",
  },
];

// All navigation, accessibility labels and section copy live here too.
export const ui = {
  brand: 'نەخشەڕێگا',
  edition: 'وەشانی ٢٠٢٦',
  skip: 'بازدان بۆ ناوەڕۆک',
  nav: [
    { id: 'why-us', label: 'بۆچی ئەم ڕێگایە؟' },
    { id: 'prerequisites', label: 'پێشمەرجەکان' },
    { id: 'roadmap', label: 'نەخشەڕێگا' },
    { id: 'resources', label: 'سەرچاوەکان' },
    { id: 'faq', label: 'پرسیارەکان' },
  ],
  menu: 'مێنۆی سەرەکی', openMenu: 'کردنەوەی مێنۆ', closeMenu: 'داخستنی مێنۆ',
  theme: 'گۆڕینی ڕووکاری تاریک و ڕووناک', start: 'دەست پێبکە',
  heroLead: 'هەنگاوی یەکەم بۆ', heroTitle: 'داهاتووت لە بەکئەند.',
  heroDescription: 'لە یەکەم دێڕی کۆدەوە تا پڕۆژەیەکی ڕاستەقینە. ڕێگایەکی ڕوون بۆ فێربوونی PHP، MySQL و Laravel — بە زمانی کوردی.',
  free: 'بەخۆڕایی · بە خێرایی خۆت · پڕۆژەی کرداری',
  preview: 'گەشتەکەت لێرەوە دەست پێدەکات', previewStart: 'بنەماکان', previewEnd: 'پڕۆژەی ڕاستەقینە',
  stats: [{ value: '١٠', label: 'قۆناغی ڕێکخراو' }, { value: '٦–٩', label: 'مانگی فێربوون' }, { value: '١٠–١٥', label: 'کاتژمێر لە هەفتەدا' }],
  whyLabel: 'ڕێگایەک بە ئامانج', toolsLabel: 'پێش دەستپێکردن',
  checklist: 'تەنها ئەمانەت پێویستە', tools: 'ئامرازەکانی کارت',
  toolsNote: 'ئامرازەکان لە قۆناغی یەکەمدا دادەمەزرێنین و فێری بەکارهێنانیان دەبین.',
  roadmapLabel: 'لە بنەماوە تا پۆرتفۆلیۆ', roadmapTitle: '١٠ قۆناغ. یەک ئامانجی ڕوون.',
  roadmapDescription: 'بە ڕیزبەندی بڕۆ پێشەوە. هەر قۆناغێک بکەرەوە بۆ بینینی بابەتەکان و ئەو پڕۆژەیەی کە دروستی دەکەیت.',
  phase: 'قۆناغی', topics: 'ئەوەی فێری دەبیت', project: 'پڕۆژەی کرداری',
  details: 'بابەتەکان و پڕۆژە', resourcesLabel: 'فێربوون بەردەوامە', visit: 'سەردانی سەرچاوە',
  newTab: 'لە پەنجەرەیەکی نوێدا دەکرێتەوە', prev: 'سەرچاوەی پێشوو', next: 'سەرچاوەی داهاتوو',
  first: 'یەکەم سەرچاوە', last: 'کۆتا سەرچاوە', slide: 'سەرچاوە', slideLabel: '{{index}} لە {{slidesLength}}',
  faqLabel: 'پێش ئەوەی دەست پێبکەیت', github: 'گیتھەب',
  notFound: 'پەڕەکە نەدۆزرایەوە', notFoundDescription: 'ئەم ناونیشانە بوونی نییە. بگەڕێوە بۆ نەخشەڕێگاکە و فێربوون بەردەوام بکە.', home: 'گەڕانەوە بۆ سەرەتا',
};
