import { jsxs as I, jsx as i } from "react/jsx-runtime";
import W from "react";
import { BackgroundColors as j } from "../../utils/design/colors.esm.js";
import { Shadows as N } from "../../utils/design/Shadow.esm.js";
import { ThemeColor as P } from "../../utils/design/ThemeColor.esm.js";
import T from "clsx";
import z from "./Label.esm.js";
import { useFormFieldStyle as A } from "./useFormFieldStyle.esm.js";
import { useToggleFormFieldChecked as B } from "./useToggleFormFieldChecked.esm.js";
import { AnimatePresence as D, motion as s } from "framer-motion";
const l = 48, c = 24, r = 18, a = 4, H = W.memo(
  ({
    className: d,
    style: m,
    autoComplete: h = "off",
    required: p = !1,
    isError: t = !1,
    disabled: e = !1,
    name: f,
    value: g,
    checked: u = !1,
    onChange: k,
    label: y,
    labelPosition: C = "right",
    ...b
  }) => {
    const { inputRef: w, isChecked: o, toggleOriginalIsChecked: x, toggleCustomIsChecked: F } = B({
      checked: u,
      disabled: e,
      onChange: k
    }), { backgroundColor: S, outlineColor: R, borderColor: v, commonStyles: n } = A({
      isDisabled: e,
      isError: t
    });
    return /* @__PURE__ */ I(z, { label: y, required: p, isError: t, position: C, children: [
      /* @__PURE__ */ i(
        "input",
        {
          type: "checkbox",
          name: f,
          value: g,
          checked: o,
          ref: w,
          onChange: x,
          autoComplete: h,
          disabled: e,
          style: { display: "none" },
          ...b
        }
      ),
      /* @__PURE__ */ i(
        "div",
        {
          onClick: F,
          style: {
            display: "inline-flex",
            alignItems: "center",
            cursor: e ? "not-allowed" : "pointer",
            opacity: e ? 0.6 : 1
          },
          children: /* @__PURE__ */ i(D, { children: /* @__PURE__ */ i(
            s.div,
            {
              initial: !1,
              animate: o ? "checked" : "unchecked",
              transition: { type: "spring", stiffness: 700, damping: 30 },
              className: T("Venomous-UI-React--FormField.Switch", d),
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
                backgroundColor: o ? R : S,
                ...m
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
                    boxShadow: N.light.primary,
                    backgroundColor: t && !o ? P.RubyCopperhead : j.light.secondary
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
H.displayName = "FormField.Switch";
export {
  H as default
};
