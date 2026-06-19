const scenarios = {
  calls: {
    tag: "Телефония",
    title: "Звоните клиенту в один клик прямо из карточки",
    text: "Менеджеру не нужно открывать отдельный софт или искать номер клиента. Звонок, запись разговора и вся история общения автоматически сохраняются в истории каждой карточки.",
    items: [
      "Исходящие и входящие звонки прямо в браузере",
      "Запись разговора доступна сразу после звонка и сохраняется в истории",
      "Входящий попадает к последнему менеджеру, который общался с клиентом",
      "Автоматическое создание задачи при пропущенных"
    ]
  },
  scripts: {
    tag: "Скрипты",
    title: "Подсказки и возражения прямо во время разговора",
    text: "Добавляйте скрипты и назначайте всем или конкретному менеджеру. Ответы на возражения всегда перед глазами — прямо в карточке клиента.",
    items: [
      "Сценарий разговора по этапам воронки",
      "Быстрые ответы на типовые возражения",
      "Руководитель обновляет скрипты централизованно"
    ]
  },
  reports: {
    tag: "Отчёты и KPI",
    title: "Устанавливайте KPI и контролируйте результат каждого менеджера",
    text: "Создавайте KPI по звонкам, отправленным КП, длительности разговора и успешным сделкам. Сравнивайте выполнение плана, слушайте разговоры и находите потери на этапах сделки.",
    items: [
      "Настройка KPI по звонкам, КП, длительности и сделкам",
      "Выполнение плана по каждому менеджеру",
      "Прослушивание звонков прямо из отчёта",
      "Аналитика конверсии по этапам сделки"
    ]
  },
  tasks: {
    tag: "Задачи",
    title: "Не теряйте клиентов после пропущенного звонка",
    text: "После пропущенного звонка система сама создаёт ответственному задачу на перезвон. Менеджер также может вручную поставить любую следующую задачу.",
    items: [
      "Автоматическая задача на перезвон после пропущенного",
      "Напоминания о повторном звонке в нужное время",
      "Ручное создание задач прямо из карточки клиента",
      "Руководитель видит просроченные и выполненные действия"
    ]
  },
  ai: {
    tag: "AI-анализ",
    title: "Находите ошибки в звонках без ручного прослушивания",
    text: "AI расшифровывает разговор, оценивает соблюдение скрипта и показывает сильные стороны и точки роста менеджера.",
    items: [
      "Автоматическая расшифровка и краткое резюме звонка",
      "Оценка этапов разговора и соблюдения скрипта",
      "Поиск возражений, договорённостей и важных фраз",
      "Персональные рекомендации для каждого менеджера"
    ]
  }
};

const objections = {
  price: {
    title: "У вас дорого",
    answer: "Понимаю. Подскажите, что для вас важнее — цена сейчас или итоговая выгода от результата?",
    question: "С чем из конкурентов сравниваете? Что для вас важнее — цена или сроки?",
    next: "Предложите демо и зафиксируйте следующий звонок — «Могу перенести в четверг в 11:00?»"
  },
  info: {
    title: "Я уже получил информацию",
    answer: "Отлично. Что из материалов показалось наиболее полезным, а какие вопросы пока остались?",
    question: "Удалось ли сравнить решение с вашим текущим процессом обзвона?",
    next: "Предложите короткую демонстрацию на данных клиента."
  },
  think: {
    title: "Нужно подумать",
    answer: "Конечно. Чтобы подготовить полезную информацию, подскажите, что именно требует дополнительного обсуждения?",
    question: "Кто ещё участвует в принятии решения и когда будет удобно вернуться к вопросу?",
    next: "Согласуйте конкретную дату следующего контакта."
  },
  vendor: {
    title: "Работаем с другим сервисом",
    answer: "Понимаю. Мы не предлагаем менять всё сразу — давайте сравним качество звонков, аналитику и скорость работы команды.",
    question: "Чего вам сейчас не хватает в используемом решении?",
    next: "Покажите отличие Звонекса на одном рабочем сценарии."
  }
};

const reportPeriods = [
  { label: "03–09 июня", calls: "1 284", reach: "86%", duration: "03:42" },
  { label: "27 мая–02 июня", calls: "1 126", reach: "81%", duration: "03:24" },
  { label: "20–26 мая", calls: "984", reach: "76%", duration: "03:16" }
];

