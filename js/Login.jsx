import React, { Component } from "react";
import { Button,ButtonToolbar } from "react-bootstrap";
import axios from "axios";
import Form from "formsy-react"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      user: {

      },
      authenticated: false
    };


    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  enableButton() {
    this.setState({ canSubmit: true });
  }
  disableButton() {
    this.setState({ canSubmit: false });
  }
  handleFirstnameChange(event) {
    this.setState({ userName: event.target.value });
  }

  handleLastnameChange(event) {
    this.setState({ password: event.target.value });
  }


  handleSubmit(event) {
    const registrationData = { userName: this.state.userName, password: this.state.password };
    
    axios
      //to be used while talikin to java
      //.post
      .get('http://localhost:8080/public/__apimocks__/loginValidation.json', registrationData)
      .then((response) => {
        if (response.data) {
          this.setState(prevState => ({
            userName: '',
            password: '',
            user: response.data.user,
            authenticated: response.data.validUser
          }))
        }
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
      <Form onSubmit={this.handleSubmit} onValid={this.enableButton} onInvalid={this.disableButton} className="login">
        <input
            name="userName" type="text" value={this.state.userName} onChange={this.handleFirstnameChange}  title="Email" validations="isEmail" validationError="This is not a valid email" required />
        <input
            name="password" type="text" value={this.state.password} onChange={this.handleLastnameChange}  title="Password" type="password" required />
        <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
      </Form>
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           {JSON.stringify(this.state)}
//           UserName:--
//           <input
//             name="userName" type="text" value={this.state.userName} onChange={this.handleFirstnameChange} />
//         </label>
//         <label>
//           Password:
//           <input
//             name="password" type="text" value={this.state.password} onChange={this.handleLastnameChange} />
//         </label>

//         <input type="submit" value="Submit" />
//         <ButtonToolbar>
//   {/* Standard button */}
//   <Button>Default</Button>

//   {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
//   <Button bsStyle="primary">Primary</Button>

//   {/* Indicates a successful or positive action */}
//   <Button bsStyle="success">Success</Button>

//   {/* Contextual button for informational alert messages */}
//   <Button bsStyle="info">Info</Button>

//   {/* Indicates caution should be taken with this action */}
//   <Button bsStyle="warning">Warning</Button>

//   {/* Indicates a dangerous or potentially negative action */}
//   <Button bsStyle="danger">Danger</Button>

//   {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
//   <Button bsStyle="link">Link</Button>
// </ButtonToolbar>;
//       </form>
    );
  }
}

export default Login;