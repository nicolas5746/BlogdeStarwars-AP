import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFavorites } from "../store/FavoritesContext"; // Asegúrate de que la ruta es correcta
import { default as Nav } from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {

    const { favorites, removeFavorite } = useFavorites(); // Accede a los favoritos desde el contexto

    const navigate = useNavigate(); // Acceder al Objecto de navegacion

    const [locationChanged, setLocationChanged] = useState(false); // Detecta cambio de ruta
    const [showDropdown, setShowDropdown] = useState(false); // Desplegar condicionalmente la lista de favoritos
    // Al hacer click en item
    const onClick = (subdir, id) => {
        navigate(`/${subdir}/${id}`); // Navegar hacia esta ruta
        setLocationChanged(true);
    }
    // Observar si la ruta ha cambiado
    useEffect(() => {
        if (locationChanged) {
            setShowDropdown(false);
            setLocationChanged(false);
        }
    }, [locationChanged]);

    return (
        <Nav className="bg-body-light">
            <div className="container-fluid d-flex flex-row justify-content-around">
                <Link className="navbar-brand" to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
                        alt="Star Wars"
                        width="100"
                    />
                </Link>
                <Dropdown autoClose="outside" onToggle={() => setShowDropdown(!showDropdown)} show={showDropdown}>
                    <Dropdown.Toggle id="dropdown-basic" variant="primary">
                        <span className="fw-bold">Favorites&nbsp;</span>
                        <Badge bg="secondary">{favorites.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="text-center">
                        {favorites.length > 0 ? favorites.map((fav, index) =>
                        (<Dropdown.Item className="bg-white text-primary" key={index}>
                            <span className="favorites-item" onClick={() => onClick(fav.subdir, fav.uid)}>{fav.name}</span>
                            <span>&nbsp;</span>
                            <i className="fa fa-trash text-dark" aria-hidden="true" onClick={() => removeFavorite(fav.name)}></i>
                        </Dropdown.Item>))
                            :
                            <Dropdown.Item className="bg-white text-dark fw-bold">(empty)</Dropdown.Item>}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </Nav>
    );
};

export default Navbar;