const taskSets = {
  today: [
    ["Перезвонить клиенту", "Алексей Воронов", "ООО «ТехноПроф»", "10:30", "Клиент звонил на общий номер. Последний ответственный менеджер — Анна Смирнова."],
    ["Отправить коммерческое предложение", "Ирина Соколова", "ООО «Вектор»", "12:00", "Клиент ожидает предложение с расчётом стоимости и сроками подключения."],
    ["Повторный контакт", "Михаил Орлов", "Компания «Старт»", "14:15", "После презентации клиент попросил время на обсуждение с руководителем."],
    ["Уточнить решение по договору", "Елена Романова", "ООО «Глобус»", "16:40", "Договор отправлен два дня назад. Нужно уточнить замечания и срок подписания."]
  ],
  overdue: [
    ["Перезвонить после пропущенного", "Олег Сафонов", "ООО «Меридиан»", "Вчера, 17:30", "Задача просрочена. Клиент дважды звонил на рабочий номер."],
    ["Получить решение по КП", "Анна Белова", "ИП «Белова»", "Вчера, 15:00", "Коммерческое предложение просмотрено, ответ пока не получен."],
    ["Назначить демонстрацию", "Игорь Лебедев", "ООО «Спектр»", "12 июня, 11:00", "Клиент согласовал демонстрацию, но время ещё не выбрано."]
  ],
  upcoming: [
    ["Провести демонстрацию", "Сергей Волков", "ООО «Альянс»", "Завтра, 10:00", "Демонстрация для руководителя отдела и двух менеджеров."],
    ["Обсудить интеграцию", "Дарья Морозова", "Компания «Ритм»", "Завтра, 14:30", "Нужно обсудить подключение существующей телефонии."],
    ["Контрольный звонок", "Роман Фёдоров", "ООО «Прайм»", "16 июня, 12:00", "Проверить результаты тестовой недели."]
  ],
  done: [
    ["Отправить запись встречи", "Елена Григорьева", "ИП «Краснополье»", "Сегодня, 09:20", "Запись и презентация отправлены клиенту."],
    ["Подключить тестовый номер", "Александр Ким", "ООО «Модуль»", "Вчера, 13:15", "Тестовый номер подключён и проверен."],
    ["Согласовать список менеджеров", "Наталья Ли", "Компания «Фокус»", "12 июня, 16:00", "Список пользователей получен и добавлен в проект."]
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  stabilizeReloadState();

  const tabs = [...document.querySelectorAll(".feature-tab")];
  const previews = [...document.querySelectorAll("[data-preview]")];
  const scenario = document.querySelector(".scenario");
  const tag = document.querySelector("[data-scenario-tag]");
  const title = document.querySelector("[data-scenario-title]");
  const text = document.querySelector("[data-scenario-text]");
  const list = document.querySelector("[data-scenario-list]");
  const toast = createToastController();
  let activeFeature = "";

  const showScenario = (key) => {
    const data = scenarios[key];
    if (!data || !scenario || !tag || !title || !text || !list) return;
    if (activeFeature === key) return;
    activeFeature = key;

    tabs.forEach((tab) => {
      const active = tab.dataset.feature === key;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });

    scenario.classList.remove("is-changing");
    void scenario.offsetWidth;
    tag.textContent = data.tag;
    title.textContent = data.title;
    text.textContent = data.text;
    list.replaceChildren(...data.items.map(createListItem));
    scenario.classList.add("is-changing");

    previews.forEach((preview) => {
      preview.classList.toggle("is-active", preview.dataset.preview === key);
    });

    if (key !== "ai") {
      document.dispatchEvent(new CustomEvent("ai:stop"));
    }

  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      showScenario(tab.dataset.feature);
    });
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      tabs[nextIndex].focus();
      showScenario(tabs[nextIndex].dataset.feature);
    });
  });

  showScenario("calls");

  initHeader();
  initIllustrationPreviews();
});

function stabilizeReloadState() {
  if (history.replaceState) {
    const url = new URL(window.location.href);
    if (url.searchParams.has("feature")) {
      url.searchParams.delete("feature");
      history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    }
  }

  preserveReloadScrollPosition();
}

function preserveReloadScrollPosition() {
  const storageKey = `zvoneks-scroll:${window.location.pathname}`;
  const savePosition = () => {
    try {
      sessionStorage.setItem(storageKey, JSON.stringify({
        x: window.scrollX,
        y: window.scrollY,
        savedAt: Date.now()
      }));
    } catch {
      // Ignore storage errors; scroll restore is a visual enhancement.
    }
  };

  window.addEventListener("pagehide", savePosition);
  window.addEventListener("beforeunload", savePosition);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") savePosition();
  });

  const navigation = performance.getEntriesByType?.("navigation")?.[0];
  if (navigation?.type !== "reload") return;

  let savedPosition;
  try {
    savedPosition = JSON.parse(sessionStorage.getItem(storageKey) || "null");
  } catch {
    savedPosition = null;
  }

  if (!savedPosition || typeof savedPosition.y !== "number") return;

  const restorePosition = () => {
    const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({
      left: savedPosition.x || 0,
      top: Math.min(savedPosition.y, maxY),
      behavior: "auto"
    });
  };

  requestAnimationFrame(restorePosition);
  window.addEventListener("load", () => {
    restorePosition();
    [80, 240, 600, 1200].forEach((delay) => setTimeout(restorePosition, delay));
  }, { once: true });
}

function createListItem(text) {
  const item = document.createElement("li");
  item.textContent = text;
  return item;
}

function createToastController() {
  const root = document.querySelector("[data-toast]");
  const text = document.querySelector("[data-toast-text]");
  let timer;

  return (message) => {
    if (!root || !text) return;
    text.textContent = message;
    root.classList.remove("is-visible");
    void root.offsetWidth;
    root.classList.add("is-visible");
    clearTimeout(timer);
    timer = setTimeout(() => root.classList.remove("is-visible"), 2400);
  };
}

function initHeader() {
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-button");

  menuButton?.addEventListener("click", () => {
    const isOpen = header?.classList.toggle("is-open") ?? false;
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.classList.toggle("is-open", isOpen);
  });
}

function initIllustrationPreviews() {
  document.querySelectorAll(".app-window").forEach((preview) => {
    preview.inert = true;
    preview.setAttribute("aria-hidden", "true");
    preview.querySelectorAll("button, a, input, textarea, select, [tabindex]").forEach((element) => {
      element.tabIndex = -1;
    });
  });
}

