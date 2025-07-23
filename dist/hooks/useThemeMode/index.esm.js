import m from "react";
import { _setStoredThemeMode as r } from "../../components/ThemeProvider/_store.esm.js";
import { useThemeContext as s } from "../../components/ThemeProvider/_useThemeContext.esm.js";
import { ThemeMode as o } from "../../utils/theme-mode/index.esm.js";
function i() {
  const e = s(), d = m.useCallback(
    (t) => {
      e.setThemeMode(t), r(t);
    },
    [e]
  ), h = m.useCallback(() => {
    e.toggleThemeMode(), r(e.themeMode === o.Dark ? o.Light : o.Dark);
  }, [e]);
  return {
    themeMode: e.themeMode,
    isDarkThemeMode: e.isDarkThemeMode,
    setThemeMode: d,
    toggleThemeMode: h
  };
}
export {
  i as default
};
