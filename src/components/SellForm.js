import React, { useState } from 'react';

const SellForm = () => {
  const [formData, setFormData] = useState({
    userType: 'Owner',
    name: '',
    mobile: '',
    whatsapp: '',
    email: '',
    purpose: 'Sale',
    propertyType: '',
    city: '',
    locality: '',
    exclusive: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Property submitted successfully!');
    console.log(formData);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Sell or Rent your Property</h2>
        <p>You are posting this property for <strong>FREE!</strong></p>
      </div>
      
      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-section">
          <h3 className="form-section-title">Personal Details</h3>
          
          <div className="form-group">
            <label>I am</label>
            <div className="radio-group">
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="userType" 
                  value="Owner" 
                  checked={formData.userType === 'Owner'} 
                  onChange={handleChange} 
                />
                Owner
              </label>
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="userType" 
                  value="Agent" 
                  checked={formData.userType === 'Agent'} 
                  onChange={handleChange} 
                />
                Agent
              </label>
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="userType" 
                  value="Builder" 
                  checked={formData.userType === 'Builder'} 
                  onChange={handleChange} 
                />
                Builder
              </label>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name"
              name="name" 
              className="input-control" 
              placeholder="Enter Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <div className="mobile-input">
              <div className="country-code">
                IND +91
              </div>
              <input 
                type="tel" 
                id="mobile"
                name="mobile" 
                className="input-control" 
                placeholder="9400790633" 
                value={formData.mobile}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="whatsapp">Enter your <strong>WhatsApp No. to get</strong><br /><strong>enquiries from Buyer/Tenant</strong></label>
            <input 
              type="tel" 
              id="whatsapp"
              name="whatsapp" 
              className="input-control" 
              placeholder="Your WhatsApp number" 
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              name="email" 
              className="input-control" 
              placeholder="Enter Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
        </div>
        
        <div className="form-section">
          <h3 className="form-section-title">Property Details</h3>
          
          <div className="form-group">
            <label>For</label>
            <div className="radio-group">
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="purpose" 
                  value="Sale" 
                  checked={formData.purpose === 'Sale'} 
                  onChange={handleChange} 
                />
                Sale
              </label>
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="purpose" 
                  value="Rent/Lease" 
                  checked={formData.purpose === 'Rent/Lease'} 
                  onChange={handleChange} 
                />
                Rent/Lease
              </label>
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="purpose" 
                  value="PG/hostel" 
                  checked={formData.purpose === 'PG/hostel'} 
                  onChange={handleChange} 
                />
                PG/hostel
              </label>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="propertyType">Property Type</label>
            <select 
              id="propertyType"
              name="propertyType" 
              className="input-control" 
              value={formData.propertyType}
              onChange={handleChange}
              required
            >
              <option value="">Select Property Type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Villa">Villa</option>
              <option value="Commercial">Commercial</option>
              <option value="Plot">Plot</option>
            </select>
          </div>
        </div>
        
        <div className="form-section">
          <h3 className="form-section-title">Property Location</h3>
          
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input 
              type="text" 
              id="city"
              name="city" 
              className="input-control" 
              placeholder="Enter City" 
              value={formData.city}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="locality">Locality</label>
            <input 
              type="text" 
              id="locality"
              name="locality" 
              className="input-control" 
              placeholder="Enter Locality" 
              value={formData.locality}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="checkbox-group">
            <input 
              type="checkbox" 
              id="exclusive"
              name="exclusive" 
              checked={formData.exclusive}
              onChange={handleChange}
            />
            <label htmlFor="exclusive">
              I am posting this property 'exclusively' on MagicBricks<br />
              I agree to MagicBricks T&C, Privacy Policy, & Cookie Policy
            </label>
          </div>
        </div>
        
        <button type="submit" className="submit-btn">Submit Property</button>
      </form>
    </div>
  );
};

export default SellForm;