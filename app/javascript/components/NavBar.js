import React, { Component } from "react";
import PropTypes from "prop-types";
import SeedForm from "./SeedForm";
import SearchSeed from "./SearchSeed";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      seeds: this.props.seeds,
      search: this.props.search,
      description: ''
    }
  }


  handleUserInput(obj) {
    this.setState(obj)
  }

  handleFormSubmit() {
    let seed = {description: this.state.description}
    $.ajax({
      url: '/seed',
      method: 'POST',
      data: {
        authenticity_token: $('[name="csrf-token"]')[0].content,
        seed: seed
      }
    })
  }

  handleSearch(input) {
    this.props.onInput(input)
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-teal mb-3">
        <a className="navbar-brand">Forage</a>
        <SeedForm input_description={this.state.description} onUserInput={this.handleUserInput} onFormSubmit={this.handleFormSubmit} />
        <SearchSeed seeds={this.state.seeds} search={this.state.search} onSearch={this.handleSearch}/>
      </nav>
    );
  }
};

export default NavBar;
