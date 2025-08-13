import { jsx as r } from "react/jsx-runtime";
import p from "clsx";
import l from "react";
import { Transitions as m } from "../Transition/index.esm.js";
import { useLayoutContext as d } from "./context/hooks.esm.js";
const n = l.memo(
  ({ className: e, style: t, collapsedSideWidth: i = 0, renderContent: s }) => {
    const { headerHeight: o, sideWidth: a } = d();
    return /* @__PURE__ */ r(
      m.CollapseSide,
      {
        storageKey: "VENOMOUS_UI__LAYOUT_COLLAPSE_SIDE",
        expandSideWidth: a,
        collapsedSideWidth: i,
        renderContent: s,
        className: p("Venomous-UI-React--Layout.CollapseSide", e),
        style: {
          boxSizing: "border-box",
          height: `calc(100svh - ${o}px)`,
          position: "sticky",
          top: `${o}px`,
          left: 0,
          zIndex: 1,
          ...t
        }
      }
    );
  }
);
n.displayName = "Layout.CollapseSide";
export {
  n as default
};
