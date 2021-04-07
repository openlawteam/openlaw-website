module.exports = {
  siteMetadata: {
    title: "OpenLaw"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/markdown`,
        name: "markdown-pages"
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`space mono\:400,700`],
        display: "swap"
      }
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp"
  ]
};
