import React, { useState } from 'react';

const HomeLoans = () => {
  const [loanData, setLoanData] = useState({
    loanAmount: '',
    interestRate: '8.5',
    loanTenure: '20',
    monthlyIncome: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setLoanData({
      ...loanData,
      [e.target.name]: e.target.value
    });
  };

  const calculateEMI = () => {
    const P = parseFloat(loanData.loanAmount);
    const R = parseFloat(loanData.interestRate) / 12 / 100;
    const N = parseFloat(loanData.loanTenure) * 12;
    
    if (P && R && N) {
      const EMI = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
      return EMI.toFixed(0);
    }
    return 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Home loan enquiry submitted successfully!');
  };

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="section-title">Home Loans</h1>
        
        <div className="loan-content">
          <div className="loan-calculator">
            <h2>EMI Calculator</h2>
            
            <div className="calculator-form">
              <div className="form-group">
                <label>Loan Amount (₹)</label>
                <input
                  type="number"
                  name="loanAmount"
                  value={loanData.loanAmount}
                  onChange={handleChange}
                  placeholder="Enter loan amount"
                />
              </div>
              
              <div className="form-group">
                <label>Interest Rate (%)</label>
                <input
                  type="number"
                  name="interestRate"
                  value={loanData.interestRate}
                  onChange={handleChange}
                  step="0.1"
                />
              </div>
              
              <div className="form-group">
                <label>Loan Tenure (Years)</label>
                <select
                  name="loanTenure"
                  value={loanData.loanTenure}
                  onChange={handleChange}
                >
                  <option value="5">5 Years</option>
                  <option value="10">10 Years</option>
                  <option value="15">15 Years</option>
                  <option value="20">20 Years</option>
                  <option value="25">25 Years</option>
                  <option value="30">30 Years</option>
                </select>
              </div>
              
              <div className="emi-result">
                <h3>Monthly EMI: ₹{calculateEMI()}</h3>
              </div>
            </div>
          </div>
          
          <div className="loan-application">
            <h2>Apply for Home Loan</h2>
            
            <form onSubmit={handleSubmit} className="loan-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={loanData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={loanData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={loanData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="form-group">
                <label>Monthly Income (₹)</label>
                <input
                  type="number"
                  name="monthlyIncome"
                  value={loanData.monthlyIncome}
                  onChange={handleChange}
                  required
                  placeholder="Enter your monthly income"
                />
              </div>
              
              <button type="submit" className="btn btn-primary">Apply Now</button>
            </form>
          </div>
        </div>
        
        <div className="loan-features">
          <h2>Why Choose Our Home Loans?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <i className="fas fa-percentage"></i>
              <h3>Low Interest Rates</h3>
              <p>Starting from 8.5% with flexible repayment options</p>
            </div>
            
            <div className="feature-item">
              <i className="fas fa-file-alt"></i>
              <h3>Quick Processing</h3>
              <p>Get approval within 72 hours with minimal documentation</p>
            </div>
            
            <div className="feature-item">
              <i className="fas fa-rupee-sign"></i>
              <h3>High Loan Amount</h3>
              <p>Get up to 90% of property value with flexible tenure</p>
            </div>
            
            <div className="feature-item">
              <i className="fas fa-hand-holding-usd"></i>
              <h3>Balance Transfer</h3>
              <p>Transfer your existing home loan and save on interest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoans;