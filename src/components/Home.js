import React from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/home.module.css';

const Home = ({ scrollRef }) => {
  const handleClick = () => {
    scrollRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>kev</h1>
      <h2 className={styles.subtitle}>full stack web developer</h2>
      <button aria-label='Scroll button' className={styles.button} onClick={handleClick}>
        <FontAwesomeIcon size='2x' icon={faChevronDown} />
      </button>
    </main>
  );
}

export default Home;
