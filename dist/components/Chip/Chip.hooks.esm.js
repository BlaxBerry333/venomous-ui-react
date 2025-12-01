import m from "react";
import { COMPONENT_DISPLAY_NAMES as M } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import g from "../../hooks/useElementHoverEvents/index.esm.js";
import h from "../../hooks/useElementMouseEvents/index.esm.js";
import y from "../../hooks/useThemeDesigns/index.esm.js";
import N from "../../hooks/useThemeMode/index.esm.js";
import { getDarker as C, hexToRgba as E, getLighter as S } from "../../tools/colors/get-colors.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import D from "../../hooks/useCustomStyle/index.esm.js";
import { CHIP_VARIANT_MAP as f } from "./Chip.types.esm.js";
function V({
  variant: e = f.CONTAINED,
  clickable: r,
  color: i,
  isHovered: p,
  isClicked: l
}) {
  const { isDarkMode: n } = N(), { PaletteColors: s, TypographySizes: u } = y(), d = D({ displayName: M.Chip }), a = m.useMemo(() => {
    const o = i || s[1];
    switch (e) {
      case f.CONTAINED:
        return {
          backgroundColor: o,
          borderColor: "transparent",
          color: "#FFFFFF"
        };
      case f.OUTLINED:
        return {
          backgroundColor: "transparent",
          borderColor: o,
          color: o
        };
      default:
        return {};
    }
  }, [e, i, s]), c = m.useMemo(() => r ? {
    cursor: "pointer",
    transition: "all 0.25s ease-in-out",
    userSelect: "none"
  } : {
    cursor: "default"
  }, [r]), t = m.useMemo(() => {
    if (!r) return {};
    const o = i || s[1];
    return l ? e === f.CONTAINED ? {
      transform: "scale(0.95)",
      backgroundColor: n ? C(o, 0.15) : C(o, 0.2)
    } : {
      transform: "scale(0.95)",
      backgroundColor: E(o, n ? 0.2 : 0.15)
    } : p ? e === f.CONTAINED ? {
      backgroundColor: n ? S(o, 0.1) : C(o, 0.1)
    } : {
      backgroundColor: E(o, n ? 0.15 : 0.1)
    } : {};
  }, [e, r, p, l, i, s, n]);
  return {
    componentStyle: m.useMemo(
      () => ({
        // -- default style --
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 30,
        padding: "0 12px",
        borderRadius: 16,
        borderWidth: "1.5px",
        borderStyle: "solid",
        fontSize: u.TEXT.CAPTION,
        fontWeight: "bold",
        whiteSpace: "nowrap",
        ...a,
        ...c,
        ...t,
        // -- custom style override --
        ...d
      }),
      [u, a, c, t, d]
    ),
    __: {
      DynamicVariantStyles: a,
      DynamicClickableStyles: c,
      DynamicInteractionStyles: t
    }
  };
}
function W({ clickable: e, onClick: r }) {
  const { isHovered: i, MouseEnterEvent: p, MouseLeaveEvent: l } = g({
    disabled: !e
  }), { isClicked: n, MouseDownEvent: s, MouseUpEvent: u } = h({
    disabled: !e
  }), d = m.useCallback(
    (t) => {
      l(t), u(t);
    },
    [l, u]
  ), a = m.useCallback(
    (t) => {
      e && r && r(t);
    },
    [e, r]
  ), c = m.useMemo(
    () => e ? {
      onMouseEnter: p,
      onMouseLeave: d,
      onMouseDown: s,
      onMouseUp: u,
      onClick: a
    } : {},
    [e, p, d, s, u, a]
  );
  return {
    isHovered: i,
    isClicked: n,
    ElementEvents: c
  };
}
export {
  W as useChipActions,
  V as useChipStyles
};
