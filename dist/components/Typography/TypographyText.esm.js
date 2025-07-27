import { jsx as l } from "react/jsx-runtime";
import a from "react";
import { useTypographyStyle as m } from "./_useTypographyStyle.esm.js";
import { TypographySize as n } from "../../utils/design/TypographySize.esm.js";
const s = a.memo(({ style: o, text: r, as: i = "span", ...t }) => {
  const { fontColor: e } = m({ ellipsis: 0 });
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
s.displayName = "Typography.Text";
export {
  s as default
};
