import { jsx as D } from "react/jsx-runtime";
import e from "react";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { ThemeColor as C } from "../../utils/design/ThemeColor.esm.js";
import { ThemeMode as E } from "../../utils/design/ThemeMode.esm.js";
import d from "./ThemeContext.esm.js";
const S = E.Light, L = C.EmeraldMamba, k = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function g({
  children: f,
  defaultThemeMode: r = S,
  defaultThemeColor: l = L,
  storageKey: o = k
}) {
  const [c, h] = e.useState(!1);
  e.useEffect(() => {
    h(!0);
  }, []);
  const [s, m] = e.useState(r), [M, O] = e.useState(l), T = e.useCallback((t) => {
    m(t);
  }, []), n = e.useCallback(() => {
    m((t) => t === E.Dark ? E.Light : E.Dark);
  }, []), _ = e.useCallback(() => {
    m(r);
  }, [r]), u = e.useCallback((t) => {
    O(t);
  }, []), i = e.useCallback(() => {
    O(l);
  }, [l]);
  e.useEffect(() => {
    if (c) {
      const t = localStorage.getItem(o.THEME_MODE);
      t && Object.values(E).includes(t) && m(t);
      const a = localStorage.getItem(o.THEME_COLOR);
      a && Object.values(C).includes(a) && O(a);
    }
  }, [c, o.THEME_COLOR, o.THEME_MODE]), e.useEffect(() => {
    c && (localStorage.setItem(o.THEME_MODE, s), localStorage.setItem(o.THEME_COLOR, M));
  }, [c, o.THEME_MODE, o.THEME_COLOR, s, M]);
  const H = e.useMemo(
    () => ({
      themeMode: s,
      setThemeMode: T,
      toggleThemeMode: n,
      resetThemeMode: _,
      isDarkThemeMode: s === E.Dark,
      themeColor: M,
      setThemeColor: u,
      resetThemeColor: i
    }),
    [s, T, n, _, M, u, i]
  );
  return /* @__PURE__ */ D(d.Provider, { value: H, children: f });
}
export {
  g as default
};
