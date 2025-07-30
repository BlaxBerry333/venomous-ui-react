import { jsx as m } from "react/jsx-runtime";
import n from "react";
import { Theme as p } from "../Theme/index.esm.js";
import { CardTagMap as l } from "./index.types.esm.js";
import { ThemeShadow as b } from "../../utils/design/ThemeShadow.esm.js";
import { BackgroundColors as f, BorderColors as u } from "../../utils/design/colors.esm.js";
const c = n.memo(
  ({
    children: e,
    style: a,
    isTransparent: t = !1,
    isFrostedGlass: d = !1,
    isOutline: o = !1,
    as: s = l.div,
    ...i
  }) => {
    const { themeMode: r } = p.useThemeMode();
    return /* @__PURE__ */ m(
      s,
      {
        style: {
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          outlineWidth: 1.5,
          outlineStyle: "solid",
          outlineColor: o ? u[r].secondary : "transparent",
          backgroundColor: t ? "transparent" : f[r].secondary,
          boxShadow: o ? "none" : b[r].primary,
          ...d && {
            backdropFilter: "blur(8px) brightness(0.8)",
            WebkitBackdropFilter: "blur(8px) brightness(0.8)"
          },
          ...a
        },
        ...i,
        children: e
      }
    );
  }
);
c.displayName = "Card";
export {
  c as default
};
