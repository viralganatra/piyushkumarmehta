import { css } from '@emotion/core';
import {
  BREAKPOINT_XS,
  BREAKPOINT_SM,
  BREAKPOINT_MD,
  BREAKPOINT_LG,
  BREAKPOINT_XL,
} from 'constants/responsive';

export const siteBreakpoints = {
  xs: BREAKPOINT_XS,
  sm: BREAKPOINT_SM,
  md: BREAKPOINT_MD,
  lg: BREAKPOINT_LG,
  xl: BREAKPOINT_XL,
};

function getSizeFromBreakpoint(breakpointValue, breakpoints = {}) {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue];
  }

  const [firstBreakpoint] = Object.keys(breakpoints);

  console.error(
    `No valid breakpoint specified for media, defaulting to ${firstBreakpoint}`,
  );

  return firstBreakpoint;
}

export function generateMedia(breakpoints = {}) {
  const below = (breakpoint) => (...args) => {
    const breakpointSize = parseInt(getSizeFromBreakpoint(breakpoint, breakpoints), 10);

    return css`
      @media (max-width: ${breakpointSize - 1}px) {
        ${css(...args)}
      }
    }`;
  };

  const above = (breakpoint) => (...args) => {
    const breakpointSize = parseInt(getSizeFromBreakpoint(breakpoint, breakpoints), 10);

    return css`
      @media (min-width: ${breakpointSize + 1}px) {
        ${css(...args)}
      }
    }`;
  };

  const between = (firstBreakpoint, secondBreakpoint) => (...args) => css`
    @media (min-width: ${getSizeFromBreakpoint(
        firstBreakpoint,
        breakpoints,
      )}) and (max-width: ${getSizeFromBreakpoint(secondBreakpoint, breakpoints)}) {
      ${css(...args)}
    }
  `;

  return {
    below,
    above,
    between,
  };
}

export const media = generateMedia(siteBreakpoints);
