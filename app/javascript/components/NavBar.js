import React, { Component } from "react";
import PropTypes from "prop-types";
import SeedForm from "./SeedForm";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_description: this.props.input_description
    }
  }
  render () {
    return (
      <nav className="navbar navbar-light bg-white mb-3">
        <a className="navbar-brand">Forage</a>
        <SeedForm input_description={this.state.input_description}/>
      </nav>
    );
  }
};

export default NavBar;
