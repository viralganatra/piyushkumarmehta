import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.shape(),
  headComponents: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  ),
  bodyAttributes: PropTypes.shape(),
  preBodyComponents: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  ),
  body: PropTypes.string,
  postBodyComponents: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  ),
};
