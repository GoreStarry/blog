module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: []
      }
    },
    `gatsby-transformer-javascript-static-exports`,
    `gatsby-transformer-remark`,
  ],
}
