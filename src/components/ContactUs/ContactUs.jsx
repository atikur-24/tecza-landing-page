import React from "react";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";
import "./contactus.css";

const ContactUs = () => {
  return (
    <section>
      <SectionTitle title="Contact Us" description="We have a diverse range of clients, including startups, small businesses, and large enterprises." />
      <div className="contact-container">
        <div className="contact-content">
          {/* map Part */}
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8460663746943!2d90.37483521536398!3d23.75085169457054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8979e5e5973%3A0x2c17402a5fa1a5bb!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1596549484728!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>

          {/* contact form Part */}
          <div className="contact-form">
            <h2>Get In Touch</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <Button type="submit" id="submit-btn">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