function initMockNavigation(toast) {
  document.querySelectorAll(".app-window a, a[href='#'], a[href='#pricing'], a[href='#cases']").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (href === "#features") return;
      event.preventDefault();
      const appWindow = link.closest(".app-window");
      if (appWindow) {
        link.closest("nav")?.querySelectorAll("a").forEach((item) => item.classList.remove("is-current"));
        link.classList.add("is-current");
        showAppSection(appWindow, link.textContent.trim());
        toast(`Открыт раздел «${link.textContent.trim()}»`);
      } else {
        toast("Демо-раздел скоро будет доступен");
      }
    });
  });

  function showAppSection(appWindow, title) {
    const descriptions = {
      "Проекты": "Базы клиентов, команды и рабочие проекты.",
      "Продажи": "Воронка, задачи и активные сделки отдела.",
      "Контакты": "Карточки клиентов и вся история общения.",
      "Отчёты": "KPI, звонки и динамика результатов.",
      "AI-анализ": "Расшифровка разговора и рекомендации AI."
    };
    let panel = appWindow.querySelector(".app-nav-popover");
    if (!panel) {
      panel = document.createElement("aside");
      panel.className = "app-nav-popover";
      const close = document.createElement("button");
      close.type = "button";
      close.setAttribute("aria-label", "Закрыть");
      close.textContent = "×";
      const heading = document.createElement("strong");
      const text = document.createElement("p");
      panel.append(close, heading, text);
      close.addEventListener("click", () => panel.classList.remove("is-visible"));
      appWindow.append(panel);
    }
    panel.querySelector("strong").textContent = title;
    panel.querySelector("p").textContent = descriptions[title] || "Раздел открыт в демонстрационном режиме.";
    panel.classList.remove("is-visible");
    void panel.offsetWidth;
    panel.classList.add("is-visible");
  }
}

