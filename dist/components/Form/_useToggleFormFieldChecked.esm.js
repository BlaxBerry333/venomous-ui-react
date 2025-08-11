import c from "react";
function b({
  checked: s = !1,
  disabled: f = !1,
  onChange: e
}) {
  const r = c.useRef(null), [l, u] = c.useState(s);
  c.useEffect(() => {
    u(!!s);
  }, [s]);
  const a = c.useCallback(
    (t) => {
      u(t.target.checked), e == null || e(t);
    },
    [e]
  ), k = c.useCallback(
    (t) => {
      if (t.preventDefault(), t.stopPropagation(), !f && r.current) {
        const i = !l;
        u(i);
        const o = new Event("change", { bubbles: !0 });
        Object.defineProperty(o, "target", {
          writable: !1,
          value: { ...r.current, checked: i }
        }), e == null || e(o);
      }
    },
    [f, l, e]
  );
  return {
    inputRef: r,
    isChecked: l,
    toggleOriginalIsChecked: a,
    toggleCustomIsChecked: k
  };
}
export {
  b as useToggleFormFieldChecked
};
