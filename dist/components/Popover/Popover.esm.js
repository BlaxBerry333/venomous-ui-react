import { jsxs as O, jsx as l } from "react/jsx-runtime";
import { AnimatePresence as w, motion as x } from "framer-motion";
import o from "react";
import C from "../../hooks/useHandler/index.esm.js";
import k from "../Card/Card.esm.js";
const E = o.memo(({ children: a, style: m, placement: s = "bottom", renderTrigger: g }) => {
  var u;
  const t = C(), p = o.useRef(null), i = o.useRef(null), n = o.useRef(null), [f, h] = o.useState({ top: 0, left: 0 });
  return o.useEffect(() => {
    const r = (e) => {
      var c;
      n.current && !n.current.contains(e.target) && !((c = i.current) != null && c.contains(e.target)) && t.close();
    };
    return t.isOpen && document.addEventListener("mousedown", r), () => {
      document.removeEventListener("mousedown", r);
    };
  }, [t]), o.useEffect(() => {
    if (t.isOpen && p.current && i.current && n.current) {
      const r = p.current.getBoundingClientRect(), e = i.current.getBoundingClientRect(), c = n.current.offsetWidth, v = n.current.offsetHeight, d = e.top - r.top, y = e.left - r.left, R = s === "bottom" ? d + e.height + 8 : d - v - 8, b = y + e.width / 2 - c / 2;
      h({ top: R, left: b });
    }
  }, [t.isOpen, s]), /* @__PURE__ */ O("div", { ref: p, style: { display: "inline-block", position: "relative" }, children: [
    /* @__PURE__ */ l("div", { ref: i, onClick: t.toggle, style: { display: "inline-block", cursor: "pointer" }, children: g({ isOpen: t.isOpen }) }),
    /* @__PURE__ */ l(w, { children: t.isOpen && /* @__PURE__ */ l(
      x.div,
      {
        ref: n,
        initial: { opacity: 0, y: s === "bottom" ? -5 : 5 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: s === "bottom" ? -5 : 5 },
        transition: { duration: 0.2 },
        style: {
          position: "absolute",
          top: f.top,
          left: f.left,
          zIndex: 1e3,
          minWidth: (u = i.current) == null ? void 0 : u.offsetWidth
        },
        children: /* @__PURE__ */ l(k, { style: m, children: a })
      }
    ) })
  ] });
});
E.displayName = "Popover";
export {
  E as default
};
