import { jsx as c } from "react/jsx-runtime";
import g from "react";
import h from "../../hooks/useThemeMode/index.esm.js";
import { BorderColors as e, BackgroundColors as d, ShadowColors as a } from "../../utils/colors/index.esm.js";
const k = g.memo(
  ({ children: t, style: n, isTransparent: s = !1, isFrostedGlass: r = !1, isOutline: l = !1, ...i }) => {
    const { isDarkThemeMode: o } = h(), b = o ? e.darkMode : e.lightMode, p = o ? d.darkMode : d.lightMode, m = l ? "none" : o ? a.darkMode : a.lightMode;
    return /* @__PURE__ */ c(
      "div",
      {
        style: {
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          boxShadow: m,
          backgroundColor: s ? "transparent" : p,
          backdropFilter: r ? "blur(8px) brightness(0.8)" : "none",
          WebkitBackdropFilter: r ? "blur(8px) brightness(0.8)" : "none",
          border: `1px solid ${b}`,
          ...n
        },
        ...i,
        children: t
      }
    );
  }
);
k.displayName = "Card";
export {
  k as default
};
