import e from "react";
import { COMPONENT_DISPLAY_NAMES as r } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import m from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import i from "../../hooks/useCustomStyle/index.esm.js";
function T() {
  const { TextColors: o } = m(), t = i({ displayName: r.TableRow });
  return {
    tableRowStyle: e.useMemo(
      () => ({
        boxSizing: "border-box",
        // -- default styles --
        color: o[1],
        // -- custom styles --
        ...t
      }),
      [o, t]
    )
  };
}
export {
  T as useTableRowStyles
};
