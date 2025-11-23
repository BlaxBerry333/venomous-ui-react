import t from "react";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import { BACKGROUND_COLORS as p } from "../../constants/designs/BACKGROUND_COLORS.esm.js";
import { BORDER_COLORS as m } from "../../constants/designs/BORDER_COLORS.esm.js";
import { SHADOW_STYLES as a } from "../../constants/designs/SHADOW_STYLES.esm.js";
import { TYPOGRAPHY_SIZES as l } from "../../constants/designs/TYPOGRAPHY_SIZES.esm.js";
import { TYPOGRAPHY_LINE_HEIGHTS as S } from "../../constants/designs/TYPOGRAPHY_LINE_HEIGHTS.esm.js";
import { TEXT_COLORS as T } from "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import h from "../useCustomDesigns/index.esm.js";
import C from "../useThemeMode/index.esm.js";
import f from "../useThemePalette/index.esm.js";
function A() {
  const { themeMode: r } = C(), { themePalette: e } = f(), o = h();
  return t.useMemo(
    () => ({
      PaletteColors: (o == null ? void 0 : o.PaletteColors) || e,
      TextColors: (o == null ? void 0 : o.TextColors) || T[r],
      BackgroundColors: (o == null ? void 0 : o.BackgroundColors) || p[r],
      BorderColors: (o == null ? void 0 : o.BorderColors) || m[r],
      ShadowStyles: (o == null ? void 0 : o.ShadowStyles) || a[r],
      TypographySizes: (o == null ? void 0 : o.TypographySizes) || l,
      TypographyLineHeights: (o == null ? void 0 : o.TypographyLineHeights) || S
    }),
    [r, e, o]
  );
}
export {
  A as default
};
