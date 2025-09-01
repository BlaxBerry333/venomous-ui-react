export default function useDesign(): {
    TextColors: {
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
    BackgroundColors: {
        readonly primary: "#181818";
        readonly secondary: "#363636ff";
    } | {
        readonly primary: "#ffffff";
        readonly secondary: "#f8f9fa";
    };
    BorderColors: {
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
    Shadows: {
        readonly primary: "\n      0px 0px 4px 0px rgba(255, 255, 255, 0.7),\n      0px 0px 2px -1px rgba(255, 255, 255, 0.7)\n    ";
        readonly secondary: "\n      0px 0px 4px 0px rgba(255, 255, 255, 0.4)\n    ";
        readonly tertiary: "\n      0px 0px 4px 0px rgba(255, 255, 255, 0.2)\n    ";
        readonly inset: "\n      inset 0px 0px 2px 0px rgba(255, 255, 255, 0.7)\n    ";
    } | {
        readonly primary: "\n      0px 0px 4px 0px rgba(0, 0, 0, 0.4),\n      0px 0px 2px -1px rgba(0, 0, 0, 0.25)\n    ";
        readonly secondary: "\n      0px 0px 4px 0px rgba(0, 0, 0, 0.4)\n    ";
        readonly tertiary: "\n      0px 0px 4px 0px rgba(0, 0, 0, 0.2)\n    ";
        readonly inset: "\n      inset 0px 0px 2px 0px rgba(0, 0, 0, 0.3)\n    ";
    };
    TypographySize: {
        readonly h1: "4rem";
        readonly h2: "3rem";
        readonly h3: "2.25rem";
        readonly h4: "1.875rem";
        readonly h5: "1.5rem";
        readonly h6: "1.25rem";
        readonly text: "1rem";
        readonly strong: "1rem";
        readonly small: "0.75rem";
    };
};
//# sourceMappingURL=index.d.ts.map