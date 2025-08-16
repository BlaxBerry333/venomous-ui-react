import { jsxs as n, jsx as t } from "react/jsx-runtime";
import d from "clsx";
import c from "react";
import { TextColors as h, BackgroundColors as f, BorderColors as u } from "../../utils/design/colors.esm.js";
import { Shadows as x } from "../../utils/design/Shadow.esm.js";
import { ThemeMode as r } from "../../utils/design/ThemeMode.esm.js";
import y from "../Icon/Icon.esm.js";
import { Space as C } from "../Space/index.esm.js";
import { Theme as g } from "../Theme/index.esm.js";
import { Typography as b } from "../Typography/index.esm.js";
const k = c.memo(
  ({ text: i, isDisabled: a, className: m, style: s, closeIcon: e, closeIconPosition: p = "end", onClose: l }) => {
    const { themeMode: o } = g.useThemeMode();
    return /* @__PURE__ */ n(
      C.Flex,
      {
        row: !0,
        gap: 4,
        className: d("Venomous-UI-React--Chip", m),
        style: {
          WebkitTapHighlightColor: "transparent",
          width: "max-content",
          alignItems: "center",
          flexDirection: p === "start" ? "row" : "row-reverse",
          justifyContent: e ? "space-between" : "center",
          cursor: a ? "not-allowed" : "default",
          borderRadius: "12px",
          padding: "2px 8px",
          borderWidth: 1.5,
          borderStyle: "solid",
          borderColor: u[o].primary,
          boxShadow: x[o].tertiary,
          backgroundColor: f[o === r.Dark ? r.Light : r.Dark].secondary,
          color: h[o === r.Dark ? r.Light : r.Dark].primary,
          ...s
        },
        children: [
          e && /* @__PURE__ */ t(y, { icon: e, onClick: l, style: { color: "inherit", cursor: "pointer" } }),
          /* @__PURE__ */ t(b.Text, { as: "small", text: i, isEllipsis: !0, style: { color: "inherit" } })
        ]
      }
    );
  }
);
k.displayName = "Chip";
export {
  k as default
};
