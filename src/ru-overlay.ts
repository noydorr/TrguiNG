/**
 * TrguiNG — Russian language layer (съёмный слой локализации)
 * --------------------------------------------------------------
 * Отдельный слой русского языка для TrguiNG, который НЕ трогает компоненты.
 * Работает как рантайм-оверлей: ловит текст в DOM (MutationObserver) и
 * подменяет английские строки на русские по словарю RU ниже.
 *
 * Интеграция: одна строка в src/index.tsx  ->  import "./ru-overlay";
 * Переключение: плавающая кнопка RU/EN в левом нижнем углу.
 *               Состояние хранится в localStorage["trguing-lang"].
 *
 * Это AGPL-проект; данный файл распространяется на тех же условиях.
 */

/* eslint-disable */

// ---- Словарь EN -> RU (точное совпадение по тексту узла/атрибута) ----------
const RU: Record<string, string> = {
    "<No labels>": "<Нет меток>",
    "API error": "Ошибка API",
    "Active": "Активные",
    "Add .part extension to incomplete files": "Добавлять расширение .part к незавершённым файлам",
    "Add default list": "Добавить список по умолчанию",
    "Add magnet link": "Добавить магнет-ссылку",
    "Add torrent": "Добавить торрент",
    "Add torrent by magnet link or URL": "Добавить торрент по магнет-ссылке или URL",
    "Add torrent file": "Добавить торрент-файл",
    "Added on": "Добавлен",
    "Address": "Адрес",
    "All": "Все",
    "All Torrents": "Все торренты",
    "Alternate": "Альтернативный",
    "Animated": "Анимированные",
    "Announce URL": "URL анонса",
    "Appearance": "Внешний вид",
    "Application Settings": "Настройки приложения",
    "Apply alternate bandwidth settings automatically": "Применять альтернативные настройки полосы автоматически",
    "Are you sure you want to remove following torrents?": "Удалить следующие торренты?",
    "Associate application": "Связать приложение",
    "Background": "Фон",
    "Bandwidth": "Полоса пропускания",
    "Bandwidth group": "Группа полосы пропускания",
    "Browse": "Обзор",
    "Build date": "Дата сборки",
    "Calculating sizes...": "Подсчёт размеров...",
    "Cancel": "Отмена",
    "Change layout": "Изменить расположение",
    "Clear": "Очистить",
    "Client": "Клиент",
    "Collapse all": "Свернуть всё",
    "Colorful": "Цветные",
    "Comment": "Комментарий",
    "Compact Directories": "Компактные каталоги",
    "Completed": "Завершено",
    "Completed on": "Завершён",
    "Configure servers": "Настроить серверы",
    "Connect": "Подключиться",
    "Connection": "Подключение",
    "Consider torrents as stalled when idle for": "Считать торренты застрявшими при простое в течение",
    "Country": "Страна",
    "Cumulative": "Суммарно",
    "Custom date/time format": "Свой формат даты/времени",
    "Days:": "Дни:",
    "Default download folder (server setting)": "Папка загрузки по умолчанию (настройка сервера)",
    "Default tracker list": "Список трекеров по умолчанию",
    "Delete successfully added torrent files": "Удалять успешно добавленные торрент-файлы",
    "Delete torrent data": "Удалить данные торрента",
    "Directories": "Каталоги",
    "Directory": "Каталог",
    "Disk cache size": "Размер дискового кэша",
    "Done": "Готово",
    "Down speed": "Скорость загрузки",
    "Download": "Загрузка",
    "Download queue size": "Размер очереди загрузки",
    "Downloaded": "Загружено",
    "Downloading": "Загружается",
    "Downloads": "Загрузки",
    "ETA": "Осталось",
    "Edit torrent labels": "Изменить метки торрента",
    "Edit torrent properties": "Изменить свойства торрента",
    "Edit torrent trackers": "Изменить трекеры торрента",
    "Enable DHT": "Включить DHT",
    "Enable UPnP port forwarding": "Включить проброс портов UPnP",
    "Enable blocklist:": "Включить чёрный список:",
    "Enable local discovery": "Включить локальное обнаружение",
    "Enable peer exchange": "Включить обмен пирами (PEX)",
    "Enable uTP": "Включить uTP",
    "Encrypted": "Шифрование",
    "Encryption:": "Шифрование:",
    "Enter new labels for": "Введите новые метки для",
    "Enter new location for": "Введите новое расположение для",
    "Error": "Ошибка",
    "Expand all": "Развернуть всё",
    "Export": "Экспорт",
    "Failed to load session": "Не удалось загрузить сессию",
    "File": "Файл",
    "File count": "Кол-во файлов",
    "Files added": "Файлы добавлены",
    "Flags": "Флаги",
    "Font": "Шрифт",
    "Force start": "Принудительный запуск",
    "From": "От",
    "From:": "От:",
    "Frontend": "Интерфейс",
    "General": "Общие",
    "Generate": "Создать",
    "Global peer limit:": "Глобальный лимит пиров:",
    "Have": "Имеется",
    "High": "Высокий",
    "High priority": "Высокий приоритет",
    "Honor session upload limit": "Учитывать лимит отдачи сессии",
    "IP Geolocation by DB-IP": "Геолокация IP от DB-IP",
    "Ignored tracker prefixes": "Игнорируемые префиксы трекеров",
    "Import": "Импорт",
    "Inactive": "Неактивные",
    "Incoming port:": "Входящий порт:",
    "Integrations": "Интеграции",
    "Interface": "Интерфейс",
    "Interface settings": "Настройки интерфейса",
    "Labels": "Метки",
    "Labels feature requires transmission 3.0 or later": "Метки доступны начиная с transmission 3.0",
    "Last active": "Последняя активность",
    "Launch on startup": "Запускать при старте системы",
    "Layout": "Расположение",
    "Let daemon pick a random port": "Позволить демону выбрать случайный порт",
    "Link": "Ссылка",
    "Low": "Низкий",
    "Low priority": "Низкий приоритет",
    "Magnet links": "Магнет-ссылки",
    "Magnetizing": "Получение метаданных",
    "Mark all files unwanted": "Отметить все файлы ненужными",
    "Mark all files wanted": "Отметить все файлы нужными",
    "Max number of saved download directories": "Макс. число сохранённых каталогов загрузки",
    "Maximum download speed": "Максимальная скорость загрузки",
    "Maximum download speed (KB/s):": "Максимальная скорость загрузки (КБ/с):",
    "Maximum upload speed": "Максимальная скорость отдачи",
    "Maximum upload speed (KB/s):": "Максимальная скорость отдачи (КБ/с):",
    "Metadata": "Метаданные",
    "Miscellaneous": "Прочее",
    "Move": "Переместить",
    "Move down": "Вниз",
    "Move down in queue": "Ниже в очереди",
    "Move to bottom": "В конец",
    "Move to top": "В начало",
    "Move torrent (F6)": "Переместить торрент (F6)",
    "Move torrent data to new location": "Переместить данные торрента в новое место",
    "Move torrents": "Переместить торренты",
    "Move up": "Вверх",
    "Move up in queue": "Выше в очереди",
    "Move...": "Переместить...",
    "Name": "Имя",
    "Network": "Сеть",
    "New torrent priority": "Приоритет нового торрента",
    "New torrent start": "Запуск нового торрента",
    "Next update": "Следующее обновление",
    "Normal": "Обычный",
    "Normal priority": "Обычный приоритет",
    "Open": "Открыть",
    "Open folder": "Открыть папку",
    "Password": "Пароль",
    "Path": "Путь",
    "Path for incomplete files": "Путь для незавершённых файлов",
    "Pause": "Пауза",
    "Pause torrent (F4)": "Приостановить торрент (F4)",
    "Peer limit": "Лимит пиров",
    "Peers": "Пиры",
    "Percent": "Процент",
    "Piece count": "Кол-во частей",
    "Piece size": "Размер части",
    "Play sound": "Воспроизводить звук",
    "Polling": "Опрос",
    "Polling intervals and server settings (F9)": "Интервалы опроса и настройки сервера (F9)",
    "Port": "Порт",
    "Port is open": "Порт открыт",
    "Port unreachable": "Порт недоступен",
    "Preconfigured directories (one per line)": "Преднастроенные каталоги (по одному в строке)",
    "Preconfigured labels": "Преднастроенные метки",
    "Priority": "Приоритет",
    "Private": "Приватный",
    "Private torrent": "Приватный торрент",
    "Progress bars": "Индикаторы прогресса",
    "Properties...": "Свойства...",
    "Protocol": "Протокол",
    "Queue": "Очередь",
    "Queue position": "Позиция в очереди",
    "Ratio": "Рейтинг",
    "Reannounce": "Переанонсировать",
    "Recursive Directories": "Рекурсивные каталоги",
    "Register": "Зарегистрировать",
    "Register magnet protocol handler": "Зарегистрировать обработчик протокола magnet",
    "Remove": "Удалить",
    "Remove path": "Удалить путь",
    "Remove torrent (del)": "Удалить торрент (Del)",
    "Remove torrents": "Удалить торренты",
    "Remove...": "Удалить...",
    "Rename (F2)": "Переименовать (F2)",
    "Reset": "Сбросить",
    "Running": "Работает",
    "Save": "Сохранить",
    "Seed queue size": "Размер очереди раздачи",
    "Seed ratio": "Рейтинг раздачи",
    "Seeding time": "Время раздачи",
    "Seeds": "Сиды",
    "Select file or directory": "Выберите файл или каталог",
    "Sequential download": "Последовательная загрузка",
    "Server Settings": "Настройки сервера",
    "Server does not appear to be transmission daemon": "Сервер не похож на демон transmission",
    "Server rpc url": "RPC URL сервера",
    "Server statistics": "Статистика сервера",
    "Servers": "Серверы",
    "Session": "Сессия",
    "Sesssion count": "Счётчик за сессию",
    "Set labels (F7)": "Задать метки (F7)",
    "Set labels...": "Задать метки...",
    "Set priority": "Задать приоритет",
    "Set unwanted": "Отметить ненужным",
    "Set wanted": "Отметить нужным",
    "Show as tree": "Показать деревом",
    "Show global speeds": "Показывать общие скорости",
    "Show notifications for completed torrents": "Показывать уведомления о завершённых торрентах",
    "Show tray icon": "Показывать значок в трее",
    "Show version information": "Показать информацию о версии",
    "Size": "Размер",
    "Size left": "Осталось",
    "Size to download": "Размер к загрузке",
    "Skip add torrent dialog": "Пропускать диалог добавления торрента",
    "Sort download directories history alphabetically": "Сортировать историю каталогов по алфавиту",
    "Source (leave empty unless required by a private tracker)": "Источник (оставьте пустым, если не требуется приватным трекером)",
    "Source code": "Исходный код",
    "Start": "Запустить",
    "Start added torrents": "Запускать добавленные торренты",
    "Start torrent": "Запустить торрент",
    "Start torrent (F3)": "Запустить торрент (F3)",
    "Status": "Статус",
    "Status filters": "Фильтры по статусу",
    "Stop idle torrents after": "Останавливать простаивающие торренты через",
    "Stop seeding when inactive for": "Прекращать раздачу при простое в течение",
    "Stopped": "Остановлен",
    "Switch server": "Сменить сервер",
    "Test port": "Проверить порт",
    "Text color": "Цвет текста",
    "Theme": "Тема",
    "Toggle details": "Показать/скрыть детали",
    "Toggle filters": "Показать/скрыть фильтры",
    "Toggle search": "Показать/скрыть поиск",
    "Toggle tab strip": "Показать/скрыть панель вкладок",
    "Torrent": "Торрент",
    "Torrent already exists": "Торрент уже существует",
    "Torrent details": "Детали торрента",
    "Torrent name": "Имя торрента",
    "Torrents active": "Активные торренты",
    "Torrents inactive/minimized": "Неактивные/свёрнутые торренты",
    "Tracker": "Трекер",
    "Tracker downloads": "Загрузки с трекера",
    "Tracker list, one per line, empty line between tiers": "Список трекеров, по одному в строке, пустая строка между уровнями",
    "Tracker status": "Статус трекера",
    "Trackers": "Трекеры",
    "Trackers...": "Трекеры...",
    "Transfer": "Передача",
    "Transmission version 2.40 or higher is required.": "Требуется Transmission версии 2.40 или выше.",
    "Unregister": "Отменить регистрацию",
    "Up speed": "Скорость отдачи",
    "Update": "Обновить",
    "Update blocklist": "Обновить чёрный список",
    "Update intervals (sec)": "Интервалы обновления (сек)",
    "Uploaded": "Отдано",
    "Use alternate bandwidth settings": "Использовать альтернативные настройки полосы",
    "Use default seed ratio limit": "Использовать лимит рейтинга по умолчанию",
    "Use separate directory for incomplete files": "Использовать отдельный каталог для незавершённых файлов",
    "User name": "Имя пользователя",
    "Verify": "Проверить",
    "Version": "Версия",
    "Waiting": "Ожидание",
    "Web seed URLs, one per line": "URL веб-сидов, по одному в строке",
    "When closed": "При закрытии",
    "When minimized": "При сворачивании",
    "search files": "поиск файлов",
};

