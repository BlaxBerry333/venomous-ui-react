import { jsx as t } from "react/jsx-runtime";
import d from "react";
import { Theme as p } from "../Theme/index.esm.js";
import h from "../Card/Card.esm.js";
import { AnimatePresence as y, motion as o } from "framer-motion";
import { getOpacityHex as f } from "../../utils/tools/get-colors.esm.js";
import { ThemeBreakPoint as a, BreakPointName as x } from "../../utils/design/ThemeBreakpoint.esm.js";
import { BackgroundColors as u } from "../../utils/design/colors.esm.js";
const g = d.memo(
  ({ children: r, style: n, isOpen: e, onClose: m, maskClosable: l = !0, maxBreakpoint: i = x.xs }) => {
    const { themeMode: s } = p.useThemeMode();
    return /* @__PURE__ */ t(y, { children: e && /* @__PURE__ */ t(
      o.div,
      {
        onClick: l ? m : void 0,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
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
          backgroundColor: f(u[s].primary, 0.5),
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
            onClick: (c) => c.stopPropagation(),
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
            children: /* @__PURE__ */ t(h, { style: { width: "100%", ...n }, children: r })
          }
        )
      }
    ) });
  }
);
g.displayName = "Modal";
export {
  g as default
};
