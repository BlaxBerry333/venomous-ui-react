import i from "react";
import { COMPONENT_DISPLAY_NAMES as n } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import m from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import p from "../../hooks/useCustomStyle/index.esm.js";
function h({ column: e }) {
  const { BorderColors: o } = m(), t = p({ displayName: n.Divider }), r = i.useMemo(() => e ? {
    border: "none",
    borderLeft: `1px solid ${o[2]}`,
    margin: "0 8px",
    alignSelf: "stretch",
    width: "1px",
    writingMode: "vertical-lr"
  } : {
    border: "none",
    borderTop: `1px solid ${o[2]}`,
    margin: "8px 0",
    width: "100%"
  }, [e, o]);
  return {
    componentStyle: i.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default style --
        ...r,
        // -- custom style --
        ...t
      }),
      [r, t]
    ),
    __: {
      DynamicOrientationStyles: r
    }
  };
}
export {
  h as useDividerStyles
};
