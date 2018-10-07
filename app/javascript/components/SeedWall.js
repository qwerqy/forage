import React, { Component } from "react";
import PropTypes from "prop-types";
import SeedCard from "./SeedCard";

class SeedWall extends Component {
  render () {
    return (
      <div id="seedWall" className="seedwall grid container-fluid">
        <SeedCard seeds={this.props.seeds} search={this.props.search} />
      </div>
    );
  }
}

export default SeedWall