function initCallScreens(toast) {
  const callsView = document.querySelector('[data-preview="calls"]');
  const callHistory = callsView?.querySelector('[data-call-content="history"]');
  const comment = callsView?.querySelector("[data-call-comment]");

  const appendCallEvent = (title, description, icon = "✓") => {
    if (!callHistory) return;
    const event = document.createElement("div");
    event.className = "event is-new";
    event.tabIndex = 0;
    const iconNode = document.createElement("span");
    iconNode.className = "event-icon event-icon--check";
    iconNode.textContent = icon;
    const content = document.createElement("div");
    const heading = document.createElement("strong");
    const text = document.createElement("p");
    heading.textContent = title;
    text.textContent = description;
    content.append(heading, text);
    const time = document.createElement("time");
    time.textContent = new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
    event.append(iconNode, content, time);
    event.addEventListener("click", () => selectCallEvent(event));
    event.addEventListener("keydown", (keyEvent) => {
      if (keyEvent.key === "Enter" || keyEvent.key === " ") {
        keyEvent.preventDefault();
        selectCallEvent(event);
      }
    });
    callHistory.append(event);
    event.scrollIntoView({ block: "nearest", behavior: "smooth" });
    selectCallEvent(event);
  };

  document.querySelectorAll("[data-call-toggle]").forEach((button) => {
    let seconds = button.classList.contains("is-calling") ? 48 : 0;
    let timer = null;
    const view = button.closest(".app-view");
    const panel = view?.querySelector("[data-call-panel]");
    const timeNodes = view?.querySelectorAll("[data-call-time]") ?? [];
    const status = view?.querySelector(".call-live");
    const liveEvent = view?.querySelector(".event--live");

    const render = () => timeNodes.forEach((node) => { node.textContent = formatTime(seconds); });
    const start = (silent = false) => {
      button.classList.add("is-calling");
      button.classList.remove("is-ended");
      button.querySelector("span").textContent = "Идёт звонок";
      button.setAttribute("aria-pressed", "true");
      status?.classList.remove("is-ended");
      if (status) status.lastChild.textContent = " Звонок идёт";
      liveEvent?.classList.remove("is-ended");
      const liveTitle = liveEvent?.querySelector("strong");
      if (liveTitle) liveTitle.textContent = "Звонок идёт";
      panel?.classList.remove("is-hidden");
      clearInterval(timer);
      timer = setInterval(() => {
        seconds += 1;
        render();
      }, 1000);
      if (!silent) toast("Звонок начат");
    };
    const stop = () => {
      clearInterval(timer);
      timer = null;
      button.classList.remove("is-calling");
      button.classList.add("is-ended");
      button.querySelector("span").textContent = "Позвонить";
      button.setAttribute("aria-pressed", "false");
      status?.classList.add("is-ended");
      if (status) status.lastChild.textContent = " Звонок завершён";
      liveEvent?.classList.add("is-ended");
      const liveTitle = liveEvent?.querySelector("strong");
      if (liveTitle) liveTitle.textContent = "Звонок завершён";
      panel?.classList.add("is-hidden");
      if (view?.dataset.preview === "calls") {
        appendCallEvent("Запись звонка сохранена", `Длительность ${formatTime(seconds)}`, "↙");
      }
      toast("Звонок завершён и сохранён");
    };

    if (button.classList.contains("is-calling")) start(true);
    button.addEventListener("click", () => button.classList.contains("is-calling") ? stop() : start());
    panel?.querySelector("[data-call-end]")?.addEventListener("click", stop);
  });

  document.querySelectorAll("[data-call-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      const column = button.closest(".history-column");
      column?.querySelectorAll("[data-call-tab]").forEach((tab) => tab.classList.toggle("is-active", tab === button));
      column?.querySelectorAll("[data-call-content]").forEach((content) => {
        content.classList.toggle("is-active", content.dataset.callContent === button.dataset.callTab);
      });
    });
  });

  document.querySelectorAll(".live-objection").forEach((button) => {
    button.addEventListener("click", () => {
      const isOpen = button.classList.toggle("is-open");
      button.querySelector("b").textContent = isOpen
        ? "Скажите: сравним результат и затраты"
        : "Открыть ответ";
    });
  });

  const stages = [...document.querySelectorAll(".stages-column [data-stage]")];
  const setStage = (number) => {
    stages.forEach((stage) => {
      const value = Number(stage.dataset.stage);
      stage.classList.toggle("is-active", value === number);
      stage.classList.toggle("is-done", value < number);
    });
    const current = document.querySelector(".current-stage strong");
    const selected = stages.find((stage) => Number(stage.dataset.stage) === number);
    if (current && selected) current.textContent = selected.textContent.replace(/^\d+/, "").trim();
    toast(`Выбран этап ${number}`);
  };

  stages.forEach((stage) => {
    stage.addEventListener("click", () => setStage(Number(stage.dataset.stage)));
    stage.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setStage(Number(stage.dataset.stage));
      }
    });
  });

  document.querySelector("[data-next-stage]")?.addEventListener("click", () => {
    const active = stages.find((stage) => stage.classList.contains("is-active"));
    setStage(Math.min((Number(active?.dataset.stage) || 1) + 1, stages.length));
  });

  callsView?.querySelector("[data-save-call]")?.addEventListener("click", saveCallComment);
  comment?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      saveCallComment();
    }
  });

  callsView?.querySelector("[data-create-call-task]")?.addEventListener("click", () => {
    const stage = callsView.querySelector(".current-stage strong")?.textContent.trim() || "Текущий этап";
    const task = [
      "Перезвонить Алексею Воронову",
      "Алексей Воронов",
      "ООО «ТехноПроф»",
      "Сегодня, 17:30",
      `Задача создана из звонка. Этап: ${stage}.`,
      "Вручную из карточки звонка"
    ];
    taskSets.today.unshift(task);
    appendCallEvent("Создана задача", `Перезвонить сегодня в 17:30 · ${stage}`, "+");
    document.dispatchEvent(new CustomEvent("task:added", { detail: task }));
    toast("Задача создана и добавлена в список");
  });

  callsView?.querySelectorAll(".client-details dd").forEach((value) => {
    value.tabIndex = 0;
    value.setAttribute("role", "button");
    const copy = async () => {
      try {
        await navigator.clipboard.writeText(value.textContent.trim());
        toast("Данные клиента скопированы");
      } catch {
        toast(value.textContent.trim());
      }
    };
    value.addEventListener("click", copy);
    value.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        copy();
      }
    });
  });

  callHistory?.querySelectorAll(".event").forEach((event) => {
    event.tabIndex = 0;
    event.addEventListener("click", () => selectCallEvent(event));
    event.addEventListener("keydown", (keyEvent) => {
      if (keyEvent.key === "Enter" || keyEvent.key === " ") {
        keyEvent.preventDefault();
        selectCallEvent(event);
      }
    });
  });

  document.querySelectorAll("[data-demo-action]").forEach((button) => {
    button.addEventListener("click", () => toast(button.dataset.demoAction));
  });

  function saveCallComment() {
    const value = comment?.value.trim();
    if (!value) {
      comment?.focus();
      comment?.classList.remove("is-invalid");
      void comment?.offsetWidth;
      comment?.classList.add("is-invalid");
      toast("Введите комментарий к звонку");
      return;
    }
    appendCallEvent("Комментарий сохранён", value, "□");
    comment.value = "";
    toast("Комментарий добавлен в историю");
  }

  function selectCallEvent(event) {
    callHistory?.querySelectorAll(".event").forEach((item) => item.classList.toggle("is-selected", item === event));
  }
}

