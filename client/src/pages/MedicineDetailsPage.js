import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MedicineDetailsPage = () => {
    const { id } = useParams(); // Get the medicine ID from the URL
    const [medicineDetails, setMedicineDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMedicineDetails = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:5000/api/medicines/${id}`);
                console.log('API Response:', response.data);
                setMedicineDetails(response.data);
            } catch (err) {
                console.error('API Error:', err.response || err.message);
                setError('Failed to fetch medicine details. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchMedicineDetails();
    }, [id]);

    if (loading) return <p>Loading medicine details...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>{medicineDetails.name}</h1>
            <p>{medicineDetails.description}</p>
            <h2>Pharmacies Offering This Medicine</h2>
            <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Pharmacy</th>
                        <th>Price </th>
                    </tr>
                </thead>
                <tbody>
                    {medicineDetails.pharmacies.map((pharmacy, index) => (
                        <tr key={index}>
                            <td>{pharmacy.name}</td>
                            <td>{pharmacy.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default MedicineDetailsPage;
