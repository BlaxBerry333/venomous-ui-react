import m from "react";
import { useThemeProviderContext as r } from "../../components/Theme/ThemeProvider.hooks.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { THEME_MODES as o } from "../../constants/designs/THEME_MODES.esm.js";
function n() {
  const { themeMode: e, setThemeMode: t } = r();
  return m.useMemo(
    () => ({
      themeMode: e,
      setThemeMode: t,
      isDarkMode: e === o.DARK,
      toggleThemeMode: () => t(e === o.DARK ? o.LIGHT : o.DARK)
    }),
    [e, t]
  );
}
export {
  n as default
};
