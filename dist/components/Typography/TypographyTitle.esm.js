import { jsx as h } from "react/jsx-runtime";
import t from "react";
import { useTypographyStyle as s } from "./_useTypographyStyle.esm.js";
import { TypographyTitleTagMap as i } from "./index.types.esm.js";
import { TypographySize as f } from "../../utils/design/TypographySize.esm.js";
const T = t.memo(
  ({ text: e, as: o = i.h4, ellipsis: r = 0, style: p, semanticColor: n, ...l }) => {
    const m = t.useMemo(() => i[o], [o]), y = t.useMemo(() => f[o], [o]), { fontColor: a, ellipsisStyles: g } = s({ ellipsis: r, semanticColor: n });
    return /* @__PURE__ */ h(
      m,
      {
        style: {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          width: "100%",
          fontSize: y,
          fontFamily: "inherit",
          fontWeight: "bold",
          lineHeight: "inherit",
          textAlign: "inherit",
          color: a,
          ...g,
          ...p
        },
        ...l,
        children: e
      }
    );
  }
);
T.displayName = "Typography.Title";
export {
  T as default
};
