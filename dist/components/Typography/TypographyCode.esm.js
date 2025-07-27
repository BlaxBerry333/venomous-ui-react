import { jsx as p } from "react/jsx-runtime";
import d from "react";
import { TypographySize as a } from "../../utils/design/TypographySize.esm.js";
const t = d.memo(({ style: o, text: r, ...e }) => /* @__PURE__ */ p(
  "code",
  {
    style: {
      color: "#B71D18",
      backgroundColor: "#E7E9EB",
      border: "1px solid #CCCCCC",
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: a.small,
      fontWeight: 600,
      ...o
    },
    ...e,
    children: r
  }
));
t.displayName = "Typography.Code";
export {
  t as default
};
