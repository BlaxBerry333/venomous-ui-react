import { ThemeMode as t } from "../../utils/theme-mode/index.esm.js";
import { ThemeColor as d } from "../../utils/colors/index.esm.js";
const o = {
  themeColor: "VENOMOUS_UI__themeColor",
  themeMode: "VENOMOUS_UI__themeMode"
};
function i() {
  if (typeof window < "u") {
    const e = localStorage.getItem(o.themeColor);
    if (e && Object.values(d).includes(e))
      return e;
  }
}
function m() {
  if (typeof window < "u") {
    const e = localStorage.getItem(o.themeMode);
    if (e && Object.values(t).includes(e))
      return e;
  }
}
function f(e) {
  typeof window < "u" && localStorage.setItem(o.themeColor, e);
}
function l(e) {
  typeof window < "u" && localStorage.setItem(o.themeMode, e);
}
export {
  i as _getStoredThemeColor,
  m as _getStoredThemeMode,
  f as _setStoredThemeColor,
  l as _setStoredThemeMode
};
