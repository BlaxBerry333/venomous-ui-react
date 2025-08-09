import { jsxs as I, jsx as i } from "react/jsx-runtime";
import W from "react";
import j from "clsx";
import N from "./Label.esm.js";
import { useFormFieldStyle as P } from "./useFormFieldStyle.esm.js";
import { useToggleFormFieldChecked as T } from "./useToggleFormFieldChecked.esm.js";
import { AnimatePresence as z, motion as s } from "framer-motion";
import { ThemeColor as A } from "../../utils/design/ThemeColor.esm.js";
import { BackgroundColors as B } from "../../utils/design/colors.esm.js";
import { Shadows as D } from "../../utils/design/Shadow.esm.js";
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
    labelPosition: b = "right",
    ...C
  }) => {
    const { inputRef: w, isChecked: o, toggleOriginalIsChecked: x, toggleCustomIsChecked: F } = T({
      checked: u,
      disabled: e,
      onChange: k
    }), { backgroundColor: S, outlineColor: R, borderColor: v, commonStyles: n } = P({
      isDisabled: e,
      isError: t
    });
    return /* @__PURE__ */ I(N, { label: y, required: p, isError: t, position: b, children: [
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
          ...C
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
          children: /* @__PURE__ */ i(z, { children: /* @__PURE__ */ i(
            s.div,
            {
              initial: !1,
              animate: o ? "checked" : "unchecked",
              transition: { type: "spring", stiffness: 700, damping: 30 },
              className: j("Venomous-UI-React--FormField.Switch", d),
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
                transition: "background-color 0.2s ease-in-out",
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
                    boxShadow: D.light.primary,
                    backgroundColor: t && !o ? A.RubyCopperhead : B.light.secondary
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
