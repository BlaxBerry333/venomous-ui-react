import { jsx as n } from "react/jsx-runtime";
import S from "clsx";
import T from "react";
import z from "../../hooks/useElementFocus/index.esm.js";
import { useFormFieldStyle as D } from "./_useFormFieldStyle.esm.js";
import N from "./FormField.esm.js";
const R = T.memo(
  ({
    className: i,
    style: c,
    fullWidth: r,
    required: s = !1,
    isError: l = !1,
    disabled: o = !1,
    rows: F = 3,
    name: u,
    value: f,
    label: x,
    helpText: d,
    ...e
  }) => {
    const { isFocused: a, handleFocus: y, handleBlur: h } = z(), { commonStyles: B } = D({
      fullWidth: r,
      isDisabled: o,
      isError: l,
      isFocused: a
    });
    return /* @__PURE__ */ n(
      N,
      {
        label: x,
        required: s,
        isDisabled: o,
        isError: l,
        isFocused: a,
        fullWidth: r,
        helpText: d,
        children: /* @__PURE__ */ n(
          "textarea",
          {
            name: u,
            value: f,
            disabled: o,
            onFocus: (m) => {
              var t;
              o || (y(m), (t = e.onFocus) == null || t.call(e, m));
            },
            onBlur: (m) => {
              var t;
              o || (h(m), (t = e.onBlur) == null || t.call(e, m));
            },
            spellCheck: !1,
            rows: F,
            className: S("Venomous-UI-React--FormField.Textarea", i),
            style: {
              boxSizing: "border-box",
              resize: "none",
              ...B,
              ...c
            },
            ...e
          }
        )
      }
    );
  }
);
R.displayName = "FormField.Textarea";
export {
  R as default
};
