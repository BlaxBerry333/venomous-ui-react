import { jsxs as d, jsx as e } from "react/jsx-runtime";
import h from "clsx";
import c from "react";
import { TextColors as f, BorderColors as u } from "../../utils/design/colors.esm.js";
import { Shadows as x } from "../../utils/design/Shadow.esm.js";
import C from "../Icon/Icon.esm.js";
import { Space as y } from "../Space/index.esm.js";
import { Theme as t } from "../Theme/index.esm.js";
import { Typography as b } from "../Typography/index.esm.js";
const g = c.memo(
  ({ text: i, isDisabled: s, className: m, style: a, closeIcon: r, closeIconPosition: l = "end", onClose: p }) => {
    const { themeMode: o } = t.useThemeMode(), { themeColor: n } = t.useThemeColor();
    return /* @__PURE__ */ d(
      y.Flex,
      {
        row: !0,
        gap: 4,
        className: h("Venomous-UI-React--Chip", m),
        style: {
          WebkitTapHighlightColor: "transparent",
          width: "max-content",
          alignItems: "center",
          flexDirection: l === "start" ? "row" : "row-reverse",
          justifyContent: r ? "space-between" : "center",
          cursor: s ? "not-allowed" : "default",
          borderRadius: "12px",
          padding: "2px 8px",
          borderWidth: 1.5,
          borderStyle: "solid",
          borderColor: u[o].tertiary,
          boxShadow: x[o].tertiary,
          backgroundColor: n,
          color: f.dark.primary,
          ...a
        },
        children: [
          r && /* @__PURE__ */ e(C, { icon: r, onClick: p, style: { color: "inherit", cursor: "pointer" } }),
          /* @__PURE__ */ e(b.Text, { as: "small", text: i, isEllipsis: !0, style: { color: "inherit", fontWeight: "inherit" } })
        ]
      }
    );
  }
);
g.displayName = "Chip";
export {
  g as default
};
