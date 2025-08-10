import { jsxs as s, jsx as p } from "react/jsx-runtime";
import l from "react";
import m from "clsx";
import d from "../Chip/Chip.esm.js";
import n from "./Card.esm.js";
import { CardTagMap as x } from "./index.types.esm.js";
const c = l.memo(
  ({ children: t, className: e, style: o, title: a, titleStyle: r, ...i }) => /* @__PURE__ */ s(
    n,
    {
      as: x.article,
      variant: "outlined",
      className: m("Venomous-UI-React--Cards.TitleBlock", e),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        padding: "24px 16px 16px",
        ...o
      },
      ...i,
      children: [
        /* @__PURE__ */ p(
          d,
          {
            text: a,
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              transform: "translate(8px, -50%)",
              padding: "4px 8px",
              borderRadius: "16px",
              fontWeight: "bold",
              maxWidth: "100px",
              ...r
            }
          }
        ),
        t
      ]
    }
  )
);
c.displayName = "Cards.TitleBlock";
export {
  c as default
};
