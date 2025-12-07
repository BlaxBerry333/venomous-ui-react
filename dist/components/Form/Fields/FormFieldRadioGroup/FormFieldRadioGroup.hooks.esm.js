import t from "react";
import { COMPONENT_DISPLAY_NAMES as f } from "../../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../../constants/designs/BORDER_COLORS.esm.js";
import "../../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import b from "../../../../hooks/useElementHoverEvents/index.esm.js";
import C from "../../../../hooks/useThemeDesigns/index.esm.js";
import { hexToRgba as E } from "../../../../tools/colors/get-colors.esm.js";
import "../../../Theme/ThemeProvider.context.esm.js";
import d from "../../../../hooks/useCustomStyle/index.esm.js";
import { FORM_FIELD_RADIO_GROUP_DIRECTION_MAP as y } from "./FormFieldRadioGroup.types.esm.js";
function k({
  value: o,
  defaultValue: e,
  onChange: r,
  disabled: i
}) {
  const [a, l] = t.useState(
    () => o ?? e
  ), s = o !== void 0;
  t.useEffect(() => {
    s && l(o);
  }, [s, o]);
  const u = t.useCallback(
    (m, n) => {
      i || (s || l(m), r == null || r(m, n));
    },
    [i, s, r]
  );
  return t.useMemo(
    () => ({
      internalValue: a,
      handleChange: u
    }),
    [a, u]
  );
}
function G({ disabled: o }) {
  const [e, r] = t.useState(!1), i = t.useCallback(() => {
    o || r(!0);
  }, [o]), a = t.useCallback(() => {
    r(!1);
  }, []), { isHovered: l, MouseEnterEvent: s, MouseLeaveEvent: u } = b({
    disabled: o
  });
  return t.useMemo(
    () => ({
      isFocused: e,
      isHovered: l,
      handleFocus: i,
      handleBlur: a,
      LabelElementEvents: {
        onMouseEnter: s,
        onMouseLeave: u
      }
    }),
    [e, l, i, a, s, u]
  );
}
function V({
  direction: o = y.VERTICAL,
  spacing: e = 8
}) {
  const r = d({ displayName: f.FormFieldRadioGroup });
  return { groupStyle: t.useMemo(
    () => ({
      // -- default styles --
      display: "flex",
      flexDirection: o === y.VERTICAL ? "column" : "row",
      flexWrap: "wrap",
      gap: e,
      // -- custom styles --
      ...r
    }),
    [o, e, r]
  ) };
}
function z({
  checked: o,
  disabled: e = !1,
  isHovered: r,
  isFocused: i
}) {
  const { PaletteColors: a, TextColors: l, BorderColors: s } = C(), u = d({ displayName: f.FormFieldRadioItem }), m = d({ displayName: f.FormFieldRadioItemRadio }), n = a[1], S = t.useMemo(() => e ? l.disabled : l[1], [e, l]), R = t.useMemo(
    () => ({
      // -- default styles --
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: e ? "not-allowed" : "pointer",
      opacity: e ? 0.5 : 1,
      color: S,
      fontSize: 14,
      transition: "color 0.2s ease-in-out",
      userSelect: "none",
      // -- custom styles --
      ...u
    }),
    [e, S, u]
  ), c = t.useMemo(() => ({
    borderColor: o ? n : s[2],
    backgroundColor: "transparent"
  }), [o, n, s]), p = t.useMemo(() => e ? {} : i ? {
    boxShadow: `0 0 0 3px ${E(n, 0.25)}`,
    borderColor: n,
    outline: "none"
  } : r ? {
    borderColor: n,
    filter: "brightness(1.1)"
  } : {}, [e, i, r, n]), F = t.useMemo(
    () => ({
      // -- default styles --
      boxSizing: "border-box",
      position: "relative",
      width: 16,
      height: 16,
      borderRadius: "50%",
      borderWidth: 2,
      borderStyle: "solid",
      flexShrink: 0,
      transition: "all 0.2s ease-in-out",
      ...c,
      ...p,
      // -- custom styles --
      ...m
    }),
    [c, p, m]
  ), M = t.useMemo(
    () => ({
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: o ? n : "transparent",
      transition: "background-color 0.2s ease-in-out"
    }),
    [o, n]
  );
  return {
    labelStyle: R,
    radioStyle: F,
    radioDotStyle: M,
    __: {
      DynamicRadioVariantStyles: c,
      DynamicRadioInteractionStyles: p
    }
  };
}
export {
  k as useFormFieldRadioGroupActions,
  V as useFormFieldRadioGroupStyles,
  G as useFormFieldRadioItemActions,
  z as useFormFieldRadioItemStyles
};