function initScriptsScreen(toast) {
  const modal = document.querySelector("[data-script-modal]");
  const form = modal;
  const openModal = () => {
    modal?.classList.add("is-open");
    modal?.setAttribute("aria-hidden", "false");
    setTimeout(() => modal?.querySelector("input")?.focus(), 150);
  };
  const closeModal = () => {
    modal?.classList.remove("is-open");
    modal?.setAttribute("aria-hidden", "true");
  };

  document.querySelector("[data-modal-open]")?.addEventListener("click", openModal);
  document.querySelectorAll("[data-modal-close]").forEach((button) => button.addEventListener("click", closeModal));

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input[type='text']");
    const textarea = form.querySelector("textarea");
    if (!input.value.trim() || !textarea.value.trim()) {
      toast("Заполните тему и текст скрипта");
      form.classList.add("is-submitting");
      setTimeout(() => form.classList.remove("is-submitting"), 450);
      return;
    }

    const key = `custom-${Date.now()}`;
    objections[key] = {
      title: input.value.trim(),
      answer: textarea.value.trim(),
      question: "Уточните контекст и причину возражения клиента.",
      next: "Согласуйте следующий шаг и сохраните результат в карточке."
    };
    const tag = document.createElement("button");
    tag.type = "button";
    tag.dataset.objection = key;
    tag.textContent = input.value.trim();
    document.querySelector(".objection-tags")?.append(tag);
    selectObjection(key);
    form.classList.add("is-submitting");
    toast("Новый скрипт создан");
    setTimeout(() => {
      form.classList.remove("is-submitting");
      closeModal();
    }, 420);
  });

  document.querySelector(".objection-tags")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-objection]");
    if (button) selectObjection(button.dataset.objection);
  });

  document.querySelector("[data-copy-answer]")?.addEventListener("click", async (event) => {
    const answer = document.querySelector("[data-objection-answer]")?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(answer);
      event.currentTarget.textContent = "Скопировано";
      setTimeout(() => { event.currentTarget.textContent = "Скопировать"; }, 1400);
      toast("Ответ скопирован");
    } catch {
      toast("Ответ выделен для копирования");
    }
  });

  document.querySelectorAll("[data-script-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-script-tab]").forEach((tab) => tab.classList.toggle("is-active", tab === button));
      document.querySelectorAll("[data-script-content]").forEach((content) => {
        content.classList.toggle("is-active", content.dataset.scriptContent === button.dataset.scriptTab);
      });
      setText(".scripts-table-head h3", button.dataset.scriptTab === "history" ? "История действий" : "Возражения клиента");
    });
  });

  document.querySelectorAll(".script-access label").forEach((label) => {
    const radio = label.querySelector("input");
    label.classList.toggle("is-selected", radio?.checked);
    radio?.addEventListener("change", () => {
      document.querySelectorAll(".script-access label").forEach((item) => {
        item.classList.toggle("is-selected", item.querySelector("input")?.checked);
      });
      toast(`Доступ: ${label.querySelector("strong")?.textContent}`);
    });
  });

  document.querySelectorAll(".script-history-row").forEach((row) => {
    row.tabIndex = 0;
    const select = () => {
      document.querySelectorAll(".script-history-row").forEach((item) => item.classList.toggle("is-selected", item === row));
      toast(row.querySelector("strong")?.textContent || "Запись истории открыта");
    };
    row.addEventListener("click", select);
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        select();
      }
    });
  });

  function selectObjection(key) {
    const data = objections[key];
    if (!data) return;
    document.querySelectorAll("[data-objection]").forEach((button) => button.classList.toggle("is-active", button.dataset.objection === key));
    setText("[data-objection-title]", data.title);
    setText("[data-objection-answer]", data.answer);
    setText("[data-objection-question]", data.question);
    setText("[data-objection-next]", data.next);
    const row = document.querySelector(".objection-row--active");
    row?.classList.remove("is-refreshing");
    void row?.offsetWidth;
    row?.classList.add("is-refreshing");
  }
}

function initReportsScreen(toast) {
  let periodIndex = 0;
  const dateButton = document.querySelector("[data-date-cycle]");
  const reportTabs = [...document.querySelectorAll("[data-report-tab]")];
  const managerRows = [...document.querySelectorAll("[data-manager-kpi]")];

  dateButton?.addEventListener("click", () => {
    periodIndex = (periodIndex + 1) % reportPeriods.length;
    const period = reportPeriods[periodIndex];
    setText("[data-date-cycle] span", period.label);
    Object.entries(period).forEach(([key, value]) => {
      if (key !== "label") animateText(document.querySelector(`[data-metric="${key}"]`), value);
    });
    restartKpiAnimation();
    toast(`Период: ${period.label}`);
  });

  document.querySelector("[data-export-report]")?.addEventListener("click", () => {
    const period = reportPeriods[periodIndex];
    const csv = [
      "Показатель,Значение",
      `Период,${period.label}`,
      `Всего звонков,${period.calls.replace(" ", "")}`,
      `Выполнение KPI,${period.reach}`,
      `Средняя длительность,${period.duration}`
    ].join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "zvoneks-report.csv";
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    toast("Отчёт экспортирован");
  });

  managerRows.forEach((row) => {
    const select = () => {
      managerRows.forEach((item) => item.classList.toggle("is-selected", item === row));
      setText("[data-report-manager]", row.dataset.managerKpi);
      setText("[data-report-score]", row.dataset.managerScore);
      document.querySelector(".report-drilldown")?.animate(
        [{ opacity: 0.65, transform: "translateX(4px)" }, { opacity: 1, transform: "translateX(0)" }],
        { duration: 240, easing: "ease-out" }
      );
      toast(`Отчёт менеджера: ${row.dataset.managerKpi}`);
    };
    row.addEventListener("click", select);
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        select();
      }
    });
  });

  reportTabs.forEach((button) => {
    button.addEventListener("click", () => {
      reportTabs.forEach((tab) => tab.classList.toggle("is-active", tab === button));
      document.querySelectorAll("[data-report-panel]").forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.reportPanel === button.dataset.reportTab);
      });
      toast(button.dataset.reportTab === "calls" ? "Открыты звонки менеджера" : "Открыта аналитика по этапам сделки");
    });
  });

  document.querySelectorAll("[data-record-play]").forEach((button) => {
    let timer;
    let seconds = 0;
    button.addEventListener("click", () => {
      const playing = button.classList.toggle("is-playing");
      document.querySelectorAll("[data-record-play]").forEach((item) => {
        if (item !== button) item.classList.remove("is-playing");
      });
      clearInterval(timer);
      if (!playing) {
        button.querySelector("span").textContent = "▶";
        toast("Прослушивание остановлено");
        return;
      }
      button.querySelector("span").textContent = "Ⅱ";
      timer = setInterval(() => {
        seconds += 1;
        button.setAttribute("aria-label", `Идёт звонок ${formatTime(seconds)}`);
      }, 1000);
      toast("Включена запись разговора");
    });
  });

  document.querySelector("[data-kpi-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const title = form.querySelector('input[type="text"]')?.value.trim();
    const plan = form.querySelector('input[type="number"]')?.value;
    if (!title || !plan) {
      toast("Заполните название и план KPI");
      return;
    }
    form.classList.remove("is-created");
    void form.offsetWidth;
    form.classList.add("is-created");
    form.querySelector('button[type="submit"]').textContent = "KPI создан";
    setTimeout(() => {
      form.querySelector('button[type="submit"]').textContent = "Создать KPI";
      form.classList.remove("is-created");
    }, 1800);
    toast(`KPI «${title}» создан: план ${plan}`);
  });

  function restartKpiAnimation() {
    const workspace = document.querySelector(".kpi-workspace");
    workspace?.classList.remove("is-refreshing");
    void workspace?.offsetWidth;
    workspace?.classList.add("is-refreshing");
  }
}

