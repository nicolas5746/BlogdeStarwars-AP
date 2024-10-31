const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            vehicles: [],
            planets: [],
            favorites: [],
        },
        actions: {
            fetchCharacters: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people/");
                    if (!response.ok) throw new Error('Network response was not ok');
                    const data = await response.json();
                    console.log(data);
                    setStore(prevStore => ({ ...prevStore, characters: data.results }));
                } catch (error) {
                    console.error('Error al obtener personajes:', error);
                }
            },
            fetchPlanets: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets/");
                    if (!response.ok) throw new Error('Network response was not ok');
                    const data = await response.json();
                    console.log(data);
                    setStore(prevStore => ({ ...prevStore, planets: data.results }));
                } catch (error) {
                    console.error('Error al obtener planetas:', error);
                }
            },
            fetchVehicles: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles/");
                    if (!response.ok) throw new Error('Network response was not ok');
                    const data = await response.json();
                    console.log(data);
                    setStore(prevStore => ({ ...prevStore, vehicles: data.results }));
                } catch (error) {
                    console.error('Error al obtener vehículos:', error);
                }
            },
            addFavorite: (item) => {
                const store = getStore();
                // Verifica si el item ya está en favoritos
                if (!store.favorites.find(favorite => favorite.name === item.name)) {
                    setStore(prevStore => ({ ...prevStore, favorites: [...prevStore.favorites, item] }));
                }
            },
        },
    };
};

export default getState;












