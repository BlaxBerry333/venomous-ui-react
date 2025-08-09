import { jsx as t } from "react/jsx-runtime";
import p from "clsx";
import h from "react";
import { Theme as y } from "../Theme/index.esm.js";
import f from "../Card/Card.esm.js";
import { AnimatePresence as x, motion as o } from "framer-motion";
import { getOpacityHex as u } from "../../utils/tools/get-colors.esm.js";
import { ThemeBreakPoint as a, BreakPointName as g } from "../../utils/design/ThemeBreakpoint.esm.js";
import { BackgroundColors as C } from "../../utils/design/colors.esm.js";
const k = h.memo(
  ({ children: r, className: n, style: m, isOpen: e, onClose: s, maskClosable: l = !0, maxBreakpoint: i = g.xs }) => {
    const { themeMode: c } = y.useThemeMode();
    return /* @__PURE__ */ t(x, { children: e && /* @__PURE__ */ t(
      o.div,
      {
        onClick: l ? s : void 0,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
        className: p("Venomous-UI-React--Modal", n),
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
          backgroundColor: u(C[c].primary, 0.5),
          backdropFilter: "blur(2px)",
          opacity: e ? 1 : 0
        },
        children: /* @__PURE__ */ t(
          o.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.95 },
            transition: { duration: 0.2, ease: "easeOut" },
            onClick: (d) => d.stopPropagation(),
            style: {
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "max-content",
              maxHeight: "90%",
              width: a[i],
              maxWidth: a[i]
            },
            children: /* @__PURE__ */ t(f, { style: { width: "100%", ...m }, children: r })
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