function initTasksScreen(toast) {
  const list = document.querySelector(".task-list");
  const filters = [...document.querySelectorAll("[data-task-filter]")];
  const typeFilters = [...document.querySelectorAll("[data-task-type]")];
  const taskModal = document.querySelector("[data-task-modal]");
  const activeTypes = new Set();
  let currentFilter = "today";

  const render = (filter) => {
    currentFilter = filter;
    const heading = list?.querySelector(".panel-heading");
    list?.querySelectorAll("[data-task]").forEach((task) => task.remove());
    (taskSets[filter] || []).forEach((task, index) => {
      list?.append(createTaskElement(task, filter === "done", index === 0));
    });
    if (heading) {
      const labels = { today: "Сегодня, 14 июня", overdue: "Просроченные задачи", upcoming: "Предстоящие задачи", done: "Выполненные задачи" };
      heading.querySelector("small").textContent = labels[filter];
    }
    applyTypeFilters();
    updateProgress();
    selectTask(list?.querySelector("[data-task]:not(.is-filtered-out)"));
  };

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((item) => item.classList.toggle("is-active", item === button));
      render(button.dataset.taskFilter);
    });
  });

  list?.addEventListener("click", (event) => {
    const check = event.target.closest("[data-task-check]");
    const task = event.target.closest("[data-task]");
    if (!task) return;
    if (check) {
      event.stopPropagation();
      toggleTask(task, toast);
      updateProgress();
      return;
    }
    selectTask(task);
  });

  document.querySelector("[data-task-complete]")?.addEventListener("click", () => {
    const selected = list?.querySelector("[data-task].is-selected");
    if (selected) {
      toggleTask(selected, toast, true);
      updateProgress();
    }
  });

  document.querySelector("[data-task-call]")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    const calling = button.classList.toggle("is-calling");
    const label = button.querySelector("[data-task-call-label]");
    if (label) label.textContent = calling ? "Звонок идёт..." : "Позвонить клиенту";
    toast(calling ? "Звонок клиенту начат" : "Звонок завершён");
  });

  document.querySelector("[data-add-task]")?.addEventListener("click", () => {
    if (currentFilter !== "today") {
      filters.find((button) => button.dataset.taskFilter === "today")?.click();
    }
    taskModal?.classList.add("is-open");
    taskModal?.setAttribute("aria-hidden", "false");
    setTimeout(() => taskModal?.querySelector('input[name="title"]')?.focus(), 180);
  });

  document.querySelectorAll("[data-task-modal-close]").forEach((button) => {
    button.addEventListener("click", () => closeTaskModal());
  });

  taskModal?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const title = form.elements.title.value.trim();
    const person = form.elements.person.value.trim();
    const time = form.elements.time.value;
    const note = form.elements.note.value.trim();
    if (!title || !person || !time) {
      toast("Заполните задачу, клиента и срок");
      return;
    }
    const task = [title, person, "Карточка клиента", `Сегодня, ${time}`, note || "Задача создана менеджером вручную.", "Вручную, только что"];
    taskSets.today.unshift(task);
    const element = createTaskElement(task, false, true);
    element.classList.add("is-new");
    list?.querySelector(".panel-heading")?.insertAdjacentElement("afterend", element);
    applyTypeFilters();
    updateProgress();
    selectTask(element);
    closeTaskModal();
    toast("Ручная задача добавлена");
  });

  typeFilters.forEach((filter) => {
    const toggle = () => {
      const type = filter.dataset.taskType;
      if (activeTypes.has(type)) activeTypes.delete(type);
      else activeTypes.add(type);
      filter.classList.toggle("is-active", activeTypes.has(type));
      filter.setAttribute("aria-pressed", String(activeTypes.has(type)));
      applyTypeFilters();
      const firstVisible = list?.querySelector("[data-task]:not(.is-filtered-out)");
      if (firstVisible) selectTask(firstVisible);
      updateProgress();
      toast(activeTypes.size ? "Фильтр задач применён" : "Показаны все типы задач");
    };
    filter.addEventListener("click", toggle);
    filter.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });
  });

  document.addEventListener("task:added", (event) => {
    if (currentFilter !== "today" || !event.detail) return;
    const element = createTaskElement(event.detail, false, true);
    element.classList.add("is-new");
    list?.querySelector(".panel-heading")?.insertAdjacentElement("afterend", element);
    applyTypeFilters();
    updateProgress();
    selectTask(element);
  });

  render("today");

  function selectTask(task) {
    if (!task) return;
    list?.querySelectorAll("[data-task]").forEach((item) => item.classList.toggle("is-selected", item === task));
    setText("[data-task-detail-title]", task.dataset.title);
    setText("[data-task-person]", task.dataset.person);
    setText("[data-task-company]", task.dataset.company);
    setText("[data-task-time]", task.dataset.time);
    setText("[data-task-note]", task.dataset.note);
    setText("[data-task-avatar]", initials(task.dataset.person));
    setText("[data-task-source]", task.dataset.source);
    setText("[data-task-tag]", task.dataset.tag);
    document.querySelector(".task-detail")?.animate(
      [{ opacity: 0.6, transform: "translateX(5px)" }, { opacity: 1, transform: "translateX(0)" }],
      { duration: 240, easing: "ease-out" }
    );
  }

  function closeTaskModal() {
    taskModal?.classList.remove("is-open");
    taskModal?.setAttribute("aria-hidden", "true");
  }

  function applyTypeFilters() {
    list?.querySelectorAll("[data-task]").forEach((task) => {
      task.classList.toggle("is-filtered-out", activeTypes.size > 0 && !activeTypes.has(task.dataset.taskType));
    });
  }

  function updateProgress() {
    const visible = [...(list?.querySelectorAll("[data-task]:not(.is-filtered-out)") ?? [])];
    const complete = visible.filter((task) => task.classList.contains("is-complete")).length;
    const progress = list?.querySelector(".progress-pill");
    if (progress) progress.textContent = `${complete} из ${visible.length} выполнено`;
  }
}

