"use client"

import React, { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-particles';
import ParticlesConfig from 'particles.json';
import styles from './PageStyles.module.css';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log(container);
  }, []);

  return (
    <div className={styles.particleBackground}>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesConfig as any}
      />
    </div>
  );
};

export default ParticleBackground;
