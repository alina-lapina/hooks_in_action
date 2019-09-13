import React, { useState, createContext, useReducer } from 'react'

export const AppContext = createContext({
    subset: {}
});

export const ContextProvider = ({ children }) => {
    const [subset, setSubset] = useState(AppContext._currentValue);

    const bookWizard = useBookWizard(
        {
            name: "My name",
            description: "default"
        }
    );

    return (
        <AppContext.Provider value={{subset, setSubset, bookWizard}}>
            {children}
        </AppContext.Provider>
    );
};

export const useBookWizard = (bookInit) => {

    function bookReducer(state, {action, data = {}}) {
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

    const [book, dispatch] = useReducer(bookReducer, bookInit);

    return {book, dispatch};

};