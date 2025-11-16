import { jsx as r } from "react/jsx-runtime";
import { clsx as N } from "../../node_modules/clsx/dist/clsx.esm.js";
import t from "react";
import S from "../Backdrop/Backdrop.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as w } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as A } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import D from "../Box/Box.component.esm.js";
import u from "../Portal/Portal.component.esm.js";
import { useDrawerStyles as C, useDrawerActions as E } from "./Drawer.hooks.esm.js";
const M = t.memo(
  t.forwardRef(
    ({
      className: m,
      style: e,
      children: i,
      as: a = "div",
      open: o = !1,
      placement: p = "left",
      onClickBackdrop: s,
      autoCloseOnClickBackdrop: l = !0,
      ...c
    }, f) => {
      const { componentStyle: n } = C({ open: o, placement: p }), { handleBackdropClick: d } = E({
        autoCloseOnClickBackdrop: l,
        onClickBackdrop: s
      });
      return /* @__PURE__ */ r(u, { children: /* @__PURE__ */ r(S, { open: o, onClick: d, children: /* @__PURE__ */ r(
        D,
        {
          as: a,
          ref: f,
          className: N(A.Drawer, m),
          style: { ...n, ...e },
          ...c,
          children: i
        }
      ) }) });
    }
  )
);
M.displayName = w.Drawer;
export {
  M as default
};
