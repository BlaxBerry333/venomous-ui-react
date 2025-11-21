import { jsx as f, jsxs as l, Fragment as c } from "react/jsx-runtime";
import o from "react";
import N from "clsx";
import { Space as n } from "../Space/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as y } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as S } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { useLayoutFooterStyles as u } from "./LayoutFooter.hooks.esm.js";
const F = o.memo(
  o.forwardRef(
    ({
      className: r,
      style: t,
      children: m,
      Copyright: e,
      Links: p,
      ...a
    }, i) => {
      const { componentStyle: s } = u();
      return /* @__PURE__ */ f(
        n.Flex,
        {
          as: "footer",
          ref: i,
          className: N(S.LayoutFooter, r),
          style: { ...s, ...t },
          ...a,
          children: m || /* @__PURE__ */ l(c, { children: [
            e,
            p
          ] })
        }
      );
    }
  )
);
F.displayName = y.LayoutFooter;
export {
  F as default
};
