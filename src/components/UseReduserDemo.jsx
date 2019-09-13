import React, {useState} from 'react';
import '../css/pages.css';

export default function UseReduserDemoPage() {
    const [subset, setSubset] = useState({description: "default"});

    return (
        <div className="page">
            <h1>Use reduser for deep updating the object</h1>
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