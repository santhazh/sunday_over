import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from "axios";

class CreateAcc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };


    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstnameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastnameChange(event) {
    this.setState({ lastName: event.target.value });
  }


  handleSubmit(event) {
    const registrationData={firstName:this.state.firstName ,lastName: this.state.lastName};
    axios.post('/user', registrationData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
     });
    alert('A name was submitted: ' + JSON.stringify(registrationData));
    //to cancel form default behaviour
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          FItrst Name:
          <input
           name="firstName" type="text" value={this.state.firstName} onChange={this.handleFirstnameChange} />
        </label>
        <label>
          LastName:
          <input
           name="lastName" type="text" value={this.state.lastName} onChange={this.handleLastnameChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreateAcc;