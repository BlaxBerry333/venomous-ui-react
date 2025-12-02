import r from "react";
import { FORM_FIELD_VARIANT_MAP as G } from "../../_/FormFieldBase.types.esm.js";
import J from "../../../../hooks/useElementHoverEvents/index.esm.js";
import Q from "../../../../hooks/useElementMouseEvents/index.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { COMPONENT_DISPLAY_NAMES as z } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import { useFormFieldBaseStyles as X } from "../../_/useFormFieldBaseStyles.esm.js";
function Z({
  variant: n = G.OUTLINED,
  fullWidth: t = !1,
  error: w = !1,
  disabled: l = !1,
  open: f = !1,
  width: M,
  maxDropdownHeight: d = 300,
  isHovered: i
}) {
  return X({
    displayNames: {
      wrapper: z.FormFieldSelect,
      dropdown: z.FormFieldSelectDropdown
    },
    variant: n,
    fullWidth: t,
    error: w,
    disabled: l,
    readOnly: l,
    isFocused: f,
    // 使用 open 状态模拟 focus
    isHovered: i,
    customConfig: {
      wrapperExtraStyles: {
        cursor: l ? "not-allowed" : "pointer",
        userSelect: "none"
      },
      dropdownExtraStyles: {
        maxHeight: d,
        width: M
      }
    }
  });
}
function $({
  options: n,
  multiple: t = !1,
  value: w,
  defaultValue: l,
  onChange: f,
  autoCloseOnSelect: M,
  disabled: d = !1,
  isControlled: i,
  selectRef: V,
  onMouseEnter: T,
  onMouseLeave: K,
  onMouseDown: h,
  onMouseUp: B
}) {
  const [O, k] = r.useState(
    t ? l ?? [] : l
  ), [v, o] = r.useState(!1), [E, m] = r.useState(-1), p = i ? w : O;
  r.useEffect(() => {
    const e = V == null ? void 0 : V.current;
    if (!e || i) return;
    const u = e.form;
    if (!u) return;
    const s = () => {
      k(t ? l ?? [] : l), o(!1), m(-1);
    };
    return u.addEventListener("reset", s), () => u.removeEventListener("reset", s);
  }, [i, l, t, V]);
  const { isHovered: H, MouseEnterEvent: U, MouseLeaveEvent: _ } = J({
    disabled: d,
    onMouseEnter: T,
    onMouseLeave: K
  }), { MouseDownEvent: a, MouseUpEvent: c } = Q({
    disabled: d,
    onMouseDown: h,
    onMouseUp: B
  }), x = r.useCallback(
    (e) => {
      _(e), c(e);
    },
    [_, c]
  ), I = r.useMemo(
    () => ({
      onMouseEnter: U,
      onMouseLeave: x,
      onMouseDown: a,
      onMouseUp: c
    }),
    [U, x, a, c]
  ), L = r.useMemo(() => {
    if (t) {
      const e = Array.isArray(p) ? p : [];
      return n.filter((u) => e.includes(u.value));
    } else {
      const e = p, u = n.find((s) => s.value === e);
      return u ? [u] : [];
    }
  }, [n, p, t]), b = t ? void 0 : L[0], D = r.useCallback(
    (e) => {
      if (!e.disabled)
        if (t) {
          const s = (() => {
            const S = i ? w : O;
            return Array.isArray(S) ? S : [];
          })(), A = s.includes(e.value) ? s.filter((S) => S !== e.value) : [...s, e.value];
          i || k(A);
          const W = n.filter((S) => A.includes(S.value));
          f == null || f(A, W), M && (o(!1), m(-1));
        } else
          i || k(e.value), f == null || f(e.value, e), o(!1), m(-1);
    },
    [t, i, w, O, f, n, M]
  ), g = r.useCallback(
    (e) => {
      d || (o(e), e || m(-1));
    },
    [d]
  ), N = r.useCallback(
    (e) => {
      if (!d)
        switch (e.key) {
          case "ArrowDown":
            e.preventDefault(), v ? m((u) => {
              const s = u + 1;
              return s >= n.length ? 0 : s;
            }) : o(!0);
            break;
          case "ArrowUp":
            e.preventDefault(), v ? m((u) => {
              const s = u - 1;
              return s < 0 ? n.length - 1 : s;
            }) : o(!0);
            break;
          case "Enter":
            e.preventDefault(), v && E >= 0 && n[E] ? D(n[E]) : v || o(!0);
            break;
          case "Escape":
            e.preventDefault(), o(!1), m(-1);
            break;
          case "Tab":
            v && (o(!1), m(-1));
            break;
        }
    },
    [d, v, E, n, D]
  );
  return r.useMemo(
    () => ({
      // 状态
      value: p,
      selectedOption: b,
      selectedOptions: L,
      open: v,
      filteredOptions: n,
      // 直接返回 options，不再过滤
      highlightedIndex: E,
      isHovered: H,
      // 事件处理
      handleSelect: D,
      handleOpenChange: g,
      handleKeyDown: N,
      // Wrapper 事件
      WrapperElementEvents: I
    }),
    [
      p,
      b,
      L,
      v,
      n,
      E,
      H,
      D,
      g,
      N,
      I
    ]
  );
}
function ie({
  options: n,
  multiple: t = !1,
  value: w,
  defaultValue: l,
  onChange: f,
  placeholder: M = "",
  variant: d = G.OUTLINED,
  error: i = !1,
  fullWidth: V = !1,
  disabled: T = !1,
  maxDropdownHeight: K = 300,
  width: h,
  autoCloseOnSelect: B,
  isControlled: O,
  selectRef: k,
  dropdownClassName: v,
  dropdownStyle: o,
  optionClassName: E,
  optionStyle: m,
  onMouseEnter: p,
  onMouseLeave: H,
  onMouseDown: U,
  onMouseUp: _
}) {
  const {
    selectedOption: a,
    selectedOptions: c,
    open: x,
    filteredOptions: I,
    isHovered: L,
    handleSelect: b,
    handleOpenChange: D,
    handleKeyDown: g,
    WrapperElementEvents: N
  } = $({
    options: n,
    multiple: t,
    value: w,
    defaultValue: l,
    onChange: f,
    autoCloseOnSelect: B,
    disabled: T,
    isControlled: O,
    selectRef: k,
    onMouseEnter: p,
    onMouseLeave: H,
    onMouseDown: U,
    onMouseUp: _
  }), { wrapperStyle: e, dropdownStyle: u } = Z({
    variant: d,
    fullWidth: V,
    error: i,
    disabled: T,
    open: x,
    width: h,
    maxDropdownHeight: K,
    isHovered: L
  }), { actualValue: s, selectedValuesSet: P } = r.useMemo(() => {
    if (!t)
      return {
        actualValue: (a == null ? void 0 : a.value) ?? "",
        selectedValuesSet: null
      };
    const F = [], y = /* @__PURE__ */ new Set();
    for (const q of c)
      F.push(q.value), y.add(q.value);
    return { actualValue: F, selectedValuesSet: y };
  }, [t, a, c]), A = r.useMemo(() => {
    if (!t)
      return (a == null ? void 0 : a.label) || M;
    if (c.length === 0)
      return M;
    let F = c[0].label;
    for (let y = 1; y < c.length; y++)
      F += ", " + c[y].label;
    return F;
  }, [t, a, c, M]), W = r.useMemo(() => {
    const F = t ? c.length > 0 : !!a, y = Number(h) * 0.8;
    return {
      text: A,
      width: y,
      opacity: F ? 1 : 0.5,
      // 返回选中项信息供 trigger 使用
      selectedOption: a,
      selectedOptions: c,
      multiple: t
    };
  }, [A, t, a, c, h]), S = r.useMemo(
    () => ({ ...u, ...o }),
    [u, o]
  ), Y = r.useMemo(() => m, [m]), j = r.useMemo(
    () => ({
      filteredOptions: I,
      selectedValuesSet: P,
      selectedOption: a,
      multiple: t,
      handleSelect: b,
      dropdownClassName: v,
      mergedDropdownStyle: S,
      optionClassName: E,
      mergedOptionStyle: Y
    }),
    [
      I,
      P,
      a,
      t,
      b,
      v,
      S,
      E,
      Y
    ]
  );
  return r.useMemo(
    () => ({
      // 状态
      open: x,
      actualValue: s,
      // 样式
      computedWrapperStyle: e,
      // 数据
      displayContentData: W,
      dropdownContentData: j,
      // 事件
      handleOpenChange: D,
      handleKeyDown: g,
      WrapperElementEvents: N
    }),
    [
      x,
      s,
      e,
      W,
      j,
      D,
      g,
      N
    ]
  );
}
export {
  $ as useFormFieldSelectActions,
  ie as useFormFieldSelectDisplay,
  Z as useFormFieldSelectStyles
};
