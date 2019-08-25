import React, { useState } from 'react'
import {AppContext} from "./App.js"

export const ContextProvider = ({ children }) => {
    const [subset, setSubset] = useState(AppContext._currentValue);

    return (
        <AppContext.Provider value={[subset, setSubset]}>
            {children}
        </AppContext.Provider>
    );
};