// ---- Движок перевода --------------------------------------------------------

const LANG_KEY = "trguing-lang";
const TRANSLATABLE_ATTRS = ["placeholder", "title", "aria-label", "alt"];
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "CODE", "PRE", "INPUT", "TEXTAREA"]);

// Узлы, которые уже обработаны, чтобы не гонять словарь повторно.
const seen = new WeakSet<Node>();

function isEnabled(): boolean {
    // По умолчанию слой ВКЛЮЧЁН (русский). Чтобы выключить — тумблер в углу.
    return (localStorage.getItem(LANG_KEY) ?? "ru") === "ru";
}

function translateText(node: Text): void {
    if (seen.has(node)) return;
    const parent = node.parentElement;
    if (parent !== null && SKIP_TAGS.has(parent.tagName)) return;
    const raw = node.nodeValue;
    if (raw === null) return;
    const trimmed = raw.trim();
    if (trimmed === "") return;
    const ru = RU[trimmed];
    if (ru !== undefined && ru !== trimmed) {
        // Сохраняем ведущие/замыкающие пробелы исходного узла.
        const lead = raw.slice(0, raw.indexOf(trimmed[0]));
        const tail = raw.slice(raw.lastIndexOf(trimmed[trimmed.length - 1]) + 1);
        node.nodeValue = lead + ru + tail;
    }
    seen.add(node);
}

