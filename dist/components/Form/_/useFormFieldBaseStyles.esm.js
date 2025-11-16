import l from "react";
import "../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../constants/designs/BORDER_COLORS.esm.js";
import { SEMANTIC_COLORS as n } from "../../../constants/designs/SEMANTIC_COLORS.esm.js";
import "../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import W from "../../../hooks/useThemeDesigns/index.esm.js";
import "../../Theme/ThemeProvider.context.esm.js";
import S from "../../../hooks/useCustomStyle/index.esm.js";
import { hexToRgba as x } from "../../../tools/colors/get-colors.esm.js";
import { FORM_FIELD_VARIANT_MAP as p } from "./FormFieldBase.types.esm.js";
function N({
  displayNames: e,
  variant: o,
  fullWidth: y = !1,
  error: b = !1,
  disabled: T = !1,
  readOnly: k = !1,
  isFocused: s,
  isHovered: u,
  customConfig: r
}) {
  const { PaletteColors: M, TextColors: a, BackgroundColors: d, BorderColors: i, TypographySizes: c, ShadowStyles: D } = W(), I = S({ displayName: e.wrapper }), O = S({ displayName: e.input }), X = S({ displayName: e.prefix }), _ = S({ displayName: e.suffix }), z = S({ displayName: e.wrapper }), h = l.useMemo(() => {
    switch (o) {
      case p.TEXT:
        return {
          backgroundColor: "transparent",
          border: "none",
          borderRadius: 0
        };
      case p.OUTLINED:
      default:
        return {
          backgroundColor: d[1],
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: i[2],
          borderRadius: 8
        };
    }
  }, [o, d, i]), E = l.useMemo(() => {
    if (T || k)
      switch (o) {
        case p.TEXT:
          return {
            cursor: "not-allowed",
            opacity: 0.6,
            color: a.disabled,
            backgroundColor: "transparent"
          };
        default:
          return {
            cursor: "not-allowed",
            opacity: 0.6,
            color: a.disabled,
            backgroundColor: d[2],
            borderColor: i[2]
          };
      }
    return {};
  }, [T, k, o, d, i, a]), w = l.useMemo(() => {
    if (!b) return {};
    switch (o) {
      case p.TEXT:
        return {
          color: n.ERROR,
          backgroundColor: x(n.ERROR, 0.05)
        };
      default:
        return {
          color: n.ERROR,
          borderColor: n.ERROR
        };
    }
  }, [b, o]), R = l.useMemo(() => {
    const t = b ? n.ERROR : M[1];
    return s ? o === p.TEXT ? {
      color: t,
      backgroundColor: x(t, 0.05),
      outline: "none"
    } : {
      color: t,
      borderColor: t,
      backgroundColor: d[1],
      boxShadow: `0 0 0 2px ${x(t, 0.2)}`,
      outline: "none"
    } : u ? o === p.TEXT ? {
      color: t,
      backgroundColor: x(t, 0.05)
    } : {
      color: t,
      borderColor: t,
      backgroundColor: x(t, 0.05)
    } : {};
  }, [b, s, u, o, M, d]), A = l.useMemo(
    () => e.wrapper ? {
      // -- default styles --
      position: "relative",
      display: "inline-flex",
      minWidth: (r == null ? void 0 : r.minWidth) ?? 300,
      maxWidth: y ? "100%" : 300,
      width: y ? "100%" : "auto",
      height: 40,
      padding: "0 8px",
      fontSize: c.TEXT.BASE,
      color: a[2],
      transition: "border-color 0.25s ease-in-out, color 0.25s ease-in-out",
      ...h,
      ...w,
      ...R,
      ...E,
      ...r == null ? void 0 : r.wrapperExtraStyles,
      // -- custom styles --
      ...I
    } : {},
    [
      y,
      r == null ? void 0 : r.minWidth,
      a,
      c,
      h,
      w,
      R,
      E,
      e.wrapper,
      r == null ? void 0 : r.wrapperExtraStyles,
      I
    ]
  ), B = l.useMemo(
    () => e.input ? {
      // -- default styles --
      boxSizing: "border-box",
      flex: 1,
      width: "100%",
      height: "100%",
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      color: "inherit",
      fontSize: "inherit",
      fontFamily: "inherit",
      cursor: "inherit",
      ...r == null ? void 0 : r.inputExtraStyles,
      // -- custom styles --
      ...O
    } : {},
    [O, r == null ? void 0 : r.inputExtraStyles, e.input]
  ), F = l.useMemo(
    () => e.prefix ? {
      // -- default styles --
      display: "flex",
      alignItems: "center",
      flexShrink: 0,
      color: "inherit",
      ...r == null ? void 0 : r.prefixExtraStyles,
      // -- custom styles --
      ...X
    } : {},
    [X, r == null ? void 0 : r.prefixExtraStyles, e.prefix]
  ), L = l.useMemo(
    () => e.suffix ? {
      // -- default styles --
      display: "flex",
      alignItems: "center",
      flexShrink: 0,
      color: "inherit",
      ...r == null ? void 0 : r.suffixExtraStyles,
      // -- custom styles --
      ..._
    } : {},
    [_, r == null ? void 0 : r.suffixExtraStyles, e.suffix]
  ), P = l.useMemo(
    () => e.dropdown ? {
      // -- default styles --
      boxSizing: "border-box",
      backgroundColor: d[1],
      borderRadius: 8,
      boxShadow: D[2],
      overflow: "hidden",
      padding: 4,
      overflowY: "auto",
      ...r == null ? void 0 : r.dropdownExtraStyles,
      // -- custom styles --
      ...z
    } : {},
    [z, d, D, r == null ? void 0 : r.dropdownExtraStyles, e.dropdown]
  );
  return {
    wrapperStyle: A,
    inputStyle: B,
    prefixStyle: F,
    suffixStyle: L,
    dropdownStyle: P,
    __: {
      DynamicVariantStyles: h,
      DynamicStateStyles: E,
      DynamicErrorStyles: w,
      DynamicInteractionStyles: R
    }
  };
}
export {
  N as useFormFieldBaseStyles
};
