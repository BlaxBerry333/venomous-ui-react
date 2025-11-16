import { jsxs as O, Fragment as _, jsx as p } from "react/jsx-runtime";
import o from "react";
import { clsx as x } from "../../node_modules/clsx/dist/clsx.esm.js";
import y from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as C } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as T } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import h from "../Portal/Portal.component.esm.js";
import { Transition as I } from "../Transition/index.esm.js";
import { usePopoverActions as L, usePopoverPosition as b, usePopoverStyles as j } from "./Popover.hooks.esm.js";
import { POPOVER_TRIGGER_MAP as F } from "./Popover.types.esm.js";
const G = o.memo(
  o.forwardRef(
    ({
      className: f,
      style: l,
      children: s,
      content: c,
      trigger: u = F.CLICK,
      placement: P = "bottom",
      offset: a = 2,
      autoCloseOnClickOutside: v = !0,
      defaultOpen: E = !1,
      open: N,
      onOpenChange: R,
      ...M
    }, r) => {
      const t = o.useRef(null), i = o.useRef(null), { open: e, onToggle: n, PopoverMouseEvents: g } = L({
        defaultOpen: E,
        open: N,
        onOpenChange: R,
        trigger: u,
        autoCloseOnClickOutside: v,
        triggerRef: t,
        popoverRef: i
      }), { position: A } = b({
        triggerRef: t,
        popoverRef: i,
        placement: P,
        offset: a,
        open: e
      }), { componentStyle: S } = j({ position: A }), d = o.useMemo(() => s({
        ref: t,
        open: e,
        onToggle: n
      }), [s, e, n]);
      return /* @__PURE__ */ O(_, { children: [
        d,
        /* @__PURE__ */ p(h, { children: /* @__PURE__ */ p(I.Fade, { visible: e, children: /* @__PURE__ */ p(
          y,
          {
            as: "div",
            ref: (m) => {
              i.current = m, typeof r == "function" ? r(m) : r && (r.current = m);
            },
            className: x(T.Popover, f),
            style: { ...S, ...l },
            ...M,
            ...g,
            children: c
          }
        ) }) })
      ] });
    }
  )
);
G.displayName = C.Popover;
export {
  G as default
};
