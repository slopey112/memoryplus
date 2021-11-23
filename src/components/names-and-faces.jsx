import React, { Component } from 'react';
import Face from './face';
import Random from 'random-name';

export default class NamesAndFaces extends Component {
    constructor () {
        super();
        let arr = []
        for (let i = 0; i < 50; i++) {
            arr.push({ 
                image: <Face key={i} />, 
                name: Random.first() + " " + Random.last() 
            });
        }
        this.state = { idx: 0, faces: arr };
        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
    }

    left () {
        this.setState({ idx: this.state.idx - 1 < 0 ? 49 : this.state.idx - 1 });
    }

    right () {
        this.setState({ idx: (this.state.idx + 1) % 50 });
    }

    render () {
        return (
            <div>
                { this.state.faces[this.state.idx].image } 
                <p>{this.state.faces[this.state.idx].name}</p>
                <button onClick={this.left}>Left</button>
                <button onClick={this.right}>Right</button>
            </div>
        );
    }
}
