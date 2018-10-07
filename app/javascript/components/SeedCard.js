import React, { Component } from "react";
import PropTypes from "prop-types";

class SeedCard extends Component {
  render () {
    return (
      <React.Fragment>
        {this.props.seeds.map(function(seed) {
          return (
            <div key={seed.id} className="card grid-item">
              <div className="card-body">
                <h5 className="card-text text-center">{seed.description}</h5>
              </div>
            </div>
          )
        })};
      </React.Fragment>
    );
  };
};

export default SeedCard
