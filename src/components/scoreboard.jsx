import React, { Component } from 'react';

export default class Scoreboard extends Component {
    render () {
        return (
            <div>
                <p><span>{this.props.numerator}</span>/<span>{this.props.denominator}</span> {Math.floor(this.props.numerator / this.props.denominator * 100)}%</p>
            </div>
        );
    }
}
