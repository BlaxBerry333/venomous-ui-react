import s from "react";
import { COMPONENT_DISPLAY_NAMES as C } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import h from "../../hooks/useElementHoverEvents/index.esm.js";
import y from "../../hooks/useElementMouseEvents/index.esm.js";
import S from "../../hooks/useThemeDesigns/index.esm.js";
import E from "../../hooks/useThemeMode/index.esm.js";
import b from "../../hooks/useCustomStyle/index.esm.js";
import { getLighter as g, getDarker as f } from "../../tools/colors/get-colors.esm.js";
function H({
  clickable: e,
  color: o,
  isHovered: c,
  isClicked: p
}) {
  const { isDarkMode: t } = E(), { PaletteColors: i, TypographySizes: a } = S(), n = b({ displayName: C.Chip }), u = s.useMemo(() => {
    const r = o || i[1], M = t ? g(r, 0.15) : f(r, 0.2);
    return {
      backgroundColor: r,
      borderColor: M,
      color: "#FFFFFF"
    };
  }, [o, i, t]), m = s.useMemo(() => e ? {
    cursor: "pointer",
    transition: "all 0.25s ease-in-out"
  } : { cursor: "default" }, [e]), l = s.useMemo(() => {
    if (!e) return {};
    const r = o || i[1];
    return p ? {
      transform: "scale(0.95)",
      backgroundColor: t ? f(r, 0.15) : f(r, 0.2)
    } : c ? {
      backgroundColor: t ? g(r, 0.1) : f(r, 0.1)
    } : {};
  }, [e, c, p, o, i, t]);
  return {
    componentStyle: s.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",
        // -- default style --
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 28,
        padding: "0 12px",
        borderRadius: 14,
        borderWidth: "1.5px",
        borderStyle: "solid",
        fontSize: a.TEXT.CAPTION,
        lineHeight: "28px",
        fontWeight: 500,
        whiteSpace: "nowrap",
        ...u,
        ...m,
        ...l,
        // -- custom style override --
        ...n
      }),
      [a, u, m, l, n]
    ),
    __: {
      DynamicColorStyles: u,
      DynamicClickableStyles: m,
      DynamicInteractionStyles: l
    }
  };
}
function W({ clickable: e, onClick: o }) {
  const { isHovered: c, MouseEnterEvent: p, MouseLeaveEvent: t } = h({
    disabled: !e
  }), { isClicked: i, MouseDownEvent: a, MouseUpEvent: n } = y({
    disabled: !e
  }), u = s.useCallback(
    (d) => {
      t(d), n(d);
    },
    [t, n]
  ), m = s.useCallback(
    (d) => {
      e && o && o(d);
    },
    [e, o]
  ), l = s.useMemo(
    () => e ? {
      onMouseEnter: p,
      onMouseLeave: u,
      onMouseDown: a,
      onMouseUp: n,
      onClick: m
    } : {},
    [e, p, u, a, n, m]
  );
  return {
    isHovered: c,
    isClicked: i,
    ElementEvents: l
  };
}
export {
  W as useChipActions,
  H as useChipStyles
};
