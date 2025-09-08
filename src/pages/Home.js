import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PropertyListings from '../components/PropertyListings';
import TopAgents from '../components/TopAgents';
import BlogSection from '../components/BlogSection';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      
      <div className="container">
        <div className="content-with-sidebar">
          <div className="main-content">
            <PropertyListings />
          </div>
          <div className="sidebar-content">
            <Sidebar />
          </div>
        </div>
      </div>
      
      <TopAgents />
      <BlogSection />
    </div>
  );
};

export default Home;