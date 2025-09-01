import r from "react";
import s from "../../hooks/useDesign/index.esm.js";
import { SemanticColors as m } from "../../utils/design/colors.esm.js";
import "../../utils/design/Shadow.esm.js";
function y({ ellipsis: e = 0, semanticColor: o }) {
  const t = s(), i = r.useMemo(() => o ? m[o] : t.TextColors.primary, [t, o]), n = r.useMemo(() => e ? {
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
  y as useTypographyStyle
};
