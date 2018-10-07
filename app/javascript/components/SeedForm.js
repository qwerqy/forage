import React from "react";
import PropTypes from "prop-types";


class SeedForm extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let obj = {};
    obj[name] = e.target.value;
    console.log(obj)
    this.props.onUserInput(obj);
  }

  render() {
    return (
      <form className='form-inline d-flex justify-content-center'>
        <input name='description'
               className= 'form-control mr-3'
               placeholder='What do you want to plant?'
               value={this.props.input_description}
               onChange={this.handleChange}
        />
        <input type='submit' value='Plant' className= 'btn btn-outline-success' />
      </form>
    );
  }
};

export default SeedForm
