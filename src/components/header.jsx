import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const divStyle = {
    height: "10%"
};

export default class Header extends Component {
    constructor () {
        super();
        const user = localStorage.getItem("jwtToken");
        var username;
        if (user) {
            username = jwt_decode(user).username;
        } else {
            username = "Guest";
        }
        this.state = { user: username, authenticated: (user ? true : false) };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        localStorage.removeItem("jwtToken");
        delete axios.defaults.headers.common["Authorization"];
        this.setState({ user: "Guest", authenticated: false });
    }

    render () {
        return (
            <div style={divStyle} className="p-8 flex justify-between bg-blue-600 text-gray-200">
                <h1 className="my-auto w-36" >Hello, <span className="font-semibold">{this.state.user}</span></h1>
                {
                    this.state.authenticated ? 
                    <button onClick={this.handleClick} className="font-semibold">Logout</button> :
                    <Link to="/login" className="font-semibold">Login</Link>
                }
            </div>
        );
    }
}
