import React, { Component } from 'react';
import axios from 'axios';

export default class Face extends Component {
    render () {
        return (
            <img className="h-96 w-96" src={this.props.image} />
        );
    }
}
