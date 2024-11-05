import React from 'react';

export const CharacterProperties = (item) => {
    return (
        <>
            <strong>Gender:&nbsp;</strong>{item.properties?.gender || "n/a"}
            <br />
            <strong>Hair-Color:&nbsp;</strong>{item.properties?.hair_color || "n/a"}
            <br />
            <strong>Eye-Color:&nbsp;</strong>{item.properties?.eye_color || "n/a"}
        </>
    );
};

export const PlanetProperties = (item) => {
    return (
        <>
            <strong>Population:&nbsp;</strong>{item.properties?.population || "n/a"}
            <br />
            <strong>Terrain:&nbsp;</strong>{item.properties?.terrain || "n/a"}
        </>
    );
};