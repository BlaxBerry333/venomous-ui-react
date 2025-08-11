import { jsx as r } from "react/jsx-runtime";
import p from "clsx";
import b from "react";
import f from "../Icon/Icon.esm.js";
import { useButtonStyle as y } from "./_useButtonStyle.esm.js";
const I = b.memo(
  ({
    className: s,
    type: c = "button",
    style: l,
    variant: m = "contained",
    isLoading: t,
    isDisabled: o,
    icon: a,
    iconWidth: i = 20,
    iconStyle: u,
    semanticColor: d,
    ...n
  }) => {
    const { buttonStyles: e } = y({
      isLoading: t,
      isDisabled: o || n.disabled,
      variant: m,
      semanticColor: d
    });
    return /* @__PURE__ */ r(
      "button",
      {
        className: p("Venomous-UI-React--Buttons.Icon", s),
        type: c,
        disabled: t || o,
        style: {
          WebkitTapHighlightColor: "transparent",
          ...e,
          padding: 0,
          ...l
        },
        ...n,
        children: /* @__PURE__ */ r(
          f,
          {
            icon: t ? "eos-icons:loading" : a,
            width: i,
            style: {
              color: e.color,
              ...u
            }
          }
        )
      }
    );
  }
);
I.displayName = "Buttons.Icon";
export {
  I as default
};
