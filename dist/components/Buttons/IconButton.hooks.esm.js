import u from "react";
import { COMPONENT_DISPLAY_NAMES as l } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import c from "../../hooks/useCustomStyle/index.esm.js";
import { useButtonStyles as y } from "./Button.hooks.esm.js";
import { BUTTON_VARIANT_MAP as S } from "./Button.types.esm.js";
function O({
  disabled: n,
  loading: m,
  variant: i = S.CONTAINED,
  circle: t = !1,
  color: r,
  isHovered: p,
  isClicked: s
}) {
  const o = c({ displayName: l.IconButton }), { componentStyle: e } = y({
    disabled: n,
    loading: m,
    variant: i,
    color: r,
    isHovered: p,
    isClicked: s
  });
  return {
    componentStyle: u.useMemo(
      () => ({
        // -- default style --
        ...e,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        minWidth: 40,
        minHeight: 40,
        padding: 0,
        borderRadius: t ? "50%" : 8,
        // -- custom style --
        ...o
      }),
      [e, t, o]
    )
  };
}
export {
  O as useIconButtonStyles
};
