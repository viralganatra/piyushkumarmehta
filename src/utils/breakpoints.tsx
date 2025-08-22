import { css, type SerializedStyles } from '@emotion/react';
import {
  BREAKPOINT_LG,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
  BREAKPOINT_XL,
  BREAKPOINT_XS,
  BREAKPOINT_XXL,
} from '../constants/responsive';

export const siteBreakpoints = {
  xs: BREAKPOINT_XS,
  sm: BREAKPOINT_SM,
  md: BREAKPOINT_MD,
  lg: BREAKPOINT_LG,
  xl: BREAKPOINT_XL,
  xxl: BREAKPOINT_XXL,
} as const;

type Breakpoints = typeof siteBreakpoints;
type BreakpointKey = keyof Breakpoints;

type MediaFunction = (...args: Parameters<typeof css>) => SerializedStyles;
type MediaGenerator = {
  below: (breakpoint: BreakpointKey) => MediaFunction;
  above: (breakpoint: BreakpointKey) => MediaFunction;
  between: (first: BreakpointKey, second: BreakpointKey) => MediaFunction;
};

function getSizeFromBreakpoint(key: BreakpointKey, breakpoints: Breakpoints): string {
  if (breakpoints[key]) return breakpoints[key];
  const firstKey = Object.keys(breakpoints)[0] as BreakpointKey;
  console.error(`No valid breakpoint specified for media, defaulting to ${firstKey}`);
  return breakpoints[firstKey];
}

export function generateMedia(breakpoints: Breakpoints = siteBreakpoints): MediaGenerator {
  const below =
    (key: BreakpointKey) =>
    (...args: Parameters<typeof css>) => {
      const size = parseInt(getSizeFromBreakpoint(key, breakpoints), 10);
      return css`
      @media (max-width: ${size - 1}px) {
        ${css(...args)}
      }
    `;
    };

  const above =
    (key: BreakpointKey) =>
    (...args: Parameters<typeof css>) => {
      const size = parseInt(getSizeFromBreakpoint(key, breakpoints), 10);
      return css`
      @media (min-width: ${size + 1}px) {
        ${css(...args)}
      }
    `;
    };

  const between =
    (first: BreakpointKey, second: BreakpointKey) =>
    (...args: Parameters<typeof css>) => {
      const minSize = parseInt(getSizeFromBreakpoint(first, breakpoints), 10);
      const maxSize = parseInt(getSizeFromBreakpoint(second, breakpoints), 10);
      return css`
      @media (min-width: ${minSize}px) and (max-width: ${maxSize}px) {
        ${css(...args)}
      }
    `;
    };

  return { below, above, between };
}

export const media = generateMedia(siteBreakpoints);
