import { jsx as a } from "react/jsx-runtime";
import e from "react";
import { Theme as l } from "../Theme/index.esm.js";
import f from "../../utils/get-colors/index.esm.js";
import { Colors as p } from "../../utils/colors/index.esm.js";
import { useAnimation as x, motion as w } from "framer-motion";
const h = e.memo(({ height: i = 8, color: d }) => {
  const o = x(), { themeColor: c } = l.useThemeColor(), s = e.useRef(null), [t, u] = e.useState(0);
  return e.useEffect(() => {
    const r = () => {
      if (s.current) {
        const n = s.current.offsetWidth, m = n * 0.3;
        u(n - m);
      }
    };
    return r(), window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e.useEffect(() => {
    if (t === 0) return;
    (async () => {
      for (; ; )
        await o.start({ x: [0, t], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } }), await o.start({ x: [t, 0], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } });
    })();
  }, [o, t]), /* @__PURE__ */ a(
    "div",
    {
      ref: s,
      style: {
        position: "relative",
        width: "100%",
        height: i,
        overflow: "hidden",
        backgroundColor: f(p.disabled).opacity,
        borderRadius: i / 2,
        boxShadow: "rgba(0, 0, 0, 0.14) 0px 6px 10px 0px"
      },
      children: /* @__PURE__ */ a(
        w.div,
        {
          animate: o,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "50%",
            backgroundColor: d || c,
            borderRadius: i / 2
          }
        }
      )
    }
  );
});
h.displayName = "Progress.LoadingBar";
export {
  h as default
};
