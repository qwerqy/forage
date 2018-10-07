import React, { Component } from "react"
import PropTypes from "prop-types"



class SeedWall extends Component {
  componentDidMount() {
    let script = document.createElement('script');

    script.innerHTML = "let pckry = new Packery( '.grid', {itemSelector: '.grid-item', percentPosition: true, gutter: 14.7, originTop: true,  stagger: 30});";
    script.async = true;

    document.body.appendChild(script)
  }
  
  render () {
    return (
      <div className="seedwall grid container-fluid">
        {this.props.seeds.map(function(seed) {
          return (
            <div key={seed.id} className="card grid-item">
              <div className="card-body">
                <h5 className="card-text text-center">{seed.description}</h5>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default SeedWall
