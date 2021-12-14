import React, { Component } from 'react';

export default class InputField extends Component {
    render () {
        return (
            <form className="flex flex-col m-4">
                <label className="flex flex-col my-3">
                    <span className="text-sm text-gray-500">Username:</span>
                    { this.props.usernameError !== "" && <p>{this.props.usernameError}</p> }
                    <input className="w-1/4 border-b-2 border-gray-300 hover:border-gray-400 focus:border-gray-400 focus:outline-none" onChange={this.props.onFieldChange} type="text" name="username" />
                </label>
                <label className="flex flex-col my-3">
                    <span className="text-sm text-gray-500">Password:</span>
                    { this.props.passwordError !== "" && <p>{this.props.passwordError}</p> }
                    <input className="w-1/4 border-b-2 border-gray-300 hover:border-gray-400 focus_border-gray-400 focus:outline-none" onChange={this.props.onFieldChange} type="password" name="password" />
                </label>
            </form>
        );
    }
}
