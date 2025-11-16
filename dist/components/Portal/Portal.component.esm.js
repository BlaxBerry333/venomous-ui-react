import { jsx as m, Fragment as i } from "react/jsx-runtime";
import o from "react";
import { createPortal as n } from "react-dom";
import { COMPONENT_DISPLAY_NAMES as p } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
const u = o.memo(({ children: e, containerId: r }) => {
  const t = o.useMemo(() => typeof document > "u" ? null : r ? document.getElementById(r) : document.body, [r]);
  return t ? /* @__PURE__ */ m(i, { children: n(e, t) }) : null;
});
u.displayName = p.Portal;
export {
  u as default
};
