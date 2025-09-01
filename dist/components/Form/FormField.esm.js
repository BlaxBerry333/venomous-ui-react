import { jsxs as o, jsx as t } from "react/jsx-runtime";
import F from "clsx";
import T from "react";
import C from "../../hooks/useDesign/index.esm.js";
import { SEMANTIC_COLORS as d } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import { TYPOGRAPHY_SIZES as S } from "../../utils/design/TypographySize.esm.js";
import u from "../Icon/Icon.esm.js";
import { Space as b } from "../Space/index.esm.js";
import { Theme as I } from "../Theme/index.esm.js";
import { Typography as l } from "../Typography/index.esm.js";
import { useFormFieldStyle as R } from "./_useFormFieldStyle.esm.js";
const w = T.memo(
  ({
    children: p,
    className: c,
    style: f,
    fullWidth: i = !1,
    required: m = !1,
    isDisabled: e = !1,
    isError: r = !1,
    isFocused: g = !1,
    label: n,
    helpText: a,
    ...x
  }) => {
    const { themeColor: h } = I.useThemeColor(), s = C(), { helperTextColor: y } = R({
      fullWidth: i,
      isDisabled: e,
      isError: r
    });
    return /* @__PURE__ */ o(
      "fieldset",
      {
        disabled: e,
        className: F("Venomous-UI-React--FormField", c),
        style: {
          boxSizing: "border-box",
          border: "none",
          padding: 0,
          margin: 0,
          width: i ? "100%" : "max-content",
          color: r ? d.error : e ? s.TextColors.disabled : g ? h : s.TextColors.primary,
          ...f
        },
        ...x,
        children: [
          n && /* @__PURE__ */ o("legend", { style: { padding: 0, color: "inherit" }, children: [
            m && /* @__PURE__ */ t(
              l.Text,
              {
                as: "small",
                text: "*",
                style: {
                  color: d.error,
                  fontWeight: "bold",
                  verticalAlign: "text-bottom"
                }
              }
            ),
            /* @__PURE__ */ t(
              l.Text,
              {
                as: "small",
                text: n,
                style: {
                  color: "inherit",
                  fontWeight: "bold",
                  paddingLeft: m ? "2px" : "4px"
                }
              }
            )
          ] }),
          /* @__PURE__ */ o(b.Flex, { column: !0, gap: 0, style: { width: "100%" }, children: [
            p,
            a && /* @__PURE__ */ o(
              l.Paragraph,
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  fontSize: S.small,
                  color: y,
                  paddingLeft: "4px"
                },
                children: [
                  r && /* @__PURE__ */ t(
                    u,
                    {
                      icon: "solar:danger-triangle-outline",
                      width: 14,
                      semanticColor: "error",
                      style: { marginRight: "4px" }
                    }
                  ),
                  a
                ]
              }
            )
          ] })
        ]
      }
    );
  }
);
w.displayName = "FormField";
export {
  w as default
};
