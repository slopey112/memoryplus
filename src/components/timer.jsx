import React, { Component } from 'react';

export default class Timer extends Component {
    constructor () {
        super();
        this.state = { minutes: 5, seconds: 0, started: false, timer: {} }
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
        if (newSeconds < 0 && this.state.minutes === 0)
            clearInterval(this.state.timer);
        else if (newSeconds < 0)
            this.setState({ minutes: this.state.minutes - 1, seconds: 59 });
        else
            this.setState({ seconds: newSeconds });
    }

    startTimer () {
        this.setState({ started: true });
        this.setState({ timer: setInterval(this.countDown, 1000) }); 
    }

    render () {
        return (
            <div>
                <h1>{this.getTime()}</h1>
                { this.state.started ? null : <button onClick={this.startTimer}>Start</button> }
            </div>
        )
    }
}
