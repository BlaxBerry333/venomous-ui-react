import { jsx as l } from "react/jsx-runtime";
import B from "clsx";
import S from "react";
import h from "../../hooks/useElementFocus/index.esm.js";
import { useFormFieldStyle as D } from "./_useFormFieldStyle.esm.js";
import R from "./FormField.esm.js";
const g = S.memo(
  ({
    className: i,
    style: F,
    fullWidth: t,
    autoComplete: c = "off",
    required: f = !1,
    isError: n = !1,
    disabled: m = !1,
    name: s,
    value: a,
    label: b,
    helpText: d,
    ...e
  }) => {
    const { isFocused: u, handleFocus: x, handleBlur: y } = h(), { commonStyles: N } = D({
      fullWidth: t,
      isDisabled: m,
      isError: n,
      isFocused: u
    });
    return /* @__PURE__ */ l(
      R,
      {
        label: b,
        required: f,
        isDisabled: m,
        isError: n,
        isFocused: u,
        fullWidth: t,
        helpText: d,
        children: /* @__PURE__ */ l(
          "input",
          {
            type: "number",
            name: s,
            value: a,
            autoComplete: c,
            disabled: m,
            onFocus: (o) => {
              var r;
              m || (x(o), (r = e.onFocus) == null || r.call(e, o));
            },
            onBlur: (o) => {
              var r;
              m || (y(o), (r = e.onBlur) == null || r.call(e, o));
            },
            className: B("Venomous-UI-React--FormField.Number", i),
            style: {
              boxSizing: "border-box",
              ...N,
              ...F
            },
            ...e
          }
        )
      }
    );
  }
);
g.displayName = "FormField.Number";
export {
  g as default
};
