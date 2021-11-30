import React, { Component } from 'react';
import Timer from "./timer";
import Grid from "./grid";
import Scoreboard from './scoreboard';

export default class SpeedNumbers extends Component {
    constructor () {
        super();
        this.state = { isTimerStarted: false, isTimerDone: false, isScoreboardVisible: false, correct: 0 };
        this.handleTimerEnd = this.handleTimerEnd.bind(this);
        this.handleTimerStart = this.handleTimerStart.bind(this);
        this.handleCorrect = this.handleCorrect.bind(this);
        this.handleScoreboard = this.handleScoreboard.bind(this);
    }

    handleTimerEnd () {
        this.setState({ isTimerDone: true });
    }

    handleTimerStart () {
        this.setState({ isTimerStarted: true });
    }

    handleCorrect () {
        this.setState({ correct: this.state.correct + 1}); 
    }

    handleScoreboard () {
        this.setState({ isScoreboardVisible: true });
    }

    render () {
        return (
            <div className="flex">
                { this.state.isScoreboardVisible ?
                    <Scoreboard numerator={this.state.correct} denominator={500} /> :
                    <Grid isTimerDone={this.state.isTimerDone} isTimerStarted={this.state.isTimerStarted} onCorrect={this.handleCorrect} />
                }
                <Timer onTimerEnd={this.handleTimerEnd} onTimerStart={this.handleTimerStart} />
            </div>
        )
    }
}
