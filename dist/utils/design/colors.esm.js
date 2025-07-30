import { ThemeMode as r } from "./ThemeMode.esm.js";
const o = {
  success: "#4caf50",
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3"
}, e = {
  [r.Dark]: {
    primary: "#ffffff",
    // 主要文本
    secondary: "#cccccc",
    // 次要文本
    tertiary: "#999999",
    // 三级文本
    quaternary: "#666666",
    // 最弱文本
    disabled: "#4a4a4a"
    // 禁用文本
  },
  [r.Light]: {
    primary: "#212121",
    // 主要文本
    secondary: "#424242",
    // 次要文本
    tertiary: "#616161",
    // 三级文本
    quaternary: "#9e9e9e",
    // 最弱文本
    disabled: "#bdbdbd"
    // 禁用文本
  }
}, f = {
  [r.Dark]: {
    primary: "#181818",
    // 主背景
    secondary: "#242424"
    // 卡片/面板背景
  },
  [r.Light]: {
    primary: "#ffffff",
    // 主背景
    secondary: "#f8f9fa"
    // 卡片/面板背景
  }
}, c = {
  [r.Dark]: {
    primary: "rgba(255, 255, 255, 0.65)",
    secondary: "rgba(255, 255, 255, 0.10)"
  },
  [r.Light]: {
    primary: "rgba(38, 85, 115, 0.15)",
    secondary: "rgba(0, 0, 0, 0.15)"
  }
};
export {
  f as BackgroundColors,
  c as BorderColors,
  o as SemanticColors,
  e as TextColors
};
