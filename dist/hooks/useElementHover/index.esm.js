import e from "react";
function c({ isDisabled: a }) {
  const [t, s] = e.useState(!1), o = e.useCallback(() => {
    s(!0);
  }, []), l = e.useCallback(() => {
    s(!1);
  }, []), n = e.useCallback(() => {
    s(!1);
  }, []);
  return e.useEffect(() => {
    a && s(!1);
  }, [a]), {
    isHovering: t,
    handleMouseDown: o,
    handleMouseUp: l,
    handleMouseLeave: n
  };
}
export {
  c as default
};
