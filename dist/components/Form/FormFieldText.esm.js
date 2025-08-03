import { jsx as m } from "react/jsx-runtime";
import d from "react";
import y from "./FormField.esm.js";
import { useFormFieldStyle as S } from "./useFormFieldStyle.esm.js";
import h from "../../hooks/useElementFocus/index.esm.js";
const v = d.memo(
  ({
    style: r,
    fullWidth: e,
    autoComplete: s = "off",
    required: i = !1,
    isError: t = !1,
    disabled: o = !1,
    name: l,
    value: n,
    label: F,
    helpText: c,
    ...f
  }) => {
    const { isFocused: u, handleFocus: p, handleBlur: a } = h(), { commonStyles: x } = S({
      fullWidth: e,
      isDisabled: o,
      isError: t,
      isFocused: u
    });
    return /* @__PURE__ */ m(
      y,
      {
        label: F,
        required: i,
        disabled: o,
        isError: t,
        fullWidth: e,
        helpText: c,
        children: /* @__PURE__ */ m(
          "input",
          {
            type: "text",
            name: l,
            value: n,
            autoComplete: s,
            disabled: o,
            onFocus: o ? void 0 : p,
            onBlur: o ? void 0 : a,
            style: {
              boxSizing: "border-box",
              ...x,
              ...r
            },
            ...f
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
