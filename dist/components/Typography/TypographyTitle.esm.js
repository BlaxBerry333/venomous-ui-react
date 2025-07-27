import { jsx as a } from "react/jsx-runtime";
import t from "react";
import { useTypographyStyle as g } from "./_useTypographyStyle.esm.js";
import { TypographySize as s } from "../../utils/design/TypographySize.esm.js";
const e = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, f = t.memo(({ text: i, as: o = e.h4, ellipsis: h = 0, style: r, ...n }) => {
  const p = t.useMemo(() => e[o], [o]), l = t.useMemo(() => s[o], [o]), { fontColor: m, ellipsisStyles: y } = g({ ellipsis: h });
  return /* @__PURE__ */ a(
    p,
    {
      style: {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        width: "100%",
        fontSize: l,
        fontFamily: "inherit",
        fontWeight: "bold",
        lineHeight: "inherit",
        textAlign: "inherit",
        color: m,
        ...y,
        ...r
      },
      ...n,
      children: i
    }
  );
});
f.displayName = "Typography.Title";
export {
  f as default
};
