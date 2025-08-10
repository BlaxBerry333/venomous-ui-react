import { jsx as t } from "react/jsx-runtime";
import s from "clsx";
import i from "react";
import "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import { getOpacityHex as m, getLighterHex as l } from "../../utils/tools/get-colors.esm.js";
import { Theme as a } from "../Theme/index.esm.js";
import { useScroll as p, motion as c } from "framer-motion";
const g = i.memo(({ height: r = 4 }) => {
  const { scrollYProgress: e } = p(), { themeColor: o } = a.useThemeColor();
  return /* @__PURE__ */ t(
    c.div,
    {
      className: s("Venomous-UI-React--Progress.Scrollbar"),
      style: {
        scaleX: e,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        originX: 0,
        zIndex: 1e4,
        backgroundImage: `linear-gradient(45deg, ${m(o, 0.15)} 0%, ${l(o, 0.1)} 90%)`,
        height: r,
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "16px"
      }
    }
  );
});
g.displayName = "Progress.Scrollbar";
export {
  g as default
};
