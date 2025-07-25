import { jsx as S } from "react/jsx-runtime";
import t from "react";
import D from "./ThemeContext.esm.js";
import { ThemeMode as E } from "../../utils/theme-mode/index.esm.js";
import { ThemeColor as _ } from "../../utils/colors/index.esm.js";
const H = E.Light, k = _.JadeAnaconda, I = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function g({
  children: f,
  defaultTheme: a = H,
  defaultThemeColor: n = k,
  storageKey: s = I
}) {
  const [M, C] = t.useState(!1), [o, r] = t.useState(a), [c, i] = t.useState(n), m = t.useCallback(
    (e) => {
      e !== o && r(e);
    },
    [o]
  ), O = t.useCallback(() => {
    r((e) => e === E.Dark ? E.Light : E.Dark);
  }, []), d = t.useCallback(() => {
    r(a);
  }, [a]), u = t.useCallback(
    (e) => {
      e !== c && i(e);
    },
    [c]
  ), T = t.useCallback(() => {
    i(n);
  }, [n]);
  t.useEffect(() => {
    if (typeof window < "u") {
      C(!0);
      const e = localStorage.getItem(s.THEME_MODE);
      e && Object.values(E).includes(e) && r(e);
      const l = localStorage.getItem(s.THEME_COLOR);
      l && Object.values(_).includes(l) && i(l);
    }
  }, [s]), t.useEffect(() => {
    typeof window < "u" && M && (localStorage.setItem(s.THEME_MODE, o), localStorage.setItem(s.THEME_COLOR, c));
  }, [M, s, o, c]);
  const h = t.useMemo(
    () => ({
      themeMode: o,
      setThemeMode: m,
      toggleThemeMode: O,
      resetThemeMode: d,
      isDarkThemeMode: o === E.Dark,
      themeColor: c,
      setThemeColor: u,
      resetThemeColor: T
    }),
    [o, m, O, d, c, u, T]
  );
  return /* @__PURE__ */ S(D.Provider, { value: h, children: f });
}
export {
  g as default
};
