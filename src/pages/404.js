import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import styles from '../styles/404.module.css';

export const data = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const NotFound = ({ data, location }) => {
  const back = () => {
    window.history.back();
  }
  
  return (
    <main className={styles.container}>
      <Img alt='KevTLW logo' className={styles.logo} fixed={data.logo.childImageSharp.fixed} />
      <h1 className={styles.title}>404 error</h1>
      <h2 className={styles.text}>the page kevtlw.com{location.pathname} was not found</h2>
      <p className={styles.text}>go <button className={styles.link} onClick={back}>back</button> or head over to <a className={styles.link} href='https://kevtlw.com'>kevtlw.com</a></p>
      <SEO />
    </main>
  );
}

export default NotFound;
