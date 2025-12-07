import n from "react";
import { COMPONENT_DISPLAY_NAMES as h } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
import I from "../../hooks/useThemeDesigns/index.esm.js";
import "../Theme/ThemeProvider.context.esm.js";
import p from "../../hooks/useCustomStyle/index.esm.js";
let y = !1;
const S = "__VENOMOUS_UI__chat-stream-cursor-keyframes";
function T() {
  if (y || typeof document > "u") return;
  if (document.getElementById(S)) {
    y = !0;
    return;
  }
  const e = document.createElement("style");
  e.id = S, e.textContent = `
    @keyframes venomous-cursor-blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
  `, document.head.appendChild(e), y = !0;
}
function D({ cursorBlinkSpeed: e = 1e4 }) {
  const { TextColors: c } = I(), t = p({ displayName: h.ChatStreamText });
  n.useEffect(() => {
    T();
  }, []);
  const f = n.useMemo(
    () => ({
      boxSizing: "border-box",
      display: "inline",
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
      ...t
    }),
    [t]
  ), r = n.useMemo(
    () => ({
      display: "inline",
      color: c[1],
      fontWeight: "normal",
      animation: `venomous-cursor-blink ${e}ms step-end infinite`
    }),
    [c, e]
  );
  return {
    containerStyle: f,
    cursorStyle: r
  };
}
function A({
  text: e,
  speed: c = 30,
  streaming: t = !1,
  skipAnimation: f = !1,
  onComplete: r
}) {
  const [l, a] = n.useState(""), [m, u] = n.useState(!1), i = n.useRef(""), s = n.useRef(0);
  return n.useEffect(() => {
    if (f) {
      a(e), u(!0), t || r == null || r();
      return;
    }
    if (!e) {
      a(""), u(!1), i.current = "", s.current = 0;
      return;
    }
    if (e.startsWith(i.current)) {
      const o = i.current.length;
      s.current = o;
      const d = setInterval(() => {
        s.current < e.length ? (s.current++, a(e.slice(0, s.current))) : (clearInterval(d), i.current = e, t || (u(!0), r == null || r()));
      }, c);
      return () => clearInterval(d);
    } else {
      i.current = "", s.current = 0, a(""), u(!1);
      const o = setInterval(() => {
        s.current < e.length ? (s.current++, a(e.slice(0, s.current))) : (clearInterval(o), i.current = e, t || (u(!0), r == null || r()));
      }, c);
      return () => clearInterval(o);
    }
  }, [e, c, t, f, r]), n.useEffect(() => {
    !t && l === e && e.length > 0 && u(!0);
  }, [t, l, e]), {
    displayedText: l,
    isTypingComplete: m,
    showCursorNow: t || !m
  };
}
export {
  A as useChatStreamTextActions,
  D as useChatStreamTextStyles
};
