export default function useThemeMode(): {
    themeMode: import("../../constants").TThemeMode;
    setThemeMode: (mode: import("../../constants").TThemeMode) => void;
    isDarkMode: boolean;
    toggleThemeMode: () => void;
    resetToSystemThemeMode: () => void;
};
//# sourceMappingURL=index.d.ts.map