function createTaskElement(task, complete = false, selected = false) {
  const [title, person, company, time, note, source] = task;
  const automatic = source
    ? source.toLowerCase().startsWith("автомат")
    : /пропущ|перезвонить клиенту/i.test(`${title} ${note}`);
  const taskSource = source || (automatic ? "Автоматически после пропущенного звонка" : "Вручную менеджером");
  const article = document.createElement("article");
  article.className = `task-item${complete ? " is-complete" : ""}${selected ? " is-selected" : ""}`;
  article.dataset.task = "";
  article.dataset.title = title;
  article.dataset.person = person;
  article.dataset.company = company;
  article.dataset.time = time;
  article.dataset.note = note;
  article.dataset.taskType = inferTaskType(title);
  article.dataset.source = taskSource;
  article.dataset.tag = automatic ? "Автозадача после пропущенного" : "Ручная задача";

  const check = document.createElement("button");
  check.type = "button";
  check.dataset.taskCheck = "";
  check.setAttribute("aria-label", "Выполнить задачу");
  if (complete) check.append(createCheckIcon());

  const content = document.createElement("div");
  const strong = document.createElement("strong");
  const paragraph = document.createElement("p");
  strong.textContent = title;
  paragraph.textContent = `${person} · ${automatic ? "создана автоматически" : "создана вручную"}`;
  content.append(strong, paragraph);

  const timeNode = document.createElement("time");
  timeNode.textContent = time.replace("Сегодня, ", "");
  article.append(check, content, timeNode);
  return article;
}

function inferTaskType(title) {
  const normalized = title.toLowerCase();
  if (/предлож|кп|договор/.test(normalized)) return "proposal";
  if (/встреч|демонстрац/.test(normalized)) return "meeting";
  return "call";
}

function toggleTask(task, toast, forceComplete = false) {
  const complete = forceComplete || !task.classList.contains("is-complete");
  task.classList.toggle("is-complete", complete);
  const check = task.querySelector("[data-task-check]");
  check.replaceChildren(...(complete ? [createCheckIcon()] : []));
  toast(complete ? "Задача выполнена" : "Задача возвращена в работу");
}

function createCheckIcon() {
  const namespace = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(namespace, "svg");
  const path = document.createElementNS(namespace, "path");
  svg.setAttribute("class", "ui-icon");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  path.setAttribute("d", "m5 12 4 4L19 6");
  path.setAttribute("stroke", "currentColor");
  path.setAttribute("stroke-width", "2");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  svg.append(path);
  return svg;
}

