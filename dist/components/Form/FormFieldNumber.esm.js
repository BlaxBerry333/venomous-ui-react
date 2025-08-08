import { jsx as s } from "react/jsx-runtime";
import y from "react";
import b from "./FormField.esm.js";
import { useFormFieldStyle as x } from "./_useFormFieldStyle.esm.js";
import N from "../../hooks/useElementFocus/index.esm.js";
const S = y.memo(
  ({
    style: t,
    fullWidth: e,
    autoComplete: i = "off",
    required: l = !1,
    isError: m = !1,
    disabled: o = !1,
    name: n,
    value: u,
    label: F,
    helpText: c,
    ...f
  }) => {
    const { isFocused: r, handleFocus: p, handleBlur: a } = N(), { commonStyles: d } = x({
      fullWidth: e,
      isDisabled: o,
      isError: m,
      isFocused: r
    });
    return /* @__PURE__ */ s(
      b,
      {
        label: F,
        required: l,
        isDisabled: o,
        isError: m,
        isFocused: r,
        fullWidth: e,
        helpText: c,
        children: /* @__PURE__ */ s(
          "input",
          {
            type: "number",
            name: n,
            value: u,
            autoComplete: i,
            disabled: o,
            onFocus: o ? void 0 : p,
            onBlur: o ? void 0 : a,
            style: {
              boxSizing: "border-box",
              ...d,
              ...t
            },
            ...f
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
