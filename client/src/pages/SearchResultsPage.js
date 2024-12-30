import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; // Keep this if you plan to make API calls.

const SearchResultsPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const medicineName = queryParams.get('name');

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchResults = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/pharmacies', {
                    params: { medicineName },
                });
                setResults(response.data);
            } catch (err) {
                setError('Failed to fetch search results. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [medicineName]);

    if (loading) return <p>Loading results...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>Search Results</h1>
            <p>Displaying results for: <b>{medicineName}</b></p>
            <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Pharmacy</th>
                        <th>Price ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result) => (
                        <tr key={result.id}>
                            <td>{result.pharmacy}</td>
                            <td>{result.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchResultsPage;
