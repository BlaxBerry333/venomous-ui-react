import { jsx as h } from "react/jsx-runtime";
import r from "react";
import { clsx as l } from "../../node_modules/clsx/dist/clsx.esm.js";
import { COMPONENT_DISPLAY_NAMES as N } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as g } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { useTypographyParagraphStyles as S } from "./TypographyParagraph.hooks.esm.js";
const c = r.memo(
  r.forwardRef(
    ({ className: o, style: p, text: a, ellipsis: m = 0, size: t = "BASE", weight: e = "normal", color: i, ...y }, s) => {
      const { componentStyle: f } = S({ ellipsis: m, size: t, weight: e, color: i });
      return /* @__PURE__ */ h(
        "p",
        {
          ref: s,
          className: l(g.TypographyParagraph, o),
          style: { ...f, ...p },
          ...y,
          children: a
        }
      );
    }
  )
);
c.displayName = N.TypographyParagraph;
export {
  c as default
};
