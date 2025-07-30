import { jsx as i } from "react/jsx-runtime";
import e from "react";
import { AnimatePresence as a, motion as n } from "framer-motion";
const r = e.memo(({ children: t, isOpen: o }) => /* @__PURE__ */ i(a, { initial: !1, children: o && /* @__PURE__ */ i(
  n.div,
  {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.2 },
    style: { overflow: "hidden" },
    children: t
  }
) }));
r.displayName = "Transitions.Collapse";
export {
  r as default
};
