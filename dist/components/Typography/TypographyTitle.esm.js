import { jsx as g } from "react/jsx-runtime";
import t from "react";
import { useTypographyStyle as s } from "./_useTypographyStyle.esm.js";
import { TypographySize as f } from "../../utils/design/TypographySize.esm.js";
const e = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, c = t.memo(
  ({ text: i, as: o = e.h4, ellipsis: h = 0, style: r, semanticColor: n, ...p }) => {
    const l = t.useMemo(() => e[o], [o]), m = t.useMemo(() => f[o], [o]), { fontColor: y, ellipsisStyles: a } = s({ ellipsis: h, semanticColor: n });
    return /* @__PURE__ */ g(
      l,
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          width: "100%",
          fontSize: m,
          fontFamily: "inherit",
          fontWeight: "bold",
          lineHeight: "inherit",
          textAlign: "inherit",
          color: y,
          ...a,
          ...r
        },
        ...p,
        children: i
      }
    );
  }
);
c.displayName = "Typography.Title";
export {
  c as default
};
