import React, { Component } from "react";
import PropTypes from "prop-types";

class SeedCard extends Component {
  render () {
    let search = this.props.search
    let filteredseeds = this.props.seeds.filter(function(seed) {
      return seed.description.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })
    return (
      <React.Fragment>
        {filteredseeds.map(function(seed) {
          return (
            <div key={seed.id} className="card bg-grey border-0 grid-item">
              <div className="card-body pb-1">
                <h5 className="card-text text-muted">{seed.description}</h5>
              </div>
              <div className="card-footer bg-transparent py-1 border-0">
                <p className="font-10 text-right text-muted m-0">{moment(seed.created_at).fromNow()}</p>
              </div>
            </div>
          )
        })};
      </React.Fragment>
    );
  };
};

export default SeedCard
