import e from "react";
import { COMPONENT_DISPLAY_NAMES as E } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import S from "../../hooks/useElementHoverEvents/index.esm.js";
import T from "../../hooks/useElementMouseEvents/index.esm.js";
import C from "../../hooks/useThemeDesigns/index.esm.js";
import R from "../../hooks/useThemeMode/index.esm.js";
import { hexToRgba as v } from "../../tools/colors/get-colors.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import x from "../../hooks/useCustomStyle/index.esm.js";
function z({
  color: n,
  selected: a = !1,
  disabled: t = !1,
  column: o = !1,
  isHovered: f,
  isClicked: M
}) {
  const { isDarkMode: b } = R(), { PaletteColors: u, TextColors: r } = C(), d = x({ displayName: E.TabsTab }), s = e.useMemo(() => {
    const i = n || u[1];
    return v(i, b ? 0.12 : 0.1);
  }, [n, u, b]), m = e.useMemo(() => {
    const i = n || u[1];
    return a ? {
      color: i,
      ...o ? { borderRight: `2px solid ${i}`, borderBottom: "none" } : { borderBottom: `2px solid ${i}`, borderRight: "none" },
      backgroundColor: s
    } : {
      color: r[2],
      ...o ? { borderRight: "2px solid transparent", borderBottom: "none" } : { borderBottom: "2px solid transparent", borderRight: "none" }
    };
  }, [a, n, o, u, r, s]), p = e.useMemo(() => t ? {
    cursor: "not-allowed",
    opacity: 0.65,
    color: r.disabled
  } : {
    cursor: "pointer",
    opacity: 1
  }, [t, r]), c = e.useMemo(() => t || a ? {} : M ? {
    backgroundColor: s,
    transform: "scale(0.98)"
  } : f ? {
    backgroundColor: s,
    color: r[1]
  } : {}, [
    t,
    a,
    f,
    M,
    n,
    u,
    r,
    b,
    s
  ]);
  return {
    componentStyle: e.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",
        // -- default styles --
        height: o ? "auto" : "100%",
        width: o ? "100%" : "auto",
        padding: "8px 16px",
        fontWeight: "bold",
        transition: "background-color 0.25s ease-in-out, transform 0.25s ease-in-out, border-color 0.25s ease-in-out",
        overflow: "hidden",
        borderTopLeftRadius: 4,
        borderTopRightRadius: o ? 0 : 4,
        borderBottomLeftRadius: o ? 4 : 0,
        borderBottomRightRadius: 0,
        ...m,
        ...p,
        ...c,
        // -- custom styles --
        ...d
      }),
      [m, p, c, d, o]
    ),
    __: {
      DynamicVariantStyles: m,
      DynamicStateStyles: p,
      DynamicInteractionStyles: c
    }
  };
}
function V({
  value: n,
  selected: a,
  disabled: t,
  onClick: o,
  onMouseEnter: f,
  onMouseLeave: M,
  onMouseDown: b,
  onMouseUp: u
}) {
  const r = e.useMemo(() => t || a, [t, a]), { isHovered: d, MouseEnterEvent: s, MouseLeaveEvent: m } = S({
    disabled: r,
    onMouseEnter: f,
    onMouseLeave: M
  }), { isClicked: p, MouseDownEvent: c, MouseUpEvent: l } = T({
    disabled: r,
    onMouseDown: b,
    onMouseUp: u
  }), i = e.useCallback(
    (g) => {
      !t && o && o(n, g);
    },
    [t, o, n]
  ), h = e.useCallback(
    (g) => {
      m(g), l(g);
    },
    [m, l]
  ), y = e.useMemo(
    () => ({
      onMouseEnter: s,
      onMouseLeave: h,
      onMouseDown: c,
      onMouseUp: l
    }),
    [s, h, c, l]
  );
  return e.useMemo(
    () => ({
      isHovered: d,
      isClicked: p,
      handleClick: i,
      ElementEvents: y
    }),
    [d, p, i, y]
  );
}
export {
  V as useTabsTabActions,
  z as useTabsTabStyles
};
