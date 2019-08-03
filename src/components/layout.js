import React from 'react';
import { Global, css } from '@emotion/core';
import TrajanProRegWoff2 from '../content/assets/fonts/trajan-pro-regular.woff2';
import TrajanProRegWoff from '../content/assets/fonts/trajan-pro-regular.woff';

export default function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            padding: 0;
          }
          @font-face {
              font-family: "TrajanPro";
              src: url(${TrajanProRegWoff2}) format('woff2'),
                   url(${TrajanProRegWoff}) format('woff');
              font-weight: normal;
              font-style: normal;
            }
        `}
      />
      {children}
    </>
  );
}
