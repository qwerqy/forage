import React, { Component } from "react";
import PropTypes from "prop-types";
import SeedForm from "./SeedForm";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
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

  render() {
    return (
      <nav className="navbar navbar-light bg-white mb-3">
        <a className="navbar-brand">Forage</a>
        <SeedForm input_description={this.state.description} onUserInput={this.handleUserInput} onFormSubmit={this.handleFormSubmit} />
      </nav>
    );
  }
};

export default NavBar;
