import { jsxs as r, jsx as l } from "react/jsx-runtime";
import h from "react";
import { Space as d } from "../Space/index.esm.js";
import { Theme as g } from "../Theme/index.esm.js";
import { Typography as m } from "../Typography/index.esm.js";
import { LabelPositionMap as e } from "./index.types.esm.js";
import { ThemeColor as a } from "../../utils/design/ThemeColor.esm.js";
import { TextColors as y } from "../../utils/design/colors.esm.js";
const b = h.memo(
  ({
    children: i,
    style: p,
    htmlFor: s,
    label: n = "",
    isError: f = !1,
    required: o = !1,
    position: t = e.top,
    ...x
  }) => {
    const { themeMode: c } = g.useThemeMode();
    return /* @__PURE__ */ r(
      "label",
      {
        htmlFor: s,
        style: {
          width: "max-content",
          display: "flex",
          gap: "8px",
          ...t === e.top && { flexDirection: "column", alignItems: "flex-start" },
          ...t === e.left && { flexDirection: "row", alignItems: "center" },
          ...t === e.right && { flexDirection: "row-reverse", alignItems: "center" },
          color: f ? a.RubyCopperhead : y[c].primary,
          ...p
        },
        ...x,
        children: [
          /* @__PURE__ */ r(d.Flex, { row: !0, gap: 0, style: { width: "100%", alignItems: "center" }, children: [
            o && /* @__PURE__ */ l(m.Text, { as: "small", text: "*", style: { color: a.RubyCopperhead, marginRight: "2px" } }),
            /* @__PURE__ */ l(
              m.Text,
              {
                as: "small",
                text: n,
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
b.displayName = "Form.Label";
export {
  b as default
};
