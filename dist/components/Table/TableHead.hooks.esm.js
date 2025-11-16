import e from "react";
import { COMPONENT_DISPLAY_NAMES as r } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import i from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import m from "../../hooks/useCustomStyle/index.esm.js";
function g() {
  const { BackgroundColors: o } = i(), t = m({ displayName: r.TableHead });
  return {
    tableHeadStyle: e.useMemo(
      () => ({
        boxSizing: "border-box",
        // -- default styles --
        width: "100%",
        // 充满父元素（table）宽度
        position: "sticky",
        top: 0,
        zIndex: 1,
        backgroundColor: o[1],
        // -- custom styles --
        ...t
      }),
      [o, t]
    )
  };
}
export {
  g as useTableHeadStyles
};
