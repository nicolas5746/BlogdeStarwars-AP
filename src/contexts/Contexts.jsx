import React, { createContext, useContext } from 'react';

export const AppContext = createContext();

export const FavoritesContext = createContext();

export const useFavorites = () => {
    return useContext(FavoritesContext);
};