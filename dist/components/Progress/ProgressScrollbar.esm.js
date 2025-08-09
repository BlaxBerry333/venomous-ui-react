import { jsx as t } from "react/jsx-runtime";
import s from "clsx";
import i from "react";
import { Theme as m } from "../Theme/index.esm.js";
import { useScroll as l, motion as a } from "framer-motion";
import { getOpacityHex as c, getLighterHex as g } from "../../utils/tools/get-colors.esm.js";
const p = i.memo(({ height: r = 4 }) => {
  const { scrollYProgress: e } = l(), { themeColor: o } = m.useThemeColor();
  return /* @__PURE__ */ t(
    a.div,
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
        backgroundImage: `linear-gradient(45deg, ${c(o, 0.15)} 0%, ${g(o, 0.2)} 90%)`,
        height: r,
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "16px"
      }
    }
  );
});
p.displayName = "Progress.Scrollbar";
export {
  p as default
};
