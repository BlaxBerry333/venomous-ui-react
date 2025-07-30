import { jsxs as i, jsx as e } from "react/jsx-runtime";
import n from "react";
import { Space as d } from "../Space/index.esm.js";
import { Typography as l } from "../Typography/index.esm.js";
import p from "./Card.esm.js";
import { CardTagMap as s } from "./index.types.esm.js";
const c = n.memo(({ children: r, height: t = 300, width: a = 200, title: o, coverImage: f }) => /* @__PURE__ */ i(
  p,
  {
    as: s.article,
    style: {
      height: t,
      width: a,
      padding: "16px 24px",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      backgroundColor: "transparent",
      backgroundImage: `url(${f})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      color: "#ffffff"
    },
    children: [
      r,
      /* @__PURE__ */ e(
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
      /* @__PURE__ */ e(
        d.Flex,
        {
          column: !0,
          style: {
            height: "max-content",
            width: "100%",
            position: "relative",
            zIndex: 1,
            left: 6,
            top: 40
          },
          children: o && /* @__PURE__ */ e(
            l.Title,
            {
              text: o,
              as: "h4",
              ellipsis: 4,
              style: {
                lineHeight: 1.15,
                color: "#ffffff",
                textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)"
              }
            }
          )
        }
      )
    ]
  }
));
c.displayName = "Cards.Book";
export {
  c as default
};
