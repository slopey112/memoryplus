import React, { Component } from 'react';
import Gallery from './gallery';
import Timer from './timer';

export default class NamesAndFaces extends Component {
    constructor () {
        super();
        this.state = { isTimerStarted: false, isTimerDone: false };
        this.handleTimerStart = this.handleTimerStart.bind(this);
        this.handleTimerEnd = this.handleTimerEnd.bind(this);
    }

    handleTimerStart () {
        this.setState({ isTimerStarted: true });
    }

    handleTimerEnd () {
        this.setState({ isTimerDone: true });
    }

    render () {
        return ( 
            <div className="flex">
                {
                    this.state.isTimerStarted ?
                    <Gallery isTimerDone={this.state.isTimerDone} /> :
                    <h1 className="flex w-1/2 h-screen"><span className="block m-auto text-9xl text-center text-gray-400">Names and Faces</span></h1>
                }
                <Timer onTimerStart={this.handleTimerStart} onTimerEnd={this.handleTimerEnd} />
            </div>
        )
    }
}
