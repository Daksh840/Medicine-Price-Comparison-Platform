import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
    const [medicines, setMedicines] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/medicines');
                setMedicines(response.data);
            } catch (error) {
                console.error('Failed to fetch medicines:', error);
            }
        };
        fetchMedicines();
    }, []);

    const handleSearch = () => {
        if (searchValue.trim()) {
            navigate(`/search?name=${searchValue}`);
        }
    };

    return (
        <Box textAlign="center" mt={5} px={2}>
            <Box display="flex" justifyContent="flex-end" mb={2} px={2}>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{ marginRight: 2 }}
                    onClick={() => navigate('/login')}
                >
                    Login
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate('/signup')}
                >
                    Signup
                </Button>
            </Box>
            <Typography variant="h3" gutterBottom>
                PharmaCompare
            </Typography>
            <Typography variant="h6" gutterBottom>
                Search and compare medicine prices across pharmacies
            </Typography>
            <Box mt={3} maxWidth="500px" mx="auto">
                <TextField
                    label="Search Medicines"
                    variant="outlined"
                    fullWidth
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box mt={5}>
                <Typography variant="h5">Popular Medicines</Typography>
                <Grid container spacing={2} mt={2} justifyContent="center">
                    {medicines.map((medicine) => (
                        <Grid item xs={12} sm={6} md={4} key={medicine._id}>
                            <Button
                                variant="outlined"
                                fullWidth
                                onClick={() => navigate(`/medicine/${medicine._id}`)}
                            >
                                {medicine.name}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default HomePage;
