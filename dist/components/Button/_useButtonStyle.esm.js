import p from "react";
import { Theme as l } from "../Theme/index.esm.js";
import { ButtonVariantMap as r } from "./index.types.esm.js";
import { BackgroundColors as x, SemanticColors as d, BorderColors as b, TextColors as y } from "../../utils/design/colors.esm.js";
import { ThemeShadow as k } from "../../utils/design/ThemeShadow.esm.js";
import { TypographySize as w } from "../../utils/design/TypographySize.esm.js";
import { getLighterHex as S, getOpacityHex as M } from "../../utils/tools/get-colors.esm.js";
function j({
  isLoading: n,
  isDisabled: u,
  variant: f,
  semanticColor: t
}) {
  const { themeColor: c } = l.useThemeColor(), { themeMode: o } = l.useThemeMode(), h = p.useMemo(() => {
    let e = "";
    if (n || u)
      return e = x[o].secondary, e;
    switch (f) {
      case r.contained:
        e = t ? d[t] : c;
        break;
      case r.outlined:
        e = x[o].secondary;
        break;
      case r.ghost:
      default:
        e = "transparent";
        break;
    }
    return e;
  }, [f, c, o, n, u, t]), a = p.useMemo(() => {
    let e = "";
    if (n || u)
      return e = b[o].secondary, e;
    switch (f) {
      case r.contained:
        e = t ? S(d[t], 0.25) : M(c, 0.5);
        break;
      case r.outlined:
        e = t ? d[t] : c;
        break;
      case r.ghost:
        e = b[o].secondary;
        break;
      default:
        e = "transparent";
        break;
    }
    return e;
  }, [f, c, o, n, u, t]), m = p.useMemo(() => {
    let e = "";
    if (n || u)
      return e = y[o].disabled, e;
    switch (f) {
      case r.contained:
        e = "#ffffff";
        break;
      case r.outlined:
        e = t ? d[t] : c;
        break;
      case r.ghost:
      default:
        e = y[o].primary;
        break;
    }
    return e;
  }, [f, c, o, n, u, t]), s = p.useMemo(() => k[o].secondary, [f, c, o]);
  return {
    buttonStyles: p.useMemo(
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
        fontSize: w.text,
        fontWeight: "bold",
        cursor: n ? "wait" : u ? "not-allowed" : "pointer",
        borderRadius: "8px",
        borderWidth: 2,
        borderColor: a,
        boxShadow: s,
        backgroundColor: h,
        color: m
      }),
      [n, u, a, h, m, s]
    )
  };
}
export {
  j as useButtonStyle
};
