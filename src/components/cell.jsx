import React, { Component } from 'react'

export default class Cell extends Component {
    render () {
        return (
            <div className="h-7 w-7 bg-gray-300">{Math.floor(Math.random() * 10)}</div>
        )
    }
}
