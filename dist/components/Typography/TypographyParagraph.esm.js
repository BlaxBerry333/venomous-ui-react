import { jsx as s } from "react/jsx-runtime";
import l from "clsx";
import y from "react";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import { TYPOGRAPHY_SIZES as g } from "../../utils/design/TypographySize.esm.js";
import { useTypographyStyle as h } from "./_useTypographyStyle.esm.js";
const n = y.memo(
  ({ children: o, className: r, style: t, ellipsis: p = 0, semanticColor: a, ...e }) => {
    const { fontColor: m, ellipsisStyles: i } = h({ ellipsis: p, semanticColor: a });
    return /* @__PURE__ */ s(
      "p",
      {
        className: l("Venomous-UI-React--Typography.Paragraph", r),
        style: {
          boxSizing: "border-box",
          margin: 0,
          width: "100%",
          fontSize: g.text,
          lineHeight: 1.5,
          color: m,
          ...i,
          ...t
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
