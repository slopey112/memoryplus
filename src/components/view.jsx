import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class View extends Component {
    render () {
        return (
            <Link to={this.props.link} className="p-6 w-full h-full bg-gray-200 flex-grow-0 shadow-xl rounded-2xl flex transition duration-700 ease-in-out hover:bg-gray-300">
                <img className="h-32 w-32" src={this.props.image} />
                <div className="text m-4">
                    <h1 className="text-left font-bold text-lg">{this.props.name}</h1>
                    <p className ="text-left text-md">{this.props.description}</p>
                </div>
            </Link>
        )
    }
}
