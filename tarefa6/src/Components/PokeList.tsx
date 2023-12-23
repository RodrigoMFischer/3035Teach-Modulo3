import { useEffect, useState } from "react";

import styled from 'styled-components';
import { getPokemonDetail, getPokemons } from "../Services/pokemon.service";
//import pokeDex from './infoPokeDex.png';

import PokeCard from "./PokeCard";

interface Pokemon {
  id: number;
  name: string;
  url: string;
  element: string;
  img?: string;
}
let previousPage = '';
let nextPage = '';

const PageContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
`;

const ChangePagesButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 1rem;  
  padding: 4px 16px;
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: transparent;
  color: #333; 
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e6f2ff;
  }

  &:active {    
    background-color: #aedfff;
  }

  &:disabled {
    color: #888; 
    cursor: not-allowed; 
    pointer-events: none;
  }
`;

const PokeList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])


  const getPokemonList = async (endPoint?: string) => {
    console.log('TO AQUI')
    const response = await getPokemons(endPoint)
    previousPage = response.data.previous;
    nextPage = response.data.next;

    const pokeListPromise: Promise<Pokemon>[] = response.data.results.map(async (poke: Pokemon) => {
      const pokemonDetailResponse = await getPokemonDetail(poke.url)
      return {
        id: pokemonDetailResponse.data.id,
        name: poke.name,
        img: pokemonDetailResponse.data.sprites.front_default,
        element: pokemonDetailResponse.data.types[0].type.name,
        url: poke.url
      } as Pokemon
    });

    const resolvedPokemons = await Promise.all(pokeListPromise)
    setPokemons(resolvedPokemons)
  }

  useEffect(() => {
    getPokemonList();
  }, [pokemons]);

  const scrollToTop = () => {
    const element = document.getElementById('top-buttons')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClick = (page: string) => {
    getPokemonList(page)
    scrollToTop();
  };

  return (
    <PageContainer>
      <img src="/infoPokeDex.png" alt="poke" />

      <ButtonContainer id='top-buttons'>
        <ChangePagesButton disabled={previousPage === null} onClick={() => getPokemonList(previousPage)}>&lt;</ChangePagesButton>
        <ChangePagesButton disabled={nextPage === null} onClick={() => getPokemonList(nextPage)} >&gt;</ChangePagesButton>
      </ButtonContainer>
      <CardGrid>
        {pokemons.map((pokemon) => (
          <PokeCard url={`/pokemon?pokemon=/pokemon/${pokemon.id}/`} key={pokemon.id} name={pokemon.name} image={pokemon.img!} id={pokemon.id} element={pokemon.element} />
        ))}

      </CardGrid>
      <ButtonContainer>
        <ChangePagesButton disabled={previousPage === null} onClick={() => handleButtonClick(previousPage)}>&lt;</ChangePagesButton>
        <ChangePagesButton disabled={nextPage === null} onClick={() => handleButtonClick(nextPage)} >&gt;</ChangePagesButton>
      </ButtonContainer>
    </PageContainer>
  );
};

export default PokeList;