import { jsxs as W, jsx as s } from "react/jsx-runtime";
import i from "react";
import j from "clsx";
import { Space as R } from "../Space/index.esm.js";
import { Typography as U } from "../Typographies/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as r } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as F } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import H from "../../hooks/useCustomComponentProps/index.esm.js";
import { useTabsTabActions as Y, useTabsTabStyles as q } from "./TabsTab.hooks.esm.js";
const z = i.memo(
  i.forwardRef(
    ({
      className: m,
      style: c,
      value: p,
      label: d,
      selected: u,
      disabled: T,
      color: b,
      prefix: t,
      suffix: n,
      onClick: f,
      onMouseEnter: M,
      onMouseLeave: y,
      onMouseDown: x,
      onMouseUp: N,
      column: h,
      spacing: C,
      as: E,
      maxWidth: S,
      ...g
    }, A) => {
      const o = H({
        displayName: r.TabsTab
      }), a = u ?? o.selected ?? !1, l = T ?? o.disabled ?? !1, v = b ?? o.color, P = h ?? o.column ?? !1, L = C ?? o.spacing ?? 4, O = E ?? o.as ?? "div", _ = S ?? o.maxWidth, { isHovered: k, isClicked: w, handleClick: D, ElementEvents: e } = Y({
        value: p,
        selected: a,
        disabled: l,
        onClick: f,
        onMouseEnter: M,
        onMouseLeave: y,
        onMouseDown: x,
        onMouseUp: N
      }), { componentStyle: I } = q({
        color: v,
        selected: a,
        disabled: l,
        column: P,
        isHovered: k,
        isClicked: w
      });
      return /* @__PURE__ */ W(
        R.Flex,
        {
          ref: A,
          as: O,
          maxWidth: _,
          spacing: L,
          className: j(F.TabsTab, m),
          style: { ...I, ...c },
          ...g,
          onClick: D,
          onMouseEnter: e.onMouseEnter,
          onMouseLeave: e.onMouseLeave,
          onMouseDown: e.onMouseDown,
          onMouseUp: e.onMouseUp,
          children: [
            t && /* @__PURE__ */ s("span", { style: { display: "inline-flex", alignItems: "center" }, children: t }),
            /* @__PURE__ */ s(U.Text, { as: "span", text: d, style: { color: "inherit" } }),
            n && /* @__PURE__ */ s("span", { style: { display: "inline-flex", alignItems: "center" }, children: n })
          ]
        }
      );
    }
  )
);
z.displayName = r.TabsTab;
export {
  z as default
};
