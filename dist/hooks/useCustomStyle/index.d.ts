import React from "react";
import type { TComponentDisplayName } from "../../constants";
/**
 * 获取组件的自定义样式
 * 从 customComponentProps[displayName].style 中提取
 *
 * 不对外暴露
 */
export default function useCustomStyle({ displayName, }: {
    displayName: undefined | TComponentDisplayName;
}): React.CSSProperties;
//# sourceMappingURL=index.d.ts.map