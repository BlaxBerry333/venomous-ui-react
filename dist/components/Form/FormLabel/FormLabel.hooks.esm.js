import m from "react";
import { COMPONENT_DISPLAY_NAMES as p } from "../../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../../constants/designs/BORDER_COLORS.esm.js";
import { SEMANTIC_COLORS as s } from "../../../constants/designs/SEMANTIC_COLORS.esm.js";
import "../../../constants/designs/SHADOW_STYLES.esm.js";
import "../../../constants/designs/TEXT_COLORS.esm.js";
import "../../../constants/designs/THEME_BREAKPOINTS.esm.js";
import u from "../../../hooks/useThemeDesigns/index.esm.js";
import "../../Theme/ThemeProvider.context.esm.js";
import c from "../../../hooks/useCustomStyle/index.esm.js";
function L({ disabled: o, isError: r }) {
  const { TextColors: t } = u(), e = c({ displayName: p.FormLabel }), i = m.useMemo(() => o ? t.disabled : r ? s.ERROR : t[2], [o, r, t.disabled]), n = m.useMemo(() => o ? "not-allowed" : "pointer", [o]);
  return {
    componentStyle: e,
    __: {
      DynamicColor: i,
      DynamicCursor: n
    }
  };
}
export {
  L as useFormLabelStyles
};
