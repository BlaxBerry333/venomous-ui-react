import { jsx as r } from "react/jsx-runtime";
import d from "react";
import y from "./FormField.esm.js";
import { useFormFieldStyle as S } from "./_useFormFieldStyle.esm.js";
import h from "../../hooks/useElementFocus/index.esm.js";
const v = d.memo(
  ({
    style: s,
    fullWidth: e,
    autoComplete: i = "off",
    required: l = !1,
    isError: t = !1,
    disabled: o = !1,
    name: n,
    value: F,
    label: c,
    helpText: f,
    ...u
  }) => {
    const { isFocused: m, handleFocus: p, handleBlur: a } = h(), { commonStyles: x } = S({
      fullWidth: e,
      isDisabled: o,
      isError: t,
      isFocused: m
    });
    return /* @__PURE__ */ r(
      y,
      {
        label: c,
        required: l,
        isDisabled: o,
        isError: t,
        isFocused: m,
        fullWidth: e,
        helpText: f,
        children: /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            name: n,
            value: F,
            autoComplete: i,
            disabled: o,
            onFocus: o ? void 0 : p,
            onBlur: o ? void 0 : a,
            style: {
              boxSizing: "border-box",
              ...x,
              ...s
            },
            ...u
          }
        )
      }
    );
  }
);
v.displayName = "FormField.Text";
export {
  v as default
};
