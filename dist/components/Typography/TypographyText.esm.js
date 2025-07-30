import { jsx as l } from "react/jsx-runtime";
import s from "react";
import { useTypographyStyle as y } from "./_useTypographyStyle.esm.js";
import { TypographyTextTagMap as a } from "./index.types.esm.js";
import { TypographySize as i, TypographySizeName as n } from "../../utils/design/TypographySize.esm.js";
const f = s.memo(
  ({ style: o, text: r, as: p = a.span, semanticColor: m, ...t }) => {
    const { fontColor: e } = y({ ellipsis: 0, semanticColor: m });
    return p === a.strong ? /* @__PURE__ */ l(
      "strong",
      {
        style: {
          fontSize: i[n.strong],
          fontWeight: "bold",
          color: e,
          ...o
        },
        ...t,
        children: r
      }
    ) : p === a.small ? /* @__PURE__ */ l(
      "small",
      {
        style: {
          fontSize: i[n.small],
          color: e,
          ...o
        },
        ...t,
        children: r
      }
    ) : /* @__PURE__ */ l(
      "span",
      {
        style: {
          fontSize: i[n.text],
          fontWeight: "normal",
          color: e,
          ...o
        },
        ...t,
        children: r
      }
    );
  }
);
f.displayName = "Typography.Text";
export {
  f as default
};
