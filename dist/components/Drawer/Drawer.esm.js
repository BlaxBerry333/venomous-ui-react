import { jsxs as b, Fragment as g, jsx as e } from "react/jsx-runtime";
import u from "react";
import { Theme as x } from "../Theme/index.esm.js";
import p from "../Card/Card.esm.js";
import { AnimatePresence as i, motion as a } from "framer-motion";
import { getOpacityHex as c } from "../../utils/tools/get-colors.esm.js";
import { BackgroundColors as s } from "../../utils/design/colors.esm.js";
const y = u.memo(
  ({ isOpen: r, onClose: m, children: h, position: t = "left", maskClosable: n = !0, width: o = 300, height: d = 300, style: l }) => {
    const { themeMode: f } = x.useThemeMode();
    return /* @__PURE__ */ b(g, { children: [
      /* @__PURE__ */ e(i, { children: r && /* @__PURE__ */ e(
        a.div,
        {
          onClick: n ? m : void 0,
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.3 },
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
            width: "100vw",
            height: "100svh",
            backgroundColor: c(s[f].primary, 0.5),
            backdropFilter: "blur(2px)",
            pointerEvents: r ? "auto" : "none"
          }
        }
      ) }),
      /* @__PURE__ */ e(i, { children: r && /* @__PURE__ */ e(
        a.div,
        {
          animate: { x: 0, y: 0 },
          transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
          initial: t === "left" ? { x: "-100%" } : t === "right" ? { x: "100%" } : t === "top" ? { y: "-100%" } : { y: "100%" },
          exit: t === "left" ? { x: "-100%" } : t === "right" ? { x: "100%" } : t === "top" ? { y: "-100%" } : { y: "100%" },
          style: {
            boxSizing: "border-box",
            position: "fixed",
            zIndex: 1e3,
            ...t === "left" && {
              top: 0,
              left: 0,
              width: o,
              height: "100svh"
            },
            ...t === "right" && {
              top: 0,
              right: 0,
              width: o,
              height: "100svh"
            },
            ...t === "top" && {
              top: 0,
              left: 0,
              width: "100vw",
              height: d
            },
            ...t === "bottom" && {
              bottom: 0,
              left: 0,
              width: "100vw",
              height: d
            }
          },
          children: /* @__PURE__ */ e(
            p,
            {
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
                ...l
              },
              children: h
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
