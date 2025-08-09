import { jsx as h } from "react/jsx-runtime";
import g from "clsx";
import r from "react";
import { useTypographyStyle as x } from "./_useTypographyStyle.esm.js";
import { TypographyTextTagMap as e } from "./index.types.esm.js";
import { TypographySize as t, TypographySizeName as s } from "../../utils/design/TypographySize.esm.js";
const T = r.memo(
  ({ className: p, style: a, text: m, as: o = e.span, isEllipsis: l = !1, semanticColor: n, ...y }) => {
    const { fontColor: i, ellipsisStyles: c } = x({ ellipsis: l ? 1 : 0, semanticColor: n }), f = r.useMemo(() => o === e.strong ? "bold" : "normal", [o]), u = r.useMemo(() => {
      switch (o) {
        case e.strong:
          return t[s.strong];
        case e.small:
          return t[s.small];
        case e.span:
        default:
          return t[s.text];
      }
    }, [o]);
    return /* @__PURE__ */ h(
      o,
      {
        className: g("Venomous-UI-React--Typography.Text", p),
        style: {
          fontSize: u,
          fontWeight: f,
          color: i,
          ...c,
          ...a
        },
        ...y,
        children: m
      }
    );
  }
);
T.displayName = "Typography.Text";
export {
  T as default
};
