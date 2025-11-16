import r from "react";
import { COMPONENT_DISPLAY_NAMES as s } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import p from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import l from "../../hooks/useCustomStyle/index.esm.js";
function D({ width: o, color: n }) {
  const { TextColors: m } = p(), i = l({ displayName: s.Icon }), e = r.useMemo(() => ({
    width: o,
    minWidth: o,
    height: o,
    minHeight: o
  }), [o]), t = r.useMemo(() => ({
    color: n || "inherit"
  }), [n, m]);
  return {
    componentStyle: r.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default style --
        userSelect: "none",
        flexShrink: 0,
        display: "inline-flex",
        ...e,
        ...t,
        // -- custom style --
        ...i
      }),
      [e, t, i]
    ),
    __: {
      DynamicSizeStyles: e,
      DynamicColorStyles: t
    }
  };
}
export {
  D as useIconStyles
};
