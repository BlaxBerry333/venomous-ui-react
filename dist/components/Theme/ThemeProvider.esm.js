import { jsx as S } from "react/jsx-runtime";
import e from "react";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import "../../utils/design/TypographySize.esm.js";
import { THEME_COLORS as f } from "../../utils/design/ThemeColor.esm.js";
import { THEME_MODES as E } from "../../utils/design/ThemeMode.esm.js";
import L from "./ThemeContext.esm.js";
const h = E.Light, p = f.EmeraldMamba, R = {
  THEME_MODE: "VENOMOUS_UI__THEME_MODE",
  THEME_COLOR: "VENOMOUS_UI__THEME_COLOR"
};
function V({
  children: u,
  defaultThemeMode: O = h,
  defaultThemeColor: M = p,
  storageKey: o = R
}) {
  const [c, C] = e.useState(!1);
  e.useEffect(() => {
    C(!0);
  }, []);
  const [s, m] = e.useState(O), [r, T] = e.useState(M), a = e.useCallback((t) => {
    m(t);
  }, []), _ = e.useCallback(() => {
    m((t) => t === E.Dark ? E.Light : E.Dark);
  }, []), l = e.useCallback(() => {
    m(O);
  }, [O]), n = e.useCallback((t) => {
    T(t);
  }, []), i = e.useCallback(() => {
    T(M);
  }, [M]);
  e.useEffect(() => {
    if (c) {
      const t = localStorage.getItem(o.THEME_MODE);
      t && Object.values(E).includes(t) && m(t);
      const D = localStorage.getItem(o.THEME_COLOR);
      T(D || M);
    }
  }, [c, o.THEME_COLOR, o.THEME_MODE]), e.useEffect(() => {
    c && (localStorage.setItem(o.THEME_MODE, s), localStorage.setItem(o.THEME_COLOR, r));
  }, [c, o.THEME_MODE, o.THEME_COLOR, s, r]);
  const H = e.useMemo(
    () => ({
      themeMode: s,
      setThemeMode: a,
      toggleThemeMode: _,
      resetThemeMode: l,
      isDarkThemeMode: s === E.Dark,
      themeColor: r,
      setThemeColor: n,
      resetThemeColor: i
    }),
    [s, a, _, l, r, n, i]
  );
  return /* @__PURE__ */ S(L.Provider, { value: H, children: u });
}
export {
  V as default
};
