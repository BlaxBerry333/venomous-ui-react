import { jsxs as x, jsx as t } from "react/jsx-runtime";
import y from "clsx";
import b from "react";
import l from "../Icon/Icon.esm.js";
import { Typography as g } from "../Typography/index.esm.js";
import { useButtonStyle as w } from "./_useButtonStyle.esm.js";
const B = b.memo(
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
    iconStyle: u,
    iconWidth: h = 20,
    semanticColor: f,
    ...i
  }) => {
    const { buttonStyles: s } = w({
      isLoading: e,
      isDisabled: o || i.disabled,
      variant: c,
      semanticColor: f
    });
    return /* @__PURE__ */ x(
      "button",
      {
        className: y("Venomous-UI-React--Button", a),
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
              width: h,
              style: {
                marginLeft: r === "start" ? "0px" : "8px",
                marginRight: r === "end" ? "0px" : "8px",
                color: "inherit",
                ...u
              }
            }
          ),
          /* @__PURE__ */ t(g.Text, { text: d, style: { color: "inherit" } }),
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
B.displayName = "Button";
export {
  B as default
};
