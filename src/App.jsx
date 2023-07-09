import React from 'react';
import LandingPage from './components/LandingPage';
import Sponsers from './components/Sponsers';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Imagination from './components/Imagination';
import Register from './components/Register';
import Articles from './components/Articles';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <LandingPage />
      <Sponsers />
      <AboutUs />
      <Features />
      <Imagination />
      <Register />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
