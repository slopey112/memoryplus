import React, { Component } from 'react';

export default class InputField extends Component {
    render () {
        return (
            <form>
                <label>
                    { this.props.usernameError !== "" && <p>{this.props.usernameError}</p> }
                    Username:
                    <input onChange={this.props.onFieldChange} type="text" name="username" />
                </label>
                <label>
                    { this.props.passwordError !== "" && <p>{this.props.passwordError}</p> }
                    Password:
                    <input onChange={this.props.onFieldChange} type="password" name="password" />
                </label>
            </form>
        );
    }
}
