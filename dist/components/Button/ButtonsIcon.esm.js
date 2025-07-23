import { jsx as n } from "react/jsx-runtime";
import f from "react";
import x from "../../hooks/useThemeMode/index.esm.js";
import g from "../../hooks/useThemeColor/index.esm.js";
import { ButtonColors as y, ShadowColors as d, TextColors as k, BorderColors as i, IconColors as l } from "../../utils/colors/index.esm.js";
import { TypographySize as w } from "../../utils/sizes/index.esm.js";
import M from "../Icon/Icon.esm.js";
const I = f.memo(
  ({
    type: s = "button",
    style: a,
    variant: o = "contained",
    color: r = "auto",
    isLoading: c,
    isDisabled: m,
    icon: p,
    iconWidth: u = 20,
    iconColor: h = "auto",
    ...C
  }) => {
    const { isDarkThemeMode: e } = x(), { themeColor: b } = g(), t = r !== "auto" ? y[r] : b;
    return /* @__PURE__ */ n(
      "button",
      {
        type: s,
        disabled: c || m,
        style: {
          height: "40px",
          width: "40px",
          padding: "0px 0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: w.text,
          fontWeight: "bold",
          borderRadius: "8px",
          borderColor: e ? i.darkMode : i.lightMode,
          cursor: "pointer",
          ...o === "contained" ? {
            backgroundColor: t,
            color: k.white,
            boxShadow: e ? d.darkMode : d.lightMode
          } : {},
          ...o === "outline" ? {
            color: t,
            backgroundColor: "transparent",
            border: `1px solid ${t}`
          } : {},
          ...o === "ghost" ? {
            color: t,
            backgroundColor: "transparent"
          } : {},
          ...a
        },
        ...C,
        children: /* @__PURE__ */ n(
          M,
          {
            icon: p,
            width: u,
            style: {
              color: o === "contained" ? l.white : l[h] || "inherit"
            }
          }
        )
      }
    );
  }
);
I.displayName = "Buttons.Icon";
export {
  I as default
};
