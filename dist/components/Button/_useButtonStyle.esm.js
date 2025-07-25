import d from "react";
import { Theme as s } from "../Theme/index.esm.js";
import { ButtonColors as l, BackgroundColors as c, BorderColors as x, TextColors as f, ShadowColors as C } from "../../utils/colors/index.esm.js";
import i from "../../utils/get-colors/index.esm.js";
import { TypographySize as M } from "../../utils/sizes/index.esm.js";
function w({
  isLoading: n,
  isDisabled: u,
  color: o = "auto",
  variant: e
}) {
  const { isDarkThemeMode: t } = s.useThemeMode(), { themeColor: r } = s.useThemeColor(), p = d.useMemo(() => e === "contained" ? o !== "auto" ? l[o] : r : e === "ghost" ? "transparent" : c[t ? "darkMode" : "lightMode"], [e, o, r, t]), m = d.useMemo(() => e === "outline" ? o !== "auto" ? l[o] : r : i(x[t ? "darkMode" : "lightMode"]).opacity, [e, o, r, t]), h = d.useMemo(() => {
    if (e === "contained") return f.white;
    if (e === "outline") return o !== "auto" ? l[o] : r;
    if (e === "ghost") return f[t ? "darkMode" : "lightMode"];
  }, [e, o, r, t]);
  return {
    buttonStyles: d.useMemo(
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
        fontSize: M.text,
        fontWeight: "bold",
        borderRadius: "8px",
        cursor: n ? "wait" : u ? "not-allowed" : "pointer",
        boxShadow: C[t ? "darkMode" : "lightMode"],
        borderColor: n || u ? i(m).opacity : m,
        backgroundColor: n || u ? i(p).opacity : p,
        color: n || u ? i(h).opacity : h
      }),
      [n, u, m, p, h, t]
    )
  };
}
export {
  w as useButtonStyle
};
