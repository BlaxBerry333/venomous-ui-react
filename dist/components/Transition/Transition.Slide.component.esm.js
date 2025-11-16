import { jsx as N } from "react/jsx-runtime";
import o from "react";
import { clsx as f } from "../../node_modules/clsx/dist/clsx.esm.js";
import l from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as T } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as d } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import { useTransitionSlideStyles as A } from "./Transition.Slide.hooks.esm.js";
import { TRANSITION_SLIDE_DIRECTION_MAP as E } from "./Transition.Slide.types.esm.js";
const I = o.memo(
  o.forwardRef(
    ({
      children: r,
      visible: i,
      duration: t = 200,
      direction: m = E.RIGHT,
      distance: e = 100,
      onFinish: p,
      className: s,
      style: a
    }, n) => {
      const { componentStyle: S } = A({
        visible: i,
        duration: t,
        direction: m,
        distance: e,
        onFinish: p
      });
      return /* @__PURE__ */ N(
        l,
        {
          as: "div",
          ref: n,
          className: f(d.TransitionSlide, s),
          style: { ...S, ...a },
          children: r
        }
      );
    }
  )
);
I.displayName = T.TransitionSlide;
export {
  I as default
};
