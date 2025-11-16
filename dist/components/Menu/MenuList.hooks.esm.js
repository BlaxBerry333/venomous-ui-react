import r from "react";
import { useSpaceFlexStyles as n } from "../Space/SpaceFlex.hooks.esm.js";
import { COMPONENT_DISPLAY_NAMES as p } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import i from "../../hooks/useCustomStyle/index.esm.js";
function d({ column: o = !0, spacing: m = 0 }) {
  const t = i({ displayName: p.MenuList }), { componentStyle: e } = n({ column: o, spacing: m });
  return {
    componentStyle: r.useMemo(
      () => ({
        // -- default style --
        ...e,
        listStyle: "none",
        padding: 0,
        margin: 0,
        // -- custom style --
        ...t
      }),
      [e, t]
    )
  };
}
export {
  d as useMenuListStyles
};
