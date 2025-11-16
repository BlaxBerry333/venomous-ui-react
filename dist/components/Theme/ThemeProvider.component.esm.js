import { jsx as d } from "react/jsx-runtime";
import e from "react";
import { COMPONENT_DISPLAY_NAMES as a } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { getSystemThemeMode as f } from "../../tools/systems/getSystemThemeMode.esm.js";
import { ThemeProviderContext as h } from "./ThemeProvider.context.esm.js";
const M = e.memo(({ children: t, customDesigns: o, customStyles: r }) => {
  const [m, i] = e.useState(f()), p = e.useMemo(
    () => ({
      customDesigns: o,
      customStyles: r,
      themeMode: m,
      setThemeMode: i
    }),
    [o, r, m]
  );
  return /* @__PURE__ */ d(h.Provider, { value: p, children: t });
});
M.displayName = a.ThemeProvider;
export {
  M as default
};
