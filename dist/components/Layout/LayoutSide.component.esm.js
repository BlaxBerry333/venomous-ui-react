import { jsx as u, jsxs as P } from "react/jsx-runtime";
import t from "react";
import w from "clsx";
import I from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as T } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as b } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import "../Buttons/Button.component.esm.js";
import g from "../Buttons/IconButton.component.esm.js";
import { ICON_BUTTON_SHAPE_MAP as h } from "../Buttons/IconButton.types.esm.js";
import "../Buttons/ScrollToTop.component.esm.js";
import { useLayoutSideActions as v, useLayoutSideStyles as R } from "./LayoutSide.hooks.esm.js";
const j = t.memo(
  t.forwardRef(
    ({
      className: f,
      style: c,
      children: r,
      expandedWidth: y = 280,
      collapsedWidth: S = 80,
      collapsible: n = !1,
      collapsed: N,
      onCollapsedChange: d,
      renderCollapseButton: i,
      renderHeader: e,
      renderMenu: m,
      renderBottom: s,
      ...A
    }, C) => {
      const { collapsed: o, toggle: l } = v({
        collapsed: N,
        onCollapsedChange: d
      }), { componentStyle: L, wrapperStyle: M, collapseButtonStyle: p, bottomStyle: E } = R({
        expandedWidth: y,
        collapsedWidth: S,
        collapsed: o
      }), _ = t.useMemo(() => e ? e(o) : null, [e, o]), O = t.useMemo(() => m ? m(o) : typeof r == "function" ? r(o) : r, [m, r, o]), a = t.useMemo(() => s ? s(o) : null, [s, o]), x = t.useMemo(() => n ? i ? i(o, l) : /* @__PURE__ */ u(
        g,
        {
          icon: o ? "solar:arrow-right-bold" : "solar:arrow-left-bold",
          shape: h.CIRCLE,
          variant: "outlined",
          onClick: l,
          style: p
        }
      ) : null, [n, o, l, i, p]);
      return /* @__PURE__ */ P(
        I,
        {
          as: "aside",
          ref: C,
          className: w(b.LayoutSide, f),
          style: { ...L, ...c },
          ...A,
          children: [
            x,
            _,
            /* @__PURE__ */ u("div", { style: M, children: O }),
            a && /* @__PURE__ */ u("div", { style: E, children: a })
          ]
        }
      );
    }
  )
);
j.displayName = T.LayoutSide;
export {
  j as default
};
