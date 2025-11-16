import { jsx as n } from "react/jsx-runtime";
import o from "react";
import { clsx as l } from "../../node_modules/clsx/dist/clsx.esm.js";
import S from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as c } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as f } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import { useTransitionScaleStyles as N } from "./Transition.Scale.hooks.esm.js";
const T = o.memo(
  o.forwardRef(
    ({ className: r, style: t, children: m, visible: i, duration: a = 200, onFinish: e }, p) => {
      const { componentStyle: s } = N({
        visible: i,
        duration: a,
        onFinish: e
      });
      return /* @__PURE__ */ n(
        S,
        {
          as: "div",
          ref: p,
          className: l(f.TransitionScale, r),
          style: { ...s, ...t },
          children: m
        }
      );
    }
  )
);
T.displayName = c.TransitionScale;
export {
  T as default
};
