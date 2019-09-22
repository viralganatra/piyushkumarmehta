require('dotenv').config();

module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-force-file-loader',
      options: {
        rules: ['images'],
      },
    },
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
  ],
};
