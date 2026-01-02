import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AllPokemon from './pages/AllPokemon'
import PokemonDetails from './pages/PokemonDetails'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/all-pokemon" element={<AllPokemon />} />
        <Route path="/pokemon-details" element={<PokemonDetails />} />
      </Routes>
    </div>
  )
}

export default App
