import { Component } from 'react';
import { fetchPokemon } from '../services/pokemon-api';

class PokemonInfo extends Component {
  state = {
    pokemon: null,
  };

  componentDidMount() {
    fetchPokemon(this.props.pokemonName);
  }
  render() {
    return <div>...</div>;
  }
}

export default PokemonInfo;
