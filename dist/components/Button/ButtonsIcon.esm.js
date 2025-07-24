import { jsx as n } from "react/jsx-runtime";
import i from "react";
import { useButtonStyle as l } from "./_useButtonStyle.esm.js";
import p from "../Icon/Icon.esm.js";
const f = i.memo(
  ({
    type: e = "button",
    style: r,
    variant: m = "contained",
    color: c = "auto",
    isLoading: t,
    isDisabled: o,
    icon: u,
    iconWidth: s = 20,
    ...a
  }) => {
    const { buttonStyles: d } = l({
      isLoading: t,
      isDisabled: o,
      variant: m,
      color: c
    });
    return /* @__PURE__ */ n(
      "button",
      {
        type: e,
        disabled: t || o,
        style: {
          ...d,
          padding: 0,
          ...r
        },
        ...a,
        children: /* @__PURE__ */ n(p, { icon: t ? "eos-icons:loading" : u, width: s })
      }
    );
  }
);
f.displayName = "Buttons.Icon";
export {
  f as default
};
