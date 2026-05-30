(function () {
  const STORAGE_KEYS = {
    language: "jdt-local-guide-language",
    theme: "jdt-local-guide-theme",
  };

  const languages = ["fi", "sv", "en"];
  const cities = ["loimaa", "turku", "helsinki", "tampere"];

  const translations = {
    fi: {
      documentTitle: "JDT Local Guide",
      brand: "JDT Local Guide",
      brandShort: "JDT",
      nav: {
        themeLight: "Vaihda vaaleaan tilaan",
        themeDark: "Vaihda tummaan tilaan",
        languageLabel: "Vaihda kieli",
      },
      hero: {
        eyebrow: "Suomalainen paikallishaku",
        title: "Löydä paikalliset yritykset alueittain",
        intro:
          "JDT Local Guide auttaa löytämään ravintolat, viihteen ja palvelut suomalaisista kaupungeista nopeasti ja selkeästi.",
        searchPlaceholder: "Hae kaupunkia...",
        searchButton: "Hae",
      },
      stats: {
        cities: "kaupunkia",
        categories: "kategoriaa",
        local: "paikallinen",
      },
      sections: {
        citiesTitle: "Selaa kaupunkeja",
        citiesIntro: "Aloita valitsemalla alue, jolta haluat löytää yrityksiä.",
        categoriesTitle: "Valitse kategoria",
        categoriesIntro: "Selaa Loimaan yrityksiä toimialan mukaan.",
        businessesTitle: "Ruokailu Loimaalla",
        businessesIntro: "Esimerkkilistaus näyttää, miltä yrityskortit voivat näyttää.",
      },
      labels: {
        city: "Kaupunki",
        category: "Kategoria",
        address: "Osoite",
        website: "Verkkosivusto",
        details: "Katso tiedot",
        close: "Sulje",
        backHome: "Etusivu",
        backToCity: "Loimaa",
        openCity: "Avaa kaupunki",
        openCategory: "Avaa kategoria",
        breadcrumb: "Murupolku",
      },
      cities: {
        loimaa: {
          name: "Loimaa",
          title: "Loimaan yritykset",
          intro: "Tutustu Loimaan paikallisiin ravintoloihin, viihteeseen ja palveluihin.",
          meta: "Yritykset ja kategoriat",
        },
        turku: {
          name: "Turku",
          title: "Turun yritykset",
          intro: "Turun yrityslistaukset lisätään myöhemmin.",
          meta: "Tulossa pian",
        },
        helsinki: {
          name: "Helsinki",
          title: "Helsingin yritykset",
          intro: "Helsingin yrityslistaukset lisätään myöhemmin.",
          meta: "Tulossa pian",
        },
        tampere: {
          name: "Tampere",
          title: "Tampereen yritykset",
          intro: "Tampereen yrityslistaukset lisätään myöhemmin.",
          meta: "Tulossa pian",
        },
      },
      categories: {
        dining: {
          name: "Ruokailu",
          description: "Ravintolat, kahvilat ja muut ruokapaikat.",
        },
        entertainment: {
          name: "Viihde",
          description: "Aktiviteetit, tapahtumat ja vapaa-ajan palvelut.",
        },
      },
      companies: {
        exampleRestaurant: {
          name: "Example Restaurant",
          category: "Ruokailu",
          address: "Kauppalankatu 8, 32200 Loimaa",
          details:
            "Esimerkkiravintola Loimaan keskustassa. Kortti on demo ja voidaan myöhemmin yhdistää oikeaan yritysdataan.",
        },
        localCafe: {
          name: "Local Café",
          category: "Ruokailu",
          address: "Torikatu 3, 32200 Loimaa",
          details:
            "Paikallinen kahvila, jonka tiedot ovat esimerkkisisältöä hakemiston tulevaa rakennetta varten.",
        },
        yiSushi: {
          name: "Yi Sushi",
          category: "Ruokailu",
          address: "Vesikoskenkatu 11, 32200 Loimaa",
          website: "https://yisushi.fi",
          details: "Sushiravintola Loimaalla osoitteessa Vesikoskenkatu 11.",
        },
      },
      comingSoon: {
        title: "Tulossa pian",
        body: "Tämän kaupungin yrityslistaukset ovat valmisteilla. Palaa myöhemmin katsomaan uusia paikallisia yrityksiä.",
      },
      footer: {
        copyright: "© 2026 JDT Local Guide",
        description:
          "Ammatillinen paikallishakemisto suomalaisille pienyrityksille, kaupungeille ja asiakkaille.",
      },
    },
    sv: {
      documentTitle: "JDT Local Guide",
      brand: "JDT Local Guide",
      brandShort: "JDT",
      nav: {
        themeLight: "Byt till ljust läge",
        themeDark: "Byt till mörkt läge",
        languageLabel: "Byt språk",
      },
      hero: {
        eyebrow: "Finländsk lokal sökning",
        title: "Hitta lokala företag efter område",
        intro:
          "JDT Local Guide hjälper dig att snabbt hitta restauranger, nöjen och tjänster i finländska städer.",
        searchPlaceholder: "Sök stad...",
        searchButton: "Sök",
      },
      stats: {
        cities: "städer",
        categories: "kategorier",
        local: "lokalt",
      },
      sections: {
        citiesTitle: "Bläddra bland städer",
        citiesIntro: "Börja med att välja området där du vill hitta företag.",
        categoriesTitle: "Välj kategori",
        categoriesIntro: "Bläddra bland företag i Loimaa efter bransch.",
        businessesTitle: "Mat i Loimaa",
        businessesIntro: "Exempellistan visar hur företagskorten kan se ut.",
      },
      labels: {
        city: "Stad",
        category: "Kategori",
        address: "Adress",
        website: "Webbplats",
        details: "Visa detaljer",
        close: "Stäng",
        backHome: "Startsida",
        backToCity: "Loimaa",
        openCity: "Öppna stad",
        openCategory: "Öppna kategori",
        breadcrumb: "Brödsmulor",
      },
      cities: {
        loimaa: {
          name: "Loimaa",
          title: "Företag i Loimaa",
          intro: "Utforska lokala restauranger, nöjen och tjänster i Loimaa.",
          meta: "Företag och kategorier",
        },
        turku: {
          name: "Turku",
          title: "Företag i Turku",
          intro: "Företagslistningar för Turku läggs till senare.",
          meta: "Kommer snart",
        },
        helsinki: {
          name: "Helsinki",
          title: "Företag i Helsinki",
          intro: "Företagslistningar för Helsinki läggs till senare.",
          meta: "Kommer snart",
        },
        tampere: {
          name: "Tampere",
          title: "Företag i Tampere",
          intro: "Företagslistningar för Tampere läggs till senare.",
          meta: "Kommer snart",
        },
      },
      categories: {
        dining: {
          name: "Mat",
          description: "Restauranger, caféer och andra matställen.",
        },
        entertainment: {
          name: "Underhållning",
          description: "Aktiviteter, evenemang och fritidstjänster.",
        },
      },
      companies: {
        exampleRestaurant: {
          name: "Example Restaurant",
          category: "Mat",
          address: "Kauppalankatu 8, 32200 Loimaa",
          details:
            "En exempelrestaurang i centrala Loimaa. Kortet är demo och kan senare kopplas till riktig företagsdata.",
        },
        localCafe: {
          name: "Local Café",
          category: "Mat",
          address: "Torikatu 3, 32200 Loimaa",
          details:
            "Ett lokalt café med exempeluppgifter för katalogens framtida struktur.",
        },
        yiSushi: {
          name: "Yi Sushi",
          category: "Mat",
          address: "Vesikoskenkatu 11, 32200 Loimaa",
          website: "https://yisushi.fi",
          details: "En sushirestaurang i Loimaa på Vesikoskenkatu 11.",
        },
      },
      comingSoon: {
        title: "Kommer snart",
        body: "Företagslistningar för den här staden förbereds. Kom tillbaka senare för fler lokala företag.",
      },
      footer: {
        copyright: "© 2026 JDT Local Guide",
        description:
          "En professionell lokal katalog för finländska småföretag, städer och kunder.",
      },
    },
    en: {
      documentTitle: "JDT Local Guide",
      brand: "JDT Local Guide",
      brandShort: "JDT",
      nav: {
        themeLight: "Switch to light mode",
        themeDark: "Switch to dark mode",
        languageLabel: "Change language",
      },
      hero: {
        eyebrow: "Finnish local search",
        title: "Find local businesses by region",
        intro:
          "JDT Local Guide helps people discover restaurants, entertainment and services across Finnish cities with a clear directory experience.",
        searchPlaceholder: "Search city...",
        searchButton: "Search",
      },
      stats: {
        cities: "cities",
        categories: "categories",
        local: "local",
      },
      sections: {
        citiesTitle: "Browse cities",
        citiesIntro: "Start by choosing the area where you want to find local companies.",
        categoriesTitle: "Choose a category",
        categoriesIntro: "Browse Loimaa businesses by business type.",
        businessesTitle: "Dining in Loimaa",
        businessesIntro: "This demo listing shows how business cards can work.",
      },
      labels: {
        city: "City",
        category: "Category",
        address: "Address",
        website: "Website",
        details: "View details",
        close: "Close",
        backHome: "Home",
        backToCity: "Loimaa",
        openCity: "Open city",
        openCategory: "Open category",
        breadcrumb: "Breadcrumb",
      },
      cities: {
        loimaa: {
          name: "Loimaa",
          title: "Businesses in Loimaa",
          intro: "Explore local restaurants, entertainment and services in Loimaa.",
          meta: "Businesses and categories",
        },
        turku: {
          name: "Turku",
          title: "Businesses in Turku",
          intro: "Turku business listings will be added later.",
          meta: "Coming soon",
        },
        helsinki: {
          name: "Helsinki",
          title: "Businesses in Helsinki",
          intro: "Helsinki business listings will be added later.",
          meta: "Coming soon",
        },
        tampere: {
          name: "Tampere",
          title: "Businesses in Tampere",
          intro: "Tampere business listings will be added later.",
          meta: "Coming soon",
        },
      },
      categories: {
        dining: {
          name: "Dining",
          description: "Restaurants, cafés and other places to eat.",
        },
        entertainment: {
          name: "Entertainment",
          description: "Activities, events and leisure services.",
        },
      },
      companies: {
        exampleRestaurant: {
          name: "Example Restaurant",
          category: "Dining",
          address: "Kauppalankatu 8, 32200 Loimaa",
          details:
            "A demo restaurant in central Loimaa. This card is sample content and can later connect to real business data.",
        },
        localCafe: {
          name: "Local Café",
          category: "Dining",
          address: "Torikatu 3, 32200 Loimaa",
          details:
            "A local café with sample information for the future directory structure.",
        },
        yiSushi: {
          name: "Yi Sushi",
          category: "Dining",
          address: "Vesikoskenkatu 11, 32200 Loimaa",
          website: "https://yisushi.fi",
          details: "A sushi restaurant in Loimaa at Vesikoskenkatu 11.",
        },
      },
      comingSoon: {
        title: "Coming soon",
        body: "Business listings for this city are being prepared. Check back later for more local companies.",
      },
      footer: {
        copyright: "© 2026 JDT Local Guide",
        description:
          "A professional local directory for Finnish small businesses, cities and customers.",
      },
    },
  };

  const companyIds = ["exampleRestaurant", "localCafe", "yiSushi"];

  let state = {
    language: getStoredLanguage(),
    theme: getStoredTheme(),
    route: parseRoute(),
    activeCompanyId: null,
  };

  const app = document.querySelector("#app");

  document.addEventListener("DOMContentLoaded", init);
  window.addEventListener("hashchange", () => {
    state.route = parseRoute();
    state.activeCompanyId = null;
    render();
  });

  function init() {
    applyTheme();
    render();
  }

  function getStoredLanguage() {
    const saved = localStorage.getItem(STORAGE_KEYS.language);
    return languages.includes(saved) ? saved : "fi";
  }

  function getStoredTheme() {
    const saved = localStorage.getItem(STORAGE_KEYS.theme);
    if (saved === "dark" || saved === "light") {
      return saved;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function parseRoute() {
    const segments = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);

    if (segments[0] === "city" && cities.includes(segments[1])) {
      if (segments[2] === "category" && segments[3] === "dining" && segments[1] === "loimaa") {
        return { name: "category", cityId: segments[1], categoryId: segments[3] };
      }

      return { name: "city", cityId: segments[1] };
    }

    return { name: "home" };
  }

  function navigate(path) {
    window.location.hash = path;
  }

  function applyTheme() {
    document.documentElement.dataset.theme = state.theme;
  }

  function setLanguage(language) {
    if (!languages.includes(language)) {
      return;
    }

    state.language = language;
    localStorage.setItem(STORAGE_KEYS.language, language);
    render();
  }

  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEYS.theme, state.theme);
    applyTheme();
    render();
  }

  function t() {
    return translations[state.language];
  }

  function render() {
    const copy = t();
    document.documentElement.lang = state.language;
    document.title = copy.documentTitle;
    document.body.classList.toggle("modal-open", Boolean(state.activeCompanyId));

    app.innerHTML = "";
    const shell = createElement("div", "site-shell");
    shell.append(createHeader(copy), createMain(copy), createFooter(copy));

    if (state.activeCompanyId) {
      shell.append(createCompanyModal(copy, state.activeCompanyId));
    }

    app.append(shell);
  }

  function createHeader(copy) {
    const header = createElement("header", "navbar");
    const inner = createElement("div", "nav-inner");

    const brand = createElement("a", "brand");
    brand.href = "#/";
    brand.setAttribute("aria-label", copy.brand);
    brand.append(
      createElement("span", "brand-mark", copy.brandShort),
      createElement("span", null, copy.brand),
    );

    const actions = createElement("div", "nav-actions");
    const languageSwitcher = createElement("div", "language-switcher");
    languageSwitcher.setAttribute("aria-label", copy.nav.languageLabel);

    languages.forEach((language) => {
      const button = createElement(
        "button",
        `language-button${state.language === language ? " is-active" : ""}`,
        language.toUpperCase(),
      );
      button.type = "button";
      button.setAttribute("aria-pressed", String(state.language === language));
      button.addEventListener("click", () => setLanguage(language));
      languageSwitcher.append(button);
    });

    const themeButton = createElement("button", "theme-toggle", state.theme === "dark" ? sunIcon() : moonIcon());
    themeButton.type = "button";
    themeButton.setAttribute("aria-label", state.theme === "dark" ? copy.nav.themeLight : copy.nav.themeDark);
    themeButton.addEventListener("click", toggleTheme);

    actions.append(languageSwitcher, themeButton);
    inner.append(brand, actions);
    header.append(inner);

    return header;
  }

  function createMain(copy) {
    const main = createElement("main", "main");

    if (state.route.name === "home") {
      main.append(createHome(copy));
      return main;
    }

    if (state.route.name === "city") {
      main.append(createCityPage(copy, state.route.cityId));
      return main;
    }

    main.append(createCategoryPage(copy));
    return main;
  }

  function createHome(copy) {
    const fragment = document.createDocumentFragment();
    const hero = createElement("section", "section hero");

    const content = createElement("div", "hero-content");
    content.append(
      createElement("p", "eyebrow", copy.hero.eyebrow),
      createElement("h1", null, copy.hero.title),
      createElement("p", "hero-copy", copy.hero.intro),
      createSearch(copy),
    );

    hero.append(content, createHeroVisual(copy));

    const cityBand = createElement("section", "section content-band");
    cityBand.append(
      createSectionHeading(copy.sections.citiesTitle, copy.sections.citiesIntro),
      createCityGrid(copy),
    );

    fragment.append(hero, cityBand);
    return fragment;
  }

  function createSearch(copy) {
    const form = createElement("form", "search-panel");
    form.setAttribute("role", "search");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = form.querySelector("input").value.trim().toLowerCase();
      const cityId = cities.find((id) => {
        const cityName = copy.cities[id].name.toLowerCase();
        return query && (query.includes(id) || query.includes(cityName) || cityName.includes(query));
      });

      if (cityId) {
        navigate(`/city/${cityId}`);
      }
    });

    const poda = createElement("div", "uiverse-poda");
    poda.append(
      createElement("div", "uiverse-glow"),
      createElement("div", "uiverse-dark-border-bg"),
      createElement("div", "uiverse-dark-border-bg"),
      createElement("div", "uiverse-dark-border-bg"),
      createElement("div", "uiverse-white"),
      createElement("div", "uiverse-border"),
    );

    const main = createElement("div", "uiverse-main");
    const input = document.createElement("input");
    input.type = "search";
    input.name = "text";
    input.className = "uiverse-input";
    input.placeholder = copy.hero.searchPlaceholder;
    input.setAttribute("aria-label", copy.hero.searchPlaceholder);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        form.requestSubmit();
      }
    });

    const button = createElement("button", "uiverse-filter-button", filterIcon());
    button.type = "submit";
    button.setAttribute("aria-label", copy.hero.searchButton);

    main.append(
      input,
      createElement("div", "uiverse-input-mask"),
      createElement("div", "uiverse-pink-mask"),
      createElement("div", "uiverse-filter-border"),
      button,
      createElement("div", "uiverse-search-icon", uiverseSearchIcon()),
    );

    poda.append(main);
    form.append(poda);
    return form;
  }

  function createHeroVisual(copy) {
    const visual = createElement("aside", "hero-visual");
    visual.setAttribute("aria-hidden", "true");
    visual.append(createElement("div", "hero-map"), createRouteLine());

    ["loimaa", "turku", "helsinki", "tampere"].forEach((cityId) => {
      const city = copy.cities[cityId];
      const card = createElement("div", `floating-city city-marker-${cityId}`);
      card.append(createElement("strong", null, city.name), createElement("span", null, city.meta));
      visual.append(card);
    });

    const metricStrip = createElement("div", "metric-strip");
    metricStrip.append(
      createMetric("4", copy.stats.cities),
      createMetric("2", copy.stats.categories),
      createMetric("100%", copy.stats.local),
    );
    visual.append(metricStrip);

    return visual;
  }

  function createRouteLine() {
    const wrapper = createElement("div", "route-line");
    wrapper.innerHTML = `
      <svg viewBox="0 0 360 250" role="img" focusable="false">
        <path d="M32 54 C116 12 134 118 196 96 S272 54 326 118 S228 190 166 154 S98 164 54 220"></path>
      </svg>
    `;
    return wrapper;
  }

  function createMetric(value, label) {
    const metric = createElement("div", "metric");
    metric.append(createElement("strong", null, value), createElement("span", null, label));
    return metric;
  }

  function createSectionHeading(title, intro) {
    const heading = createElement("div", "section-heading");
    const text = createElement("div");
    text.append(createElement("h2", null, title), createElement("p", null, intro));
    heading.append(text);
    return heading;
  }

  function createCityGrid(copy) {
    const grid = createElement("div", "grid city-grid");
    cities.forEach((cityId) => {
      const city = copy.cities[cityId];
      const card = createElement("button", "card-button");
      card.type = "button";
      card.setAttribute("aria-label", `${copy.labels.openCity}: ${city.name}`);
      card.addEventListener("click", () => navigate(`/city/${cityId}`));
      card.append(
        createElement("span", "card-kicker", copy.labels.city),
        createElement("strong", null, city.name),
        createElement("span", "card-meta", [
          createElement("span", null, city.meta),
          createElement("span", "arrow", arrowIcon()),
        ]),
      );
      grid.append(card);
    });

    return grid;
  }

  function createCityPage(copy, cityId) {
    const fragment = document.createDocumentFragment();
    const city = copy.cities[cityId];

    fragment.append(createPageHeader(copy, city.title, city.intro, [{ label: copy.labels.backHome, path: "/" }]));

    const content = createElement("section", "section content-band");

    if (cityId !== "loimaa") {
      content.append(createComingSoon(copy));
      fragment.append(content);
      return fragment;
    }

    content.append(
      createSectionHeading(copy.sections.categoriesTitle, copy.sections.categoriesIntro),
      createCategoryGrid(copy),
    );
    fragment.append(content);

    return fragment;
  }

  function createCategoryGrid(copy) {
    const grid = createElement("div", "grid category-grid");

    ["dining", "entertainment"].forEach((categoryId) => {
      const category = copy.categories[categoryId];
      const card = createElement("button", "card-button category-card");
      card.type = "button";
      card.setAttribute("aria-label", `${copy.labels.openCategory}: ${category.name}`);
      if (categoryId === "dining") {
        card.addEventListener("click", () => navigate("/city/loimaa/category/dining"));
      }
      card.append(
        createElement("span", "card-kicker", copy.labels.category),
        createElement("strong", null, category.name),
        createElement("span", "card-meta", [
          createElement("span", null, category.description),
          createElement("span", "arrow", categoryId === "dining" ? arrowIcon() : clockIcon()),
        ]),
      );
      grid.append(card);
    });

    return grid;
  }

  function createCategoryPage(copy) {
    const fragment = document.createDocumentFragment();

    fragment.append(
      createPageHeader(copy, copy.sections.businessesTitle, copy.sections.businessesIntro, [
        { label: copy.labels.backHome, path: "/" },
        { label: copy.labels.backToCity, path: "/city/loimaa" },
      ]),
    );

    const content = createElement("section", "section content-band");
    const grid = createElement("div", "grid company-grid");

    companyIds.forEach((companyId) => {
      grid.append(createCompanyCard(copy, companyId));
    });

    content.append(grid);
    fragment.append(content);

    return fragment;
  }

  function createCompanyCard(copy, companyId) {
    const company = copy.companies[companyId];
    const card = createElement("article", "company-card");

    const top = createElement("div", "company-top");
    const titleWrap = createElement("div");
    titleWrap.append(createElement("h2", null, company.name));
    top.append(titleWrap, createElement("span", "category-pill", company.category));

    const fields = createElement("div", "company-fields");
    fields.append(createField(locationIcon(), `${copy.labels.address}: ${company.address}`));

    const actions = createElement("div", "company-actions");
    const website = createElement("a", "primary-button", copy.labels.website);
    website.href = company.website || "https://example.com";
    website.target = "_blank";
    website.rel = "noopener noreferrer";

    const details = createElement("button", "secondary-button", copy.labels.details);
    details.type = "button";
    details.addEventListener("click", () => {
      state.activeCompanyId = companyId;
      render();
    });

    actions.append(website, details);
    card.append(top, fields, actions);
    return card;
  }

  function createField(icon, text) {
    const field = createElement("div", "field");
    field.append(createElement("span", null, icon), createElement("span", null, text));
    return field;
  }

  function createComingSoon(copy) {
    const empty = createElement("div", "empty-state");
    const inner = createElement("div", "empty-state-inner");
    inner.append(
      createElement("div", "empty-icon", clockIcon()),
      createElement("h2", null, copy.comingSoon.title),
      createElement("p", null, copy.comingSoon.body),
    );
    empty.append(inner);
    return empty;
  }

  function createPageHeader(copy, title, intro, breadcrumbs) {
    const header = createElement("section", "section page-header");
    const breadcrumb = createElement("nav", "breadcrumb");
    breadcrumb.setAttribute("aria-label", copy.labels.breadcrumb);

    breadcrumbs.forEach((item, index) => {
      const button = createElement("button", null, item.label);
      button.type = "button";
      button.addEventListener("click", () => navigate(item.path));
      breadcrumb.append(button);

      if (index < breadcrumbs.length - 1) {
        breadcrumb.append(createElement("span", null, "/"));
      }
    });

    const pageTitle = createElement("div", "page-title");
    pageTitle.append(createElement("h1", null, title), createElement("p", null, intro));
    header.append(breadcrumb, pageTitle);
    return header;
  }

  function createFooter(copy) {
    const footer = createElement("footer", "footer");
    const inner = createElement("div", "footer-inner");
    const text = createElement("div");
    text.append(createElement("strong", null, copy.footer.copyright), createElement("span", null, copy.footer.description));
    inner.append(text);
    footer.append(inner);
    return footer;
  }

  function createCompanyModal(copy, companyId) {
    const company = copy.companies[companyId];
    const backdrop = createElement("div", "modal-backdrop");
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) {
        closeModal();
      }
    });

    const card = createElement("section", "detail-card");
    card.setAttribute("role", "dialog");
    card.setAttribute("aria-modal", "true");
    card.setAttribute("aria-labelledby", "company-detail-title");

    const header = createElement("div", "detail-header");
    const titleWrap = createElement("div");
    const title = createElement("h2", null, company.name);
    title.id = "company-detail-title";
    titleWrap.append(title, createElement("span", "category-pill", company.category));

    const close = createElement("button", "icon-button", closeIcon());
    close.type = "button";
    close.setAttribute("aria-label", copy.labels.close);
    close.addEventListener("click", closeModal);

    header.append(titleWrap, close);
    card.append(
      header,
      createField(locationIcon(), `${copy.labels.address}: ${company.address}`),
      createElement("p", null, company.details),
    );

    backdrop.append(card);
    return backdrop;
  }

  function closeModal() {
    state.activeCompanyId = null;
    render();
  }

  function createElement(tagName, className, content) {
    const element = document.createElement(tagName);

    if (className) {
      element.className = className;
    }

    if (typeof content === "string") {
      element.textContent = content;
    } else if (content instanceof Node) {
      element.append(content);
    } else if (Array.isArray(content)) {
      element.append(...content);
    }

    return element;
  }

  function iconSvg(paths, viewBox = "0 0 24 24") {
    const template = document.createElement("template");
    template.innerHTML = `
      <svg viewBox="${viewBox}" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        ${paths}
      </svg>
    `;
    return template.content.firstElementChild;
  }

  function searchIcon() {
    return iconSvg('<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>');
  }

  function customSvg(markup) {
    const template = document.createElement("template");
    template.innerHTML = markup.trim();
    return template.content.firstElementChild;
  }

  function uiverseSearchIcon() {
    return customSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none" aria-hidden="true" focusable="false">
        <circle stroke="url(#uiverse-search)" r="8" cy="11" cx="11"></circle>
        <line stroke="url(#uiverse-search-line)" y2="16.65" y1="22" x2="16.65" x1="22"></line>
        <defs>
          <linearGradient gradientTransform="rotate(50)" id="uiverse-search">
            <stop stop-color="var(--search-icon-start)" offset="0%"></stop>
            <stop stop-color="var(--search-icon-mid)" offset="50%"></stop>
          </linearGradient>
          <linearGradient id="uiverse-search-line">
            <stop stop-color="var(--search-icon-mid)" offset="0%"></stop>
            <stop stop-color="var(--search-icon-end)" offset="50%"></stop>
          </linearGradient>
        </defs>
      </svg>
    `);
  }

  function filterIcon() {
    return customSvg(`
      <svg preserveAspectRatio="none" height="27" width="27" viewBox="4.8 4.56 14.832 15.408" fill="none" aria-hidden="true" focusable="false">
        <path d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z" stroke="currentColor" stroke-width="1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    `);
  }

  function arrowIcon() {
    return iconSvg('<path d="M5 12h14"></path><path d="m13 5 7 7-7 7"></path>');
  }

  function moonIcon() {
    return iconSvg('<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 7 7 0 1 0 20.5 14.5z"></path>');
  }

  function sunIcon() {
    return iconSvg('<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>');
  }

  function clockIcon() {
    return iconSvg('<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>');
  }

  function locationIcon() {
    return iconSvg('<path d="M20 10c0 4.99-5.54 10.06-7.41 11.6a1 1 0 0 1-1.18 0C9.54 20.06 4 14.99 4 10a8 8 0 1 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle>');
  }

  function closeIcon() {
    return iconSvg('<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>');
  }
})();
