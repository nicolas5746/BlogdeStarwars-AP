import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemById, checkUrlStatus } from '../store/swapiService';
import { AppContext } from '../contexts/Contexts';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Planet = () => {

    const IMG_BASE_URL = "https://starwars-visualguide.com/assets/img/planets/"; // URL base para imagen
    const [details, setDetails] = useState([]); // Detalles del planeta traido por Id 
    const [urlStatus, setUrlStatus] = useState(''); // status del enlace
    const { store } = useContext(AppContext); // Acceder a los datos almacenados
    const { id } = useParams(); // Parametro dinamico
    // Traer datos de todos los planetas
    useEffect(() => {
        fetchItemById('planets', id, setDetails);
        checkUrlStatus(`${IMG_BASE_URL}${id}.jpg`, setUrlStatus);
    }, []);

    return (
        <Card>
            {store.planets
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
                                <th className="text-danger">Climate</th>
                                <th className="text-danger">Population</th>
                                <th className="text-danger">Orbital Period</th>
                                <th className="text-danger">Rotation Period</th>
                                <th className="text-danger">Diameter</th>
                            </tr>
                            <tr className="text-center fw-bold">
                                <td className="text-danger">{details.properties?.name}</td>
                                <td className="text-danger">{details.properties?.climate}</td>
                                <td className="text-danger">{details.properties?.population}</td>
                                <td className="text-danger">{details.properties?.orbital_period}</td>
                                <td className="text-danger">{details.properties?.rotation_period}</td>
                                <td className="text-danger">{details.properties?.diameter}</td>
                            </tr>
                        </thead>
                    </Table>
                </React.Fragment>))}
        </Card>
    );
};

export default Planet;