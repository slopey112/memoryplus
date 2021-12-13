import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InputField from './input-field';

export default class Login extends Component {
    constructor () {
        super();
        this.state = { username: "", password: "", usernameError: "", passwordError: "" };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleFieldChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLogin () {
        axios.post("/api/users/login", {
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                const token = res.data.token;
                localStorage.setItem("jwtToken", token);
                axios.defaults.headers.common["Authorization"] = token;
            })
            .catch(err => {
                console.log(err);
            });
    }

    render () {
        return (
            <div>
                <InputField onFieldChange={this.handleFieldChange} />
                <button onClick={this.handleLogin}>Submit</button>
            </div>
        );
    }
}
