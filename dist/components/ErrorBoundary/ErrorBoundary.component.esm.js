var p = Object.defineProperty;
var l = (e, t, r) => t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var n = (e, t, r) => l(e, typeof t != "symbol" ? t + "" : t, r);
import m from "react";
import { COMPONENT_DISPLAY_NAMES as c } from "../../constants/names/COMPONENT_DISPLAY_NAMES.esm.js";
import "../../constants/names/COMPONENT_CLASSNAME_NAMES.esm.js";
import "../../constants/designs/BACKGROUND_COLORS.esm.js";
import "../../constants/designs/BORDER_COLORS.esm.js";
import "../../constants/designs/SHADOW_STYLES.esm.js";
import "../../constants/designs/TEXT_COLORS.esm.js";
import "../../constants/designs/THEME_BREAKPOINTS.esm.js";
class h extends m.Component {
  constructor(r) {
    super(r);
    n(this, "reset", () => {
      this.setState({
        hasError: !1,
        error: null,
        errorInfo: null
      });
    });
    this.state = {
      hasError: !1,
      error: null,
      errorInfo: null
    };
  }
  static getDerivedStateFromError(r) {
    return {
      hasError: !0,
      error: r
    };
  }
  componentDidCatch(r, o) {
    var s, a;
    this.setState({
      errorInfo: o
    }), (a = (s = this.props).onError) == null || a.call(s, r, o), process.env.NODE_ENV === "development" && console.error("[ErrorBoundary] Caught an error:", r, o);
  }
  render() {
    const { hasError: r, error: o, errorInfo: s } = this.state, { children: a, fallback: i } = this.props;
    return r && o && s ? i(o, s, this.reset) : a;
  }
}
n(h, "displayName", c.ErrorBoundary);
export {
  h as default
};
