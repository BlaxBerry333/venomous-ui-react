import { jsx as i } from "react/jsx-runtime";
import s from "react";
import { Theme as m } from "../Theme/index.esm.js";
import { CardVariantMap as e, CardTagMap as p } from "./index.types.esm.js";
import { BackgroundColors as f, BorderColors as b } from "../../utils/design/colors.esm.js";
import { ThemeShadow as h } from "../../utils/design/ThemeShadow.esm.js";
const x = s.memo(
  ({ children: t, style: a, as: d = p.div, variant: r = e.elevated, ...n }) => {
    const { themeMode: o } = m.useThemeMode(), l = s.useMemo(() => {
      switch (r) {
        case e.transparent:
          return "transparent";
        case e.elevated:
        case e.outlined:
        case e.frostedGlass:
        default:
          return f[o].secondary;
      }
    }, [o, r]), c = s.useMemo(() => {
      switch (r) {
        case e.outlined:
        case e.transparent:
          return b[o].secondary;
        case e.elevated:
        case e.frostedGlass:
        default:
          return "transparent";
      }
    }, [o, r]), u = s.useMemo(() => {
      switch (r) {
        case e.outlined:
        case e.transparent:
          return "none";
        case e.elevated:
        case e.frostedGlass:
        default:
          return h[o].primary;
      }
    }, [o, r]);
    return /* @__PURE__ */ i(
      d,
      {
        style: {
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          outlineWidth: 1.5,
          outlineStyle: "solid",
          outlineColor: c,
          backgroundColor: l,
          boxShadow: u,
          ...r === e.frostedGlass && {
            backdropFilter: "blur(8px) brightness(0.8)",
            WebkitBackdropFilter: "blur(8px) brightness(0.8)"
          },
          ...a
        },
        ...n,
        children: t
      }
    );
  }
);
x.displayName = "Card";
export {
  x as default
};
