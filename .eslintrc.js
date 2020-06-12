const path = require('path');
const getAliases = require('./aliases');

const resolvePath = (pathname) => path.resolve(__dirname, pathname);
const aliases = getAliases(resolvePath);

module.exports = {
  extends: [require.resolve('@viralganatra/app-scripts/configs/eslint')],

  rules: {
    'react/button-has-type': ['off'],
    'react/require-default-props': ['off'],
  },

  settings: {
    'import/resolver': {
      alias: Object.entries(aliases),
    },
  },

  overrides: [
    {
      files: ['cypress/**/*.js'],
      extends: ['plugin:cypress/recommended'],
      rules: {
        'no-param-reassign': ['error', { ignorePropertyModificationsFor: ['window'] }],
        'no-underscore-dangle': ['error', { allow: ['_obj'] }],
      },
    },
  ],
};
