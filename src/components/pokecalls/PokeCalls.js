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

  componentDidMount() {
    this.fetchPokemon();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.filterList !== prevProps.filterList) {
      this.handleFilterList();
    }
    if (this.state.startNum !== prevState.startNum) {
      this.fetchPokemon();
    }
    if (this.state.sliceNum !== prevState.sliceNum) {
      this.fetchPokemon();
    }
  };

  handlePagesClick = direction => {
    this.setState({
      sorted: false
    });
    let currentUrlParams = new URLSearchParams(window.location.search);
    let currentPageNum = currentUrlParams.get('page');
    currentPageNum = parseInt(currentPageNum);

    if (!currentPageNum) {
      currentPageNum = 1;
    }
    if (direction === 'next') {
      currentPageNum = currentPageNum + 1;
    } else if (direction === 'prev' && currentPageNum !== 1) {
      currentPageNum = currentPageNum - 1;
    } else {
      currentPageNum = 1;
    }
    currentUrlParams.set('page', currentPageNum);
    this.props.history.push(`?page=${currentPageNum}`);
    if (this.props.filterList.length < 1) {
      this.fetchPokemon();
    } else {
      this.handleFilterList();
    }
  };

  fetchPokemon = async () => {
    let offsetNum = 0;
    let regexPat = /\/pokemon\/(\d+)\//;
    let currentUrlParams = new URLSearchParams(window.location.search);
    let currentPageNum = currentUrlParams.get('page');
    if (currentPageNum > 26) {
      this.props.history.push('/404');
    }
    if (!currentPageNum) {
      offsetNum = 0;
    } else {
      offsetNum = currentPageNum * 30 - 30;
    }
    this.setState({ sorted: false, pokemonList: [] });
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=30&offset=${offsetNum}`
    );
    let pokemon = res.data.results;
    pokemon.map(pokemon => {
      let id = pokemon.url.match(regexPat)[1];
      return (pokemon['id'] = id);
    });
    this.setState({ pokemonList: pokemon, sorted: true });
  };

  render() {
    return (
      <div>
        <PokemonList />
        <Pages handlePahesClick={this.handlePagesClick}></Pages>
      </div>
    );
  }
}

export default withRouter(PokeCalls);
