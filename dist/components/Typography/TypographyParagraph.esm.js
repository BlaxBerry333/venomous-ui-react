import { jsx as i } from "react/jsx-runtime";
import m from "react";
import { useTypographyStyle as y } from "./_useTypographyStyle.esm.js";
import { TypographySize as l } from "../../utils/design/TypographySize.esm.js";
const s = m.memo(({ children: o, style: r, ellipsis: t = 0, ...p }) => {
  const { fontColor: e, ellipsisStyles: a } = y({ ellipsis: t });
  return /* @__PURE__ */ i(
    "p",
    {
      style: {
        boxSizing: "border-box",
        margin: 0,
        width: "100%",
        fontSize: l.text,
        lineHeight: 1.5,
        color: e,
        ...a,
        ...r
      },
      ...p,
      children: o
    }
  );
});
s.displayName = "Typography.Paragraph";
export {
  s as default
};
