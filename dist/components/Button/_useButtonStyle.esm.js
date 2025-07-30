import f from "react";
import { Theme as m } from "../Theme/index.esm.js";
import { BackgroundColors as a, SemanticColors as d, BorderColors as x, TextColors as b } from "../../utils/design/colors.esm.js";
import { ThemeShadow as y } from "../../utils/design/ThemeShadow.esm.js";
import { TypographySize as k } from "../../utils/design/TypographySize.esm.js";
import { getLighterHex as w, getOpacityHex as S } from "../../utils/tools/get-colors.esm.js";
function H({
  isLoading: r,
  isDisabled: u,
  variant: n,
  semanticColor: o
}) {
  const { themeColor: c } = m.useThemeColor(), { themeMode: t } = m.useThemeMode(), h = f.useMemo(() => {
    let e = "";
    if (r || u)
      return e = a[t].secondary, e;
    switch (n) {
      case "contained":
        e = o ? d[o] : c;
        break;
      case "outlined":
        e = a[t].secondary;
        break;
      case "ghost":
      default:
        e = "transparent";
        break;
    }
    return e;
  }, [n, c, t, r, u, o]), p = f.useMemo(() => {
    let e = "";
    if (r || u)
      return e = x[t].secondary, e;
    switch (n) {
      case "contained":
        e = o ? w(d[o], 0.25) : S(c, 0.25);
        break;
      case "outlined":
        e = o ? d[o] : c;
        break;
      case "ghost":
      default:
        e = x[t].secondary;
        break;
    }
    return e;
  }, [n, c, t, r, u, o]), s = f.useMemo(() => {
    let e = "";
    if (r || u)
      return e = b[t].disabled, e;
    switch (n) {
      case "contained":
        e = "#ffffff";
        break;
      case "outlined":
        e = o ? d[o] : c;
        break;
      case "ghost":
      default:
        e = b[t].primary;
        break;
    }
    return e;
  }, [n, c, t, r, u, o]), l = f.useMemo(() => y[t].secondary, [n, c, t]);
  return {
    buttonStyles: f.useMemo(
      () => ({
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        width: "auto",
        minWidth: "40px",
        height: "40px",
        padding: "0px 16px",
        textTransform: "capitalize",
        fontSize: k.text,
        fontWeight: "bold",
        cursor: r ? "wait" : u ? "not-allowed" : "pointer",
        borderRadius: "8px",
        borderWidth: 1.5,
        borderColor: p,
        boxShadow: l,
        backgroundColor: h,
        color: s
      }),
      [r, u, p, h, s, l]
    )
  };
}
export {
  H as useButtonStyle
};
