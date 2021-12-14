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
            <div className="flex">
                <div className="h-screen w-48 bg-gradient-to-t from-blue-400 to-blue-600" />
                <div className="p-8 w-96">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <InputField onFieldChange={this.handleFieldChange} />
                    <button className="text-center text-gray-100 shadow-md bg-blue-700 w-28 rounded-md text-xl p-3" onClick={this.handleLogin}>Submit</button>
                </div>
            </div>
        );
    }
}
