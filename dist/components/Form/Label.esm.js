import { jsxs as r, jsx as l } from "react/jsx-runtime";
import d from "clsx";
import g from "react";
import { Space as y } from "../Space/index.esm.js";
import { Theme as b } from "../Theme/index.esm.js";
import { Typography as m } from "../Typography/index.esm.js";
import { LabelPositionMap as e } from "./index.types.esm.js";
import { ThemeColor as a } from "../../utils/design/ThemeColor.esm.js";
import { TextColors as u } from "../../utils/design/colors.esm.js";
const T = g.memo(
  ({
    children: i,
    className: s,
    style: p,
    htmlFor: n,
    label: c = "",
    isError: f = !1,
    required: o = !1,
    position: t = e.top,
    ...x
  }) => {
    const { themeMode: h } = b.useThemeMode();
    return /* @__PURE__ */ r(
      "label",
      {
        htmlFor: n,
        className: d("Venomous-UI-React--Form.Label", s),
        style: {
          width: "max-content",
          display: "flex",
          gap: "8px",
          ...t === e.top && { flexDirection: "column", alignItems: "flex-start" },
          ...t === e.left && { flexDirection: "row", alignItems: "center" },
          ...t === e.right && { flexDirection: "row-reverse", alignItems: "center" },
          color: f ? a.RubyCopperhead : u[h].primary,
          ...p
        },
        ...x,
        children: [
          /* @__PURE__ */ r(y.Flex, { row: !0, gap: 0, style: { width: "100%", alignItems: "center" }, children: [
            o && /* @__PURE__ */ l(m.Text, { as: "small", text: "*", style: { color: a.RubyCopperhead, marginRight: "2px" } }),
            /* @__PURE__ */ l(
              m.Text,
              {
                as: "small",
                text: c,
                style: { color: "inherit", fontWeight: "bold", paddingLeft: o ? 0 : "4px" }
              }
            )
          ] }),
          i
        ]
      }
    );
  }
);
T.displayName = "Form.Label";
export {
  T as default
};
