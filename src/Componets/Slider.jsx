import React, { useState, useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router";
import { useSwipeable } from "react-swipeable";



const slides = [
  {
    image: '../../src/assets/ban1.webp',
    title: "Catching Fish",
    subtitle: "Experience the thrill of fishing adventures, patience, nature, and unforgettable moments by water.",
  },
  {
    image: '../../src/assets/ban1.webp',
    title: "Write Stories",
    subtitle: "Unleash creativity through compelling stories that inspire emotions, ideas, and imagination worldwide.",
  },
  {
    image: '../../src/assets/ban2.webp',
    title: "Nature Photography",
    subtitle: "Capture stunning natural beauty, wildlife, landscapes, and peaceful moments through your lens.",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => setCurrent(index);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % slides.length),
    onSwipedRight: () =>
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length),
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative w-full h-[40vh]  md:h-[60vh] lg:h-[85vh]  overflow-hidden select-none"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Responsive Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="
                       object-contain md:object-cover
                       brightness-60 
                       transition-all duration-700"
          />

          {/* Gradient Overlay for Text Visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>

          {/* Text Section (Mobile Centered) */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10">
            <h1 className="text-white font-bold text-2xl sm:text-4xl md:text-6xl mb-3 sm:mb-5 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-white text-sm sm:text-lg md:text-2xl max-w-xs sm:max-w-xl md:max-w-2xl mb-5 sm:mb-8 drop-shadow-md leading-relaxed">
              {slide.subtitle}
            </p>
            <Link to="/allGroups">
            <button className="flex items-center gap-2 bg-black/90 hover:bg-black hover:animate-pulse text-white font-semibold py-2 sm:py-3 px-5 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300">
              Vew More
              <HiArrowRight className="text-xl sm:text-2xl" />
            </button>
            </Link>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white scale-110"
                : "bg-black/55 hover:bg-black/80"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;