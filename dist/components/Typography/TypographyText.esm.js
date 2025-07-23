import { jsx as l } from "react/jsx-runtime";
import m from "react";
import { useTypographyStyle as f, _defaultTypographyColor as p } from "./_useTypographyStyle.esm.js";
import { TypographySize as n } from "../../utils/sizes/index.esm.js";
const s = m.memo(
  ({ style: o, text: r, as: a = "span", color: i = p, ...t }) => {
    const { fontColor: e } = f({ color: i });
    return a === "strong" ? /* @__PURE__ */ l(
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
    ) : a === "small" ? /* @__PURE__ */ l(
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
  }
);
s.displayName = "Typography.Text";
export {
  s as default
};
