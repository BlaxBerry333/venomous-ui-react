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
import { __getInitialThemeMode as f, __persistThemeMode as n, __getInitialThemePalette as v, __persistThemePalette as C } from "./ThemeProvider.hooks.esm.js";
const S = e.memo(({ children: p, customDesigns: t, customStyles: r }) => {
  const [m, h] = e.useState(f), a = e.useCallback((o) => {
    h(o), n(o);
  }, []), [i, P] = e.useState(
    () => v(t == null ? void 0 : t.PaletteColors)
  ), l = e.useCallback((o) => {
    P(o), C(o);
  }, []), T = e.useMemo(
    () => ({
      customDesigns: t,
      customStyles: r,
      themeMode: m,
      setThemeMode: a,
      themePalette: i,
      setThemePalette: l
    }),
    [t, r, m, a, i, l]
  );
  return /* @__PURE__ */ d(M.Provider, { value: T, children: p });
});
S.displayName = _.ThemeProvider;
export {
  S as default
};
