import React, { Component } from 'react';
import Timer from "./timer";
import Grid from "./grid";

export default class SpeedNumbers extends Component {
    constructor () {
        super();
        this.state = { isTimerDone: false };
        this.handleTimerEnd = this.handleTimerEnd.bind(this);
    }

    handleTimerEnd () {
        this.setState({ isTimerDone: true });
    }

    render () {
        return (
            <div>
                <Grid isTimerDone={this.state.isTimerDone} />
                <Timer onTimerEnd={this.handleTimerEnd} />
            </div>
        )
    }
}
