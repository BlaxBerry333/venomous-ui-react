import { jsx as a, jsxs as P } from "react/jsx-runtime";
import e from "react";
import h from "./FormField.esm.js";
import { useFormFieldStyle as v } from "./useFormFieldStyle.esm.js";
import x from "../../hooks/useElementFocus/index.esm.js";
import V from "../Icon/Icon.esm.js";
const S = e.memo(
  ({
    style: t,
    fullWidth: i,
    autoComplete: r = "off",
    required: n = !1,
    isError: s = !1,
    disabled: o = !1,
    name: p,
    value: c,
    label: m,
    helpText: u,
    ...f
  }) => {
    const { isFocused: g, handleFocus: w, handleBlur: y } = x(), { outlineColor: F, commonStyles: l } = v({
      fullWidth: i,
      isDisabled: o,
      isError: s,
      isFocused: g
    }), { isPasswordVisible: d, togglePasswordVisibility: b } = k(!1);
    return /* @__PURE__ */ a(
      h,
      {
        label: m,
        required: n,
        disabled: o,
        isError: s,
        fullWidth: i,
        helpText: u,
        children: /* @__PURE__ */ P(
          "div",
          {
            style: {
              ...l,
              position: "relative",
              overflow: "hidden",
              padding: 0
            },
            children: [
              /* @__PURE__ */ a(
                "input",
                {
                  type: d ? "text" : "password",
                  name: p,
                  value: c,
                  autoComplete: r,
                  disabled: o,
                  onFocus: o ? void 0 : w,
                  onBlur: o ? void 0 : y,
                  style: {
                    boxSizing: "border-box",
                    border: "none",
                    outline: "none",
                    position: "relative",
                    width: "calc(100% - 34px)",
                    padding: l.padding,
                    paddingRight: 0,
                    ...t
                  },
                  ...f
                }
              ),
              /* @__PURE__ */ a(
                V,
                {
                  icon: d ? "solar:eye-closed-broken" : "solar:eye-linear",
                  width: 20,
                  onClick: b,
                  style: {
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: F,
                    padding: l.padding
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
S.displayName = "FormField.Password";
function k(t = !1) {
  const [i, r] = e.useState(t), n = e.useCallback((s) => {
    e.startTransition(() => {
      s.preventDefault(), s.stopPropagation(), r((o) => !o);
    });
  }, []);
  return {
    isPasswordVisible: i,
    togglePasswordVisibility: n
  };
}
export {
  S as default
};
