import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import View from './view';
import Header from './header';

const divStyle = {
    height: "90%"
};

export default class Home extends Component {
    render () {
        return (
            <div className="flex flex-row Home">
                <div className="w-1/3">
                    <Header />
                    <div style={divStyle} className="flex flex-col justify-center h-screen bg-gradient-to-t from-blue-400 to-blue-600">
                        <div className="text-6xl font-sans title mx-auto">
                            <span className="font-bold text-white">Memory</span><span className="font-extrabold text-transparent bg-gradient-to-br bg-clip-text from-green-100 to-green-500">+</span>
                        </div>
                        <h2 className="mx-auto my-3.5 text-3xl text-gray-200 font-sans">Improve your memory.</h2>
                        <div>
                            <Link to="/register" className="text-center block mx-auto text-gray-100 shadow-md bg-blue-700 w-1/3 rounded-md text-2xl p-3" >Get Started</Link>
                        </div>
                    </div>
                </div>
                <div className="h-screen flex-1 grid grid-cols-3 grid-rows-4 grid-flow-row gap-6 p-10 panel">
                    <View link="/speed-numbers" image="./images/number-blocks.png" name="Speed Numbers" description="Memorize random digits as fast as you can."/>
                    <View link="/names-and-faces" image="./images/user.png" name="Name and Faces" description="Recall someone's name from a face." />
                    <View link="/poetry" image="./images/poetry.png" name="Poetry" description="Memorize a poem and recall it." />
                    <View link="/chess" image="./images/chess.png" name="Chess" description="Memorize a random chess position." />
                </div>
            </div>
        )
    }
}
