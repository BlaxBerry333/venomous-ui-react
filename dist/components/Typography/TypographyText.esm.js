import { jsx as h } from "react/jsx-runtime";
import x from "clsx";
import r from "react";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import { TYPOGRAPHY_SIZES as e, TYPOGRAPHY_SIZE_NAME as s } from "../../utils/design/TypographySize.esm.js";
import { useTypographyStyle as T } from "./_useTypographyStyle.esm.js";
import { TypographyTextTagMap as t } from "./index.types.esm.js";
const g = r.memo(
  ({ className: p, style: m, text: a, as: o = t.span, isEllipsis: l = !1, semanticColor: n, ...i }) => {
    const { fontColor: c, ellipsisStyles: y } = T({ ellipsis: l ? 1 : 0, semanticColor: n }), f = r.useMemo(() => o === t.strong ? "bold" : "normal", [o]), u = r.useMemo(() => {
      switch (o) {
        case t.strong:
          return e[s.strong];
        case t.small:
          return e[s.small];
        case t.span:
        default:
          return e[s.text];
      }
    }, [o]);
    return /* @__PURE__ */ h(
      o,
      {
        className: x("Venomous-UI-React--Typography.Text", p),
        style: {
          fontSize: u,
          fontWeight: f,
          color: c,
          ...y,
          ...m
        },
        ...i,
        children: a
      }
    );
  }
);
g.displayName = "Typography.Text";
export {
  g as default
};
