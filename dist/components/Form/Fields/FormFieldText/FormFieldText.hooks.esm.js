import p from "react";
import { FORM_FIELD_VARIANT_MAP as F } from "../../_/FormFieldBase.types.esm.js";
import { useFormFieldBaseActions as d } from "../../_/useFormFieldBaseActions.esm.js";
import { useFormFieldBaseStyles as f } from "../../_/useFormFieldBaseStyles.esm.js";
import { COMPONENT_DISPLAY_NAMES as o } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
function M({
  variant: r = F.OUTLINED,
  fullWidth: t = !1,
  error: i = !1,
  disabled: s = !1,
  readOnly: n = !1,
  isFocused: u,
  isHovered: l
}) {
  return f({
    displayNames: {
      wrapper: o.FormFieldText,
      input: o.FormFieldTextInput,
      prefix: o.FormFieldTextPrefix,
      suffix: o.FormFieldTextSuffix
    },
    variant: r,
    fullWidth: t,
    error: i,
    disabled: s,
    readOnly: n,
    isFocused: u,
    isHovered: l
  });
}
function S({
  value: r,
  onChange: t,
  disabled: i,
  readOnly: s,
  onMouseEnter: n,
  onMouseLeave: u,
  onMouseDown: l,
  onMouseUp: m
}) {
  const e = d({
    value: r,
    onChange: t,
    disabled: i,
    readOnly: s,
    onMouseEnter: n,
    onMouseLeave: u,
    onMouseDown: l,
    onMouseUp: m,
    initialValue: "",
    transformInputValue: (a) => a.target.value
  });
  return p.useMemo(
    () => ({
      // 基础状态和事件
      inputValue: e.inputValue,
      isFocused: e.isFocused,
      isHovered: e.isHovered,
      handleChange: e.handleChange,
      onFocus: e.onFocus,
      onBlur: e.onBlur,
      WrapperElementEvents: e.WrapperElementEvents
    }),
    [
      e.inputValue,
      e.isFocused,
      e.isHovered,
      e.handleChange,
      e.onFocus,
      e.onBlur,
      e.WrapperElementEvents
    ]
  );
}
export {
  S as useFormFieldTextActions,
  M as useFormFieldTextStyles
};
