module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [`gatsby-plugin-react-helmet`, {
    resolve: `gatsby-plugin-postcss-sass`,
    options: {
      postCssPlugins: []
    }
  }],
}