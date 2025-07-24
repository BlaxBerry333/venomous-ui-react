import d from "react";
import s from "../../hooks/useThemeMode/index.esm.js";
import M from "../../hooks/useThemeColor/index.esm.js";
import { ButtonColors as h, BackgroundColors as c, BorderColors as x, TextColors as f, ShadowColors as C } from "../../utils/colors/index.esm.js";
import i from "../../utils/get-colors/index.esm.js";
import { TypographySize as a } from "../../utils/sizes/index.esm.js";
function z({
  isLoading: n,
  isDisabled: u,
  color: o = "auto",
  variant: e
}) {
  const { isDarkThemeMode: t } = s(), { themeColor: r } = M(), m = d.useMemo(() => e === "contained" ? o !== "auto" ? h[o] : r : c[t ? "darkMode" : "lightMode"], [e, o, r, t]), p = d.useMemo(() => e === "outline" ? o !== "auto" ? h[o] : r : i(x[t ? "darkMode" : "lightMode"]).opacity, [e, o, r, t]), l = d.useMemo(() => e === "contained" ? f.white : e === "outline" ? o !== "auto" ? h[o] : r : e === "ghost" ? f[t ? "darkMode" : "lightMode"] : f[t ? "darkMode" : "lightMode"], [e, o, r, t]);
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
        fontSize: a.text,
        fontWeight: "bold",
        borderRadius: "8px",
        cursor: n ? "wait" : u ? "not-allowed" : "pointer",
        boxShadow: C[t ? "darkMode" : "lightMode"],
        borderColor: n || u ? i(p).opacity : p,
        backgroundColor: n || u ? i(m).opacity : m,
        color: n || u ? i(l).opacity : l
      }),
      [n, u, p, m, l, t]
    )
  };
}
export {
  z as useButtonStyle
};
