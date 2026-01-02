import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#0b0f19] text-white min-h-screen">
      
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-red-500/20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Welcome to the <br />
              <span className="text-yellow-400">Pokémon World</span>
            </h1>

            <p className="text-white/70 text-lg max-w-xl">
              Discover your favorite Pokémon, explore their powers, abilities,
              and evolutions. Catch them all in one place!
            </p>

            <div className="flex gap-4">
              <Link to={"/all-pokemon"} className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition">
                Explore Pokémon
              </Link>

              <button className="px-8 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
              alt="Pikachu"
              className="w-72 md:w-96 drop-shadow-2xl animate-bounce"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            What You Can Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white/5 border cursor-pointer border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">🔍 Search Pokémon</h3>
              <p className="text-white/60">
                Find Pokémon by name.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 cursor-pointer rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">📊 View Stats</h3>
              <p className="text-white/60">
                Check power levels, types, and evolutions.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
