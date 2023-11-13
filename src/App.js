import { Component } from 'react';
import PokemonForm from './components/PokemonForm';
import PokemonInfo from './components/PokemonInfo';

export default class App extends Component {
  // Определение начального состояния с пустым pokemonName
  state = {
    pokemonName: '',
  };

  handleSubmit = pokemonName => {
    this.setState({ ...pokemonName });
    // console.log(pokemonName);
  };

  render() {
    const { pokemonName } = this.state;
    const { handleSubmit } = this;
    return (
      <div>
        <PokemonForm onSubmit={handleSubmit} />
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    );
  }
}
