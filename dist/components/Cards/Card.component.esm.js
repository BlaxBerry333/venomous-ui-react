import { jsx as A } from "react/jsx-runtime";
import o from "react";
import { clsx as c } from "../../node_modules/clsx/dist/clsx.esm.js";
import d from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as l } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as C } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import { useCardStyles as S } from "./Card.hooks.esm.js";
import { CARD_VARIANT_MAP as E } from "./Card.types.esm.js";
const M = o.memo(
  o.forwardRef(
    ({ className: m, style: t, variant: p = E.CONTAINED, children: i, onClick: r, as: e = "div", ...a }, s) => {
      const N = !!r, { componentStyle: f } = S({ variant: p, clickable: N });
      return /* @__PURE__ */ A(
        d,
        {
          as: e,
          ref: s,
          className: c(C.Card, m),
          style: { ...f, ...t },
          onClick: r,
          ...a,
          children: i
        }
      );
    }
  )
);
M.displayName = l.Card;
export {
  M as default
};
