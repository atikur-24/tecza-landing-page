import React from "react";
import { FaSkype, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import "./getInTouch.css";

const GetInTouch = () => {
  return (
    <section className="getInTouch-section">
      <div className="container">
        <div className="getInTouch-container">
          <div className="getInTouch-content">
            <h1 className="getInTouch-title">Have an exciting project in mind?</h1>
            <p className="getInTouch-subtile">We cordially invite you to initiate a discussion with us.</p>
          </div>
          <div className="getInTouch-icons">
            <Link to="/" className="social-icon">
              <FaWhatsapp />
            </Link>
            <Link to="/" className="social-icon">
              <FaTelegram />
            </Link>
            <Link to="/" className="social-icon">
              <FaSkype />
            </Link>
          </div>
          <div>
            <Link to="/contact-us">
              <Button variant="secondary" size="large">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
