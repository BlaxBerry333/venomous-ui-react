import { jsx as e } from "react/jsx-runtime";
import p from "react";
import b from "clsx";
import { Transition as c } from "../Transition/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as f } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as T } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import P from "../../hooks/useCustomComponentProps/index.esm.js";
import { useTabsTabPanelStyles as N } from "./TabsTabPanel.hooks.esm.js";
const M = p.memo(
  p.forwardRef(
    ({ className: t, style: a, visible: u, keepMounted: d, children: r, ...s }, m) => {
      const i = P({
        displayName: f.TabsTabPanel
      }), o = u ?? i.visible ?? !1, n = d ?? i.keepMounted ?? !1, { componentStyle: l } = N();
      return !n && !o ? null : n ? /* @__PURE__ */ e(
        "div",
        {
          ref: m,
          className: b(T.TabsTabPanel, t),
          style: {
            ...l,
            display: o ? "block" : "none",
            ...a
          },
          ...s,
          children: r
        }
      ) : /* @__PURE__ */ e(c.Fade, { visible: o, duration: 200, children: /* @__PURE__ */ e(
        "div",
        {
          ref: m,
          className: b(T.TabsTabPanel, t),
          style: { ...l, ...a },
          ...s,
          children: r
        }
      ) });
    }
  )
);
M.displayName = f.TabsTabPanel;
export {
  M as default
};
