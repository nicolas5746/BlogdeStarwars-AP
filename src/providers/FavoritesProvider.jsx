import React, { useState } from 'react';
import { FavoritesContext } from '../contexts/Contexts';

const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        // Cargar favoritos desde localStorage si están disponibles
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    const addFavorite = (item) => {
        setFavorites((prev) => {
            const updatedFavorites = [...prev, item];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };

    const removeFavorite = (itemName) => {
        setFavorites((prev) => {
            const updatedFavorites = prev.filter(item => item.name !== itemName);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesProvider;