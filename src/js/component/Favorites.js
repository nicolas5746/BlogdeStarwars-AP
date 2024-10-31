import React from "react";
import { useFavorites } from "../store/FavoritesContext"; // Asegúrate de ajustar la ruta
import CharCard from "../component/charCard"; // Asegúrate de usar el componente correcto

const Favorites = () => {
    const { favorites, removeFavorite } = useFavorites();

    return (
        <div className="container">
            <h1 className="text-danger">Favoritos</h1>
            <div className="row">
                {favorites.length > 0 ? (
                    favorites.map((item) => (
                        <div key={item.uid} className="col-md-4">
                            <CharCard 
                                character={item} 
                                onFavoriteClick={() => removeFavorite(item.uid)} // Al hacer clic, eliminar de favoritos
                            />
                        </div>
                    ))
                ) : (
                    <p>No hay favoritos disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default Favorites;

