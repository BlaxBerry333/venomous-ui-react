import { jsxs as x, jsx as r } from "react/jsx-runtime";
import F from "react";
import y from "./Label.esm.js";
import { useFormFieldStyle as b } from "./useFormFieldStyle.esm.js";
import { useToggleFormFieldChecked as I } from "./useToggleFormFieldChecked.esm.js";
import j from "../Icon/Icon.esm.js";
const w = F.memo(
  ({
    style: t,
    autoComplete: c = "off",
    required: i = !1,
    isError: l = !1,
    disabled: e = !1,
    name: n,
    value: s,
    checked: m = !1,
    onChange: f,
    label: h,
    labelPosition: d = "right",
    ...p
  }) => {
    const { inputRef: a, isChecked: o, toggleOriginalIsChecked: k, toggleCustomIsChecked: u } = I({
      checked: m,
      disabled: e,
      onChange: f
    }), { outlineColor: C, borderColor: g } = b({
      isDisabled: e,
      isError: l
    });
    return /* @__PURE__ */ x(y, { label: h, required: i, isError: l, position: d, children: [
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
          style: { display: "none", ...t },
          ...p
        }
      ),
      /* @__PURE__ */ r(
        j,
        {
          icon: o ? "fluent:checkbox-checked-24-filled" : "fluent:checkbox-unchecked-24-regular",
          width: 24,
          onClick: u,
          style: {
            color: o ? C : g,
            cursor: e ? "not-allowed" : "pointer"
          }
        }
      )
    ] });
  }
);
w.displayName = "FormField.Checkbox";
export {
  w as default
};
