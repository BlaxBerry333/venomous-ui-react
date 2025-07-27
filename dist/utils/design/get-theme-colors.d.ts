import type { ThemeMode } from "@/utils/design/ThemeMode";
export declare const getThemeColors: (theme: ThemeMode) => {
    background: {
        readonly primary: "#181818";
        readonly secondary: "#242424";
    } | {
        readonly primary: "#ffffff";
        readonly secondary: "#f8f9fa";
    };
    border: {
        readonly primary: "rgba(255, 255, 255, 0.24)";
        readonly secondary: "rgba(255, 255, 255, 0.10)";
    } | {
        readonly primary: "rgba(38, 85, 115, 0.15)";
        readonly secondary: "rgba(0, 0, 0, 0.15)";
    };
    text: {
        readonly primary: "#ffffff";
        readonly secondary: "#cccccc";
        readonly tertiary: "#999999";
        readonly quaternary: "#666666";
        readonly disabled: "#4a4a4a";
    } | {
        readonly primary: "#212121";
        readonly secondary: "#424242";
        readonly tertiary: "#616161";
        readonly quaternary: "#9e9e9e";
        readonly disabled: "#bdbdbd";
    };
};
//# sourceMappingURL=get-theme-colors.d.ts.map