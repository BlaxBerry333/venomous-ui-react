import { jsxs as P, jsx as p } from "react/jsx-runtime";
import { AnimatePresence as b, motion as k } from "framer-motion";
import o from "react";
import O from "../../hooks/useHandler/index.esm.js";
import C from "../Card/Card.esm.js";
const H = o.memo(
  ({ children: m, style: v, contentStyle: y, placement: u = "bottom", renderTrigger: R, trigger: n = "click", onClickOutside: l }) => {
    var d;
    const e = O(), a = o.useRef(null), i = o.useRef(null), r = o.useRef(null), [f, g] = o.useState({ top: 0, left: 0 });
    o.useEffect(() => {
      if (n !== "click") return;
      const s = (t) => {
        var c;
        r.current && !r.current.contains(t.target) && !((c = i.current) != null && c.contains(t.target)) && (e.close(), l && l());
      };
      return e.isOpen && document.addEventListener("mousedown", s), () => {
        document.removeEventListener("mousedown", s);
      };
    }, [e, n, l]), o.useEffect(() => {
      if (e.isOpen && a.current && i.current && r.current) {
        const s = a.current.getBoundingClientRect(), t = i.current.getBoundingClientRect(), c = r.current.offsetWidth, E = r.current.offsetHeight, h = t.top - s.top, x = t.left - s.left, L = u === "bottom" ? h + t.height : h - E, M = x + t.width / 2 - c / 2;
        g({ top: L, left: M });
      }
    }, [e.isOpen, u]);
    const W = n === "hover" ? {
      onMouseEnter: () => {
        n === "hover" && e.open();
      },
      onMouseLeave: () => {
        n === "hover" && e.close();
      }
    } : {}, w = n === "click" ? { onClick: e.toggle } : {};
    return /* @__PURE__ */ P("div", { ref: a, style: { display: "inline-block", position: "relative", ...v }, ...W, children: [
      /* @__PURE__ */ p("div", { ref: i, ...w, style: { display: "inline-block", width: "100%" }, children: R(e.isOpen) }),
      /* @__PURE__ */ p(b, { children: e.isOpen && /* @__PURE__ */ p(
        k.div,
        {
          ref: r,
          initial: { opacity: 0, y: 0 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 0 },
          transition: { duration: 0.2 },
          style: {
            position: "absolute",
            top: f.top,
            left: f.left,
            zIndex: 1e3,
            minWidth: (d = i.current) == null ? void 0 : d.offsetWidth
          },
          children: /* @__PURE__ */ p(
            C,
            {
              style: {
                padding: "8px",
                ...y
              },
              children: m
            }
          )
        }
      ) })
    ] });
  }
);
H.displayName = "Popover";
export {
  H as default
};
