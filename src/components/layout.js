import React from 'react';
import { Global, css } from '@emotion/core';
import TrajanProRegWoff2 from '../content/assets/fonts/trajan-pro-regular.woff2';
import TrajanProRegWoff from '../content/assets/fonts/trajan-pro-regular.woff';
import LibreBaskervilleWoff2 from '../content/assets/fonts/libre-baskerville-regular.woff2';
import LibreBaskervilleWoff from '../content/assets/fonts/libre-baskerville-regular.woff';
import BrandonWoff2 from '../content/assets/fonts/brandon-regular.woff2';
import BrandonWoff from '../content/assets/fonts/brandon-regular.woff';
import { px2rem } from '../utils/styles';

export default function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          :root {
            --color-text: #505057;
            --color-accent: #e0bb4e;
            --about-heading-offset: 110px;
          }
          html,
          body {
            color: var(--color-text);
            margin: 0;
            font-family: Brandon, sans-serif;
            line-height: 1.5;
            padding: 0;
          }
          p {
            font-size: ${px2rem(20)};
          }
          @font-face {
            font-family: 'TrajanPro';
            src: url(${TrajanProRegWoff2}) format('woff2'),
              url(${TrajanProRegWoff}) format('woff');
            font-display: swap;
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: 'Libre Baskerville';
            src: url(${LibreBaskervilleWoff2}) format('woff2'),
              url(${LibreBaskervilleWoff}) format('woff');
            font-display: swap;
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: 'Brandon';
            src: url(${BrandonWoff2}) format('woff2'), url(${BrandonWoff}) format('woff');
            font-display: swap;
            font-weight: normal;
            font-style: normal;
          }
        `}
      />
      {children}
    </>
  );
}
