import s from "react";
function l() {
  const [t, e] = s.useState(!1), u = s.useCallback(() => {
    e(!0);
  }, []), a = s.useCallback(() => {
    e(!1);
  }, []);
  return {
    isFocused: t,
    setIsFocused: e,
    handleFocus: u,
    handleBlur: a
  };
}
export {
  l as default
};
