import { ThemeMode as e } from "./ThemeMode.esm.js";
function r() {
  return typeof window < "u" ? window.matchMedia("(prefers-color-scheme: dark)").matches : !1;
}
function n() {
  return r() ? e.Dark : e.Light;
}
export {
  n as getSystemThemeMode
};
