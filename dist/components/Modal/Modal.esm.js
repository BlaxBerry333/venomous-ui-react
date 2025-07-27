import { jsx as i } from "react/jsx-runtime";
import p from "react";
import s from "../Theme/useThemeMode.esm.js";
import { AnimatePresence as c, motion as e } from "framer-motion";
import { getOpacityHex as y } from "../../utils/tools/get-colors.esm.js";
import { ThemeShadow as u } from "../../utils/design/ThemeShadow.esm.js";
import { BorderColors as x, BackgroundColors as a } from "../../utils/design/colors.esm.js";
const h = p.memo(({ children: r, style: n, isOpen: t, onClose: d, maskClosable: l = !0 }) => {
  const { themeMode: o } = s();
  return /* @__PURE__ */ i(c, { children: t && /* @__PURE__ */ i(
    e.div,
    {
      onClick: l ? d : void 0,
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
        backgroundColor: y(a[o].primary, 0.5),
        backdropFilter: "blur(2px)",
        opacity: t ? 1 : 0
      },
      children: /* @__PURE__ */ i(
        e.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.95 },
          transition: { duration: 0.2, ease: "easeOut" },
          onClick: (m) => m.stopPropagation(),
          style: {
            borderRadius: "8px",
            minWidth: "300px",
            maxWidth: "90%",
            maxHeight: "90%",
            padding: "24px 32px",
            backgroundColor: a[o].secondary,
            outlineWidth: 1.5,
            outlineStyle: "solid",
            outlineColor: x[o].primary,
            boxShadow: u[o].base,
            ...n
          },
          children: r
        }
      )
    }
  ) });
});
h.displayName = "Modal";
export {
  h as default
};
