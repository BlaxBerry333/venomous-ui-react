import { jsxs as c, Fragment as b, jsx as t } from "react/jsx-runtime";
import o from "clsx";
import u from "react";
import { Theme as x } from "../Theme/index.esm.js";
import g from "../Card/Card.esm.js";
import { AnimatePresence as i, motion as m } from "framer-motion";
import { getOpacityHex as p } from "../../utils/tools/get-colors.esm.js";
import { BackgroundColors as R } from "../../utils/design/colors.esm.js";
const y = u.memo(
  ({ isOpen: r, onClose: l, children: n, position: e = "left", maskClosable: h = !0, width: a = 300, height: d = 300, style: s }) => {
    const { themeMode: f } = x.useThemeMode();
    return /* @__PURE__ */ c(b, { children: [
      /* @__PURE__ */ t(i, { children: r && /* @__PURE__ */ t(
        m.div,
        {
          onClick: h ? l : void 0,
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.3 },
          className: o("Venomous-UI-React--Drawer.Mask"),
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
            width: "100vw",
            height: "100svh",
            backgroundColor: p(R[f].primary, 0.5),
            backdropFilter: "blur(2px)",
            pointerEvents: r ? "auto" : "none"
          }
        }
      ) }),
      /* @__PURE__ */ t(i, { children: r && /* @__PURE__ */ t(
        m.div,
        {
          animate: { x: 0, y: 0 },
          transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
          initial: e === "left" ? { x: "-100%" } : e === "right" ? { x: "100%" } : e === "top" ? { y: "-100%" } : { y: "100%" },
          exit: e === "left" ? { x: "-100%" } : e === "right" ? { x: "100%" } : e === "top" ? { y: "-100%" } : { y: "100%" },
          className: o("Venomous-UI-React--Drawer.Panel"),
          style: {
            boxSizing: "border-box",
            position: "fixed",
            zIndex: 1e3,
            ...e === "left" && {
              top: 0,
              left: 0,
              width: a,
              height: "100svh"
            },
            ...e === "right" && {
              top: 0,
              right: 0,
              width: a,
              height: "100svh"
            },
            ...e === "top" && {
              top: 0,
              left: 0,
              width: "100vw",
              height: d
            },
            ...e === "bottom" && {
              bottom: 0,
              left: 0,
              width: "100vw",
              height: d
            }
          },
          children: /* @__PURE__ */ t(
            g,
            {
              className: o("Venomous-UI-React--Drawer.Card"),
              style: {
                width: "100%",
                height: "100%",
                ...e === "left" && {
                  borderRight: "none",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0
                },
                ...e === "right" && {
                  borderLeft: "none",
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0
                },
                ...e === "top" && {
                  borderBottom: "none",
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0
                },
                ...e === "bottom" && {
                  borderTop: "none",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0
                },
                ...s
              },
              children: n
            }
          )
        }
      ) })
    ] });
  }
);
y.displayName = "Drawer";
export {
  y as default
};
