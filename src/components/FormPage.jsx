import React, {useState, useContext} from 'react';
import '../css/pages.css';
import {AppContext} from '../controllers/context';

export default function FormPage() {
    const [subset, setSubset] = useContext(AppContext);
    const classification = require('../tests/json/classification131');
    setSubset(classification);

    return (
        <div className="page">
            <h1>Classification {subset.name}</h1>
            <h2>Description</h2>
            <ConvertibleTextarea id="1234"
                style={{border: 'none'}}
                      rows="5" cols="150"
                      value={subset.description}
                      onChange={(e) => { subset.description = e.target.value; setSubset({...subset});}}
            />
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


export function Textarea(props) {
    const [text, setText] = useState(props.value);
    const handleChange = e => setText(e.target.value);
    return <textarea rows="5" cols="150"
                     value={text}
                     onChange={ handleChange }
    />

}
export function ConvertibleTextarea(props) {
    const asTextarea = () => {
        return <Textarea value={props.value} />
    };
    const asText = () => {
        return <p>{props.value}</p>
    };

    const [look, setLook] = useState(<p>Init</p>);

    return (
        <>
            <button onClick={() => setLook(asTextarea())}>As textarea</button>
            <button onClick={() => setLook(asText())}>As text</button>
            {look}
        </>
    )
}