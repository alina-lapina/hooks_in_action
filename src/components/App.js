import React from 'react';
import logo from '../images/SSB_logo.png';
import '../css/App.css';
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from "react-router-dom";
import WelcomePage from './WelcomePage';
import ClassificationPage from "./ClassificationPage";

export default function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <div className="App-name">
                        <img src={logo} className="App-logo" alt="SSB logo"/>
                        Klass uttrekk admin
                    </div>
                </header>
                <Switch>
                    <Route path="/" exact component={WelcomePage} />
                    <Redirect exact from="/classification" to="/" />
                    <Route path="/classifications/:id" component={ClassificationPage} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
}

function NoMatch({ location }) {
    return (
        <div className="page">
            <h3>No match for <code>{location.pathname}</code>.</h3>
            <p>Back to <Link to="/">home page</Link></p>
        </div>
    );
}