import { jsx as g, jsxs as u, Fragment as C } from "react/jsx-runtime";
import p from "react";
import I from "clsx";
import P from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as w } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as M } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import "../Buttons/Button.component.esm.js";
import { BUTTON_VARIANT_MAP as R } from "../Buttons/Button.types.esm.js";
import j from "../Buttons/IconButton.component.esm.js";
import "../Buttons/ScrollToTop.component.esm.js";
import { useLayoutSideActions as D, useLayoutSideStyles as b } from "./LayoutSide.hooks.esm.js";
const k = p.memo(
  p.forwardRef(
    ({
      className: N,
      style: S,
      children: t,
      expandedWidth: y = 280,
      collapsedWidth: r = 80,
      collapsible: f = !1,
      collapsed: A,
      onCollapsedChange: L,
      renderCollapseButton: l,
      renderHeader: i,
      renderMenu: m,
      renderBottom: s,
      ...E
    }, O) => {
      const { collapsed: o, toggle: a } = D({
        collapsed: A,
        onCollapsedChange: L
      }), { componentStyle: T, collapseButtonStyle: c } = b({
        expandedWidth: y,
        collapsedWidth: r,
        collapsed: o
      }), _ = p.useMemo(() => f ? l ? l(o, a) : /* @__PURE__ */ g(
        j,
        {
          icon: o ? "solar:arrow-right-bold" : "solar:arrow-left-bold",
          variant: R.CONTAINED,
          circle: !0,
          onClick: a,
          style: c
        }
      ) : null, [f, o, a, l, c]), x = p.useMemo(() => t ? typeof t == "function" ? t(o) : t : /* @__PURE__ */ u(C, { children: [
        i == null ? void 0 : i(o),
        m == null ? void 0 : m(o),
        s == null ? void 0 : s(o)
      ] }), [t, o, i, m, s]);
      return /* @__PURE__ */ u(
        P,
        {
          as: "aside",
          ref: O,
          className: I(M.LayoutSide, N),
          style: { ...T, ...S },
          ...E,
          children: [
            _,
            x
          ]
        }
      );
    }
  )
);
k.displayName = w.LayoutSide;
export {
  k as default
};
