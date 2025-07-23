import { jsx as m, Fragment as i } from "react/jsx-runtime";
import e from "react";
import { createPortal as s } from "react-dom";
const c = e.memo(({ children: n, targetElementID: t }) => {
  const [r, a] = e.useState(null);
  return e.useEffect(() => {
    const o = document.getElementById(t);
    o && a(o);
  }, [t]), r ? s(/* @__PURE__ */ m(i, { children: n }), r, t) : null;
});
c.displayName = "PortalRender";
export {
  c as default
};
