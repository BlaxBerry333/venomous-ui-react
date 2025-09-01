import { jsxs as e, jsx as t } from "react/jsx-runtime";
import u from "clsx";
import C from "react";
import F from "../../hooks/useDesign/index.esm.js";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { ThemeColor as p } from "../../utils/design/ThemeColor.esm.js";
import { TypographySize as T } from "../../utils/design/TypographySize.esm.js";
import b from "../Icon/Icon.esm.js";
import { Space as R } from "../Space/index.esm.js";
import { Theme as S } from "../Theme/index.esm.js";
import { Typography as l } from "../Typography/index.esm.js";
import { useFormFieldStyle as w } from "./_useFormFieldStyle.esm.js";
const z = C.memo(
  ({
    children: d,
    className: c,
    style: f,
    fullWidth: i = !1,
    required: m = !1,
    isDisabled: o = !1,
    isError: r = !1,
    isFocused: g = !1,
    label: a,
    helpText: n,
    ...h
  }) => {
    const { themeColor: x } = S.useThemeColor(), s = F(), { helperTextColor: y } = w({
      fullWidth: i,
      isDisabled: o,
      isError: r
    });
    return /* @__PURE__ */ e(
      "fieldset",
      {
        disabled: o,
        className: u("Venomous-UI-React--FormField", c),
        style: {
          boxSizing: "border-box",
          border: "none",
          padding: 0,
          margin: 0,
          width: i ? "100%" : "max-content",
          color: r ? p.RubyCopperhead : o ? s.TextColors.disabled : g ? x : s.TextColors.primary,
          ...f
        },
        ...h,
        children: [
          a && /* @__PURE__ */ e("legend", { style: { padding: 0, color: "inherit" }, children: [
            m && /* @__PURE__ */ t(
              l.Text,
              {
                as: "small",
                text: "*",
                style: {
                  color: p.RubyCopperhead,
                  fontWeight: "bold",
                  verticalAlign: "text-bottom"
                }
              }
            ),
            /* @__PURE__ */ t(
              l.Text,
              {
                as: "small",
                text: a,
                style: {
                  color: "inherit",
                  fontWeight: "bold",
                  paddingLeft: m ? "2px" : "4px"
                }
              }
            )
          ] }),
          /* @__PURE__ */ e(R.Flex, { column: !0, gap: 0, style: { width: "100%" }, children: [
            d,
            n && /* @__PURE__ */ e(
              l.Paragraph,
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  fontSize: T.small,
                  color: y,
                  paddingLeft: "4px"
                },
                children: [
                  r && /* @__PURE__ */ t(
                    b,
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
