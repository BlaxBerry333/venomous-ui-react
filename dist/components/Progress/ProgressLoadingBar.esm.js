import { jsx as d } from "react/jsx-runtime";
import g from "clsx";
import e from "react";
import "../../utils/design/colors.esm.js";
import { Shadows as w } from "../../utils/design/Shadow.esm.js";
import { getOpacityHex as m, getLighterHex as x } from "../../utils/tools/get-colors.esm.js";
import { Theme as c } from "../Theme/index.esm.js";
import { useAnimation as v, motion as b } from "framer-motion";
const y = e.memo(({ height: i = 8, className: u, style: f }) => {
  const t = v(), { themeMode: l } = c.useThemeMode(), { themeColor: s } = c.useThemeColor(), a = e.useRef(null), [o, h] = e.useState(0);
  return e.useEffect(() => {
    const r = () => {
      if (a.current) {
        const n = a.current.offsetWidth, p = n * 0.3;
        h(n - p);
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
      className: g("Venomous-UI-React--Progress.LoadingBar", u),
      style: {
        position: "relative",
        width: "100%",
        height: i,
        overflow: "hidden",
        backgroundColor: m(s, 0.2),
        borderRadius: i / 2,
        boxShadow: w[l].tertiary,
        ...f
      },
      children: /* @__PURE__ */ d(
        b.div,
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
y.displayName = "Progress.LoadingBar";
export {
  y as default
};
