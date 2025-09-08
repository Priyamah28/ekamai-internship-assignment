import React from 'react';
import PropertyListings from '../components/PropertyListings';
import Sidebar from '../components/Sidebar';

const Properties = () => {
  return (
        <div className="content-with-sidebar">
          <div className="main-content">
            <PropertyListings />
          </div>
          <div className="sidebar-content">
            <Sidebar />
          </div>
    </div>
  );
};

export default Properties;