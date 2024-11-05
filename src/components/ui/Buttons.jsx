import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const AddItem = ({ data, subdir, onFavoriteClick }) => {

    const [mouse, setMouse] = useState({ active: false, hover: false }); // Estados del mouse
    const [iconClass, setIconClass] = useState('far text-warning'); // Clase de estilos del icono favoritos
    // Al agregar a favoritos se pasa la prop como parametro
    const addToFavorite = () => {
        const add = { ...data, subdir: subdir }; // Agrega una llave para determinar el subdirectorio en la ruta
        onFavoriteClick(add);
        setMouse({ active: true, hover: true });
    };
    // Observa eventos del mouse sobre el boton de agregar a favoritos
    useEffect(() => {
        if (mouse.hover) {
            (mouse.active) ? setIconClass('fas text-dark') : setIconClass('far text-dark');
        } else {
            setMouse({ active: false, hover: false });
            setIconClass('far text-warning');
        }
        if (mouse.active) {
            (mouse.hover) ? setIconClass('fas text-dark') : setIconClass('far text-warning');
        }
    }, [mouse.active, mouse.hover]);

    return (
        <Button
            variant="outline-warning"
            onClick={addToFavorite}
            onMouseEnter={() => setMouse({ active: false, hover: true })}
            onMouseLeave={() => setMouse({ active: false, hover: false })}
        >
            <i className={`${iconClass} fa-heart`}></i>
        </Button>
    );
};

export const LearnMore = ({ data, subdir }) => {
    return (
        <Link to={`/${subdir}/${data.uid}`} aria-label={`${data}-id`}>
            <Button variant="outline-primary">Learn more!</Button>
        </Link>
    );
};