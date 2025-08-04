import { jsx as m } from "react/jsx-runtime";
import a from "react";
import { LAYOUT_CONTEXT_DEFAULT_VALUE as o, LayoutContext as u } from "./context/context.esm.js";
import d from "../Container/Container.esm.js";
import { BreakPointName as f } from "../../utils/design/ThemeBreakpoint.esm.js";
const l = a.memo(
  ({
    children: i,
    maxBreakpoint: n = f.xl,
    headerHeight: r = o.headerHeight,
    footerHeight: e = o.footerHeight,
    sideWidth: t = o.sideWidth
  }) => {
    const p = a.useMemo(
      () => ({ headerHeight: r, footerHeight: e, sideWidth: t }),
      [r, e, t]
    );
    return (
      // eslint-disable-next-line react-x/no-context-provider
      /* @__PURE__ */ m(u.Provider, { value: p, children: /* @__PURE__ */ m(d, { breakpoint: n, children: i }) })
    );
  }
);
l.displayName = "Layout.Provider";
export {
  l as default
};
