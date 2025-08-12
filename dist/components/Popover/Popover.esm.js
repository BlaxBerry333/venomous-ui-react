import { jsxs as I, jsx as f } from "react/jsx-runtime";
import d from "clsx";
import { AnimatePresence as L, motion as N } from "framer-motion";
import r from "react";
import W from "../../hooks/useHandler/index.esm.js";
import "../Card/CardsBook.esm.js";
import "../Card/CardsProduct.esm.js";
import "../Card/CardsTitleBlock.esm.js";
import C from "../Card/Card.esm.js";
const M = r.memo(
  ({ children: y, style: b, contentStyle: w, direction: g = "bottom", renderTrigger: k, trigger: n = "click", onClickOutside: m }) => {
    const t = W(), h = r.useRef(null), u = r.useRef(null), i = r.useRef(null), [R, x] = r.useState({ top: 0, left: 0 });
    r.useEffect(() => {
      if (n !== "click") return;
      const a = (e) => {
        var o;
        i.current && !i.current.contains(e.target) && !((o = u.current) != null && o.contains(e.target)) && (t.close(), m && m());
      };
      return t.isOpen && document.addEventListener("mousedown", a), () => {
        document.removeEventListener("mousedown", a);
      };
    }, [t, n, m]), r.useEffect(() => {
      if (t.isOpen && h.current && u.current && i.current) {
        const a = h.current.getBoundingClientRect(), e = u.current.getBoundingClientRect(), o = i.current.offsetWidth, v = i.current.offsetHeight, p = e.top - a.top, l = e.left - a.left;
        let s, c;
        switch (g) {
          case "top":
            s = p - v, c = l + e.width / 2 - o / 2;
            break;
          case "bottom":
            s = p + e.height, c = l + e.width / 2 - o / 2;
            break;
          case "left":
            s = p + e.height / 2 - v / 2, c = l - o;
            break;
          case "right":
            s = p + e.height / 2 - v / 2, c = l + e.width;
            break;
          default:
            s = p + e.height, c = l + e.width / 2 - o / 2;
        }
        x({ top: s, left: c });
      }
    }, [t.isOpen, g]);
    const P = () => {
      n === "hover" && t.open();
    }, E = () => {
      n === "hover" && t.close();
    };
    return /* @__PURE__ */ I(
      "div",
      {
        ref: h,
        className: d("Venomous-UI-React--Popover.TriggerWrapper"),
        style: { display: "inline-block", position: "relative", ...b },
        ...n === "hover" ? {
          onMouseEnter: P,
          onMouseLeave: E
        } : {},
        children: [
          /* @__PURE__ */ f(
            "div",
            {
              ref: u,
              style: { display: "inline-block", width: "100%" },
              className: d("Venomous-UI-React--Popover.Trigger"),
              ...n === "click" ? {
                onClick: t.toggle
              } : {},
              children: k(t.isOpen)
            }
          ),
          /* @__PURE__ */ f(L, { children: t.isOpen && /* @__PURE__ */ f(
            N.div,
            {
              ref: i,
              initial: { opacity: 0, y: 0 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 0 },
              transition: { duration: 0.2 },
              className: d("Venomous-UI-React--Popover"),
              style: {
                boxSizing: "border-box",
                position: "absolute",
                top: R.top,
                left: R.left,
                zIndex: 1e3
              },
              children: /* @__PURE__ */ f(
                C,
                {
                  className: d("Venomous-UI-React--Popover.Content"),
                  style: { width: "100%", padding: "8px", ...w },
                  children: y
                }
              )
            }
          ) })
        ]
      }
    );
  }
);
M.displayName = "Popover";
export {
  M as default
};
