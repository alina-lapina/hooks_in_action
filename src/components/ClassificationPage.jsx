import React, {useContext} from 'react';
import '../css/pages.css';
import {AppContext} from './App';

export default function ClassificationPage({match}) {
    const [context] = useContext(AppContext);

    return (
        <div className="page">
            <h1>Classification {match.params.id}</h1>
            <p>{JSON.stringify(context)}</p>
        </div>
    );
}