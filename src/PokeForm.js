import './PokeForm.css';
import React, { Component } from 'react';
import axios from 'axios';

class PokeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemonName: '', pokemonImgUrl: '' };
  }

  async searchPokemonByName(event) {
    event.preventDefault();

    if (this.state.pokemonName) {
      const result = await axios.get(
        'https://pokeapi.co/api/v2/pokemon/' + this.state.pokemonName
      );
      this.setState({ pokemonImgUrl: result.data.sprites.back_default });
    }
  }

  handlePokemonNameChange(event) {
    this.setState({ pokemonName: event.target.value });
  }

  render() {
    return <div>
      <form>
        <h2>Recherche de pokemon...</h2>
        <label htmlFor='poke-name-input'>Nom du pokemon</label>
        <input id='poke-name-input' onChange={(event)=> this.handlePokemonNameChange(event)} />
        <button type="submit" onClick={(event) => this.searchPokemonByName(event)}>Chercher ce pokemon</button>
      </form>
      {this.state.pokemonImgUrl ? <img src={this.state.pokemonImgUrl} alt='pokemon best profile' /> : ''}
    </div>
  }
}

export default PokeForm;
