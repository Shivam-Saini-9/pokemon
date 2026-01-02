import { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "../components/PokeCard";

const AllPokemon = () => {
  const [poki, setPoki] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  const allPok = async () => {
    if (!nextUrl || loading) return;
    setLoading(true);

    const res = await axios.get(nextUrl);

    const details = await Promise.all(
      res.data.results.map(async (p) => {
        const pokiDet = await axios.get(p.url);

        return {
          name: p.name,
          img: pokiDet.data.sprites.other["official-artwork"].front_default,
          ability: pokiDet.data.abilities.map((a) => a.ability.name),
        };
      })
    );
    setPoki((prv) => [...prv, ...details]);
    setNextUrl(res.data.next);
    setLoading(false);
  };

  useEffect(() => {
    const handleScroll=()=>{
        if(
        window.innerHeight+window.scrollY>=document.documentElement.scrollHeight - 200
        ){
            allPok();
        }
    }

    window.addEventListener("scroll",handleScroll)

    return ()=> window.removeEventListener("scroll",handleScroll)

  }, [nextUrl,loading]);

  return (
    <section className="min-h-screen bg-[#0b0f19] text-white pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
            All Pokémon
          </h1>
          <p className="text-white/60 mt-2">Explore the Pokémon universe</p>
        </div>

        {loading && <p className="text-white text-center mt-6">Loading...</p>}

        <div className=" flex flex-wrap gap-6">
          {poki.map((e, id) => (
            <PokeCard
              key={id}
              id={id + 1}
              name={e.name}
              image={e.img}
              types={e.ability}
            />
          ))}
        </div>

        <div className="w-full flex justify-center mt-10">

          {nextUrl && (
            <button
              onClick={allPok}
              className="px-6 py-3 bg-yellow-400 text-black rounded font-semibold hover:bg-yellow-300"
            >
              Load Pokémon
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllPokemon;
