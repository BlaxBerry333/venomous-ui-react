import { jsxs as b, jsx as t } from "react/jsx-runtime";
import c from "react";
import { Typography as f } from "../Typography/index.esm.js";
import { useButtonStyle as g } from "./_useButtonStyle.esm.js";
import l from "../Icon/Icon.esm.js";
const x = c.memo(
  ({
    type: a = "button",
    style: p,
    text: d,
    variant: m = "contained",
    isLoading: e,
    isDisabled: o,
    icon: n,
    iconPosition: r = "start",
    iconWidth: u = 20,
    semanticColor: h,
    ...i
  }) => {
    const { buttonStyles: s } = g({
      isLoading: e,
      isDisabled: o || i.disabled,
      variant: m,
      semanticColor: h
    });
    return /* @__PURE__ */ b(
      "button",
      {
        type: a,
        disabled: e || o,
        style: {
          flexDirection: r === "start" ? "row" : "row-reverse",
          WebkitTapHighlightColor: "transparent",
          ...s,
          ...p
        },
        ...i,
        children: [
          n && /* @__PURE__ */ t(
            l,
            {
              icon: n,
              width: u,
              style: {
                marginLeft: r === "start" ? "0px" : "8px",
                marginRight: r === "end" ? "0px" : "8px"
              }
            }
          ),
          /* @__PURE__ */ t(f.Text, { text: d, style: { color: "inherit" } }),
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
                backgroundColor: s.backgroundColor
              },
              children: /* @__PURE__ */ t(l, { icon: "svg-spinners:270-ring-with-bg", width: 24 })
            }
          )
        ]
      }
    );
  }
);
x.displayName = "Button";
export {
  x as default
};
