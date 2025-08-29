import { jsx as m } from "react/jsx-runtime";
import a from "react";
import d from "../Container/Container.esm.js";
import { LAYOUT_CONTEXT_DEFAULT_VALUE as o, LayoutContext as p } from "./context/context.esm.js";
const s = a.memo(
  ({
    children: i,
    maxBreakpoint: n,
    headerHeight: r = o.headerHeight,
    footerHeight: e = o.footerHeight,
    sideWidth: t = o.sideWidth
  }) => {
    const u = a.useMemo(
      () => ({ headerHeight: r, footerHeight: e, sideWidth: t }),
      [r, e, t]
    );
    return /* @__PURE__ */ m(p.Provider, { value: u, children: /* @__PURE__ */ m(d, { maxBreakpoint: n, children: i }) });
  }
);
s.displayName = "Layout.Provider";
export {
  s as default
};
