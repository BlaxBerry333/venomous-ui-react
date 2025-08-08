import { jsxs as x, jsx as r } from "react/jsx-runtime";
import y from "react";
import F from "./Label.esm.js";
import { useFormFieldStyle as b } from "./_useFormFieldStyle.esm.js";
import { useToggleFormFieldChecked as w } from "./useToggleFormFieldChecked.esm.js";
import I from "../Icon/Icon.esm.js";
const j = y.memo(
  ({
    style: l,
    autoComplete: c = "off",
    required: i = !1,
    isError: t = !1,
    disabled: e = !1,
    name: n,
    value: s,
    checked: m = !1,
    onChange: f,
    label: h,
    labelPosition: p = "right",
    ...u
  }) => {
    const { inputRef: a, isChecked: o, toggleOriginalIsChecked: k, toggleCustomIsChecked: d } = w({
      checked: m,
      disabled: e,
      onChange: f
    }), { outlineColor: C, borderColor: g } = b({
      isDisabled: e,
      isError: t
    });
    return /* @__PURE__ */ x(
      F,
      {
        label: h,
        required: i,
        isError: t,
        position: p,
        style: {
          cursor: e ? "not-allowed" : "pointer",
          opacity: e ? 0.6 : 1
        },
        children: [
          /* @__PURE__ */ r(
            "input",
            {
              type: "checkbox",
              name: n,
              value: s,
              checked: o,
              ref: a,
              onChange: k,
              autoComplete: c,
              disabled: e,
              style: { display: "none", ...l },
              ...u
            }
          ),
          /* @__PURE__ */ r(
            I,
            {
              icon: o ? "fluent:checkbox-checked-24-filled" : "fluent:checkbox-unchecked-24-regular",
              width: 24,
              onClick: d,
              style: {
                color: o ? C : g,
                cursor: e ? "not-allowed" : "pointer"
              }
            }
          )
        ]
      }
    );
  }
);
j.displayName = "FormField.Checkbox";
export {
  j as default
};
