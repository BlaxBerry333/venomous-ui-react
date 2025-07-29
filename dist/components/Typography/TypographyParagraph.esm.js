import { jsx as m } from "react/jsx-runtime";
import y from "react";
import { useTypographyStyle as l } from "./_useTypographyStyle.esm.js";
import { TypographySize as s } from "../../utils/design/TypographySize.esm.js";
const g = y.memo(
  ({ children: o, style: r, ellipsis: t = 0, semanticColor: p, ...e }) => {
    const { fontColor: a, ellipsisStyles: i } = l({ ellipsis: t, semanticColor: p });
    return /* @__PURE__ */ m(
      "p",
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          width: "100%",
          fontSize: s.text,
          lineHeight: 1.5,
          color: a,
          ...i,
          ...r
        },
        ...e,
        children: o
      }
    );
  }
);
g.displayName = "Typography.Paragraph";
export {
  g as default
};
