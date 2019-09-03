module.exports = {
  extends: [require.resolve('@viralganatra/app-scripts/configs/eslint')],

  rules: {
    'react/button-has-type': ['off'],
    'react/require-default-props': ['off'],
  },

  settings: {
    'import/resolver': {
      alias: [
        ['components', './src/components'],
        ['constants', './src/constants/'],
        ['content', './src/content/'],
        ['pages', './src/pages/'],
        ['utils', './src/utils'],
      ],
    },
  },
};
