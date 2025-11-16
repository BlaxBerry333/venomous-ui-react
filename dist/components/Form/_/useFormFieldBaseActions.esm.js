import s from "react";
import S from "../../../hooks/useElementHoverEvents/index.esm.js";
import U from "../../../hooks/useElementMouseEvents/index.esm.js";
import "../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../Theme/ThemeProvider.context.esm.js";
function G({
  value: t,
  onChange: n,
  disabled: m,
  readOnly: p,
  onMouseEnter: d,
  onMouseLeave: E,
  onMouseDown: f,
  onMouseUp: M,
  initialValue: v,
  transformInputValue: i
}) {
  const [b, u] = s.useState(t ?? v), [F, c] = s.useState(!1), e = m || p;
  s.useEffect(() => {
    t !== void 0 && u(t);
  }, [t]);
  const k = s.useCallback(
    (o) => {
      if (e) return;
      const a = i(o);
      u(a), n == null || n(a, o);
    },
    [e, n, i]
  ), w = s.useCallback(() => {
    e || c(!0);
  }, [e]), B = s.useCallback(() => {
    c(!1);
  }, []), { isHovered: D, MouseEnterEvent: L, MouseLeaveEvent: l } = S({
    disabled: e,
    onMouseEnter: d,
    onMouseLeave: E
  }), { MouseDownEvent: H, MouseUpEvent: r } = U({
    disabled: e,
    onMouseDown: f,
    onMouseUp: M
  }), I = s.useCallback(
    (o) => {
      l(o), r(o);
    },
    [l, r]
  );
  return {
    // 状态
    inputValue: b,
    setInputValue: u,
    isFocused: F,
    isHovered: D,
    isInteractionDisabled: e,
    // Input 事件
    handleChange: k,
    onFocus: w,
    onBlur: B,
    // Wrapper 事件
    WrapperElementEvents: {
      onMouseEnter: L,
      onMouseLeave: I,
      onMouseDown: H,
      onMouseUp: r
    }
  };
}
export {
  G as useFormFieldBaseActions
};
