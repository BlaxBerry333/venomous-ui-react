import t from "react";
function v({
  disabled: e = !1,
  onMouseEnter: f,
  onMouseLeave: s,
  onLeaveCallback: r
}) {
  const [u, c] = t.useState(!1);
  t.useEffect(() => {
    e && u && c(!1);
  }, [e, u]);
  const E = t.useCallback(
    (n) => {
      e || c(!0), f && f(n);
    },
    [e, f]
  ), i = t.useCallback(
    (n) => {
      e || (c(!1), r && r()), s && s(n);
    },
    [e, s, r]
  );
  return {
    isHovered: u,
    MouseEnterEvent: E,
    MouseLeaveEvent: i
  };
}
export {
  v as default
};
