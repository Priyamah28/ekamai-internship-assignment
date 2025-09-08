import React from 'react';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-home',
      title: 'Buy Property',
      description: 'Find your dream home from thousands of verified listings across India.'
    },
    {
      icon: 'fas fa-key',
      title: 'Rent Homes',
      description: 'Discover rental properties that match your budget and preferences.'
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Sell Fast',
      description: 'List your property and connect with genuine buyers quickly.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Smart Tools',
      description: 'Use our calculators and tools to make informed decisions.'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Why Choose MagicBricks?</h2>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;