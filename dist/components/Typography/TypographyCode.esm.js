import { jsx as p } from "react/jsx-runtime";
import t from "react";
import { TypographySize as i } from "../../utils/design/TypographySize.esm.js";
import { ThemeColor as m } from "../../utils/design/ThemeColor.esm.js";
const a = t.memo(({ style: o, text: r, ...e }) => /* @__PURE__ */ p(
  "code",
  {
    style: {
      color: m.TourmalineStiletto,
      backgroundColor: "#E7E9EB",
      border: "1px solid #CCCCCC",
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: i.small,
      fontWeight: 600,
      ...o
    },
    ...e,
    children: r
  }
));
a.displayName = "Typography.Code";
export {
  a as default
};
