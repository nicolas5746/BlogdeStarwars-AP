// Import React into the bundle
import React from "react";
import ReactDOM from "react-dom/client"; // Cambiado a react-dom/client

// Include Bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.min.css";

// Include your index.scss file into the bundle
import "../styles/index.css"; // Asegúrate de que la ruta sea correcta

// Import your own components
import Layout from "./layout";
import { AppContextProvider } from "./store/appContext"; // Asegúrate de que la ruta sea correcta
import { FavoritesProvider } from "./store/FavoritesContext"; // Importa el nuevo contexto


// Render your React application using createRoot
const root = ReactDOM.createRoot(document.querySelector("#app")); // Cambiado a createRoot
root.render(
    <AppContextProvider>
        <FavoritesProvider> {/* Añade el FavoritesProvider aquí */}
            <Layout />
        </FavoritesProvider>
    </AppContextProvider>
);