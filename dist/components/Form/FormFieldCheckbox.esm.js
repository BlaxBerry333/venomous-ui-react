import { jsxs as F, jsx as t } from "react/jsx-runtime";
import y from "clsx";
import b from "react";
import I from "./Label.esm.js";
import { useFormFieldStyle as w } from "./useFormFieldStyle.esm.js";
import { useToggleFormFieldChecked as R } from "./useToggleFormFieldChecked.esm.js";
import j from "../Icon/Icon.esm.js";
const N = b.memo(
  ({
    className: c,
    style: l,
    autoComplete: i = "off",
    required: m = !1,
    isError: r = !1,
    disabled: e = !1,
    name: n,
    value: s,
    checked: f = !1,
    onChange: h,
    label: p,
    labelPosition: a = "right",
    ...u
  }) => {
    const { inputRef: k, isChecked: o, toggleOriginalIsChecked: d, toggleCustomIsChecked: C } = R({
      checked: f,
      disabled: e,
      onChange: h
    }), { outlineColor: g, borderColor: x } = w({
      isDisabled: e,
      isError: r
    });
    return /* @__PURE__ */ F(
      I,
      {
        label: p,
        required: m,
        isError: r,
        position: a,
        style: {
          cursor: e ? "not-allowed" : "pointer",
          opacity: e ? 0.6 : 1
        },
        children: [
          /* @__PURE__ */ t(
            "input",
            {
              type: "checkbox",
              name: n,
              value: s,
              checked: o,
              ref: k,
              onChange: d,
              autoComplete: i,
              disabled: e,
              style: { display: "none" },
              ...u
            }
          ),
          /* @__PURE__ */ t(
            j,
            {
              icon: o ? "fluent:checkbox-checked-24-filled" : "fluent:checkbox-unchecked-24-regular",
              width: 24,
              onClick: C,
              className: y("Venomous-UI-React--FormField.Checkbox", c),
              style: {
                color: o ? g : x,
                cursor: e ? "not-allowed" : "pointer",
                ...l
              }
            }
          )
        ]
      }
    );
  }
);
N.displayName = "FormField.Checkbox";
export {
  N as default
};
