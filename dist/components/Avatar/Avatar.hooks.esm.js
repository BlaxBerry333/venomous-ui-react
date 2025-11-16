import o from "react";
import { COMPONENT_DISPLAY_NAMES as S } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import f from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import y from "../../hooks/useCustomStyle/index.esm.js";
import { AVATAR_SHAPE_MAP as g } from "./Avatar.types.esm.js";
function z({ shape: n = "circle", width: e = 40 }) {
  const { BackgroundColors: r, BorderColors: m, TypographySizes: i } = f(), c = y({ displayName: S.Avatar }), s = o.useMemo(() => ({
    borderRadius: n === g.CIRCLE ? "50%" : 8
  }), [n]), l = o.useMemo(() => {
    let t;
    return e <= 32 ? t = i.TEXT.CAPTION : e <= 40 ? t = i.TEXT.SMALL : e <= 48 ? t = i.TEXT.BASE : t = i.TEXT.LARGE, {
      width: e,
      height: e,
      minWidth: e,
      minHeight: e,
      fontSize: t
    };
  }, [e, i]), a = o.useMemo(
    () => ({
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }),
    []
  ), u = o.useMemo(
    () => ({
      color: "inherit"
    }),
    []
  ), p = o.useMemo(
    () => ({
      fontSize: e / 2,
      color: "inherit"
    }),
    [e]
  );
  return {
    componentStyle: o.useMemo(
      () => ({
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        // -- default style --
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: r[2],
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: m[1],
        fontWeight: "bold",
        lineHeight: 1,
        textAlign: "center",
        verticalAlign: "middle",
        ...s,
        ...l,
        // -- custom style --
        ...c
      }),
      [r, m, s, l, c]
    ),
    insideImageStyle: a,
    insideIconStyle: u,
    insideTextStyle: p,
    __: {
      DynamicVariantStyles: s,
      DynamicSizeStyles: l
    }
  };
}
function N({ src: n }) {
  const [e, r] = o.useState(!1);
  return o.useEffect(() => {
    r(!1);
  }, [n]), {
    isImageLoadError: e,
    setIsImageError: r
  };
}
export {
  N as useAvatarActions,
  z as useAvatarStyles
};
