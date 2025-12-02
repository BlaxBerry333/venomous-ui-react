import { jsx as T } from "react/jsx-runtime";
import t from "react";
import u from "clsx";
import A from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as i } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as C } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import E from "../../hooks/useCustomComponentProps/index.esm.js";
import { useTransitionSlideStyles as I } from "./Transition.Slide.hooks.esm.js";
import { TRANSITION_SLIDE_DIRECTION_MAP as _ } from "./Transition.Slide.types.esm.js";
const M = t.memo(
  t.forwardRef(
    ({
      children: r,
      visible: m,
      duration: n,
      direction: s,
      distance: e,
      onFinish: p,
      className: a,
      style: d
    }, c) => {
      const o = E({
        displayName: i.TransitionSlide
      }), S = n ?? o.duration ?? 200, l = s ?? o.direction ?? _.RIGHT, N = e ?? o.distance ?? 100, { componentStyle: f } = I({
        visible: m,
        duration: S,
        direction: l,
        distance: N,
        onFinish: p
      });
      return /* @__PURE__ */ T(
        A,
        {
          as: "div",
          ref: c,
          className: u(C.TransitionSlide, a),
          style: { ...f, ...d },
          children: r
        }
      );
    }
  )
);
M.displayName = i.TransitionSlide;
export {
  M as default
};
