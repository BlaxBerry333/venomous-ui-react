import type { ThemeMode } from "@/utils/design/ThemeMode";
export declare const getThemeColors: (theme: ThemeMode) => {
    background: {
        readonly primary: "#181818";
        readonly secondary: "#363636ff";
    } | {
        readonly primary: "#ffffff";
        readonly secondary: "#f8f9fa";
    };
    border: {
        readonly primary: "rgba(255, 255, 255, 0.55)";
        readonly secondary: "rgba(255, 255, 255, 0.25)";
        readonly tertiary: "rgba(255, 255, 255, 0.15)";
        readonly quaternary: "rgba(255, 255, 255, 0.05)";
    } | {
        readonly primary: "rgba(0, 0, 0, 0.55)";
        readonly secondary: "rgba(0, 0, 0, 0.25)";
        readonly tertiary: "rgba(0, 0, 0, 0.15)";
        readonly quaternary: "rgba(0, 0, 0, 0.05)";
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