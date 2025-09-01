import r from "react";
import p from "../../hooks/useDesign/index.esm.js";
import { SEMANTIC_COLORS as m } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
import "../../utils/design/ThemeBreakpoint.esm.js";
import "../../utils/design/TypographySize.esm.js";
function a({ ellipsis: e = 0, semanticColor: t }) {
  const o = p(), i = r.useMemo(() => t ? m[t] : o.TextColors.primary, [o, t]), n = r.useMemo(() => e ? {
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: e,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  } : {}, [e]);
  return {
    fontColor: i,
    ellipsisStyles: n
  };
}
export {
  a as useTypographyStyle
};
