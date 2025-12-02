import { jsxs as x, Fragment as b, jsx as p } from "react/jsx-runtime";
import t from "react";
import h from "clsx";
import k from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as m } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as I } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import L from "../Portal/Portal.component.esm.js";
import { Transition as V } from "../Transition/index.esm.js";
import j from "../../hooks/useCustomComponentProps/index.esm.js";
import { usePopoverActions as F, usePopoverPosition as G, usePopoverStyles as w } from "./Popover.hooks.esm.js";
import { POPOVER_TRIGGER_EVENT_MAP as B } from "./Popover.types.esm.js";
const D = t.memo(
  t.forwardRef(
    ({
      className: l,
      style: f,
      trigger: c,
      children: u,
      triggerEvent: a,
      placement: P,
      offset: O,
      autoCloseOnClickOutside: v,
      defaultOpen: d,
      ...C
    }, e) => {
      const o = j({
        displayName: m.Popover
      }), E = a ?? o.triggerEvent ?? B.CLICK, g = P ?? o.placement ?? "bottom", N = O ?? o.offset ?? 2, R = v ?? o.autoCloseOnClickOutside ?? !0, A = d ?? o.defaultOpen ?? !1, r = t.useRef(null), s = t.useRef(null), { open: i, PopoverMouseEvents: M } = F({
        defaultOpen: A,
        triggerEvent: E,
        autoCloseOnClickOutside: R,
        triggerRef: r,
        popoverRef: s
      }), { position: S, isPositioned: _, isTriggerVisible: y } = G({
        triggerRef: r,
        popoverRef: s,
        placement: g,
        offset: N,
        isOpen: i
      }), { componentStyle: T } = w({
        position: S,
        isPositioned: _,
        isTriggerVisible: y
      });
      return /* @__PURE__ */ x(b, { children: [
        c({
          ref: r,
          isOpen: i
        }),
        /* @__PURE__ */ p(L, { children: /* @__PURE__ */ p(V.Fade, { visible: i, children: /* @__PURE__ */ p(
          k,
          {
            as: "div",
            ref: (n) => {
              s.current = n, typeof e == "function" ? e(n) : e && (e.current = n);
            },
            className: h(I.Popover, l),
            style: { ...T, ...f },
            ...C,
            ...M,
            children: u
          }
        ) }) })
      ] });
    }
  )
);
D.displayName = m.Popover;
export {
  D as default
};
