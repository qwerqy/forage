import React from "react"
import PropTypes from "prop-types"
class SearchSeed extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      seeds: this.props.seeds
    }
  }

  handleChange(e) {
    var input = e.target.value
    this.props.onSearch(input)
  }

  render () {
    return (
      <form>
        <input type="text"
               className="form-control"
               placeholder="Search"
               value={this.state.seedfilter}
               onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchSeed
