import { jsx as r } from "react/jsx-runtime";
import s from "react";
import B from "clsx";
import t from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as e } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as S } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import g from "../../hooks/useCustomComponentProps/index.esm.js";
import { useProgressBarActions as A, useProgressBarStyles as C } from "./ProgressBar.hooks.esm.js";
const E = s.memo(
  s.forwardRef(
    ({ className: m, style: a, value: i, onChange: p, animated: n, color: l, ...c }, d) => {
      const o = g({
        displayName: e.ProgressBar
      }), f = n ?? o.animated ?? !1, P = l ?? o.color, { displayValue: N } = A({ value: i, onChange: p, animated: f }), { containerStyle: u, insideBarStyle: y } = C({
        height: 8,
        color: P,
        displayValue: N
      });
      return /* @__PURE__ */ r(
        t,
        {
          as: "div",
          ref: d,
          className: B(S.ProgressBar, m),
          style: { ...u, ...a },
          ...c,
          children: /* @__PURE__ */ r(t, { as: "div", style: { ...y } })
        }
      );
    }
  )
);
E.displayName = e.ProgressBar;
export {
  E as default
};
