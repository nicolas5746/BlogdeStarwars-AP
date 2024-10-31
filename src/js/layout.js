import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './views/home';
import Single from './views/single';
import SinglePlanet from './views/singlePlanet';
import SingleStarship from './views/singleStarship';
import Planets from './views/Planets'; // Asegúrate de importar el componente de planetas
import Favorites from './component/Favorites'; // Importa el componente de favoritos
import Footer from './component/footer';

const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:id" element={<Single />} />
                    <Route path="/planet_details/:id" element={<SinglePlanet />} />
                    <Route path="/single-starship" element={<SingleStarship />} />
                    <Route path="/planets" element={<Planets />} /> {/* Ruta para planetas */}
                    <Route path="/favorites" element={<Favorites />} /> {/* Ruta para la página de favoritos */}
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default Layout;