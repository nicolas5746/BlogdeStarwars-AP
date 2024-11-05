import React, { useEffect, useState } from 'react';
import { fetchItemById, checkUrlStatus } from '../store/swapiService';
import { AddItem, LearnMore } from './ui/Buttons';
import { default as CARD } from 'react-bootstrap/Card';

const Card = ({ data, detailsSubdir, imgSubdir, onFavoriteClick, properties, type }) => {

    const IMG_BASE_URL = `https://starwars-visualguide.com/assets/img/${imgSubdir}/`; // URL base para imagen

    const [details, setDetails] = useState([]); // Detalles del personaje traidos por Id
    const [urlStatus, setUrlStatus] = useState(''); // status del enlace
    // Traer datos de todos los personajes
    useEffect(() => {
        fetchItemById(type, data.uid, setDetails);
        checkUrlStatus(`${IMG_BASE_URL}${data.uid}.jpg`, setUrlStatus);
    }, []);

    return (
        <CARD>
            <CARD.Img
                alt={details.properties?.name}
                src={urlStatus < 400 ? `${IMG_BASE_URL}${data.uid}.jpg` : `https://starwars-visualguide.com/assets/img/placeholder.jpg`}
                title={details.properties?.name}
                variant="top"
            />
            <CARD.Body>
                <CARD.Title>{details.properties?.name}</CARD.Title>
                <CARD.Text>{properties(details)}</CARD.Text>
                <LearnMore data={data} subdir={detailsSubdir} />
                <AddItem data={data} subdir={detailsSubdir} onFavoriteClick={onFavoriteClick} />
            </CARD.Body>
        </CARD>
    );
};

export default Card;