import t from "react";
function i({
  disabled: e = !1,
  onMouseDown: f,
  onMouseUp: s
}) {
  const [c, u] = t.useState(!1);
  t.useEffect(() => {
    e && c && u(!1);
  }, [e, c]);
  const l = t.useCallback(
    (a) => {
      e || u(!0), f && f(a);
    },
    [e, f]
  ), n = t.useCallback(
    (a) => {
      e || u(!1), s && s(a);
    },
    [e, s]
  );
  return {
    isClicked: c,
    MouseDownEvent: l,
    MouseUpEvent: n
  };
}
export {
  i as default
};
