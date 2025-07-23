import s from "react";
function u() {
  const [t, e] = s.useState(!1), a = s.useCallback(() => e(!0), []), l = s.useCallback(() => e(!1), []), n = s.useCallback(() => e((o) => !o), []);
  return {
    isOpen: t,
    setIsOpen: e,
    open: a,
    close: l,
    toggle: n
  };
}
export {
  u as default
};
