import { jsxs as e, jsx as r } from "react/jsx-runtime";
import T from "clsx";
import b from "react";
import { TextColors as s } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { ThemeColor as d } from "../../utils/design/ThemeColor.esm.js";
import { TypographySize as C } from "../../utils/design/TypographySize.esm.js";
import R from "../Icon/Icon.esm.js";
import { Space as S } from "../Space/index.esm.js";
import { Theme as c } from "../Theme/index.esm.js";
import { Typography as l } from "../Typography/index.esm.js";
import { useFormFieldStyle as w } from "./useFormFieldStyle.esm.js";
const z = b.memo(
  ({
    children: f,
    className: h,
    style: g,
    fullWidth: m = !1,
    required: i = !1,
    isDisabled: o = !1,
    isError: t = !1,
    isFocused: x = !1,
    label: a,
    helpText: n,
    ...y
  }) => {
    const { themeColor: u } = c.useThemeColor(), { themeMode: p } = c.useThemeMode(), { helperTextColor: F } = w({
      fullWidth: m,
      isDisabled: o,
      isError: t
    });
    return /* @__PURE__ */ e(
      "fieldset",
      {
        disabled: o,
        className: T("Venomous-UI-React--FormField", h),
        style: {
          boxSizing: "border-box",
          border: "none",
          padding: 0,
          margin: 0,
          width: m ? "100%" : "max-content",
          color: t ? d.RubyCopperhead : o ? s[p].disabled : x ? u : s[p].primary,
          ...g
        },
        ...y,
        children: [
          a && /* @__PURE__ */ e("legend", { style: { padding: 0, color: "inherit" }, children: [
            i && /* @__PURE__ */ r(
              l.Text,
              {
                as: "small",
                text: "*",
                style: {
                  color: d.RubyCopperhead,
                  fontWeight: "bold",
                  verticalAlign: "text-bottom"
                }
              }
            ),
            /* @__PURE__ */ r(
              l.Text,
              {
                as: "small",
                text: a,
                style: {
                  color: "inherit",
                  fontWeight: "bold",
                  paddingLeft: i ? "2px" : "4px"
                }
              }
            )
          ] }),
          /* @__PURE__ */ e(S.Flex, { column: !0, gap: 0, style: { width: "100%" }, children: [
            f,
            n && /* @__PURE__ */ e(
              l.Paragraph,
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  fontSize: C.small,
                  color: F,
                  paddingLeft: "4px"
                },
                children: [
                  t && /* @__PURE__ */ r(
                    R,
                    {
                      icon: "solar:danger-triangle-outline",
                      width: 14,
                      semanticColor: "error",
                      style: { marginRight: "4px" }
                    }
                  ),
                  n
                ]
              }
            )
          ] })
        ]
      }
    );
  }
);
z.displayName = "FormField";
export {
  z as default
};
