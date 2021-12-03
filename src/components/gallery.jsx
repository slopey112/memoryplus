import React, { Component } from 'react';
import Face from './face';
import Random from 'random-name';
import axios from 'axios';

const inputStyles = "text-3xl rounded-md";
const defaultStyles = inputStyles + " bg-gray-200";
const greenStyles = inputStyles + " bg-green-200";
const redStyles = inputStyles + " bg-red-200";

export default class Gallery extends Component {
    constructor () {
        super();
        let arr = []
        for (let i = 0; i < 50; i++) {
            arr.push({ 
                image: "",
                name: Random.first() + " " + Random.last(),
                feedback: "default"
            });
        }
        this.state = { idx: 0, faces: arr, text: "", ct: 0 };
        this.next = this.next.bind(this);
        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
        this.getFaceURL = this.getFaceURL.bind(this);
        this.setFeedback = this.setFeedback.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.getFeedbackStyles = this.getFeedbackStyles.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    componentDidMount () {
        this.getFaceURL();
    }

    setFeedback (feedback) {
        this.setState({ faces: [
            ...this.state.faces.slice(0, this.state.idx),
            {
                image: this.state.faces[this.state.idx].image,
                name: this.state.faces[this.state.idx].name,
                feedback: feedback
            },
            ...this.state.faces.slice(this.state.idx+1)
        ]});
    }

    getFeedbackStyles () {
        switch (this.state.faces[this.state.idx].feedback) {
            case "default":
                return defaultStyles;
            case "green":
                return greenStyles;
            case "red":
                return redStyles
        }
    }

    left () {
        this.setState({ idx: this.state.idx - 1 < 0 ? 49 : this.state.idx - 1 }, this.getFaceURL);
    }

    right () {
        this.setState({ idx: (this.state.idx + 1) % 50 }, this.getFaceURL);
    }

    next () {
        let idx = this.state.idx + 1;
        while (this.state.faces[idx].image === "")
            idx = (idx + 1) % 50;
        this.setState({ idx: idx });
    }

    handleTextChange (e) {
        this.setState({ text: e.target.value });
    }

    handleButtonClick () {
        if (this.state.text === this.state.faces[this.state.idx].name) {
            this.setFeedback("green");
            this.setState({ ct: this.state.ct + 1  });
        } else 
            this.setFeedback("red");
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
                            name: this.state.faces[this.state.idx].name,
                            feedback: "default"
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
                <div className="flex w-1/2 h-screen">
                    <div className="m-auto">
                        <Face image={this.state.faces[this.state.idx].image} />
                        <input className={this.getFeedbackStyles()} onChange={this.handleTextChange} type="text" />
                        { 
                            this.state.faces[this.state.idx].feedback === "default" ?
                            <button onClick={this.handleButtonClick}>Submit</button> :
                            <button onClick={this.next}>Next</button>
                        }
                    </div>
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
