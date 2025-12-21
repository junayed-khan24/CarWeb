import React, { useState } from "react";
import CarCard from "./CarCard";

const cars = [
  {
    id: 1,
    image: "../../../src/assets/car1.jpg",
    name: "Land Rover Range Rover P565",
    price: "4 349 000",
    year: 2019,
    km: "98k",
    fuel: "Petrol",
    badge: "SKLADOVÉ",
  },
  {
    id: 2,
    image: "../../../src/assets/car2.jpg",
    name: "Jaguar F-Type Cabriolet",
    price: "3 379 000",
    year: 2018,
    km: "130k",
    fuel: "Petrol",
    badge: "-12%",
  },
  {
    id: 3,
    image: "../../../src/assets/car3.WEBP",
    name: "Range Rover SV Ultimate",
    price: "5 199 000",
    year: 2021,
    km: "0",
    fuel: "Petrol",
    badge: "NOVÉ",
  },
  {
    id: 4,
    image: "../../../src/assets/car4.jpg",
    name: "Jaguar XE SV Project 8",
    price: "3 999 000",
    year: 2019,
    km: "8k",
    fuel: "Petrol",
  },
  {
    id: 5,
    image: "../../../src/assets/car6.WEBP",
    name: "Range Rover Evoque P300",
    price: "2 899 000",
    year: 2020,
    km: "12k",
    fuel: "Diesel",
    badge: "SKLADOVÉ",
  },
  {
    id: 6,
    image: "../../../src/assets/car5.jpg",
    name: "Jaguar I-PACE EV400",
    price: "4 599 000",
    year: 2021,
    km: "5k",
    fuel: "Electric",
    badge: "NOVÉ",
  },
  {
    id: 7,
    image: "../../../src/assets/car1.jpg",
    name: "Land Rover Discovery HSE",
    price: "3 450 000",
    year: 2018,
    km: "85k",
    fuel: "Diesel",
    badge: "-8%",
  },
  {
    id: 8,
    image: "../../../src/assets/car2.jpg",
    name: "Jaguar F-PACE S",
    price: "3 199 000",
    year: 2019,
    km: "40k",
    fuel: "Petrol",
  },
  {
    id: 9,
    image: "../../../src/assets/car9.jpg",
    name: "Range Rover Velar D300",
    price: "4 100 000",
    year: 2020,
    km: "22k",
    fuel: "Diesel",
  },
  {
    id: 10,
    image: "../../../src/assets/car10.jpg",
    name: "Jaguar XF R-Sport",
    price: "3 299 000",
    year: 2019,
    km: "30k",
    fuel: "Petrol",
    badge: "-10%",
  },
  {
    id: 11,
    image: "../../../src/assets/car11.jpg",
    name: "Land Rover Defender 110",
    price: "4 500 000",
    year: 2021,
    km: "3k",
    fuel: "Diesel",
    badge: "NOVÉ",
  },
  {
    id: 12,
    image: "../../../src/assets/car12.jpg",
    name: "Jaguar E-PACE P250",
    price: "2 750 000",
    year: 2020,
    km: "15k",
    fuel: "Petrol",
    badge: "SKLADOVÉ",
  },
];

const Cars = () => {
  const [visible, setVisible] = useState(8); // প্রথমে 8 টা দেখাবে

  const showMoreCars = () => {
    setVisible(cars.length); // বাকি সব দেখাবে
  };

  return (
    <section className="bg-base-200 py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Nové vozy pro Vás</h2>
          <p className="text-sm text-gray-500">458 vozů ihned k odběru</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {cars.slice(0, visible).map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {visible < cars.length && (
          <div className="text-center mt-6">
            <button
              onClick={showMoreCars}
              className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cars;
