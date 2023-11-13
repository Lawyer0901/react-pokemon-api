import axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export const fetchPokemon = async search => {
  const data = await instanse.get(`/${search}`).then(res => {
    console.log(res);
  });

  console.log(data);
};

// https://pokeapi.co/api/v2/pokemon/имя_покемона
