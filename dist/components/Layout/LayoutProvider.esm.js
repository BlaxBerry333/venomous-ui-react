import { jsx as m } from "react/jsx-runtime";
import i from "react";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { BreakPointName as u } from "../../utils/design/ThemeBreakpoint.esm.js";
import d from "../Container/Container.esm.js";
import { LAYOUT_CONTEXT_DEFAULT_VALUE as o, LayoutContext as f } from "./context/context.esm.js";
const l = i.memo(
  ({
    children: a,
    maxBreakpoint: n = u.xl,
    headerHeight: r = o.headerHeight,
    footerHeight: t = o.footerHeight,
    sideWidth: e = o.sideWidth
  }) => {
    const p = i.useMemo(
      () => ({ headerHeight: r, footerHeight: t, sideWidth: e }),
      [r, t, e]
    );
    return /* @__PURE__ */ m(f.Provider, { value: p, children: /* @__PURE__ */ m(d, { maxBreakpoint: n, children: a }) });
  }
);
l.displayName = "Layout.Provider";
export {
  l as default
};
