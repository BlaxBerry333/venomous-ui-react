import { jsx as n } from "react/jsx-runtime";
import l from "react";
import { Theme as m } from "../Theme/index.esm.js";
import { BorderColors as s, BackgroundColors as p } from "../../utils/design/colors.esm.js";
import { ThemeShadow as b } from "../../utils/design/ThemeShadow.esm.js";
const u = l.memo(
  ({ children: e, style: t, isTransparent: a = !1, isFrostedGlass: r = !1, isOutline: d = !1, ...i }) => {
    const { themeMode: o } = m.useThemeMode();
    return /* @__PURE__ */ n(
      "div",
      {
        style: {
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: a ? "transparent" : p[o].secondary,
          boxShadow: d ? "none" : b[o].base,
          backdropFilter: r ? "blur(8px) brightness(0.8)" : "none",
          WebkitBackdropFilter: r ? "blur(8px) brightness(0.8)" : "none",
          outlineWidth: 1.5,
          outlineStyle: "solid",
          outlineColor: s[o].primary,
          ...t
        },
        ...i,
        children: e
      }
    );
  }
);
u.displayName = "Card";
export {
  u as default
};
