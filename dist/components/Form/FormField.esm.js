import { jsxs as e, jsx as o } from "react/jsx-runtime";
import h from "react";
import { Space as y } from "../Space/index.esm.js";
import { Theme as g } from "../Theme/index.esm.js";
import { Typography as t } from "../Typography/index.esm.js";
import { useFormFieldStyle as b } from "./useFormFieldStyle.esm.js";
import { ThemeColor as d } from "../../utils/design/ThemeColor.esm.js";
import { TextColors as F } from "../../utils/design/colors.esm.js";
const T = h.memo(
  ({
    children: p,
    style: n,
    fullWidth: r = !1,
    required: l = !1,
    disabled: m = !1,
    isError: i = !1,
    label: s,
    helpText: a,
    ...x
  }) => {
    const { themeMode: f } = g.useThemeMode(), { textColor: c } = b({
      fullWidth: r,
      isDisabled: m,
      isError: i
    });
    return /* @__PURE__ */ e(
      "fieldset",
      {
        disabled: m,
        style: {
          boxSizing: "border-box",
          border: "none",
          padding: 0,
          margin: 0,
          width: r ? "100%" : "max-content",
          color: i ? d.RubyCopperhead : F[f].primary,
          ...n
        },
        ...x,
        children: [
          s && /* @__PURE__ */ e("legend", { style: { padding: 0, color: "inherit" }, children: [
            l && /* @__PURE__ */ o(
              t.Text,
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
            /* @__PURE__ */ o(
              t.Text,
              {
                as: "small",
                text: s,
                style: {
                  color: "inherit",
                  fontWeight: "bold",
                  paddingLeft: l ? "2px" : "4px"
                }
              }
            )
          ] }),
          /* @__PURE__ */ e(y.Flex, { column: !0, gap: 0, style: { width: "100%" }, children: [
            p,
            a && /* @__PURE__ */ o(
              t.Text,
              {
                as: "small",
                text: a,
                style: {
                  color: c,
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
T.displayName = "FormField";
export {
  T as default
};
