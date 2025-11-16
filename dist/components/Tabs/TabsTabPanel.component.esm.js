import { jsx as o } from "react/jsx-runtime";
import l from "react";
import { clsx as f } from "../../node_modules/clsx/dist/clsx.esm.js";
import { Transition as T } from "../Transition/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as b } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as p } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { useTabsTabPanelStyles as N } from "./TabsTabPanel.hooks.esm.js";
const P = l.memo(
  l.forwardRef(
    ({ className: r, style: t, visible: a = !1, keepMounted: m = !1, children: e, ...i }, n) => {
      const { componentStyle: s } = N();
      return !m && !a ? null : m ? /* @__PURE__ */ o(
        "div",
        {
          ref: n,
          className: f(p.TabsTabPanel, r),
          style: {
            ...s,
            display: a ? "block" : "none",
            ...t
          },
          ...i,
          children: e
        }
      ) : /* @__PURE__ */ o(T.Fade, { visible: a, duration: 200, children: /* @__PURE__ */ o(
        "div",
        {
          ref: n,
          className: f(p.TabsTabPanel, r),
          style: { ...s, ...t },
          ...i,
          children: e
        }
      ) });
    }
  )
);
P.displayName = b.TabsTabPanel;
export {
  P as default
};
