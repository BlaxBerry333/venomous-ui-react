import r from "react";
import { _setStoredThemeColor as m } from "../../components/ThemeProvider/_store.esm.js";
import { useThemeContext as s } from "../../components/ThemeProvider/_useThemeContext.esm.js";
function n() {
  const e = s(), t = r.useCallback(
    (o) => {
      e.setThemeColor(o), m(o);
    },
    [e]
  );
  return {
    themeColor: e.themeColor,
    setThemeColor: t
  };
}
export {
  n as default
};
