import r from "react";
import { COMPONENT_DISPLAY_NAMES as T } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import { SEMANTIC_COLORS as f } from "../../constants/designs/SEMANTIC_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import d from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import g from "../../hooks/useCustomStyle/index.esm.js";
import { BADGE_PLACEMENT_MAP as o, BADGE_VARIANT_MAP as u } from "./Badge.types.esm.js";
function F({
  variant: s = "text",
  placement: m = "top-right",
  offset: a = 65,
  color: c = f.ERROR,
  isStandalone: e = !1
}) {
  const { TypographySizes: p } = d(), l = g({ displayName: T.Badge }), t = r.useMemo(() => `${a}%`, [a]), i = r.useMemo(() => {
    switch (m) {
      case o.TOP_LEFT:
        return {
          top: 0,
          left: 0,
          transform: `translate(-${t}, -${t})`
        };
      case o.BOTTOM_RIGHT:
        return {
          bottom: 0,
          right: 0,
          transform: `translate(${t}, ${t})`
        };
      case o.BOTTOM_LEFT:
        return {
          bottom: 0,
          left: 0,
          transform: `translate(-${t}, ${t})`
        };
      case o.TOP_RIGHT:
      default:
        return {
          top: 0,
          right: 0,
          transform: `translate(${t}, -${t})`
        };
    }
  }, [m, t]), n = r.useMemo(() => {
    switch (s) {
      case u.DOT:
        return {
          width: 10,
          height: 10,
          minWidth: 8,
          padding: 0,
          borderRadius: "50%"
        };
      case u.TEXT:
        return {
          minWidth: 20,
          height: 20,
          padding: "0 6px",
          fontSize: p.TEXT.CAPTION,
          lineHeight: "20px",
          borderRadius: 10
        };
      default:
        return {};
    }
  }, [s, p]);
  return {
    componentStyle: r.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",
        // -- default style --
        display: "inline-flex",
        position: e ? "static" : "absolute",
        zIndex: e ? "auto" : 1,
        ...!e && i,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        backgroundColor: c,
        color: "#FFFFFF",
        ...n,
        // -- custom style --
        ...l
      }),
      [l, c, i, n, e]
    ),
    __: {
      DynamicPlacementStyle: i,
      DynamicVariantStyles: n
    }
  };
}
export {
  F as useBadgeStyles
};
