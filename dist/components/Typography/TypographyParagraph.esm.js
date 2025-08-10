import { jsx as s } from "react/jsx-runtime";
import y from "clsx";
import l from "react";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { TypographySize as g } from "../../utils/design/TypographySize.esm.js";
import { useTypographyStyle as h } from "./_useTypographyStyle.esm.js";
const n = l.memo(
  ({ children: o, className: r, style: p, ellipsis: a = 0, semanticColor: t, ...e }) => {
    const { fontColor: i, ellipsisStyles: m } = h({ ellipsis: a, semanticColor: t });
    return /* @__PURE__ */ s(
      "p",
      {
        className: y("Venomous-UI-React--Typography.Paragraph", r),
        style: {
          boxSizing: "border-box",
          margin: 0,
          width: "100%",
          fontSize: g.text,
          lineHeight: 1.5,
          color: i,
          ...m,
          ...p
        },
        ...e,
        children: o
      }
    );
  }
);
n.displayName = "Typography.Paragraph";
export {
  n as default
};
