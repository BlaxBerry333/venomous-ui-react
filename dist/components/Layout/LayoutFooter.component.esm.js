import { jsx as N, jsxs as S, Fragment as e } from "react/jsx-runtime";
import m from "react";
import u from "clsx";
import { Space as F } from "../Space/index.esm.js";
import { COMPONENT_DISPLAY_NAMES as x } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as y } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import { useLayoutFooterStyles as A } from "./LayoutFooter.hooks.esm.js";
const E = m.memo(
  m.forwardRef(
    ({
      className: a,
      style: p,
      children: r,
      renderCopyright: o,
      renderLinks: t,
      ...s
    }, c) => {
      const { componentStyle: f } = A(), l = o == null ? void 0 : o(), i = t == null ? void 0 : t();
      return /* @__PURE__ */ N(
        F.Flex,
        {
          as: "footer",
          ref: c,
          className: u(y.LayoutFooter, a),
          style: { ...f, ...p },
          ...s,
          children: r || /* @__PURE__ */ S(e, { children: [
            l,
            i
          ] })
        }
      );
    }
  )
);
E.displayName = x.LayoutFooter;
export {
  E as default
};
