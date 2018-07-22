import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from "axios";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        };


        this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
        this.handleLastnameChange = this.handleLastnameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstnameChange(event) {
        this.setState({ userName: event.target.value });
    }

    handleLastnameChange(event) {
        this.setState({ password: event.target.value });
    }


    handleSubmit(event) {
        const registrationData = { userName: this.state.userName, password: this.state.password };
        axios.post('http://localhost:8080/public/__apimocks__/loginValidation.json', registrationData)
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
            <div>Welcome</div>
        );
    }
}

export default HomePage;