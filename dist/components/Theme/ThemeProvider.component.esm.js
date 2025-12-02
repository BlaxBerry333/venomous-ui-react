import { jsx as d } from "react/jsx-runtime";
import e from "react";
import { COMPONENT_DISPLAY_NAMES as _ } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { ThemeProviderContext as M } from "./ThemeProvider.context.esm.js";
import { __getInitialThemeMode as f, __persistThemeMode as S, __getInitialThemePalette as v, __persistThemePalette as x } from "./ThemeProvider.hooks.esm.js";
const C = e.memo(({ children: h, customDesigns: t, customComponentProps: o }) => {
  const [m, p] = e.useState(f), a = e.useCallback((r) => {
    p(r), S(r);
  }, []), [i, T] = e.useState(
    () => v(t == null ? void 0 : t.PaletteColors)
  ), l = e.useCallback((r) => {
    T(r), x(r);
  }, []), P = e.useMemo(
    () => ({
      customDesigns: t,
      customComponentProps: o,
      themeMode: m,
      setThemeMode: a,
      themePalette: i,
      setThemePalette: l
    }),
    [t, o, m, a, i, l]
  );
  return /* @__PURE__ */ d(M.Provider, { value: P, children: h });
});
C.displayName = _.ThemeProvider;
export {
  C as default
};
