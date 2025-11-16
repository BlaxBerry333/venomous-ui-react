import { jsx as r } from "react/jsx-runtime";
import o from "react";
import { clsx as d } from "../../node_modules/clsx/dist/clsx.esm.js";
import s from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as P } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as S } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import { useProgressBarActions as y, useProgressBarStyles as B } from "./ProgressBar.hooks.esm.js";
const g = o.memo(
  o.forwardRef(
    ({ className: t, style: e, value: m, onChange: i, animated: a = !1, color: p, ...l }, f) => {
      const { displayValue: c } = y({ value: m, onChange: i, animated: a }), { containerStyle: n, insideBarStyle: N } = B({
        height: 4,
        color: p,
        displayValue: c
      });
      return /* @__PURE__ */ r(
        s,
        {
          as: "div",
          ref: f,
          className: d(S.ProgressBar, t),
          style: { ...n, ...e },
          ...l,
          children: /* @__PURE__ */ r(s, { as: "div", style: { ...N } })
        }
      );
    }
  )
);
g.displayName = P.ProgressBar;
export {
  g as default
};
