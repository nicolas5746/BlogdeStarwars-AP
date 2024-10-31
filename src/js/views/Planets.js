// views/Planets.js
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext'; // Cambia AppContext por Context

const Planets = () => {
    const { store, actions } = useContext(Context); // Cambia AppContext por Context

    useEffect(() => {
        actions.fetchPlanets(); // Llama a la acción para obtener los planetas
    }, []);

    return (
        <div>
            <h1>Planets</h1>
            <ul>
                {store.planets.map((planet) => (<li key={planet.uid}>{planet.name}</li>))}
            </ul>
        </div>
    );
};

export default Planets;