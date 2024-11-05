// CharCard.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchItemById, checkUrlStatus } from "../store/swapiService";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddButton from "./addButton";

const PlanetCard = ({ planet, onFavoriteClick }) => {
    
    const IMG_BASE_URL = "https://starwars-visualguide.com/assets/img/planets/"; // URL base para imagen
    const [details, setDetails] = useState([]); // Detalles del planeta traidos por Id
    const [urlStatus, setUrlStatus] = useState(''); // status del enlace
    // Traer datos de todos los planetas
    useEffect(() => {
        fetchItemById('planets', planet.uid, setDetails);
        checkUrlStatus(`${IMG_BASE_URL}${planet.uid}.jpg`, setUrlStatus);
    }, []);

    return (
        <Card>
            <Card.Img src={urlStatus !== 404 ? `${IMG_BASE_URL}${planet.uid}.jpg` : `https://starwars-visualguide.com/assets/img/placeholder.jpg`} alt={details.name} variant="top" />
            <Card.Body>
                <Card.Title>{details.properties?.name}</Card.Title>
                <Card.Text>
                    <strong>Population:&nbsp;</strong>{details.properties?.population || "n/a"}<br />
                    <strong>Terrain:&nbsp;</strong>{details.properties?.terrain || "n/a"}
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