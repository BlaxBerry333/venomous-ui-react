import { jsx as m } from "react/jsx-runtime";
import d from "react";
import y from "./FormField.esm.js";
import { useFormFieldStyle as h } from "./useFormFieldStyle.esm.js";
import S from "../../hooks/useElementFocus/index.esm.js";
const v = d.memo(
  ({
    style: t,
    fullWidth: o,
    required: s = !1,
    isError: r = !1,
    disabled: e = !1,
    rows: l = 3,
    name: a,
    value: n,
    label: i,
    helpText: F,
    ...c
  }) => {
    const { isFocused: f, handleFocus: u, handleBlur: p } = S(), { commonStyles: x } = h({
      fullWidth: o,
      isDisabled: e,
      isError: r,
      isFocused: f
    });
    return /* @__PURE__ */ m(
      y,
      {
        label: i,
        required: s,
        disabled: e,
        isError: r,
        fullWidth: o,
        helpText: F,
        children: /* @__PURE__ */ m(
          "textarea",
          {
            name: a,
            value: n,
            disabled: e,
            onFocus: e ? void 0 : u,
            onBlur: e ? void 0 : p,
            spellCheck: !1,
            rows: l,
            style: {
              boxSizing: "border-box",
              resize: "none",
              ...x,
              ...t
            },
            ...c
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
