import React, { Component } from "react";
import PropTypes from "prop-types";
import SeedWall from "./SeedWall";
import NavBar from "./NavBar";

class WallIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seeds: this.props.seeds,
      input_description: ''
    }
  }

  render () {
    return (
      <React.Fragment>
        <NavBar input_description={this.state.input_description}/>
        <SeedWall seeds={this.state.seeds} />
      </React.Fragment>
    );
  }
}

export default WallIndex
