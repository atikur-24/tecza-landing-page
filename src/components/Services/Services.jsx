import React from "react";
import servicesData from "../../../public/data/services";
import "./Services.css";

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {servicesData?.map((service) => (
            <div key={service.id} className="service-item">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
