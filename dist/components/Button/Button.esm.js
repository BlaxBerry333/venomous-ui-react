import { jsxs as c, jsx as t } from "react/jsx-runtime";
import f from "react";
import { Typography as y } from "../Typography/index.esm.js";
import { useButtonStyle as h } from "./_useButtonStyle.esm.js";
import l from "../Icon/Icon.esm.js";
const b = f.memo(
  ({
    type: i = "button",
    style: p,
    text: s,
    variant: a = "contained",
    color: m = "auto",
    isLoading: e,
    isDisabled: o,
    icon: n,
    iconPosition: r = "start",
    iconWidth: d = 20,
    ...u
  }) => {
    const { buttonStyles: x } = h({
      isLoading: e,
      isDisabled: o,
      variant: a,
      color: m
    });
    return /* @__PURE__ */ c(
      "button",
      {
        type: i,
        disabled: e || o,
        style: {
          flexDirection: r === "start" ? "row" : "row-reverse",
          ...x,
          ...p
        },
        ...u,
        children: [
          n && /* @__PURE__ */ t(
            l,
            {
              icon: n,
              width: d,
              style: {
                marginLeft: r === "start" ? "0px" : "8px",
                marginRight: r === "end" ? "0px" : "8px"
              }
            }
          ),
          /* @__PURE__ */ t(y.Text, { text: s, style: { color: "inherit" } }),
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
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)"
              },
              children: /* @__PURE__ */ t(l, { icon: "eos-icons:loading", width: 24 })
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
