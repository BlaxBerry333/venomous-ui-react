import { jsx as d } from "react/jsx-runtime";
import e from "react";
import { Theme as c } from "../Theme/index.esm.js";
import { useAnimation as h, motion as p } from "framer-motion";
import { ThemeShadow as w } from "../../utils/design/ThemeShadow.esm.js";
import { getOpacityHex as m, getLighterHex as g } from "../../utils/tools/get-colors.esm.js";
const x = e.memo(({ height: i = 8 }) => {
  const t = h(), { themeMode: u } = c.useThemeMode(), { themeColor: n } = c.useThemeColor(), a = e.useRef(null), [o, f] = e.useState(0);
  return e.useEffect(() => {
    const r = () => {
      if (a.current) {
        const s = a.current.offsetWidth, l = s * 0.3;
        f(s - l);
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
      style: {
        position: "relative",
        width: "100%",
        height: i,
        overflow: "hidden",
        backgroundColor: m(n, 0.2),
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
            backgroundImage: `linear-gradient(45deg, ${m(n, 0.15)} 0%, ${g(n, 0.1)} 90%)`,
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
