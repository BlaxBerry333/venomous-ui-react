import { jsx as n } from "react/jsx-runtime";
import p from "react";
import { useButtonStyle as u } from "./_useButtonStyle.esm.js";
import d from "../Icon/Icon.esm.js";
const f = p.memo(
  ({
    type: e = "button",
    style: r,
    variant: m = "contained",
    isLoading: t,
    isDisabled: o,
    icon: c,
    iconWidth: i = 20,
    semanticColor: s,
    ...a
  }) => {
    const { buttonStyles: l } = u({
      isLoading: t,
      isDisabled: o,
      variant: m,
      semanticColor: s
    });
    return /* @__PURE__ */ n(
      "button",
      {
        type: e,
        disabled: t || o,
        style: {
          padding: 0,
          WebkitTapHighlightColor: "transparent",
          ...l,
          ...r
        },
        ...a,
        children: /* @__PURE__ */ n(d, { icon: t ? "eos-icons:loading" : c, width: i })
      }
    );
  }
);
f.displayName = "Buttons.Icon";
export {
  f as default
};
