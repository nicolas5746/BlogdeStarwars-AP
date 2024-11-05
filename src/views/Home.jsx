import React, { useEffect, useContext } from 'react';
import Card from '../components/Card'; // Componente para personajes
import { AppContext, useFavorites } from '../contexts/Contexts';
import { CharacterProperties, PlanetProperties } from '../components/Properties';

const Home = () => {
    const { store, actions } = useContext(AppContext);
    const { addFavorite, favorites } = useFavorites(); // Accede a los favoritos desde el contexto

    useEffect(() => {
        actions.fetchCharacters();
        actions.fetchPlanets();
        actions.fetchVehicles();
    }, []);

    const handleFavoriteClick = (item) => {
        const results = favorites.map((item) => item.name);
        if (!results.includes(item.name)) addFavorite(item);
    };

    return (
        <div className="container">
            {/* Characters */}
            <h1 className="text-danger">Characters</h1>
            <div className="d-flex flex-row justify-content-start overflow-auto ml-4 my-2">
                {store.characters && store.characters.length > 0 ? (
                    store.characters.map((character) => (
                        <div key={character.uid} className="col-md-4 mx-3">
                            <Card
                                data={character}
                                detailsSubdir="details"
                                imgSubdir="characters"
                                onFavoriteClick={handleFavoriteClick}
                                properties={CharacterProperties}
                                type="people"
                            />
                        </div>)))
                    :
                    (<p>No hay personajes disponibles.</p>)}
            </div>
            {/* Planets */}
            <h1 className="text-danger">Planets</h1>
            <div className="d-flex flex-row justify-content-start overflow-auto ml-4 my-2">
                {store.planets && store.planets.length > 0 ? (
                    store.planets.map((planet) => (
                        <div key={planet.uid} className="col-md-4 mx-3">
                            <Card
                                data={planet}
                                detailsSubdir="planet_details"
                                imgSubdir="planets"
                                onFavoriteClick={handleFavoriteClick}
                                properties={PlanetProperties}
                                type="planets"
                            />
                        </div>)))
                    :
                    (<p>No hay planetas disponibles.</p>)}
            </div>
        </div>
    );
};

export default Home;