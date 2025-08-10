import { jsx as m } from "react/jsx-runtime";
import p from "clsx";
import t from "react";
import { BackgroundColors as f, BorderColors as b } from "../../utils/design/colors.esm.js";
import { Shadows as h } from "../../utils/design/Shadow.esm.js";
import { Theme as C } from "../Theme/index.esm.js";
import { CardVariantMap as e, CardTagMap as x } from "./index.types.esm.js";
const g = t.memo(
  ({ children: s, className: a, style: d, as: l = x.div, variant: r = e.elevated, ...n }) => {
    const { themeMode: o } = C.useThemeMode(), c = t.useMemo(() => {
      switch (r) {
        case e.transparent:
          return "transparent";
        case e.elevated:
        case e.outlined:
        case e.frostedGlass:
        default:
          return f[o].secondary;
      }
    }, [o, r]), i = t.useMemo(() => {
      switch (r) {
        case e.outlined:
        case e.transparent:
          return b[o].tertiary;
        case e.elevated:
        case e.frostedGlass:
        default:
          return "transparent";
      }
    }, [o, r]), u = t.useMemo(() => {
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
    return /* @__PURE__ */ m(
      l,
      {
        className: p("Venomous-UI-React--Card", a),
        style: {
          boxSizing: "border-box",
          WebkitTapHighlightColor: "transparent",
          borderRadius: "8px",
          padding: "16px",
          outlineWidth: 1.5,
          outlineStyle: "solid",
          outlineColor: i,
          backgroundColor: c,
          boxShadow: u,
          ...r === e.frostedGlass && {
            backdropFilter: "blur(8px) brightness(0.8)",
            WebkitBackdropFilter: "blur(8px) brightness(0.8)"
          },
          ...d
        },
        ...n,
        children: s
      }
    );
  }
);
g.displayName = "Card";
export {
  g as default
};
