module.exports = {
  siteMetadata: {
    author: 'KevTLW',
    description: 'Kevin Cruz Calderon\'s web development portfolio',
    title: 'kev'
  },
  plugins: [
    'gatsby-plugin-scroll-reveal',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-images'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'kev',
        short_name: 'kev',
        start_url: '/',
        background_color: '#222222',
        theme_color: '#222222',
        display: 'browser',
        icon: 'static/favicon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet'
  ]
}
