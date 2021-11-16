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

    render () {
        let arr = [];
        if (this.state.submitted) {
            for (let i = 0; i < 500; i++)
                arr.push(<Cell key={i} num={this.state.inputs[i] === -11 ? "" : this.state.inputs[i]} editable={false} color={this.state.inputs[i] === this.state.nums[i].toString() ? "green" : "red" } />);
        } else if (this.props.isTimerDone) {
            for (let i = 0; i < 500; i++)
                arr.push(<Cell key={i} identifier={i} num="" editable={true} handleInput={this.handleInput} color="default" />);
        } else {
            for (let i = 0; i < 500; i++)
                arr.push(<Cell key={i} num={this.state.nums[i]} editable={false} color = "default" />);
        }
        return (
            <div>
                <div style={gridStyles} className="grid gap-1">
                    {arr}
                </div>
                {
                    this.props.isTimerDone ?
                    <button onClick={this.handleClick}>Submit</button> :
                    null
                }
            </div>
        )
    }
}
