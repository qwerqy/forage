import React, { Component } from "react";
import PropTypes from "prop-types";
import SeedForm from "./SeedForm";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this)
    this.state = {
      description: ''
    }
  }


  handleUserInput(obj) {
    this.setState(obj)
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-white mb-3">
        <a className="navbar-brand">Forage</a>
        <SeedForm input_description={this.state.description} onUserInput={this.handleUserInput} />
      </nav>
    );
  }
};

export default NavBar;
