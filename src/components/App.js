import React from 'react';
import logo from '../images/AlinaLapina.jpg';
import '../css/App.css';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {ContextProvider} from '../controllers/context'
import WelcomePage from './WelcomePage';
import UseStateDemo from "./UseStateDemo";
import UseContextDemo from "./UseContextDemo";
import UseEffectDemo from "./UseEffectDemo";
import FormPage from "./FormPage";
import UseFormDemo from "./UseFormDemo";

export default function App() {
    return (
        <ContextProvider>
            <Router>
                <div className="App">
                    <header className="App-header">
                        <div className="App-name">
                            <Link to="/">
                                <img src={logo} className="App-logo" alt="Alina Lapina's avatar"/>
                                React Hooks in action
                            </Link>
                        </div>
                    </header>
                    <Switch>
                        <Route path="/" exact component={WelcomePage}/>
                        <Route path="/useState" component={UseStateDemo}/>
                        <Route path="/useContext" component={UseContextDemo}/>
                        <Route path="/useEffect" component={UseEffectDemo}/>
                        <Route path="/useForm" component={UseFormDemo}/>
                        <Route path="/form" component={FormPage}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </Router>
        </ContextProvider>
    )
}

export function NoMatch({location}) {
    return (
        <div className="page">
            <h3>No match for <code>{location.pathname}</code>.</h3>
            <p>Back to <Link to="/">home page</Link></p>
        </div>
    );
}
