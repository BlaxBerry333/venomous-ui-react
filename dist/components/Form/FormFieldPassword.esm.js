import { jsx as d, jsxs as x } from "react/jsx-runtime";
import v from "clsx";
import t from "react";
import C from "./FormField.esm.js";
import { useFormFieldStyle as V } from "./useFormFieldStyle.esm.js";
import k from "../../hooks/useElementFocus/index.esm.js";
import S from "../Icon/Icon.esm.js";
const D = t.memo(
  ({
    className: l,
    style: n,
    fullWidth: e,
    autoComplete: a = "off",
    required: i = !1,
    isError: r = !1,
    disabled: o = !1,
    name: p,
    value: u,
    label: g,
    helpText: f,
    ...F
  }) => {
    const { isFocused: c, handleFocus: b, handleBlur: w } = k(), { outlineColor: y, commonStyles: s, textColor: h } = V({
      fullWidth: e,
      isDisabled: o,
      isError: r,
      isFocused: c
    }), { isPasswordVisible: m, togglePasswordVisibility: P } = I(!1);
    return /* @__PURE__ */ d(
      C,
      {
        label: g,
        required: i,
        isDisabled: o,
        isFocused: c,
        isError: r,
        fullWidth: e,
        helpText: f,
        children: /* @__PURE__ */ x(
          "div",
          {
            style: {
              ...s,
              position: "relative",
              overflow: "hidden",
              padding: 0
            },
            children: [
              /* @__PURE__ */ d(
                "input",
                {
                  type: m ? "text" : "password",
                  name: p,
                  value: u,
                  autoComplete: a,
                  spellCheck: !1,
                  disabled: o,
                  onFocus: o ? void 0 : b,
                  onBlur: o ? void 0 : w,
                  className: v("Venomous-UI-React--FormField.Password", l),
                  style: {
                    boxSizing: "border-box",
                    border: "none",
                    outline: "none",
                    position: "relative",
                    width: "calc(100% - 34px)",
                    minHeight: s.minHeight,
                    color: h,
                    backgroundColor: s.backgroundColor,
                    padding: s.padding,
                    paddingRight: 0,
                    ...n
                  },
                  ...F
                }
              ),
              /* @__PURE__ */ d(
                S,
                {
                  icon: m ? "solar:eye-linear" : "solar:eye-closed-broken",
                  width: 20,
                  onClick: P,
                  style: {
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: y,
                    padding: s.padding
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
D.displayName = "FormField.Password";
function I(l = !1) {
  const [n, e] = t.useState(l), a = t.useCallback((i) => {
    t.startTransition(() => {
      i.preventDefault(), i.stopPropagation(), e((r) => !r);
    });
  }, []);
  return {
    isPasswordVisible: n,
    togglePasswordVisibility: a
  };
}
export {
  D as default
};
