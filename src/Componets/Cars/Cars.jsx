import React from "react";
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
];

const Cars = () => {
  return (
    <section className="bg-base-200 py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Nové vozy pro Vás</h2>
          <p className="text-sm text-gray-500">458 vozů ihned k odběru</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;
