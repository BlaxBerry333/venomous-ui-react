import { jsxs as l, jsx as o } from "react/jsx-runtime";
import n from "clsx";
import d from "react";
import { Space as p } from "../Space/index.esm.js";
import { Typography as s } from "../Typography/index.esm.js";
import c from "./Card.esm.js";
import { CardTagMap as m } from "./index.types.esm.js";
const x = d.memo(
  ({ children: r, className: a, height: t = 300, width: f = 200, title: e, coverImage: i }) => /* @__PURE__ */ l(
    c,
    {
      as: m.article,
      className: n("Venomous-UI-React--Cards.Book", a),
      style: {
        height: t,
        width: f,
        padding: "16px 24px",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        backgroundColor: "transparent",
        backgroundImage: `url(${i})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#ffffff"
      },
      children: [
        r,
        /* @__PURE__ */ o(
          "div",
          {
            style: {
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 1,
              width: "16px",
              height: "100%",
              background: "linear-gradient(-90deg, #fff0, #ffffff1a 80%, #ffffff4d 95%, #fff6 96.5%, #cbcbcb14 98%, #6a6a6a1a)",
              borderRadius: "8px"
            }
          }
        ),
        /* @__PURE__ */ o(
          p.Flex,
          {
            column: !0,
            style: {
              height: "max-content",
              width: "100%",
              position: "relative",
              zIndex: 1,
              left: 6,
              top: 24
            },
            children: e && /* @__PURE__ */ o(
              s.Title,
              {
                text: e,
                as: "h5",
                ellipsis: 4,
                style: {
                  lineHeight: 1,
                  color: "#ffffff",
                  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)"
                }
              }
            )
          }
        )
      ]
    }
  )
);
x.displayName = "Cards.Book";
export {
  x as default
};
