import { jsxs as d, jsx as t } from "react/jsx-runtime";
import n from "clsx";
import c from "react";
import { TextColors as h, BackgroundColors as f, BorderColors as x } from "../../utils/design/colors.esm.js";
import { Shadows as u } from "../../utils/design/Shadow.esm.js";
import { ThemeMode as r } from "../../utils/design/ThemeMode.esm.js";
import y from "../Icon/Icon.esm.js";
import { Space as g } from "../Space/index.esm.js";
import { Theme as C } from "../Theme/index.esm.js";
import { Typography as k } from "../Typography/index.esm.js";
const b = c.memo(
  ({ text: i, isDisabled: a, className: m, style: s, closeIcon: e, closeIconPosition: l = "end", onClose: p }) => {
    const { themeMode: o } = C.useThemeMode();
    return /* @__PURE__ */ d(
      g.Flex,
      {
        row: !0,
        gap: 4,
        className: n("Venomous-UI-React--Chip", m),
        style: {
          WebkitTapHighlightColor: "transparent",
          width: "max-content",
          alignItems: "center",
          flexDirection: l === "start" ? "row" : "row-reverse",
          cursor: a ? "not-allowed" : "default",
          borderRadius: "12px",
          padding: "2px 8px",
          borderWidth: 1.5,
          borderStyle: "solid",
          borderColor: x[o].primary,
          boxShadow: u[o].tertiary,
          backgroundColor: f[o === r.Dark ? r.Light : r.Dark].secondary,
          color: h[o === r.Dark ? r.Light : r.Dark].primary,
          ...s
        },
        children: [
          e && /* @__PURE__ */ t(y, { icon: e, onClick: p, style: { color: "inherit", cursor: "pointer" } }),
          /* @__PURE__ */ t(k.Text, { as: "small", text: i, isEllipsis: !0, style: { color: "inherit" } })
        ]
      }
    );
  }
);
b.displayName = "Chip";
export {
  b as default
};
