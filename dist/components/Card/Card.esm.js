import { jsx as m } from "react/jsx-runtime";
import p from "clsx";
import s from "react";
import { Theme as f } from "../Theme/index.esm.js";
import { CardVariantMap as e, CardTagMap as b } from "./index.types.esm.js";
import { BackgroundColors as h, BorderColors as x } from "../../utils/design/colors.esm.js";
import { Shadows as C } from "../../utils/design/Shadow.esm.js";
const g = s.memo(
  ({ children: t, className: a, style: d, as: l = b.div, variant: r = e.elevated, ...n }) => {
    const { themeMode: o } = f.useThemeMode(), c = s.useMemo(() => {
      switch (r) {
        case e.transparent:
          return "transparent";
        case e.elevated:
        case e.outlined:
        case e.frostedGlass:
        default:
          return h[o].secondary;
      }
    }, [o, r]), u = s.useMemo(() => {
      switch (r) {
        case e.outlined:
        case e.transparent:
          return x[o].tertiary;
        case e.elevated:
        case e.frostedGlass:
        default:
          return "transparent";
      }
    }, [o, r]), i = s.useMemo(() => {
      switch (r) {
        case e.outlined:
        case e.transparent:
          return "none";
        case e.elevated:
        case e.frostedGlass:
        default:
          return C[o].primary;
      }
    }, [o, r]);
    return /* @__PURE__ */ m(
      l,
      {
        className: p("Venomous-UI-React--Card", a),
        style: {
          boxSizing: "border-box",
          borderRadius: "8px",
          padding: "16px",
          outlineWidth: 1.5,
          outlineStyle: "solid",
          outlineColor: u,
          backgroundColor: c,
          boxShadow: i,
          ...r === e.frostedGlass && {
            backdropFilter: "blur(8px) brightness(0.8)",
            WebkitBackdropFilter: "blur(8px) brightness(0.8)"
          },
          ...d
        },
        ...n,
        children: t
      }
    );
  }
);
g.displayName = "Card";
export {
  g as default
};
