import { jsxs as x, jsx as l } from "react/jsx-runtime";
import { AnimatePresence as L, motion as M } from "framer-motion";
import o from "react";
import O from "../../hooks/useHandler/index.esm.js";
import P from "../Card/Card.esm.js";
const C = o.memo(
  ({ children: m, style: h, contentStyle: v, placement: c = "bottom", renderTrigger: y, trigger: n = "click" }) => {
    var f;
    const e = O(), a = o.useRef(null), i = o.useRef(null), r = o.useRef(null), [u, R] = o.useState({ top: 0, left: 0 });
    o.useEffect(() => {
      if (n !== "click") return;
      const s = (t) => {
        var p;
        r.current && !r.current.contains(t.target) && !((p = i.current) != null && p.contains(t.target)) && e.close();
      };
      return e.isOpen && document.addEventListener("mousedown", s), () => {
        document.removeEventListener("mousedown", s);
      };
    }, [e, n]), o.useEffect(() => {
      if (e.isOpen && a.current && i.current && r.current) {
        const s = a.current.getBoundingClientRect(), t = i.current.getBoundingClientRect(), p = r.current.offsetWidth, b = r.current.offsetHeight, d = t.top - s.top, k = t.left - s.left, E = c === "bottom" ? d + t.height : d - b, w = k + t.width / 2 - p / 2;
        R({ top: E, left: w });
      }
    }, [e.isOpen, c]);
    const g = n === "hover" ? {
      onMouseEnter: () => {
        n === "hover" && e.open();
      },
      onMouseLeave: () => {
        n === "hover" && e.close();
      }
    } : {}, W = n === "click" ? { onClick: e.toggle } : {};
    return /* @__PURE__ */ x("div", { ref: a, style: { display: "inline-block", position: "relative", ...h }, ...g, children: [
      /* @__PURE__ */ l("div", { ref: i, ...W, style: { display: "inline-block" }, children: y(e.isOpen) }),
      /* @__PURE__ */ l(L, { children: e.isOpen && /* @__PURE__ */ l(
        M.div,
        {
          ref: r,
          initial: { opacity: 0, y: c === "bottom" ? -5 : 5 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: c === "bottom" ? -5 : 5 },
          transition: { duration: 0.2 },
          style: {
            position: "absolute",
            top: u.top,
            left: u.left,
            zIndex: 1e3,
            minWidth: (f = i.current) == null ? void 0 : f.offsetWidth
          },
          children: /* @__PURE__ */ l(
            P,
            {
              style: {
                padding: "8px",
                ...v
              },
              children: m
            }
          )
        }
      ) })
    ] });
  }
);
C.displayName = "Popover";
export {
  C as default
};
