import React, {useReducer} from 'react';
import '../css/pages.css';

export default function UseReducerDemoPage() {

    function subsetReduser(state, action) {
        switch (action.type) {
            case "create": {
                return action.data;
            }
            case "description": {
                return  {...state, description: action.data};
            }
            default:
                return state;
        }
    }

    const [subset, dispatch] = useReducer(subsetReduser, {
        name: "My name",
        description: "default"});

    return (
        <div className="page">
            <h1>Use reduser for deep updating the object</h1>
            <textarea style={{border: 'none'}}
                      rows="5" cols="150"
                      value={subset.description}
                      onChange={(e) => {dispatch({
                              type: "description",
                              data: e.target.value})}}
            />
            <h2>Raw subset from context</h2>
            <pre>{JSON.stringify(subset, null, 4)}</pre>
        </div>
    );
}