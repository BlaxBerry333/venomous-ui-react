import { jsxs as L, jsx as h } from "react/jsx-runtime";
import m from "clsx";
import { AnimatePresence as N, motion as O } from "framer-motion";
import l from "react";
import W from "../../hooks/useHandler/index.esm.js";
import "../Card/CardsBook.esm.js";
import "../Card/CardsProduct.esm.js";
import "../Card/CardsTitleBlock.esm.js";
import C from "../Card/Card.esm.js";
const M = l.memo(
  ({
    children: y,
    style: b,
    contentStyle: k,
    direction: g = "bottom",
    alignment: s = "center",
    renderTrigger: x,
    trigger: p = "click",
    onClickOutside: v
  }) => {
    const t = W(), R = l.useRef(null), u = l.useRef(null), a = l.useRef(null), [w, P] = l.useState({ top: 0, left: 0 });
    l.useEffect(() => {
      if (p !== "click") return;
      const f = (e) => {
        var i;
        a.current && !a.current.contains(e.target) && !((i = u.current) != null && i.contains(e.target)) && (t.close(), v && v());
      };
      return t.isOpen && document.addEventListener("mousedown", f), () => {
        document.removeEventListener("mousedown", f);
      };
    }, [t, p, v]), l.useEffect(() => {
      if (t.isOpen && R.current && u.current && a.current) {
        const f = R.current.getBoundingClientRect(), e = u.current.getBoundingClientRect(), i = a.current.offsetWidth, d = a.current.offsetHeight, n = e.top - f.top, c = e.left - f.left;
        let o, r;
        switch (g) {
          case "top":
            o = n - d, s === "start" ? r = c : s === "end" ? r = c + e.width - i : r = c + e.width / 2 - i / 2;
            break;
          case "bottom":
            o = n + e.height, s === "start" ? r = c : s === "end" ? r = c + e.width - i : r = c + e.width / 2 - i / 2;
            break;
          case "left":
            r = c - i, s === "start" ? o = n : s === "end" ? o = n + e.height - d : o = n + e.height / 2 - d / 2;
            break;
          case "right":
            r = c + e.width, s === "start" ? o = n : s === "end" ? o = n + e.height - d : o = n + e.height / 2 - d / 2;
            break;
          default:
            o = n + e.height, r = c + e.width / 2 - i / 2;
        }
        P({ top: o, left: r });
      }
    }, [t.isOpen, g, s]);
    const E = () => {
      p === "hover" && t.open();
    }, I = () => {
      p === "hover" && t.close();
    };
    return /* @__PURE__ */ L(
      "div",
      {
        ref: R,
        className: m("Venomous-UI-React--Popover.TriggerWrapper"),
        style: { display: "inline-block", position: "relative", ...b },
        ...p === "hover" ? {
          onMouseEnter: E,
          onMouseLeave: I
        } : {},
        children: [
          /* @__PURE__ */ h(
            "div",
            {
              ref: u,
              style: { display: "inline-block", width: "100%" },
              className: m("Venomous-UI-React--Popover.Trigger"),
              ...p === "click" ? {
                onClick: t.toggle
              } : {},
              children: x({
                isOpen: t.isOpen,
                close: t.close,
                toggle: t.toggle
              })
            }
          ),
          /* @__PURE__ */ h(N, { children: t.isOpen && /* @__PURE__ */ h(
            O.div,
            {
              ref: a,
              initial: { opacity: 0, y: 0 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 0 },
              transition: { duration: 0.2 },
              className: m("Venomous-UI-React--Popover"),
              style: {
                boxSizing: "border-box",
                position: "absolute",
                top: w.top,
                left: w.left,
                zIndex: 1e3
              },
              children: /* @__PURE__ */ h(
                C,
                {
                  className: m("Venomous-UI-React--Popover.Content"),
                  style: { width: "100%", padding: "8px", ...k },
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
