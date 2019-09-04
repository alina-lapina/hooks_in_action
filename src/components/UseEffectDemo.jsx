import React, {useEffect, useState, useContext} from 'react';
import {AppContext} from "../controllers/context";

export default function UseEffectDemo() {
    const [subset] = useContext(AppContext);

    const [count, setCount] = useState(0);
    useEffect(() => console.log('mounted'), []);
    useEffect(() => console.log('count updated'), [count]);
    useEffect(() => console.log('updated'));
    useEffect(() => {return () => {console.log('will unmount');}}, []);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <h1>Info fra context: {subset.description}</h1>
        </div>
    );
}
