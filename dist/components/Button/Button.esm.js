import { jsxs as f, jsx as t } from "react/jsx-runtime";
import x from "clsx";
import y from "react";
import l from "../Icon/Icon.esm.js";
import { Typography as b } from "../Typography/index.esm.js";
import { useButtonStyle as g } from "./_useButtonStyle.esm.js";
const w = y.memo(
  ({
    className: a,
    type: m = "button",
    style: p,
    text: d,
    variant: c = "contained",
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
      variant: c,
      semanticColor: h
    });
    return /* @__PURE__ */ f(
      "button",
      {
        className: x("Venomous-UI-React--Button", a),
        type: m,
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
                backgroundColor: s.backgroundColor
              },
              children: /* @__PURE__ */ t(l, { icon: "svg-spinners:270-ring-with-bg", width: 24, style: { color: "inherit" } })
            }
          )
        ]
      }
    );
  }
);
w.displayName = "Button";
export {
  w as default
};
