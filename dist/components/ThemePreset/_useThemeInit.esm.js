import i from "react";
import m from "../../hooks/useThemeMode/index.esm.js";
import r from "../../hooks/useThemeColor/index.esm.js";
function p({
  defaultThemeColor: o,
  defaultThemeMode: s
}) {
  const { setThemeMode: t } = m(), { setThemeColor: e } = r();
  i.useEffect(() => {
    s && t(s), o && e(o);
  }, [s, o, t, e]);
}
export {
  p as useThemeInit
};
