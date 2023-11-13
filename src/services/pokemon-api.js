import axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export const getPokemon = async pokemonName => {
  const { data } = await instanse.get(`/${pokemonName}`);
  // console.log(data);
  return data;
};

// https://pokeapi.co/api/v2/pokemon/имя_покемона
