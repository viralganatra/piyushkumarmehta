import { css } from '@emotion/core';

export const px2rem = (size) => `${size / 16}rem`;

export const clearfix = css`
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;
