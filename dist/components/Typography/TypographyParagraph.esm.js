import { jsx as s } from "react/jsx-runtime";
import y from "clsx";
import l from "react";
import { useTypographyStyle as g } from "./_useTypographyStyle.esm.js";
import { TypographySize as h } from "../../utils/design/TypographySize.esm.js";
const n = l.memo(
  ({ children: o, className: r, style: a, ellipsis: p = 0, semanticColor: t, ...e }) => {
    const { fontColor: i, ellipsisStyles: m } = g({ ellipsis: p, semanticColor: t });
    return /* @__PURE__ */ s(
      "p",
      {
        className: y("Venomous-UI-React--Typography.Paragraph", r),
        style: {
          boxSizing: "border-box",
          margin: 0,
          width: "100%",
          fontSize: h.text,
          lineHeight: 1.5,
          color: i,
          ...m,
          ...a
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
