import { jsx as r } from "react/jsx-runtime";
import T from "clsx";
import h from "react";
import D from "../../hooks/useElementFocus/index.esm.js";
import { useFormFieldStyle as N } from "./_useFormFieldStyle.esm.js";
import R from "./FormField.esm.js";
const b = h.memo(
  ({
    className: u,
    style: F,
    fullWidth: l,
    autoComplete: c = "off",
    required: f = !1,
    isError: n = !1,
    disabled: o = !1,
    name: s,
    value: a,
    label: x,
    helpText: d,
    ...e
  }) => {
    const { isFocused: i, handleFocus: y, handleBlur: B } = D(), { commonStyles: S } = N({
      fullWidth: l,
      isDisabled: o,
      isError: n,
      isFocused: i
    });
    return /* @__PURE__ */ r(
      R,
      {
        label: x,
        required: f,
        isDisabled: o,
        isError: n,
        isFocused: i,
        fullWidth: l,
        helpText: d,
        children: /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            name: s,
            value: a,
            autoComplete: c,
            disabled: o,
            onFocus: (t) => {
              var m;
              o || (y(t), (m = e.onFocus) == null || m.call(e, t));
            },
            onBlur: (t) => {
              var m;
              o || (B(t), (m = e.onBlur) == null || m.call(e, t));
            },
            className: T("Venomous-UI-React--FormField.Text", u),
            style: {
              boxSizing: "border-box",
              ...S,
              ...F
            },
            ...e
          }
        )
      }
    );
  }
);
b.displayName = "FormField.Text";
export {
  b as default
};
