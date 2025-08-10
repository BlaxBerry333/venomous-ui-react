import { jsx as s } from "react/jsx-runtime";
import y from "clsx";
import h from "react";
import S from "../../hooks/useElementFocus/index.esm.js";
import T from "./FormField.esm.js";
import { useFormFieldStyle as v } from "./useFormFieldStyle.esm.js";
const z = h.memo(
  ({
    className: t,
    style: a,
    fullWidth: o,
    required: l = !1,
    isError: r = !1,
    disabled: e = !1,
    rows: i = 3,
    name: n,
    value: c,
    label: F,
    helpText: f,
    ...u
  }) => {
    const { isFocused: m, handleFocus: p, handleBlur: x } = S(), { commonStyles: d } = v({
      fullWidth: o,
      isDisabled: e,
      isError: r,
      isFocused: m
    });
    return /* @__PURE__ */ s(
      T,
      {
        label: F,
        required: l,
        isDisabled: e,
        isError: r,
        isFocused: m,
        fullWidth: o,
        helpText: f,
        children: /* @__PURE__ */ s(
          "textarea",
          {
            name: n,
            value: c,
            disabled: e,
            onFocus: e ? void 0 : p,
            onBlur: e ? void 0 : x,
            spellCheck: !1,
            rows: i,
            className: y("Venomous-UI-React--FormField.Textarea", t),
            style: {
              boxSizing: "border-box",
              resize: "none",
              ...d,
              ...a
            },
            ...u
          }
        )
      }
    );
  }
);
z.displayName = "FormField.Textarea";
export {
  z as default
};
