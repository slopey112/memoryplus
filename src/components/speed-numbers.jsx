import React, { Component } from 'react';
import Timer from "./timer";
import Grid from "./grid";

export default class SpeedNumbers extends Component {
    render () {
        return (
            <div>
                <Grid />
                <Timer />
            </div>
        )
    }
}
