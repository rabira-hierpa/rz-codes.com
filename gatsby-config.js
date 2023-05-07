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
        verbose: true,
        schema: {
          //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
        },
        debug: {
          preview: true,
          graphql: {
            showQueryVarsOnError: true,
          },
        },
        production: {
          hardCacheMediaFiles: true,
          allow404Images: true,
        },
        develop: {
          hardCacheMediaFiles: true,
          hardCacheData: false,
          nodeUpdateInterval: 300,
        },
        excludeFieldNames: [`blocksJSON`, `saveContent`],
        Post: {
          limit:
            process.env.NODE_ENV === `development`
              ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                50
              : // and we don't actually need more than 5000 in production for this particular site
                5000,
        },
        CoreParagraphBlockAttributesV2: {
          exclude: true,
        },

        html: {
          fallbackImageMaxWidth: 800,
        },
      },
      type: {
        MediaItem: {
          localFile: {
            childImageSharp: {
              fluid: true,
            },
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
