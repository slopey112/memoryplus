import React, { Component } from 'react';
import Face from './face';
import Random from 'random-name';
import axios from 'axios';

const defaultStyles = "bg-gray-200";
const greenStyles = "bg-green-200";
const redStyles = "bg-red-200";

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
        this.state = { idx: 0, faces: arr, text: "", feedback: "default", ct: 0 };
        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
        this.getFaceURL = this.getFaceURL.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    componentDidMount () {
        this.getFaceURL();
    }

    left () {
        this.setState({ idx: this.state.idx - 1 < 0 ? 49 : this.state.idx - 1 }, this.getFaceURL);
    }

    right () {
        this.setState({ idx: (this.state.idx + 1) % 50, feedback: "default" }, this.getFaceURL);
    }

    handleTextChange (e) {
        this.setState({ text: e.target.value });
    }

    handleButtonClick () {
        if (this.state.text === this.state.faces[this.state.idx].name)
            this.setState({ feedback: "green", ct: this.state.ct + 1  });
        else 
            this.setState({ feedback: "red" });
    }

    getFaceURL () {
        if (this.state.faces[this.state.idx].image === "") {
            console.log("calling get face");
            axios.get("http://localhost:5000/api/faces")
                .then(res => {
                    console.log(res);
                    this.setState({ faces: [
                        ...this.state.faces.slice(0, this.state.idx),
                        {
                            image: res.data,
                            name: this.state.faces[this.state.idx].name
                        },
                        ...this.state.faces.slice(this.state.idx+1)
                    ]});
                }).catch(err => {
                    console.log(err);
                });
        }
    }

    render () {
        if (this.props.isTimerDone) {
            return (
                <div>
                    <Face image={this.state.faces[this.state.idx].image} />
                    <input className={this.state.feedback === "default" ? defaultStyles : (this.state.feedback === "green" ? greenStyles : redStyles)} onChange={this.handleTextChange} type="text" />
                    { 
                        this.state.feedback === "default" ?
                        <button onClick={this.handleButtonClick}>Submit</button> :
                        <button onClick={this.right}>Next</button>
                    }
                </div>
            );
        } else {
            return (
                <div className="flex w-1/2 h-screen">
                    <div className="m-auto">
                        <div className="flex">
                            <button className="hover:bg-gray-200" onClick={this.left}><img className="w-l2 h-12" src="./images/next_left.png" /></button>
                            <Face image={this.state.faces[this.state.idx].image} />
                            <button className="hover:bg-gray-200" onClick={this.right}><img className="w-12 h-12" src="./images/next_right.png" /></button>
                        </div>
                        <p className="text-center m-3 text-5xl">{this.state.faces[this.state.idx].name}</p>
                    </div>
                </div>
            );
        }
    }
}
