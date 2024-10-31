import React from 'react';
import { useFavorites } from '../store/FavoritesContext'; // Asegúrate de que la ruta sea correcta

const ContactCard = ({ item }) => {
    const { addFavorite, removeFavorite, favorites } = useFavorites();

    const isFavorite = favorites.some(favorite => favorite.id === item.id);

    const handleSave = () => {
        if (isFavorite) {
            // Si ya es favorito, eliminar de favoritos
            removeFavorite(item.id);
        } else {
            // Si no es favorito, añadir a favoritos
            addFavorite(item);
        }
    };

    return (
        <div className="card">
            <h5>{item.name}</h5>
            <button onClick={handleSave} className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-warning'}`}>
                {isFavorite ? 'Eliminar de Favoritos' : 'Guardar'}
            </button>
            {/* Agrega otros detalles del personaje, vehículo o planeta aquí */}
        </div>
    );
};

export default ContactCard;
