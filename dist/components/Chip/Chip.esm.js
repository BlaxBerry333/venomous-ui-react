import { jsxs as d, jsx as t } from "react/jsx-runtime";
import n from "clsx";
import c from "react";
import { Space as h } from "../Space/index.esm.js";
import { Theme as f } from "../Theme/index.esm.js";
import { Typography as x } from "../Typography/index.esm.js";
import u from "../Icon/Icon.esm.js";
import { TextColors as y, BackgroundColors as C, BorderColors as g } from "../../utils/design/colors.esm.js";
import { Shadows as k } from "../../utils/design/Shadow.esm.js";
import { ThemeMode as r } from "../../utils/design/ThemeMode.esm.js";
const w = c.memo(
  ({ text: i, isDisabled: m, className: a, style: s, closeIcon: e, closeIconPosition: l = "end", onClose: p }) => {
    const { themeMode: o } = f.useThemeMode();
    return /* @__PURE__ */ d(
      h.Flex,
      {
        row: !0,
        gap: 4,
        className: n("Venomous-UI-React--Chip", a),
        style: {
          width: "max-content",
          alignItems: "center",
          flexDirection: l === "start" ? "row" : "row-reverse",
          cursor: m ? "not-allowed" : "default",
          borderRadius: "12px",
          padding: "2px 8px",
          borderWidth: 1.5,
          borderStyle: "solid",
          borderColor: g[o].primary,
          boxShadow: k[o].tertiary,
          backgroundColor: C[o === r.Dark ? r.Light : r.Dark].secondary,
          color: y[o === r.Dark ? r.Light : r.Dark].primary,
          ...s
        },
        children: [
          e && /* @__PURE__ */ t(u, { icon: e, onClick: p, style: { color: "inherit", cursor: "pointer" } }),
          /* @__PURE__ */ t(x.Text, { as: "small", text: i, isEllipsis: !0, style: { color: "inherit" } })
        ]
      }
    );
  }
);
w.displayName = "Chip";
export {
  w as default
};
