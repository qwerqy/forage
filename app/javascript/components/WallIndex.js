import React, { Component } from "react";
import PropTypes from "prop-types";
import SeedWall from "./SeedWall";
import NavBar from "./NavBar";

class WallIndex extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this)
    this.state = {
      seeds: this.props.seeds,
      search: ""
    }
  }

  componentDidMount() {
    let script = document.createElement('script');

    script.innerHTML = "var pckry = new Packery( '.grid', {itemSelector: '.grid-item', percentPosition: true, gutter: 14.7, originTop: true,  stagger: 30});";

    document.body.appendChild(script)
  }

  handleInput(input) {
    this.setState({
      search: input
    })
  }

  render () {
    return (
      <div>
        <NavBar seeds={this.state.seeds} search={this.state.search} onInput={this.handleInput} />
        <SeedWall seeds={this.state.seeds} search={this.state.search}/>
      </div>
    );
  }
}

export default WallIndex
