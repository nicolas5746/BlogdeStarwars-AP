import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppProvider from '../providers/AppProvider'; // Asegúrate de que la ruta sea correcta
import FavoritesProvider from '../providers/FavoritesProvider'; // Importa el nuevo contexto
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';
import Character from '../views/Character';
import Home from '../views/Home';
import Planet from '../views/Planet';

const Router = () => {
    return (
        <AppProvider>
            <FavoritesProvider> {/* Añade el FavoritesProvider aquí */}
                <BrowserRouter>
                    <Navbar />
                    <div className="container mt-3">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/details/:id" element={<Character />} />
                            <Route path="/planet_details/:id" element={<Planet />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </FavoritesProvider>
        </AppProvider>
    );
};

export default Router;