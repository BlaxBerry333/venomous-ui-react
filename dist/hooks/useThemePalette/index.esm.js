import r from "react";
import { useThemeProviderContext as m, __clearPersistedThemePalette as a } from "../../components/Theme/ThemeProvider.hooks.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import { PALETTE_COLORS as i } from "../../constants/designs/PALETTE_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
function h() {
  const { themePalette: t, setThemePalette: e } = m(), o = r.useCallback(() => {
    a(), e(i.WOLFSBANE);
  }, [e]);
  return r.useMemo(
    () => ({
      themePalette: t,
      setThemePalette: e,
      resetToDefaultPalette: o
    }),
    [t, e, o]
  );
}
export {
  h as default
};
