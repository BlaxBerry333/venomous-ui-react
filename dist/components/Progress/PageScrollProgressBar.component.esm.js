import { jsx as s } from "react/jsx-runtime";
import t from "react";
import P from "clsx";
import f from "../Portal/Portal.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as g } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as S } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { usePageScrollProgressActions as n, usePageScrollProgressBarStyles as N } from "./PageScrollProgressBar.hooks.esm.js";
import u from "./ProgressBar.component.esm.js";
const A = t.memo(
  t.forwardRef(
    ({ className: m, style: a, color: r, disablePortal: o = !1, ...l }, i) => {
      const { displayValue: p } = n(), { containerStyle: c } = N({ color: r, disablePortal: o }), e = /* @__PURE__ */ s(
        u,
        {
          ref: i,
          className: P(S.PageScrollProgressBar, m),
          style: { ...c, ...a },
          value: p,
          color: r,
          ...l
        }
      );
      return o ? e : /* @__PURE__ */ s(f, { children: e });
    }
  )
);
A.displayName = g.PageScrollProgressBar;
export {
  A as default
};
