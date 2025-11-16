import { THEME_MODES as p } from "./THEME_MODES.esm.js";
const r = {
  [p.LIGHT]: {
    1: "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.08)",
    // 小阴影：用于按钮、输入框、卡片等一般组件
    2: "0px 2px 8px rgba(0, 0, 0, 0.15), 0px 1px 4px rgba(0, 0, 0, 0.12)"
    // 中阴影：用于模态框、抽屉等高层级组件
  },
  [p.DARK]: {
    1: "0px 1px 3px rgba(255, 255, 255, 0.12), 0px 1px 2px rgba(255, 255, 255, 0.08)",
    // 小阴影：用于按钮、输入框、卡片等一般组件
    2: "0px 2px 8px rgba(255, 255, 255, 0.15), 0px 1px 4px rgba(255, 255, 255, 0.12)"
    // 中阴影：用于模态框、抽屉等高层级组件
  }
};
export {
  r as SHADOW_STYLES
};
