import React, { Component } from 'react';

export default class Scoreboard extends Component {
    render () {
        return (
            <div className="w-1/2 h-screen flex">
                <p className="m-auto text-7xl"><span>{this.props.numerator}</span>/<span>{this.props.denominator}</span> {Math.round(this.props.numerator / this.props.denominator * 10000)/100}%</p>
            </div>
        );
    }
}
