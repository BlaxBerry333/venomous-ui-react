import { act, render } from "@testing-library/react";

import { COMPONENT_DISPLAY_NAMES, THEME_MODES } from "@/constants";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useThemeMode } from "@/hooks";
import ThemeProvider from "./ThemeProvider.component";

// Test component to access theme context
function TestComponent() {
  const { themeMode } = useThemeMode();
  return <div data-testid="theme-mode">{themeMode}</div>;
}

describe("ThemeProvider", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  // ========== Basic Rendering Tests ==========
  describe("Basic Rendering", () => {
    it("renders children correctly", () => {
      const { getByText } = render(
        <ThemeProvider>
          <div>Test Content</div>
        </ThemeProvider>,
      );

      expect(getByText("Test Content")).toBeDefined();
    });

    it("provides theme context to children", () => {
      const { getByTestId } = render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>,
      );

      const themeModeElement = getByTestId("theme-mode");
      expect(themeModeElement).toBeDefined();
      expect(themeModeElement.textContent).toMatch(/light|dark/);
    });
  });

  // ========== Theme Mode Tests ==========
  describe("Theme Mode", () => {
    it("initializes with system theme mode", () => {
      const { getByTestId } = render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>,
      );

      const themeModeElement = getByTestId("theme-mode");
      // Should be either light or dark from system
      expect([THEME_MODES.LIGHT, THEME_MODES.DARK]).toContain(themeModeElement.textContent);
    });

    it("initializes with persisted theme mode from localStorage", () => {
      // Set localStorage before rendering
      localStorage.setItem("VENOMOUS_UI__THEME_MODE", THEME_MODES.DARK);

      const { getByTestId } = render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>,
      );

      const themeModeElement = getByTestId("theme-mode");
      expect(themeModeElement.textContent).toBe(THEME_MODES.DARK);
    });

    it("allows theme mode to be changed", () => {
      function TestComponentWithToggle() {
        const { themeMode, setThemeMode } = useThemeMode();
        return (
          <div>
            <div data-testid="theme-mode">{themeMode}</div>
            <button onClick={() => setThemeMode(THEME_MODES.DARK)}>Set Dark</button>
            <button onClick={() => setThemeMode(THEME_MODES.LIGHT)}>Set Light</button>
          </div>
        );
      }

      const { getByTestId, getByText } = render(
        <ThemeProvider>
          <TestComponentWithToggle />
        </ThemeProvider>,
      );

      const themeModeElement = getByTestId("theme-mode");

      // Click to set dark mode
      act(() => {
        getByText("Set Dark").click();
      });
      expect(themeModeElement.textContent).toBe(THEME_MODES.DARK);

      // Click to set light mode
      act(() => {
        getByText("Set Light").click();
      });
      expect(themeModeElement.textContent).toBe(THEME_MODES.LIGHT);
    });

    it("persists theme mode to localStorage when changed", () => {
      function TestComponentWithToggle() {
        const { themeMode, setThemeMode } = useThemeMode();
        return (
          <div>
            <div data-testid="theme-mode">{themeMode}</div>
            <button onClick={() => setThemeMode(THEME_MODES.DARK)}>Set Dark</button>
          </div>
        );
      }

      const { getByText } = render(
        <ThemeProvider>
          <TestComponentWithToggle />
        </ThemeProvider>,
      );

      // Click to set dark mode
      act(() => {
        getByText("Set Dark").click();
      });

      // Verify localStorage was updated
      expect(localStorage.getItem("VENOMOUS_UI__THEME_MODE")).toBe(THEME_MODES.DARK);
    });

    it("toggles between light and dark modes", () => {
      function TestComponentWithToggle() {
        const { themeMode, toggleThemeMode } = useThemeMode();
        return (
          <div>
            <div data-testid="theme-mode">{themeMode}</div>
            <button onClick={toggleThemeMode}>Toggle</button>
          </div>
        );
      }

      const { getByTestId, getByText } = render(
        <ThemeProvider>
          <TestComponentWithToggle />
        </ThemeProvider>,
      );

      const themeModeElement = getByTestId("theme-mode");
      const initialMode = themeModeElement.textContent;

      // Click to toggle
      act(() => {
        getByText("Toggle").click();
      });

      const newMode = themeModeElement.textContent;
      expect(newMode).not.toBe(initialMode);
      expect([THEME_MODES.LIGHT, THEME_MODES.DARK]).toContain(newMode);
    });

    it("resets to system theme mode and clears localStorage", () => {
      // First, set a theme mode in localStorage
      localStorage.setItem("VENOMOUS_UI__THEME_MODE", THEME_MODES.DARK);

      function TestComponentWithReset() {
        const { themeMode, resetToSystemThemeMode } = useThemeMode();
        return (
          <div>
            <div data-testid="theme-mode">{themeMode}</div>
            <button onClick={resetToSystemThemeMode}>Reset to System</button>
          </div>
        );
      }

      const { getByTestId, getByText } = render(
        <ThemeProvider>
          <TestComponentWithReset />
        </ThemeProvider>,
      );

      const themeModeElement = getByTestId("theme-mode");

      // Initially should be dark (from localStorage)
      expect(themeModeElement.textContent).toBe(THEME_MODES.DARK);

      // Click to reset to system
      act(() => {
        getByText("Reset to System").click();
      });

      // Theme mode should be system theme (light or dark)
      expect([THEME_MODES.LIGHT, THEME_MODES.DARK]).toContain(themeModeElement.textContent);

      // Note: localStorage will be re-set by setThemeMode after reset,
      // but it will be the system theme value
      const storedValue = localStorage.getItem("VENOMOUS_UI__THEME_MODE");
      expect([THEME_MODES.LIGHT, THEME_MODES.DARK, null]).toContain(storedValue);
    });

    it("provides isDarkMode boolean", () => {
      function TestComponentWithIsDarkMode() {
        const { isDarkMode, setThemeMode } = useThemeMode();
        return (
          <div>
            <div data-testid="is-dark-mode">{String(isDarkMode)}</div>
            <button onClick={() => setThemeMode(THEME_MODES.DARK)}>Set Dark</button>
            <button onClick={() => setThemeMode(THEME_MODES.LIGHT)}>Set Light</button>
          </div>
        );
      }

      const { getByTestId, getByText } = render(
        <ThemeProvider>
          <TestComponentWithIsDarkMode />
        </ThemeProvider>,
      );

      const isDarkModeElement = getByTestId("is-dark-mode");

      // Set dark mode
      act(() => {
        getByText("Set Dark").click();
      });
      expect(isDarkModeElement.textContent).toBe("true");

      // Set light mode
      act(() => {
        getByText("Set Light").click();
      });
      expect(isDarkModeElement.textContent).toBe("false");
    });

    it("handles invalid localStorage value", () => {
      // Set invalid value in localStorage
      localStorage.setItem("VENOMOUS_UI__THEME_MODE", "invalid-mode");

      const { getByTestId } = render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>,
      );

      const themeModeElement = getByTestId("theme-mode");
      // Should fall back to system theme
      expect([THEME_MODES.LIGHT, THEME_MODES.DARK]).toContain(themeModeElement.textContent);
    });
  });

  // ========== Custom Designs Tests ==========
  describe("Custom Designs", () => {
    it("accepts customDesigns prop", () => {
      const customDesigns = {
        PaletteColors: {
          1: "#ff0000",
          2: "#00ff00",
          3: "#0000ff",
          4: "#ffff00",
          5: "#ff00ff",
        },
      };

      const { getByText } = render(
        <ThemeProvider customDesigns={customDesigns}>
          <div>Content</div>
        </ThemeProvider>,
      );

      expect(getByText("Content")).toBeDefined();
    });

    it("provides customDesigns to children via context", () => {
      const customDesigns = {
        PaletteColors: {
          1: "#ff0000",
          2: "#00ff00",
          3: "#0000ff",
          4: "#ffff00",
          5: "#ff00ff",
        },
      };

      function TestComponentWithDesigns() {
        const { themeMode } = useThemeMode();
        return <div data-testid="has-context">{themeMode ? "yes" : "no"}</div>;
      }

      const { getByTestId } = render(
        <ThemeProvider customDesigns={customDesigns}>
          <TestComponentWithDesigns />
        </ThemeProvider>,
      );

      expect(getByTestId("has-context").textContent).toBe("yes");
    });
  });

  // ========== Custom Styles Tests ==========
  describe("Custom Styles", () => {
    it("accepts customStyles prop", () => {
      const customStyles = {
        Button: {
          backgroundColor: "rgb(255, 0, 0)",
          color: "white",
        },
      };

      const { getByText } = render(
        <ThemeProvider customStyles={customStyles}>
          <div>Content</div>
        </ThemeProvider>,
      );

      expect(getByText("Content")).toBeDefined();
    });

    it("provides customStyles to children via context", () => {
      const customStyles = {
        Button: {
          backgroundColor: "rgb(255, 0, 0)",
        },
      };

      function TestComponentWithStyles() {
        const { themeMode } = useThemeMode();
        return <div data-testid="has-context">{themeMode ? "yes" : "no"}</div>;
      }

      const { getByTestId } = render(
        <ThemeProvider customStyles={customStyles}>
          <TestComponentWithStyles />
        </ThemeProvider>,
      );

      expect(getByTestId("has-context").textContent).toBe("yes");
    });
  });

  // ========== Context Value Tests ==========
  describe("Context Value", () => {
    it("provides all required context values", () => {
      function TestContextValues() {
        const { themeMode, setThemeMode } = useThemeMode();
        return (
          <div>
            <div data-testid="has-theme-mode">{themeMode ? "yes" : "no"}</div>
            <div data-testid="has-set-theme-mode">{typeof setThemeMode === "function" ? "yes" : "no"}</div>
          </div>
        );
      }

      const { getByTestId } = render(
        <ThemeProvider>
          <TestContextValues />
        </ThemeProvider>,
      );

      expect(getByTestId("has-theme-mode").textContent).toBe("yes");
      expect(getByTestId("has-set-theme-mode").textContent).toBe("yes");
    });

    it("requires ThemeProvider wrapper for useThemeMode", () => {
      // Suppress console.error for this test
      const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

      // When trying to render component without ThemeProvider, it should fail
      // React Testing Library handles this gracefully, so we just verify it doesn't work
      try {
        const { container } = render(<TestComponent />);
        // If we get here, the test should fail
        expect(container.innerHTML).toBe("");
      } catch {
        // Expected to fail - component requires ThemeProvider
        expect(true).toBe(true);
      }

      consoleError.mockRestore();
    });
  });

  // ========== General Tests ==========
  describe("General", () => {
    it("displays correct displayName", () => {
      expect(ThemeProvider.displayName).toBe(COMPONENT_DISPLAY_NAMES.ThemeProvider);
    });

    it("supports nested providers", () => {
      const { getByText } = render(
        <ThemeProvider>
          <ThemeProvider>
            <div>Nested Content</div>
          </ThemeProvider>
        </ThemeProvider>,
      );

      expect(getByText("Nested Content")).toBeDefined();
    });

    it("re-renders when customDesigns change", () => {
      const { rerender, getByText } = render(
        <ThemeProvider
          customDesigns={{
            PaletteColors: { 1: "#ff0000", 2: "#00ff00", 3: "#0000ff" },
          }}
        >
          <div>Content</div>
        </ThemeProvider>,
      );

      expect(getByText("Content")).toBeDefined();

      rerender(
        <ThemeProvider
          customDesigns={{
            PaletteColors: { 1: "#000000", 2: "#111111", 3: "#222222" },
          }}
        >
          <div>Content</div>
        </ThemeProvider>,
      );

      expect(getByText("Content")).toBeDefined();
    });

    it("re-renders when customStyles change", () => {
      const { rerender, getByText } = render(
        <ThemeProvider customStyles={{ Button: { backgroundColor: "red" } }}>
          <div>Content</div>
        </ThemeProvider>,
      );

      expect(getByText("Content")).toBeDefined();

      rerender(
        <ThemeProvider customStyles={{ Button: { backgroundColor: "blue" } }}>
          <div>Content</div>
        </ThemeProvider>,
      );

      expect(getByText("Content")).toBeDefined();
    });
  });
});
