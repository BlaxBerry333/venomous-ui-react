import { jsx as t } from "react/jsx-runtime";
import d from "clsx";
import y from "react";
import f from "../../hooks/useDesign/index.esm.js";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { THEME_BREAKPOINTS as e, BREAK_POINT_NAMES as x } from "../../utils/design/ThemeBreakpoint.esm.js";
import "../../utils/design/TypographySize.esm.js";
import { getOpacityHex as h } from "../../utils/tools/get-colors.esm.js";
import "../Card/CardsBook.esm.js";
import "../Card/CardsProduct.esm.js";
import "../Card/CardsTitleBlock.esm.js";
import u from "../Card/Card.esm.js";
import { AnimatePresence as g, motion as r } from "framer-motion";
const C = y.memo(
  ({ children: a, className: n, style: m, isOpen: i, onClose: s, maskClosable: l = !0, maxBreakpoint: o = x.xs }) => {
    const p = f();
    return /* @__PURE__ */ t(g, { children: i && /* @__PURE__ */ t(
      r.div,
      {
        onClick: l ? s : void 0,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: d("Venomous-UI-React--Modal", n),
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
          backgroundColor: h(p.BackgroundColors.primary, 0.5),
          backdropFilter: "blur(2px)",
          opacity: i ? 1 : 0
        },
        children: /* @__PURE__ */ t(
          r.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.95 },
            transition: { duration: 0.2, ease: "easeOut" },
            onClick: (c) => c.stopPropagation(),
            style: {
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "max-content",
              maxHeight: "90%",
              width: e[o],
              maxWidth: e[o]
            },
            children: /* @__PURE__ */ t(u, { style: { width: "100%", ...m }, children: a })
          }
        )
      }
    ) });
  }
);
C.displayName = "Modal";
export {
  C as default
};
