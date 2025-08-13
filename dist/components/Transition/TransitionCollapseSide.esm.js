import { jsxs as c, jsx as p } from "react/jsx-runtime";
import S from "clsx";
import { motion as g } from "framer-motion";
import e from "react";
import { Buttons as f } from "../Button/index.esm.js";
const h = e.memo(
  ({
    className: t,
    style: i,
    expandSideWidth: l = 200,
    collapsedSideWidth: n = 60,
    renderContent: r,
    storageKey: s = "VENOMOUS_UI__TRANSITION_COLLAPSE_SIDE"
  }) => {
    const [o, d] = e.useState(u(s)), m = e.useCallback(() => {
      const a = !o;
      C(s, a), e.startTransition(() => d(a));
    }, [o, s]);
    return /* @__PURE__ */ c(
      g.aside,
      {
        className: S("Venomous-UI-React--Transition.CollapseSide", t),
        initial: !1,
        animate: { width: o ? n : l },
        transition: { type: "spring", stiffness: 300, damping: 30 },
        style: {
          boxSizing: "border-box",
          height: "calc(100svh - 0px)",
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 1,
          ...i
        },
        children: [
          /* @__PURE__ */ p(
            f.Icon,
            {
              className: "Venomous-UI-React--Transition.CollapseSide--Toggler",
              icon: o ? "solar:arrow-right-bold" : "solar:arrow-left-bold",
              iconWidth: 24,
              variant: "outlined",
              onClick: m,
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
          r({
            isCollapsed: o,
            className: "Venomous-UI-React--Transition.CollapseSide--Content",
            baseStyles: { height: "100%", width: "100%", overflowX: "hidden", overflowY: "scroll" }
          })
        ]
      }
    );
  }
);
h.displayName = "Transition.CollapseSide";
function u(t) {
  return localStorage.getItem(t) === "true";
}
function C(t, i) {
  localStorage.setItem(t, String(i));
}
export {
  h as default
};
