import React, { Component } from 'react';
import Gallery from './gallery';
import Timer from './timer';
import Scoreboard from './scoreboard';

export default class NamesAndFaces extends Component {
    constructor () {
        super();
        this.state = { isTimerStarted: false, isTimerDone: false, isFinished: false, ct: 0 };
        this.handleTimerStart = this.handleTimerStart.bind(this);
        this.handleTimerEnd = this.handleTimerEnd.bind(this);
        this.handleFinish = this.handleFinish.bind(this);
        this.getContent = this.getContent.bind(this);
    }

    handleTimerStart () {
        this.setState({ isTimerStarted: true });
    }

    handleTimerEnd () {
        this.setState({ isTimerDone: true });
    }

    handleFinish (ct) {
        this.setState({ isFinished: true, ct: ct });
    }

    getContent () {
        if (this.state.isFinished) {
            return <Scoreboard numerator={this.state.ct} denominator={50} />;
        } else if (this.state.isTimerStarted) {
            return <Gallery isTimerDone={this.state.isTimerDone} onFinish={this.handleFinish} />;
        } else if (!this.state.isTimerStarted) {
            return <h1 className="flex w-1/2 h-screen"><span className="block m-auto text-9xl text-center text-gray-400">Names and Faces</span></h1>;
        }
    }

    render () {
        return ( 
            <div className="flex">
                {this.getContent()}
                <Timer onTimerStart={this.handleTimerStart} onTimerEnd={this.handleTimerEnd} />
            </div>
        )
    }
}
