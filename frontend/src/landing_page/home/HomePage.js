import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

function HomePage() {
    return (
      <>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
      </>
    );
}

export default HomePage;