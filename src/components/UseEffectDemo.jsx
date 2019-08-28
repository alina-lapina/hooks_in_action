import React, {useEffect, useState} from 'react';

export default function UseEffectDemo() {
    useEffect(() => console.log('mounted or updated'));

    useEffect(() => {return () => {console.log('will unmount');}}, []);

    const [count, setCount] = useState(0);
    useEffect(() => {document.title = `You clicked ${count} times`;});

    useEffect(() => console.log('count updated'), [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
