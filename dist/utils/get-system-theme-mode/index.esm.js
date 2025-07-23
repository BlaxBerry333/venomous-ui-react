import { ThemeMode as e } from "../theme-mode/index.esm.js";
function o() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? e.Dark : e.Light;
}
export {
  o as default
};
