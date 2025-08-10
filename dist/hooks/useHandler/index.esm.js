import s from "react";
function r(t = !1) {
  const [a, e] = s.useState(t), l = s.useCallback(() => e(!0), []), n = s.useCallback(() => e(!1), []), o = s.useCallback(() => e((c) => !c), []);
  return {
    isOpen: a,
    setIsOpen: e,
    open: l,
    close: n,
    toggle: o
  };
}
export {
  r as default
};
