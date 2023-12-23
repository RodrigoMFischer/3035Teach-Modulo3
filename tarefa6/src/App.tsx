import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Pokedex } from './Pages/Pokedex'
import { PokemonInfo } from './Pages/PokemonInfo'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pokedex />} />
        <Route path='/pokemon/:pokemon' element={<PokemonInfo />} />
      </Routes>
    </BrowserRouter>

  )}

export default App;