function initAiScreen(toast) {
  const button = document.querySelector("[data-audio-toggle]");
  const wave = document.querySelector(".audio-wave");
  const time = document.querySelector("[data-audio-time]");
  const voiceStatus = document.querySelector("[data-voice-status]");
  const voiceControls = document.querySelector(".voice-controls");
  const phraseNodes = [...document.querySelectorAll(".transcript-panel .phrase")];
  const synthesis = window.speechSynthesis;
  const canSpeak = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  let seconds = 0;
  let timer;
  let currentPhrase = 0;
  let isPaused = false;
  let isSpeaking = false;
  let voices = [];

  const updateVoices = () => {
    voices = synthesis?.getVoices().filter((voice) => voice.lang.toLowerCase().startsWith("ru")) ?? [];
  };

  updateVoices();
  synthesis?.addEventListener?.("voiceschanged", updateVoices);

  button?.addEventListener("click", () => {
    if (!canSpeak) {
      toggleVisualFallback();
      toast("Голосовой движок недоступен, включена демонстрация");
      return;
    }

    if (isSpeaking && !isPaused) {
      synthesis.pause();
      isPaused = true;
      setPlaybackState(false, "Пауза");
      stopTimer();
      toast("Озвучивание приостановлено");
      return;
    }

    if (isSpeaking && isPaused) {
      synthesis.resume();
      isPaused = false;
      setPlaybackState(true, "Говорит");
      startTimer();
      toast("Озвучивание продолжено");
      return;
    }

    currentPhrase = 0;
    seconds = 0;
    if (time) time.textContent = "00:00";
    isSpeaking = true;
    isPaused = false;
    synthesis.cancel();
    setPlaybackState(true, "Говорит");
    startTimer();
    speakPhrase();
    toast("Включено голосовое озвучивание");
  });

  document.querySelectorAll(".insight-card").forEach((card) => {
    card.tabIndex = 0;
    const toggle = () => card.classList.toggle("is-expanded");
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });
  });

  phraseNodes.forEach((phrase, index) => {
    phrase.tabIndex = 0;
    phrase.setAttribute("role", "button");
    const playPhrase = () => {
      if (!canSpeak) {
        phraseNodes.forEach((node, nodeIndex) => node.classList.toggle("is-current", nodeIndex === index));
        toast("Выбрана фраза расшифровки");
        return;
      }
      synthesis.cancel();
      currentPhrase = index;
      seconds = parseTranscriptTime(phrase.querySelector(":scope > span")?.textContent);
      if (time) time.textContent = formatTime(seconds);
      isSpeaking = true;
      isPaused = false;
      setPlaybackState(true, "Говорит");
      startTimer();
      speakPhrase();
      toast("Озвучивается выбранная фраза");
    };
    phrase.addEventListener("click", playPhrase);
    phrase.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        playPhrase();
      }
    });
  });

  document.querySelectorAll(".score-line").forEach((line) => {
    line.tabIndex = 0;
    line.setAttribute("role", "button");
    const select = () => {
      document.querySelectorAll(".score-line").forEach((item) => item.classList.toggle("is-selected", item === line));
      const score = line.querySelector("strong")?.textContent.replace("%", "") || "0";
      setText(".score-ring strong", score);
      toast(`Оценка «${line.querySelector("span")?.textContent}»: ${score}%`);
    };
    line.addEventListener("click", select);
    line.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        select();
      }
    });
  });

  const aiResult = document.querySelector(".ai-result");
  if (aiResult) {
    aiResult.tabIndex = 0;
    aiResult.setAttribute("role", "button");
    const confirm = () => {
      const confirmed = aiResult.classList.toggle("is-confirmed");
      aiResult.querySelector("span").textContent = confirmed ? "Следующее действие подтверждено" : "Итог звонка";
      toast(confirmed ? "Демонстрация добавлена в задачи" : "Подтверждение отменено");
    };
    aiResult.addEventListener("click", confirm);
    aiResult.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        confirm();
      }
    });
  }

  document.addEventListener("ai:stop", () => stopSpeech(true));
  window.addEventListener("beforeunload", () => synthesis?.cancel());

  function speakPhrase() {
    if (!isSpeaking || currentPhrase >= phraseNodes.length) {
      stopSpeech(false);
      toast("Озвучивание завершено");
      return;
    }

    const phrase = phraseNodes[currentPhrase];
    const speaker = phrase.querySelector("strong")?.textContent.trim() ?? "";
    const phraseText = phrase.querySelector("p")?.textContent.trim() ?? "";
    const utterance = new SpeechSynthesisUtterance(`${speaker}. ${phraseText}`);
    utterance.lang = "ru-RU";
    utterance.rate = 0.92;
    utterance.pitch = speaker === "Клиент" ? 0.9 : 1.05;
    utterance.volume = 1;

    if (voices.length) {
      utterance.voice = voices[currentPhrase % Math.min(voices.length, 2)];
    }

    phraseNodes.forEach((node, index) => node.classList.toggle("is-current", index === currentPhrase));

    utterance.onend = () => {
      if (!isSpeaking || isPaused) return;
      currentPhrase += 1;
      speakPhrase();
    };
    utterance.onerror = (event) => {
      if (event.error === "interrupted" || event.error === "canceled") return;
      stopSpeech(false);
      toast("Не удалось запустить голос браузера");
    };
    synthesis.speak(utterance);
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      seconds += 1;
      if (time) time.textContent = formatTime(seconds);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }

  function setPlaybackState(playing, status) {
    button?.classList.toggle("is-playing", playing);
    wave?.classList.toggle("is-playing", playing);
    voiceControls?.classList.toggle("is-speaking", playing);
    if (voiceStatus) voiceStatus.textContent = status;
    button?.setAttribute("aria-label", playing ? "Поставить озвучивание на паузу" : "Озвучить диалог");
  }

  function stopSpeech(resetTime) {
    synthesis?.cancel();
    isSpeaking = false;
    isPaused = false;
    currentPhrase = 0;
    stopTimer();
    setPlaybackState(false, "Голос");
    phraseNodes.forEach((phrase) => phrase.classList.remove("is-current"));
    if (resetTime) {
      seconds = 0;
      if (time) time.textContent = "00:00";
    }
  }

  function toggleVisualFallback() {
    const playing = button?.classList.toggle("is-playing") ?? false;
    wave?.classList.toggle("is-playing", playing);
    voiceControls?.classList.toggle("is-speaking", playing);
    if (voiceStatus) voiceStatus.textContent = playing ? "Демо" : "Голос";
    stopTimer();
    if (playing) startTimer();
  }

  function parseTranscriptTime(value = "00:00") {
    const [minutes, secondsPart] = value.split(":").map(Number);
    return (minutes || 0) * 60 + (secondsPart || 0);
  }
}

function animateText(node, value) {
  if (!node) return;
  node.animate(
    [{ opacity: 0, transform: "translateY(4px)" }, { opacity: 1, transform: "translateY(0)" }],
    { duration: 320, easing: "ease-out" }
  );
  node.textContent = value;
}

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const rest = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${rest}`;
}

function initials(name = "") {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
