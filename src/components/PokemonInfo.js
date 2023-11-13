import { Component } from 'react';
import { getPokemon } from '../services/pokemon-api';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';

class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ pokemon: null });
      this.fetchPokemon(this.props.pokemonName);
    }
  }

  fetchPokemon = async pokemonName => {
    this.setState({ isLoading: true });
    // console.log(pokemonName);
    try {
      const data = await getPokemon(pokemonName);
      this.setState({ pokemon: data });
      // console.log(data);
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  render() {
    const { pokemon, isLoading, error } = this.state;
    const { pokemonName } = this.props;
    return (
      <div>
        {error && (
          <p>К сожалению мы не смогли найти имя покемона {pokemonName}</p>
        )}
        {isLoading && <PokemonPendingView />}

        {pokemon && <PokemonDataView pokemon={this.state.pokemon} />}
      </div>
    );
  }
}

export default PokemonInfo;
