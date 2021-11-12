import React, { Component } from 'react';

export default class View extends Component {
    render () {
        return (
            <button className="p-6 w-96 bg-gray-200 flex-grow-0 shadow-xl rounded-2xl flex transition duration-700 ease-in-out hover:bg-gray-300">
                <img className="h-32 w-32" src={this.props.image} />
                <div className="text m-4">
                    <h1 className="text-left font-bold text-xl">{this.props.name}</h1>
                    <p className ="text-left">{this.props.description}</p>
                </div>
            </button>
        )
    }
}
