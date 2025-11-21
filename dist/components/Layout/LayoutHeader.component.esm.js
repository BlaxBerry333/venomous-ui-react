import { jsxs as e, jsx as f, Fragment as u } from "react/jsx-runtime";
import o from "react";
import y from "clsx";
import "../Progress/ProgressBar.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as N } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as S } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import L from "../Progress/PageScrollProgressBar.component.esm.js";
import { Space as s } from "../Space/index.esm.js";
import { useLayoutHeaderStyles as x } from "./LayoutHeader.hooks.esm.js";
const A = o.memo(
  o.forwardRef(
    ({
      className: m,
      style: r,
      children: a,
      Logo: i,
      Menu: l,
      showProgressBar: p = !0,
      ProgressBarProps: t,
      ...d
    }, n) => {
      const { componentStyle: c } = x();
      return /* @__PURE__ */ e(
        s.Flex,
        {
          as: "header",
          ref: n,
          className: y(S.LayoutHeader, m),
          style: { ...c, ...r },
          ...d,
          children: [
            p && /* @__PURE__ */ f(
              L,
              {
                disablePortal: !0,
                style: { border: "none", backgroundColor: "transparent", ...t == null ? void 0 : t.style },
                ...t
              }
            ),
            a || /* @__PURE__ */ e(u, { children: [
              i,
              l
            ] })
          ]
        }
      );
    }
  )
);
A.displayName = N.LayoutHeader;
export {
  A as default
};
