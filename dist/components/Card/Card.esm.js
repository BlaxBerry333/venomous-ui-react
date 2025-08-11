import { jsx as i } from "react/jsx-runtime";
import d from "clsx";
import p from "react";
import l from "./_useCardStyle.esm.js";
import { CardVariantMap as n, CardTagMap as c } from "./index.types.esm.js";
const C = p.memo(
  ({ children: r, className: a, style: o, as: t = c.div, variant: e = n.elevated, ...m }) => {
    const { commonStyles: s } = l({ variant: e });
    return /* @__PURE__ */ i(
      t,
      {
        className: d("Venomous-UI-React--Card", a),
        style: {
          boxSizing: "border-box",
          WebkitTapHighlightColor: "transparent",
          ...s,
          ...o
        },
        ...m,
        children: r
      }
    );
  }
);
C.displayName = "Card";
export {
  C as default
};
