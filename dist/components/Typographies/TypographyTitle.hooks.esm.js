import e from "react";
import { COMPONENT_DISPLAY_NAMES as y } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import { __TITLE_ELEMENT_TO_TYPOGRAPHY_SIZE_MAP as l } from "../../constants/designs/TYPOGRAPHY_SIZES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import a from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import c from "../../hooks/useCustomStyle/index.esm.js";
import { TYPOGRAPHY_TITLE_ELEMENT_MAP as E } from "./TypographyTitle.types.esm.js";
function C({
  as: r = E.H3,
  color: i
}) {
  const { TextColors: m, TypographySizes: p, TypographyLineHeights: s } = a(), n = c({ displayName: y.TypographyTitle }), o = e.useMemo(() => {
    const T = l[r];
    return {
      fontSize: p.TITLE[T],
      lineHeight: s.TITLE[T]
    };
  }, [r, p, s]), t = e.useMemo(() => ({
    color: i || m[1]
  }), [i, m]);
  return {
    componentStyle: e.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default style --
        position: "relative",
        display: "block",
        fontWeight: "bold",
        ...o,
        ...t,
        // -- custom style --
        ...n
      }),
      [o, t, n]
    ),
    __: {
      DynamicTagStyles: o,
      DynamicColorStyles: t
    }
  };
}
export {
  C as useTypographyTitleStyles
};
