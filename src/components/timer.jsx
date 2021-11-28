import React, { Component } from 'react';

export default class Timer extends Component {
    constructor () {
        super();
        this.state = { minutes: 0, seconds: 5, started: false, timer: {} }
        this.getTime = this.getTime.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    getTime () {
        let seconds = this.state.seconds.toString();
        if (seconds < 10) {
           seconds = "0" + seconds;
        }
        return this.state.minutes.toString() + ":" + seconds;
    }

    countDown () {
        let newSeconds = this.state.seconds - 1;
        if (newSeconds < 0 && this.state.minutes === 0) {
            clearInterval(this.state.timer);
            this.props.onTimerEnd();
        }
        else if (newSeconds < 0)
            this.setState({ minutes: this.state.minutes - 1, seconds: 59 });
        else
            this.setState({ seconds: newSeconds });
    }

    startTimer () {
        this.setState({ started: true });
        this.setState({ timer: setInterval(this.countDown, 1000) }); 
        this.props.onTimerStart();
    }

    render () {
        return (
            <div className="bg-gradient-to-t from-blue-400 to-blue-600 flex w-1/2 h-screen">
                <div className="m-auto bg-gray-200 p-4 w-72  rounded-lg">
                    <h1 className="text-center my-3 text-7xl">{this.getTime()}</h1>
                    { this.state.started ? null : <button className="block mx-auto text-gray-100 shadow-md bg-blue-700 w-24 rounded-md text-2xl p-4" onClick={this.startTimer}>Start</button> }
                </div>
            </div>
        )
    }
}
