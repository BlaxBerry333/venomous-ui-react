import { jsx as p, jsxs as _ } from "react/jsx-runtime";
import r from "react";
import C from "clsx";
import M from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as O } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as x } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import "../Buttons/Button.component.esm.js";
import P from "../Buttons/IconButton.component.esm.js";
import { ICON_BUTTON_SHAPE_MAP as w } from "../Buttons/IconButton.types.esm.js";
import "../Buttons/ScrollToTop.component.esm.js";
import { useLayoutSideActions as I, useLayoutSideStyles as T } from "./LayoutSide.hooks.esm.js";
const g = r.memo(
  r.forwardRef(
    ({
      className: l,
      style: f,
      children: t,
      expandedWidth: n = 280,
      collapsedWidth: u = 80,
      collapsible: s = !1,
      collapsed: c,
      onCollapsedChange: S,
      renderCollapseButton: i,
      renderMenu: e,
      ...y
    }, d) => {
      const { collapsed: o, toggle: m } = I({
        collapsed: c,
        onCollapsedChange: S
      }), { componentStyle: N, wrapperStyle: A, collapseButtonStyle: a } = T({
        expandedWidth: n,
        collapsedWidth: u,
        collapsed: o
      }), L = r.useMemo(() => e ? e(o) : typeof t == "function" ? t(o) : t, [e, t, o]), E = r.useMemo(() => s ? i ? i(o, m) : /* @__PURE__ */ p(
        P,
        {
          icon: o ? "solar:arrow-right-bold" : "solar:arrow-left-bold",
          shape: w.CIRCLE,
          variant: "outlined",
          onClick: m,
          style: a
        }
      ) : null, [s, o, m, i, a]);
      return /* @__PURE__ */ _(
        M,
        {
          as: "aside",
          ref: d,
          className: C(x.LayoutSide, l),
          style: { ...N, ...f },
          ...y,
          children: [
            E,
            /* @__PURE__ */ p("div", { style: A, children: L })
          ]
        }
      );
    }
  )
);
g.displayName = O.LayoutSide;
export {
  g as default
};
