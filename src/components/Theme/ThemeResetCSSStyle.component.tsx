"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import { getLighter } from "@/tools";

const __RESET_CSS_STYLE_ID = "__VENOUS_UI_RESET_CSS_STYLE__";

const ThemeResetCSSStyle = React.memo(() => {
  const { PaletteColors, BackgroundColors, TextColors, BorderColors, TypographySizes, TypographyLineHeights } =
    useThemeDesigns();

  React.useInsertionEffect(() => {
    let styleElement = document.getElementById(__RESET_CSS_STYLE_ID) as HTMLStyleElement | null;
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = __RESET_CSS_STYLE_ID;
      document.head.appendChild(styleElement);
    }

    const resetStyles = `
      *, *::before, *::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
      }

      * {
        margin: 0;
        padding: 0;
      }

      /* ========== HTML & Body ========== */ 
      html, body {
        max-width: 100vw;
        min-height: 100svh;
        height: auto;
        background-color: ${BackgroundColors[1]};
        color: ${TextColors[1]};
        font-size: ${TypographySizes.TEXT.BASE};
        line-height: ${TypographyLineHeights.TEXT.BASE};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }

      /* ========== a ========== */
      a {
        color: inherit;
        text-decoration: none;
      }
 
      /* ========== Selection style ========== */
      ::selection {
        background-color: ${getLighter(PaletteColors[1], 0.5)};
        color: white;
      }

      /* ========== Scrollbar ========== */ 
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background: ${BorderColors[2]};
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: ${BorderColors[1]};
      }
    `;

    styleElement.textContent = resetStyles;

    return () => {
      const element = document.getElementById(__RESET_CSS_STYLE_ID);
      if (element) {
        element.remove();
      }
    };
  }, [PaletteColors, BackgroundColors, TextColors, BorderColors, TypographySizes, TypographyLineHeights]);

  return null;
});

ThemeResetCSSStyle.displayName = COMPONENT_DISPLAY_NAMES.ThemeResetCSSStyle;
export default ThemeResetCSSStyle;