function translateAttrs(el: Element): void {
    for (const attr of TRANSLATABLE_ATTRS) {
        const val = el.getAttribute(attr);
        if (val === null) continue;
        const trimmed = val.trim();
        const ru = RU[trimmed];
        if (ru !== undefined && ru !== trimmed) el.setAttribute(attr, ru);
    }
}

function walk(root: Node): void {
    if (root.nodeType === Node.TEXT_NODE) {
        translateText(root as Text);
        return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    const el = root as Element;
    if (SKIP_TAGS.has(el.tagName)) return;
    translateAttrs(el);
    const tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let n: Node | null = tw.currentNode;
    while (n !== null) {
        if (n.nodeType === Node.TEXT_NODE) {
            translateText(n as Text);
        } else if (n.nodeType === Node.ELEMENT_NODE) {
            const e = n as Element;
            if (SKIP_TAGS.has(e.tagName)) {
                // пропустить поддерево
            } else {
                translateAttrs(e);
            }
        }
        n = tw.nextNode();
    }
}

let scheduled = false;
const pending: Node[] = [];

function flush(): void {
    scheduled = false;
    const batch = pending.splice(0, pending.length);
    for (const node of batch) {
        try { walk(node); } catch { /* игнорируем единичные сбои узлов */ }
    }
}

function schedule(node: Node): void {
    pending.push(node);
    if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(flush);
    }
}

