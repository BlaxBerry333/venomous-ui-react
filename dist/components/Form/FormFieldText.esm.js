import { jsx as r } from "react/jsx-runtime";
import y from "clsx";
import S from "react";
import T from "../../hooks/useElementFocus/index.esm.js";
import h from "./FormField.esm.js";
import { useFormFieldStyle as v } from "./useFormFieldStyle.esm.js";
const B = S.memo(
  ({
    className: s,
    style: i,
    fullWidth: e,
    autoComplete: l = "off",
    required: n = !1,
    isError: m = !1,
    disabled: o = !1,
    name: F,
    value: c,
    label: a,
    helpText: f,
    ...u
  }) => {
    const { isFocused: t, handleFocus: p, handleBlur: x } = T(), { commonStyles: d } = v({
      fullWidth: e,
      isDisabled: o,
      isError: m,
      isFocused: t
    });
    return /* @__PURE__ */ r(
      h,
      {
        label: a,
        required: n,
        isDisabled: o,
        isError: m,
        isFocused: t,
        fullWidth: e,
        helpText: f,
        children: /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            name: F,
            value: c,
            autoComplete: l,
            disabled: o,
            onFocus: o ? void 0 : p,
            onBlur: o ? void 0 : x,
            className: y("Venomous-UI-React--FormField.Text", s),
            style: {
              boxSizing: "border-box",
              ...d,
              ...i
            },
            ...u
          }
        )
      }
    );
  }
);
B.displayName = "FormField.Text";
export {
  B as default
};
