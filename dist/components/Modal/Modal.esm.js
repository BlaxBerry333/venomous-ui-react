import { jsx as o } from "react/jsx-runtime";
import l from "react";
import s from "../Theme/useThemeMode.esm.js";
import { BackgroundColors as t } from "../../utils/colors/index.esm.js";
import { AnimatePresence as c, motion as e } from "framer-motion";
const m = l.memo(({ children: a, style: r, isOpen: p, onClose: d, maskClosable: n = !0 }) => {
  const { isDarkThemeMode: i } = s();
  return /* @__PURE__ */ o(c, { children: p && /* @__PURE__ */ o(
    e.div,
    {
      onClick: n ? d : void 0,
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100svw",
        height: "100svh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1e3
      },
      children: /* @__PURE__ */ o(
        e.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.95 },
          transition: { duration: 0.2, ease: "easeOut" },
          onClick: (x) => x.stopPropagation(),
          style: {
            backgroundColor: i ? t.darkMode : t.lightMode,
            border: `1px solid ${i ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
            borderRadius: "8px",
            minWidth: "300px",
            maxWidth: "90%",
            maxHeight: "90%",
            padding: "24px 32px",
            boxShadow: `
                rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, 
                rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, 
                rgba(0, 0, 0, 0.12) 0px 1px 8px 0px
              `,
            overflow: "auto",
            ...r
          },
          children: a
        }
      )
    }
  ) });
});
m.displayName = "Modal";
export {
  m as default
};
