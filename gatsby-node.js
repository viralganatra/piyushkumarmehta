const path = require('path');
const getAliases = require('./aliases');

const resolvePath = (pathname) => path.resolve(__dirname, pathname);
const aliases = getAliases(resolvePath);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: aliases,
    },
  });
};
