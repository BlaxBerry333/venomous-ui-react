import { jsxs as e, jsx as t } from "react/jsx-runtime";
import T from "clsx";
import b from "react";
import { Space as C } from "../Space/index.esm.js";
import { Theme as p } from "../Theme/index.esm.js";
import { Typography as l } from "../Typography/index.esm.js";
import { useFormFieldStyle as S } from "./useFormFieldStyle.esm.js";
import R from "../Icon/Icon.esm.js";
import { ThemeColor as d } from "../../utils/design/ThemeColor.esm.js";
import { TextColors as c } from "../../utils/design/colors.esm.js";
import { TypographySize as w } from "../../utils/design/TypographySize.esm.js";
const z = b.memo(
  ({
    children: f,
    className: h,
    style: x,
    fullWidth: m = !1,
    required: i = !1,
    isDisabled: o = !1,
    isError: r = !1,
    isFocused: g = !1,
    label: a,
    helpText: n,
    ...y
  }) => {
    const { themeColor: u } = p.useThemeColor(), { themeMode: s } = p.useThemeMode(), { helperTextColor: F } = S({
      fullWidth: m,
      isDisabled: o,
      isError: r
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
          color: r ? d.RubyCopperhead : o ? c[s].disabled : g ? u : c[s].primary,
          ...x
        },
        ...y,
        children: [
          a && /* @__PURE__ */ e("legend", { style: { padding: 0, color: "inherit" }, children: [
            i && /* @__PURE__ */ t(
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
            /* @__PURE__ */ t(
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
          /* @__PURE__ */ e(C.Flex, { column: !0, gap: 0, style: { width: "100%" }, children: [
            f,
            n && /* @__PURE__ */ e(
              l.Paragraph,
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  fontSize: w.small,
                  color: F
                },
                children: [
                  r && /* @__PURE__ */ t(
                    R,
                    {
                      icon: "solar:danger-triangle-outline",
                      width: 16,
                      semanticColor: "error",
                      style: { margin: "0px 4px" }
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
