import { jsxs as f, Fragment as b, jsx as o } from "react/jsx-runtime";
import r from "clsx";
import u from "react";
import { BackgroundColors as x } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { getOpacityHex as g } from "../../utils/tools/get-colors.esm.js";
import "../Card/CardsBook.esm.js";
import "../Card/CardsProduct.esm.js";
import "../Card/CardsTitleBlock.esm.js";
import R from "../Card/Card.esm.js";
import { Theme as y } from "../Theme/index.esm.js";
import { AnimatePresence as m, motion as s } from "framer-motion";
const w = u.memo(
  ({ isOpen: e, onClose: p, children: d, direction: t = "left", maskClosable: l = !0, width: a = 300, height: i = 300, style: n }) => {
    const { themeMode: h } = y.useThemeMode();
    return /* @__PURE__ */ f(b, { children: [
      /* @__PURE__ */ o(m, { children: e && /* @__PURE__ */ o(
        s.div,
        {
          onClick: l ? p : void 0,
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.3 },
          className: r("Venomous-UI-React--Drawer.Mask"),
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
            width: "100vw",
            height: "100svh",
            backgroundColor: g(x[h].primary, 0.5),
            backdropFilter: "blur(2px)",
            pointerEvents: e ? "auto" : "none"
          }
        }
      ) }),
      /* @__PURE__ */ o(m, { children: e && /* @__PURE__ */ o(
        s.div,
        {
          animate: { x: 0, y: 0 },
          transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
          initial: t === "left" ? { x: "-100%" } : t === "right" ? { x: "100%" } : t === "top" ? { y: "-100%" } : { y: "100%" },
          exit: t === "left" ? { x: "-100%" } : t === "right" ? { x: "100%" } : t === "top" ? { y: "-100%" } : { y: "100%" },
          className: r("Venomous-UI-React--Drawer.Panel"),
          style: {
            boxSizing: "border-box",
            position: "fixed",
            zIndex: 1e3,
            ...t === "left" && {
              top: 0,
              left: 0,
              width: a,
              height: "100svh"
            },
            ...t === "right" && {
              top: 0,
              right: 0,
              width: a,
              height: "100svh"
            },
            ...t === "top" && {
              top: 0,
              left: 0,
              width: "100vw",
              height: i
            },
            ...t === "bottom" && {
              bottom: 0,
              left: 0,
              width: "100vw",
              height: i
            }
          },
          children: /* @__PURE__ */ o(
            R,
            {
              className: r("Venomous-UI-React--Drawer.Card"),
              style: {
                width: "100%",
                height: "100%",
                ...t === "left" && {
                  borderRight: "none",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0
                },
                ...t === "right" && {
                  borderLeft: "none",
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0
                },
                ...t === "top" && {
                  borderBottom: "none",
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0
                },
                ...t === "bottom" && {
                  borderTop: "none",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0
                },
                ...n
              },
              children: d
            }
          )
        }
      ) })
    ] });
  }
);
w.displayName = "Drawer";
export {
  w as default
};
