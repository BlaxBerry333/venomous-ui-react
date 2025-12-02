import { jsx as f, jsxs as M } from "react/jsx-runtime";
import d from "react";
import o from "clsx";
import P from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as A } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as r } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import { SEMANTIC_COLORS as O } from "../../constants/designs/SEMANTIC_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import { Typography as N } from "../Typographies/index.esm.js";
import R from "../../hooks/useCustomComponentProps/index.esm.js";
import { useBadgeStyles as u } from "./Badge.hooks.esm.js";
import { BADGE_VARIANT_MAP as T, BADGE_PLACEMENT_MAP as v } from "./Badge.types.esm.js";
const I = d.memo(
  d.forwardRef(
    ({
      className: e,
      style: m,
      children: s,
      text: E,
      variant: g,
      placement: x,
      offset: S,
      color: B,
      ...a
    }, i) => {
      const t = R({
        displayName: A.Badge
      }), n = E ?? t.text, p = g ?? t.variant ?? T.TEXT, C = x ?? t.placement ?? v.TOP_RIGHT, _ = S ?? t.offset ?? 65, y = B ?? t.color ?? O.ERROR, c = !s, { componentStyle: l } = u({ variant: p, placement: C, offset: _, color: y, isStandalone: c });
      return c ? /* @__PURE__ */ f(
        N.Text,
        {
          as: "strong",
          ref: i,
          className: o(r.Badge, e),
          style: { ...l, ...m },
          text: String(n || ""),
          ...a
        }
      ) : /* @__PURE__ */ M(
        P,
        {
          as: "div",
          className: o(r.BadgeContainer),
          style: { position: "relative", display: "inline-block" },
          children: [
            /* @__PURE__ */ f(
              N.Text,
              {
                as: "strong",
                ref: i,
                className: o(r.Badge, e),
                style: { ...l, ...m },
                text: p === T.TEXT ? String(n || "") : "",
                ...a
              }
            ),
            s
          ]
        }
      );
    }
  )
);
I.displayName = A.Badge;
export {
  I as default
};
