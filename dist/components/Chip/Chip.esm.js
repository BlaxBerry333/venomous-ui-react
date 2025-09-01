import { jsxs as p, jsx as e } from "react/jsx-runtime";
import d from "clsx";
import c from "react";
import h from "../../hooks/useDesign/index.esm.js";
import { TextColors as f } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import u from "../Icon/Icon.esm.js";
import { Space as x } from "../Space/index.esm.js";
import { Theme as C } from "../Theme/index.esm.js";
import { Typography as y } from "../Typography/index.esm.js";
const g = c.memo(
  ({ text: t, isDisabled: i, className: s, style: a, closeIcon: r, closeIconPosition: m = "end", onClose: l }) => {
    const { themeColor: n } = C.useThemeColor(), o = h();
    return /* @__PURE__ */ p(
      x.Flex,
      {
        row: !0,
        gap: 4,
        className: d("Venomous-UI-React--Chip", s),
        style: {
          WebkitTapHighlightColor: "transparent",
          width: "max-content",
          alignItems: "center",
          flexDirection: m === "start" ? "row" : "row-reverse",
          justifyContent: r ? "space-between" : "center",
          cursor: i ? "not-allowed" : "default",
          borderRadius: "12px",
          padding: "2px 8px",
          borderWidth: 1.5,
          borderStyle: "solid",
          borderColor: o.BorderColors.tertiary,
          boxShadow: o.Shadows.tertiary,
          backgroundColor: n,
          color: f.dark.primary,
          ...a
        },
        children: [
          r && /* @__PURE__ */ e(u, { icon: r, onClick: l, style: { color: "inherit", cursor: "pointer" } }),
          /* @__PURE__ */ e(y.Text, { as: "small", text: t, isEllipsis: !0, style: { color: "inherit", fontWeight: "inherit" } })
        ]
      }
    );
  }
);
g.displayName = "Chip";
export {
  g as default
};
