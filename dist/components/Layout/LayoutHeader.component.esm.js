import { jsxs as a, jsx as N, Fragment as d } from "react/jsx-runtime";
import e from "react";
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
import b from "../Progress/PageScrollProgressBar.component.esm.js";
import { Space as h } from "../Space/index.esm.js";
import { useLayoutHeaderStyles as n } from "./LayoutHeader.hooks.esm.js";
const s = e.memo(
  e.forwardRef(
    ({
      className: l,
      style: i,
      children: p,
      renderLogo: m,
      renderActions: o,
      showProgressBar: r = !0,
      ProgressBarProps: t,
      ...f
    }, y) => {
      const { componentStyle: c } = n(), u = m == null ? void 0 : m(), S = o == null ? void 0 : o();
      return /* @__PURE__ */ a(
        h.Flex,
        {
          as: "header",
          ref: y,
          className: x(M.LayoutHeader, l),
          style: { ...c, ...i },
          ...f,
          children: [
            r && /* @__PURE__ */ N(
              b,
              {
                disablePortal: !0,
                style: {
                  borderWidth: 0,
                  borderStyle: "none",
                  backgroundColor: "transparent",
                  ...t == null ? void 0 : t.style
                },
                ...t
              }
            ),
            p || /* @__PURE__ */ a(d, { children: [
              u,
              S
            ] })
          ]
        }
      );
    }
  )
);
s.displayName = E.LayoutHeader;
export {
  s as default
};
