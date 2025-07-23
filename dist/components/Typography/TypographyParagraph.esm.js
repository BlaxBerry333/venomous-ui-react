import { jsx as y } from "react/jsx-runtime";
import l from "react";
import { useTypographyStyle as m, _defaultTypographyColor as g } from "./_useTypographyStyle.esm.js";
import { TypographySize as s } from "../../utils/sizes/index.esm.js";
const h = l.memo(
  ({ children: o, style: r, color: p = g, ellipsis: t = 0, ...a }) => {
    const { fontColor: e, ellipsisStyles: i } = m({ color: p, ellipsis: t });
    return /* @__PURE__ */ y(
      "p",
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          width: "100%",
          fontSize: s.text,
          lineHeight: 1.5,
          color: e,
          ...i,
          ...r
        },
        ...a,
        children: o
      }
    );
  }
);
h.displayName = "Typography.Paragraph";
export {
  h as default
};
