import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
  path: '.env',
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Hindu Wedding Priest - Silent Ceremonies | Piyushbhai Mehta',
    siteUrl: 'https://www.hinduweddingpriest.org',
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};

export default config;
