import e from "react";
import w from "../../../../hooks/useElementHoverEvents/index.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import I from "../../../../hooks/useThemeDesigns/index.esm.js";
import "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import { hexToRgba as D } from "../../../../tools/colors/get-colors.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import L from "../../../../hooks/useCustomStyle/index.esm.js";
function V({
  checked: l,
  defaultChecked: r,
  onChange: n,
  disabled: b,
  onMouseEnter: k,
  onMouseLeave: h,
  externalRef: s
}) {
  const [t, u] = e.useState(!1), [a, i] = e.useState(r ?? !1), p = e.useRef(null), m = l !== void 0;
  e.useEffect(() => {
    m && i(l);
  }, [m, l]), e.useEffect(() => {
    const o = p.current;
    if (!o || m) return;
    const f = o.form;
    if (!f) return;
    const F = () => {
      i(r ?? !1);
    };
    return f.addEventListener("reset", F), () => f.removeEventListener("reset", F);
  }, [m, r]);
  const c = b, C = e.useCallback(
    (o) => {
      if (c) return;
      const f = o.target.checked;
      m || i(f), n == null || n(f, o);
    },
    [c, m, n]
  ), y = e.useCallback(() => {
    c || u(!0);
  }, [c]), S = e.useCallback(() => {
    u(!1);
  }, []), d = e.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (o) => {
      c || p.current && p.current.click();
    },
    [c]
  ), x = e.useCallback(
    (o) => {
      p.current = o, typeof s == "function" ? s(o) : s && (s.current = o);
    },
    [s]
  ), { isHovered: E, MouseEnterEvent: v, MouseLeaveEvent: M } = w({
    disabled: c,
    onMouseEnter: k,
    onMouseLeave: h
  });
  return e.useMemo(
    () => ({
      // 状态
      internalChecked: a,
      isFocused: t,
      isHovered: E,
      // Ref
      setRefs: x,
      // 事件处理函数
      handleChange: C,
      handleFocus: y,
      handleBlur: S,
      handleClick: d,
      // Wrapper 事件（供组件 spread）
      WrapperElementEvents: {
        onMouseEnter: v,
        onMouseLeave: M
      }
    }),
    [
      a,
      t,
      E,
      x,
      C,
      y,
      S,
      d,
      v,
      M
    ]
  );
}
function j({
  checked: l,
  disabled: r = !1,
  isHovered: n,
  isFocused: b
}) {
  const { PaletteColors: k, TextColors: h } = I(), s = L({ displayName: "FormField.Checkbox" }), t = k[1], u = e.useMemo(() => ({
    color: l ? t : h[2]
  }), [l, t, h]), a = e.useMemo(() => r ? {
    opacity: 0.6,
    cursor: "not-allowed"
  } : {
    cursor: "pointer"
  }, [r]), i = e.useMemo(() => r ? {} : b ? {
    color: t,
    filter: `drop-shadow(0 0 0 ${D(t, 0.3)}) drop-shadow(0 0 4px ${D(t, 0.3)})`,
    outline: "none"
  } : n ? {
    color: t,
    filter: "brightness(1.1)"
  } : {}, [r, b, n, t]);
  return {
    checkboxStyle: e.useMemo(
      () => ({
        // 基础样式
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default styles --
        display: "inline-flex",
        flexShrink: 0,
        fontSize: 20,
        transition: "all 0.25s ease-in-out",
        ...u,
        ...a,
        ...i,
        // -- custom styles --
        ...s
      }),
      [u, a, i, s]
    ),
    __: {
      DynamicCheckboxVariantStyles: u,
      DynamicCheckboxStateStyles: a,
      DynamicCheckboxInteractionStyles: i
    }
  };
}
export {
  V as useFormFieldCheckboxActions,
  j as useFormFieldCheckboxStyles
};
