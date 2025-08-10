import { jsxs as M, jsx as p } from "react/jsx-runtime";
import h from "clsx";
import { AnimatePresence as b, motion as k } from "framer-motion";
import o from "react";
import O from "../../hooks/useHandler/index.esm.js";
import "../Card/CardsBook.esm.js";
import "../Card/CardsProduct.esm.js";
import "../Card/CardsTitleBlock.esm.js";
import C from "../Card/Card.esm.js";
const H = o.memo(
  ({ children: v, style: y, contentStyle: R, placement: u = "bottom", renderTrigger: g, trigger: n = "click", onClickOutside: a }) => {
    var d;
    const e = O(), l = o.useRef(null), i = o.useRef(null), r = o.useRef(null), [f, W] = o.useState({ top: 0, left: 0 });
    o.useEffect(() => {
      if (n !== "click") return;
      const s = (t) => {
        var c;
        r.current && !r.current.contains(t.target) && !((c = i.current) != null && c.contains(t.target)) && (e.close(), a && a());
      };
      return e.isOpen && document.addEventListener("mousedown", s), () => {
        document.removeEventListener("mousedown", s);
      };
    }, [e, n, a]), o.useEffect(() => {
      if (e.isOpen && l.current && i.current && r.current) {
        const s = l.current.getBoundingClientRect(), t = i.current.getBoundingClientRect(), c = r.current.offsetWidth, x = r.current.offsetHeight, m = t.top - s.top, E = t.left - s.left, P = u === "bottom" ? m + t.height : m - x, L = E + t.width / 2 - c / 2;
        W({ top: P, left: L });
      }
    }, [e.isOpen, u]);
    const w = n === "hover" ? {
      onMouseEnter: () => {
        n === "hover" && e.open();
      },
      onMouseLeave: () => {
        n === "hover" && e.close();
      }
    } : {};
    return /* @__PURE__ */ M("div", { ref: l, style: { display: "inline-block", position: "relative", ...y }, ...w, children: [
      /* @__PURE__ */ p(
        "div",
        {
          ref: i,
          ...n === "click" ? { onClick: e.toggle } : {},
          className: h("Venomous-UI-React--Popover.Trigger"),
          style: { display: "inline-block", width: "100%" },
          children: g(e.isOpen)
        }
      ),
      /* @__PURE__ */ p(b, { children: e.isOpen && /* @__PURE__ */ p(
        k.div,
        {
          ref: r,
          initial: { opacity: 0, y: 0 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 0 },
          transition: { duration: 0.2 },
          className: h("Venomous-UI-React--Popover"),
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
                ...R
              },
              children: v
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
