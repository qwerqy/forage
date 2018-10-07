import React, { Component } from "react";
import PropTypes from "prop-types";
import SeedWall from "./SeedWall";
import NavBar from "./NavBar";

class WallIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seeds: this.props.seeds
    }
  }


  render () {
    return (
      <div>
        <NavBar />
        <SeedWall seeds={this.state.seeds} />
      </div>
    );
  }
}

export default WallIndex
