import React from 'react';
import '../css/pages.css';
import { Link } from "react-router-dom";

export default function WelcomePage() {
    return (
        <div className="page">
            <h1>Welcome to Klass Subsets web</h1>
            <p>The application is under development.</p>
            <h2>Source code</h2>
            <p>You can find the source code on <a
                    className="App-link"
                    href="https://github.com/statisticsnorway/klass-subsets-web>GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                >GitHub repository</a>
            </p>

            <button><Link to="/subsets/13">Show an existent subset</Link></button>
            <button><Link to="/create">Create an existent subset</Link></button>
        </div>
    );
}