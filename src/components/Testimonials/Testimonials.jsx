import React, { useState } from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      quote: "This company provided excellent service and their team was extremely helpful.",
      author: "John Doe",
      designation: "CEO, Company A",
    },
    {
      id: 2,
      quote: "I'm highly satisfied with the quality of work delivered. Highly recommend!",
      author: "Jane Smith",
      designation: "Marketing Head, Company B",
    },
    {
      id: 3,
      quote: "Professional, efficient, and great results. Couldn't ask for more.",
      author: "Michael Johnson",
      designation: "Product Manager, Company C",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="testimonials-container">
      <div className="testimonials-header">
        <h2>Testimonials</h2>
        <div className="navigation-buttons">
          <button onClick={handlePrev} className="nav-button">
            Previous
          </button>
          <button onClick={handleNext} className="nav-button">
            Next
          </button>
        </div>
      </div>
      <div className="testimonial-slide">
        <p className="testimonial-quote">"{testimonialsData[currentIndex].quote}"</p>
        <p className="testimonial-author">{testimonialsData[currentIndex].author}</p>
        <p className="testimonial-designation">{testimonialsData[currentIndex].designation}</p>
      </div>
    </section>
  );
};

export default Testimonials;
