import React, { Component } from 'react';

import styled from 'styled-components';

import spinner from './spinner.gif';

const Sprite = styled.img`
  width: 10em;
  height: 10em;
  display: none;
`;

const Card = styled.div`
  box-shadow: 0 2px 7px rgba(50, 50, 50, 0.12), 0 2px 7px rgba(50, 50, 50, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &: hover {
    box-shadow: 0 14px 28px rgba(50, 50, 50, 0.12),
      0 10px 10px rgba(50, 50, 50, 0.24);
  }
`;
export default class PokemonCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
    imageLoading: true,
    toManyRequests: false
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({
      name,
      imageUrl,
      pokemonIndex
    });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <Card className="card">
          <h5 classNam="card-header">{this.state.pokemonIndex}</h5>
          {this.state.imageLoading ? (
            <img
              src={spinner}
              style={{ width: '5em', height: '5em' }}
              className="card-img-top rounded mx-auto d-block mt-2"
            />
          ) : null}
          <Sprite
            className="card-img-top rounded mx-auto mt-2"
            src={this.state.imageUrl}
            onLoad={() => this.setState({ imageLoading: false })}
            onError={() => this.setState({ toManyRequests: true })}
            src={this.state.imageUrl}
            style={
              this.state.toManyRequests
                ? { display: 'none' }
                : this.state.imageLoading
                ? null
                : { display: 'block' }
            }
          />
          {this.state.toManyRequests ? (
            <h6 className="mx-auto">
              <span className="badge badge-danger mt-2">To many Request</span>
            </h6>
          ) : null}
          <div className="card-body mx-auto">
            <h6 className="card-title">
              {this.state.name
                .toLowerCase()
                .split(' ')
                .map(
                  letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                )
                .join(' ')}
            </h6>
          </div>
        </Card>
      </div>
    );
  }
}
