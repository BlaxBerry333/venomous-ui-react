import { ThemeMode } from "./ThemeMode";

export const SemanticColors = {
  success: "#4caf50",
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3",
} as const;

export const TextColors: Record<
  ThemeMode,
  Record<"primary" | "secondary" | "tertiary" | "quaternary" | "disabled", string>
> = {
  [ThemeMode.Dark]: {
    primary: "#ffffff", // 主要文本
    secondary: "#cccccc", // 次要文本
    tertiary: "#999999", // 三级文本
    quaternary: "#666666", // 最弱文本
    disabled: "#4a4a4a", // 禁用文本
  },
  [ThemeMode.Light]: {
    primary: "#212121", // 主要文本
    secondary: "#424242", // 次要文本
    tertiary: "#616161", // 三级文本
    quaternary: "#9e9e9e", // 最弱文本
    disabled: "#bdbdbd", // 禁用文本
  },
};

export const BackgroundColors: Record<ThemeMode, Record<"primary" | "secondary", string>> = {
  [ThemeMode.Dark]: {
    primary: "#181818", // 主背景
    secondary: "#242424", // 卡片/面板背景
  },
  [ThemeMode.Light]: {
    primary: "#ffffff", // 主背景
    secondary: "#f8f9fa", // 卡片/面板背景
  },
};

export const BorderColors: Record<ThemeMode, Record<"primary" | "secondary", string>> = {
  [ThemeMode.Dark]: {
    primary: "rgba(255, 255, 255, 0.65)",
    secondary: "rgba(255, 255, 255, 0.10)",
  },
  [ThemeMode.Light]: {
    primary: "rgba(38, 85, 115, 0.15)",
    secondary: "rgba(0, 0, 0, 0.15)",
  },
};
