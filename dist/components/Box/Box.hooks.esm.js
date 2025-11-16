import i from "react";
import { COMPONENT_DISPLAY_NAMES as m } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import { THEME_BREAKPOINT_RANGES as n } from "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import s from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import p from "../../hooks/useCustomStyle/index.esm.js";
function T({ maxWidth: o }) {
  const { TextColors: t } = s(), r = p({ displayName: m.Box }), e = i.useMemo(() => o ? o === "XXL" ? {
    width: "100%",
    maxWidth: "100%",
    margin: "0 auto"
  } : {
    width: "100%",
    maxWidth: n[o][1],
    margin: "0 auto"
  } : {}, [o]);
  return {
    componentStyle: i.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default style --
        position: "relative",
        color: t[1],
        backgroundColor: "transparent",
        ...e,
        // -- custom style --
        ...r
      }),
      [t, e, r]
    )
  };
}
export {
  T as useBoxStyles
};
