import { jsx as r } from "react/jsx-runtime";
import O from "clsx";
import e from "react";
import S from "../Backdrop/Backdrop.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as m } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as A } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import B from "../Box/Box.component.esm.js";
import P from "../Portal/Portal.component.esm.js";
import _ from "../../hooks/useCustomComponentProps/index.esm.js";
import { useDrawerStyles as y, useDrawerActions as E } from "./Drawer.hooks.esm.js";
const M = e.memo(
  e.forwardRef(
    ({
      className: p,
      style: a,
      children: s,
      as: c,
      open: n,
      placement: i,
      onClickBackdrop: l,
      autoCloseOnClickBackdrop: f,
      ...C
    }, d) => {
      const o = _({
        displayName: m.Drawer
      }), u = c ?? o.as ?? "div", t = n ?? o.open ?? !1, k = i ?? o.placement ?? "left", N = f ?? o.autoCloseOnClickBackdrop ?? !0, { componentStyle: w } = y({ open: t, placement: k }), { handleBackdropClick: D } = E({
        autoCloseOnClickBackdrop: N,
        onClickBackdrop: l
      });
      return /* @__PURE__ */ r(P, { children: /* @__PURE__ */ r(S, { open: t, onClick: D, children: /* @__PURE__ */ r(
        B,
        {
          as: u,
          ref: d,
          className: O(A.Drawer, p),
          style: { ...w, ...a },
          ...C,
          children: s
        }
      ) }) });
    }
  )
);
M.displayName = m.Drawer;
export {
  M as default
};
