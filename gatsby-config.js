module.exports = {
  siteMetadata: {
    title: `Demo app for darkmodejs`,
    description: `A demonstration of how you can use the @assortment/darkmodejs npm package to theme your website based on a user's Operating System theme, thanks to the matchMedia API and prefers-color-scheme media queries.`,
    author: `@assortmentio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `darkmodejs-demo`,
        short_name: `darkmodejs-demo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: true,
      },
    },
  ],
}
