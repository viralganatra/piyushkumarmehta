import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { BREAKPOINT_XL } from 'constants/responsive';
import { media } from './breakpoints';

export const px2rem = (size) => `${size / 16}rem`;

export const clearfix = css`
  &:after {
    clear: both;
    content: '';
    display: table;
  }
`;

export const constrainLayout = css`
  margin: 0 auto;
  max-width: ${BREAKPOINT_XL};
`;

export const responsiveFontSize = (size) => css`
  font-size: calc((${size} + 1vmin) + (${size} + 1vmax));
`;

export const SectionHeading = styled.h2`
  font-family: var(--font-family-heading);
  font-size: ${px2rem(32)};
  font-weight: normal;
  margin: 0;
  text-align: center;
`;

let EmphasisedHeading = SectionHeading.withComponent('p');

EmphasisedHeading = styled(EmphasisedHeading)`
  border-left: 5px solid var(--color-accent);
  padding: 15px 0 15px 20px;
  text-align: left;
  text-decoration: underline;

  ${media.above('md')`
    padding-left: 30px;
  `};
`;

export const EmphasisedText = EmphasisedHeading;
