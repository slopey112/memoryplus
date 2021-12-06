import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Register extends Component {
    constructor () {
        super();
        this.state = { username: "", password: "" };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleFieldChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleRegister () {
        axios.post("http://localhost:5000/api/users/register", {
            username: this.state.username,
            password: this.state.password
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render () {
        return (
            <div>
                <h1>Register</h1>
                <form>
                    <label>
                        Username:
                        <input onChange={this.handleFieldChange} type="text" name="username" />
                    </label>
                    <label>
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
