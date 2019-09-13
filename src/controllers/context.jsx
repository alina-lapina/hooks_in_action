import React, { useState, createContext, useReducer } from 'react'

export const AppContext = createContext({
    subset: {}
});

export const ContextProvider = ({ children }) => {
    const [subset, setSubset] = useState(AppContext._currentValue);

    const bookInit = {
        name: "My name",
        description: "default"
    };

    function subsetReducer(state, {action, data = {}}) {
        switch (action) {
            case "create": {
                return data;
            }
            case "description": {
                return  {...state, description: data};
            }
            case "reset": {
                return bookInit;
            }
            case "empty": {
                return { name: "", description: "" };
            }
            default:
                return state;
        }
    }

    const [book, dispatch] = useReducer(subsetReducer, bookInit);

    return (
        <AppContext.Provider value={{subset, setSubset, book, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};