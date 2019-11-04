import React, { Component } from 'react';
import PokemonList from '../pokemon/PokemonList';
import Pages from '../pages/Pages';
import axios from 'axios';
import { withRouter } from 'react-router';

export class PokeCalls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      pokemonList: [],
      loading: false,
      sorted: false,
      sliceNum: 0,
      error: null,
      newPokemonList: [],
      pokeFilter: [],
      sliceEndNum: 50,
      pageNum: 1
    };
  }

  render() {
    return (
      <div>
        <PokemonList />
        <Pages></Pages>
      </div>
    );
  }
}

export default withRouter(PokeCalls);
