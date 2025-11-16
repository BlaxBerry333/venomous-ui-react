import { THEME_MODES as F } from "./THEME_MODES.esm.js";
const A = {
  [F.LIGHT]: {
    1: "#F5F5F5",
    // 基础背景色
    2: "#FAFAFA",
    // 一般组件背景：用于卡片、容器等
    3: "#FFFFFF"
    // 高层级组件背景：用于模态框、浮窗等
  },
  [F.DARK]: {
    1: "#121212",
    // 基础背景色
    2: "#1D1D1D",
    // 一般组件背景：用于卡片、容器等
    3: "#2C2C2C"
    // 高层级组件背景：用于模态框、浮窗等
  }
};
export {
  A as BACKGROUND_COLORS
};
