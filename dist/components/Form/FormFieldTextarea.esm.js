import { jsx as s } from "react/jsx-runtime";
import d from "react";
import y from "./FormField.esm.js";
import { useFormFieldStyle as h } from "./_useFormFieldStyle.esm.js";
import S from "../../hooks/useElementFocus/index.esm.js";
const v = d.memo(
  ({
    style: t,
    fullWidth: o,
    required: l = !1,
    isError: r = !1,
    disabled: e = !1,
    rows: a = 3,
    name: i,
    value: n,
    label: F,
    helpText: c,
    ...f
  }) => {
    const { isFocused: m, handleFocus: u, handleBlur: p } = S(), { commonStyles: x } = h({
      fullWidth: o,
      isDisabled: e,
      isError: r,
      isFocused: m
    });
    return /* @__PURE__ */ s(
      y,
      {
        label: F,
        required: l,
        isDisabled: e,
        isError: r,
        isFocused: m,
        fullWidth: o,
        helpText: c,
        children: /* @__PURE__ */ s(
          "textarea",
          {
            name: i,
            value: n,
            disabled: e,
            onFocus: e ? void 0 : u,
            onBlur: e ? void 0 : p,
            spellCheck: !1,
            rows: a,
            style: {
              boxSizing: "border-box",
              resize: "none",
              ...x,
              ...t
            },
            ...f
          }
        )
      }
    );
  }
);
v.displayName = "FormField.Textarea";
export {
  v as default
};
