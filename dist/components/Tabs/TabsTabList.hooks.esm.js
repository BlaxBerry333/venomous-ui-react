import o from "react";
import { COMPONENT_DISPLAY_NAMES as r } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import e from "../../hooks/useCustomStyle/index.esm.js";
function u() {
  const t = e({ displayName: r.TabsTabList });
  return {
    componentStyle: o.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default styles --
        flexShrink: 0,
        // -- custom styles --
        ...t
      }),
      [t]
    )
  };
}
export {
  u as useTabsTabListStyles
};
