import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left */}
      <div className="flex flex-col items-center text-center">
        <img
          src={pokemon.img}
          alt={pokemon.name}
          className="w-64 h-64 drop-shadow-2xl"
        />

        <h1 className="mt-4 text-3xl font-bold text-yellow-400">
          {pokemon.name}
        </h1>

        <p className="text-white/50">#{pokemon.id}</p>

        <div className="flex gap-3 mt-4">
          {pokemon.types?.map((type) => (
            <span
              key={type}
              className="px-4 py-1 border border-yellow-300 rounded-full bg-yellow-500/20 text-yellow-300 text-sm"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="space-y-6">
        {/* Stats */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Base Stats</h3>

          {pokemon.stats?.map((stat) => (
            <div key={stat.name} className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white/70">{stat.name}</span>
                <span>{stat.value}</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full">
                <div
                  className="h-2 bg-yellow-400 rounded-full"
                  style={{ width: `${stat.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Abilities */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Abilities</h3>

          <div className="flex flex-wrap gap-2">
            {pokemon.abilities?.map((ab) => (
              <span
                key={ab}
                className="px-4 py-1 border border-yellow-300 rounded-full bg-white/10 text-sm"
              >
                {ab}
              </span>
            ))}
          </div>
        </div>

        {/* Height & Weight */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <p className="text-white/60 text-sm">Height</p>
            <p className="text-lg font-semibold">{pokemon.height/10} m</p>
          </div>

          <div className="bg-white/5 rounded-xl p-4 text-center">
            <p className="text-white/60 text-sm">Weight</p>
            <p className="text-lg font-semibold">{pokemon.weight/10} kg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
