import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './searchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      showFilters: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const inputValue = event.target.value;
    this.setState({
      searchQuery: inputValue
    });
    if (!inputValue) return '';
  };

  handleSubmit = event => {
    const { searchQuery } = this.state;
    event.preventDefault();
    const value = this.state.searchQuery;
    this.setState({
      searchQuery: ''
    });
    if (value) {
      return this.props.history.push(`/pokemon/${searchQuery}`);
    }
  };

  render() {
    return (
      <div className="searchbar d-flex justify-content-center">
        <form class="form-inline text-center" onSubmit={this.handleSubmit}>
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" class="sr-only">
              Search
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Search Pokemon"
              value={this.state.searchQuery}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" class="btn btn-danger mb-2">
            <div>
              <i className="fa fa-search"></i>
            </div>
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
