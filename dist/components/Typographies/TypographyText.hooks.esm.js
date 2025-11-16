import a from "react";
import { COMPONENT_DISPLAY_NAMES as m } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import { TEXT_COLORS as g } from "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import E from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import d from "../../hooks/useCustomStyle/index.esm.js";
import { TYPOGRAPHY_TEXT_ELEMENT_MAP as i } from "./TypographyText.types.esm.js";
function H({
  as: p = i.SPAN,
  color: o
}) {
  const { BackgroundColors: l, BorderColors: s, TextColors: r, TypographySizes: e, TypographyLineHeights: t } = E(), S = d({ displayName: m.TypographyText }), T = a.useMemo(() => {
    switch (p) {
      case i.CODE:
        return {
          fontWeight: "bold",
          fontSize: e.TEXT.SMALL,
          lineHeight: t.TEXT.BASE,
          color: o || r[1],
          backgroundColor: l[2],
          borderRadius: 4,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: s[1],
          padding: "2px 4px"
        };
      case i.STRONG:
        return {
          fontWeight: "bold",
          fontSize: e.TEXT.BASE,
          lineHeight: t.TEXT.LARGE,
          color: o || r[1]
        };
      case i.SMALL:
        return {
          fontSize: e.TEXT.SMALL,
          lineHeight: t.TEXT.SMALL,
          color: o || r[1]
        };
      case i.MARK:
        return {
          fontWeight: "bold",
          fontSize: e.TEXT.BASE,
          lineHeight: t.TEXT.BASE,
          color: o || g.light[1],
          backgroundColor: "#fff59d",
          padding: "1px 4px"
        };
      case i.SPAN:
      default:
        return {
          fontSize: e.TEXT.BASE,
          lineHeight: t.TEXT.BASE,
          color: o || r[1]
        };
    }
  }, [p, l, s, e, t, r, o]), n = a.useMemo(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      // -- default style --
      position: "relative",
      display: "inline",
      ...T,
      // -- custom style --
      ...S
    }),
    [T, S]
  );
  return {
    componentStyle: n,
    __: {
      DynamicTagStyle: T,
      DynamicTextColor: n.color,
      DynamicTextSize: n.fontSize,
      DynamicLineHeight: n.lineHeight
    }
  };
}
export {
  H as useTypographyTextStyles
};
