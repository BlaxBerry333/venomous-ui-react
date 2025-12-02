import type { TComponentDisplayName } from "../../constants";
/**
 * 获取组件的自定义 Props
 * 从 customComponentProps[displayName] 中提取
 *
 * 不对外暴露
 */
export default function useCustomComponentProps<T = Record<string, any>>({ displayName, }: {
    displayName: undefined | TComponentDisplayName;
}): Partial<T>;
//# sourceMappingURL=index.d.ts.map