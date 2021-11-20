import React, { Component } from 'react';

export default class Face extends Component {
    constructor () {
        super();
        this.state = {imageURL: ""};
    }

    componentDidMount () {
        fetch("https://thispersondoesnotexist.com/image")
            .then(response => response.blob())
            .then(imageBlob => {
                const imageObjectURL = URL.createObjectURL(imageBlob);
                this.setState({imageURL: imageObjectURL});
            })
            .catch(err => {
                console.log(err);
            });
    }

    render () {
        return (
            <img src={this.state.imageURL} />
        );
    }
}
