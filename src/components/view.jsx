import React, { Component } from 'react';

export default class View extends Component {
    render () {
        return (
            <button>
                <img src={this.props.image} />
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
            </button>
        )
    }
}
