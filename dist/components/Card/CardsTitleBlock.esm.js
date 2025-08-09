import { jsxs as i, jsx as s } from "react/jsx-runtime";
import p from "react";
import l from "clsx";
import m from "./Card.esm.js";
import { CardTagMap as d } from "./index.types.esm.js";
import n from "../Chip/Chip.esm.js";
const x = p.memo(({ children: t, className: e, style: o, title: a, titleStyle: r }) => /* @__PURE__ */ i(
  m,
  {
    as: d.article,
    variant: "outlined",
    className: l("Venomous-UI-React--Cards.TitleBlock", e),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",
      padding: "24px 16px 16px",
      ...o
    },
    children: [
      /* @__PURE__ */ s(
        n,
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
));
x.displayName = "Cards.TitleBlock";
export {
  x as default
};
