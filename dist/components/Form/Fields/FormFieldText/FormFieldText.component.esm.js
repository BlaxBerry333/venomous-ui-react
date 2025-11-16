import { jsxs as H, jsx as m } from "react/jsx-runtime";
import p from "react";
import { clsx as e } from "../../../../node_modules/clsx/dist/clsx.esm.js";
import n from "../../../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as U } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as t } from "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import { FORM_FIELD_VARIANT_MAP as Y } from "../../_/FormFieldBase.types.esm.js";
import { Space as k } from "../../../Space/index.esm.js";
import { useFormFieldTextActions as q, useFormFieldTextStyles as z } from "./FormFieldText.hooks.esm.js";
const G = p.memo(
  p.forwardRef(
    ({
      className: a,
      style: c,
      wrapperClassName: u,
      wrapperStyle: d,
      prefixClassName: F,
      prefixStyle: f,
      suffixClassName: x,
      suffixStyle: S,
      prefix: i = null,
      suffix: l = null,
      value: s,
      onChange: N,
      variant: y = Y.OUTLINED,
      error: T = !1,
      fullWidth: A = !1,
      disabled: o,
      readOnly: r,
      onMouseEnter: E,
      onMouseLeave: C,
      onMouseDown: M,
      onMouseUp: P,
      ..._
    }, h) => {
      const { inputValue: v, isFocused: I, isHovered: L, handleChange: O, onFocus: R, onBlur: g, WrapperElementEvents: D } = q({
        value: s,
        onChange: N,
        disabled: o,
        readOnly: r,
        onMouseEnter: E,
        onMouseLeave: C,
        onMouseDown: M,
        onMouseUp: P
      }), {
        wrapperStyle: V,
        inputStyle: j,
        prefixStyle: w,
        suffixStyle: B
      } = z({
        variant: y,
        fullWidth: A,
        error: T,
        disabled: o,
        readOnly: r,
        isFocused: I,
        isHovered: L
      }), W = s !== void 0 ? { value: v } : {};
      return /* @__PURE__ */ H(
        k.Flex,
        {
          as: "div",
          spacing: 8,
          className: e(t.FormFieldText, u),
          style: { ...V, ...d },
          ...D,
          children: [
            i && /* @__PURE__ */ m(
              n,
              {
                as: "div",
                className: e(t.FormFieldTextPrefix, F),
                style: { ...w, ...f },
                children: i
              }
            ),
            /* @__PURE__ */ m(
              "input",
              {
                type: "text",
                ref: h,
                className: e(t.FormFieldTextInput, a),
                style: { ...j, ...c },
                ...W,
                onChange: O,
                onFocus: R,
                onBlur: g,
                disabled: o,
                readOnly: r,
                ..._
              }
            ),
            l && /* @__PURE__ */ m(
              n,
              {
                as: "div",
                className: e(t.FormFieldTextSuffix, x),
                style: { ...B, ...S },
                children: l
              }
            )
          ]
        }
      );
    }
  )
);
G.displayName = U.FormFieldText;
export {
  G as default
};
