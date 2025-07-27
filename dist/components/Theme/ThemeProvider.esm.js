import { jsx as S } from "react/jsx-runtime";
import t from "react";
import D from "./ThemeContext.esm.js";
import { ThemeMode as r } from "../../utils/design/ThemeMode.esm.js";
import { ThemeColor as d } from "../../utils/design/ThemeColor.esm.js";
const H = r.Light, k = d.EmeraldMamba, I = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function g({
  children: f,
  defaultThemeMode: a = H,
  defaultThemeColor: i = k,
  storageKey: s = I
}) {
  const [m, C] = t.useState(!1), [o, c] = t.useState(a), [E, l] = t.useState(i), M = t.useCallback(
    (e) => {
      e !== o && c(e);
    },
    [o]
  ), O = t.useCallback(() => {
    c((e) => e === r.Dark ? r.Light : r.Dark);
  }, []), u = t.useCallback(() => {
    c(a);
  }, [a]), T = t.useCallback(
    (e) => {
      e !== E && l(e);
    },
    [E]
  ), _ = t.useCallback(() => {
    l(i);
  }, [i]);
  t.useEffect(() => {
    if (typeof window < "u") {
      C(!0);
      const e = localStorage.getItem(s.THEME_MODE);
      e && Object.values(r).includes(e) && c(e);
      const n = localStorage.getItem(s.THEME_COLOR);
      n && Object.values(d).includes(n) && l(n);
    }
  }, [s]), t.useEffect(() => {
    typeof window < "u" && m && (localStorage.setItem(s.THEME_MODE, o), localStorage.setItem(s.THEME_COLOR, E));
  }, [m, s, o, E]);
  const h = t.useMemo(
    () => ({
      themeMode: o,
      setThemeMode: M,
      toggleThemeMode: O,
      resetThemeMode: u,
      isDarkThemeMode: o === r.Dark,
      themeColor: E,
      setThemeColor: T,
      resetThemeColor: _
    }),
    [o, M, O, u, E, T, _]
  );
  return /* @__PURE__ */ S(D.Provider, { value: h, children: f });
}
export {
  g as default
};
