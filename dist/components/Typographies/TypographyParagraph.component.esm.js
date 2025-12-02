import { jsx as P } from "react/jsx-runtime";
import r from "react";
import S from "clsx";
import { COMPONENT_DISPLAY_NAMES as p } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as T } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import u from "../../hooks/useCustomComponentProps/index.esm.js";
import { useTypographyParagraphStyles as A } from "./TypographyParagraph.hooks.esm.js";
const C = r.memo(
  r.forwardRef(
    ({
      className: t,
      style: a,
      text: s,
      ellipsis: m,
      size: e,
      weight: i,
      color: l,
      ...c
    }, n) => {
      const o = u({
        displayName: p.TypographyParagraph
      }), y = m ?? o.ellipsis ?? 0, h = e ?? o.size ?? "BASE", g = i ?? o.weight ?? "normal", f = l ?? o.color, { componentStyle: N } = A({ ellipsis: y, size: h, weight: g, color: f });
      return /* @__PURE__ */ P(
        "p",
        {
          ref: n,
          className: S(T.TypographyParagraph, t),
          style: { ...N, ...a },
          ...c,
          children: s
        }
      );
    }
  )
);
C.displayName = p.TypographyParagraph;
export {
  C as default
};
