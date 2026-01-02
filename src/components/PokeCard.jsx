import React from "react";

const PokeCard = ({ name, id, image, types }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl w-56 p-4 shadow-lg hover:scale-105 transition text-center">

      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-24 h-24 mx-auto"
      />

      {/* ID */}
      <p className="text-white/40 text-sm mt-1">
        #{id}
      </p>

      {/* Name */}
      <h3 className="mt-2 text-lg font-semibold capitalize text-white">
        {name}
      </h3>

      {/* Types */}
      <div className="flex flex-wrap justify-center gap-2 mt-3">
        {types.map((type) => (
          <span
            key={type}
            className="text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 capitalize"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokeCard;
