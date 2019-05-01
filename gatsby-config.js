const dotenv = require('dotenv');
// const { BLOCKS, MARKS, INLINES } = require('@contentful/rich-text-types')
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

module.exports = {
  siteMetadata: {
    title: 'Mary Jane Speech Therapy',
  },
  pathPrefix: `/`,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Mary Jane Speech Therapy - I offer private Speech and Language Therapy to children within the West Kent and East Sussex area.",
        short_name: "MJ",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#6c27ae",
        display: "standalone",
        icon: `src/images/android-chrome-512x512.png`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `rhjyv1jbrooj`,
        accessToken: `96068c58532a4e6de67144276ce4aca752242e73dc558b919122e8eaa0151066`
      },
    },
    'gatsby-plugin-offline',
  ],
};
