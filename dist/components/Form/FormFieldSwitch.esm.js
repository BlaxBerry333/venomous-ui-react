import { jsxs as R, jsx as i } from "react/jsx-runtime";
import I from "react";
import W from "./Label.esm.js";
import { useFormFieldStyle as j } from "./useFormFieldStyle.esm.js";
import { useToggleFormFieldChecked as P } from "./useToggleFormFieldChecked.esm.js";
import { AnimatePresence as T, motion as s } from "framer-motion";
import { ThemeColor as z } from "../../utils/design/ThemeColor.esm.js";
import { BackgroundColors as A } from "../../utils/design/colors.esm.js";
import { Shadows as B } from "../../utils/design/Shadow.esm.js";
const l = 48, c = 24, r = 18, a = 4, D = I.memo(
  ({
    style: d,
    autoComplete: h = "off",
    required: m = !1,
    isError: t = !1,
    disabled: e = !1,
    name: p,
    value: f,
    checked: g = !1,
    onChange: u,
    label: k,
    labelPosition: y = "right",
    ...b
  }) => {
    const { inputRef: C, isChecked: o, toggleOriginalIsChecked: w, toggleCustomIsChecked: x } = P({
      checked: g,
      disabled: e,
      onChange: u
    }), { backgroundColor: S, outlineColor: F, borderColor: v, commonStyles: n } = j({
      isDisabled: e,
      isError: t
    });
    return /* @__PURE__ */ R(W, { label: k, required: m, isError: t, position: y, children: [
      /* @__PURE__ */ i(
        "input",
        {
          type: "checkbox",
          name: p,
          value: f,
          checked: o,
          ref: C,
          onChange: w,
          autoComplete: h,
          disabled: e,
          style: { display: "none", ...d },
          ...b
        }
      ),
      /* @__PURE__ */ i(
        "div",
        {
          onClick: x,
          style: {
            display: "inline-flex",
            alignItems: "center",
            cursor: e ? "not-allowed" : "pointer",
            opacity: e ? 0.6 : 1
          },
          children: /* @__PURE__ */ i(T, { children: /* @__PURE__ */ i(
            s.div,
            {
              initial: !1,
              animate: o ? "checked" : "unchecked",
              transition: { type: "spring", stiffness: 700, damping: 30 },
              style: {
                width: l,
                height: c,
                position: "relative",
                display: "flex",
                alignItems: "center",
                borderRadius: c / 2,
                borderWidth: n.borderWidth,
                borderStyle: n.borderStyle,
                borderColor: v,
                backgroundColor: o ? F : S,
                transition: "background-color 0.2s ease-in-out"
              },
              children: /* @__PURE__ */ i(
                s.div,
                {
                  initial: !1,
                  animate: o ? "checked" : "unchecked",
                  transition: { type: "spring", stiffness: 700, damping: 30 },
                  variants: {
                    checked: { x: l - r - a },
                    unchecked: { x: a }
                  },
                  style: {
                    width: r,
                    height: r,
                    borderRadius: "50%",
                    position: "absolute",
                    boxShadow: B.light.primary,
                    backgroundColor: t && !o ? z.RubyCopperhead : A.light.secondary
                  }
                }
              )
            }
          ) })
        }
      )
    ] });
  }
);
D.displayName = "FormField.Switch";
export {
  D as default
};
