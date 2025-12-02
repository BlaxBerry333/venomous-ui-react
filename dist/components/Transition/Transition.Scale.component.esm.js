import { jsx as S } from "react/jsx-runtime";
import o from "react";
import f from "clsx";
import N from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as t } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as u } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import d from "../../hooks/useCustomComponentProps/index.esm.js";
import { useTransitionScaleStyles as T } from "./Transition.Scale.hooks.esm.js";
const C = o.memo(
  o.forwardRef(
    ({ className: r, style: m, children: i, visible: s, duration: a, onFinish: n }, e) => {
      const p = d({
        displayName: t.TransitionScale
      }), c = a ?? p.duration ?? 200, { componentStyle: l } = T({
        visible: s,
        duration: c,
        onFinish: n
      });
      return /* @__PURE__ */ S(
        N,
        {
          as: "div",
          ref: e,
          className: f(u.TransitionScale, r),
          style: { ...l, ...m },
          children: i
        }
      );
    }
  )
);
C.displayName = t.TransitionScale;
export {
  C as default
};
