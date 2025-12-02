import { jsx as l } from "react/jsx-runtime";
import t from "react";
import f from "clsx";
import { COMPONENT_DISPLAY_NAMES as p } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as N } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import x from "../../hooks/useCustomComponentProps/index.esm.js";
import { useTypographyTextStyles as g } from "./TypographyText.hooks.esm.js";
const S = t.memo(
  t.forwardRef(
    ({ className: m, style: s, as: e, text: a, color: c, ...i }, n) => {
      const o = x({
        displayName: p.TypographyText
      }), r = e ?? o.as ?? "span", y = c ?? o.color, { componentStyle: T } = g({ as: r, color: y });
      return /* @__PURE__ */ l(
        r,
        {
          ref: n,
          className: f(N.TypographyText, m),
          style: { ...T, ...s },
          ...i,
          children: a
        }
      );
    }
  )
);
S.displayName = p.TypographyText;
export {
  S as default
};
