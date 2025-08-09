import { jsxs as o, jsx as t } from "react/jsx-runtime";
import b from "clsx";
import u from "react";
import { Space as C } from "../Space/index.esm.js";
import { Theme as p } from "../Theme/index.esm.js";
import { Typography as r } from "../Typography/index.esm.js";
import { useFormFieldStyle as R } from "./useFormFieldStyle.esm.js";
import { ThemeColor as n } from "../../utils/design/ThemeColor.esm.js";
import { TextColors as c } from "../../utils/design/colors.esm.js";
const S = u.memo(
  ({
    children: f,
    className: x,
    style: h,
    fullWidth: l = !1,
    required: m = !1,
    isDisabled: e = !1,
    isError: s = !1,
    isFocused: y = !1,
    label: a,
    helpText: i,
    ...g
  }) => {
    const { themeColor: F } = p.useThemeColor(), { themeMode: d } = p.useThemeMode(), { helperTextColor: T } = R({
      fullWidth: l,
      isDisabled: e,
      isError: s
    });
    return /* @__PURE__ */ o(
      "fieldset",
      {
        disabled: e,
        className: b("Venomous-UI-React--FormField", x),
        style: {
          boxSizing: "border-box",
          border: "none",
          padding: 0,
          margin: 0,
          width: l ? "100%" : "max-content",
          color: s ? n.RubyCopperhead : e ? c[d].disabled : y ? F : c[d].primary,
          ...h
        },
        ...g,
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
          /* @__PURE__ */ o(C.Flex, { column: !0, gap: 0, style: { width: "100%" }, children: [
            f,
            i && /* @__PURE__ */ t(
              r.Text,
              {
                as: "small",
                text: i,
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
S.displayName = "FormField";
export {
  S as default
};