function startObserver(): void {
    const obs = new MutationObserver((mutations) => {
        for (const m of mutations) {
            if (m.type === "characterData") {
                const t = m.target as Text;
                seen.delete(t);
                schedule(t);
            } else if (m.type === "attributes" && m.target.nodeType === Node.ELEMENT_NODE) {
                translateAttrs(m.target as Element);
            } else {
                m.addedNodes.forEach((n) => { schedule(n); });
            }
        }
    });
    obs.observe(document.documentElement, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: TRANSLATABLE_ATTRS,
    });
}

// ---- Тумблер RU / EN --------------------------------------------------------

function mountToggle(): void {
    if (document.getElementById("trguing-lang-toggle") !== null) return;
    const ru = isEnabled();
    const btn = document.createElement("button");
    btn.id = "trguing-lang-toggle";
    btn.type = "button";
    btn.title = ru ? "Переключить на English" : "Switch to Russian";
    btn.textContent = ru ? "🌐 RU" : "🌐 EN";
    Object.assign(btn.style, {
        position: "fixed",
        left: "10px",
        bottom: "10px",
        zIndex: "2147483647",
        padding: "4px 10px",
        fontSize: "12px",
        fontWeight: "600",
        fontFamily: "system-ui, sans-serif",
        color: "#fff",
        background: ru ? "#2f73c9" : "#555",
        border: "none",
        borderRadius: "999px",
        cursor: "pointer",
        opacity: "0.78",
        boxShadow: "0 1px 4px rgba(0,0,0,0.35)",
        userSelect: "none",
    } as CSSStyleDeclaration);
    btn.addEventListener("mouseenter", () => { btn.style.opacity = "1"; });
    btn.addEventListener("mouseleave", () => { btn.style.opacity = "0.78"; });
    btn.addEventListener("click", () => {
        localStorage.setItem(LANG_KEY, ru ? "en" : "ru");
        // Самый надёжный способ вернуть оригинальные английские строки —
        // перезагрузить вебвью; при загрузке слой читает флаг из localStorage.
        location.reload();
    });
    document.body.appendChild(btn);
}

// ---- Запуск -----------------------------------------------------------------

function init(): void {
    mountToggle();
    if (!isEnabled()) return;
    walk(document.documentElement);
    startObserver();
}

export function installRuLayer(): void {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
}
