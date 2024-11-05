// Import React into the bundle
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // Cambiado a react-dom/client
// Include Bootstrap npm library into the bundle
import 'bootstrap/dist/css/bootstrap.min.css';
// Include your index.scss file into the bundle
import './styles/styles.css'; // Asegúrate de que la ruta sea correcta
// Import your own components
import Router from './routes/Router';

// Render your React application using createRoot
const root = ReactDOM.createRoot(document.querySelector("#app")); // Cambiado a createRoot
root.render(
    <StrictMode>
        <Router />
    </StrictMode>
);