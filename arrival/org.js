/* TMade Alex's arrival config, read by arrival.js (kit v1.5.2). Served by this AstroLog itself
   (https://tmadealex.github.io/changelog-astro-public/arrival/), because his own site draws its
   welcome its own way and has no /arrival/ folder to share.

   A gift: a member of his community set this home up, and TMade Alex decides what stays. Every fact
   and link here is one his own site already shows (tmadealex.github.io, src/data/*.ts), and nothing is
   said in his name. Turned off on purpose, because each one is his decision: giving and the pledge
   (no wallet address is ever supplied by a helper), a donate page, Gravatar, any analytics.
   Strings shown in the guide and the windows may hold simple HTML. */
(function () {
  var ROOT = "https://tmadealex.github.io";
  // This AstroLog's own pages, root-relative: the kit is served from the same origin, so these work
  // the same in local preview and on GitHub Pages.
  var LOG = "/changelog-astro-public";
  var GH = "https://github.com/TMadeAlex";
  var YT = "https://www.youtube.com/@TMadeAlex";
  var WHOP = "https://whop.com/tradermade/";
  var X = "https://x.com/tmadealex";
  var IG = "https://www.instagram.com/tmadealex/";
  var READING = ROOT + "/reading-room-public/";
  // Shades of his TRADERMADE teal: the guide's progress glyph, one per step, and the ledger.
  var TEAL = ["#34d4d8", "#249094", "#5fe0e3", "#9eeef0", "#1d6f72", "#7fe6e8", "#2fb3b7", "#c4f5f6"];

  // Anyone without a GitHub picture gets the ring and the cyan dot his site uses as its icon. No
  // initials are guessed from a name.
  function ringAvatar() {
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' +
      '<circle cx="16" cy="16" r="16" fill="#0c1719"/>' +
      '<circle cx="16" cy="16" r="12.5" fill="none" stroke="#249094" stroke-width="1.2"/>' +
      '<circle cx="16" cy="16" r="5" fill="#34d4d8"/></svg>'
    );
  }

  window.ARRIVAL = {
    org: {
      short: "TMade Alex",
      name: "AstroLog",
      motto: "Everything done to his home, in plain words.",
      about:
        "TMade Alex is a futures trader, a live streamer, the host of Meet the Trader on FundedNext, and a fashion photographer in New York. A member of his community set up a home for him on GitHub as a gift: his website and a few quiet rooms around it. This record says what was done to it, and when. TMade Alex decides what stays.",
      mark: { src: LOG + "/assets/favicon.svg" },
      home: {
        label: "tmadealex.github.io",
        href: ROOT + "/",
        text: "His website: who he is, when he trades live, his photography, and every link. In English and in Spanish.",
      },
      welcomeNote: null,
      welcomePlaceholder: "A few words of welcome from TMade Alex belong here, if he would like to write them. The space is left empty on purpose.",
    },

    // His site keeps the look a visitor chose under "tmadealex-look" ("night" or "morning"), on this
    // same origin. Reading it once means a visitor who chose morning there arrives in morning here.
    // Nothing of his site's is written or removed.
    storage: { key: "tmadealex-astrolog", legacy: { light: "tmadealex-look" } },

    modes: [
      { id: "night", name: "Night", note: "His near-black teal ground, lit in TRADERMADE cyan. The first look.", swatch: ["#0c1719", "#5fe0e3"], dark: true },
      { id: "morning", name: "Morning", note: "The same colours in daylight: a misty teal, inked in deep teal.", swatch: ["#c2e6e7", "#1b6265"], calm: true },
    ],
    defaultMode: "night",

    // Reading mode: one tap for Morning, nothing moving, more contrast and a comfortable line length.
    reading: { light: "morning" },

    news: { sources: [LOG + "/latest.json"] },

    // The candles behind every page drift slowly. Cursor effects (a trail behind the pointer) switch
    // off on their own, and rest whenever motion is Still.
    motions: [
      { id: "still", name: "Still", icon: "pause", note: "Nothing moves unless you touch it." },
      {
        id: "steady",
        name: "Steady",
        icon: "wind",
        note: "The candles behind the page drift slowly, and a faint trail of his teal follows your pointer.",
        trail: { colors: ["#34d4d8", "#5fe0e3", "#9eeef0"], life: 420, width: 2.2, alpha: 0.5 },
      },
      {
        id: "party",
        name: "PARTY_MODE",
        icon: "confetti",
        note: "His cyan runs through every colour, and little candles scatter behind your pointer. Nothing flashes.",
        trail: { colors: ["#34d4d8", "#7b8cff", "#d86cf0", "#ff7aa8", "#ffb35c", "#e8e05a", "#6fe08a"], life: 640, width: 3.2, alpha: 0.8, sparks: 0.4, sides: 4 },
      },
    ],
    defaultMotion: "steady",
    stillMotion: "still",

    wedges: TEAL,

    // No Gravatar for anyone (no domain listed), and no personal email is ever hashed into a page.
    avatar: { shape: "circle", roleDomains: [], svg: ringAvatar },

    // No donate page and no pledge: giving is his decision, and no helper supplies an address.
    essentials: { donate: false },
    give: { enabled: false },

    nav: {
      label: "TMade Alex",
      fold: 1100,
      items: [
        { id: "portal", label: "His site", icon: "globe-simple", href: ROOT + "/", priority: 1, note: "tmadealex.github.io" },
        { id: "porch", label: "Porch", icon: "door-open", href: LOG + "/", exact: true, priority: 1, note: "This record's front door" },
        { id: "changelog", label: "Changelog", icon: "clock-counter-clockwise", href: LOG + "/changelog", priority: 3, note: "What changed, newest first" },
        { id: "library", label: "Library", icon: "books", href: LOG + "/library", priority: 2, note: "How it works" },
        { id: "ledger", label: "Ledger", icon: "scroll", href: LOG + "/ledger", priority: 2, note: "Every public change, in plain words" },
        { id: "map", label: "Map", icon: "map-trifold", href: LOG + "/map", priority: 2, note: "Every place, with a picture of each" },
        {
          id: "his",
          label: "His pages",
          icon: "broadcast",
          priority: 3,
          items: [
            { id: "youtube", label: "YouTube", icon: "youtube-logo", href: YT, note: "Where he streams live, Monday to Friday" },
            { id: "community", label: "TRADERMADE", icon: "users-three", href: WHOP, open: "community", note: "His community, on Whop" },
            { id: "contact", label: "Contact", icon: "address-book", href: ROOT + "/contact/", open: "contact", note: "Links to his own pages only" },
          ],
        },
        {
          id: "about",
          label: "About",
          icon: "info",
          priority: 1,
          items: [
            { id: "roadmap", label: "Roadmap", icon: "path", href: LOG + "/roadmap", note: "What could come next. His call" },
            { id: "sustainability", label: "Sustainability", icon: "plant", href: LOG + "/sustainability", note: "What keeps these pages running" },
            { id: "reading", label: "Reading room", icon: "stack", href: READING, note: "For visitors: only what an owner lists" },
            { id: "github", label: "GitHub", icon: "github-logo", href: GH, note: "TMadeAlex on GitHub" },
          ],
        },
      ],
    },
    footer: {
      label: "TMade Alex, all the ways around",
      groups: [
        { label: "Explore", icon: "compass", items: ["portal", "porch", "changelog", "library", "ledger", "map"] },
        { label: "His pages", icon: "broadcast", items: ["youtube", "community", "contact", { id: "guide", label: "Welcome guide", icon: "signpost", href: "#welcome", open: "guide" }] },
        { label: "About this record", icon: "wrench", items: ["roadmap", "sustainability", "reading", "github"] },
      ],
      note: "A member of TMade Alex's community set this home up as a gift. TMade Alex decides what stays. Code MIT, words CC BY-SA 4.0. TMade, TRADERMADE and TMade Alex are his names and marks. Nothing here is financial advice.",
    },

    // One window for every way to reach him: links to his own pages only. No email address is copied
    // onto these pages. intercept: false, so a plain link to X or Instagram goes straight there.
    contact: {
      title: "Reach TMade Alex",
      intro: "Every way here opens a page of his own. Pick whichever suits you.",
      intercept: false,
      paths: [
        { kind: "page", label: "The contact page on his site", href: ROOT + "/contact/", action: "Open the contact page", note: "Every link there goes to a page of his own: YouTube, X, Instagram, TRADERMADE on Whop, and his photography." },
        { kind: "page", label: "X @TMadeAlex", icon: "x-logo", href: X, action: "Open X" },
        { kind: "page", label: "Instagram @tmadealex", icon: "instagram-logo", href: IG, action: "Open Instagram" },
        { kind: "github", label: "TMadeAlex on GitHub", href: GH, action: "Open his home on GitHub", note: "The organisation page, and every room of his home." },
      ],
    },

    // Where his community gathers: TRADERMADE, on Whop, and his live streams on YouTube. The kit
    // always draws a public slot and a join slot; org.css hides an empty one on a live card.
    community: {
      name: "TRADERMADE",
      icon: "users-three",
      href: WHOP,
      label: "See where the community is",
      title: "Where his community is",
      eyebrow: "Community",
      text: "TMade Alex's community is TRADERMADE, on Whop. He streams live on YouTube, Monday to Friday.",
      intro: "TMade Alex's community is TRADERMADE, on Whop, and he streams live on YouTube, Monday to Friday.",
      intercept: false,
      platforms: [
        { id: "whop", kind: "Whop", icon: "users-three", name: "TRADERMADE", text: "His community, on Whop.", public: { href: WHOP, label: "Open TRADERMADE on Whop" } },
        { id: "youtube", kind: "YouTube", icon: "youtube-logo", name: "YouTube @TMadeAlex", text: "His channel, where he streams live, Monday to Friday.", public: { href: YT, label: "Watch on YouTube" } },
      ],
    },

    dock: { scroll: true },

    record: {
      intro: "This AstroLog has two halves.",
      share:
        "Sharing one change? Every entry and every write-up has its own preview card. Paste its link into a message and it arrives with its title and summary. The <strong>Copy a link</strong> button under each one does the copying.",
      changelog: {
        name: "The changelog",
        text: "Every change to TMade Alex's website and his home on GitHub, newest first. Each entry opens with a one-line summary, with the full story folded underneath.",
        href: LOG + "/changelog",
        label: "Read the changelog",
      },
      library: {
        name: "The library",
        text: "Longer write-ups on how these pages are built and why. The changelog says what changed; the library explains how it works.",
        href: LOG + "/library",
        label: "Open the library",
      },
      ledger: {
        name: "The ledger",
        text: "Every public change to his home's code on GitHub, in plain words: grouped by day and by kind, and linked to the change itself. For anyone who'd rather not open GitHub. It refreshes every day.",
        href: LOG + "/ledger",
        label: "Open the ledger",
      },
    },

    sites: {
      portal: {
        name: "tmadealex.github.io",
        what: "TMade Alex's own website: who he is, when he trades live, his photography, and every link.",
      },
      astrolog: {
        name: "TMade Alex's AstroLog",
        what: "This AstroLog is the plain-words record of everything done to TMade Alex's home on GitHub since it was set up for him: what changed, when, and why.",
      },
    },

    guide: {
      light: {
        text: "These pages wear his site's two looks: Night, his near-black teal lit in TRADERMADE cyan, and Morning, the same colours in daylight. If you picked one on his site, it is already chosen here.",
      },
      motion: {
        text: "Behind each page, a few made-up candles drift: an illustration, never market data. Choose how much moves, how large the text is, and whether you'd like more contrast for reading.",
      },
      people: {
        text: "Every entry says who did the work. So far that is the member of his community who set the home up, with Alfred, an AI helper. When TMade Alex or anyone he invites makes a change, they're credited the way they choose.",
        fine: "Nobody's photo or email is used here: anyone without a GitHub picture gets the ring and the dot.",
      },
    },
    guideFinale: "You've seen every part. Pull up, and welcome.",

    words: {
      enter: "Pull up",
      cursorNote: "A trail of his teal behind your pointer, brighter in PARTY_MODE. Switch it off if you'd rather not.",
      readingNote: "One tap for the calmest page: Morning, nothing moving, more contrast and shorter lines. Tap again to go back to how you had it.",
      pause: "Let the candles rest",
      play: "Let the candles drift",
      searchTip: "Anywhere on these pages, any time: every change, write-up and page, and the pages of his own site.",
    },

    search: {
      sources: [{ url: LOG + "/search.json" }],
      items: [
        { t: "tmadealex.github.io", k: "his site", i: "globe-simple", h: ROOT + "/", pin: true, x: "home front page website tmade alex" },
        { t: "Trading", k: "his site", i: "chart-line", h: ROOT + "/trading/", pin: true, x: "trading desk sessions futures schedule figures risk" },
        { t: "Photography", k: "his site", i: "camera", h: ROOT + "/photography/", x: "photography photographer fashion new york personal work" },
        { t: "Contact", k: "his site", i: "address-book", h: ROOT + "/contact/", x: "contact links reach" },
        { t: "En español", k: "his site", i: "translate", h: ROOT + "/es/", x: "spanish espanol es idioma" },
        { t: "Not financial advice", k: "his site", i: "shield-check", h: ROOT + "/trading/#risk", x: "risk disclaimer advice" },
        { t: "YouTube @TMadeAlex", k: "his page", i: "youtube-logo", h: YT, x: "video stream live monday friday" },
        { t: "TRADERMADE on Whop", k: "his community", i: "users-three", h: WHOP, x: "community whop tradermade join" },
        { t: "X @TMadeAlex", k: "his page", i: "x-logo", h: X, x: "twitter x posts" },
        { t: "Instagram @tmadealex", k: "his page", i: "instagram-logo", h: IG, x: "instagram photos" },
        { t: "TMadeAlex on GitHub", k: "GitHub", i: "github-logo", h: GH, x: "organisation organization profile repositories code" },
        { t: "The reading room, for visitors", k: "GitHub", i: "stack", h: READING, x: "reading room public pages" },
        { t: "His website's code", k: "GitHub", i: "code", h: GH + "/tmadealex.github.io", x: "source code website repository" },
      ],
    },
  };
})();

