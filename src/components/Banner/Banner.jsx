import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import bannersData from "../../../public/data/banners";
import Button from "../ui/Button";
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
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % bannersData.length);
    }, 8000);
    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div className="slider">
      <div className="slider-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {bannersData.map((banner) => (
          <div key={banner.id} className="slider-item" style={{ backgroundImage: `url(${banner.backgroundImage})` }}>
            <div className="slider-content">
              <h1 className="slider-title">{banner.title}</h1>
              <p className="slider-subtitle">{banner.subtitle}</p>
              <Link to="/contact-us">
                <Button>Contact us</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button className="slider-button prev" onClick={prevSlide} disabled={currentSlide === 0}>
        ‹
      </button>
      <button className="slider-button next" onClick={nextSlide} disabled={currentSlide === bannersData.length - 1}>
        ›
      </button>
    </div>
  );
};

export default Banner;
