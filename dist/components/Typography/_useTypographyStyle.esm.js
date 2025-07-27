import t from "react";
import { Theme as m } from "../Theme/index.esm.js";
import { TextColors as n } from "../../utils/design/colors.esm.js";
function u({ ellipsis: e = 0 }) {
  const { themeMode: o } = m.useThemeMode(), r = t.useMemo(() => n[o].primary, [o]), i = t.useMemo(() => e ? {
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: e,
    WebkitBoxOrient: "vertical",
    overflow: "hidden"
  } : {}, [e]);
  return {
    fontColor: r,
    ellipsisStyles: i
  };
}
export {
  u as useTypographyStyle
};
