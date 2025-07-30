import { jsx as i } from "react/jsx-runtime";
import f from "react";
import { useTypographyStyle as g } from "./_useTypographyStyle.esm.js";
import { TypographyTextTagMap as a } from "./index.types.esm.js";
import { TypographySize as n, TypographySizeName as p } from "../../utils/design/TypographySize.esm.js";
const h = f.memo(
  ({ style: o, text: r, as: s = a.span, isEllipsis: m = !1, semanticColor: y, ...e }) => {
    const { fontColor: t, ellipsisStyles: l } = g({ ellipsis: m ? 1 : 0, semanticColor: y });
    return s === a.strong ? /* @__PURE__ */ i(
      "strong",
      {
        style: {
          fontSize: n[p.strong],
          fontWeight: "bold",
          color: t,
          ...l,
          ...o
        },
        ...e,
        children: r
      }
    ) : s === a.small ? /* @__PURE__ */ i(
      "small",
      {
        style: {
          fontSize: n[p.small],
          color: t,
          ...l,
          ...o
        },
        ...e,
        children: r
      }
    ) : /* @__PURE__ */ i(
      "span",
      {
        style: {
          fontSize: n[p.text],
          fontWeight: "normal",
          color: t,
          ...l,
          ...o
        },
        ...e,
        children: r
      }
    );
  }
);
h.displayName = "Typography.Text";
export {
  h as default
};
