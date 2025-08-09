import { jsx as r } from "react/jsx-runtime";
import d from "clsx";
import p from "react";
import { useButtonStyle as b } from "./_useButtonStyle.esm.js";
import f from "../Icon/Icon.esm.js";
const y = p.memo(
  ({
    className: s,
    type: c = "button",
    style: l,
    variant: m = "contained",
    isLoading: t,
    isDisabled: o,
    icon: a,
    iconWidth: i = 20,
    semanticColor: u,
    ...n
  }) => {
    const { buttonStyles: e } = b({
      isLoading: t,
      isDisabled: o || n.disabled,
      variant: m,
      semanticColor: u
    });
    return /* @__PURE__ */ r(
      "button",
      {
        className: d("Venomous-UI-React--Buttons.Icon", s),
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
              color: e.color
            }
          }
        )
      }
    );
  }
);
y.displayName = "Buttons.Icon";
export {
  y as default
};
