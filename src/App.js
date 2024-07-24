import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import Accueil from './Components/Accueil/Accueil';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        // Vérifiez les informations d'identification ici
        // Si les informations sont valides, mettez isAuthenticated à true
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <div>
                <Routes>
                    {/* Page de connexion */}
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    
                    {/* Page d'accueil */}
                    <Route path="/" element={isAuthenticated ? <Accueil /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;