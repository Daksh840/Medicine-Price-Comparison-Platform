import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import the actual HomePage component
import SearchResultsPage from './pages/SearchResultsPage';
import MedicineDetailsPage from './pages/MedicineDetailsPage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchResultsPage />} />
                <Route path="/medicine/:id" element={<MedicineDetailsPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </Router>
    );
};

export default App;
