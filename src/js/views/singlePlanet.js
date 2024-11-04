import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItemById, checkUrlStatus } from "../store/swapiService";
import { Context } from "../store/appContext";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const SinglePlanet = () => {
    
    const IMG_BASE_URL = "https://starwars-visualguide.com/assets/img/planets/"; // URL base para imagen
    const [details, setDetails] = useState([]); // Detalles del planeta traido por Id 
    const [urlStatus, setUrlStatus] = useState(''); // status del enlace
    const { store } = useContext(Context); // Acceder a los datos almacenados
    const { id } = useParams(); // Parametro dinamico
    // Traer datos de todos los planetas
    useEffect(() => {
        fetchItemById('planets', id, setDetails);
        checkUrlStatus(`${IMG_BASE_URL}${id}.jpg`, setUrlStatus);
    }, []);

    return (
        <Card>
            {store.planets.filter((item) => item.uid === id).map((item, index) =>
            (<React.Fragment key={index}>
                <div className="container-fluid d-flex flex-row justify-content-around">
                    <Card.Img src={urlStatus !== 404 ? `${IMG_BASE_URL}${id}.jpg` : `https://starwars-visualguide.com/assets/img/placeholder.jpg`}  alt="" />
                    <Card.Body className="text-center">
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        </Card.Text>
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
                            {item.uid === id &&
                                <>
                                    <td className="text-danger">{details.name}</td>
                                    <td className="text-danger">{details.climate}</td>
                                    <td className="text-danger">{details.population}</td>
                                    <td className="text-danger">{details.orbital_period}</td>
                                    <td className="text-danger">{details.rotation_period}</td>
                                    <td className="text-danger">{details.diameter}</td>
                                </>}
                        </tr>
                    </thead>
                </Table>
            </React.Fragment>))}
        </Card>
    );
};

export default SinglePlanet;