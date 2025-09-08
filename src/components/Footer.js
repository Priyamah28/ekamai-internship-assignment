import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    company: [
      { text: 'About Us', url: '/about' },
      { text: 'Careers', url: '/careers' },
      { text: 'Contact Us', url: '/contact' },
      { text: 'Testimonials', url: '/testimonials' }
    ],
    services: [
      { text: 'Buy Properties', url: '/properties' },
      { text: 'Rent Properties', url: '/properties?type=rent' },
      { text: 'Post Property', url: '/properties?type=sell' },
      { text: 'Home Loans', url: '/homeloans' }
    ],
    resources: [
      { text: 'Blog', url: '/blog' },
      { text: 'Guides', url: '/guides' },
      { text: 'FAQ', url: '/faq' },
      { text: 'Site Map', url: '/sitemap' }
    ],
    legal: [
      { text: 'Terms of Use', url: '/terms' },
      { text: 'Privacy Policy', url: '/privacy' },
      { text: 'Disclaimer', url: '/disclaimer' }
    ]
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>MagicBricks</h3>
            <ul className="footer-links">
              {footerLinks.company.map((link, index) => (
                <li key={index}><Link to={link.url}>{link.text}</Link></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              {footerLinks.services.map((link, index) => (
                <li key={index}><Link to={link.url}>{link.text}</Link></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Resources</h3>
            <ul className="footer-links">
              {footerLinks.resources.map((link, index) => (
                <li key={index}><Link to={link.url}>{link.text}</Link></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Legal</h3>
            <ul className="footer-links">
              {footerLinks.legal.map((link, index) => (
                <li key={index}><Link to={link.url}>{link.text}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; 2023 MagicBricks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;