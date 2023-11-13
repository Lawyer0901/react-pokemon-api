import { Component } from 'react';

class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.pokemonName.trim() === '') {
      return alert('Enter Pokemon Name');
    }
    this.props.onSubmit(this.state);
    // console.log(this.state);
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
