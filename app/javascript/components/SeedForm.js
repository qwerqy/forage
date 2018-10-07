import React from "react";
import PropTypes from "prop-types";


class SeedForm extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let obj = {};
    obj[name] = e.target.value;
    console.log(obj)
    this.props.onUserInput(obj);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='mx-auto form-inline d-flex justify-content-center'>
        <input name='description'
               className= 'form-control mr-3'
               placeholder='What do you want to plant?'
               value={this.props.input_description}
               onChange={this.handleChange}
        />
      <input type='submit' value='Plant' className= 'btn btn-outline-dark' />
      </form>
    );
  }
};

export default SeedForm
