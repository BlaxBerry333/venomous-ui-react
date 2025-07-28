import f from "react";
import { Theme as x } from "../Theme/index.esm.js";
import { BackgroundColors as h, SemanticColors as d, BorderColors as a, TextColors as b } from "../../utils/design/colors.esm.js";
import { ThemeShadow as y } from "../../utils/design/ThemeShadow.esm.js";
import { TypographySize as k } from "../../utils/design/TypographySize.esm.js";
import { getLighterHex as w, getOpacityHex as S } from "../../utils/tools/get-colors.esm.js";
function H({
  isLoading: r,
  isDisabled: u,
  variant: n,
  semanticColor: t
}) {
  const { themeColor: c } = x.useThemeColor(), { themeMode: o } = x.useThemeMode(), p = f.useMemo(() => {
    let e = "";
    if (r || u)
      return e = h[o].secondary, e;
    switch (n) {
      case "contained":
        e = t ? d[t] : c;
        break;
      case "outlined":
        e = h[o].secondary;
        break;
      case "ghost":
      default:
        e = h[o].primary;
        break;
    }
    return e;
  }, [n, c, o, r, u, t]), m = f.useMemo(() => {
    let e = "";
    if (r || u)
      return e = a[o].secondary, e;
    switch (n) {
      case "contained":
        e = t ? w(d[t], 0.25) : S(c, 0.25);
        break;
      case "outlined":
        e = t ? d[t] : c;
        break;
      case "ghost":
      default:
        e = a[o].secondary;
        break;
    }
    return e;
  }, [n, c, o, r, u, t]), l = f.useMemo(() => {
    let e = "";
    if (r || u)
      return e = b[o].disabled, e;
    switch (n) {
      case "contained":
        e = "#ffffff";
        break;
      case "outlined":
        e = t ? d[t] : c;
        break;
      case "ghost":
      default:
        e = b[o].primary;
        break;
    }
    return e;
  }, [n, c, o, r, u, t]), s = f.useMemo(() => y[o].sm, [n, c, o]);
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
        borderWidth: 2,
        borderColor: m,
        boxShadow: s,
        backgroundColor: p,
        color: l
      }),
      [r, u, m, p, l, s]
    )
  };
}
export {
  H as useButtonStyle
};
