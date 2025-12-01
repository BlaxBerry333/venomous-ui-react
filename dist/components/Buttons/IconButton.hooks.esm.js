import t from "react";
import { COMPONENT_DISPLAY_NAMES as u } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import y from "../../hooks/useCustomStyle/index.esm.js";
import { useButtonStyles as S } from "./Button.hooks.esm.js";
import { BUTTON_VARIANT_MAP as a } from "./Button.types.esm.js";
import { ICON_BUTTON_VARIANT_MAP as N } from "./IconButton.types.esm.js";
function E({
  disabled: r,
  loading: s,
  variant: o,
  color: c,
  isHovered: p,
  isClicked: l
}) {
  const e = y({ displayName: u.IconButton }), { componentStyle: i } = S({
    disabled: r,
    loading: s,
    variant: a.CONTAINED,
    color: c,
    isHovered: p,
    isClicked: l
  }), n = t.useMemo(() => ({
    borderRadius: o === N.CIRCLE ? "50%" : 8
  }), [o]), m = t.useMemo(
    () => ({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      minWidth: 40,
      minHeight: 40,
      padding: 0
    }),
    []
  );
  return {
    componentStyle: t.useMemo(
      () => ({
        // -- default style --
        ...i,
        ...n,
        ...m,
        // -- custom style --
        ...e
      }),
      [i, n, m, e]
    )
  };
}
export {
  E as useIconButtonStyles
};
