import React from "react";
import { Link } from "react-router-dom";
import menuConfig from "../../../../public/data/menuConfig";
import logo from "../../../../public/images/logo/logo.png";
import "./footer.css";

const Footer = () => {
  // extract pages and services links
  const pagesLinks = menuConfig?.find((item) => item.name === "Pages")?.submenu || [];
  const servicesLinks = menuConfig?.find((item) => item.name === "Services")?.submenu || [];

  return (
    <footer id="footer-main-container">
      <div className="container">
        <div className="grid-container">
          {/* logo and content column */}
          <div className="footer-col">
            <div className="footer-logo">
              <img src={logo} alt="Tecza" />
            </div>
            <p className="footer-desc">Tecza is a leader in providing cutting-edge technology solutions. We deliver high-quality services that cater to the unique needs of our clients.</p>
          </div>
          {/* quick links column */}
          <div className="footer-col">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              {pagesLinks?.map((page) => (
                <li key={page.path}>
                  <Link to={page.path} className="footer-link">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* services column */}
          <div className="footer-col">
            <h5 className="footer-title">Our Services</h5>
            <ul className="footer-links">
              {servicesLinks?.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="footer-link">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* office location column */}
          <div className="footer-col">
            <h5 className="footer-title">Office Location</h5>
            <div className="footer-location">
              <p>123 Technology Ave, Suite 100</p>
              <p>Dhaka, Bangladesh</p>
              <p>Email: info@tecza.com</p>
              <p>Phone: +880 1234-567890</p>
            </div>
          </div>
        </div>
      </div>
      {/* copy right text */}
      <div className="copyright-text">
        <p>&copy; 2024 Tecza. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
