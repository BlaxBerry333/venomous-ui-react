import e from "react";
import { COMPONENT_DISPLAY_NAMES as C } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import T from "../../hooks/useCustomStyle/index.esm.js";
import { TRANSITION_SLIDE_DIRECTION_MAP as a } from "./Transition.Slide.types.esm.js";
import { useTransitionState as E, useTransitionStateStyles as N } from "./useTransitionState.esm.js";
function P({
  visible: m = !1,
  duration: s = 200,
  direction: o = "right",
  distance: r = 100,
  onFinish: i
}) {
  const l = T({ displayName: C.TransitionFade }), u = E({ visible: m, duration: s, onFinish: i }), t = e.useCallback(
    (g) => {
      if (g)
        return "translate(0, 0)";
      switch (o) {
        case a.LEFT:
          return `translate(-${r}px, 0)`;
        case a.RIGHT:
          return `translate(${r}px, 0)`;
        case a.UP:
          return `translate(0, -${r}px)`;
        case a.DOWN:
          return `translate(0, ${r}px)`;
        default:
          return "translate(0, 0)";
      }
    },
    [o, r]
  ), c = e.useCallback(
    () => ({
      transition: `transform ${s}ms ease-in-out, opacity ${s}ms ease-in-out`,
      willChange: "transform, opacity"
    }),
    [s]
  ), p = e.useCallback(
    () => ({
      transform: t(!0)
    }),
    [t]
  ), S = e.useCallback(
    () => ({
      transform: t(!0),
      willChange: "auto"
    }),
    [t]
  ), f = e.useCallback(
    () => ({
      transform: t(!1)
    }),
    [t]
  ), y = e.useCallback(
    () => ({
      transform: t(!1),
      willChange: "auto"
    }),
    [t]
  ), n = N({
    status: u,
    duration: s,
    getBaseStyle: c,
    getEnteringStyle: p,
    getEnteredStyle: S,
    getExitingStyle: f,
    getExitedStyle: y
  });
  return {
    componentStyle: e.useMemo(
      () => ({
        // -- default style --
        ...n,
        // -- custom style --
        ...l
      }),
      [n, l]
    ),
    __: {
      DynamicTransitionStatusStyles: n
    }
  };
}
export {
  P as useTransitionSlideStyles
};
