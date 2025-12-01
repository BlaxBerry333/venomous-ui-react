import { jsx as I, jsxs as u, Fragment as T } from "react/jsx-runtime";
import p from "react";
import g from "clsx";
import P from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as R } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as w } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import "../Buttons/Button.component.esm.js";
import M from "../Buttons/IconButton.component.esm.js";
import { ICON_BUTTON_VARIANT_MAP as j } from "../Buttons/IconButton.types.esm.js";
import "../Buttons/ScrollToTop.component.esm.js";
import { useLayoutSideActions as b, useLayoutSideStyles as k } from "./LayoutSide.hooks.esm.js";
const n = p.memo(
  p.forwardRef(
    ({
      className: S,
      style: y,
      children: t,
      expandedWidth: N = 280,
      collapsedWidth: r = 80,
      collapsible: f = !1,
      collapsed: A,
      onCollapsedChange: L,
      renderCollapseButton: a,
      renderHeader: i,
      renderMenu: m,
      renderBottom: s,
      ..._
    }, C) => {
      const { collapsed: o, toggle: l } = b({
        collapsed: A,
        onCollapsedChange: L
      }), { componentStyle: E, collapseButtonStyle: c } = k({
        expandedWidth: N,
        collapsedWidth: r,
        collapsed: o
      }), O = p.useMemo(() => f ? a ? a(o, l) : /* @__PURE__ */ I(
        M,
        {
          icon: o ? "solar:arrow-right-bold" : "solar:arrow-left-bold",
          variant: j.CIRCLE,
          onClick: l,
          style: c
        }
      ) : null, [f, o, l, a, c]), x = p.useMemo(() => t ? typeof t == "function" ? t(o) : t : /* @__PURE__ */ u(T, { children: [
        i == null ? void 0 : i(o),
        m == null ? void 0 : m(o),
        s == null ? void 0 : s(o)
      ] }), [t, o, i, m, s]);
      return /* @__PURE__ */ u(
        P,
        {
          as: "aside",
          ref: C,
          className: g(w.LayoutSide, S),
          style: { ...E, ...y },
          ..._,
          children: [
            O,
            x
          ]
        }
      );
    }
  )
);
n.displayName = R.LayoutSide;
export {
  n as default
};
