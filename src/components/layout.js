import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/react';
import TrajanProRegWoff2 from 'fonts/trajan-pro-regular.woff2';
import TrajanProRegWoff from 'fonts/trajan-pro-regular.woff';
import LibreBaskervilleWoff2 from 'fonts/libre-baskerville-regular.woff2';
import LibreBaskervilleWoff from 'fonts/libre-baskerville-regular.woff';
import BellotaTextWoff2 from 'fonts/bellota-text-regular.woff2';
import { px2rem } from 'utils/styles';
import { media } from 'utils/breakpoints';
import { normalize } from 'utils/normalize';

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
            --color-attention-inverse: #fff;

            --about-heading-offset: 110px;
            --reciting-picture-max-width: 50%;
            --reciting-picture-offset: 20px;
            --section-offset: 20px;

            --font-family-base: 'Bellota Text', sans-serif;
            --font-family-heading: 'Libre Baskerville', Georgia, Times, serif;
            --font-family-intro: 'TrajanPro', Georgia, Times, serif;

            --gutter-section: 10px;
          }

          ${media.above('md')`
            :root {
              --gutter-section: 25px;
              --reciting-picture-offset: 50px;
            }
          `};
          ${media.above('lg')`
            :root {
              --gutter-section: 50px;
              --reciting-picture-max-width: 600px;
            }
          `};

          ${normalize};

          html,
          body {
            background: var(--color-bg);
            color: var(--color-text);
            font-family: var(--font-family-base);
            line-height: 1.6;
            margin: 0;
            padding: 0;

            ${media.above('md')`
              line-height: 1.8;
            `};
          }
          p {
            font-size: ${px2rem(20)};
            margin: 1rem 0;
          }
          @font-face {
            font-display: swap;
            font-family: 'TrajanPro';
            font-style: normal;
            font-weight: normal;
            src: url(${TrajanProRegWoff2}) format('woff2'), url(${TrajanProRegWoff}) format('woff');
          }
          @font-face {
            font-display: swap;
            font-family: 'Libre Baskerville';
            font-style: normal;
            font-weight: normal;
            src: url(${LibreBaskervilleWoff2}) format('woff2'),
              url(${LibreBaskervilleWoff}) format('woff');
          }
          @font-face {
            font-display: swap;
            font-family: 'Bellota Text';
            font-style: normal;
            font-weight: normal;
            src: url(${BellotaTextWoff2}) format('woff2');
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
