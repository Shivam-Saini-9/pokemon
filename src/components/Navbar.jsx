import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0f19]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <NavLink
          to="/"
          className="text-2xl font-extrabold text-yellow-400 flex items-center gap-2"
        >
           Pokémon
        </NavLink>

        <div className="flex gap-8 text-white/80 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` transition group relative duration-300 ${
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }`
            }
          >
            {({isActive})=>(
              <>
              Home
              <span className={` h-0.5 absolute left-0 bottom-0 bg-yellow-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              
              </>
            )}
          </NavLink>

          <NavLink
            to="/all-pokemon"
            className={({ isActive }) =>
              ` transition group relative duration-300 ${
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }`
            }
          >{({isActive})=>(
            <>
            All Pokémon
            <span className={` h-0.5 absolute left-0 bottom-0 bg-yellow-400  transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"} `}></span>
            
            </>
          )}
          </NavLink>

          <NavLink
            to="/pokemon-details"
            className={({ isActive }) =>
              ` transition group relative duration-300 ${
                isActive ? "text-yellow-400" : ""
              }`
            }
          >
            {({isActive})=>(
              <>
              
              Pokémon Details
              <span className={` h-0.5 absolute left-0 bottom-0 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300 ${isActive ? "w-full":""}`}></span>
              </>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
