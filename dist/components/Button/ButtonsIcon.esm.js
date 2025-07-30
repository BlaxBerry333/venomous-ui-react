import { jsx as r } from "react/jsx-runtime";
import d from "react";
import { useButtonStyle as u } from "./_useButtonStyle.esm.js";
import p from "../Icon/Icon.esm.js";
const b = d.memo(
  ({
    type: l = "button",
    style: i,
    variant: s = "contained",
    isLoading: t,
    isDisabled: o,
    icon: c,
    iconWidth: a = 20,
    semanticColor: m,
    ...n
  }) => {
    const { buttonStyles: e } = u({
      isLoading: t,
      isDisabled: o || n.disabled,
      variant: s,
      semanticColor: m
    });
    return /* @__PURE__ */ r(
      "button",
      {
        type: l,
        disabled: t || o,
        style: {
          WebkitTapHighlightColor: "transparent",
          ...e,
          padding: 0,
          ...i
        },
        ...n,
        children: /* @__PURE__ */ r(p, { icon: t ? "eos-icons:loading" : c, width: a, style: { color: e.color } })
      }
    );
  }
);
b.displayName = "Buttons.Icon";
export {
  b as default
};
