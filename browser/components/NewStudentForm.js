import React, { Component } from 'react';

export default class NewStudentForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //ALWAYS TAKE AN EVENT
  handleChange(event){
    // this.setState({
    //   firstName: event.target.value,
    //   lastName: event.target.value,
    //   email: event.target.value
    // })
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state);
  }
  //ALWAYS TAKE AN EVENT
  handleSubmit(event){
    //usamos el preventDefault porque es un submit button
    event.preventDefault();
    this.setState({
      firstName: '',
      lastName: '',
      email: ''
    })
  }
  render() {
    //we use value inside input tags
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>

        <button type="submit">Submit New Student</button>
      </form>
    );
  }
}
