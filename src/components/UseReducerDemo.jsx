import React, {useContext} from 'react';
import '../css/pages.css';
import {AppContext} from "../controllers/context";

export default function UseReducerDemoPage() {

    const {bookWizard} = useContext(AppContext);

    return (
        <div className="page">
            <h1>Use reduser for deep updating the object</h1>
            <textarea style={{border: 'none'}}
                      rows="5" cols="150"
                      value={bookWizard.book.description}
                      onChange={ e => bookWizard.dispatch({
                              action: "description",
                              data: e.target.value})}
            />
            <button onClick={ () => bookWizard.dispatch({action: "reset"})}>reset</button>
            <button onClick={ () => bookWizard.dispatch({action: "empty"})}>empty</button>
            <h2>Raw subset from context</h2>
            <pre>{JSON.stringify(bookWizard.book, null, 4)}</pre>
        </div>
    );
}