import React, { Component } from 'react';
import axios from 'axios';

export default class Face extends Component {
    constructor () {
        super();
        this.state = {imageURL: ""};
        axios.get("http://localhost:5000/api/faces")
            .then(res => {
                this.setState({ imageURL: res.data });
            }).catch(err => {
                console.log(err);
            });
    }

    render () {
        return (
            <img className="h-96 w-96" src={this.state.imageURL} />
        );
    }
}
