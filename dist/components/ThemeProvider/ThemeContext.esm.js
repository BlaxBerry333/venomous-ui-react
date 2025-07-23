import e from "react";
import { ThemeColor as o } from "../../utils/colors/index.esm.js";
import { ThemeMode as t } from "../../utils/theme-mode/index.esm.js";
const m = {
  themeMode: t.Light,
  isDarkThemeMode: !1,
  setThemeMode: () => {
  },
  toggleThemeMode: () => {
  },
  themeColor: o.JadeAnaconda,
  setThemeColor: () => {
  }
}, T = e.createContext(m);
export {
  T as ThemeContext,
  m as ThemeContextDefaultValue
};
