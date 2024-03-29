import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/layout/NavBar';
import PokeCalls from './components/pokecalls/PokeCalls';
import SearchBar from './components/searchBar/searchBar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          {/* <SearchBar /> */}
          <Switch>
            {/* <PokeCalls /> */}
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/Pokemon/:pokemonIndex" component={Pokemon} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
