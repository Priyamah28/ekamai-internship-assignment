import React from 'react';
import SellForm from '../components/SellForm';
import Sidebar from '../components/Sidebar';

const Sell = () => {
  return (
    
        <div className="content-with-sidebar">
          <div className="main-content">
            <SellForm />
          </div>
          <div className="sidebar-content">
            <Sidebar />
            </div>  
    </div>
  );
};

export default Sell;