/* ── Kit 1.5: languages. English first, as on his site, with Español one tap away. The kit's own
   words come from arrival/i18n/es.js; the words below swap this file's English by exact match. They
   are a helper's translation, not yet read by someone who speaks Spanish as their own language, so
   they stay reviewed: false ("translation in review"). The changelog entries stay in English for now,
   and the kit says so in one quiet line. Names, marks and quotes stay as written. ── */
(function () {
  var A = window.ARRIVAL;
  if (!A) return;
  A.languages = { list: [{ id: "en", name: "English" }, { id: "es", name: "Español" }], start: "en" };
  A.i18n = {
    es: {
      reviewed: false,
      words: { enter: "Pull up" },
      modes: {
        night: { name: "Noche", note: "Su fondo de verde azulado casi negro, iluminado en el cian de TRADERMADE. El primer aspecto." },
        morning: { name: "Mañana", note: "Los mismos colores a la luz del día: un verde azulado brumoso, entintado en verde azulado oscuro." },
      },
      motions: {
        still: { name: "Quieto", note: "Nada se mueve a menos que lo toques." },
        steady: { name: "Constante", note: "Las velas detrás de la página flotan despacio, y una estela tenue de su verde azulado sigue a tu puntero." },
        party: { name: "PARTY_MODE", note: "Su cian recorre todos los colores, y pequeñas velas se dispersan detrás de tu puntero. Nada parpadea." },
      },
      text: {
        "Everything done to his home, in plain words.": "Todo lo que se ha hecho en su casa, en palabras sencillas.",
        "His website: who he is, when he trades live, his photography, and every link. In English and in Spanish.": "Su sitio web: quién es, cuándo hace trading en vivo, su fotografía y todos sus enlaces. En inglés y en español.",
        "His site": "Su sitio",
        "Porch": "Entrada",
        "This record's front door": "La puerta de entrada de este registro",
        "Changelog": "Registro de cambios",
        "What changed, newest first": "Qué cambió, lo más nuevo primero",
        "Library": "Biblioteca",
        "How it works": "Cómo funciona",
        "Ledger": "Libro de cambios",
        "Every public change, in plain words": "Cada cambio público, en palabras sencillas",
        "Map": "Mapa",
        "Every place, with a picture of each": "Cada lugar, con una imagen de cada uno",
        "His pages": "Sus páginas",
        "Where he streams live, Monday to Friday": "Donde transmite en vivo, de lunes a viernes",
        "His community, on Whop": "Su comunidad, en Whop",
        "Contact": "Contacto",
        "Links to his own pages only": "Solo enlaces a sus propias páginas",
        "About": "Acerca de",
        "Roadmap": "Hoja de ruta",
        "What could come next. His call": "Lo que podría venir. Él decide",
        "Sustainability": "Sostenibilidad",
        "What keeps these pages running": "Lo que mantiene estas páginas en marcha",
        "Reading room": "Sala de lectura",
        "For visitors: only what an owner lists": "Para visitantes: solo lo que un propietario indica",
        "TMadeAlex on GitHub": "TMadeAlex en GitHub",
        "TMade Alex, all the ways around": "TMade Alex, todos los caminos",
        "Explore": "Explorar",
        "Welcome guide": "Guía de bienvenida",
        "About this record": "Sobre este registro",
        "A member of TMade Alex's community set this home up as a gift. TMade Alex decides what stays. Code MIT, words CC BY-SA 4.0. TMade, TRADERMADE and TMade Alex are his names and marks. Nothing here is financial advice.":
          "Un miembro de la comunidad de TMade Alex creó esta casa como regalo. TMade Alex decide qué se queda. Código MIT, textos CC BY-SA 4.0. TMade, TRADERMADE y TMade Alex son sus nombres y marcas. Nada aquí es asesoría financiera.",
        "Reach TMade Alex": "Contactar a TMade Alex",
        "Every way here opens a page of his own. Pick whichever suits you.": "Cada camino aquí abre una página suya. Elige el que te quede mejor.",
        "The contact page on his site": "La página de contacto de su sitio",
        "Open the contact page": "Abrir la página de contacto",
        "Open his home on GitHub": "Abrir su casa en GitHub",
        "The organisation page, and every room of his home.": "La página de la organización, y cada sala de su casa.",
        "Where his community is": "Dónde está su comunidad",
        "TMade Alex's community is TRADERMADE, on Whop, and he streams live on YouTube, Monday to Friday.": "La comunidad de TMade Alex es TRADERMADE, en Whop, y él transmite en vivo en YouTube, de lunes a viernes.",
        "His community, on Whop.": "Su comunidad, en Whop.",
        "His channel, where he streams live, Monday to Friday.": "Su canal, donde transmite en vivo, de lunes a viernes.",
        "Open TRADERMADE on Whop": "Abrir TRADERMADE en Whop",
        "Watch on YouTube": "Ver en YouTube",
        "This AstroLog has two halves.": "Este AstroLog tiene dos mitades.",
        "The changelog": "El registro de cambios",
        "Read the changelog": "Leer el registro de cambios",
        "The library": "La biblioteca",
        "Open the library": "Abrir la biblioteca",
        "The ledger": "El libro de cambios",
        "Open the ledger": "Abrir el libro de cambios",
        "TMade Alex's own website: who he is, when he trades live, his photography, and every link.": "El propio sitio web de TMade Alex: quién es, cuándo hace trading en vivo, su fotografía y todos sus enlaces.",
        "This AstroLog is the plain-words record of everything done to TMade Alex's home on GitHub since it was set up for him: what changed, when, and why.":
          "Este AstroLog es el registro, en palabras sencillas, de todo lo que se ha hecho en la casa de TMade Alex en GitHub desde que se creó para él: qué cambió, cuándo y por qué.",
        "You've seen every part. Pull up, and welcome.": "Ya viste cada parte. Pull up, y bienvenido.",
        "Let the candles rest": "Dejar quietas las velas",
        "Let the candles drift": "Dejar que las velas floten",
        "Trading": "Trading",
        "Photography": "Fotografía",
        "Not financial advice": "No es asesoría financiera",
        "The reading room, for visitors": "La sala de lectura, para visitantes",
        "His website's code": "El código de su sitio web",
      },
    },
  };
})();
/* ── end of the languages block ── */
