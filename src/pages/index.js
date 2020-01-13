import React, { useEffect, useRef, useState } from 'react';
import Particles from 'react-particles-js';
import Animation from '../components/Animation';
import Home from '../components/Home';
import Wave from '../components/Wave';
import particles from '../styles/particles.json';
import styles from '../styles/base.module.css';

const App = () => {
  const scrollRef = useRef(null);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const wait = setTimeout(() => setAnimating(false), 3000);

    return () => clearTimeout(wait);
  }, [animating]);

  return (
    <>
      <Animation />
      <Particles className={styles.particles} params={particles} /> 
      <div style={{ display: animating ? 'none' : 'initial' }}>
        <Home scrollRef={scrollRef} />
        <Wave scrollRef={scrollRef} />
      </div>
    </>
  );
}

export default App;
