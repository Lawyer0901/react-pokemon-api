import { Component } from 'react';
import { getPokemon } from '../services/pokemon-api';

class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ pokemon: null });
      this.fetchPokemon(this.props.pokemonName);
    }
  }

  fetchPokemon = async pokemonName => {
    // console.log(pokemonName);
    try {
      const data = await getPokemon(pokemonName);
      this.setState({ pokemon: data });
      // console.log(data);
    } catch (error) {
      this.setState({ error: error.message });
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        {this.state.pokemon ? (
          <div>
            <img
              src={
                this.state.pokemon.sprites.other['official-artwork']
                  .front_default
              }
              alt={this.state.pokemon.name}
              width="200"
            />
            <p>{this.state.pokemon.name}</p>
            <ul>
              {this.state.pokemon.stats.map(entry => {
                return (
                  <li key={entry.stat.name}>
                    <p>
                      {entry.stat.name}: {entry.base_stat}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <p>Введите имя покемона :)</p>
        )}
      </div>
    );
  }
}

export default PokemonInfo;
