import React, {useContext} from 'react';
import '../css/pages.css';
import {AppContext} from './App';

export default function ClassificationPage({match}) {
    const [subset, setSubset] = useContext(AppContext);
    const classification = require('../tests/json/classification131');
    setSubset(classification);

    return (
        <div className="page">
            <h1>Classification {subset.name}</h1>
            <p>Id: {match.params.id}</p>
            <h2>Description</h2>
            <textarea style={{border: 'none'}}
                rows="5" cols="150"
                value={subset.description}
                onChange={(e) => { subset.description = e.target.value; setSubset({...subset});}}
            />
            <h2>Raw subset from context</h2>
            <pre>{JSON.stringify(subset, null, 4)}</pre>

        </div>
    );
}