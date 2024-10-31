// CharCard.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchItemById } from "../store/swapiService";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddButton from "./addButton";

const PlanetCard = ({ planet, onFavoriteClick }) => {
    // Detalles del planeta traidos por Id
    const [details, setDetails] = useState([]);
    // Traer datos de todos los planetas
    useEffect(() => {
        fetchItemById('planets', planet.uid, setDetails);
    }, []);

    return (
        <Card>
            <Card.Img src="https://via.placeholder.com/400x200" alt={details.name} variant="top" />
            <Card.Body>
                <Card.Title>{details.name}</Card.Title>
                <Card.Text>
                    <strong>Population:&nbsp;</strong>{details.population || "n/a"}<br />
                    <strong>Terrain:&nbsp;</strong>{details.terrain || "n/a"}
                </Card.Text>
                <Link to={`/planet_details/${planet.uid}`} aria-label='planet-uid'>
                    <Button variant="outline-primary">Learn more!</Button>
                </Link>
                <AddButton data={planet} subdir="planet_details" onFavoriteClick={onFavoriteClick} />
            </Card.Body>
        </Card>
    );
};

export default PlanetCard;