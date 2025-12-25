import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Rahim Uddin",
    role: "Business Owner",
    review:
      "Amazing service! Car condition was excellent and booking process was super easy.",
  },
  {
    id: 2,
    name: "Karim Ahmed",
    role: "Software Engineer",
    review:
      "Transparent pricing and friendly support. Highly recommended!",
  },
  {
    id: 3,
    name: "Sadia Rahman",
    role: "Traveler",
    review:
      "Best car rental experience I’ve ever had. Smooth and reliable.",
  },
  {
    id: 4,
    name: "Hasan Mahmud",
    role: "Freelancer",
    review:
      "Customer support was very responsive and helpful throughout.",
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    role: "Marketing Executive",
    review:
      "Great vehicle options and flexible plans. Loved the service!",
  },
  {
    id: 6,
    name: "Tanvir Hossain",
    role: "Entrepreneur",
    review:
      "Professional service with excellent cars. Will use again!",
  },
];

const Reviews = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">
            Customer Reviews
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            What our happy customers say about our service
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card bg-white border border-gray-300 shadow-sm h-full">
                <div className="card-body">
                  <p className="text-gray-400 text-sm mb-4">
                    “{item.review}”
                  </p>

                  <div className="mt-auto">
                    <h4 className="font-semibold text-gray-600">
                      {item.name}
                    </h4>
                    <span className="text-green-500 text-sm">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Reviews;
