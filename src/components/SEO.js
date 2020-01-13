import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';

const SEO = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const meta = [];

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: site.siteMetadata.description
        },
        {
          name: 'og:title',
          content: site.siteMetadata.title
        },
        {
          name: 'og:description',
          content: site.siteMetadata.description
        },
        {
          name: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author
        },
        {
          name: 'twitter:title',
          content: site.siteMetadata.title
        },
        {
          name: 'twitter:description',
          content: site.siteMetadata.description
        }
      ].concat(meta)}
    />
  );
}

export default SEO;
