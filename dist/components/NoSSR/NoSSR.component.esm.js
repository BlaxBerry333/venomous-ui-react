import { jsx as m, Fragment as i } from "react/jsx-runtime";
import t from "react";
import { COMPONENT_DISPLAY_NAMES as p } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
const s = t.memo(({ children: r }) => {
  const [o, e] = t.useState(!1);
  return t.useEffect(() => {
    e(!0);
  }, []), o ? /* @__PURE__ */ m(i, { children: r }) : null;
});
s.displayName = p.NoSSR;
export {
  s as default
};
