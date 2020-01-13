import React from 'react';
import Icon from './Icon';
import styles from '../styles/footer.module.css';

const Footer = () => (
  <footer className={styles.container}>
    <p className={styles.text}>
      built by <strong>kev</strong> with
      <span className={styles.icon}>
        <Icon icon='Gatsby' width='1.25em' />
      </span>
      ,
      <span className={styles.icon}>
        <Icon icon='React' width='1.25em' />
      </span>
      and
      <span className={styles.icon}>
        <Icon icon='Netlify' width='1.25em' />
      </span>
      .
    </p>
  </footer>
);

export default Footer;
