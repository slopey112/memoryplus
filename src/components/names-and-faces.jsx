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
            <div>
                {
                    this.state.isTimerStarted ?
                    <Gallery isTimerDone={this.state.isTimerDone} /> :
                    <h1>Names and Faces</h1>
                }
                <Timer onTimerStart={this.handleTimerStart} onTimerEnd={this.handleTimerEnd} />
            </div>
        )
    }
}
