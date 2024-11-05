import React, { useState } from 'react';
import { AppContext } from '../contexts/Contexts';
import getState from '../store/flux';

const AppProvider = ({ children }) => {
    const [store, setStore] = useState({
        characters: [],
        vehicles: [],
        planets: [],
        favorites: [],
    });

    const actions = getState({ getStore: () => store, getActions: () => actions, setStore }).actions;

    return (
        <AppContext.Provider value={{ store, actions }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;