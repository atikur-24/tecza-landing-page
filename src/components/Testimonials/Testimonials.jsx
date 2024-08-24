import React, { useState } from "react";

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
    {
      id: 4,
      quote: "Fantastic work! The team really understood our needs.",
      author: "Emily Davis",
      designation: "CTO, Company D",
    },
    {
      id: 5,
      quote: "Highly recommend their services, very satisfied with the results.",
      author: "Robert Brown",
      designation: "Founder, Company E",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= testimonialsData.length - 3 ? 0 : prevIndex + 1));
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
      <div className="testimonials-slider">
        {testimonialsData.slice(currentIndex, currentIndex + 3).map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-author">{testimonial.author}</p>
            <p className="testimonial-designation">{testimonial.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
