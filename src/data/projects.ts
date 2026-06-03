export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectEntry {
  name: string;
  eyebrow: string;
  summary: string;
  accent: string;
  icon: string;
  tags: string[];
  links: ProjectLink[];
}

export const featuredProjects: ProjectEntry[] = [
  {
    name: "QCalendar",
    eyebrow: "App Extension + Vue Component",
    summary:
      "Calendar views, scheduling surfaces, and date-driven UI patterns as both a Quasar app extension and a standalone Vue component.",
    accent: "#26d6a8",
    icon: "event",
    tags: ["calendar", "scheduling", "Vue component"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/quasarframework/quasar-ui-qcalendar",
      },
    ],
  },
  {
    name: "QScroller",
    eyebrow: "Quasar App Extension",
    summary:
      "Wheel-style string, date, time, date-time, and range inputs with a shared API and docs system.",
    accent: "#d96d25",
    icon: "view_list",
    tags: ["pickers", "forms", "docs"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/quasarframework/quasar-ui-qscroller",
      },
    ],
  },
  {
    name: "QMarkdown",
    eyebrow: "Quasar App Extension",
    summary:
      "Markdown rendering for Quasar projects, including utilities that support richer documentation flows.",
    accent: "#66d9ef",
    icon: "article",
    tags: ["markdown", "docs", "content"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/quasarframework/quasar-ui-qmarkdown",
      },
    ],
  },
  {
    name: "QIconPicker",
    eyebrow: "Quasar App Extension",
    summary:
      "Searchable icon selection for forms, builders, and admin tools that need a friendly icon workflow.",
    accent: "#2bc4e8",
    icon: "ads_click",
    tags: ["icons", "search", "forms"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/quasarframework/quasar-ui-qiconpicker",
      },
    ],
  },
  {
    name: "QOverlay",
    eyebrow: "Quasar App Extension",
    summary: "Overlay primitives and helpers for layered UI behaviors inside Quasar applications.",
    accent: "#f2c94c",
    icon: "layers",
    tags: ["overlay", "layers", "UI"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/quasarframework/quasar-ui-qoverlay",
      },
    ],
  },
  {
    name: "QWindow",
    eyebrow: "Quasar App Extension",
    summary: "Windowing patterns for Quasar interfaces that need draggable, composable panels.",
    accent: "#9b8cff",
    icon: "web_asset",
    tags: ["windows", "desktop", "Quasar"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/quasarframework/quasar-ui-qwindow",
      },
    ],
  },
  {
    name: "QMediaPlayer",
    eyebrow: "Quasar App Extension",
    summary: "Media playback controls and presentation patterns built for Quasar applications.",
    accent: "#ff7a90",
    icon: "play_circle",
    tags: ["media", "player", "components"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/quasarframework/quasar-ui-qmediaplayer",
      },
    ],
  },
  {
    name: "QFlashcard",
    eyebrow: "Quasar App Extension",
    summary:
      "Flashcard UI tools for learning flows, study interfaces, and compact knowledge checks.",
    accent: "#ffb86c",
    icon: "style",
    tags: ["learning", "cards", "education"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/quasarframework/quasar-ui-qflashcard",
      },
    ],
  },
  {
    name: "md-plugins + Q-Press",
    eyebrow: "Docs Tooling",
    summary:
      "Shared markdown, example, theme, and landing-page tooling for Quasar documentation sites.",
    accent: "#8be9fd",
    icon: "auto_stories",
    tags: ["docs", "markdown", "workflow"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/hawkeye64/md-plugins",
      },
    ],
  },
  {
    name: "Icon Explorer",
    eyebrow: "Application",
    summary: "A searchable catalog experience for SVG icon packages, backed by generated metadata.",
    accent: "#7ee787",
    icon: "travel_explore",
    tags: ["icons", "catalog", "app"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/hawkeye64/iconexplorer.app",
      },
    ],
  },
  {
    name: "Quasar Extras SVG Icons",
    eyebrow: "Icon Library",
    summary:
      "Generated SVG icon exports and readable import paths for Quasar icon-heavy applications.",
    accent: "#a78bfa",
    icon: "favorite",
    tags: ["icons", "exports", "TypeScript"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/hawkeye64/quasar-extras-svg-icons",
      },
    ],
  },
  {
    name: "Electron File Explorer",
    eyebrow: "Application",
    summary:
      "A Quasar + Electron experiment for file browsing, desktop app workflow, and migration testing.",
    accent: "#5eead4",
    icon: "folder_open",
    tags: ["Electron", "desktop", "Quasar"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/hawkeye64/electron-quasar-file-explorer-v2",
      },
    ],
  },
];

export const projectHighlights = [
  {
    title: "App Extension Migration",
    text: "Modernizing the extension family for Vue 3, Quasar 2/3 beta, cleaner builds, and docs that can ship examples without drama.",
    icon: "rocket_launch",
  },
  {
    title: "Documentation Systems",
    text: "Q-Press and md-plugins keep landing pages, markdown transforms, examples, and theme behavior consistent across the ecosystem.",
    icon: "schema",
  },
  {
    title: "Icon Workflows",
    text: "Icon Explorer and quasar-extras-svg-icons turn giant icon catalogs into searchable, importable, app-ready packages.",
    icon: "category",
  },
];
