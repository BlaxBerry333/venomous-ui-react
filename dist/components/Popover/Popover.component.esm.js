import { jsxs as O, Fragment as S, jsx as m } from "react/jsx-runtime";
import r from "react";
import _ from "clsx";
import T from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as g } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as x } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import y from "../Portal/Portal.component.esm.js";
import { Transition as C } from "../Transition/index.esm.js";
import { usePopoverActions as b, usePopoverPosition as h, usePopoverStyles as I } from "./Popover.hooks.esm.js";
import { POPOVER_TRIGGER_EVENT_MAP as L } from "./Popover.types.esm.js";
const V = r.memo(
  r.forwardRef(
    ({
      className: p,
      style: n,
      trigger: f,
      children: l,
      triggerEvent: c = L.CLICK,
      placement: P = "bottom",
      offset: a = 2,
      autoCloseOnClickOutside: u = !0,
      defaultOpen: v = !1,
      ...E
    }, o) => {
      const e = r.useRef(null), t = r.useRef(null), { open: i, PopoverMouseEvents: N } = b({
        defaultOpen: v,
        triggerEvent: c,
        autoCloseOnClickOutside: u,
        triggerRef: e,
        popoverRef: t
      }), { position: R, isPositioned: d, isTriggerVisible: A } = h({
        triggerRef: e,
        popoverRef: t,
        placement: P,
        offset: a,
        isOpen: i
      }), { componentStyle: M } = I({
        position: R,
        isPositioned: d,
        isTriggerVisible: A
      });
      return /* @__PURE__ */ O(S, { children: [
        f({
          ref: e,
          isOpen: i
        }),
        /* @__PURE__ */ m(y, { children: /* @__PURE__ */ m(C.Fade, { visible: i, children: /* @__PURE__ */ m(
          T,
          {
            as: "div",
            ref: (s) => {
              t.current = s, typeof o == "function" ? o(s) : o && (o.current = s);
            },
            className: _(x.Popover, p),
            style: { ...M, ...n },
            ...E,
            ...N,
            children: l
          }
        ) }) })
      ] });
    }
  )
);
V.displayName = g.Popover;
export {
  V as default
};
