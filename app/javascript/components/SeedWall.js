import React, { Component } from "react";
import PropTypes from "prop-types";
import SeedCard from "./SeedCard";

class SeedWall extends Component {
  componentDidMount() {
    let script = document.createElement('script');

    script.innerHTML = "var pckry = new Packery( '.grid', {itemSelector: '.grid-item', percentPosition: true, gutter: 14.7, originTop: true,  stagger: 30});";
    script.async = true;

    document.body.appendChild(script)
  }

  render () {
    return (
      <div id="seedWall" className="seedwall grid container-fluid">
        <SeedCard seeds={this.props.seeds} />
      </div>
    );
  }
}

export default SeedWall
