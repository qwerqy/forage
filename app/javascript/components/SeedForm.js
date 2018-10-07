import React from "react";
import PropTypes from "prop-types";


class SeedForm extends React.Component {
  render () {
    return (
      <form className='form-inline d-flex justify-content-center'>
        <input name='description' className= 'form-control mr-3' placeholder='What do you want to plant?' value={this.props.input_description} />
        <input type='submit' value='Plant' className= 'btn btn-outline-success' />
      </form>
    );
  }
};

export default SeedForm
