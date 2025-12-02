import { jsxs as a, jsx as d, Fragment as h } from "react/jsx-runtime";
import r from "react";
import C from "clsx";
import "../Progress/ProgressBar.component.esm.js";
import { COMPONENT_DISPLAY_NAMES as e } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import { COMPONENT_CLASSNAME_NAMES as x } from "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import E from "../Progress/PageScrollProgressBar.component.esm.js";
import { Space as H } from "../Space/index.esm.js";
import M from "../../hooks/useCustomComponentProps/index.esm.js";
import { useLayoutHeaderStyles as b } from "./LayoutHeader.hooks.esm.js";
const w = r.memo(
  r.forwardRef(
    ({
      className: p,
      style: s,
      children: l,
      renderLogo: o,
      renderActions: m,
      showProgressBar: i,
      ProgressBarProps: t,
      ...u
    }, c) => {
      const y = M({
        displayName: e.LayoutHeader
      }), f = i ?? y.showProgressBar ?? !0, { componentStyle: n } = b(), N = o == null ? void 0 : o(), S = m == null ? void 0 : m();
      return /* @__PURE__ */ a(
        H.Flex,
        {
          as: "header",
          ref: c,
          className: C(x.LayoutHeader, p),
          style: { ...n, ...s },
          ...u,
          children: [
            f && /* @__PURE__ */ d(
              E,
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
            l || /* @__PURE__ */ a(h, { children: [
              N,
              S
            ] })
          ]
        }
      );
    }
  )
);
w.displayName = e.LayoutHeader;
export {
  w as default
};
