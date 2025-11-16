import n from "react";
import { COMPONENT_DISPLAY_NAMES as m } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import u from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import c from "../../hooks/useCustomStyle/index.esm.js";
import { CARD_VARIANT_MAP as d } from "./Card.types.esm.js";
function w({
  variant: s = "contained",
  clickable: i
}) {
  const { BackgroundColors: o, BorderColors: r, ShadowStyles: e } = u(), a = c({ displayName: m.Card }), t = n.useMemo(() => {
    switch (s) {
      case d.OUTLINED:
        return {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: r[1],
          boxShadow: "none"
        };
      case d.ELEVATED:
        return {
          backgroundColor: o[2],
          borderWidth: 0,
          borderStyle: "none",
          boxShadow: e[1]
        };
      case d.CONTAINED:
      default:
        return {
          backgroundColor: o[2],
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: r[1],
          boxShadow: e[1]
        };
    }
  }, [s, o, r, e]), l = n.useMemo(() => i ? {
    cursor: "pointer",
    userSelect: "none"
  } : { cursor: "default", userSelect: "auto" }, [i]);
  return {
    componentStyle: n.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default style --
        borderRadius: 8,
        padding: 16,
        overflow: "hidden",
        ...t,
        ...l,
        // -- custom style override --
        ...a
      }),
      [t, l, a]
    ),
    __: {
      DynamicVariantStyles: t
    }
  };
}
export {
  w as useCardStyles
};
