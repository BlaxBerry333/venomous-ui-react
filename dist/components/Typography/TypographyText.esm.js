import { jsx as l } from "react/jsx-runtime";
import m from "react";
import { useTypographyStyle as s } from "./_useTypographyStyle.esm.js";
import { TypographySize as n } from "../../utils/design/TypographySize.esm.js";
const f = m.memo(({ style: o, text: r, as: i = "span", semanticColor: a, ...t }) => {
  const { fontColor: e } = s({ ellipsis: 0, semanticColor: a });
  return i === "strong" ? /* @__PURE__ */ l(
    "strong",
    {
      style: {
        fontSize: n.text,
        fontWeight: "bold",
        color: e,
        ...o
      },
      ...t,
      children: r
    }
  ) : i === "small" ? /* @__PURE__ */ l(
    "small",
    {
      style: {
        fontSize: n.small,
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
        fontSize: n.text,
        fontWeight: "normal",
        color: e,
        ...o
      },
      ...t,
      children: r
    }
  );
});
f.displayName = "Typography.Text";
export {
  f as default
};
