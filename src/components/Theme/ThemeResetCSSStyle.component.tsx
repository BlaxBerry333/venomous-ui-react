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
        transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
        overscroll-behavior: none;
        scroll-behavior: smooth;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
 
      /* ========== Selection style ========== */
      ::selection {
        background-color: ${getLighter(PaletteColors[1], 0.5)};
        color: white;
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
