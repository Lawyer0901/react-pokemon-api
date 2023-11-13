import { Component } from 'react';

class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    console.log(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ pokemonName: '' });
  };
  render() {
    const { pokemonName } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="pokemonName"
          value={pokemonName}
          placeholder="Type pokemon name"
        />
        <button>Search</button>
      </form>
    );
  }
}

export default PokemonForm;
