import { jsx as n } from "react/jsx-runtime";
import o from "react";
import { clsx as f } from "../../node_modules/clsx/dist/clsx.esm.js";
import N from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as d } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as l } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import { useTransitionFadeStyles as S } from "./Transition.Fade.hooks.esm.js";
const c = o.memo(
  o.forwardRef(
    ({ className: r, style: t, children: m, visible: i, duration: a = 200, onFinish: e }, p) => {
      const { componentStyle: s } = S({
        visible: i,
        duration: a,
        onFinish: e
      });
      return /* @__PURE__ */ n(
        N,
        {
          as: "div",
          ref: p,
          className: f(l.TransitionFade, r),
          style: { ...s, ...t },
          children: m
        }
      );
    }
  )
);
c.displayName = d.TransitionFade;
export {
  c as default
};
