import React from 'react';
import '../css/pages.css';
import { Link } from "react-router-dom";

export default function WelcomePage() {
    return (
        <div className="page">
            <h1>Welcome to Hook in action Demo</h1>
            <p>The application is under development.</p>
            <h2>Source code</h2>
            <p>You can find the source code on <a
                    className="App-link"
                    href="https://github.com/alina-lapina/hooks_in_action.git"
                    target="_blank"
                    rel="noopener noreferrer"
                >GitHub repository</a>
            </p>

            <button><Link to="/useState">Use State Demo Page</Link></button><br/><br/>
            <button><Link to="/useContext">Use Context Demo Page</Link></button><br/><br/>
            <button><Link to="/useEffect">Use Effect Demo Page</Link></button><br/><br/>
            <button><Link to="/form">Form Page</Link></button>
        </div>
    );
}