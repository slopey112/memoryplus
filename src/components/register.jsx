import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
            this.setState({ usernameError: "Username field required", passwordError: "" });
            return;
        } else if (this.state.password.length === 0) {
            this.setState({ passwordError: "Password field required", usernameError: "" });
            return;
        } else if (this.state.password.length < 6 || this.state.password.length > 30) {
            this.setState({ passwordError: "Password must be between 6 to 30 characters", usernameError: "" });
            return;
        }

        axios.post("/api/users/register", {
            username: this.state.username,
            password: this.state.password
        })
            .then((res) => {
                console.log(res);
                let navigate = useNavigate();
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                this.setState({ usernameError: "Username already taken", passwordError: "" });
            });
    }

    render () {
        return (
            <div className="flex">
                <div className="h-screen w-48 bg-gradient-to-t from-blue-400 to-blue-600"/>
                <div className="p-8 w-96">
                    <h1 className="text-3xl font-bold">Register</h1>
                    <InputField onFieldChange={this.handleFieldChange} usernameError={this.state.usernameError} passwordError={this.state.passwordError} />
                    <button className="text-center text-gray-100 shadow-md bg-blue-700 w-28 rounded-md text-xl p-3" onClick={this.handleRegister}>Submit</button>
                    <p className="my-4">Have an account? <Link className="font-bold" to="/login">Login here.</Link></p>
                </div>
            </div>
        );
    }
}
