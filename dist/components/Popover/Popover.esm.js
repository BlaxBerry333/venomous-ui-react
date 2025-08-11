import { jsxs as L, jsx as d } from "react/jsx-runtime";
import m from "clsx";
import { AnimatePresence as N, motion as C } from "framer-motion";
import r from "react";
import M from "../../hooks/useHandler/index.esm.js";
import "../Card/CardsBook.esm.js";
import "../Card/CardsProduct.esm.js";
import "../Card/CardsTitleBlock.esm.js";
import O from "../Card/Card.esm.js";
const U = r.memo(
  ({ children: w, style: x, contentStyle: k, direction: n = "bottom", renderTrigger: W, trigger: i = "click", onClickOutside: h }) => {
    var y, b;
    const t = M(), v = r.useRef(null), s = r.useRef(null), c = r.useRef(null), [R, P] = r.useState({ top: 0, left: 0 });
    r.useEffect(() => {
      if (i !== "click") return;
      const p = (e) => {
        var o;
        c.current && !c.current.contains(e.target) && !((o = s.current) != null && o.contains(e.target)) && (t.close(), h && h());
      };
      return t.isOpen && document.addEventListener("mousedown", p), () => {
        document.removeEventListener("mousedown", p);
      };
    }, [t, i, h]), r.useEffect(() => {
      if (t.isOpen && v.current && s.current && c.current) {
        const p = v.current.getBoundingClientRect(), e = s.current.getBoundingClientRect(), o = c.current.offsetWidth, g = c.current.offsetHeight, f = e.top - p.top, u = e.left - p.left;
        let a, l;
        switch (n) {
          case "top":
            a = f - g, l = u + e.width / 2 - o / 2;
            break;
          case "bottom":
            a = f + e.height, l = u + e.width / 2 - o / 2;
            break;
          case "left":
            a = f + e.height / 2 - g / 2, l = u - o;
            break;
          case "right":
            a = f + e.height / 2 - g / 2, l = u + e.width;
            break;
          default:
            a = f + e.height, l = u + e.width / 2 - o / 2;
        }
        P({ top: a, left: l });
      }
    }, [t.isOpen, n]);
    const E = () => {
      i === "hover" && t.open();
    }, I = () => {
      i === "hover" && t.close();
    };
    return /* @__PURE__ */ L(
      "div",
      {
        ref: v,
        className: m("Venomous-UI-React--Popover.TriggerWrapper"),
        style: { display: "inline-block", position: "relative", ...x },
        ...i === "hover" ? {
          onMouseEnter: E,
          onMouseLeave: I
        } : {},
        children: [
          /* @__PURE__ */ d(
            "div",
            {
              ref: s,
              style: { display: "inline-block", width: "100%" },
              className: m("Venomous-UI-React--Popover.Trigger"),
              ...i === "click" ? {
                onClick: t.toggle
              } : {},
              children: W(t.isOpen)
            }
          ),
          /* @__PURE__ */ d(N, { children: t.isOpen && /* @__PURE__ */ d(
            C.div,
            {
              ref: c,
              initial: { opacity: 0, y: 0 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 0 },
              transition: { duration: 0.2 },
              className: m("Venomous-UI-React--Popover"),
              style: {
                boxSizing: "border-box",
                position: "absolute",
                top: R.top,
                left: R.left,
                zIndex: 1e3,
                minWidth: n === "left" || n === "right" || (y = s.current) == null ? void 0 : y.offsetWidth,
                maxWidth: n === "left" || n === "right" || (b = s.current) == null ? void 0 : b.offsetWidth
              },
              children: /* @__PURE__ */ d(
                O,
                {
                  className: m("Venomous-UI-React--Popover.Content"),
                  style: { width: "100%", padding: "8px", ...k },
                  children: w
                }
              )
            }
          ) })
        ]
      }
    );
  }
);
U.displayName = "Popover";
export {
  U as default
};
