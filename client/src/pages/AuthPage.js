import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async () => {
        setError('');
        setSuccess('');
        try {
            const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';
            const response = await axios.post(endpoint, { email, password });

            setSuccess(isLogin ? 'Login Successful!' : 'Signup Successful!');
            localStorage.setItem('token', response.data.token); // Save token in localStorage
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <Box textAlign="center" mt={5} px={2}>
            <Typography variant="h4" gutterBottom>
                {isLogin ? 'Login' : 'Sign Up'}
            </Typography>
            <Box mt={3} maxWidth="400px" mx="auto">
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSubmit}
                >
                    {isLogin ? 'Login' : 'Sign Up'}
                </Button>
                <Button
                    variant="text"
                    color="secondary"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
                </Button>
                {error && <Typography color="error" mt={2}>{error}</Typography>}
                {success && <Typography color="primary" mt={2}>{success}</Typography>}
            </Box>
        </Box>
    );
};

export default AuthPage;
