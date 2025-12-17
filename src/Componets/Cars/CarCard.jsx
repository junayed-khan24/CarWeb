import React from "react";

const CarCard = ({ car }) => {
  const { image, name, price, year, km, fuel, badge } = car;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
      <figure className="relative">
        <img src={image} alt={name} className="h-48 w-full object-cover" />
        {badge && (
          <span className="absolute top-3 left-3 badge badge-success text-white">
            {badge}
          </span>
        )}
      </figure>

      <div className="card-body p-4">
        <h2 className="font-semibold text-sm">{name}</h2>

        <p className="text-2xl font-bold text-green-600">{price} Kč</p>

        <div className="grid grid-cols-3 text-xs text-gray-500 mt-2">
          <span>{year}</span>
          <span>{km} km</span>
          <span>{fuel}</span>
        </div>

        <div className="card-actions mt-4">
          <button className="btn btn-outline btn-sm w-full">
            Detail vozu
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
