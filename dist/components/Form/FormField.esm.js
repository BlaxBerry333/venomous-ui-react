import { jsxs as o, jsx as t } from "react/jsx-runtime";
import b from "react";
import { Space as u } from "../Space/index.esm.js";
import { Theme as p } from "../Theme/index.esm.js";
import { Typography as r } from "../Typography/index.esm.js";
import { useFormFieldStyle as C } from "./_useFormFieldStyle.esm.js";
import { ThemeColor as n } from "../../utils/design/ThemeColor.esm.js";
import { TextColors as f } from "../../utils/design/colors.esm.js";
const F = b.memo(
  ({
    children: x,
    style: c,
    fullWidth: l = !1,
    required: m = !1,
    isDisabled: e = !1,
    isError: i = !1,
    isFocused: h = !1,
    label: a,
    helpText: d,
    ...y
  }) => {
    const { themeColor: g } = p.useThemeColor(), { themeMode: s } = p.useThemeMode(), { helperTextColor: T } = C({
      fullWidth: l,
      isDisabled: e,
      isError: i
    });
    return /* @__PURE__ */ o(
      "fieldset",
      {
        disabled: e,
        style: {
          boxSizing: "border-box",
          border: "none",
          padding: 0,
          margin: 0,
          width: l ? "100%" : "max-content",
          color: i ? n.RubyCopperhead : e ? f[s].disabled : h ? g : f[s].primary,
          ...c
        },
        ...y,
        children: [
          a && /* @__PURE__ */ o("legend", { style: { padding: 0, color: "inherit" }, children: [
            m && /* @__PURE__ */ t(
              r.Text,
              {
                as: "small",
                text: "*",
                style: {
                  color: n.RubyCopperhead,
                  fontWeight: "bold",
                  verticalAlign: "text-bottom"
                }
              }
            ),
            /* @__PURE__ */ t(
              r.Text,
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
          /* @__PURE__ */ o(u.Flex, { column: !0, gap: 0, style: { width: "100%" }, children: [
            x,
            d && /* @__PURE__ */ t(
              r.Text,
              {
                as: "small",
                text: d,
                style: {
                  color: T,
                  paddingLeft: "4px"
                }
              }
            )
          ] })
        ]
      }
    );
  }
);
F.displayName = "FormField";
export {
  F as default
};
