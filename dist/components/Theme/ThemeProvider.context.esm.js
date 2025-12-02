import e from "react";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import { PALETTE_COLORS as t } from "../../constants/designs/PALETTE_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { getSystemThemeMode as o } from "../../tools/systems/getSystemThemeMode.esm.js";
const P = e.createContext({
  themeMode: o(),
  setThemeMode: () => {
  },
  themePalette: t.WOLFSBANE,
  setThemePalette: () => {
  },
  customDesigns: {},
  customComponentProps: {}
});
export {
  P as ThemeProviderContext
};
