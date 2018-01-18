module.exports = {
  siteMetadata: {
    title: 'Mary Jane Speech Therapy',
  },
  pathPrefix: `/mj-speechtherapy/`,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Mary Jane Speech Therapy - I offer private Speech and Language Therapy to children within the West Kent and East Sussex area.",
        short_name: "mj-speechtherapy.co.uk",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#6c27ae",
        display: "standalone",
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: '/static/favicons/favicon.png',
            sizes: '32x32',
            type: 'image/png',
          },
        ],
      },
    },
  ],
};
