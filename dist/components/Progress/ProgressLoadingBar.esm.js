import { jsx as d } from "react/jsx-runtime";
import h from "clsx";
import e from "react";
import { Theme as c } from "../Theme/index.esm.js";
import { useAnimation as g, motion as p } from "framer-motion";
import { Shadows as w } from "../../utils/design/Shadow.esm.js";
import { getOpacityHex as m, getLighterHex as x } from "../../utils/tools/get-colors.esm.js";
const v = e.memo(({ height: i = 8 }) => {
  const t = g(), { themeMode: u } = c.useThemeMode(), { themeColor: s } = c.useThemeColor(), a = e.useRef(null), [o, f] = e.useState(0);
  return e.useEffect(() => {
    const r = () => {
      if (a.current) {
        const n = a.current.offsetWidth, l = n * 0.3;
        f(n - l);
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
      ref: a,
      className: h("Venomous-UI-React--Progress.LoadingBar"),
      style: {
        position: "relative",
        width: "100%",
        height: i,
        overflow: "hidden",
        backgroundColor: m(s, 0.2),
        borderRadius: i / 2,
        boxShadow: w[u].tertiary
      },
      children: /* @__PURE__ */ d(
        p.div,
        {
          animate: t,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "50%",
            backgroundImage: `linear-gradient(45deg, ${m(s, 0.15)} 0%, ${x(s, 0.1)} 90%)`,
            borderRadius: i / 2
          }
        }
      )
    }
  );
});
v.displayName = "Progress.LoadingBar";
export {
  v as default
};
