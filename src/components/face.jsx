import React, { Component } from 'react';
import axios from 'axios';

export default class Face extends Component {
    constructor () {
        super();
        this.state = {imageURL: ""};
    }

    componentDidMount () {
        axios.get("https://fakeface.rest/face/json")
            .then(res => {
                const imageObject = res.data;
                this.setState({ imageURL: imageObject.image_url });
            }).catch(err => {
                console.log(err);
            });
    }

    render () {
        return (
            <img src={this.state.imageURL} />
        );
    }
}
