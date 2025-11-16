import o from "react";
import { COMPONENT_DISPLAY_NAMES as e } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import r from "../../hooks/useCustomStyle/index.esm.js";
function u() {
  const t = r({ displayName: e.TabsTabPanel });
  return {
    componentStyle: o.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default styles --
        width: "100%",
        height: "100%",
        // ✅ 添加高度，确保可以填充父容器
        // -- custom styles --
        ...t
      }),
      [t]
    )
  };
}
export {
  u as useTabsTabPanelStyles
};
