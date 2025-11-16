import { THEME_MODES } from "./THEME_MODES";

export const BACKGROUND_COLORS = {
  [THEME_MODES.LIGHT]: {
    1: "#F5F5F5", // 基础背景色
    2: "#FAFAFA", // 一般组件背景：用于卡片、容器等
    3: "#FFFFFF", // 高层级组件背景：用于模态框、浮窗等
  },

  [THEME_MODES.DARK]: {
    1: "#121212", // 基础背景色
    2: "#1D1D1D", // 一般组件背景：用于卡片、容器等
    3: "#2C2C2C", // 高层级组件背景：用于模态框、浮窗等
  },
} as const;

export type TBackgroundColors = {
  1: string; // primary
  2: string; // secondary
  3: string; // tertiary
};
