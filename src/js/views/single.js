import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItemById } from "../store/swapiService";
import { Context } from "../store/appContext";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Single = () => {
    
    const IMG_BASE_URL = "https://starwars-visualguide.com/assets/img/characters/"; // URL base para imagen
    const [details, setDetails] = useState([]); // Detalles del personaje traido por Id 
    const { store } = useContext(Context); // Acceder a los datos almacenados
    const { id } = useParams(); // Parametro dinamico
    // Traer datos de todos los personajes
    useEffect(() => {
        fetchItemById('people', id, setDetails);
    }, []);

    return (
        <Card>
            {store.characters.filter((item) => item.uid === id).map((item, index) =>
            (<React.Fragment key={index}>
                <div className="container-fluid d-flex flex-row justify-content-around">
                    <Card.Img src={`${IMG_BASE_URL}${id}.jpg`} alt="" />
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
                            <th className="text-danger">Birth Year</th>
                            <th className="text-danger">Gender</th>
                            <th className="text-danger">Height</th>
                            <th className="text-danger">Skin Color</th>
                            <th className="text-danger">Eye Color</th>
                        </tr>
                        <tr className="text-center fw-bold">
                            {item.uid === id &&
                                <>
                                    <td className="text-danger">{details.name}</td>
                                    <td className="text-danger">{details.birth_year}</td>
                                    <td className="text-danger">{details.gender}</td>
                                    <td className="text-danger">{details.height}</td>
                                    <td className="text-danger">{details.skin_color}</td>
                                    <td className="text-danger">{details.eye_color}</td>
                                </>}
                        </tr>
                    </thead>
                </Table>
            </React.Fragment>))}
        </Card>
    );
};

export default Single;