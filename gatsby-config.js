module.exports = {
  siteMetadata: {
    title: `Chama no Zap`,
    description: `Inicie uma conversa no whatapp sem salvar o numero da pessoa.`,
    author: `@alexandrer_stos`,
  },
  pathPrefix: "/chamanozap",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-9519288182365815`
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chama no Zap`,
        lang: `pt-BR`,
        short_name: `Chama Zap`,
        start_url: `/chamanozap`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `browser`,
        icon: `src/images/whatsapp-icon.png`, // This path is relative to the root of the site.
        prefer_related_applications: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    "gatsby-plugin-offline",
  ],
}
