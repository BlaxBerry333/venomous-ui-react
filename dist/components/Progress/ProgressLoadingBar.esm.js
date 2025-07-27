import { jsx as d } from "react/jsx-runtime";
import e from "react";
import { Theme as m } from "../Theme/index.esm.js";
import { useAnimation as f, motion as l } from "framer-motion";
import { getOpacityHex as p } from "../../utils/tools/get-colors.esm.js";
const x = e.memo(({ height: i = 8 }) => {
  const t = f(), { themeColor: s } = m.useThemeColor(), n = e.useRef(null), [o, c] = e.useState(0);
  return e.useEffect(() => {
    const r = () => {
      if (n.current) {
        const a = n.current.offsetWidth, u = a * 0.3;
        c(a - u);
      }
    };
    return r(), window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e.useEffect(() => {
    if (o === 0) return;
    (async () => {
      for (; ; )
        await t.start({ x: [0, o], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } }), await t.start({ x: [o, 0], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } });
    })();
  }, [t, o]), /* @__PURE__ */ d(
    "div",
    {
      ref: n,
      style: {
        position: "relative",
        width: "100%",
        height: i,
        overflow: "hidden",
        backgroundColor: p(s, 0.2),
        borderRadius: i / 2,
        boxShadow: "rgba(0, 0, 0, 0.14) 0px 6px 10px 0px"
      },
      children: /* @__PURE__ */ d(
        l.div,
        {
          animate: t,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "50%",
            backgroundColor: s,
            borderRadius: i / 2
          }
        }
      )
    }
  );
});
x.displayName = "Progress.LoadingBar";
export {
  x as default
};
