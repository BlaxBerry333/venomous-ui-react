import e from "react";
import { COMPONENT_DISPLAY_NAMES as x } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import S from "../../hooks/useThemeDesigns/index.esm.js";
import C from "../../hooks/useThemeMode/index.esm.js";
import { isLightColor as M } from "../../tools/colors/get-colors.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import h from "../../hooks/useCustomStyle/index.esm.js";
import { CHAT_BUBBLE_PLACEMENT_MAP as y } from "./ChatBubble.types.esm.js";
function v({ placement: s = "left", maxWidth: t = "75%" }) {
  const { isDarkMode: r } = C(), { BackgroundColors: l, TextColors: i, PaletteColors: m } = S(), a = h({ displayName: x.ChatBubble }), o = s === y.RIGHT, n = e.useMemo(() => o ? m[1] : r ? l[3] : l[2], [o, m, r, l]), f = e.useMemo(() => M(n, 0.6) ? "#1a1a1a" : "#ffffff", [n]), p = e.useMemo(
    () => ({
      boxSizing: "border-box",
      display: "flex",
      flexDirection: o ? "row-reverse" : "row",
      alignItems: "flex-start",
      gap: 8,
      maxWidth: typeof t == "number" ? `${t}px` : t,
      alignSelf: o ? "flex-end" : "flex-start"
    }),
    [o, t]
  ), u = e.useMemo(() => o ? "transparent" : r ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)", [o, r]), d = e.useMemo(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      position: "relative",
      padding: "10px 14px",
      borderRadius: 16,
      // Adjust border radius based on placement
      ...o ? { borderBottomRightRadius: 4 } : { borderBottomLeftRadius: 4 },
      wordBreak: "break-word",
      lineHeight: 1.5,
      fontSize: 14,
      backgroundColor: n,
      color: f,
      border: `1px solid ${u}`,
      ...a
    }),
    [o, n, f, u, a]
  ), g = e.useMemo(
    () => ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      marginBottom: 4,
      paddingLeft: o ? 0 : 4,
      paddingRight: o ? 4 : 0,
      justifyContent: o ? "flex-end" : "flex-start"
    }),
    [o]
  ), b = e.useMemo(
    () => ({
      fontSize: 12,
      fontWeight: 500,
      color: i[2]
    }),
    [i]
  ), c = e.useMemo(
    () => ({
      fontSize: 11,
      color: i[3]
    }),
    [i]
  );
  return {
    containerStyle: p,
    bubbleStyle: d,
    metaStyle: g,
    senderNameStyle: b,
    timestampStyle: c
  };
}
function O(s) {
  return s.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
export {
  O as formatDefaultTimestamp,
  v as useChatBubbleStyles
};
