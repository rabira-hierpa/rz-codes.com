const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  siteMetadata: {
    title: `Rz Codes`,
    description: `Portfolio site of Rabra Hierpa`,
    author: `Rabra Hierpa(@rzcodes)`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#DA5049`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL,
        verbose: false,
        schema: {
          typePrefix: `Wp`,
          requestConcurrency: 5,
          previewRequestConcurrency: 2,
        },
        debug: {
          preview: false,
          graphql: {
            showQueryVarsOnError: true,
          },
        },
        production: {
          hardCacheMediaFiles: true,
          allow404Images: true,
        },
        // Completely remove develop config to use defaults without background updating
        excludeFieldNames: [`blocksJSON`, `saveContent`],
        html: {
          fallbackImageMaxWidth: 800,
          createStaticFiles: false,
        },
        type: {
          Post: {
            limit: process.env.NODE_ENV === `development` ? 20 : 5000,
          },
          CoreParagraphBlockAttributesV2: {
            exclude: true,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          delayOnRouteUpdate: 0,
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
