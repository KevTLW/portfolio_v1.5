import React from 'react';
import styles from '../styles/wave.module.css';

const Wave = ({ scrollRef }) => (
  <svg className={styles.wave} preserveAspectRatio='none' ref={scrollRef} viewBox='0 0 1440 128' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m 1440.0008,0.00573 -48,16 c -48,16 -144,48.0008 -240,69.3008 -96,21.7 -191.99993,31.7 -287.99993,16 -96,-16.3 -192,-58.3008 -288,-69.3008 -96,-11 -192,11 -288,32 -96,21 -192.000005,43.0008 -240.00001,53.3008 L 8.5995482e-4,128.00573 H 1440.0008 Z'
      fill='#f5f5f5'
    />
  </svg>
);

export default Wave;
