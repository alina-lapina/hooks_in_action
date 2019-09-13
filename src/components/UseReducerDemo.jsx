import React, {useReducer} from 'react';
import '../css/pages.css';

export default function UseReducerDemoPage() {

    const bookInit = {
        name: "My name",
        description: "default"};

    function subsetReduser(state, action) {
        switch (action.type) {
            case "create": {
                return action.data;
            }
            case "description": {
                return  {...state, description: action.data};
            }
            case "reset": {
                return bookInit;
            }
            case "empty": {
                return {
                    name: "",
                    description: ""};
            }
            default:
                return state;
        }
    }

    const [book, dispatch] = useReducer(subsetReduser, bookInit);

    return (
        <div className="page">
            <h1>Use reduser for deep updating the object</h1>
            <textarea style={{border: 'none'}}
                      rows="5" cols="150"
                      value={book.description}
                      onChange={ e => dispatch({
                              type: "description",
                              data: e.target.value})}
            />
            <button onClick={e => dispatch({type: "reset"})}>reset</button>
            <button onClick={e => dispatch({type: "empty"})}>empty</button>
            <h2>Raw subset from context</h2>
            <pre>{JSON.stringify(book, null, 4)}</pre>
        </div>
    );
}