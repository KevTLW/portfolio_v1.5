import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/about.module.css';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 150, width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <section className={styles.container}>
      <Img alt='KevTLW logo' className={styles.logo} fixed={data.logo.childImageSharp.fixed} />
      <h1 className={styles.title}>check my stuff out!</h1>
      <nav className={styles.nav}>
        <ul className={styles.nav_items}>
          <li className={styles.nav_item}>
            <a aria-label='Link to PDF version of my resume in new tab' className={styles.nav_link} href='/resume.pdf' rel='noopener noreferrer' target='_blank'>
              <FontAwesomeIcon className={styles.nav_icon} icon={faFileAlt} /> resume
            </a>
          </li>
          <li className={styles.nav_item}>
            <a aria-label='Link to my Github profile in new tab' className={styles.nav_link} href='https://github.com/KevTLW' rel='noopener noreferrer' target='_blank'>
              <FontAwesomeIcon className={styles.nav_icon} icon={faGithub} /> github
            </a>
          </li>
          <li className={styles.nav_item}>
            <a aria-label='Link to my LinkedIn profile in new tab' className={styles.nav_link} href='https://linkedin.com/in/KevTLW' rel='noopener noreferrer' target='_blank'>
              <FontAwesomeIcon className={styles.nav_icon} icon={faLinkedin} /> linkedin
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default About;
