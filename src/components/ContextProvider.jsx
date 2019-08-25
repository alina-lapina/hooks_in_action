import React, { useState } from 'react'
import {AppContext} from "./App.js"

export const ContextProvider = ({ children }) => {
    const [context, setContext] = useState(AppContext._currentValue);

    return (
        <AppContext.Provider value={[context, setContext]}>
            {children}
        </AppContext.Provider>
    );
};