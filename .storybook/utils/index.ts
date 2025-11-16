import { BACKGROUND_COLORS, TEXT_COLORS, THEME_MODES } from "../../src/constants";
import { getSystemThemeMode } from "../../src/tools";

// ============================
// 样式注入（支持 Docs 页面 Dark Mode）
// ============================
export function injectDocsStyles(isDark: boolean) {
  const STYLE_ID = "sb-docs-dark-mode";
  let style = document.getElementById(STYLE_ID) as HTMLStyleElement;

  if (!style) {
    style = document.createElement("style");
    style.id = STYLE_ID;
    document.head.appendChild(style);
  }

  const [bg1, bg2] = isDark ? [BACKGROUND_COLORS.dark[1], BACKGROUND_COLORS.dark[2]] : ["white", "transparent"];
  const text = TEXT_COLORS[isDark ? THEME_MODES.DARK : THEME_MODES.LIGHT][1];

  style.innerHTML = `
    .sbdocs { background-color: ${bg2} !important; color: ${text} !important; }
    .sbdocs h1, .sbdocs h2, .sbdocs h3, .sbdocs h4, .sbdocs h5, .sbdocs h6,
    .sbdocs thead, .sbdocs tr, .sbdocs th, .sbdocs td { background-color: inherit !important; color: inherit; }
    .sbdocs p { background-color: transparent !important; color: inherit; }
    .sbdocs > ul > li { background-color: transparent !important; color: inherit !important; }
    .sbdocs table { background-color: ${bg1} !important; color: ${text} !important; }
    .sbdocs table  td > button { background-color: ${bg1} !important; color: ${text} !important; }
    .docs-story { background-color: ${bg2} !important; }
  `;
}

// ============================
// 获取当前 Dark Mode 状态（兼容多种来源）
// ============================
export function getCurrentDarkMode(): boolean {
  if (typeof window === "undefined") return false;

  // 1. 优先从 Storybook addon channel 读取（storybook-dark-mode 使用）
  try {
    const storybookTheme = localStorage.getItem("sb-addon-themes-3");
    if (storybookTheme) {
      const parsed = JSON.parse(storybookTheme);
      if (parsed.current === "dark") return true;
      if (parsed.current === "light") return false;
    }
  } catch {
    // ignore
  }

  // 2. 从 DOM class/attribute 读取
  const htmlElement = document.documentElement;
  if (htmlElement.classList.contains("dark") || htmlElement.getAttribute("data-theme") === "dark") {
    return true;
  }

  // 3. 回退到系统主题
  return getSystemThemeMode() === THEME_MODES.DARK;
}

// ============================
// 初始化样式监听器
// ============================
export function initDarkModeStyles() {
  if (typeof window === "undefined") return;

  // 立即注入
  injectDocsStyles(getCurrentDarkMode());

  // 监听 DOM 变化
  new MutationObserver(() => {
    injectDocsStyles(getCurrentDarkMode());
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["class", "data-theme"] });

  // 监听 localStorage 变化（跨标签页同步）
  window.addEventListener("storage", (e) => {
    if (e.key === "sb-addon-themes-3") {
      injectDocsStyles(getCurrentDarkMode());
    }
  });

  // 使用 setInterval 轮询（兜底方案，确保状态同步）
  setInterval(() => {
    injectDocsStyles(getCurrentDarkMode());
  }, 500);
}
