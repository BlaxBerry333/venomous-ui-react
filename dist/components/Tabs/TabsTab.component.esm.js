import { jsxs as L, jsx as o } from "react/jsx-runtime";
import a from "react";
import { clsx as O } from "../../node_modules/clsx/dist/clsx.esm.js";
import { Space as _ } from "../Space/index.esm.js";
import { Typography as g } from "../Typographies/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as k } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as w } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { useTabsTabActions as D, useTabsTabStyles as I } from "./TabsTab.hooks.esm.js";
const P = a.memo(
  a.forwardRef(
    ({
      className: i,
      style: l,
      value: m,
      label: p,
      selected: s = !1,
      disabled: t = !1,
      color: c,
      prefix: n,
      suffix: r,
      onClick: T,
      onMouseEnter: f,
      onMouseLeave: M,
      onMouseDown: u,
      onMouseUp: y,
      column: b = !1,
      spacing: d = 4,
      as: E = "div",
      maxWidth: N,
      ...S
    }, x) => {
      const { isHovered: h, isClicked: A, handleClick: C, ElementEvents: e } = D({
        value: m,
        selected: s,
        disabled: t,
        onClick: T,
        onMouseEnter: f,
        onMouseLeave: M,
        onMouseDown: u,
        onMouseUp: y
      }), { componentStyle: v } = I({
        color: c,
        selected: s,
        disabled: t,
        column: b,
        isHovered: h,
        isClicked: A
      });
      return /* @__PURE__ */ L(
        _.Flex,
        {
          ref: x,
          as: E,
          maxWidth: N,
          spacing: d,
          className: O(w.TabsTab, i),
          style: { ...v, ...l },
          ...S,
          onClick: C,
          onMouseEnter: e.onMouseEnter,
          onMouseLeave: e.onMouseLeave,
          onMouseDown: e.onMouseDown,
          onMouseUp: e.onMouseUp,
          children: [
            n && /* @__PURE__ */ o("span", { style: { display: "inline-flex", alignItems: "center" }, children: n }),
            /* @__PURE__ */ o(g.Text, { as: "span", text: p, style: { color: "inherit" } }),
            r && /* @__PURE__ */ o("span", { style: { display: "inline-flex", alignItems: "center" }, children: r })
          ]
        }
      );
    }
  )
);
P.displayName = k.TabsTab;
export {
  P as default
};
