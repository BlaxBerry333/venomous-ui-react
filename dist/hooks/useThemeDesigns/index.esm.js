import e from "react";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import { BACKGROUND_COLORS as p } from "../../constants/designs/BACKGROUND_COLORS.esm.js";
import { BORDER_COLORS as t } from "../../constants/designs/BORDER_COLORS.esm.js";
import { PALETTE_COLORS as S } from "../../constants/designs/PALETTE_COLORS.esm.js";
import { SHADOW_STYLES as T } from "../../constants/designs/SHADOW_STYLES.esm.js";
import { TYPOGRAPHY_SIZES as m } from "../../constants/designs/TYPOGRAPHY_SIZES.esm.js";
import { TYPOGRAPHY_LINE_HEIGHTS as C } from "../../constants/designs/TYPOGRAPHY_LINE_HEIGHTS.esm.js";
import { TEXT_COLORS as O } from "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import a from "../useCustomDesigns/index.esm.js";
import l from "../useThemeMode/index.esm.js";
function A() {
  const { themeMode: r } = l(), o = a();
  return e.useMemo(
    () => ({
      PaletteColors: (o == null ? void 0 : o.PaletteColors) || S.WOLFSBANE,
      TextColors: (o == null ? void 0 : o.TextColors) || O[r],
      BackgroundColors: (o == null ? void 0 : o.BackgroundColors) || p[r],
      BorderColors: (o == null ? void 0 : o.BorderColors) || t[r],
      ShadowStyles: (o == null ? void 0 : o.ShadowStyles) || T[r],
      TypographySizes: (o == null ? void 0 : o.TypographySizes) || m,
      TypographyLineHeights: (o == null ? void 0 : o.TypographyLineHeights) || C
    }),
    [r, o]
  );
}
export {
  A as default
};
