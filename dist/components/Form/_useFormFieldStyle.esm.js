import t from "react";
import p from "../../hooks/useDesign/index.esm.js";
import { SEMANTIC_COLORS as l } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import { TYPOGRAPHY_SIZES as a } from "../../utils/design/TypographySize.esm.js";
import { Theme as x } from "../Theme/index.esm.js";
function O({
  fullWidth: n = !1,
  isDisabled: o = !1,
  isError: r = !1,
  isFocused: f = !1
}) {
  const { themeColor: i } = x.useThemeColor(), e = p(), u = t.useMemo(() => o ? e.BackgroundColors.secondary : "transparent", [o, e]), m = t.useMemo(() => r ? l.error : o ? e.TextColors.disabled : e.TextColors.primary, [r, o, e]), C = t.useMemo(() => r ? l.error : o ? e.TextColors.disabled : e.TextColors.quaternary, [r, o, e]), s = t.useMemo(() => r ? l.error : o ? e.BorderColors.tertiary : e.BorderColors.secondary, [r, e]), c = t.useMemo(() => r ? l.error : i, [r, e, i]), d = t.useMemo(
    () => ({
      display: n ? "block" : "inline-block",
      width: n ? "100%" : "auto",
      minWidth: n ? "100%" : 200,
      minHeight: 40,
      padding: "8px",
      fontSize: a.text,
      backgroundColor: u,
      color: m,
      borderRadius: "8px",
      borderWidth: 1.5,
      borderStyle: "solid",
      borderColor: s,
      ...f && {
        outlineOffset: -1.5,
        outlineWidth: 1.5,
        outlineStyle: "solid",
        outlineColor: c
      },
      ...o && {
        cursor: "not-allowed",
        outline: "none"
      }
    }),
    [n, f, o, u, m, s, c]
  );
  return {
    backgroundColor: u,
    textColor: m,
    helperTextColor: C,
    borderColor: s,
    outlineColor: c,
    commonStyles: d
  };
}
export {
  O as useFormFieldStyle
};
