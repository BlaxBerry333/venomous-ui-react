import { jsxs as h, Fragment as f, jsx as l } from "react/jsx-runtime";
import u from "react";
import { Theme as b } from "../Theme/index.esm.js";
import { getOpacityHex as c } from "../../utils/tools/get-colors.esm.js";
import { BackgroundColors as i, BorderColors as p } from "../../utils/design/colors.esm.js";
import { ThemeShadow as x } from "../../utils/design/ThemeShadow.esm.js";
const g = u.memo(
  ({ isOpen: t, onClose: d, children: n, position: o = "left", maskClosable: s = !0, width: r = 300, height: a = 300, style: m }) => {
    const { themeMode: e } = b.useThemeMode();
    return /* @__PURE__ */ h(f, { children: [
      /* @__PURE__ */ l(
        "div",
        {
          onClick: s ? d : void 0,
          style: {
            boxSizing: "border-box",
            display: t ? "block" : "none",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
            width: "100vw",
            height: "100svh",
            backgroundColor: c(i[e].primary, 0.5),
            backdropFilter: "blur(2px)",
            opacity: t ? 1 : 0,
            pointerEvents: t ? "auto" : "none",
            transition: "opacity 0.3s ease"
          }
        }
      ),
      /* @__PURE__ */ l(
        "div",
        {
          style: {
            boxSizing: "border-box",
            position: "fixed",
            backgroundColor: i[e].secondary,
            boxShadow: x[e].base,
            transition: "transform 0.3s ease",
            zIndex: 1e3,
            transform: o === "left" ? t ? "translateX(0)" : "translateX(-100%)" : o === "right" ? t ? "translateX(0)" : "translateX(100%)" : o === "top" ? t ? "translateY(0)" : "translateY(-100%)" : t ? "translateY(0)" : "translateY(100%)",
            outlineStyle: "solid",
            outlineColor: p[e].primary,
            outlineWidth: 0,
            ...o === "left" && {
              top: 0,
              left: 0,
              width: r,
              height: "100svh",
              outlineWidth: 1.5
            },
            ...o === "right" && {
              top: 0,
              right: 0,
              width: r,
              height: "100svh",
              outlineLeftWidth: 1.5
            },
            ...o === "top" && {
              top: 0,
              left: 0,
              width: "100svw",
              height: a,
              outlineBottomWidth: 1.5
            },
            ...o === "bottom" && {
              bottom: 0,
              left: 0,
              width: "100svw",
              height: a,
              outlineTopWidth: 1.5
            },
            ...m
          },
          children: n
        }
      )
    ] });
  }
);
g.displayName = "Drawer";
export {
  g as default
};
