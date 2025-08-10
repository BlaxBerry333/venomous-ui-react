import { jsx as t } from "react/jsx-runtime";
import d from "clsx";
import h from "react";
import { BackgroundColors as y } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { ThemeBreakPoint as o, BreakPointName as f } from "../../utils/design/ThemeBreakpoint.esm.js";
import { getOpacityHex as x } from "../../utils/tools/get-colors.esm.js";
import "../Card/CardsBook.esm.js";
import "../Card/CardsProduct.esm.js";
import "../Card/CardsTitleBlock.esm.js";
import u from "../Card/Card.esm.js";
import { Theme as g } from "../Theme/index.esm.js";
import { AnimatePresence as C, motion as a } from "framer-motion";
const k = h.memo(
  ({ children: r, className: m, style: n, isOpen: e, onClose: s, maskClosable: l = !0, maxBreakpoint: i = f.xs }) => {
    const { themeMode: c } = g.useThemeMode();
    return /* @__PURE__ */ t(C, { children: e && /* @__PURE__ */ t(
      a.div,
      {
        onClick: l ? s : void 0,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: d("Venomous-UI-React--Modal", m),
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1e3,
          width: "100svw",
          height: "100svh",
          backgroundColor: x(y[c].primary, 0.5),
          backdropFilter: "blur(2px)",
          opacity: e ? 1 : 0
        },
        children: /* @__PURE__ */ t(
          a.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.95 },
            transition: { duration: 0.2, ease: "easeOut" },
            onClick: (p) => p.stopPropagation(),
            style: {
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "max-content",
              maxHeight: "90%",
              width: o[i],
              maxWidth: o[i]
            },
            children: /* @__PURE__ */ t(u, { style: { width: "100%", ...n }, children: r })
          }
        )
      }
    ) });
  }
);
k.displayName = "Modal";
export {
  k as default
};
