import l from "react";
import { COMPONENT_DISPLAY_NAMES as x } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import w from "../../hooks/useElementHoverEvents/index.esm.js";
import k from "../../hooks/useElementMouseEvents/index.esm.js";
import O from "../../hooks/useThemeDesigns/index.esm.js";
import A from "../../hooks/useThemeMode/index.esm.js";
import { getLighter as D, getDarker as C, isLightColor as I, hexToRgba as S } from "../../tools/colors/get-colors.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import L from "../../hooks/useCustomStyle/index.esm.js";
import { BUTTON_VARIANT_MAP as r } from "./Button.types.esm.js";
function J({
  disabled: d,
  loading: m,
  variant: t,
  color: T,
  fullWidth: b,
  isHovered: E,
  isClicked: p
}) {
  const { isDarkMode: e } = A(), { PaletteColors: i, TextColors: a, ShadowStyles: c, TypographySizes: h } = O(), g = L({ displayName: x.Button }), o = T || i[1], u = d || m, f = l.useMemo(() => {
    switch (t) {
      case r.OUTLINED:
        return {
          color: o,
          backgroundColor: "transparent",
          borderColor: o,
          borderWidth: 1.5,
          boxShadow: "none"
        };
      case r.TEXT:
        return {
          color: o,
          backgroundColor: "transparent",
          borderColor: "transparent",
          borderWidth: 0,
          boxShadow: "none"
        };
      case r.CONTAINED:
      default: {
        const n = D(o, e ? 0.18 : 0.12), s = C(o, e ? 0.28 : 0.2);
        return {
          color: I(o, 0.45) ? "#1a1a1a" : "#ffffff",
          background: `radial-gradient(ellipse 120% 100% at 25% 20%, ${n} 0%, ${o} 45%, ${s} 100%)`,
          borderColor: "transparent",
          borderWidth: 0,
          boxShadow: c[1]
        };
      }
    }
  }, [t, o, c, e]), M = l.useMemo(() => {
    if (!u)
      return { cursor: "pointer", opacity: 1 };
    if (m && !d) {
      const s = { cursor: "wait", opacity: 0.7, pointerEvents: "none" };
      return t === r.CONTAINED ? { ...s, boxShadow: "none" } : {
        ...s,
        color: o,
        borderColor: t === r.OUTLINED ? o : void 0
      };
    }
    const n = {
      cursor: "not-allowed",
      opacity: 0.6,
      boxShadow: "none",
      pointerEvents: "none",
      color: a.disabled
    };
    return t === r.OUTLINED ? { ...n, borderColor: a.disabled } : t === r.CONTAINED ? {
      ...n,
      background: "none",
      backgroundColor: e ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"
    } : n;
  }, [t, o, u, d, m, a, e]), N = l.useMemo(() => {
    if (u) return {};
    if (p) {
      if (t === r.CONTAINED) {
        const n = C(o, e ? 0.25 : 0.18), s = C(o, e ? 0.12 : 0.08);
        return {
          background: `radial-gradient(ellipse 120% 80% at 50% 85%, ${C(o, e ? 0.05 : 0.02)} 0%, ${s} 50%, ${n} 100%)`,
          transform: "scale(0.97)",
          boxShadow: `inset 0 2px 4px ${S("#000000", e ? 0.25 : 0.15)}`
        };
      }
      return {
        backgroundColor: S(o, e ? 0.2 : 0.12),
        transform: "scale(0.97)"
      };
    }
    if (E) {
      if (t === r.CONTAINED) {
        const n = D(o, e ? 0.28 : 0.2), s = D(o, e ? 0.08 : 0.05), y = C(o, e ? 0.18 : 0.12);
        return {
          background: `radial-gradient(ellipse 130% 110% at 25% 15%, ${n} 0%, ${s} 40%, ${y} 100%)`,
          boxShadow: c[2]
        };
      }
      return t === r.OUTLINED ? {
        backgroundColor: S(o, e ? 0.15 : 0.08)
      } : {
        backgroundColor: S(o, e ? 0.12 : 0.08)
      };
    }
    return {};
  }, [t, o, u, E, p, c, e]);
  return { componentStyle: l.useMemo(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      // -- default style --
      userSelect: "none",
      position: "relative",
      padding: "4px 12px",
      height: 40,
      fontWeight: 600,
      fontSize: h.TEXT.BASE,
      borderRadius: 8,
      borderStyle: "solid",
      transition: "transform 0.1s ease-out, background 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, opacity 0.2s ease-in-out",
      width: b ? "100%" : "auto",
      minWidth: b ? "100%" : 56,
      ...f,
      ...M,
      ...N,
      // -- custom style --
      ...g
    }),
    [h, b, f, M, N, g]
  ) };
}
function K({
  disabled: d,
  loading: m,
  onMouseEnter: t,
  onMouseLeave: T,
  onMouseDown: b,
  onMouseUp: E
}) {
  const p = d || m, { isClicked: e, MouseUpEvent: i, MouseDownEvent: a } = k({
    disabled: p,
    onMouseDown: b,
    onMouseUp: E
  }), { isHovered: c, MouseEnterEvent: h, MouseLeaveEvent: g } = w({
    disabled: p,
    onMouseEnter: t,
    onMouseLeave: T
  }), o = l.useCallback(
    (f) => {
      g(f), i(f);
    },
    [g, i]
  ), u = l.useMemo(
    () => ({
      onMouseEnter: h,
      onMouseLeave: o,
      onMouseDown: a,
      onMouseUp: i
    }),
    [h, o, a, i]
  );
  return {
    isHovered: c,
    isClicked: e,
    ElementEvents: u
  };
}
export {
  K as useButtonActions,
  J as useButtonStyles
};
