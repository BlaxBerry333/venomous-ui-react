import { jsx as s } from "react/jsx-runtime";
import x from "clsx";
import y from "react";
import N from "../../hooks/useElementFocus/index.esm.js";
import { useFormFieldStyle as S } from "./_useFormFieldStyle.esm.js";
import h from "./FormField.esm.js";
const v = y.memo(
  ({
    className: t,
    style: i,
    fullWidth: e,
    autoComplete: l = "off",
    required: n = !1,
    isError: m = !1,
    disabled: o = !1,
    name: u,
    value: F,
    label: c,
    helpText: a,
    ...f
  }) => {
    const { isFocused: r, handleFocus: p, handleBlur: d } = N(), { commonStyles: b } = S({
      fullWidth: e,
      isDisabled: o,
      isError: m,
      isFocused: r
    });
    return /* @__PURE__ */ s(
      h,
      {
        label: c,
        required: n,
        isDisabled: o,
        isError: m,
        isFocused: r,
        fullWidth: e,
        helpText: a,
        children: /* @__PURE__ */ s(
          "input",
          {
            type: "number",
            name: u,
            value: F,
            autoComplete: l,
            disabled: o,
            onFocus: o ? void 0 : p,
            onBlur: o ? void 0 : d,
            className: x("Venomous-UI-React--FormField.Number", t),
            style: {
              boxSizing: "border-box",
              ...b,
              ...i
            },
            ...f
          }
        )
      }
    );
  }
);
v.displayName = "FormField.Number";
export {
  v as default
};
