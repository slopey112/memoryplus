import React, { Component } from 'react';
import View from './view';

export default class Home extends Component {
    render () {
        return (
            <div className="flex flex-row Home">
                <div className="flex flex-col justify-center h-screen bg-gradient-to-t from-blue-400 to-blue-600 w-1/3 title">
                    <div className="text-6xl font-sans title">
                        <span className="font-bold text-white">Memory</span><span className="font-extrabold text-transparent bg-gradient-to-br bg-clip-text from-green-100 to-green-500">+</span>
                    </div>
                    <h2 className="m-3.5 text-3xl text-gray-200 font-sans">Improve your memory.</h2>
                    <div>
                        <button className="text-gray-100 shadow-md bg-blue-700 w-1/3 rounded-md text-2xl p-3" >Get Started</button>
                    </div>
                </div>
                <div className="h-screen flex-1 grid grid-cols-3 grid-rows-4 grid-flow-row gap-4 p-10 panel">
                    <View link="/speed-numbers" image="./images/number-blocks.png" name="Speed Numbers" description="Memorize random digits as fast as you can."/>
                    <View link="/names-and-faces" image="./images/user.png" name="Name and Faces" description="Recall someone's name from a face." />
                    <View link="/poetry" image="./images/poetry.png" name="Poetry" description="Memorize a poem and recall it." />
                    <View link="/chess" image="./images/chess.png" name="Chess" description="Memorize a random chess position." />
                </div>
            </div>
        )
    }
}
