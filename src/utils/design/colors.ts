import { THEME_MODES } from "./ThemeMode";

export const SEMANTIC_COLORS = {
  success: "#4caf50",
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3",
} as const;

export type SemanticColorName = keyof typeof SEMANTIC_COLORS;

export const TEXT_COLORS = {
  [THEME_MODES.Dark]: {
    primary: "#ffffff", // 主要文本
    secondary: "#cccccc", // 次要文本
    tertiary: "#999999", // 三级文本
    quaternary: "#666666", // 最弱文本
    disabled: "#4a4a4a", // 禁用文本
  },
  [THEME_MODES.Light]: {
    primary: "#212121", // 主要文本
    secondary: "#424242", // 次要文本
    tertiary: "#616161", // 三级文本
    quaternary: "#9e9e9e", // 最弱文本
    disabled: "#bdbdbd", // 禁用文本
  },
} as const;

export const BACKGROUND_COLORS = {
  [THEME_MODES.Dark]: {
    primary: "#181818", // 主背景
    secondary: "#363636ff", // 卡片/面板背景
  },
  [THEME_MODES.Light]: {
    primary: "#ffffff", // 主背景
    secondary: "#f8f9fa", // 卡片/面板背景
  },
} as const;

export const BORDER_COLORS = {
  [THEME_MODES.Dark]: {
    primary: "rgba(255, 255, 255, 0.55)",
    secondary: "rgba(255, 255, 255, 0.25)",
    tertiary: "rgba(255, 255, 255, 0.15)",
    quaternary: "rgba(255, 255, 255, 0.05)",
  },
  [THEME_MODES.Light]: {
    primary: "rgba(0, 0, 0, 0.55)",
    secondary: "rgba(0, 0, 0, 0.25)",
    tertiary: "rgba(0, 0, 0, 0.15)",
    quaternary: "rgba(0, 0, 0, 0.05)",
  },
} as const;
