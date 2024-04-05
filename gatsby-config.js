/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Mi sitio personal",
    description: "Es un blog divertido made in Aranjuez",
    siteUrl: `https://candodelacuadra.github.io`,
    iconUrl:`/images/icon.png`

  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    
    "gatsby-plugin-mdx",

 

  ],
}
