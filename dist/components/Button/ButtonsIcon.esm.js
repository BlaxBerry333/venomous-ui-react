import { jsx as n } from "react/jsx-runtime";
import l from "react";
import { useButtonStyle as p } from "./_useButtonStyle.esm.js";
import a from "../Icon/Icon.esm.js";
const f = l.memo(
  ({
    type: e = "button",
    style: r,
    variant: m = "contained",
    isLoading: t,
    isDisabled: o,
    icon: c,
    iconWidth: s = 20,
    semanticColor: u,
    ...d
  }) => {
    const { buttonStyles: i } = p({
      isLoading: t,
      isDisabled: o,
      variant: m,
      semanticColor: u
    });
    return /* @__PURE__ */ n(
      "button",
      {
        type: e,
        disabled: t || o,
        style: {
          ...i,
          padding: 0,
          ...r
        },
        ...d,
        children: /* @__PURE__ */ n(a, { icon: t ? "eos-icons:loading" : c, width: s })
      }
    );
  }
);
f.displayName = "Buttons.Icon";
export {
  f as default
};
