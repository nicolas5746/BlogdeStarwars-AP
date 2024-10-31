import React, { useEffect } from 'react';
import { useStore } from '../store/appContext'; // Ajusta la ruta según tu estructura

const PlanetsComponent = () => {
    const { actions, store } = useStore();

    useEffect(() => {
        actions.fetchAllPlanets(); // Obtener todos los planetas
    }, [actions]);

    return (
        <div>
            {store.planets.length > 0 ? (
                store.planets.map((planet) => (
                    <div key={planet.uid}>
                        <h2>{planet.name}</h2>
                        {/* Aquí puedes mostrar más detalles del planeta si los has obtenido */}
                    </div>
                ))
            ) : (
                <p>Cargando planetas...</p> // Mensaje mientras se cargan los planetas
            )}
        </div>
    );
};

export default PlanetsComponent;
