// CharCard.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchItemById } from "../store/swapiService";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddButton from "./addButton";

const CharCard = ({ character, onFavoriteClick }) => {
    // URL base para imagen
    const IMG_BASE_URL = "https://starwars-visualguide.com/assets/img/characters/";
    // Detalles del personaje traidos por Id
    const [details, setDetails] = useState([]);
    // Traer datos de todos los personajes
    useEffect(() => {
        fetchItemById('people', character.uid, setDetails);
    }, []);

    return (
        <Card>
            <Card.Img src={`${IMG_BASE_URL}${character.uid}.jpg`} alt={details.name} variant="top" />
            <Card.Body>
                <Card.Title>{details.name}</Card.Title>
                <Card.Text>
                    <strong>Gender:&nbsp;</strong>{details.gender || "n/a"}<br />
                    <strong>Hair Color:&nbsp;</strong>{details.hair_color || "n/a"}<br />
                    <strong>Eye Color:&nbsp;</strong>{details.eye_color || "n/a"}
                </Card.Text>
                <Link to={`/details/${character.uid}`} aria-label='character-uid'>
                    <Button variant="outline-primary">Learn more!</Button>
                </Link>
                <AddButton data={character} subdir="details" onFavoriteClick={onFavoriteClick} />
            </Card.Body>
        </Card>
    );
};

export default CharCard;