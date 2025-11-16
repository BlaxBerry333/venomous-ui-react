import t from "react";
import { COMPONENT_DISPLAY_NAMES as p } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import u from "../../hooks/useCustomStyle/index.esm.js";
import { useTransitionState as y, useTransitionStateStyles as f } from "./useTransitionState.esm.js";
function M({ visible: a = !1, duration: e = 200, onFinish: n }) {
  const o = u({ displayName: p.TransitionScale }), r = y({ visible: a, duration: e, onFinish: n }), l = t.useCallback(
    () => ({
      transformOrigin: "center",
      transition: `transform ${e}ms ease-in-out, opacity ${e}ms ease-in-out`,
      willChange: "transform, opacity"
    }),
    [e]
  ), i = t.useCallback(
    () => ({
      transform: "scale(1)"
    }),
    []
  ), m = t.useCallback(
    () => ({
      transform: "scale(1)",
      willChange: "auto"
    }),
    []
  ), c = t.useCallback(
    () => ({
      transform: "scale(0)"
    }),
    []
  ), S = t.useCallback(
    () => ({
      transform: "scale(0)",
      willChange: "auto"
    }),
    []
  ), s = f({
    status: r,
    duration: e,
    getBaseStyle: l,
    getEnteringStyle: i,
    getEnteredStyle: m,
    getExitingStyle: c,
    getExitedStyle: S
  });
  return {
    componentStyle: t.useMemo(
      () => ({
        // -- default style --
        ...s,
        // -- custom style --
        ...o
      }),
      [s, o]
    ),
    __: {
      DynamicTransitionStatusStyles: s
    }
  };
}
export {
  M as useTransitionScaleStyles
};
