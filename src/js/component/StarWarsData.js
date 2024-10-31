import React, { useEffect, useState } from 'react';
import { fetchPlanets, fetchPeople, fetchVehicles } from '../store/swapiService';

const StarWarsData = () => {
    const [planets, setPlanets] = useState([]);
    const [people, setPeople] = useState([]);
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const planetsData = await fetchPlanets();
                const peopleData = await fetchPeople();
                const vehiclesData = await fetchVehicles();
                
                setPlanets(planetsData);
                setPeople(peopleData);
                setVehicles(vehiclesData);
            } catch (error) {
                console.error("Error loading data:", error);
            }
        };

        loadData();
    }, []);

    return (
        <div>
            <h2>Planets</h2>
            <ul>
                {planets.map((planet) => (
                    <li key={planet.uid}>{planet.properties.name}</li>
                ))}
            </ul>

            <h2>People</h2>
            <ul>
                {people.map((person) => (
                    <li key={person.uid}>{person.properties.name}</li>
                ))}
            </ul>

            <h2>Vehicles</h2>
            <ul>
                {vehicles.map((vehicle) => (
                    <li key={vehicle.uid}>{vehicle.properties.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default StarWarsData;
