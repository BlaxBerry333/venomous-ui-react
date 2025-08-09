import { jsx as h } from "react/jsx-runtime";
import T from "clsx";
import t from "react";
import { useTypographyStyle as f } from "./_useTypographyStyle.esm.js";
import { TypographyTitleTagMap as e } from "./index.types.esm.js";
import { TypographySize as c } from "../../utils/design/TypographySize.esm.js";
const d = t.memo(
  ({ text: i, as: o = e.h4, ellipsis: r = 0, className: p, style: m, semanticColor: l, ...n }) => {
    const a = t.useMemo(() => e[o], [o]), y = t.useMemo(() => c[o], [o]), { fontColor: s, ellipsisStyles: g } = f({ ellipsis: r, semanticColor: l });
    return /* @__PURE__ */ h(
      a,
      {
        className: T("Venomous-UI-React--Typography.Title", p),
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
          color: s,
          ...g,
          ...m
        },
        ...n,
        children: i
      }
    );
  }
);
d.displayName = "Typography.Title";
export {
  d as default
};
