import { jsx as f } from "react/jsx-runtime";
import o from "react";
import { clsx as c } from "../../node_modules/clsx/dist/clsx.esm.js";
import N from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as d } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as l } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import { useBackdropStyles as S } from "./Backdrop.hooks.esm.js";
const n = o.memo(
  o.forwardRef(
    ({ className: r, style: m, children: t, open: p = !1, opacity: i, ...a }, e) => {
      const { componentStyle: s } = S({ open: p, opacity: i });
      return /* @__PURE__ */ f(
        N,
        {
          as: "div",
          ref: e,
          className: c(l.Backdrop, r),
          style: { ...s, ...m },
          ...a,
          children: t
        }
      );
    }
  )
);
n.displayName = d.Backdrop;
export {
  n as default
};
