import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemById, checkUrlStatus } from '../store/swapiService';
import { AppContext } from '../contexts/Contexts';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Character = () => {

    const IMG_BASE_URL = "https://starwars-visualguide.com/assets/img/characters/"; // URL base para imagen
    const [details, setDetails] = useState([]); // Detalles del personaje traido por Id 
    const [urlStatus, setUrlStatus] = useState(''); // status del enlace
    const { store } = useContext(AppContext); // Acceder a los datos almacenados
    const { id } = useParams(); // Parametro dinamico
    // Traer datos de todos los personajes
    useEffect(() => {
        fetchItemById('people', id, setDetails);
        checkUrlStatus(`${IMG_BASE_URL}${id}.jpg`, setUrlStatus);
    }, []);

    return (
        <Card>
            {store.characters
                .filter((item) => item.uid === id)
                .map((_, index) =>
                (<React.Fragment key={index}>
                    <div className="container-fluid d-flex flex-row justify-content-around">
                        <Card.Img
                            alt={details.properties?.name}
                            src={urlStatus < 400 ? `${IMG_BASE_URL}${id}.jpg` : `https://starwars-visualguide.com/assets/img/placeholder.jpg`}
                            style={{ height: '50%', width: '25%' }}
                            title={details.properties?.name}
                        />
                        <Card.Body className="text-center">
                            <Card.Title>{details.properties?.name}</Card.Title>
                            <Card.Text>{details?.description}</Card.Text>
                        </Card.Body>
                    </div>
                    <div className="border-top my-3 border-danger"></div>
                    <Table borderless responsive="sm" striped>
                        <thead>
                            <tr className="text-center">
                                <th className="text-danger">Name</th>
                                <th className="text-danger">Birth Year</th>
                                <th className="text-danger">Gender</th>
                                <th className="text-danger">Height</th>
                                <th className="text-danger">Skin Color</th>
                                <th className="text-danger">Eye Color</th>
                            </tr>
                            <tr className="text-center fw-bold">
                                <td className="text-danger">{details.properties?.name}</td>
                                <td className="text-danger">{details.properties?.birth_year}</td>
                                <td className="text-danger">{details.properties?.gender}</td>
                                <td className="text-danger">{details.properties?.height}</td>
                                <td className="text-danger">{details.properties?.skin_color}</td>
                                <td className="text-danger">{details.properties?.eye_color}</td>
                            </tr>
                        </thead>
                    </Table>
                </React.Fragment>))}
        </Card>
    );
};

export default Character;