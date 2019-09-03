import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import TrajanProRegWoff2 from 'content/assets/fonts/trajan-pro-regular.woff2';
import TrajanProRegWoff from 'content/assets/fonts/trajan-pro-regular.woff';
import LibreBaskervilleWoff2 from 'content/assets/fonts/libre-baskerville-regular.woff2';
import LibreBaskervilleWoff from 'content/assets/fonts/libre-baskerville-regular.woff';
import BrandonWoff2 from 'content/assets/fonts/brandon-regular.woff2';
import BrandonWoff from 'content/assets/fonts/brandon-regular.woff';
import { px2rem } from 'utils/styles';

export default function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          :root {
            --color-bg: #fff;
            --color-bg-shade: #f2f2f2;
            --color-text: #505057;
            --color-accent: #e0bb4e;
            --color-attention: #cd413c;

            --about-heading-offset: 110px;

            --font-family-base: Brandon, sans-serif;
            --font-family-heading: 'Libre Baskerville', Georgia, Times, serif;
            --font-family-intro: 'TrajanPro', Georgia, Times, serif;
          }
          html,
          body {
            background: var(--color-bg);
            color: var(--color-text);
            font-family: var(--font-family-base);
            line-height: 1.5;
            margin: 0;
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
            font-style: normal;
            font-weight: normal;
          }
          @font-face {
            font-family: 'Libre Baskerville';
            src: url(${LibreBaskervilleWoff2}) format('woff2'),
              url(${LibreBaskervilleWoff}) format('woff');
            font-display: swap;
            font-style: normal;
            font-weight: normal;
          }
          @font-face {
            font-family: 'Brandon';
            src: url(${BrandonWoff2}) format('woff2'), url(${BrandonWoff}) format('woff');
            font-display: swap;
            font-style: normal;
            font-weight: normal;
          }
        `}
      />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
