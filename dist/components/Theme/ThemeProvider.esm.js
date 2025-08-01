import { jsx as D } from "react/jsx-runtime";
import e from "react";
import d from "./ThemeContext.esm.js";
import { ThemeMode as E } from "../../utils/design/ThemeMode.esm.js";
import { ThemeColor as C } from "../../utils/design/ThemeColor.esm.js";
const S = E.Light, L = C.EmeraldMamba, k = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function v({
  children: f,
  defaultThemeMode: l = S,
  defaultThemeColor: r = L,
  storageKey: o = k
}) {
  const [c, h] = e.useState(!1);
  e.useEffect(() => {
    h(!0);
  }, []);
  const [s, M] = e.useState(l), [m, O] = e.useState(r), T = e.useCallback((t) => {
    M(t);
  }, []), n = e.useCallback(() => {
    M((t) => t === E.Dark ? E.Light : E.Dark);
  }, []), _ = e.useCallback(() => {
    M(l);
  }, [l]), u = e.useCallback((t) => {
    O(t);
  }, []), i = e.useCallback(() => {
    O(r);
  }, [r]);
  e.useEffect(() => {
    if (c) {
      const t = localStorage.getItem(o.THEME_MODE);
      t && Object.values(E).includes(t) && M(t);
      const a = localStorage.getItem(o.THEME_COLOR);
      a && Object.values(C).includes(a) && O(a);
    }
  }, [c, o.THEME_COLOR, o.THEME_MODE]), e.useEffect(() => {
    c && (localStorage.setItem(o.THEME_MODE, s), localStorage.setItem(o.THEME_COLOR, m));
  }, [c, o.THEME_MODE, o.THEME_COLOR, s, m]);
  const H = e.useMemo(
    () => ({
      themeMode: s,
      setThemeMode: T,
      toggleThemeMode: n,
      resetThemeMode: _,
      isDarkThemeMode: s === E.Dark,
      themeColor: m,
      setThemeColor: u,
      resetThemeColor: i
    }),
    [s, T, n, _, m, u, i]
  );
  return /* @__PURE__ */ D(d.Provider, { value: H, children: f });
}
export {
  v as default
};
