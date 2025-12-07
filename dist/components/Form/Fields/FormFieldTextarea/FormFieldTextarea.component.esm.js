import { jsx as n } from "react/jsx-runtime";
import s from "react";
import p from "clsx";
import q from "../../../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as u } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as c } from "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import { FORM_FIELD_VARIANT_MAP as G } from "../../_/FormFieldBase.types.esm.js";
import J from "../../../../hooks/useCustomComponentProps/index.esm.js";
import { useFormFieldTextareaActions as K, useFormFieldTextareaStyles as Q } from "./FormFieldTextarea.hooks.esm.js";
const X = s.memo(
  s.forwardRef(
    ({
      className: f,
      style: F,
      wrapperClassName: d,
      wrapperStyle: x,
      value: i,
      onChange: N,
      variant: S,
      error: C,
      fullWidth: T,
      disabled: r,
      readOnly: t,
      rows: A,
      autoSize: E,
      minRows: v,
      maxRows: h,
      onMouseEnter: y,
      onMouseLeave: M,
      onMouseDown: P,
      onMouseUp: _,
      ...w
    }, o) => {
      const e = J({
        displayName: u.FormFieldTextarea
      }), R = S ?? e.variant ?? G.OUTLINED, I = C ?? e.error ?? !1, W = T ?? e.fullWidth ?? !1, L = A ?? e.rows ?? 3, m = E ?? e.autoSize ?? !1, { textareaRef: l, inputValue: O, isFocused: g, isHovered: z, handleChange: D, onFocus: V, onBlur: B, WrapperElementEvents: j } = K({
        value: i,
        onChange: N,
        disabled: r,
        readOnly: t,
        autoSize: m,
        minRows: v,
        maxRows: h,
        onMouseEnter: y,
        onMouseLeave: M,
        onMouseDown: P,
        onMouseUp: _
      }), { wrapperStyle: k, textareaStyle: H } = Q({
        variant: R,
        fullWidth: W,
        error: I,
        disabled: r,
        readOnly: t,
        isFocused: g,
        isHovered: z
      }), U = i !== void 0 ? { value: O } : {}, Y = s.useCallback(
        (a) => {
          l.current = a, typeof o == "function" ? o(a) : o && (o.current = a);
        },
        [o, l]
      );
      return /* @__PURE__ */ n(
        q,
        {
          as: "div",
          className: p(c.FormFieldTextarea, d),
          style: { ...k, ...x },
          ...j,
          children: /* @__PURE__ */ n(
            "textarea",
            {
              ref: Y,
              className: p(c.FormFieldTextareaInput, f),
              style: { ...H, ...F },
              rows: m ? void 0 : L,
              ...U,
              onChange: D,
              onFocus: V,
              onBlur: B,
              disabled: r,
              readOnly: t,
              ...w
            }
          )
        }
      );
    }
  )
);
X.displayName = u.FormFieldTextarea;
export {
  X as default
};
