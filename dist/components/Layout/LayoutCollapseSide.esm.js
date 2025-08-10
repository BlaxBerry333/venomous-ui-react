import { jsxs as p, jsx as u } from "react/jsx-runtime";
import g from "clsx";
import { motion as S } from "framer-motion";
import o from "react";
import { Buttons as h } from "../Button/index.esm.js";
import { useLayoutContext as f } from "./context/hooks.esm.js";
const C = o.memo(
  ({ className: e, style: l, collapsedSideWidth: r = 0, renderContent: n }) => {
    const { headerHeight: a, sideWidth: d } = f(), [t, m] = o.useState(y), c = o.useCallback(() => {
      const s = !t;
      x(s), o.startTransition(() => m(s));
    }, [t]);
    return /* @__PURE__ */ p(
      S.aside,
      {
        className: g("Venomous-UI-React--Layout.CollapseSide", e),
        initial: !1,
        animate: { width: t ? r : d },
        transition: { type: "spring", stiffness: 300, damping: 30 },
        style: {
          boxSizing: "border-box",
          height: `calc(100svh - ${a}px)`,
          position: "sticky",
          top: `${a}px`,
          left: 0,
          zIndex: 1,
          ...l
        },
        children: [
          /* @__PURE__ */ u(
            h.Icon,
            {
              className: "Venomous-UI-React--Layout.CollapseSide--Toggler",
              icon: t ? "solar:arrow-right-bold" : "solar:arrow-left-bold",
              iconWidth: 24,
              variant: "outlined",
              onClick: c,
              style: {
                position: "absolute",
                top: 8,
                right: 0,
                transform: "translateX(50%)",
                zIndex: 1,
                borderRadius: "50%",
                borderWidth: 0,
                height: 32,
                minWidth: 32,
                padding: 0
              }
            }
          ),
          n({
            isCollapsed: t,
            className: "Venomous-UI-React--Layout.CollapseSide--Content",
            baseStyles: { height: "100%", width: "100%", overflowX: "hidden", overflowY: "scroll" }
          })
        ]
      }
    );
  }
);
C.displayName = "Layout.CollapseSide";
const i = "VENOMOUS_UI__LAYOUT_COLLAPSE_SIDE";
function y() {
  return localStorage.getItem(i) === "true";
}
function x(e) {
  localStorage.setItem(i, String(e));
}
export {
  C as default
};
