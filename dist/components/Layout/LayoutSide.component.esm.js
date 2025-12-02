import { jsx as _, jsxs as r, Fragment as b } from "react/jsx-runtime";
import p from "react";
import h from "clsx";
import g from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as y } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as I } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import "../Buttons/Button.component.esm.js";
import { BUTTON_VARIANT_MAP as w } from "../Buttons/Button.types.esm.js";
import M from "../Buttons/IconButton.component.esm.js";
import "../Buttons/ScrollToTop.component.esm.js";
import R from "../../hooks/useCustomComponentProps/index.esm.js";
import { useLayoutSideActions as j, useLayoutSideStyles as D } from "./LayoutSide.hooks.esm.js";
const k = p.memo(
  p.forwardRef(
    ({
      className: N,
      style: S,
      children: t,
      expandedWidth: n,
      collapsedWidth: A,
      collapsible: e,
      collapsed: x,
      onCollapsedChange: L,
      renderCollapseButton: m,
      renderHeader: s,
      renderMenu: i,
      renderBottom: l,
      ...d
    }, C) => {
      const a = R({
        displayName: y.LayoutSide
      }), E = n ?? a.expandedWidth ?? 280, O = A ?? a.collapsedWidth ?? 80, f = e ?? a.collapsible ?? !1, { collapsed: o, toggle: c } = j({
        collapsed: x,
        onCollapsedChange: L
      }), { componentStyle: P, collapseButtonStyle: u } = D({
        expandedWidth: E,
        collapsedWidth: O,
        collapsed: o
      }), T = p.useMemo(() => f ? m ? m(o, c) : /* @__PURE__ */ _(
        M,
        {
          icon: o ? "solar:arrow-right-bold" : "solar:arrow-left-bold",
          variant: w.CONTAINED,
          circle: !0,
          onClick: c,
          style: u
        }
      ) : null, [f, o, c, m, u]), W = p.useMemo(() => t ? typeof t == "function" ? t(o) : t : /* @__PURE__ */ r(b, { children: [
        s == null ? void 0 : s(o),
        i == null ? void 0 : i(o),
        l == null ? void 0 : l(o)
      ] }), [t, o, s, i, l]);
      return /* @__PURE__ */ r(
        g,
        {
          as: "aside",
          ref: C,
          className: h(I.LayoutSide, N),
          style: { ...P, ...S },
          ...d,
          children: [
            T,
            W
          ]
        }
      );
    }
  )
);
k.displayName = y.LayoutSide;
export {
  k as default
};
