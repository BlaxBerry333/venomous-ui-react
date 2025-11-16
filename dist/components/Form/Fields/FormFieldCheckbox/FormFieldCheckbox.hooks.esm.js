import e from "react";
import "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import { SEMANTIC_COLORS as k } from "../../../../constants/designs/SEMANTIC_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import I from "../../../../hooks/useElementHoverEvents/index.esm.js";
import L from "../../../../hooks/useThemeDesigns/index.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import O from "../../../../hooks/useCustomStyle/index.esm.js";
import { hexToRgba as D } from "../../../../tools/colors/get-colors.esm.js";
function j({
  checked: u,
  defaultChecked: s,
  onChange: o,
  disabled: h,
  onMouseEnter: C,
  onMouseLeave: a,
  externalRef: n
}) {
  const [b, m] = e.useState(!1), [f, c] = e.useState(s ?? !1), i = e.useRef(null), l = u !== void 0;
  e.useEffect(() => {
    l && c(u);
  }, [l, u]), e.useEffect(() => {
    const r = i.current;
    if (!r || l) return;
    const p = r.form;
    if (!p) return;
    const F = () => {
      c(s ?? !1);
    };
    return p.addEventListener("reset", F), () => p.removeEventListener("reset", F);
  }, [l, s]);
  const t = h, E = e.useCallback(
    (r) => {
      if (t) return;
      const p = r.target.checked;
      l || c(p), o == null || o(p, r);
    },
    [t, l, o]
  ), y = e.useCallback(() => {
    t || m(!0);
  }, [t]), S = e.useCallback(() => {
    m(!1);
  }, []), x = e.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (r) => {
      t || i.current && i.current.click();
    },
    [t]
  ), d = e.useCallback(
    (r) => {
      i.current = r, typeof n == "function" ? n(r) : n && (n.current = r);
    },
    [n]
  ), { isHovered: R, MouseEnterEvent: M, MouseLeaveEvent: v } = I({
    disabled: t,
    onMouseEnter: C,
    onMouseLeave: a
  });
  return e.useMemo(
    () => ({
      // 状态
      internalChecked: f,
      isFocused: b,
      isHovered: R,
      // Ref
      setRefs: d,
      // 事件处理函数
      handleChange: E,
      handleFocus: y,
      handleBlur: S,
      handleClick: x,
      // Wrapper 事件（供组件 spread）
      WrapperElementEvents: {
        onMouseEnter: M,
        onMouseLeave: v
      }
    }),
    [
      f,
      b,
      R,
      d,
      E,
      y,
      S,
      x,
      M,
      v
    ]
  );
}
function q({
  checked: u,
  disabled: s = !1,
  error: o = !1,
  isHovered: h,
  isFocused: C
}) {
  const { PaletteColors: a, TextColors: n } = L(), b = O({ displayName: "FormField.Checkbox" }), m = e.useMemo(() => {
    const t = o ? k.ERROR : a[1];
    return {
      color: u ? t : n[2]
    };
  }, [u, o, a, n]), f = e.useMemo(() => s ? {
    opacity: 0.6,
    cursor: "not-allowed"
  } : {
    cursor: "pointer"
  }, [s]), c = e.useMemo(() => {
    if (s) return {};
    const t = o ? k.ERROR : a[1];
    return C ? {
      color: t,
      filter: `drop-shadow(0 0 0 ${D(t, 0.3)}) drop-shadow(0 0 4px ${D(t, 0.3)})`,
      outline: "none"
    } : h ? {
      color: t,
      filter: "brightness(1.1)"
    } : {};
  }, [s, o, C, h, a]), i = e.useMemo(() => o ? {
    color: k.ERROR
  } : {}, [o]);
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
        ...m,
        ...f,
        ...c,
        ...i,
        // -- custom styles --
        ...b
      }),
      [
        m,
        f,
        c,
        i,
        b
      ]
    ),
    __: {
      DynamicCheckboxVariantStyles: m,
      DynamicCheckboxStateStyles: f,
      DynamicCheckboxInteractionStyles: c,
      DynamicCheckboxErrorStyles: i
    }
  };
}
export {
  j as useFormFieldCheckboxActions,
  q as useFormFieldCheckboxStyles
};
