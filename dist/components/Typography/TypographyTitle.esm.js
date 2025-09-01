import { jsx as h } from "react/jsx-runtime";
import T from "clsx";
import t from "react";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import { TYPOGRAPHY_SIZES as f } from "../../utils/design/TypographySize.esm.js";
import { useTypographyStyle as c } from "./_useTypographyStyle.esm.js";
import { TypographyTitleTagMap as i } from "./index.types.esm.js";
const d = t.memo(
  ({ text: e, as: o = i.h4, ellipsis: r = 0, className: m, style: p, semanticColor: l, ...n }) => {
    const a = t.useMemo(() => i[o], [o]), s = t.useMemo(() => f[o], [o]), { fontColor: y, ellipsisStyles: g } = c({ ellipsis: r, semanticColor: l });
    return /* @__PURE__ */ h(
      a,
      {
        className: T("Venomous-UI-React--Typography.Title", m),
        style: {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          width: "100%",
          fontSize: s,
          fontFamily: "inherit",
          fontWeight: "bold",
          lineHeight: "inherit",
          textAlign: "inherit",
          color: y,
          ...g,
          ...p
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
