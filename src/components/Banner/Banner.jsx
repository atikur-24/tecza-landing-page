import { useEffect, useRef, useState } from "react";
import bannersData from "../../../public/data/banners";
import "./Banner.css";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % bannersData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? bannersData.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {bannersData.map((banner) => (
          <div key={banner.id} className="carousel-item" style={{ backgroundImage: `url(${banner.backgroundImage})` }}>
            <div className="carousel-content">
              <h1 className="carousel-title">{banner.title}</h1>
              <p>{banner.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

export default Banner;
