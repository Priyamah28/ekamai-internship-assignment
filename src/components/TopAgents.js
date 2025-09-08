import React from 'react';

const TopAgents = () => {
  const agents = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'Elite Properties',
      experience: '12 years',
      properties: 245,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Priya Singh',
      company: 'Dream Homes Ltd',
      experience: '8 years',
      properties: 178,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Vikram Malhotra',
      company: 'Metro Realtors',
      experience: '15 years',
      properties: 312,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      rating: 4.95
    },
    {
      id: 4,
      name: 'Sunita Patel',
      company: 'Sunrise Properties',
      experience: '10 years',
      properties: 201,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      rating: 4.85
    },
    {
      id: 5,
      name: 'Amit Sharma',
      company: 'Prime Realty',
      experience: '9 years',
      properties: 165,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      rating: 4.7
    }
  ];

  return (
    <section className="top-agents">
      <div className="container">
        <h2 className="section-title">Our Top Real Estate Agents</h2>
        <p className="section-subtitle">Connect with the best agents in the industry</p>
        
        <div className="agents-grid">
          {agents.map(agent => (
            <div key={agent.id} className="agent-card">
              <div className="agent-image">
                <img src={agent.image} alt={agent.name} />
                <div className="agent-rating">
                  <i className="fas fa-star"></i> {agent.rating}
                </div>
              </div>
              <div className="agent-details">
                <h3>{agent.name}</h3>
                <p className="agent-company">{agent.company}</p>
                <div className="agent-stats">
                  <div className="stat">
                    <span className="stat-value">{agent.experience}</span>
                    <span className="stat-label">Experience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{agent.properties}+</span>
                    <span className="stat-label">Properties</span>
                  </div>
                </div>
                <button className="btn btn-primary">Contact Agent</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopAgents;