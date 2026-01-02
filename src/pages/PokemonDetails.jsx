import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";

const PokemonDetails = () => {
  const [poki, setPoki] = useState([]);
  const [nextUrl, setNextUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('')

  const allPok = async () => {
    if (!nextUrl || loading) return;
    setLoading(true);

    const res = await axios.get(nextUrl);
    // console.log(res);

    const details = await Promise.all(
      res.data.results.map(async (p) => {
        const pokeDet = await axios.get(p.url);

        return {
          id: pokeDet.data.id,
          name: pokeDet.data.name,
          img: pokeDet.data.sprites.other["official-artwork"].front_default,
          types: pokeDet.data.types.map((t) => t.type.name),
          abilities: pokeDet.data.abilities.map((a) => a.ability.name),
          stats: pokeDet.data.stats.map((s) => ({
            name: s.stat.name,
            value: s.base_stat,
          })),
          height: pokeDet.data.height,
          weight: pokeDet.data.weight,
        };
      })
    );

    setPoki((prv) => [...prv, ...details]);
    setNextUrl(res.data.next);
    setLoading(false);
  };

  const searchPokemon = async () => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
    );

    setPoki([{
      id: res.data.id,
      name: res.data.name,
      img: res.data.sprites.other["official-artwork"].front_default,
      types: res.data.types.map(t => t.type.name),
      abilities: res.data.abilities.map(a => a.ability.name),
      stats: res.data.stats.map(s => ({
        name: s.stat.name,
        value: s.base_stat
      })),
      height: res.data.height,
      weight: res.data.weight
    }]);
  } catch {
    alert("Pokemon nahi mila");
  }
};


  useEffect(() => {
    const handleScroll =()=>{
        if(window.innerHeight + window.scrollY>=document.documentElement.scrollHeight-200){
            allPok();
        }
    }

    window.addEventListener("scroll",handleScroll)

    return ()=> window.removeEventListener("scroll",handleScroll)
  }, [nextUrl,loading]);

  return (
    <section className="min-h-screen bg-[#0b0f19] text-white flex-col flex items-center justify-center px-6">
      <div className="w-full max-w-4xl mt-20 bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8">
        {/* Search Bar */}
        <div className="flex gap-4 mb-10">
          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search Pokémon..."
            className="flex-1 bg-black/40 border border-white/10 rounded-xl px-5 py-3 outline-none"
          />
          <button onClick={searchPokemon} className="px-6 py-3 rounded-xl bg-yellow-500 text-black font-semibold">
            Search
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-wrap justify-center w-9/10 mx-auto my-10 gap-10">
        {poki.map((e, i) => {
          return (
            <div className="w-full max-w-3xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8">
              <PokemonCard key={i} pokemon={e} />
            </div>
          );
        })}
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
    </section>
  );
};

export default PokemonDetails;
