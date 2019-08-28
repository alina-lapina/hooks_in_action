import React, { useState, createContext } from 'react'

export const AppContext = createContext({
    subset: {}
});

export const ContextProvider = ({ children }) => {
    const [subset, setSubset] = useState(AppContext._currentValue);

    return (
        <AppContext.Provider value={[subset, setSubset]}>
            {children}
        </AppContext.Provider>
    );
};