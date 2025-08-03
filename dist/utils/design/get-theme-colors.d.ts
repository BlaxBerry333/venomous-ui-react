import type { ThemeMode } from "@/utils/design/ThemeMode";
export declare const getThemeColors: (theme: ThemeMode) => {
    background: Record<"primary" | "secondary", string>;
    border: Record<"primary" | "secondary" | "tertiary" | "quaternary", string>;
    text: Record<"primary" | "secondary" | "tertiary" | "quaternary" | "disabled", string>;
};
//# sourceMappingURL=get-theme-colors.d.ts.map