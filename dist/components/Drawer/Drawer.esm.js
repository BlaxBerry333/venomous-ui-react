import { jsxs as c, Fragment as p, jsx as l } from "react/jsx-runtime";
import v from "react";
import w from "../../hooks/useThemeMode/index.esm.js";
import { BorderColors as s, BackgroundColors as i, ShadowColors as n } from "../../utils/colors/index.esm.js";
const k = v.memo(
  ({ isOpen: o, onClose: h, children: m, position: t = "left", maskClosable: b = !0, width: a = 300, height: d = 300, style: x }) => {
    const { isDarkThemeMode: e } = w(), r = e ? s.darkMode : s.lightMode, f = e ? i.darkMode : i.lightMode, g = e ? n.darkMode : n.lightMode;
    return /* @__PURE__ */ c(p, { children: [
      /* @__PURE__ */ l(
        "div",
        {
          onClick: b ? h : void 0,
          style: {
            boxSizing: "border-box",
            display: o ? "block" : "none",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100svh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: o ? 1 : 0,
            pointerEvents: o ? "auto" : "none",
            transition: "opacity 0.3s ease",
            zIndex: 999
          }
        }
      ),
      /* @__PURE__ */ l(
        "div",
        {
          style: {
            boxSizing: "border-box",
            position: "fixed",
            backgroundColor: f,
            boxShadow: `2px 0 8px ${g}`,
            transition: "transform 0.3s ease",
            zIndex: 1e3,
            transform: t === "left" ? o ? "translateX(0)" : "translateX(-100%)" : t === "right" ? o ? "translateX(0)" : "translateX(100%)" : t === "top" ? o ? "translateY(0)" : "translateY(-100%)" : o ? "translateY(0)" : "translateY(100%)",
            ...t === "left" && {
              top: 0,
              left: 0,
              width: a,
              height: "100svh",
              borderRight: `1px solid ${r}`
            },
            ...t === "right" && {
              top: 0,
              right: 0,
              width: a,
              height: "100svh",
              borderLeft: `1px solid ${r}`
            },
            ...t === "top" && {
              top: 0,
              left: 0,
              width: "100svw",
              height: d,
              borderBottom: `1px solid ${r}`
            },
            ...t === "bottom" && {
              bottom: 0,
              left: 0,
              width: "100svw",
              height: d,
              borderTop: `1px solid ${r}`
            },
            ...x
          },
          children: m
        }
      )
    ] });
  }
);
k.displayName = "Drawer";
export {
  k as default
};
