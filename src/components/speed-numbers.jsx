import React, { Component } from 'react';
import Timer from "./timer";
import Grid from "./grid";

export default class SpeedNumbers extends Component {
    constructor () {
        super();
        this.state = { isTimerStarted: false, isTimerDone: false };
        this.handleTimerEnd = this.handleTimerEnd.bind(this);
        this.handleTimerStart = this.handleTimerStart.bind(this);
    }

    handleTimerEnd () {
        this.setState({ isTimerDone: true });
    }

    handleTimerStart () {
        this.setState({ isTimerStarted: true });
    }

    render () {
        return (
            <div className="flex">
                <Grid isTimerDone={this.state.isTimerDone} isTimerStarted={this.state.isTimerStarted}/>
                <Timer onTimerEnd={this.handleTimerEnd} onTimerStart={this.handleTimerStart} />
            </div>
        )
    }
}
