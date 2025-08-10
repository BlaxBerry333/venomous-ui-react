import { jsx as h } from "react/jsx-runtime";
import T from "clsx";
import t from "react";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { TypographySize as f } from "../../utils/design/TypographySize.esm.js";
import { useTypographyStyle as c } from "./_useTypographyStyle.esm.js";
import { TypographyTitleTagMap as i } from "./index.types.esm.js";
const d = t.memo(
  ({ text: e, as: o = i.h4, ellipsis: r = 0, className: p, style: m, semanticColor: l, ...n }) => {
    const a = t.useMemo(() => i[o], [o]), y = t.useMemo(() => f[o], [o]), { fontColor: s, ellipsisStyles: g } = c({ ellipsis: r, semanticColor: l });
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
        children: e
      }
    );
  }
);
d.displayName = "Typography.Title";
export {
  d as default
};
