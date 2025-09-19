import { THEME_MODES as e } from "../design/ThemeMode.esm.js";
function r() {
  return typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)").matches : !1;
}
function n() {
  return r() ? e.Dark : e.Light;
}
export {
  n as getSystemThemeMode
};
