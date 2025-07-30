import { jsxs as O, jsx as l } from "react/jsx-runtime";
import { AnimatePresence as w, motion as C } from "framer-motion";
import o from "react";
import k from "../../hooks/useHandler/index.esm.js";
import E from "../Card/Card.esm.js";
const P = o.memo(({ children: a, style: m, contentStyle: g, placement: s = "bottom", renderTrigger: h }) => {
  var d;
  const t = k(), p = o.useRef(null), i = o.useRef(null), n = o.useRef(null), [f, v] = o.useState({ top: 0, left: 0 });
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
      const r = p.current.getBoundingClientRect(), e = i.current.getBoundingClientRect(), c = n.current.offsetWidth, y = n.current.offsetHeight, u = e.top - r.top, R = e.left - r.left, b = s === "bottom" ? u + e.height + 8 : u - y - 8, x = R + e.width / 2 - c / 2;
      v({ top: b, left: x });
    }
  }, [t.isOpen, s]), /* @__PURE__ */ O("div", { ref: p, style: { display: "inline-block", position: "relative", ...m }, children: [
    /* @__PURE__ */ l("div", { ref: i, onClick: t.toggle, style: { display: "inline-block" }, children: h(t.isOpen) }),
    /* @__PURE__ */ l(w, { children: t.isOpen && /* @__PURE__ */ l(
      C.div,
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
          minWidth: (d = i.current) == null ? void 0 : d.offsetWidth
        },
        children: /* @__PURE__ */ l(
          E,
          {
            style: {
              padding: "8px",
              ...g
            },
            children: a
          }
        )
      }
    ) })
  ] });
});
P.displayName = "Popover";
export {
  P as default
};
