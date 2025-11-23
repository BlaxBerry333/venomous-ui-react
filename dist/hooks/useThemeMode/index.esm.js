import m from "react";
import { useThemeProviderContext as d, __clearPersistedThemeMode as M } from "../../components/Theme/ThemeProvider.hooks.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { THEME_MODES as t } from "../../constants/designs/THEME_MODES.esm.js";
import { getSystemThemeMode as p } from "../../tools/systems/getSystemThemeMode.esm.js";
function g() {
  const { themeMode: o, setThemeMode: e } = d(), r = m.useCallback(() => {
    e(o === t.DARK ? t.LIGHT : t.DARK);
  }, [o, e]), s = m.useCallback(() => {
    M();
    const i = p();
    e(i);
  }, [e]);
  return m.useMemo(
    () => ({
      themeMode: o,
      setThemeMode: e,
      isDarkMode: o === t.DARK,
      toggleThemeMode: r,
      resetToSystemThemeMode: s
    }),
    [o, e, r, s]
  );
}
export {
  g as default
};
