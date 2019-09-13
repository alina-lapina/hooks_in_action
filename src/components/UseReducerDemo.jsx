import React, {useContext} from 'react';
import '../css/pages.css';
import {AppContext} from "../controllers/context";

export default function UseReducerDemoPage() {

    const {book, dispatch} = useContext(AppContext);

    return (
        <div className="page">
            <h1>Use reduser for deep updating the object</h1>
            <textarea style={{border: 'none'}}
                      rows="5" cols="150"
                      value={book.description}
                      onChange={ e => dispatch({
                              action: "description",
                              data: e.target.value})}
            />
            <button onClick={ () => dispatch({action: "reset"})}>reset</button>
            <button onClick={ () => dispatch({action: "empty"})}>empty</button>
            <h2>Raw subset from context</h2>
            <pre>{JSON.stringify(book, null, 4)}</pre>
        </div>
    );
}