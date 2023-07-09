import React, { useState } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import NavMobile from './NavMobile';
const LandingPage = () => {
  const [navMobile, setnavMobile] = useState(false);
  return (
    <section>
      <NavBar setnavMobile={setnavMobile} />
      <div
        className={`${
          navMobile ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-52 transition-all`}
      >
        <NavMobile setnavMobile={setnavMobile} />
      </div>
      <Hero />
    </section>
  );
};

export default LandingPage;
