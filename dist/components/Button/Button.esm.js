import { jsxs as h, jsx as t } from "react/jsx-runtime";
import f from "react";
import { Typography as x } from "../Typography/index.esm.js";
import { useButtonStyle as y } from "./_useButtonStyle.esm.js";
import i from "../Icon/Icon.esm.js";
const g = f.memo(
  ({
    type: s = "button",
    style: a,
    text: p,
    variant: m = "contained",
    isLoading: e,
    isDisabled: o,
    icon: n,
    iconPosition: r = "start",
    iconWidth: d = 20,
    semanticColor: u,
    ...c
  }) => {
    const { buttonStyles: l } = y({
      isLoading: e,
      isDisabled: o,
      variant: m,
      semanticColor: u
    });
    return /* @__PURE__ */ h(
      "button",
      {
        type: s,
        disabled: e || o,
        style: {
          flexDirection: r === "start" ? "row" : "row-reverse",
          WebkitTapHighlightColor: "transparent",
          ...l,
          ...a
        },
        ...c,
        children: [
          n && /* @__PURE__ */ t(
            i,
            {
              icon: n,
              width: d,
              style: {
                marginLeft: r === "start" ? "0px" : "8px",
                marginRight: r === "end" ? "0px" : "8px"
              }
            }
          ),
          /* @__PURE__ */ t(x.Text, { text: p, style: { color: "inherit" } }),
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
              children: /* @__PURE__ */ t(i, { icon: "eos-icons:loading", width: 24 })
            }
          )
        ]
      }
    );
  }
);
g.displayName = "Button";
export {
  g as default
};
