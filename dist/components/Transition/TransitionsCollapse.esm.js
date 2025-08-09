import { jsx as i } from "react/jsx-runtime";
import s from "clsx";
import n from "react";
import { AnimatePresence as r, motion as l } from "framer-motion";
const m = n.memo(({ className: t, style: o, children: a, isOpen: e }) => /* @__PURE__ */ i(r, { initial: !1, children: e && /* @__PURE__ */ i(
  l.div,
  {
    className: s("Venomous-UI-React--Transitions.Collapse", t),
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.2 },
    style: { overflow: "hidden", ...o },
    children: a
  }
) }));
m.displayName = "Transitions.Collapse";
export {
  m as default
};
