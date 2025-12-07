import e from "react";
import { FORM_FIELD_VARIANT_MAP as U } from "../../_/FormFieldBase.types.esm.js";
import W from "../../../../hooks/useElementHoverEvents/index.esm.js";
import j from "../../../../hooks/useElementMouseEvents/index.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import R from "../../../../hooks/useThemeDesigns/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as g } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import { useFormFieldBaseStyles as X } from "../../_/useFormFieldBaseStyles.esm.js";
import Y from "../../../../hooks/useCustomStyle/index.esm.js";
function ie({
  value: s,
  onChange: r,
  disabled: d,
  readOnly: f,
  autoSize: u,
  minRows: i,
  maxRows: l,
  onMouseEnter: p,
  onMouseLeave: n,
  onMouseDown: c,
  onMouseUp: h
}) {
  const [F, E] = e.useState(s ?? ""), [y, M] = e.useState(!1), S = e.useRef(null), a = d || f;
  e.useEffect(() => {
    s !== void 0 && E(s);
  }, [s]);
  const T = e.useCallback(() => {
    const t = S.current;
    if (!t || !u) return;
    const o = window.getComputedStyle(t), D = parseFloat(o.lineHeight) || 20, L = parseFloat(o.paddingTop) || 0, N = parseFloat(o.paddingBottom) || 0, w = parseFloat(o.borderTopWidth) || 0, k = parseFloat(o.borderBottomWidth) || 0, C = i ? i * D + L + N + w + k : 0, O = l ? l * D + L + N + w + k : 1 / 0;
    t.style.height = "auto";
    const V = t.scrollHeight, P = Math.min(Math.max(V, C), O);
    t.style.height = `${P}px`;
  }, [u, i, l]);
  e.useEffect(() => {
    T();
  }, [F, T]);
  const b = e.useCallback(
    (t) => {
      if (a) return;
      const o = t.target.value;
      E(o), r == null || r(o, t);
    },
    [a, r]
  ), x = e.useCallback(() => {
    a || M(!0);
  }, [a]), H = e.useCallback(() => {
    M(!1);
  }, []), { isHovered: v, MouseEnterEvent: I, MouseLeaveEvent: _ } = W({
    disabled: a,
    onMouseEnter: p,
    onMouseLeave: n
  }), { MouseDownEvent: A, MouseUpEvent: m } = j({
    disabled: a,
    onMouseDown: c,
    onMouseUp: h
  }), B = e.useCallback(
    (t) => {
      _(t), m(t);
    },
    [_, m]
  );
  return e.useMemo(
    () => ({
      // Ref
      textareaRef: S,
      // 状态
      inputValue: F,
      isFocused: y,
      isHovered: v,
      // Textarea 事件
      handleChange: b,
      onFocus: x,
      onBlur: H,
      // Wrapper 事件
      WrapperElementEvents: {
        onMouseEnter: I,
        onMouseLeave: B,
        onMouseDown: A,
        onMouseUp: m
      }
    }),
    [
      F,
      y,
      v,
      b,
      x,
      H,
      I,
      B,
      A,
      m
    ]
  );
}
function le({
  variant: s = U.OUTLINED,
  fullWidth: r = !1,
  error: d = !1,
  disabled: f = !1,
  readOnly: u = !1,
  isFocused: i,
  isHovered: l
}) {
  const { TypographyLineHeights: p } = R(), n = X({
    displayNames: {
      wrapper: g.FormFieldTextarea,
      input: g.FormFieldTextareaInput
    },
    variant: s,
    fullWidth: r,
    error: d,
    disabled: f,
    readOnly: u,
    isFocused: i,
    isHovered: l,
    customConfig: {
      // Textarea 不需要固定高度
      wrapperExtraStyles: {
        height: "auto",
        minHeight: "auto",
        alignItems: "stretch"
      }
    }
  }), c = Y({ displayName: g.FormFieldTextareaInput }), h = e.useMemo(
    () => ({
      // -- default styles --
      ...n.inputStyle,
      resize: "none",
      lineHeight: p.TEXT.BASE,
      padding: "8px 0",
      verticalAlign: "top",
      // -- custom styles --
      ...c
    }),
    [n.inputStyle, p, c]
  );
  return {
    wrapperStyle: n.wrapperStyle,
    textareaStyle: h,
    __: n.__
  };
}
export {
  ie as useFormFieldTextareaActions,
  le as useFormFieldTextareaStyles
};
