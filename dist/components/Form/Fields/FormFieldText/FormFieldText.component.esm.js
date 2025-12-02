import { jsxs as z, jsx as m } from "react/jsx-runtime";
import n from "react";
import t from "clsx";
import a from "../../../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as u } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as e } from "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import { FORM_FIELD_VARIANT_MAP as G } from "../../_/FormFieldBase.types.esm.js";
import { Space as J } from "../../../Space/index.esm.js";
import K from "../../../../hooks/useCustomComponentProps/index.esm.js";
import { useFormFieldTextActions as Q, useFormFieldTextStyles as X } from "./FormFieldText.hooks.esm.js";
const Z = n.memo(
  n.forwardRef(
    ({
      className: c,
      style: d,
      wrapperClassName: f,
      wrapperStyle: F,
      prefixClassName: x,
      prefixStyle: S,
      suffixClassName: N,
      suffixStyle: y,
      prefix: l = null,
      suffix: s = null,
      value: p,
      onChange: T,
      variant: C,
      error: h,
      fullWidth: v,
      disabled: o,
      readOnly: r,
      onMouseEnter: A,
      onMouseLeave: E,
      onMouseDown: P,
      onMouseUp: M,
      ..._
    }, I) => {
      const i = K({
        displayName: u.FormFieldText
      }), W = C ?? i.variant ?? G.OUTLINED, L = h ?? i.error ?? !1, O = v ?? i.fullWidth ?? !1, { inputValue: R, isFocused: g, isHovered: D, handleChange: V, onFocus: j, onBlur: w, WrapperElementEvents: B } = Q({
        value: p,
        onChange: T,
        disabled: o,
        readOnly: r,
        onMouseEnter: A,
        onMouseLeave: E,
        onMouseDown: P,
        onMouseUp: M
      }), {
        wrapperStyle: H,
        inputStyle: U,
        prefixStyle: Y,
        suffixStyle: k
      } = X({
        variant: W,
        fullWidth: O,
        error: L,
        disabled: o,
        readOnly: r,
        isFocused: g,
        isHovered: D
      }), q = p !== void 0 ? { value: R } : {};
      return /* @__PURE__ */ z(
        J.Flex,
        {
          as: "div",
          spacing: 8,
          className: t(e.FormFieldText, f),
          style: { ...H, ...F },
          ...B,
          children: [
            l && /* @__PURE__ */ m(
              a,
              {
                as: "div",
                className: t(e.FormFieldTextPrefix, x),
                style: { ...Y, ...S },
                children: l
              }
            ),
            /* @__PURE__ */ m(
              "input",
              {
                type: "text",
                ref: I,
                className: t(e.FormFieldTextInput, c),
                style: { ...U, ...d },
                ...q,
                onChange: V,
                onFocus: j,
                onBlur: w,
                disabled: o,
                readOnly: r,
                ..._
              }
            ),
            s && /* @__PURE__ */ m(
              a,
              {
                as: "div",
                className: t(e.FormFieldTextSuffix, N),
                style: { ...k, ...y },
                children: s
              }
            )
          ]
        }
      );
    }
  )
);
Z.displayName = u.FormFieldText;
export {
  Z as default
};
