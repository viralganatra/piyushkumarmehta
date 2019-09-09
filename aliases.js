const aliases = (resolvePath) => ({
  components: resolvePath('./src/components'),
  constants: resolvePath('./src/constants/'),
  content: resolvePath('./src/content/'),
  fonts: resolvePath('./src/assets/fonts/'),
  images: resolvePath('./src/assets/images/'),
  pages: resolvePath('./src/pages/'),
  utils: resolvePath('./src/utils'),
});

module.exports = aliases;
