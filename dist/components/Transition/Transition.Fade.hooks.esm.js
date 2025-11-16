import s from "react";
import { COMPONENT_DISPLAY_NAMES as a } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import p from "../../hooks/useCustomStyle/index.esm.js";
import { useTransitionState as c, useTransitionStateStyles as S } from "./useTransitionState.esm.js";
function A({ visible: i = !1, duration: t = 200, onFinish: n }) {
  const e = p({ displayName: a.TransitionFade }), m = c({ visible: i, duration: t, onFinish: n }), r = s.useCallback(
    () => ({
      transition: `opacity ${t}ms ease-in-out`
    }),
    [t]
  ), o = S({
    status: m,
    duration: t,
    getBaseStyle: r
  });
  return {
    componentStyle: s.useMemo(
      () => ({
        // -- default style --
        width: "100%",
        height: "100%",
        ...o,
        // -- custom style --
        ...e
      }),
      [o, e]
    ),
    __: {
      DynamicTransitionStatusStyles: o
    }
  };
}
export {
  A as useTransitionFadeStyles
};
