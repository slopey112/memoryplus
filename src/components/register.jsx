import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
                <form>
                    <label>
                        { this.state.usernameError !== "" && <p>{this.state.usernameError}</p> }
                        Username:
                        <input onChange={this.handleFieldChange} type="text" name="username" />
                    </label>
                    <label>
                        { this.state.passwordError !== "" && <p>{this.state.passwordError}</p> }
                        Password:
                        <input onChange={this.handleFieldChange} type="password" name="password" />
                    </label>
                </form>
                <button onClick={this.handleRegister}>Submit</button>
                <p>Have an account? <Link to="/login">Login here.</Link></p>
            </div>
        );
    }
}
