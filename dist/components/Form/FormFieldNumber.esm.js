import { jsx as r } from "react/jsx-runtime";
import y from "react";
import x from "./FormField.esm.js";
import { useFormFieldStyle as b } from "./useFormFieldStyle.esm.js";
import N from "../../hooks/useElementFocus/index.esm.js";
const S = y.memo(
  ({
    style: t,
    fullWidth: e,
    autoComplete: s = "off",
    required: n = !1,
    isError: m = !1,
    disabled: o = !1,
    name: i,
    value: l,
    label: u,
    helpText: F,
    ...c
  }) => {
    const { isFocused: f, handleFocus: p, handleBlur: a } = N(), { commonStyles: d } = b({
      fullWidth: e,
      isDisabled: o,
      isError: m,
      isFocused: f
    });
    return /* @__PURE__ */ r(
      x,
      {
        label: u,
        required: n,
        disabled: o,
        isError: m,
        fullWidth: e,
        helpText: F,
        children: /* @__PURE__ */ r(
          "input",
          {
            type: "number",
            name: i,
            value: l,
            autoComplete: s,
            disabled: o,
            onFocus: o ? void 0 : p,
            onBlur: o ? void 0 : a,
            style: {
              boxSizing: "border-box",
              ...d,
              ...t
            },
            ...c
          }
        )
      }
    );
  }
);
S.displayName = "FormField.Number";
export {
  S as default
};
