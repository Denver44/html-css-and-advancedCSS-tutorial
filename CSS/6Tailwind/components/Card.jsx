import React from "react";
import ClockIcon from "../public/icons/ClockIcon.js";

function Card({ imgSrc, title, chef, timing }) {
  return (
    <div>
      <div className="card hover:shadow-lg">
        <img
          src={imgSrc}
          alt="pic"
          className="w-full h-32 sm:h-48 object-cover"
        />
        <div>
          <span className="font-bold">{title}</span>
          <span className="block text-gray-500 text-sm">{chef}</span>
        </div>
        <div className="badge">
          <ClockIcon />

          <span>{timing}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
