import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Find Your Dream Home</h1>
          <p>Discover the perfect property for your needs with MagicBricks - India's leading real estate platform</p>
          <div className="cta-buttons">
            <Link to="/properties" className="btn-large btn-primary">Browse Properties</Link>
            <Link to="/properties?type=sell" className="btn-large btn-secondary">List Your Property</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;