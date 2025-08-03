import { jsx as a, jsxs as P } from "react/jsx-runtime";
import r from "react";
import h from "./FormField.esm.js";
import { useFormFieldStyle as v } from "./useFormFieldStyle.esm.js";
import x from "../../hooks/useElementFocus/index.esm.js";
import V from "../Icon/Icon.esm.js";
const k = r.memo(
  ({
    style: t,
    fullWidth: i,
    autoComplete: n = "off",
    required: l = !1,
    isError: s = !1,
    disabled: o = !1,
    name: c,
    value: p,
    label: m,
    helpText: u,
    ...g
  }) => {
    const { isFocused: f, handleFocus: b, handleBlur: w } = x(), { outlineColor: y, commonStyles: e } = v({
      fullWidth: i,
      isDisabled: o,
      isError: s,
      isFocused: f
    }), { isPasswordVisible: d, togglePasswordVisibility: F } = C(!1);
    return /* @__PURE__ */ a(
      h,
      {
        label: m,
        required: l,
        disabled: o,
        isError: s,
        fullWidth: i,
        helpText: u,
        children: /* @__PURE__ */ P(
          "div",
          {
            style: {
              ...e,
              position: "relative",
              overflow: "hidden",
              padding: 0
            },
            children: [
              /* @__PURE__ */ a(
                "input",
                {
                  type: d ? "text" : "password",
                  name: c,
                  value: p,
                  autoComplete: n,
                  disabled: o,
                  onFocus: o ? void 0 : b,
                  onBlur: o ? void 0 : w,
                  style: {
                    boxSizing: "border-box",
                    border: "none",
                    outline: "none",
                    position: "relative",
                    width: "calc(100% - 34px)",
                    backgroundColor: e.backgroundColor,
                    padding: e.padding,
                    paddingRight: 0,
                    ...t
                  },
                  ...g
                }
              ),
              /* @__PURE__ */ a(
                V,
                {
                  icon: d ? "solar:eye-closed-broken" : "solar:eye-linear",
                  width: 20,
                  onClick: F,
                  style: {
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: y,
                    padding: e.padding
                  }
                }
              )
            ]
          }
        )
      }
    );
  }
);
k.displayName = "FormField.Password";
function C(t = !1) {
  const [i, n] = r.useState(t), l = r.useCallback((s) => {
    r.startTransition(() => {
      s.preventDefault(), s.stopPropagation(), n((o) => !o);
    });
  }, []);
  return {
    isPasswordVisible: i,
    togglePasswordVisibility: l
  };
}
export {
  k as default
};
