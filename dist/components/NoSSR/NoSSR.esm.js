import { jsx as o, Fragment as a } from "react/jsx-runtime";
import e from "react";
const m = e.memo(({ children: t }) => {
  const [r, s] = e.useState(!1);
  return e.useEffect(() => {
    s(!0);
  }, []), r ? /* @__PURE__ */ o(a, { children: t }) : null;
});
m.displayName = "NoSSR";
export {
  m as default
};
