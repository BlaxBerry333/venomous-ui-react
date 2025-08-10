import { jsx as t } from "react/jsx-runtime";
import c from "clsx";
import e from "react";
import { AnimatePresence as l, motion as m } from "framer-motion";
const p = e.memo(
  ({ className: o, style: n, children: s, isOpen: r, direction: a = "down" }) => {
    const i = e.useMemo(() => {
      switch (a) {
        case "left":
          return {
            initial: { opacity: 0, scaleX: 0, originX: 1 },
            animate: { opacity: 1, scaleX: 1, originX: 1 },
            exit: { opacity: 0, scaleX: 0, originX: 1 }
          };
        case "right":
          return {
            initial: { opacity: 0, scaleX: 0, originX: 0 },
            animate: { opacity: 1, scaleX: 1, originX: 0 },
            exit: { opacity: 0, scaleX: 0, originX: 0 }
          };
        case "up":
          return {
            initial: { opacity: 0, scaleY: 0, originY: 1 },
            animate: { opacity: 1, scaleY: 1, originY: 1 },
            exit: { opacity: 0, scaleY: 0, originY: 1 }
          };
        case "down":
        default:
          return {
            initial: { opacity: 0, scaleY: 0, originY: 0 },
            animate: { opacity: 1, scaleY: 1, originY: 0 },
            exit: { opacity: 0, scaleY: 0, originY: 0 }
          };
      }
    }, [a]);
    return /* @__PURE__ */ t(l, { initial: !1, children: r && /* @__PURE__ */ t(
      m.div,
      {
        className: c("Venomous-UI-React--Transitions.Collapse", o),
        initial: i.initial,
        animate: i.animate,
        exit: i.exit,
        transition: { duration: 0.2 },
        style: { overflow: "hidden", ...n },
        children: s
      }
    ) });
  }
);
p.displayName = "Transitions.Collapse";
export {
  p as default
};
