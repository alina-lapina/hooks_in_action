import React from 'react';
import logo from '../images/AlinaLapina.jpg';
import '../css/App.css';
import WelcomePage from './WelcomePage';

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-name">
                    <img src={logo} className="App-logo" alt="Alina Lapina's avatar"/>
                    React Hooks in action
                </div>
            </header>
            <WelcomePage/>
        </div>
    );
}
