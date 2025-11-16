import c from "react";
import { COMPONENT_DISPLAY_NAMES as w } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import N from "../../hooks/useElementHoverEvents/index.esm.js";
import x from "../../hooks/useElementMouseEvents/index.esm.js";
import k from "../../hooks/useThemeDesigns/index.esm.js";
import A from "../../hooks/useThemeMode/index.esm.js";
import O from "../../hooks/useCustomStyle/index.esm.js";
import { getLighter as D, getDarker as g, hexToRgba as T } from "../../tools/colors/get-colors.esm.js";
import { BUTTON_VARIANT_MAP as n } from "./Button.types.esm.js";
function q({
  disabled: r,
  loading: s,
  variant: u,
  color: a,
  fullWidth: f,
  isHovered: E,
  isClicked: i
}) {
  const { isDarkMode: e } = A(), { PaletteColors: t, TextColors: m, ShadowStyles: l, TypographySizes: h } = k(), b = O({ displayName: w.Button }), p = c.useMemo(() => {
    const o = a || t[1];
    switch (u) {
      case n.OUTLINED: {
        const S = e ? D(o, 0.15) : g(o, 0.15);
        return {
          color: o,
          backgroundColor: "transparent",
          borderColor: S,
          outlineColor: S,
          boxShadow: "none"
        };
      }
      case n.TEXT:
        return {
          color: o,
          backgroundColor: "transparent",
          borderColor: "transparent",
          outlineColor: "transparent",
          boxShadow: "none"
        };
      case n.CONTAINED:
      default: {
        const S = e ? D(o, 0.15) : g(o, 0.25);
        return {
          color: "#ffffff",
          backgroundColor: o,
          borderColor: S,
          outlineColor: S,
          boxShadow: l[1]
        };
      }
    }
  }, [u, a, t, l, e]), C = c.useMemo(() => r || s ? {
    cursor: r ? "not-allowed" : "wait",
    opacity: 0.65,
    color: m.disabled,
    borderColor: m.disabled,
    outlineColor: m.disabled,
    boxShadow: "none"
  } : {
    cursor: "pointer",
    opacity: 1
  }, [r, s, m]), d = c.useMemo(() => {
    if (r || s || !E || i)
      return {};
    const o = a || t[1];
    switch (u) {
      case n.TEXT:
        return {
          backgroundColor: T(o, e ? 0.12 : 0.1)
        };
      case n.OUTLINED:
        return {
          backgroundColor: T(o, e ? 0.25 : 0.1)
        };
      case n.CONTAINED:
      default:
        return {
          backgroundColor: D(o, e ? 0.25 : 0.1),
          boxShadow: l[2]
        };
    }
  }, [u, r, s, E, i, a, t, l, e]), y = c.useMemo(() => {
    if (r || s || !i)
      return {};
    const o = a || t[1];
    switch (u) {
      case n.TEXT:
        return {
          backgroundColor: T(o, e ? 0.2 : 0.12)
        };
      case n.OUTLINED:
        return {
          backgroundColor: T(o, e ? 0.2 : 0.12),
          transform: "scale(0.98)"
        };
      case n.CONTAINED:
      default:
        return {
          backgroundColor: g(o, e ? 0.2 : 0.25),
          transform: "scale(0.98)",
          boxShadow: "none"
        };
    }
  }, [u, r, s, i, a, t, e]), M = c.useMemo(() => f ? {
    width: "100%",
    minWidth: "100%"
  } : {
    width: "auto",
    minWidth: 56
  }, [f]);
  return {
    componentStyle: c.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default style --
        userSelect: "none",
        position: "relative",
        padding: "2px 8px",
        height: 40,
        fontWeight: 600,
        fontSize: h.TEXT.BASE,
        borderRadius: 8,
        borderWidth: 1,
        outlineWidth: 1,
        outlineStyle: "solid",
        transition: "all 0.25s ease-in-out",
        ...p,
        ...C,
        ...M,
        ...d,
        ...y,
        // -- custom style --
        ...b
      }),
      [
        h,
        p,
        C,
        M,
        d,
        y,
        b
      ]
    ),
    __: {
      DynamicVariantStyles: p,
      DynamicStateStyles: C,
      DynamicFullWidthStyles: M,
      DynamicHoverStyles: d,
      DynamicPressedStyles: y
    }
  };
}
function G({
  disabled: r,
  loading: s,
  onMouseEnter: u,
  onMouseLeave: a,
  onMouseDown: f,
  onMouseUp: E
}) {
  const i = r || s, { isClicked: e, MouseUpEvent: t, MouseDownEvent: m } = x({
    disabled: i,
    onMouseDown: f,
    onMouseUp: E
  }), { isHovered: l, MouseEnterEvent: h, MouseLeaveEvent: b } = N({
    disabled: i,
    onMouseEnter: u,
    onMouseLeave: a
  }), p = c.useCallback(
    (d) => {
      b(d), t(d);
    },
    [b, t]
  ), C = c.useMemo(
    () => ({
      onMouseEnter: h,
      onMouseLeave: p,
      onMouseDown: m,
      onMouseUp: t
    }),
    [h, p, m, t]
  );
  return {
    isHovered: l,
    isClicked: e,
    ElementEvents: C
  };
}
export {
  G as useButtonActions,
  q as useButtonStyles
};
