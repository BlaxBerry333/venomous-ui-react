import i from "react";
import { COMPONENT_DISPLAY_NAMES as m } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import d from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import p from "../../hooks/useCustomStyle/index.esm.js";
function T({ column: t }) {
  const { BorderColors: r } = d(), e = p({ displayName: m.Divider }), o = i.useMemo(() => t ? {
    borderTop: 0,
    borderRight: 0,
    borderBottom: 0,
    borderLeftWidth: 1,
    borderLeftStyle: "solid",
    borderLeftColor: r[2],
    margin: "0 8px",
    alignSelf: "stretch",
    width: "1px",
    writingMode: "vertical-lr"
  } : {
    borderLeft: 0,
    borderRight: 0,
    borderBottom: 0,
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: r[2],
    margin: "8px 0",
    width: "100%"
  }, [t, r]);
  return {
    componentStyle: i.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default style --
        ...o,
        // -- custom style --
        ...e
      }),
      [o, e]
    ),
    __: {
      DynamicOrientationStyles: o
    }
  };
}
export {
  T as useDividerStyles
};
