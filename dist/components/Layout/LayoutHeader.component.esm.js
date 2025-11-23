import { jsxs as a, jsx as S, Fragment as d } from "react/jsx-runtime";
import l from "react";
import x from "clsx";
import "../Progress/ProgressBar.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as E } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as M } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import n from "../Progress/PageScrollProgressBar.component.esm.js";
import { Space as s } from "../Space/index.esm.js";
import { useLayoutHeaderStyles as C } from "./LayoutHeader.hooks.esm.js";
const H = l.memo(
  l.forwardRef(
    ({
      className: e,
      style: i,
      children: p,
      renderLogo: m,
      renderActions: o,
      showProgressBar: r = !0,
      ProgressBarProps: t,
      ...f
    }, c) => {
      const { componentStyle: u } = C(), y = m == null ? void 0 : m(), N = o == null ? void 0 : o();
      return /* @__PURE__ */ a(
        s.Flex,
        {
          as: "header",
          ref: c,
          className: x(M.LayoutHeader, e),
          style: { ...u, ...i },
          ...f,
          children: [
            r && /* @__PURE__ */ S(
              n,
              {
                disablePortal: !0,
                style: { border: "none", backgroundColor: "transparent", ...t == null ? void 0 : t.style },
                ...t
              }
            ),
            p || /* @__PURE__ */ a(d, { children: [
              y,
              N
            ] })
          ]
        }
      );
    }
  )
);
H.displayName = E.LayoutHeader;
export {
  H as default
};
