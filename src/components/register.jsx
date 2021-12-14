import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InputField from "./input-field";

export default class Register extends Component {
    constructor () {
        super();
        this.state = { username: "", password: "", usernameError: "", passwordError: "" };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleFieldChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleRegister () {
        if (this.state.username.length === 0) {
            this.setState({ usernameError: "Username field required" });
            return;
        } else if (this.state.password.length === 0) {
            this.setState({ passwordError: "Password field required" });
            return;
        } else if (this.state.password.length < 6 || this.state.password.length > 30) {
            this.setState({ passwordError: "Password must be between 6 to 30 characters" });
            return;
        }

        axios.post("/api/users/register", {
            username: this.state.username,
            password: this.state.password
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
                this.setState({ usernameError: "Username already taken" });
            });
    }

    render () {
        return (
            <div>
                <h1>Register</h1>
                <InputField onFieldChange={this.handleFieldChange} usernameError={this.state.usernameError} passwordError={this.state.passwordError} />
                <button className="text-center text-gray-100 shadow-md bg-blue-700 w-32 rounded-md text-2xl p-3" onClick={this.handleRegister}>Submit</button>
                <p>Have an account? <Link to="/login">Login here.</Link></p>
            </div>
        );
    }
}
