import React, {createContext} from 'react';
import logo from '../images/SSB_logo.png';
import '../css/App.css';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {ContextProvider} from './ContextProvider'
import WelcomePage from './WelcomePage';
import ClassificationPage from "./ClassificationPage";
import SubsetForm from "./SubsetForm";

export default function App() {
    return (
        <ContextProvider>
            <Router>
                <div className="App">
                    <header className="App-header">
                        <div className="App-name">
                            <Link to="/">
                                <img src={logo} className="App-logo" alt="SSB logo"/>
                                Klass uttrekk admin
                            </Link>
                        </div>
                    </header>
                    <Switch>
                        <Route path="/" exact component={WelcomePage}/>
                        <Route path="/subsets/:id([0-9]+)" component={ClassificationPage}/>
                        <Route path="/create" component={SubsetForm}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </Router>
        </ContextProvider>
    )
}

export const AppContext = createContext({
    subset: {id: 14, name: "New subset", status: "DRAFT"}
});

export function NoMatch({location}) {
    return (
        <div className="page">
            <h3>No match for <code>{location.pathname}</code>.</h3>
            <p>Back to <Link to="/">home page</Link></p>
        </div>
    );
}
