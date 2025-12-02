import { jsx as A } from "react/jsx-runtime";
import t from "react";
import l from "clsx";
import S from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as m } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as u } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import E from "../../hooks/useCustomComponentProps/index.esm.js";
import { useCardStyles as M } from "./Card.hooks.esm.js";
import { CARD_VARIANT_MAP as P } from "./Card.types.esm.js";
const _ = t.memo(
  t.forwardRef(
    ({ className: a, style: s, variant: p, children: i, onClick: o, as: e, ...n }, N) => {
      const r = E({
        displayName: m.Card
      }), c = p ?? r.variant ?? P.CONTAINED, f = e ?? r.as ?? "div", C = !!o, { componentStyle: d } = M({ variant: c, clickable: C });
      return /* @__PURE__ */ A(
        S,
        {
          as: f,
          ref: N,
          className: l(u.Card, a),
          style: { ...d, ...s },
          onClick: o,
          ...n,
          children: i
        }
      );
    }
  )
);
_.displayName = m.Card;
export {
  _ as default
};
