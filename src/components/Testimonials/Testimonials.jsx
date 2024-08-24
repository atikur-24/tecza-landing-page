import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import testimonialsData from "../../../public/data/testimonials";
import SectionTitle from "../ui/SectionTitle";
import "./testimonials.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < testimonialsData?.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  return (
    <section className="container">
      <SectionTitle title="Testimonials" description="We have a diverse range of clients, including startups, small businesses, and large enterprises." />
      <div className="testimonials-slider">
        <div className="navigation-buttons">
          <button onClick={prevSlide} className="arrow-btn" disabled={currentIndex === 0}>
            <FaArrowLeft />
          </button>
          <button onClick={nextSlide} className="arrow-btn" disabled={currentIndex === testimonialsData?.length - 3}>
            <FaArrowRight />
          </button>
        </div>
        <div className="ts-slider-container">
          <div className="ts-slider-inner" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
            {testimonialsData?.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-image-container">
                  <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div>
                  <p className="testimonial-author">{testimonial.author}</p>
                  <p className="testimonial-designation">{testimonial.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
