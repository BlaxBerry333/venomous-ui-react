import { jsx as g } from "react/jsx-runtime";
import t from "react";
import { useTypographyStyle as s, _defaultTypographyColor as f } from "./_useTypographyStyle.esm.js";
import { TypographySize as d } from "../../utils/sizes/index.esm.js";
const e = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
}, T = t.memo(
  ({ text: i, as: o = e.h4, color: r = f, ellipsis: h = 0, style: n, ...p }) => {
    const l = t.useMemo(() => e[o], [o]), m = t.useMemo(() => d[o], [o]), { fontColor: y, ellipsisStyles: a } = s({ color: r, ellipsis: h });
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
          ...n
        },
        ...p,
        children: i
      }
    );
  }
);
T.displayName = "Typography.Title";
export {
  T as default
};
