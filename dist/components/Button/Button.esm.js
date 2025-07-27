import { jsxs as f, jsx as t } from "react/jsx-runtime";
import x from "react";
import { Typography as y } from "../Typography/index.esm.js";
import { useButtonStyle as h } from "./_useButtonStyle.esm.js";
import s from "../Icon/Icon.esm.js";
const b = x.memo(
  ({
    type: a = "button",
    style: i,
    text: p,
    variant: m = "contained",
    color: d = "auto",
    isLoading: e,
    isDisabled: r,
    icon: n,
    iconPosition: o = "start",
    iconWidth: u = 20,
    ...c
  }) => {
    const { buttonStyles: l } = h({
      isLoading: e,
      isDisabled: r,
      variant: m,
      color: d
    });
    return /* @__PURE__ */ f(
      "button",
      {
        type: a,
        disabled: e || r,
        style: {
          flexDirection: o === "start" ? "row" : "row-reverse",
          ...l,
          ...i
        },
        ...c,
        children: [
          n && /* @__PURE__ */ t(
            s,
            {
              icon: n,
              width: u,
              style: {
                marginLeft: o === "start" ? "0px" : "8px",
                marginRight: o === "end" ? "0px" : "8px"
              }
            }
          ),
          /* @__PURE__ */ t(y.Text, { text: p, style: { color: "inherit" } }),
          /* @__PURE__ */ t(
            "div",
            {
              style: {
                display: e ? "flex" : "none",
                borderRadius: "4px",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: l.backgroundColor
              },
              children: /* @__PURE__ */ t(s, { icon: "eos-icons:loading", width: 24 })
            }
          )
        ]
      }
    );
  }
);
b.displayName = "Button";
export {
  b as default
};
