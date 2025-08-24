import React from "react";

export default function WomShoeCard() {
  return (
    <>
      <div
        key={shoe.id}
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <img
            src={shoe.image}
            alt={shoe.name}
            className="h-32 w-auto object-contain"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2">{shoe.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{shoe.category}</p>
          <p className="text-lg font-bold text-pink-600">{shoe.price}</p>
          <button className="w-full mt-3 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </>
  );
}
