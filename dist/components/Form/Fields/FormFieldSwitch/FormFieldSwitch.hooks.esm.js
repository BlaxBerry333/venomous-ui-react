import e from "react";
import { COMPONENT_DISPLAY_NAMES as k } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import F from "../../../../hooks/useElementHoverEvents/index.esm.js";
import z from "../../../../hooks/useThemeDesigns/index.esm.js";
import { hexToRgba as x } from "../../../../tools/colors/get-colors.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import v from "../../../../hooks/useCustomStyle/index.esm.js";
function O({
  checked: s,
  defaultChecked: n,
  onChange: l,
  disabled: c,
  externalRef: a
}) {
  const [S, u] = e.useState(!1), [b, m] = e.useState(n ?? !1), r = e.useRef(null), t = s !== void 0;
  e.useEffect(() => {
    t && m(s);
  }, [t, s]), e.useEffect(() => {
    const i = r.current;
    if (!i || t) return;
    const h = i.form;
    if (!h) return;
    const M = () => {
      m(n ?? !1);
    };
    return h.addEventListener("reset", M), () => h.removeEventListener("reset", M);
  }, [t, n]);
  const o = c, f = e.useCallback(
    (i) => {
      if (o) return;
      const h = i.target.checked;
      t || m(h), l == null || l(h, i);
    },
    [o, t, l]
  ), d = e.useCallback(() => {
    o || u(!0);
  }, [o]), y = e.useCallback(() => {
    u(!1);
  }, []), p = e.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (i) => {
      o || r.current && r.current.click();
    },
    [o]
  ), C = e.useCallback(
    (i) => {
      r.current = i, typeof a == "function" ? a(i) : a && (a.current = i);
    },
    [a]
  ), { isHovered: g, MouseEnterEvent: w, MouseLeaveEvent: E } = F({
    disabled: o
  });
  return e.useMemo(
    () => ({
      internalChecked: b,
      isFocused: S,
      isHovered: g,
      setRefs: C,
      handleChange: f,
      handleFocus: d,
      handleBlur: y,
      handleClick: p,
      WrapperElementEvents: {
        onMouseEnter: w,
        onMouseLeave: E
      }
    }),
    [
      b,
      S,
      g,
      C,
      f,
      d,
      y,
      p,
      w,
      E
    ]
  );
}
function X({
  checked: s,
  disabled: n = !1,
  isHovered: l,
  isFocused: c
}) {
  const { PaletteColors: a, BackgroundColors: S, BorderColors: u } = z(), b = v({ displayName: k.FormFieldSwitch }), m = v({ displayName: k.FormFieldSwitchHandle }), r = { width: 44, height: 24, handleSize: 18, padding: 3 }, t = a[1], o = e.useMemo(() => ({
    width: r.width,
    height: r.height,
    borderRadius: r.height / 2,
    backgroundColor: s ? t : S[2],
    borderColor: s ? t : u[2]
  }), [s, t, r, S, u]), f = e.useMemo(() => n ? {
    opacity: 0.5,
    cursor: "not-allowed"
  } : {
    cursor: "pointer"
  }, [n]), d = e.useMemo(() => n ? {} : c ? {
    boxShadow: `0 0 0 3px ${x(t, 0.25)}`,
    borderColor: t,
    outline: "none"
  } : l ? {
    borderColor: t,
    filter: "brightness(1.1)"
  } : {}, [n, c, l, t]), y = e.useMemo(
    () => ({
      // 基础样式
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      // -- default styles --
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      flexShrink: 0,
      borderWidth: 1,
      borderStyle: "solid",
      transition: "all 0.2s ease-in-out",
      ...o,
      ...f,
      ...d,
      // -- custom styles --
      ...b
    }),
    [o, f, d, b]
  ), p = e.useMemo(() => n ? {} : c ? {
    borderColor: t,
    boxShadow: `0 0 0 2px ${x(t, 0.3)}`
  } : l ? {
    borderColor: t,
    filter: "brightness(1.1)"
  } : {}, [n, c, l, t]), C = e.useMemo(() => {
    const g = s ? r.width - r.handleSize - r.padding * 2 : 0;
    return {
      // -- default styles --
      boxSizing: "border-box",
      position: "absolute",
      left: r.padding,
      width: r.handleSize,
      height: r.handleSize,
      borderRadius: "50%",
      backgroundColor: "#ffffff",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: u[2],
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      transition: "all 0.2s ease-in-out",
      transform: `translateX(${g}px)`,
      ...p,
      // -- custom styles --
      ...m
    };
  }, [s, r, u, p, m]);
  return {
    trackStyle: y,
    handleStyle: C,
    __: {
      DynamicTrackVariantStyles: o,
      DynamicTrackStateStyles: f,
      DynamicTrackInteractionStyles: d,
      DynamicHandleInteractionStyles: p
    }
  };
}
export {
  O as useFormFieldSwitchActions,
  X as useFormFieldSwitchStyles
};
