import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from '../styles/animation.module.css';

const Animation = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 240) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <aside className={styles.container}>
      <Img alt='KevTLW logo animation' className={styles.logo} fixed={data.logo.childImageSharp.fixed} />
    </aside>
  )
}

export default Animation;
