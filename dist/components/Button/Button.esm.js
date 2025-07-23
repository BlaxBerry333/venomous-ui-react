import { jsxs as b, jsx as d } from "react/jsx-runtime";
import y from "react";
import { Typography as w } from "../Typography/index.esm.js";
import T from "../../hooks/useThemeMode/index.esm.js";
import k from "../../hooks/useThemeColor/index.esm.js";
import { ButtonColors as M, ShadowColors as s, TextColors as B, BorderColors as l, IconColors as p } from "../../utils/colors/index.esm.js";
import { TypographySize as S } from "../../utils/sizes/index.esm.js";
import j from "../Icon/Icon.esm.js";
const z = y.memo(
  ({
    type: a = "button",
    style: m,
    text: r,
    variant: o = "contained",
    color: i = "auto",
    isLoading: c,
    isDisabled: h,
    icon: e,
    iconPosition: f = "start",
    iconWidth: u = 20,
    iconColor: x = "auto",
    ...g
  }) => {
    const { isDarkThemeMode: n } = T(), { themeColor: C } = k(), t = i !== "auto" ? M[i] : C;
    return /* @__PURE__ */ b(
      "button",
      {
        type: a,
        disabled: c || h,
        style: {
          height: "40px",
          display: "flex",
          flexDirection: f === "start" ? "row" : "row-reverse",
          alignItems: "center",
          justifyContent: "center",
          textTransform: "capitalize",
          fontSize: S.text,
          fontWeight: "bold",
          borderRadius: "8px",
          borderColor: n ? l.darkMode : l.lightMode,
          cursor: "pointer",
          ...r ? {
            width: "auto",
            padding: "0px 16px"
          } : {
            width: "40px",
            padding: "0px 0px"
          },
          ...o === "contained" ? {
            backgroundColor: t,
            color: B.white,
            boxShadow: n ? s.darkMode : s.lightMode
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
          ...m
        },
        ...g,
        children: [
          e && /* @__PURE__ */ d(
            j,
            {
              icon: e,
              width: u,
              style: {
                color: o === "contained" ? p.white : p[x] || "inherit"
              }
            }
          ),
          r && /* @__PURE__ */ d(
            w.Text,
            {
              text: r,
              style: {
                margin: e ? "0px 8px" : "0px",
                color: o === "contained" ? "#ffffff" : "inherit"
              }
            }
          )
        ]
      }
    );
  }
);
z.displayName = "Button";
export {
  z as default
};
