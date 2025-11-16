import m from "react";
const I = {
  ENTERING: "entering",
  // 进入中
  ENTERED: "entered",
  // 已进入 (完成)
  EXITING: "exiting",
  // 退出中
  EXITED: "exited"
  // 已退出 (完成)
};
function p({
  visible: s,
  duration: N = 200,
  onFinish: o
}) {
  const [a, u] = m.useState(
    s ? I.ENTERED : I.EXITED
  ), c = m.useRef(o);
  return m.useEffect(() => {
    c.current = o;
  }), m.useEffect(() => {
    if (s) {
      u("entering");
      const T = setTimeout(() => {
        var r;
        u("entered"), (r = c.current) == null || r.call(c);
      }, N);
      return () => clearTimeout(T);
    } else {
      u("exiting");
      const T = setTimeout(() => {
        var r;
        u("exited"), (r = c.current) == null || r.call(c);
      }, N);
      return () => clearTimeout(T);
    }
  }, [s, N]), a;
}
function f({
  status: s,
  duration: N,
  getBaseStyle: o,
  getEnteringStyle: a,
  getEnteredStyle: u,
  getExitingStyle: c,
  getExitedStyle: T
}) {
  return m.useMemo(() => {
    const r = (o == null ? void 0 : o()) || {};
    switch (s) {
      case I.ENTERING:
        return {
          ...r,
          opacity: 1,
          ...a == null ? void 0 : a()
        };
      case I.ENTERED:
        return {
          ...r,
          opacity: 1,
          ...u == null ? void 0 : u()
        };
      case I.EXITING:
        return {
          ...r,
          opacity: 0,
          ...c == null ? void 0 : c()
        };
      case I.EXITED:
        return {
          ...r,
          opacity: 0,
          pointerEvents: "none",
          ...T == null ? void 0 : T()
        };
    }
  }, [s, N, o, a, u, c, T]);
}
export {
  I as TRANSITION_STATUS_MAP,
  p as useTransitionState,
  f as useTransitionStateStyles
};
