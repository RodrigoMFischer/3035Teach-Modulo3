import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { getPokemonDetail, getPokemons } from '../Services/pokemon.service'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

interface Pokemon {
  sprites: {
    front_default: string;
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
`;

const Image = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 20px;
`;

export const PokemonInfo = () => {
  const [pokemonImage, setPokemonImage] = useState('')
  const { pokemon } = useParams();

  const getPokemonInfo = async (endPoint: string) => {
    const response: AxiosResponse<Pokemon> = await getPokemonDetail(endPoint);
    const image = response.data.sprites.front_default;
    setPokemonImage(image);
  }


  useEffect(() => {
    getPokemonInfo(`/pokemon/${pokemon}` || "")
  }, [pokemon])


  return (
    <Container>
      <Image src={pokemonImage} alt='Pokemon' />
      <h1>Em Construção...</h1>
    </Container>

  )
}