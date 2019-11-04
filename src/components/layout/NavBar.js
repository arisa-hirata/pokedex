import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/pokedexlogo.png';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a
            href=""
            className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
            style={{ fontWeight: 'bold', fontSize: 30 }}
          >
            <img src={logo} style={{ width: 30, height: 30 }} />
            &nbsp; Pokédex
          </a>
        </nav>
      </div>
    );
  }
}
