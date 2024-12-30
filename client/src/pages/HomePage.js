import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchValue.trim()) {
            navigate(`/search?name=${searchValue}`);
        }
    };

    return (
        <Box textAlign="center" mt={5} px={2}>
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
                    <Grid item xs={12} sm={6} md={4}>
                        <Button variant="outlined" fullWidth>
                            Paracetamol
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Button variant="outlined" fullWidth>
                            Ibuprofen
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Button variant="outlined" fullWidth>
                            Aspirin
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default HomePage;
