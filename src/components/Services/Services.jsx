import React from "react";
import { FaCode, FaLaptopCode, FaMobileAlt, FaPencilRuler } from "react-icons/fa";
import { Link } from "react-router-dom";
import servicesData from "../../../public/data/services";
import Button from "../ui/Button";
import "./services.css";

// here import services icons
const iconMap = {
  FaLaptopCode: <FaLaptopCode size={38} fill="#D1C5FF" color="#D1C5FF" border-color="#D1C5FF" />,
  FaCode: <FaCode size={38} fill="#FFC1C9" color="#FFC1C9" border-color="#FFC1C9" />,
  FaMobileAlt: <FaMobileAlt size={38} fill="#D5EAF8" color="#D5EAF8" border-color="#D5EAF8" />,
  FaPencilRuler: <FaPencilRuler size={38} fill="#FFEECB" color="#FFEECB" border-color="#FFEECB" />,
};

const Services = () => {
  return (
    <section className="container">
      <div className="services-section">
        <div className="services-content">
          <h2 className="services-header">Transforming Ideas into Digital Experiences</h2>
          <p className="services-description">We specialize in crafting captivating websites, immersive user interfaces, and strategic digital marketing solutions that propel your brand’s success.</p>
          <Link
            style={{
              width: "fit-content",
            }}
            to="/services"
          >
            <Button>Explore Services</Button>
          </Link>
        </div>

        <div className="services-grid">
          {servicesData?.map((service) => (
            <div key={service.id} className="services-card">
              <div className="service-icon">{iconMap[service.icon]}</div>
              <Link to={service.path} className="service-title">
                {service.title}
              </Link>
              <p className="service-subtitle">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
