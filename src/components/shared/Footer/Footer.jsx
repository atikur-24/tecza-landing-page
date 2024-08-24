import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../public/images/logo/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-container">
          {/* Logo and Content Column */}
          <div className="footer-col">
            <div className="footer-logo">
              <img src={logo} alt="Tecza" />
            </div>
            <p className="footer-desc">Tecza is a leader in providing cutting-edge technology solutions. We deliver high-quality services that cater to the unique needs of our clients.</p>
          </div>
          {/* Quick Links Column */}
          <div className="footer-col">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Services Column */}
          <div className="footer-col">
            <h5 className="footer-title">Our Services</h5>
            <ul className="footer-links">
              <li>
                <Link to="/web-development" className="footer-link">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/ui-ux" className="footer-link">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/consulting" className="footer-link">
                  Consulting
                </Link>
              </li>
              <li>
                <Link to="/seo" className="footer-link">
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>
          {/* Office Location Column */}
          <div className="footer-col">
            <h5 className="footer-title">Office Location</h5>
            <div className="footer-location">
              <p>123 Technology Ave, Suite 100</p>
              <p>Dhaka, Bangladesh</p>
              <p>Email: info@yourcompany.com</p>
              <p>Phone: +880 1234-567890</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="copyright-text">
        <p>&copy; 2024 YourCompany. All rights reserved.</p>
      </div> */}
    </footer>
  );
};

export default Footer;
