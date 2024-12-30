import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/favorites', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setFavorites(response.data);
            } catch (err) {
                setError('Failed to fetch favorites. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchFavorites();
    }, []);

    const handleMedicineClick = (medicineId) => {
        navigate(`/medicine/${medicineId}`);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>Your Favorite Medicines</h1>
            <ul>
                {favorites.map((medicine) => (
                    <li
                        key={medicine.id}
                        style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                        onClick={() => handleMedicineClick(medicine.id)}
                    >
                        {medicine.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfilePage;
