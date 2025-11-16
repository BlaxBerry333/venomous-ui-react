import o from "react";
function i({ distance: t = 300, onClick: s }) {
  const [l, n] = o.useState(!1);
  o.useEffect(() => {
    const e = () => {
      const u = window.scrollY || document.documentElement.scrollTop;
      n(u > t);
    };
    return window.addEventListener("scroll", e, { passive: !0 }), e(), () => window.removeEventListener("scroll", e);
  }, [t]);
  const r = o.useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []), c = o.useCallback(
    (e) => {
      r(), s == null || s(e);
    },
    [r, s]
  );
  return o.useMemo(
    () => ({
      isVisible: l,
      handleClick: c
    }),
    [l, c]
  );
}
export {
  i as useScrollToTopActions
};
