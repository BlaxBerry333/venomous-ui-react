import { jsxs as c, jsx as t } from "react/jsx-runtime";
import y from "react";
import { Typography as b } from "../Typography/index.esm.js";
import { useButtonStyle as f } from "./_useButtonStyle.esm.js";
import s from "../Icon/Icon.esm.js";
const g = y.memo(
  ({
    type: a = "button",
    style: p,
    text: d,
    variant: m = "contained",
    isLoading: e,
    isDisabled: o,
    icon: n,
    iconPosition: r = "start",
    iconWidth: h = 20,
    semanticColor: u,
    ...i
  }) => {
    const { buttonStyles: l } = f({
      isLoading: e,
      isDisabled: o || i.disabled,
      variant: m,
      semanticColor: u
    });
    return /* @__PURE__ */ c(
      "button",
      {
        type: a,
        disabled: e || o,
        style: {
          flexDirection: r === "start" ? "row" : "row-reverse",
          WebkitTapHighlightColor: "transparent",
          ...l,
          ...p
        },
        ...i,
        children: [
          n && /* @__PURE__ */ t(
            s,
            {
              icon: n,
              width: h,
              style: {
                marginLeft: r === "start" ? "0px" : "8px",
                marginRight: r === "end" ? "0px" : "8px",
                color: "inherit"
              }
            }
          ),
          /* @__PURE__ */ t(b.Text, { text: d, style: { color: "inherit" } }),
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
              children: /* @__PURE__ */ t(s, { icon: "svg-spinners:270-ring-with-bg", width: 24, style: { color: "inherit" } })
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
