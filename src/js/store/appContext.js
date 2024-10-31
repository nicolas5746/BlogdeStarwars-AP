// appContext.js
import React, { createContext, useState } from 'react';
import getState from './flux';

export const Context = createContext();

export const AppContextProvider = ({ children }) => {
    const [store, setStore] = useState({
        characters: [],
        vehicles: [],
        planets: [],
        favorites: [],
    });

    const actions = getState({ getStore: () => store, getActions: () => actions, setStore }).actions;

    return (
        <Context.Provider value={{ store, actions }}>
            {children}
        </Context.Provider>
    );
};






