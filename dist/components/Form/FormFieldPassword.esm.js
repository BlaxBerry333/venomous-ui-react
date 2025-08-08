import { jsx as a, jsxs as P } from "react/jsx-runtime";
import t from "react";
import x from "./FormField.esm.js";
import { useFormFieldStyle as v } from "./_useFormFieldStyle.esm.js";
import C from "../../hooks/useElementFocus/index.esm.js";
import k from "../Icon/Icon.esm.js";
const V = t.memo(
  ({
    style: r,
    fullWidth: i,
    autoComplete: l = "off",
    required: n = !1,
    isError: s = !1,
    disabled: o = !1,
    name: p,
    value: m,
    label: u,
    helpText: g,
    ...f
  }) => {
    const { isFocused: d, handleFocus: b, handleBlur: w } = C(), { outlineColor: y, commonStyles: e, textColor: F } = v({
      fullWidth: i,
      isDisabled: o,
      isError: s,
      isFocused: d
    }), { isPasswordVisible: c, togglePasswordVisibility: h } = S(!1);
    return /* @__PURE__ */ a(
      x,
      {
        label: u,
        required: n,
        isDisabled: o,
        isFocused: d,
        isError: s,
        fullWidth: i,
        helpText: g,
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
                  type: c ? "text" : "password",
                  name: p,
                  value: m,
                  autoComplete: l,
                  spellCheck: !1,
                  disabled: o,
                  onFocus: o ? void 0 : b,
                  onBlur: o ? void 0 : w,
                  style: {
                    boxSizing: "border-box",
                    border: "none",
                    outline: "none",
                    position: "relative",
                    width: "calc(100% - 34px)",
                    minHeight: e.minHeight,
                    color: F,
                    backgroundColor: e.backgroundColor,
                    padding: e.padding,
                    paddingRight: 0,
                    ...r
                  },
                  ...f
                }
              ),
              /* @__PURE__ */ a(
                k,
                {
                  icon: c ? "solar:eye-linear" : "solar:eye-closed-broken",
                  width: 20,
                  onClick: h,
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
V.displayName = "FormField.Password";
function S(r = !1) {
  const [i, l] = t.useState(r), n = t.useCallback((s) => {
    t.startTransition(() => {
      s.preventDefault(), s.stopPropagation(), l((o) => !o);
    });
  }, []);
  return {
    isPasswordVisible: i,
    togglePasswordVisibility: n
  };
}
export {
  V as default
};
