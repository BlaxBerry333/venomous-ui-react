"use client";

import React from "react";

import { getDarkerHex, getLighterHex, getOpacityHex, hexNormalize } from "@/utils";
import { Theme } from ".";

const ThemeInjectToHTML = React.memo(() => {
  useThemeInjectToHTML();

  return null;
});

ThemeInjectToHTML.displayName = "Theme.InjectToHTML";
export default ThemeInjectToHTML;

/**
 * Injects theme CSS variables and global styles into the HTML <head>.
 *
 * - Creates a singleton <style> tag with a specific ID if not exists
 * - Updates CSS when themeColor changes
 * - Avoids deleting <style> on unmount to prevent flicker
 *
 */
function useThemeInjectToHTML() {
  const { themeColor } = Theme.useThemeColor();

  const colors = React.useMemo(
    () => ({
      light: getLighterHex(themeColor, 0.2),
      dark: getDarkerHex(themeColor, 0.8),
      origin: hexNormalize(themeColor),
      opacity: getOpacityHex(themeColor, 0.6),
    }),
    [themeColor],
  );

  React.useInsertionEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const styleId = "theme-palette-style";
    let style = document.getElementById(styleId) as HTMLStyleElement | null;

    if (!style) {
      style = document.createElement("style");
      style.id = styleId;
      document.head.appendChild(style);
    }

    const css = `
      /* ==============================
         Global Theme Palette Styles
         ============================== */

      :root {
        --venomous-ui--theme-origin: ${colors.origin};
        --venomous-ui--theme-dark: ${colors.dark};
        --venomous-ui--theme-light: ${colors.light};
        --venomous-ui--theme-opacity: ${colors.opacity};
      }

      /* Selection style */
      ::selection {
        background-color: ${colors.opacity};
        color: white;
      }

      /* Scrollbar style (Webkit) */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${colors.origin};
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: ${colors.dark};
      }
      ::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        transition: opacity 0.5s ease-in-out;
      }

      /* Scrollbar style (Firefox) */
      html {
        scrollbar-color: ${colors.origin} rgba(0, 0, 0, 0.1);
        scrollbar-width: thin;
      }
    `;

    style.innerHTML = css;
  }, [colors]);
}
