import { jsx as u, jsxs as V } from "react/jsx-runtime";
import k from "clsx";
import a from "react";
import v from "../../hooks/useElementFocus/index.esm.js";
import S from "../Icon/Icon.esm.js";
import { useFormFieldStyle as B } from "./_useFormFieldStyle.esm.js";
import D from "./FormField.esm.js";
const I = a.memo(
  ({
    className: d,
    style: c,
    fullWidth: r,
    autoComplete: m = "off",
    required: l = !1,
    isError: n = !1,
    disabled: e = !1,
    name: F,
    value: b,
    label: w,
    helpText: y,
    ...o
  }) => {
    const { isFocused: f, handleFocus: h, handleBlur: P } = v(), { outlineColor: x, commonStyles: i, textColor: p } = B({
      fullWidth: r,
      isDisabled: e,
      isError: n,
      isFocused: f
    }), { isPasswordVisible: g, togglePasswordVisibility: C } = R(!1);
    return /* @__PURE__ */ u(
      D,
      {
        label: w,
        required: l,
        isDisabled: e,
        isFocused: f,
        isError: n,
        fullWidth: r,
        helpText: y,
        children: /* @__PURE__ */ V(
          "div",
          {
            style: {
              ...i,
              position: "relative",
              overflow: "hidden",
              padding: 0
            },
            children: [
              /* @__PURE__ */ u(
                "input",
                {
                  type: g ? "text" : "password",
                  name: F,
                  value: b,
                  autoComplete: m,
                  spellCheck: !1,
                  disabled: e,
                  onFocus: (s) => {
                    var t;
                    e || (h(s), (t = o.onFocus) == null || t.call(o, s));
                  },
                  onBlur: (s) => {
                    var t;
                    e || (P(s), (t = o.onBlur) == null || t.call(o, s));
                  },
                  className: k("Venomous-UI-React--FormField.Password", d),
                  style: {
                    boxSizing: "border-box",
                    border: "none",
                    outline: "none",
                    position: "relative",
                    width: "calc(100% - 34px)",
                    minHeight: i.minHeight,
                    color: p,
                    backgroundColor: i.backgroundColor,
                    padding: i.padding,
                    paddingRight: 0,
                    ...c
                  },
                  ...o
                }
              ),
              /* @__PURE__ */ u(
                S,
                {
                  icon: g ? "solar:eye-linear" : "solar:eye-closed-broken",
                  width: 20,
                  onClick: C,
                  style: {
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: x,
                    padding: i.padding
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
I.displayName = "FormField.Password";
function R(d = !1) {
  const [c, r] = a.useState(d), m = a.useCallback((l) => {
    a.startTransition(() => {
      l.preventDefault(), l.stopPropagation(), r((n) => !n);
    });
  }, []);
  return {
    isPasswordVisible: c,
    togglePasswordVisibility: m
  };
}
export {
  I as default
};
