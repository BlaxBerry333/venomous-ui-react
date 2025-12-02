import { jsx as N } from "react/jsx-runtime";
import o from "react";
import c from "clsx";
import u from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as t } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as l } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import S from "../../hooks/useCustomComponentProps/index.esm.js";
import { useTransitionFadeStyles as T } from "./Transition.Fade.hooks.esm.js";
const C = o.memo(
  o.forwardRef(
    ({ className: r, style: m, children: i, visible: s, duration: a, onFinish: n }, e) => {
      const p = S({
        displayName: t.TransitionFade
      }), d = a ?? p.duration ?? 200, { componentStyle: f } = T({
        visible: s,
        duration: d,
        onFinish: n
      });
      return /* @__PURE__ */ N(
        u,
        {
          as: "div",
          ref: e,
          className: c(l.TransitionFade, r),
          style: { ...f, ...m },
          children: i
        }
      );
    }
  )
);
C.displayName = t.TransitionFade;
export {
  C as default
};
