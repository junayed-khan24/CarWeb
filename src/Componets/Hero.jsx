import React, { useEffect, useState } from "react";

const Hero = () => {
  const [current, setCurrent] = useState(1);
  const totalSlides = 3;

  // 🔁 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === totalSlides ? 1 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // 🎯 Slide scroll
  useEffect(() => {
    const slide = document.getElementById(`slide${current}`);
    slide?.scrollIntoView({ behavior: "smooth" });
  }, [current]);

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh]">

      <div className="carousel w-full h-full">

        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60 flex items-center">
            <div className="px-5 md:px-10 max-w-xl space-y-3 text-white">
              <span className="badge badge-success text-xs md:text-sm">
                Activities
              </span>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                Diverse Activities
              </h1>
              <p className="text-sm md:text-base text-gray-200">
                From yoga to competitive tournaments
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1554284126-aa88f22d8b72"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60 flex items-center">
            <div className="px-5 md:px-10 max-w-xl space-y-3 text-white">
              <span className="badge badge-primary text-xs md:text-sm">
                Fitness
              </span>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                Build Your Strength
              </h1>
              <p className="text-sm md:text-base text-gray-200">
                Modern equipment & professional trainers
              </p>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07b"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60 flex items-center">
            <div className="px-5 md:px-10 max-w-xl space-y-3 text-white">
              <span className="badge badge-warning text-xs md:text-sm">
                Community
              </span>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                Train Together
              </h1>
              <p className="text-sm md:text-base text-gray-200">
                Strong & friendly fitness community
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ⬅➡ Buttons (Touch Friendly) */}
      <div className="absolute left-3 right-3 md:left-6 md:right-6 top-1/2 -translate-y-1/2 flex justify-between">
        <button
          onClick={() =>
            setCurrent(current === 1 ? totalSlides : current - 1)
          }
          className="btn btn-circle btn-sm md:btn-md bg-black/60 border-none text-white hover:bg-black"
        >
          ❮
        </button>

        <button
          onClick={() =>
            setCurrent(current === totalSlides ? 1 : current + 1)
          }
          className="btn btn-circle btn-sm md:btn-md bg-black/60 border-none text-white hover:bg-black"
        >
          ❯
        </button>
      </div>

      {/* ● Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 md:gap-3">
        {[1, 2, 3].map((i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all ${
              current === i ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
