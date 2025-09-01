import { jsxs as I, jsx as i } from "react/jsx-runtime";
import v from "react";
import { SEMANTIC_COLORS as A, BACKGROUND_COLORS as N } from "../../utils/design/colors.esm.js";
import { SHADOWS as W } from "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import "../../utils/design/TypographySize.esm.js";
import D from "clsx";
import { useFormFieldStyle as L } from "./_useFormFieldStyle.esm.js";
import { useToggleFormFieldChecked as j } from "./_useToggleFormFieldChecked.esm.js";
import H from "./Label.esm.js";
import { AnimatePresence as P, motion as s } from "framer-motion";
const l = 48, c = 24, r = 18, a = 4, T = v.memo(
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
    ...S
  }) => {
    const { inputRef: b, isChecked: o, toggleOriginalIsChecked: x, toggleCustomIsChecked: F } = j({
      checked: u,
      disabled: e,
      onChange: k
    }), { backgroundColor: w, outlineColor: R, borderColor: O, commonStyles: n } = L({
      isDisabled: e,
      isError: t
    });
    return /* @__PURE__ */ I(H, { label: y, required: p, isError: t, position: C, children: [
      /* @__PURE__ */ i(
        "input",
        {
          type: "checkbox",
          name: f,
          value: g,
          checked: o,
          ref: b,
          onChange: x,
          autoComplete: h,
          disabled: e,
          style: { display: "none" },
          ...S
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
          children: /* @__PURE__ */ i(P, { children: /* @__PURE__ */ i(
            s.div,
            {
              initial: !1,
              animate: o ? "checked" : "unchecked",
              transition: { type: "spring", stiffness: 700, damping: 30 },
              className: D("Venomous-UI-React--FormField.Switch", d),
              style: {
                width: l,
                height: c,
                position: "relative",
                display: "flex",
                alignItems: "center",
                borderRadius: c / 2,
                borderWidth: n.borderWidth,
                borderStyle: n.borderStyle,
                borderColor: O,
                backgroundColor: o ? R : w,
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
                    boxShadow: W.light.primary,
                    backgroundColor: t && !o ? A.error : N.light.secondary
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
T.displayName = "FormField.Switch";
export {
  T as default
};
