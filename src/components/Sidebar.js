import React from 'react';

const Sidebar = () => {
  return (
    <div className="ad-column">
      <div className="ad-title">ADVERTISEMENT</div>
      
      <div className="ad-box">
        <h3>How to find the right Tenant?</h3>
        <p><strong>Respond to Tenant Enquiries</strong></p>
        <p>Connect with Tenants when they contact on your property.</p>
        <p>View upto 5 contact details for FREE!</p>
        
        <p><strong>Connect with Matching Tenants</strong></p>
        <p>Actively check for matching Tenants & connect.</p>
        
        <p><strong>Download the App</strong></p>
        <p>Get notified on all new Tenant enquiries and connect instantly.</p>
      </div>
      
      <div className="ad-box">
        <h3>Featured Properties</h3>
        <div className="property-item">
          <div className="ad-property-image">
            <i className="fas fa-home"></i>
          </div>
          <div className="ad-property-details">
            <div className="ad-property-price">₹85,00,000</div>
            <div className="ad-property-address">3 BHK Apartment in Sector 70, Mohali</div>
          </div>
        </div>
        
        <div className="property-item">
          <div className="ad-property-image">
            <i className="fas fa-building"></i>
          </div>
          <div className="ad-property-details">
            <div className="ad-property-price">₹45,000/month</div>
            <div className="ad-property-address">2 BHK for Rent in Phase 7, Mohali</div>
          </div>
        </div>
        
        <div className="property-item">
          <div className="ad-property-image">
            <i className="fas fa-house-user"></i>
          </div>
          <div className="ad-property-details">
            <div className="ad-property-price">₹1.2 Cr</div>
            <div className="ad-property-address">Villa in Sector 66, Gurugram</div>
          </div>
        </div>
      </div>
      
      <div className="ad-box">
        <h3>Why list with us?</h3>
        <p><i className="fas fa-check" style={{color: '#27ae60', marginRight: '5px'}}></i> Reach 10L+ buyers & tenants</p>
        <p><i className="fas fa-check" style={{color: '#27ae60', marginRight: '5px'}}></i> Get genuine enquiries</p>
        <p><i className="fas fa-check" style={{color: '#27ae60', marginRight: '5px'}}></i> Sell 3x faster</p>
        <p><i className="fas fa-check" style={{color: '#27ae60', marginRight: '5px'}}></i> Free listing - no hidden charges</p>
      </div>
    </div>
  );
};

export default Sidebar;