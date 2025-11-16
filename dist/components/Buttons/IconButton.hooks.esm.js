import e from "react";
import { COMPONENT_DISPLAY_NAMES as S } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import a from "../../hooks/useCustomStyle/index.esm.js";
import { useButtonStyles as _ } from "./Button.hooks.esm.js";
import { ICON_BUTTON_SHAPE_MAP as d } from "./IconButton.types.esm.js";
function R({
  disabled: r,
  loading: s,
  variant: c,
  color: p,
  shape: n,
  isHovered: l,
  isClicked: u
}) {
  const i = a({ displayName: S.IconButton }), { componentStyle: m, __: y } = _({
    disabled: r,
    loading: s,
    variant: c,
    color: p,
    isHovered: l,
    isClicked: u
  }), t = e.useMemo(() => ({
    borderRadius: n === d.CIRCLE ? "50%" : 8
  }), [n]), o = e.useMemo(
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
    componentStyle: e.useMemo(
      () => ({
        // -- default style --
        ...m,
        ...t,
        ...o,
        // -- custom style --
        ...i
      }),
      [m, t, o, i]
    ),
    __: {
      ...y,
      DynamicShapeStyles: t,
      DynamicSizeStyles: o
    }
  };
}
export {
  R as useIconButtonStyles
};
