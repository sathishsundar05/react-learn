import React from 'react';

function Card({ image, title, description}) {
  return (
    <div className="w-64 rounded shadow-lg m-4 p-2 bg-white text-center text-black duration-500 ">
      <img className="w-full h-40 object-cover" src={image} alt={title} />
      <div className="px-4 py-4">
        <div className="font-bold text-lg mb-4">{title}</div>
        <p className="text-sm mb-2">{description}</p>
      </div>
    </div>
  );
}

export default Card;
