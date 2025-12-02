import { jsx as e } from "react/jsx-runtime";
import t from "react";
import g from "clsx";
import S from "../Portal/Portal.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as a } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as d } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import u from "../../hooks/useCustomComponentProps/index.esm.js";
import { usePageScrollProgressActions as N, usePageScrollProgressBarStyles as B } from "./PageScrollProgressBar.hooks.esm.js";
import y from "./ProgressBar.component.esm.js";
const A = t.memo(
  t.forwardRef(
    ({ className: m, style: l, color: r, disablePortal: i, ...p }, P) => {
      const c = u({
        displayName: a.PageScrollProgressBar
      }), o = i ?? c.disablePortal ?? !1, { displayValue: n } = N(), { containerStyle: f } = B({ color: r, disablePortal: o }), s = /* @__PURE__ */ e(
        y,
        {
          ref: P,
          className: g(d.PageScrollProgressBar, m),
          style: { ...f, ...l },
          value: n,
          color: r,
          animated: !1,
          ...p
        }
      );
      return o ? s : /* @__PURE__ */ e(S, { children: s });
    }
  )
);
A.displayName = a.PageScrollProgressBar;
export {
  A as default
};
