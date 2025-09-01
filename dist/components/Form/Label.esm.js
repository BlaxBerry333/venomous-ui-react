import { jsxs as o, jsx as l } from "react/jsx-runtime";
import d from "clsx";
import h from "react";
import y from "../../hooks/useDesign/index.esm.js";
import { SEMANTIC_COLORS as m } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import "../../utils/design/TypographySize.esm.js";
import { Space as b } from "../Space/index.esm.js";
import { Typography as a } from "../Typography/index.esm.js";
import { LabelPositionMap as e } from "./index.types.esm.js";
const I = h.memo(
  ({
    children: i,
    className: s,
    style: p,
    htmlFor: n,
    label: c = "",
    isError: f = !1,
    required: r = !1,
    position: t = e.top,
    ...x
  }) => {
    const g = y();
    return /* @__PURE__ */ o(
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
          color: f ? m.error : g.TextColors.primary,
          ...p
        },
        ...x,
        children: [
          /* @__PURE__ */ o(b.Flex, { row: !0, gap: 0, style: { width: "100%", alignItems: "center" }, children: [
            r && /* @__PURE__ */ l(a.Text, { as: "small", text: "*", style: { color: m.error, marginRight: "2px" } }),
            /* @__PURE__ */ l(
              a.Text,
              {
                as: "small",
                text: c,
                style: { color: "inherit", fontWeight: "bold", paddingLeft: r ? 0 : "4px" }
              }
            )
          ] }),
          i
        ]
      }
    );
  }
);
I.displayName = "Form.Label";
export {
  I as default
};
