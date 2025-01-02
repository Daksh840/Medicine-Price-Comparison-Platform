import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            // Save token or user info in localStorage
            localStorage.setItem('token', response.data.token);
            navigate('/profile'); // Redirect to profile page
        } catch (err) {
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <Box textAlign="center" mt={5} px={2} maxWidth="400px" mx="auto">
            <Typography variant="h4" gutterBottom>Login</Typography>
            {error && <Typography color="error">{error}</Typography>}
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
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin} sx={{ mt: 2 }}>
                Login
            </Button>
            <Typography mt={2}>
                Don't have an account? <Button onClick={() => navigate('/signup')}>Sign Up</Button>
            </Typography>
        </Box>
    );
};

export default LoginPage;
