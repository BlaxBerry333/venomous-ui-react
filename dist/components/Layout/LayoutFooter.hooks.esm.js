import e from "react";
import { COMPONENT_DISPLAY_NAMES as i } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import m from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import n from "../../hooks/useCustomStyle/index.esm.js";
function f() {
  const { BackgroundColors: o, BorderColors: t } = m(), r = n({ displayName: i.LayoutFooter });
  return {
    componentStyle: e.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default styles --
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        backgroundColor: o[2],
        borderTop: `1px solid ${t[1]}`,
        // -- custom styles --
        ...r
      }),
      [o, t, r]
    )
  };
}
export {
  f as useLayoutFooterStyles
};
