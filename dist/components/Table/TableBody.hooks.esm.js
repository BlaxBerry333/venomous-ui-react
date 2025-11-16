import t from "react";
import { COMPONENT_DISPLAY_NAMES as e } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import r from "../../hooks/useCustomStyle/index.esm.js";
function u() {
  const o = r({ displayName: e.TableBody });
  return {
    tableBodyStyle: t.useMemo(
      () => ({
        boxSizing: "border-box",
        // -- default styles --
        width: "100%",
        // -- custom styles --
        ...o
      }),
      [o]
    )
  };
}
export {
  u as useTableBodyStyles
};
