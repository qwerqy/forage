import React, { Component } from "react";
import PropTypes from "prop-types";
import SeedForm from "./SeedForm";

class NavBar extends Component {
  render () {
    return (
      <nav className="navbar navbar-light bg-white mb-3">
        <a className="navbar-brand">Forage</a>
        <SeedForm />
      </nav>
    );
  }
};

export default NavBar;
