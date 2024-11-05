// store/swapiService.js

const BASE_URL = `https://www.swapi.tech/api/`;

export const fetchPlanets = async () => {
    try {
        const response = await fetch(`${BASE_URL}planets/`);
        const data = await response.json();
        return data.result; // Retorna la lista de planetas
    } catch (error) {
        console.error("Error fetching planets:", error);
        throw error;
    }
};

export const fetchPeople = async () => {
    try {
        const response = await fetch(`${BASE_URL}people/`);
        const data = await response.json();
        return data.result; // Retorna la lista de personas
    } catch (error) {
        console.error("Error fetching people:", error);
        throw error;
    }
};
export const fetchVehicles = async () => {
    try {
        const response = await fetch(`${BASE_URL}vehicles/`);
        const data = await response.json();
        return data.result; // Retorna la lista de vehículos
    } catch (error) {
        console.error("Error fetching vehicles:", error);
        throw error;
    }
};
// ------ Traer detalles del item  ------ //
export const fetchItemById = async (subdir, id, state) => {
    try {
        const response = await fetch(`${BASE_URL}${subdir}/${id}`);
        const data = await response.json();
        return state(data.result); // Retorna detalles del item y lo almacena dentro de un estado
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
// Funcion para checkear el estado de la url
export const checkUrlStatus = async (url, state) => {
    try {
        const response = await fetch(url);
        return state(response.status); // Retorna status y lo almacena dentro de un estado
    } catch (error) {
        console.error("Error fetching url:", error);
        throw error;
    }
}