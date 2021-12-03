import React, { Component } from 'react';
import Cell from './cell';

const gridStyles = {
    gridTemplateColumns: "repeat(20, minmax(0, 1fr))",
    gridTemplateRows: "repeat(25, minmax(0, 1fr))",
    width: "40rem"
}

export default class Grid extends Component {
    constructor () {
        super();
        var nums = [];
        for (let i = 0; i < 500; i++)
            nums.push(Math.floor(Math.random() * 10));
        this.state = { nums: nums, inputs: new Array(500).fill(-11), submitted: false };
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.getButton = this.getButton.bind(this);
    }

    handleNext () {
        let count = 0;
        for (let i = 0; i < 500; i++) {
            if (this.state.inputs[i] === this.state.nums[i].toString()) 
                count++;
        }
        this.props.onCorrect(count);
        this.props.onNext();
    }

    handleInput (value, idx) {
        this.setState({ inputs: [
            ...this.state.inputs.slice(0, idx),
            value,
            ...this.state.inputs.slice(idx+1)
        ]});
    }

    handleClick () {
        this.setState({ submitted: true });
    }

    getButton () {
        if (this.props.isTimerDone && !this.state.submitted) {
            return <button className="block mx-auto text-gray-100 shadow-md bg-blue-700 w-36 rounded-md text-2xl p-4" onClick={this.handleClick}>Submit</button>;
        } else if (this.state.submitted) {
            return <button className="block mx-auto text-gray-100 shadow-md bg-blue-700 w-36 rounded-md text-2xl p-4" onClick={this.handleNext} >Next</button>;
        } else {
            return null;
        }
    }

    render () {
        let arr = [];
        for (let i = 0; i < 500; i++) {
            if (!this.props.isTimerStarted) {
                arr.push(<Cell key={i} num="" editable={false} color="default" />);
            } else if (this.state.submitted) {
                arr.push(<Cell key={i} num={this.state.inputs[i] === -11 ? "" : this.state.inputs[i]} editable={false} color={this.state.inputs[i] === this.state.nums[i].toString() ? "green" : "red" } />);
            } else if (this.props.isTimerDone) {
                arr.push(<Cell key={i} identifier={i} num="" editable={true} handleInput={this.handleInput} color="default" />);
            } else {
                arr.push(<Cell key={i} num={this.state.nums[i]} editable={false} color="default" />);
            }
        }
        return (
            <div className="flex w-1/2 h-screen">
                <div className="mx-auto">
                    <div style={gridStyles} className="grid gap-1 m-10">
                        {arr}
                    </div>
                    {this.getButton()}
                </div>
            </div>
        )
    }
}
