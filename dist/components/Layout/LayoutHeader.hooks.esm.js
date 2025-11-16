import r from "react";
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
function b() {
  const { BackgroundColors: o, BorderColors: t } = m(), e = n({ displayName: i.LayoutHeader });
  return {
    componentStyle: r.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default styles --
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1e3,
        height: 64,
        width: "100%",
        alignItems: "center",
        backgroundColor: o[2],
        borderBottom: `1px solid ${t[1]}`,
        // -- custom styles --
        ...e
      }),
      [o, t, e]
    )
  };
}
export {
  b as useLayoutHeaderStyles
};
