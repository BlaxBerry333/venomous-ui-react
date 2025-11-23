import { jsx as a, jsxs as _ } from "react/jsx-runtime";
import t from "react";
import O from "clsx";
import x from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as P } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as w } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import "../Buttons/Button.component.esm.js";
import I from "../Buttons/IconButton.component.esm.js";
import { ICON_BUTTON_SHAPE_MAP as T } from "../Buttons/IconButton.types.esm.js";
import "../Buttons/ScrollToTop.component.esm.js";
import { useLayoutSideActions as g, useLayoutSideStyles as B } from "./LayoutSide.hooks.esm.js";
const R = t.memo(
  t.forwardRef(
    ({
      className: u,
      style: n,
      children: r,
      expandedWidth: f = 280,
      collapsedWidth: c = 80,
      collapsible: l = !1,
      collapsed: S,
      onCollapsedChange: y,
      renderCollapseButton: i,
      renderHeader: m,
      renderMenu: s,
      ...N
    }, d) => {
      const { collapsed: o, toggle: e } = g({
        collapsed: S,
        onCollapsedChange: y
      }), { componentStyle: A, wrapperStyle: L, collapseButtonStyle: p } = B({
        expandedWidth: f,
        collapsedWidth: c,
        collapsed: o
      }), C = t.useMemo(() => m ? m(o) : null, [m, o]), E = t.useMemo(() => s ? s(o) : typeof r == "function" ? r(o) : r, [s, r, o]), M = t.useMemo(() => l ? i ? i(o, e) : /* @__PURE__ */ a(
        I,
        {
          icon: o ? "solar:arrow-right-bold" : "solar:arrow-left-bold",
          shape: T.CIRCLE,
          variant: "outlined",
          onClick: e,
          style: p
        }
      ) : null, [l, o, e, i, p]);
      return /* @__PURE__ */ _(
        x,
        {
          as: "aside",
          ref: d,
          className: O(w.LayoutSide, u),
          style: { ...A, ...n },
          ...N,
          children: [
            M,
            C,
            /* @__PURE__ */ a("div", { style: L, children: E })
          ]
        }
      );
    }
  )
);
R.displayName = P.LayoutSide;
export {
  R as default
};
