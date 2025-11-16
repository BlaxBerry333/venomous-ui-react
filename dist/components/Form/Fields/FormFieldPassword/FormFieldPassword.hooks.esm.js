import u from "react";
import { FORM_FIELD_VARIANT_MAP as f } from "../../_/FormFieldBase.types.esm.js";
import { useFormFieldBaseActions as P } from "../../_/useFormFieldBaseActions.esm.js";
import { useFormFieldBaseStyles as w } from "../../_/useFormFieldBaseStyles.esm.js";
import { COMPONENT_DISPLAY_NAMES as m } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
function C({
  variant: s = f.OUTLINED,
  fullWidth: o = !1,
  error: r = !1,
  disabled: i = !1,
  readOnly: t = !1,
  isFocused: a,
  isHovered: n
}) {
  return w({
    displayNames: {
      wrapper: m.FormFieldPassword,
      input: m.FormFieldPasswordInput,
      prefix: m.FormFieldPasswordPrefix
    },
    variant: s,
    fullWidth: o,
    error: r,
    disabled: i,
    readOnly: t,
    isFocused: a,
    isHovered: n
  });
}
function D({
  value: s,
  onChange: o,
  disabled: r,
  readOnly: i,
  onMouseEnter: t,
  onMouseLeave: a,
  onMouseDown: n,
  onMouseUp: F
}) {
  const e = P({
    value: s,
    onChange: o,
    disabled: r,
    readOnly: i,
    onMouseEnter: t,
    onMouseLeave: a,
    onMouseDown: n,
    onMouseUp: F,
    initialValue: "",
    transformInputValue: (l) => l.target.value
  }), [p, c] = u.useState(!1), d = u.useCallback(() => {
    e.isInteractionDisabled || c((l) => !l);
  }, [e.isInteractionDisabled]);
  return u.useMemo(
    () => ({
      // 基础状态和事件
      inputValue: e.inputValue,
      isFocused: e.isFocused,
      isHovered: e.isHovered,
      handleChange: e.handleChange,
      onFocus: e.onFocus,
      onBlur: e.onBlur,
      WrapperElementEvents: e.WrapperElementEvents,
      // 密码可见性
      showPassword: p,
      togglePasswordVisibility: d
    }),
    [
      e.inputValue,
      e.isFocused,
      e.isHovered,
      e.handleChange,
      e.onFocus,
      e.onBlur,
      e.WrapperElementEvents,
      p,
      d
    ]
  );
}
export {
  D as useFormFieldPasswordActions,
  C as useFormFieldPasswordStyles
};
