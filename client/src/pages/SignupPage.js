import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            await axios.post('http://localhost:5000/api/auth/signup', { name, email, password });
            navigate('/login'); // Redirect to login page
        } catch (err) {
            setError('Failed to register. Please try again.');
        }
    };

    return (
        <Box textAlign="center" mt={5} px={2} maxWidth="400px" mx="auto">
            <Typography variant="h4" gutterBottom>Sign Up</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleSignup} sx={{ mt: 2 }}>
                Sign Up
            </Button>
            <Typography mt={2}>
                Already have an account? <Button onClick={() => navigate('/login')}>Login</Button>
            </Typography>
        </Box>
    );
};

export default SignupPage;
