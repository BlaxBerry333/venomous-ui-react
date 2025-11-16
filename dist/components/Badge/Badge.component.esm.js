import { jsx as T, jsxs as g } from "react/jsx-runtime";
import f from "react";
import { clsx as o } from "../../node_modules/clsx/dist/clsx.esm.js";
import _ from "../Box/Box.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as c } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as t } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import { SEMANTIC_COLORS as B } from "../../constants/designs/SEMANTIC_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import { Typography as A } from "../Typographies/index.esm.js";
import { useBadgeStyles as M } from "./Badge.hooks.esm.js";
import { BADGE_VARIANT_MAP as E, BADGE_PLACEMENT_MAP as x } from "./Badge.types.esm.js";
const y = f.memo(
  f.forwardRef(
    ({
      className: r,
      style: m,
      children: e,
      text: i,
      variant: s = E.TEXT,
      placement: N = x.TOP_RIGHT,
      offset: d = 65,
      color: S = B.ERROR,
      ...a
    }, p) => {
      const n = !e, { componentStyle: l } = M({ variant: s, placement: N, offset: d, color: S, isStandalone: n });
      return n ? /* @__PURE__ */ T(
        A.Text,
        {
          as: "strong",
          ref: p,
          className: o(t.Badge, r),
          style: { ...l, ...m },
          text: String(i || ""),
          ...a
        }
      ) : /* @__PURE__ */ g(
        _,
        {
          as: "div",
          className: o(t.BadgeContainer),
          style: { position: "relative", display: "inline-block" },
          children: [
            /* @__PURE__ */ T(
              A.Text,
              {
                as: "strong",
                ref: p,
                className: o(t.Badge, r),
                style: { ...l, ...m },
                text: s === E.TEXT ? String(i || "") : "",
                ...a
              }
            ),
            e
          ]
        }
      );
    }
  )
);
y.displayName = c.Badge;
export {
  y as default
};
