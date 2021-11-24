import React, { Component } from 'react';
import Face from './face';
import Random from 'random-name';
import axios from 'axios';

export default class Gallery extends Component {
    constructor () {
        super();
        let arr = []
        for (let i = 0; i < 50; i++) {
            arr.push({ 
                image: "",
                name: Random.first() + " " + Random.last() 
            });
        }
        this.state = { idx: 0, faces: arr };
        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
        this.getFaceURL = this.getFaceURL.bind(this);
    }

    componentDidMount () {
        this.getFaceURL();
    }

    left () {
        this.setState({ idx: this.state.idx - 1 < 0 ? 49 : this.state.idx - 1 }, this.getFaceURL);
    }

    right () {
        this.setState({ idx: (this.state.idx + 1) % 50 }, this.getFaceURL);
    }

    getFaceURL () {
        if (this.state.faces[this.state.idx].image === "") {
            axios.get("http://localhost:5000/api/faces")
                .then(res => {
                    this.setState({ faces: [
                        ...this.state.faces.slice(0, this.state.idx),
                        {
                            image: res.data,
                            name: this.state.faces[this.state.idx].name
                        },
                        ...this.state.faces.slice(this.state.idx+1)
                    ]});
                });
        }
    }

    render () {
        if (this.props.isTimerDone) {
            return (
                <div>
                </div>
            );
        } else {
            return (
                <div>
                    <Face image={this.state.faces[this.state.idx].image}/>
                    <p>{this.state.faces[this.state.idx].name}</p>
                    <button onClick={this.left}>Left</button>
                    <button onClick={this.right}>Right</button>
                </div>
            );
        }
    }
}
