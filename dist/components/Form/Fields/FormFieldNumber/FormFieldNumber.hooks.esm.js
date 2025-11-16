import d from "react";
import { FORM_FIELD_VARIANT_MAP as b } from "../../_/FormFieldBase.types.esm.js";
import { useFormFieldBaseActions as N } from "../../_/useFormFieldBaseActions.esm.js";
import { useFormFieldBaseStyles as E } from "../../_/useFormFieldBaseStyles.esm.js";
import { COMPONENT_DISPLAY_NAMES as s } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
function k({
  variant: a = b.OUTLINED,
  fullWidth: r = !1,
  error: t = !1,
  disabled: u = !1,
  readOnly: l = !1,
  isFocused: n,
  isHovered: p
}) {
  return E({
    displayNames: {
      wrapper: s.FormFieldNumber,
      input: s.FormFieldNumberInput,
      prefix: s.FormFieldNumberPrefix,
      suffix: s.FormFieldNumberSuffix
    },
    variant: a,
    fullWidth: r,
    error: t,
    disabled: u,
    readOnly: l,
    isFocused: n,
    isHovered: p,
    customConfig: {
      inputExtraStyles: {
        // 隐藏原生 number input 的上下箭头
        MozAppearance: "textfield",
        WebkitAppearance: "none"
      }
    }
  });
}
function w({
  value: a,
  onChange: r,
  min: t,
  max: u,
  step: l = 1,
  disabled: n,
  readOnly: p,
  onMouseEnter: f,
  onMouseLeave: F,
  onMouseDown: V,
  onMouseUp: v
}) {
  const e = N({
    value: a,
    onChange: r,
    disabled: n,
    readOnly: p,
    onMouseEnter: f,
    onMouseLeave: F,
    onMouseDown: V,
    onMouseUp: v,
    initialValue: void 0,
    transformInputValue: (o) => o.target.value === "" ? void 0 : Number(o.target.value)
  }), c = d.useCallback(() => {
    if (e.isInteractionDisabled) return;
    let i = (e.inputValue !== void 0 ? e.inputValue : t !== void 0 ? t : 0) + l;
    u !== void 0 && i > u && (i = u), e.setInputValue(i), r == null || r(i, {});
  }, [e, l, u, t, r]), m = d.useCallback(() => {
    if (e.isInteractionDisabled) return;
    let i = (e.inputValue !== void 0 ? e.inputValue : u !== void 0 ? u : 0) - l;
    t !== void 0 && i < t && (i = t), e.setInputValue(i), r == null || r(i, {});
  }, [e, l, t, u, r]);
  return d.useMemo(
    () => ({
      // 基础状态和事件
      inputValue: e.inputValue,
      isFocused: e.isFocused,
      isHovered: e.isHovered,
      handleChange: e.handleChange,
      onFocus: e.onFocus,
      onBlur: e.onBlur,
      WrapperElementEvents: e.WrapperElementEvents,
      // 数值增减
      handleIncrement: c,
      handleDecrement: m
    }),
    [
      e.inputValue,
      e.isFocused,
      e.isHovered,
      e.handleChange,
      e.onFocus,
      e.onBlur,
      e.WrapperElementEvents,
      c,
      m
    ]
  );
}
export {
  w as useFormFieldNumberActions,
  k as useFormFieldNumberStyles
};
